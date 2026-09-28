import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle.js';

export default function About() {
  usePageTitle('About — Build to Better Tech');

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker mono" style={{ color: 'var(--copper-light)' }}>WHO WE ARE</span>
          <h1>Founded on domain depth, not generalist tooling</h1>
          <p>Build to Better Tech Private Limited — currently completing incorporation — is built by two co-founders with direct, production experience across the systems we advise on.</p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="on-navy">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker mono">WHAT WE BUILD</span>
            <h2>Capabilities, not just headcount</h2>
            <p>Build to Better Tech designs, develops, tests, and operates software products and technology-enabled solutions, and undertakes training, research, and innovation in AI, machine learning, data science, analytics, automation, and cloud computing.</p>
          </div>
          <div className="pillars pillars-4">
            <div className="pillar">
              <span className="tag mono">SOFTWARE DEVELOPMENT</span>
              <h3>Applications built end to end</h3>
              <p>Web and mobile applications, enterprise software, and cloud-based SaaS products.</p>
              <Link to="/services#software">See software development</Link>
            </div>
            <div className="pillar">
              <span className="tag mono">AI & MACHINE LEARNING</span>
              <h3>AI that fits your workflow</h3>
              <p>LLM integrations, chatbots, and AI-assisted tooling — including a chatbot in build for a client's website.</p>
              <Link to="/services#ai">See AI & ML</Link>
            </div>
            <div className="pillar">
              <span className="tag mono">DATA & ANALYTICS</span>
              <h3>Data you can trust</h3>
              <p>Data engineering, modernisation, MIS automation, and independent migration assurance on GCP, AWS, Azure, Databricks, PySpark, and Airflow.</p>
              <Link to="/services#data">See data & analytics</Link>
            </div>
            <div className="pillar">
              <span className="tag mono">CLOUD & AUTOMATION</span>
              <h3>Take the manual work out</h3>
              <p>Cloud-based solutions and automation for reporting, reconciliation, and operations.</p>
              <Link to="/services#cloud">See cloud & automation</Link>
            </div>
            <div className="pillar">
              <span className="tag mono">QA & TESTING</span>
              <h3>Independent testing</h3>
              <p>Test strategy, execution, and defect tracking, plus our own tool, TestSphere.</p>
              <Link to="/services#testing">See QA & testing</Link>
            </div>
            <div className="pillar">
              <span className="tag mono">CONSULTING</span>
              <h3>Advice before you commit</h3>
              <p>Independent advisory on software, data, and QA, including IWMS platforms.</p>
              <Link to="/services#consulting">See consulting</Link>
            </div>
            <div className="pillar">
              <span className="tag mono">ACADEMY & RESEARCH</span>
              <h3>Train the people who run it</h3>
              <p>A live data engineering program today, with a testing track in planning.</p>
              <Link to="/academy">See the academy</Link>
            </div>
            <div className="pillar pillar-cta">
              <h3>Not sure which fits?</h3>
              <Link to="/contact">Tell us what you're working with</Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="team team-2">
            <div className="member">
              <h3>Ketan Kapsikar</h3>
              <span className="role mono">CO-FOUNDER — AI-AUGMENTED QA</span>
              <p>16+ years in quality assurance, complemented by business analysis and project leadership. Now focused on AI-augmented QA: using LLMs to turn requirements into test scenarios and test cases, and to track defects and execution cycles — the approach behind TestSphere. The aim is simple: what gets built is tested, reliable, and fit for purpose.</p>
            </div>
            <div className="member">
              <h3>Prasad Kokate</h3>
              <span className="role mono">CO-FOUNDER — TECHNICAL ARCHITECT</span>
              <p>Senior Data Engineer with production experience across GCP, AWS, Azure, Databricks, PySpark, and Airflow. CSPO-certified.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
