import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta.js';

export default function NotFound() {
  usePageMeta(null);

  return (
    <section className="page-hero">
      <div className="wrap">
        <span className="kicker mono" style={{ color: 'var(--accent)' }}>ERROR 404</span>
        <h1>Page <span className="accent">not found</span></h1>
        <p>The page you requested could not be found. It may have been moved, or the address may be incorrect.</p>
        <div className="cta-row" style={{ marginTop: 24 }}>
          <Link to="/" className="btn btn-primary">Return to the home page</Link>
          <Link to="/contact" className="btn btn-ghost">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
