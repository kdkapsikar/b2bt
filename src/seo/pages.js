export const SITE_URL = 'https://bring2bettertech.com';
export const SITE_NAME = 'Bring2Better Tech';
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const pages = [
  {
    path: '/',
    title: 'Bring2Better Tech | Software, Data Engineering & QA',
    description:
      'Software, data engineering, AI, and independent QA services for growing businesses, plus QA and data engineering training. Based in Chhatrapati Sambhajinagar (Aurangabad), Maharashtra.',
  },
  {
    path: '/services',
    title: 'Data Engineering, Software & QA Testing | Bring2Better Tech',
    description:
      'Software development, data engineering and analytics, AI and machine learning, cloud automation, independent QA and testing, and consulting for businesses of every size.',
  },
  {
    path: '/products',
    title: 'Software Products and Applications | Bring2Better Tech',
    description:
      'Applications we have built: QA tooling, hospital, school, real estate, retail, and civic systems, and an AI chatbot integration.',
  },
  {
    path: '/academy',
    title: 'Data Engineering & QA Training | Bring2Better Tech Academy',
    description:
      'Live data engineering training covering SQL, Python, Git, Hadoop, Spark, and cloud platforms, with a QA and test automation training track opening soon.',
  },
  {
    path: '/about',
    title: 'About Bring2Better Tech | Software, Data Engineering & QA',
    description:
      'Bring2Better Tech brings practical, production experience to the software, data, and AI systems it builds and advises on, from first requirement to day-to-day operation.',
  },
  {
    path: '/contact',
    title: 'Contact Bring2Better Tech | Chhatrapati Sambhajinagar',
    description:
      'Contact Bring2Better Tech by email or phone, or visit our office in Chhatrapati Sambhajinagar (Aurangabad), for software, data engineering, AI, QA, and training enquiries.',
  },
];

export const NOT_FOUND = {
  title: 'Page not found | Bring2Better Tech',
  description: 'The page you requested could not be found.',
};

const normalise = (path) => (path.length > 1 ? path.replace(/\/+$/, '') : path) || '/';

export const getPage = (path) => pages.find((p) => p.path === normalise(path));

export const canonicalUrl = (path) => {
  const p = normalise(path);
  return p === '/' ? `${SITE_URL}/` : `${SITE_URL}${p}/`;
};
