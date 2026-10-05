import usePageTitle from '../hooks/usePageTitle.js';
import { openBot } from '../bot/openBot.js';
import Icon from '../components/Icons.jsx';
import { ACADEMY_EMAIL, ADDRESS, BOT_NAME, CONTACT_EMAIL, CONTACT_PHONES, SOCIALS } from '../config.js';

export default function Contact() {
  usePageTitle('Contact — Bring2Better Tech');

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker mono" style={{ color: 'var(--accent)' }}>GET IN TOUCH</span>
          <h1>Contact <span className="accent">our team</span></h1>
          <p>For software development, AI and data projects, testing engagements, or Academy enrolment, please contact us with details of your requirements.</p>
        </div>
      </section>

      <section className="on-alt">
        <div className="wrap contact-grid">
          <div>
            <div className="contact-item">
              <span className="k mono">GENERAL ENQUIRIES</span>
              <span className="v"><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></span>
            </div>
            <div className="contact-item">
              <span className="k mono">TRAINING</span>
              <span className="v"><a href={`mailto:${ACADEMY_EMAIL}`}>{ACADEMY_EMAIL}</a></span>
            </div>
            <div className="contact-item">
              <span className="k mono">PHONE</span>
              {CONTACT_PHONES.map((n) => (
                <span key={n} className="v" style={{ display: 'block' }}>
                  <a href={`tel:${n.replace(/\s/g, '')}`}>{n}</a>
                </span>
              ))}
            </div>
            <div className="contact-item">
              <span className="k mono">ADDRESS</span>
              <span className="v" style={{ maxWidth: '36ch', display: 'block' }}>{ADDRESS}</span>
            </div>
            <div className="contact-item">
              <span className="k mono">FOLLOW US</span>
              <span className="contact-social">
                {SOCIALS.map((s) => (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} title={s.name}>
                    <Icon name={s.icon} size={18} />
                  </a>
                ))}
              </span>
            </div>
          </div>
          <div className="contact-cta">
            <h3>Questions and project enquiries</h3>
            <p>Our virtual assistant can provide contact details and answer questions about our services, products, and Academy.</p>
            <button type="button" className="btn btn-primary" onClick={() => openBot('I would like to make an enquiry', 'enquiry')}>
              Chat with {BOT_NAME}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
