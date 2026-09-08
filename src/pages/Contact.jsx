import { useState } from 'react';
import usePageTitle from '../hooks/usePageTitle.js';

export default function Contact() {
  usePageTitle('Contact — Bridge to Better Tech');

  const [inquirySent, setInquirySent] = useState(false);

  function handleInquirySubmit(e) {
    e.preventDefault();
    setInquirySent(true);
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker mono" style={{ color: 'var(--copper-light)' }}>GET IN TOUCH</span>
          <h1>Talk to the team</h1>
          <p>Whether it's a migration you're worried about, an MIS report nobody trusts, a custom build, or a cohort you'd like to enrol in — tell us what you're working with.</p>
        </div>
      </section>

      <section className="on-navy">
        <div className="wrap contact-grid">
          <div>
            <div className="contact-item">
              <span className="k mono">EMAIL</span>
              <span className="v"><a href="mailto:bridgetobetter@bridgetobettertech.tech">bridgetobetter@bridgetobettertech.tech</a></span>
            </div>
            <div className="contact-item">
              <span className="k mono">PHONE</span>
              <span className="v">+91 94237 02602</span>
            </div>
            <div className="contact-item">
              <span className="k mono">STATUS</span>
              <span className="v" style={{ color: 'var(--muted)', fontSize: '0.92rem' }}>Bridge to Better Tech Private Limited — incorporation in progress.</span>
            </div>
          </div>
          <div>
            <h3 style={{ marginBottom: 16, color: 'var(--cream-text)' }}>Service inquiry</h3>
            <form className="wp-form" onSubmit={handleInquirySubmit}>
              <label htmlFor="inq-name">Name</label>
              <input id="inq-name" type="text" required placeholder="Full name" />
              <label htmlFor="inq-email">Work email</label>
              <input id="inq-email" type="email" required placeholder="you@company.com" />
              <label htmlFor="inq-message">What are you working with?</label>
              <textarea id="inq-message" required placeholder="Tell us about your migration, MIS reporting, custom build, or Academy interest"></textarea>
              {inquirySent && <p className="form-note">Thanks — someone from the team will get back to you shortly.</p>}
              <button className="btn btn-primary" type="submit" style={{ width: '100%' }}>Send inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
