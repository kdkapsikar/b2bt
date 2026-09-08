import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle.js';

export default function About() {
  usePageTitle('About — Bridge to Better Tech');

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker mono" style={{ color: 'var(--copper-light)' }}>WHO WE ARE</span>
          <h1>Founded on domain depth, not generalist tooling</h1>
          <p>Bridge to Better Tech Private Limited — currently completing incorporation — is built by three founders with direct, production experience across the systems we advise on.</p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="on-navy">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker mono">WHAT WE BUILD</span>
            <h2>Capabilities, not just headcount</h2>
            <p>Before the bios — here's the range of work behind them, backed by real client engagements and our own products.</p>
          </div>
          <div className="pillars">
            <div className="pillar">
              <span className="tag mono">MIGRATION ASSURANCE</span>
              <h3>Independent migration validation</h3>
              <p>QA-grade, record-level validation layered on top of the actual migration work.</p>
              <Link to="/services">See the framework</Link>
            </div>
            <div className="pillar">
              <span className="tag mono">MIS AUTOMATION</span>
              <h3>Reporting you can trust</h3>
              <p>Fixed-scope sprints automating manual reporting and reconciliation work.</p>
              <Link to="/services">See how it works</Link>
            </div>
            <div className="pillar">
              <span className="tag mono">CUSTOM SOFTWARE DEVELOPMENT</span>
              <h3>End-to-end builds</h3>
              <p>Full applications from requirements to a live system — or QA and engineering capacity on their own.</p>
              <Link to="/products">See what we've built</Link>
            </div>
            <div className="pillar">
              <span className="tag mono">AI INTEGRATION</span>
              <h3>LLM-powered tooling</h3>
              <p>Integrating AI into existing products and workflows — including a chatbot currently in development for a client's website.</p>
              <Link to="/contact">Ask about a build</Link>
            </div>
            <div className="pillar">
              <span className="tag mono">DATA ENGINEERING & CLOUD</span>
              <h3>Production cloud experience</h3>
              <p>GCP, AWS, Azure, Databricks, PySpark, and Airflow — run daily on active client work, not just on paper.</p>
              <Link to="/products">See what we've built</Link>
            </div>
            <div className="pillar">
              <span className="tag mono">TRAINING</span>
              <h3>Bridge to Better Tech Academy</h3>
              <p>A live data engineering program today, with a testing & QA automation track in planning.</p>
              <Link to="/academy">See the academy</Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="team">
            <div className="member">
              <h3>Ketan</h3>
              <span className="role mono">CO-FOUNDER — DOMAIN & DELIVERY</span>
              <p>16+ years in QA, BA, and PM leadership, with deep specialization in IWMS platforms — TRIRIGA, Maximo, Archibus, Corrigo — built through enterprise engagements including JLL and ValuD.</p>
            </div>
            <div className="member">
              <h3>Prasad Kokate</h3>
              <span className="role mono">CO-FOUNDER — TECHNICAL ARCHITECT</span>
              <p>Senior Data Engineer with production experience across GCP, AWS, Azure, Databricks, PySpark, and Airflow. CSPO-certified.</p>
            </div>
            <div className="member">
              <h3>Atharva Patil</h3>
              <span className="role mono">CO-FOUNDER — DATA ENGINEERING</span>
              <p>Data Engineer with hands-on experience across the same modern cloud and pipeline stack, focused on execution and delivery support.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
