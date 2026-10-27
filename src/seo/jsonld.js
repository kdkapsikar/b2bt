import { ACADEMY_EMAIL, ADDRESS_PARTS, CONTACT_EMAIL, CONTACT_PHONES, SOCIALS } from '../config.js';
import { faq } from '../data/faq.js';
import { SITE_NAME, SITE_URL, OG_IMAGE, canonicalUrl, getPage } from './pages.js';

const ORG_ID = `${SITE_URL}/#organization`;

const organization = {
  '@type': 'ProfessionalService',
  '@id': ORG_ID,
  name: SITE_NAME,
  legalName: 'Bring2Better Tech Private Limited',
  url: `${SITE_URL}/`,
  image: OG_IMAGE,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONES[0],
  address: {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS_PARTS.street,
    addressLocality: ADDRESS_PARTS.locality,
    addressRegion: ADDRESS_PARTS.region,
    addressCountry: ADDRESS_PARTS.country,
  },
  contactPoint: [
    { '@type': 'ContactPoint', contactType: 'customer support', email: CONTACT_EMAIL, telephone: CONTACT_PHONES[0], availableLanguage: ['English'] },
    { '@type': 'ContactPoint', contactType: 'customer support', telephone: CONTACT_PHONES[1], availableLanguage: ['English'] },
    { '@type': 'ContactPoint', contactType: 'training enquiries', email: ACADEMY_EMAIL, availableLanguage: ['English'] },
  ],
  sameAs: SOCIALS.map((s) => s.url),
};

const website = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  publisher: { '@id': ORG_ID },
  inLanguage: 'en-IN',
};

const breadcrumb = (path) => {
  const page = getPage(path);
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: page.title.split(' | ')[0], item: canonicalUrl(path) },
    ],
  };
};

const faqPage = {
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const services = [
  ['Software development', 'Web and mobile applications, enterprise software, and cloud-based SaaS products, delivered end to end.'],
  ['Data engineering and analytics', 'Data engineering and pipelines, data modernisation, legacy-to-cloud migration, analytics, and MIS reporting.'],
  ['AI and machine learning', 'LLM integrations, chatbots, AI-assisted tooling, and machine learning solutions.'],
  ['Cloud and automation', 'Cloud-based solutions and automation of reporting, reconciliation, and operational processes.'],
  ['QA and testing', 'Independent test strategy, execution, and defect tracking, standalone or as part of a build.'],
  ['Consulting', 'Independent advisory on software, data, and QA, and migration planning.'],
].map(([name, description]) => ({
  '@type': 'Service',
  name,
  serviceType: name,
  description,
  provider: { '@id': ORG_ID },
}));

const courses = [
  {
    '@type': 'Course',
    name: 'Data Engineering',
    description: 'A live data engineering programme covering SQL, Python, Git, Hadoop, Spark, and cloud platforms, taught by experienced professionals.',
    provider: { '@id': ORG_ID },
    teaches: ['SQL', 'Python', 'Git', 'Hadoop', 'Spark', 'Cloud platforms'],
  },
  {
    '@type': 'Course',
    name: 'Testing and QA Automation',
    description: 'A software testing and QA automation training track, opening soon. Register your interest to receive details when it opens.',
    provider: { '@id': ORG_ID },
  },
];

export function jsonLdFor(path) {
  const graph = [organization];
  if (path === '/') graph.push(website, faqPage);
  else {
    graph.push(breadcrumb(path));
    if (path === '/services') graph.push(...services);
    if (path === '/academy') graph.push(...courses);
    if (path === '/contact') {
      graph.push({ '@type': 'ContactPage', url: canonicalUrl(path), mainEntity: { '@id': ORG_ID } });
    }
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}
