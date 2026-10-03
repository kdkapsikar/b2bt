import usePageTitle from '../hooks/usePageTitle.js';
import { openBot } from '../bot/openBot.js';
import { BOT_NAME, CONTACT_EMAIL, CONTACT_PHONE } from '../config.js';

export default function Contact() {
  usePageTitle('Contact — Bring2Better Tech');

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker mono" style={{ color: 'var(--accent)' }}>GET IN TOUCH</span>
          <h1>Talk to <span className="accent">the team</span></h1>
          <p>Whether it's a software build, an AI or data project, a testing engagement, or a cohort you'd like to enrol in — tell us what you're working with.</p>
        </div>
      </section>

      <section className="on-alt">
        <div className="wrap contact-grid">
          <div>
            <div className="contact-item">
              <span className="k mono">EMAIL</span>
              <span className="v"><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></span>
            </div>
            <div className="contact-item">
              <span className="k mono">PHONE</span>
              <span className="v">{CONTACT_PHONE}</span>
            </div>
          </div>
          <div className="contact-cta">
            <h3>Have a question or a project in mind?</h3>
            <p>Our assistant can share how to reach the team and answer questions about our services, products, and Academy.</p>
            <button type="button" className="btn btn-primary" onClick={() => openBot("I'd like to make an enquiry", 'enquiry')}>
              Chat with {BOT_NAME}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
