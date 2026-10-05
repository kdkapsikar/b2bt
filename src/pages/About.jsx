import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle.js';

export default function About() {
  usePageTitle('About — Bring2Better Tech');

  return (
    <>
      <section className="page-hero page-hero-compact">
        <div className="wrap">
          <span className="kicker mono">WHO WE ARE</span>
          <h1>Founded on domain depth, <span className="accent">not generalist tooling</span></h1>
          <p>Bring2Better Tech brings practical, production experience to the software, data, and AI systems we build and advise on, from first requirement to day-to-day operation.</p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="on-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker mono">WHAT WE BUILD</span>
            <h2>Our capabilities</h2>
            <p>Bring2Better Tech designs, develops, tests, and operates software products and technology-enabled solutions, and undertakes training, research, and innovation in AI, machine learning, data science, analytics, automation, and cloud computing.</p>
          </div>
          <div className="pillars pillars-4">
            <div className="pillar">
              <span className="tag mono">SOFTWARE DEVELOPMENT</span>
              <h3>End-to-end application development</h3>
              <p>Web and mobile applications, enterprise software, and cloud-based SaaS products.</p>
              <Link to="/services#software">View software development</Link>
            </div>
            <div className="pillar">
              <span className="tag mono">AI & MACHINE LEARNING</span>
              <h3>Practical AI for business workflows</h3>
              <p>LLM integrations, chatbots, and AI-assisted tooling — including a chatbot currently in development for a client's website.</p>
              <Link to="/services#ai">View AI & machine learning</Link>
            </div>
            <div className="pillar">
              <span className="tag mono">DATA & ANALYTICS</span>
              <h3>Reliable, validated data</h3>
              <p>Data engineering, modernisation, MIS automation, and independent migration assurance on GCP, AWS, Azure, Databricks, PySpark, and Airflow.</p>
              <Link to="/services#data">View data & analytics</Link>
            </div>
            <div className="pillar">
              <span className="tag mono">CLOUD & AUTOMATION</span>
              <h3>Automation of manual operations</h3>
              <p>Cloud-based solutions and automation for reporting, reconciliation, and operational processes.</p>
              <Link to="/services#cloud">View cloud & automation</Link>
            </div>
            <div className="pillar">
              <span className="tag mono">QA & TESTING</span>
              <h3>Independent testing</h3>
              <p>Test strategy, execution, and defect tracking, plus our own tool, TestSphere.</p>
              <Link to="/services#testing">View QA & testing</Link>
            </div>
            <div className="pillar">
              <span className="tag mono">CONSULTING</span>
              <h3>Independent advisory</h3>
              <p>Independent advisory on software, data, and QA, including IWMS platforms.</p>
              <Link to="/services#consulting">View consulting</Link>
            </div>
            <div className="pillar">
              <span className="tag mono">ACADEMY & RESEARCH</span>
              <h3>Professional training and research</h3>
              <p>A live data engineering programme today, with a testing track in planning.</p>
              <Link to="/academy">View the Academy</Link>
            </div>
            <div className="pillar pillar-cta">
              <h3>Need guidance on the right service?</h3>
              <Link to="/contact">Contact us to discuss your requirements</Link>
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
              <p>More than 16 years in quality assurance, complemented by business analysis and project leadership. Now focused on AI-augmented QA: using LLMs to convert requirements into test scenarios and test cases, and to track defects and execution cycles, the approach behind TestSphere. The objective is to ensure that what is built is tested, reliable, and fit for purpose.</p>
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
