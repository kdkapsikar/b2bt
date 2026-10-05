import usePageTitle from '../hooks/usePageTitle.js';
import { openBot } from '../bot/openBot.js';

export default function Academy() {
  usePageTitle('Academy — Bring2Better Tech');

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker mono" style={{ color: 'var(--accent)' }}>TRAINING</span>
          <h1>Bring2Better Tech <span className="accent">Academy</span></h1>
          <p>Our first live programme is data engineering — SQL, Python, Git, Hadoop, Spark, and cloud platforms — taught by experienced professionals. Additional tracks will be introduced as the Academy grows.</p>
        </div>
      </section>

      <section className="on-alt" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker mono">CURRENT PROGRAMME</span>
            <h2>Data Engineering</h2>
            <p>SQL, Python, Git, Hadoop, Spark, and cloud platforms — a curriculum designed to prepare participants for professional roles, taught by experienced professionals.</p>
          </div>
          <button type="button" className="btn btn-primary" onClick={() => openBot('Get the syllabus', 'syllabus')}>Get the syllabus</button>
        </div>
      </section>

      <section className="on-alt" style={{ borderTop: '1px solid var(--line-soft)' }}>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker mono">NEXT TRACK — OPENING SOON</span>
            <h2>Testing & QA Automation</h2>
            <p>A second track focused on software testing and QA automation. Register your interest to receive details when the track opens.</p>
          </div>
          <button type="button" className="btn btn-primary" onClick={() => openBot('Register interest', 'register interest')}>Register interest</button>
        </div>
      </section>
    </>
  );
}
