import usePageTitle from '../hooks/usePageTitle.js';
import { openBot } from '../bot/openBot.js';

export default function Academy() {
  usePageTitle('Academy — Build to Better Tech');

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker mono" style={{ color: 'var(--copper-light)' }}>TRAINING</span>
          <h1>Build to Better Tech <span className="accent">Academy</span></h1>
          <p>Our first live program is data engineering — SQL, Python, Git, Hadoop, Spark, and cloud platforms — taught by experienced professionals. More tracks are on the way as the academy grows.</p>
        </div>
      </section>

      <section className="on-navy" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker mono">CURRENT PROGRAM</span>
            <h2>Data Engineering</h2>
            <p>SQL, Python, Git, Hadoop, Spark, and cloud platforms — a job-ready curriculum taught by experienced professionals.</p>
          </div>
          <button type="button" className="btn btn-primary" onClick={() => openBot('Get the syllabus', 'syllabus')}>Get the syllabus</button>
        </div>
      </section>

      <section className="on-navy" style={{ borderTop: '1px solid var(--line-soft)' }}>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker mono">NEXT TRACK — COMING SOON</span>
            <h2>Testing & QA Automation</h2>
            <p>A second track focused on software testing and QA automation. Register your interest and we'll share details as the track opens.</p>
          </div>
          <button type="button" className="btn btn-primary" onClick={() => openBot('Register interest', 'register interest')}>Register interest</button>
        </div>
      </section>
    </>
  );
}
