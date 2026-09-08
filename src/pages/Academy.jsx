import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle.js';

export default function Academy() {
  usePageTitle('Academy — Bridge to Better Tech');

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker mono" style={{ color: 'var(--copper-light)' }}>TRAINING</span>
          <h1>Bridge to Better Tech Academy</h1>
          <p>Our first live program is data engineering — SQL, Python, Git, Hadoop, Spark, and cloud platforms — taught by engineers who use these tools on active client work. More tracks are in the works as the academy grows.</p>
        </div>
      </section>

      <section className="on-navy" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker mono">CURRENT PROGRAM</span>
            <h2>Data Engineering</h2>
            <p>SQL, Python, Git, Hadoop, Spark, and cloud platforms — a job-ready curriculum taught by the same engineers running our client delivery work.</p>
          </div>
          <Link to="/contact" className="btn btn-primary">Get the syllabus</Link>
        </div>
      </section>

      <section className="on-navy" style={{ borderTop: '1px solid var(--line-soft)' }}>
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <span className="kicker mono">NEXT TRACK — IN PLANNING</span>
            <h2>Testing & QA Automation</h2>
            <p>A second track focused on software testing and QA automation. Curriculum is still being drafted — register your interest and we'll share details as the syllabus comes together.</p>
          </div>
        </div>
      </section>
    </>
  );
}
