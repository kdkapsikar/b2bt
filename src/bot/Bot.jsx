import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import BotCharacter from './BotCharacter.jsx';
import { WELCOME, respond, chipToQuery } from './knowledge.js';
import { BOT_NAME } from '../config.js';
import { BOT_EVENT } from './openBot.js';
import './bot.css';

const TEASER_KEY = 'b2bt-bot-teaser';

function Links({ links }) {
  if (!links?.length) return null;
  return (
    <div className="bot-links">
      {links.map((l) =>
        l.to ? (
          <Link key={l.label} to={l.to} className="bot-link">{l.label}</Link>
        ) : (
          <a key={l.label} href={l.href} className="bot-link">{l.label}</a>
        )
      )}
    </div>
  );
}

export default function Bot() {
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [messages, setMessages] = useState([]);
  const [chips, setChips] = useState([]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState('');
  const logRef = useRef(null);
  const inputRef = useRef(null);
  const launcherRef = useRef(null);
  const timers = useRef([]);
  const sendRef = useRef(null);

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem(TEASER_KEY) === '1'; } catch { /* storage unavailable */ }
    if (seen) return undefined;
    const t = setTimeout(() => setTeaser(true), 2500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  useEffect(() => {
    if (!open) return;
    setMessages((m) => (m.length ? m : [{ from: 'bot', text: WELCOME.text }]));
    setChips((c) => (c.length ? c : WELCOME.chips));
    // Only steal focus when the panel opens — not on every reply, or it
    // reopens the on-screen keyboard while someone is tapping a chip/link.
    inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    // Lock both <html> and <body> — the scrolling element is the <html>
    // root in standards mode, so locking body alone leaves the page
    // scrollable behind the panel.
    const { body } = document;
    const html = document.documentElement;
    const prevBodyOverflow = body.style.overflow;
    const prevHtmlOverflow = html.style.overflow;
    body.style.overflow = 'hidden';
    html.style.overflow = 'hidden';
    return () => {
      body.style.overflow = prevBodyOverflow;
      html.style.overflow = prevHtmlOverflow;
    };
  }, [open]);

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing, chips]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        launcherRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  function dismissTeaser() {
    setTeaser(false);
    try { sessionStorage.setItem(TEASER_KEY, '1'); } catch { /* storage unavailable */ }
  }

  function toggle() {
    dismissTeaser();
    setOpen((o) => !o);
  }

  function send(label, query = label) {
    const text = label.trim();
    if (!text || typing) return;
    setMessages((m) => [...(m.length ? m : [{ from: 'bot', text: WELCOME.text }]), { from: 'user', text }]);
    setChips([]);
    setInput('');
    setTyping(true);
    const reply = respond(query);
    const t = setTimeout(() => {
      setMessages((m) => [...m, { from: 'bot', text: reply.text, links: reply.links }]);
      setChips(reply.chips ?? []);
      setTyping(false);
    }, 550);
    timers.current.push(t);
  }

  sendRef.current = send;

  useEffect(() => {
    const onOpen = (e) => {
      dismissTeaser();
      setOpen(true);
      const { label, query } = e.detail || {};
      if (label) sendRef.current(label, query);
    };
    window.addEventListener(BOT_EVENT, onOpen);
    return () => window.removeEventListener(BOT_EVENT, onOpen);
  }, []);

  return (
    <>
      {open && (
        <div className="bot-panel" role="dialog" aria-label={`Chat with ${BOT_NAME}`}>
          <div className="bot-head">
            <BotCharacter size={40} tracking={false} />
            <div className="bot-head-text">
              <strong>{BOT_NAME}</strong>
              <span className="mono">Ask about Bring2Better Tech</span>
            </div>
            <button type="button" className="bot-close" onClick={toggle} aria-label="Close chat">×</button>
          </div>

          <div className="bot-log" ref={logRef} role="log" aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`bot-msg bot-msg-${m.from}`}>
                <p>{m.text}</p>
                <Links links={m.links} />
              </div>
            ))}
            {typing && (
              <div className="bot-msg bot-msg-bot bot-typing" aria-label={`${BOT_NAME} is typing`}>
                <span /><span /><span />
              </div>
            )}
            {!typing && chips.length > 0 && (
              <div className="bot-chips">
                {chips.map((c) => (
                  <button key={c} type="button" className="bot-chip" onClick={() => send(c, chipToQuery(c))}>{c}</button>
                ))}
              </div>
            )}
          </div>

          <form className="bot-form" onSubmit={(e) => { e.preventDefault(); send(input); }}>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our services…"
              aria-label="Your message"
              maxLength={200}
            />
            <button type="submit" className="btn btn-primary" disabled={!input.trim() || typing}>Send</button>
          </form>
        </div>
      )}

      {teaser && !open && (
        <div className="bot-teaser">
          <button type="button" className="bot-teaser-x" onClick={dismissTeaser} aria-label="Dismiss">×</button>
          <button type="button" className="bot-teaser-text" onClick={toggle}>
            Hi, I'm {BOT_NAME}. Ask me about our services.
          </button>
        </div>
      )}

      <button
        ref={launcherRef}
        type="button"
        className="bot-launcher"
        onClick={toggle}
        aria-label={open ? `Close chat with ${BOT_NAME}` : `Open chat with ${BOT_NAME}`}
        aria-expanded={open}
      >
        <BotCharacter waving={teaser && !open} />
      </button>
    </>
  );
}
