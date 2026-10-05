import usePageTitle from '../hooks/usePageTitle.js';
import { products } from '../data/products.js';

export default function Products() {
  usePageTitle('Products — Bring2Better Tech');

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker mono" style={{ color: 'var(--accent)' }}>PORTFOLIO</span>
          <h1>Applications we have built <span className="accent">and are building</span></h1>
          <p>Our portfolio spans QA tooling, healthcare, real estate, education, retail, civic services, and AI.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <table className="products-table">
            <thead>
              <tr><th>Application</th><th>Built for</th><th>What it does</th></tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.key}>
                  <td data-label="Application" className="prod-name">{p.name}</td>
                  <td data-label="Built for" className="prod-sector">{p.sector}</td>
                  <td data-label="What it does">{p.what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
