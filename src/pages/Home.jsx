import { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle.js';

const pillars = [
  { id: 'software', tag: 'SOFTWARE DEVELOPMENT', title: 'Applications built end to end', body: 'Web and mobile applications, enterprise software, and cloud-based SaaS products — from requirements to a live system.', to: '/services#software', link: 'See software development' },
  { id: 'ai', tag: 'AI & MACHINE LEARNING', title: 'AI that fits your workflow', body: 'LLM integrations, chatbots, and AI-assisted tooling, plus machine learning and data science work.', to: '/services#ai', link: 'See AI & ML' },
  { id: 'data', tag: 'DATA & ANALYTICS', title: 'Data you can trust', body: 'Data engineering, modernisation, MIS automation, and migration assurance with independent, QA-grade validation.', to: '/services#data', link: 'See data & analytics' },
  { id: 'cloud', tag: 'CLOUD & AUTOMATION', title: 'Take the manual work out', body: "Cloud-based solutions and automation for the reporting, reconciliation, and operational work eating your team's week.", to: '/services#cloud', link: 'See cloud & automation' },
  { id: 'testing', tag: 'QA & TESTING', title: 'Independent testing', body: 'Test strategy, execution, and defect tracking — on your build or ours, backed by 16+ years of QA leadership.', to: '/services#testing', link: 'See QA & testing' },
  { id: 'consulting', tag: 'CONSULTING', title: 'Advice before you commit', body: 'Independent advisory on software, data, and QA, including IWMS platforms.', to: '/services#consulting', link: 'See consulting' },
  { id: 'academy', tag: 'ACADEMY & RESEARCH', title: 'Train the people who run it', body: 'Live training in data engineering today, with testing in planning — alongside our own product research and development.', to: '/academy', link: 'See the academy' },
];

export default function Home() {
  const [openId, setOpenId] = useState(null);
  usePageTitle('Build to Better Tech — Software, Data & AI Solutions');

  return (
    <>
      {/* HERO */}
      <section className="hero" style={{ paddingTop: 56 }}>
        <div className="wrap hero-grid">
          <div>
            <div className="hero-eyebrow-line"><span className="rule"></span><span>SOFTWARE, DATA & AI</span></div>
            <h1 className="hero-title">Software, data, and AI — built and run end to end.</h1>
            <p className="sub">Build to Better Tech designs, builds, tests, and operates software products, data platforms, and AI solutions for businesses, institutions, and organizations — and trains the people who run them.</p>
            <div className="cta-row">
              <Link to="/contact" className="btn btn-primary">Talk to us about a project</Link>
              <Link to="/services" className="btn btn-ghost">See our services</Link>
            </div>
          </div>
          <div className="diagram">
            <span className="diagram-label mono">FIG. 01 — FROM IDEA TO OPERATION</span>
            <div className="stage-row">
              <div className="stage"><div className="dot">01</div><div className="name">Design</div></div>
              <div className="connector"></div>
              <div className="stage"><div className="dot">02</div><div className="name">Build</div></div>
              <div className="connector"></div>
              <div className="stage"><div className="dot">03</div><div className="name">Test</div></div>
              <div className="connector"></div>
              <div className="stage"><div className="dot">04</div><div className="name">Operate</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="on-navy">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker mono">WHAT WE DO</span>
            <h2>Seven ways we work with you</h2>
            <p>Domain-informed engineering, not generalist tooling — built from real experience running these systems in production.</p>
          </div>
          <div className="pillars pillars-4">
            {pillars.map((p) => {
              const open = openId === p.id;
              return (
                <div key={p.id} className={'pillar pillar-acc' + (open ? ' is-open' : '')}>
                  <h3>
                    <button
                      type="button"
                      id={`${p.id}-btn`}
                      aria-expanded={open}
                      aria-controls={`${p.id}-panel`}
                      onClick={() => setOpenId(open ? null : p.id)}
                    >
                      <span className="tag mono">{p.tag}</span>
                      <span className="pillar-title">{p.title}</span>
                      <span className="acc-icon" aria-hidden="true">{open ? '−' : '+'}</span>
                    </button>
                  </h3>
                  <div className="acc-panel" id={`${p.id}-panel`} role="region" aria-labelledby={`${p.id}-btn`}>
                    <div className="acc-inner">
                      <p>{p.body}</p>
                      <Link to={p.to}>{p.link}</Link>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="pillar pillar-cta">
              <h3>Not sure which fits?</h3>
              <Link to="/contact">Tell us what you're working with</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section>
        <div className="wrap whitepaper">
          <div>
            <span className="kicker mono">LET'S TALK</span>
            <h2 style={{ marginBottom: 18 }}>Tell us what you're working with</h2>
            <p style={{ color: '#4a5248', fontSize: '0.92rem' }}>A software build, an AI or data project, a testing engagement, or a cohort you'd like to enrol in — start the conversation.</p>
          </div>
          <div>
            <Link to="/contact" className="btn btn-primary">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
