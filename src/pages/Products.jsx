import usePageTitle from '../hooks/usePageTitle.js';

export default function Products() {
  usePageTitle('Products — Bridge to Better Tech');

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker mono" style={{ color: 'var(--copper-light)' }}>FROM THE WORKSHOP</span>
          <h1>Applications we've built and are building</h1>
          <p>Real client work, at real stages — trading tools, hospital ops, real estate, retail. Not everything we build is a data pipeline, and that's by design.</p>
          <div className="chip-row">
            <span className="chip-label mono">BUILT ON</span>
            <span className="chip">DATA ENGINEERING</span>
            <span className="chip">DATA MODERNISATION</span>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <table className="products-table">
            <thead>
              <tr><th>Application</th><th>What it does</th><th>Stage</th></tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Application" className="prod-name">VolleyTrade</td>
                <td data-label="What it does">Executes bulk trades on a CoinSwitch account via API.</td>
                <td data-label="Stage"><span className="status status-pilot">Pilot — 3 months data</span></td>
              </tr>
              <tr>
                <td data-label="Application" className="prod-name">TestSphere</td>
                <td data-label="What it does">Uses LLM APIs to generate test scenarios and test cases from requirements, and tracks defects through the execution cycle.</td>
                <td data-label="Stage"><span className="status status-ready">Ready to demo</span></td>
              </tr>
              <tr>
                <td data-label="Application" className="prod-name">Hospital Management System</td>
                <td data-label="What it does">End-to-end hospital operations system, built for and live at Sahane Ayurvedalaya.</td>
                <td data-label="Stage"><span className="status status-live">Live client deployment</span></td>
              </tr>
              <tr>
                <td data-label="Application" className="prod-name">Real Estate Pro</td>
                <td data-label="What it does">Lists properties and tracks leases end to end.</td>
                <td data-label="Stage"><span className="status status-ready">Beyond PoC — customizable</span></td>
              </tr>
              <tr>
                <td data-label="Application" className="prod-name">School Management System</td>
                <td data-label="What it does">Digitizes a school's end-to-end administrative process.</td>
                <td data-label="Stage"><span className="status status-pilot">In build</span></td>
              </tr>
              <tr>
                <td data-label="Application" className="prod-name">Quick Commerce Platform</td>
                <td data-label="What it does">Hybrid quick-commerce & e-commerce site, built for Sharanya Collection.</td>
                <td data-label="Stage"><span className="status status-live">Live client deployment</span></td>
              </tr>
              <tr>
                <td data-label="Application" className="prod-name">AI Chatbot Integration</td>
                <td data-label="What it does">LLM-powered chatbot being built into a client's website for conversational support.</td>
                <td data-label="Stage"><span className="status status-pilot">In build</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
