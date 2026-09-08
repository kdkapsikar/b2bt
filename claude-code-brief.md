# Project Brief: Bridge to Better Tech Website

## Task

Convert the attached `index.html` (a single-file static prototype) into a proper multi-page project using React + Vite (or Next.js if you prefer file-based routing). Replace the current anchor-scroll sections with real routes: `/`, `/services`, `/products`, `/academy`, `/about`, `/contact`. Keep the visual design system below intact unless I ask you to change it.

## Company context

**Bridge to Better Tech Private Limited** (incorporation currently in progress) is a three-founder company with two active lines of business:

1. **Migration Assurance & MIS Automation** — data migration validation and MIS reporting automation, aimed at non-IT-led businesses (not an IT-only audience). The differentiator is independent, QA-grade validation layered on top of the actual migration work — most competitors skip this step.
2. **Bridge to Better Tech Academy** — a live, already-running data engineering training program (SQL, Python, Git, Hadoop, Spark, cloud platforms). This is the company's *current* training track, not its only one — a Playwright/QA automation track is being planned, with one of the founders (Ketan) potentially teaching it personally. **Do not add a Playwright section yet** — it's still unplanned; just don't design the Academy section as if data engineering is the only subject the company will ever teach.

**Important positioning note:** the company name and the product portfolio are *not* restricted to data engineering. The products listed below span trading, QA tooling, healthcare, real estate, education, and e-commerce — deliberately broad, not a data-engineering product suite.

## Founders

- **Ketan** — 16+ years in QA, BA, and PM leadership; deep specialization in IWMS platforms (TRIRIGA, Maximo, Archibus, Corrigo); built through enterprise engagements including JLL and ValuD. Primarily brings industry/domain expertise rather than hands-on coding.
- **Prasad Kokate** — Senior Data Engineer, production experience across GCP, AWS, Azure, Databricks, PySpark, Airflow; CSPO-certified.
- **Atharva Patil** — Data Engineer, similar modern cloud/pipeline stack, focused on execution and delivery support.

## The Migration Assurance framework (real, four-stage — safe to present as a genuine sequence)

1. **Map** — structured source-to-target field mapping, reviewed before any record moves.
2. **Cleanse** — pre-migration data quality scan (duplicates, blanks, inconsistent formats).
3. **Migrate** — staged, reversible cutover with checkpoints.
4. **Assure** — independent, record-level validation with a documented confidence score.

## Real product list (use exactly this — do not invent products)

| Product | What it does | Honest stage |
|---|---|---|
| VolleyTrade | Executes bulk trades on a CoinSwitch account via API | Pilot — gathering data for 3 months |
| TestSphere | Uses LLM APIs to generate test scenarios/cases from requirements; tracks defects and execution cycles | Ready to demo, needs functional fixes |
| Hospital Management System | End-to-end hospital ops system | Live at client Sahane Ayurvedalaya; being generalized for resale |
| Real Estate Pro | Lists properties, tracks leases | Beyond PoC, customizable per client |
| School Management System | Digitizes a school's end-to-end admin process | In build |
| Quick Commerce Platform | Hybrid quick-commerce & e-commerce site | Live at client Sharanya Collection; being scaled for other local shop owners |

## Hard honesty constraints (non-negotiable)

- **Never invent products, features, or SaaS tools.** An earlier draft blueprint fabricated three fictional products ("FlowBuilder," "SchemaGuard," "CloudCost Tracker") — these do not exist and must never appear anywhere in this project.
- **Never state unverified market statistics as fact** (e.g. specific "% of migrations fail" figures, market-size projections). These need Gartner/IDC sourcing before they can go live; until then, use general, hedged framing only.
- **Disclose incorporation status honestly** but don't lead with it — mention it plainly in the Contact/About area, after the value proposition, not as a headline.
- Lead with capability, not apology, about the company's early stage.

## Design system (carry over from the prototype)

**Color tokens:**
```
--navy:      #16233B   (primary dark background)
--navy-2:    #1D2E4A   (footer / secondary dark)
--paper:     #F0EFE6   (light section background)
--paper-2:   #E7E4D6   (form / card background on paper)
--ink:       #182018   (body text on paper)
--line:      #4C6E96   (rule lines, connectors)
--line-soft: rgba(76,110,150,0.35)
--copper:    #B6752D   (primary accent / CTAs)
--copper-light: #D89A55
--green:     #4F9C82   (assurance/validated status)
--cream-text: #EDEFE6  (text on navy)
--muted:     #9FB0C8   (secondary text on navy)
```

**Typography:** IBM Plex family throughout —
- IBM Plex Sans → headlines, UI, body
- IBM Plex Mono → labels, stage annotations, data/status tags
- IBM Plex Serif (italic) → reserved only for the whitepaper pull-quote

**Layout concept:** treat the site like a technical/engineering drawing (ties to the founders' IWMS/facilities-systems background) — thin rule lines, annotated diagram in the hero showing the Map→Cleanse→Migrate→Assure sequence, asymmetric left-aligned hero rather than a centered hero, numbered steps used only where content is a genuine sequence (the 4-stage framework), not decoratively elsewhere.

**Explicitly avoid:** generic AI-design tells — warm cream + serif + terracotta combo, SaaS card-kit with identical rounded-corner shadow cards, tracked-out ALL-CAPS eyebrow labels, "→" appended to every button/link, middle-dot-joined meta strings.

## Page structure to build

1. **Home (`/`)** — hero with the 4-stage diagram, three-pillar services grid (Migration Assurance / MIS Sprints / Academy), CTA into whitepaper.
2. **Services (`/services`)** — Migration Assurance detail + MIS Automation Sprints detail.
3. **Products (`/products`)** — the 6 real products table above, framed as "applications we've built," explicitly not data-engineering-exclusive.
4. **Academy (`/academy`)** — current data engineering program; leave room to add tracks later without implying it's the only one.
5. **About (`/about`)** — founder bios (above), mission/vision, honest incorporation status.
6. **Contact (`/contact`)** — contact details, whitepaper download form, service inquiry form.

## Assets and copy to reuse verbatim from the prototype

The attached `index.html` contains complete section copy already reviewed and approved — reuse the wording as-is; only restructure the HTML/CSS into components and real routes. Don't rewrite the copy unless something reads better as separate pages instead of scroll sections.

## Open items (still pending, don't build yet)

- Final company name confirmation (currently "Bridge to Better Tech")
- Real logo (a brochure PDF exists with a placeholder mark — swap in once finalized)
- Playwright/QA automation training track (plan not yet drafted)
- Whitepaper and inquiry forms need a real backend (Google Form, Mailchimp, or similar) — currently a placeholder alert on submit
