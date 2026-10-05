import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle.js';

function Service({ id, dark, kicker, title, intro, items, links, open, onToggle }) {
  return (
    <section id={id} className={'svc-acc' + (dark ? ' on-alt' : '') + (open ? ' is-open' : '')}>
      <div className="wrap">
        <h2 className="svc-head">
          <button
            type="button"
            id={`${id}-btn`}
            aria-expanded={open}
            aria-controls={`${id}-panel`}
            onClick={onToggle}
          >
            <span>
              <span className="svc-kicker mono">{kicker}</span>
              <span className="svc-title">{title}</span>
            </span>
            <span className="acc-icon" aria-hidden="true">{open ? '−' : '+'}</span>
          </button>
        </h2>
        <div className="acc-panel" id={`${id}-panel`} role="region" aria-labelledby={`${id}-btn`}>
          <div className="acc-inner">
            <div className="svc-grid">
              <div>
                <p className="svc-intro">{intro}</p>
                <div className="svc-links">
                  {links.map((l) => (
                    <Link key={l.label} to={l.to} className="text-link">{l.label}</Link>
                  ))}
                </div>
              </div>
              <ul className="cap-list">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  usePageTitle('Services — Bring2Better Tech');

  const { hash } = useLocation();
  const [openId, setOpenId] = useState(hash.slice(1) || null);
  useEffect(() => {
    if (hash) setOpenId(hash.slice(1));
  }, [hash]);
  const toggle = (id) => setOpenId((cur) => (cur === id ? null : id));

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker mono" style={{ color: 'var(--accent)' }}>WHAT WE DO</span>
          <h1>Software, AI, data, and cloud <span className="accent">built, tested, and run end to end</span></h1>
          <p>Seven service lines delivered by one team, combining domain-informed engineering with production experience.</p>
        </div>
      </section>

      <Service
        id="software"
        open={openId === "software"}
        onToggle={() => toggle("software")}
        kicker="SOFTWARE DEVELOPMENT"
        title="End-to-end application development"
        intro="We design, develop, test, and operate software products for businesses, institutions, and other organisations, taking ownership of the full build rather than an isolated module."
        items={[
          'Web and mobile applications',
          'Enterprise software and internal tools',
          'Cloud-based software and SaaS platforms',
          'End-to-end delivery, or development-only capacity where you already maintain your own QA or project management function',
        ]}
        links={[
          { to: '/products', label: 'View applications we have built' },
          { to: '/contact', label: 'Enquire about a build' },
        ]}
      />

      <Service
        id="ai"
        open={openId === "ai"}
        onToggle={() => toggle("ai")}
        dark
        kicker="AI & MACHINE LEARNING"
        title="Practical AI for business workflows"
        intro="We integrate AI into existing products and customer-facing touchpoints, and build AI-assisted tools of our own. A chatbot for a client's website is currently in development."
        items={[
          'LLM integration and chatbots for websites and products',
          'AI-assisted tooling, including TestSphere, which generates test scenarios and test cases from requirements',
          'Machine learning and data science solutions',
          'Research and development on emerging technologies',
        ]}
        links={[
          { to: '/products', label: 'View TestSphere and the chatbot project' },
          { to: '/contact', label: 'Enquire about an AI project' },
        ]}
      />

      <Service
        id="data"
        open={openId === "data"}
        onToggle={() => toggle("data")}
        kicker="DATA & ANALYTICS"
        title="Reliable, validated data"
        intro="Production data engineering on GCP, AWS, Azure, Databricks, PySpark, and Airflow, with an independent validation step on migrations that is frequently omitted."
        items={[
          'Data engineering and pipelines',
          'Data modernisation and legacy-to-cloud migration',
          'Analytics and MIS reporting, including fixed-scope MIS automation sprints for non-IT-led businesses',
          'Migration Assurance: independent, record-level validation with a documented confidence score',
        ]}
        links={[
          { to: '/contact', label: 'Request a scoping call' },
          { to: '/academy', label: 'Explore our data engineering programme' },
        ]}
      />

      <Service
        id="cloud"
        open={openId === "cloud"}
        onToggle={() => toggle("cloud")}
        dark
        kicker="CLOUD & AUTOMATION"
        title="Automation of manual operations"
        intro="Cloud-based solutions and automation for recurring reporting, reconciliation, and operational work."
        items={[
          'Cloud computing solutions on GCP, AWS, and Azure',
          'Automation of manual reporting and reconciliation',
          'Workflow and process automation',
          'Operating and maintaining what we build',
        ]}
        links={[{ to: '/contact', label: 'Enquire about automation' }]}
      />

      <Service
        id="testing"
        open={openId === "testing"}
        onToggle={() => toggle("testing")}
        kicker="QA & TESTING"
        title="Independent testing"
        intro="Test strategy, execution, and defect tracking as a standalone engagement or as part of a build — supported by more than 16 years of QA leadership."
        items={[
          'Test strategy, planning, and execution',
          'Defect and execution-cycle tracking',
          'Independent validation of migrations and data',
          'TestSphere, our own tool that generates test scenarios and test cases from requirements',
        ]}
        links={[
          { to: '/products', label: 'See TestSphere' },
          { to: '/academy', label: 'Testing track at the Academy' },
        ]}
      />

      <Service
        id="consulting"
        open={openId === "consulting"}
        onToggle={() => toggle("consulting")}
        dark
        kicker="CONSULTING"
        title="Independent advisory"
        intro="Independent advisory on software, data, and QA, offered ahead of any decision on a build, a platform, or a migration."
        items={[
          'QA, business analysis, and project leadership advisory',
          'IWMS platform consulting',
          'Data and cloud platform advisory across GCP, AWS, Azure, and Databricks',
          'Migration planning and readiness reviews',
        ]}
        links={[{ to: '/contact', label: 'Request a consultation' }]}
      />

      <Service
        id="academy-research"
        kicker="ACADEMY & RESEARCH"
        title="Professional training and research"
        intro="Bring2Better Tech Academy currently runs a live data engineering programme, with a testing track in planning, alongside our own research and product development."
        items={[
          'Live data engineering programme: SQL, Python, Git, Hadoop, Spark, and cloud platforms',
          'Testing track in planning',
          'Product research and development in AI, machine learning, and data',
        ]}
        links={[{ to: '/academy', label: 'View the Academy' }]}
        open={openId === 'academy-research'}
        onToggle={() => toggle('academy-research')}
      />
    </>
  );
}
