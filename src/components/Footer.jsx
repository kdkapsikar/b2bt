import { useLayoutEffect, useRef } from 'react';
import Icon from './Icons.jsx';
import { ACADEMY_EMAIL, ADDRESS, CONTACT_EMAIL, CONTACT_PHONES, SOCIALS } from '../config.js';

export default function Footer() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const root = document.documentElement;
    const update = () => root.style.setProperty('--footer-h', `${el.offsetHeight}px`);
    update();
    if (!('ResizeObserver' in window)) return undefined;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <footer className="site-footer" ref={ref}>
      <div className="wrap footer-main">
        <ul className="footer-contacts">
          <li>
            <a href={`mailto:${CONTACT_EMAIL}`} aria-label={`Email ${CONTACT_EMAIL}`}>
              <Icon name="mail" />
              <span className="ft">{CONTACT_EMAIL}</span>
            </a>
          </li>
          <li className="footer-extra">
            <a href={`mailto:${ACADEMY_EMAIL}`} aria-label={`Email ${ACADEMY_EMAIL}`}>
              <Icon name="mail" />
              <span className="ft">{ACADEMY_EMAIL}</span>
            </a>
          </li>
          <li>
            <a className="icon-link" href={`tel:${CONTACT_PHONES[0].replace(/\s/g, '')}`} aria-label={`Call ${CONTACT_PHONES[0]}`}>
              <Icon name="phone" />
            </a>
            <span className="ft">
              {CONTACT_PHONES.map((n, i) => (
                <span key={n}>
                  {i > 0 && ' / '}
                  <a href={`tel:${n.replace(/\s/g, '')}`}>{n}</a>
                </span>
              ))}
            </span>
          </li>
        </ul>
        <ul className="footer-social">
          {SOCIALS.map((s) => (
            <li key={s.name}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} title={s.name}>
                <Icon name={s.icon} size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="wrap footer-sub">
        <span className="footer-address">
          <Icon name="pin" size={14} />
          <span>{ADDRESS}</span>
        </span>
        <span className="footer-copy">© 2026 Bring2Better Tech</span>
      </div>
    </footer>
  );
}
