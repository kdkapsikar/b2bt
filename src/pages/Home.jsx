import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle.js';

export default function Home() {
  usePageTitle('Bridge to Better Tech — Migration Assurance & Data Engineering');

  return (
    <>
      {/* HERO */}
      <section className="hero" style={{ paddingTop: 56 }}>
        <div className="wrap hero-grid">
          <div>
            <div className="hero-eyebrow-line"><span className="rule"></span><span>DATA MIGRATION ASSURANCE</span></div>
            <h1 className="hero-title">For businesses that can't afford to guess whether their data arrived correctly.</h1>
            <p className="sub">Bridge to Better Tech pairs hands-on data engineering with independent, QA-grade validation — so migration confidence is demonstrated with evidence, not assumed on faith.</p>
            <div className="cta-row">
              <Link to="/contact" className="btn btn-primary">Talk to us about a migration</Link>
              <Link to="/services" className="btn btn-ghost">See our services</Link>
            </div>
          </div>
          <div className="diagram">
            <span className="diagram-label mono">FIG. 01 — THE ASSURANCE PATH</span>
            <div className="stage-row">
              <div className="stage"><div className="dot">01</div><div className="name">Map</div></div>
              <div className="connector"></div>
              <div className="stage"><div className="dot">02</div><div className="name">Cleanse</div></div>
              <div className="connector"></div>
              <div className="stage"><div className="dot">03</div><div className="name">Migrate</div></div>
              <div className="connector"></div>
              <div className="stage"><div className="dot">04</div><div className="name">Assure</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES / THREE PILLARS */}
      <section id="services" className="on-navy">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker mono">WHAT WE DO</span>
            <h2>Three ways we work with you</h2>
            <p>Domain-informed engineering, not generalist tooling — built from real experience running these systems in production.</p>
          </div>
          <div className="pillars">
            <div className="pillar">
              <span className="tag mono">MIGRATION ASSURANCE</span>
              <h3>De-risk your next migration</h3>
              <p>For teams moving off a legacy database, IWMS, or ERP who need independent proof the data arrived correctly — not just a vendor's word for it.</p>
              <Link to="/services">See how it works</Link>
            </div>
            <div className="pillar">
              <span className="tag mono">MIS AUTOMATION SPRINTS</span>
              <h3>Fix the reports nobody trusts</h3>
              <p>Short, fixed-scope sprints that automate the manual reporting and reconciliation work eating your team's week.</p>
              <Link to="/services">Ask about a sprint</Link>
            </div>
            <div className="pillar">
              <span className="tag mono">BRIDGE TO BETTER TECH ACADEMY</span>
              <h3>Train your next data engineers</h3>
              <p>Our live training arm teaches SQL, Python, and cloud data engineering to job-ready standard — the same skills our own team uses daily.</p>
              <Link to="/academy">See the academy</Link>
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
            <p style={{ color: '#4a5248', fontSize: '0.92rem' }}>Whether it's a migration you're worried about, an MIS report nobody trusts, a custom build, or a cohort you'd like to enrol in — start the conversation.</p>
          </div>
          <div>
            <Link to="/contact" className="btn btn-primary">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
