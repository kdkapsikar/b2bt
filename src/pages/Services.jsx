import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle.js';

export default function Services() {
  usePageTitle('Services — Bridge to Better Tech');

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker mono" style={{ color: 'var(--copper-light)' }}>WHAT WE DO</span>
          <h1>Migration assurance, MIS automation, and full-cycle software delivery</h1>
          <p>Domain-informed engineering, not generalist tooling — built from real experience running these systems in production, and proven on the applications we've shipped ourselves.</p>
        </div>
      </section>

      <section style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker mono">THE FRAMEWORK</span>
            <h2>Migration Assurance</h2>
            <p>The four-stage framework we run on every migration, with an independent validation step layered on top.</p>
          </div>
        </div>
      </section>

      {/* FRAMEWORK DETAIL */}
      <section className="on-navy" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="framework">
          <div className="fw-step">
            <span className="fw-num mono">01 / MAP</span>
            <h4>Structured source-to-target mapping</h4>
            <p>Every field mapping reviewed and signed off before a single record moves.</p>
          </div>
          <div className="fw-step">
            <span className="fw-num mono">02 / CLEANSE</span>
            <h4>Pre-migration data quality scan</h4>
            <p>Duplicates, blanks, and inconsistent formats flagged while they're still cheap to fix.</p>
          </div>
          <div className="fw-step">
            <span className="fw-num mono">03 / MIGRATE</span>
            <h4>Staged, reversible cutover</h4>
            <p>Migration runs in stages, each with a checkpoint — never a single high-stakes leap.</p>
          </div>
          <div className="fw-step">
            <span className="fw-num mono">04 / ASSURE</span>
            <h4>Independent, record-level validation</h4>
            <p>A distinct team reconciles source and target with a documented confidence score.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="service-detail">
            <div className="block">
              <span className="tag mono">MIGRATION ASSURANCE</span>
              <h3>De-risk your next migration</h3>
              <p>For teams moving off a legacy database, IWMS, or ERP who need independent proof the data arrived correctly — not just a vendor's word for it. The differentiator is independent, QA-grade validation layered on top of the actual migration work — a step most competitors skip.</p>
              <Link to="/contact" className="btn btn-primary">Request a scoping call</Link>
            </div>
            <div className="block">
              <span className="tag mono">MIS AUTOMATION SPRINTS</span>
              <h3>Fix the reports nobody trusts</h3>
              <p>Short, fixed-scope sprints that automate the manual reporting and reconciliation work eating your team's week — built for non-IT-led businesses, not just IT departments.</p>
              <Link to="/contact" className="btn btn-primary">Ask about a sprint</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM SOFTWARE DEVELOPMENT */}
      <section className="on-navy">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker mono">BEYOND MIGRATION & MIS</span>
            <h2>Custom software development</h2>
            <p>Beyond migration and reporting, we build and test full applications end to end — engage us for the whole build, testing alone, or engineering capacity only. Every capability below is backed by a system we've actually shipped, listed on our <Link to="/products" style={{ color: 'var(--copper-light)' }}>products page</Link>.</p>
          </div>
          <div className="pillars pillars-4">
            <div className="pillar">
              <span className="tag mono">END-TO-END DEVELOPMENT</span>
              <h3>Requirements through to a live system</h3>
              <p>We take ownership of the full build — not an isolated module handed off mid-way. Our Hospital Management System (live at Sahane Ayurvedalaya) and Quick Commerce Platform (live at Sharanya Collection) were both built this way, start to finish.</p>
              <Link to="/products">View these in Products</Link>
            </div>
            <div className="pillar">
              <span className="tag mono">QA & TESTING SERVICES</span>
              <h3>Independent testing, on its own</h3>
              <p>Test strategy, execution, and defect tracking as a standalone engagement — grounded in 16+ years of QA leadership, and in TestSphere, our own tool for generating test scenarios from requirements and tracking defects through the cycle.</p>
              <Link to="/products">See TestSphere</Link>
            </div>
            <div className="pillar">
              <span className="tag mono">AI INTEGRATION & CHATBOTS</span>
              <h3>Add AI where it earns its keep</h3>
              <p>Integrating LLM-powered features into existing products and customer-facing touchpoints — currently building a chatbot for a client's website.</p>
              <Link to="/products">See it in Products</Link>
            </div>
            <div className="pillar">
              <span className="tag mono">DEVELOPMENT-ONLY ENGAGEMENTS</span>
              <h3>Just the engineering capacity</h3>
              <p>Already have your own QA or PM function? We can plug in as pure build capacity — the same GCP, AWS, Azure, Databricks, PySpark, and Airflow stack behind our own products, without bundling services you don't need.</p>
              <Link to="/contact">Ask about capacity</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
