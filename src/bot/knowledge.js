import { BOT_NAME, CONTACT_EMAIL, CONTACT_PHONE, TRACK_INTEREST_MAILTO } from '../config.js';
import { products } from '../data/products.js';

const enquiryMailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Enquiry from the website')}`;

const MAIN_CHIPS = ['Our services', 'Products', 'Academy', 'Contact us'];

export const WELCOME = {
  text: `Hi, I'm ${BOT_NAME}. I can tell you about our services, products, and Academy, or help you get in touch. What would you like to know?`,
  chips: MAIN_CHIPS,
};

const productIntent = (p, extra = []) => ({
  id: `product-${p.key}`,
  keywords: [p.name.toLowerCase(), ...extra],
  text: `${p.name} (${p.sector}): ${p.what}`,
  links: [{ label: 'See all products', to: '/products' }],
  chips: ['Products', 'Contact us'],
});

const intents = [
  {
    id: 'greeting',
    keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'namaste'],
    weight: 1,
    text: `Hello! I can help with our services, products, Academy, or getting in touch. What would you like to know?`,
    chips: MAIN_CHIPS,
  },
  {
    id: 'thanks',
    keywords: ['thanks', 'thank you', 'thankyou', 'great', 'awesome', 'bye', 'goodbye'],
    weight: 1,
    text: 'Happy to help. If you would like to talk to the team, the Contact page is the quickest way.',
    links: [{ label: 'Contact page', to: '/contact' }],
    chips: MAIN_CHIPS,
  },
  {
    id: 'identity',
    keywords: ['who are you', 'your name', 'what are you', 'are you a bot', 'are you human', 'are you real', 'what can you do'],
    text: `I'm ${BOT_NAME}, the assistant for this website. I can answer questions about Build to Better Tech: our services, products, Academy, and how to get in touch.`,
    chips: MAIN_CHIPS,
  },
  {
    id: 'services',
    keywords: ['services', 'service', 'what do you do', 'what you do', 'offer', 'offerings', 'capabilities', 'help with', 'solutions'],
    text: 'We work across seven areas: software development, AI & machine learning, data & analytics, cloud & automation, QA & testing, consulting, and our Academy. Which one would you like to hear about?',
    links: [{ label: 'All services', to: '/services' }],
    chips: ['Software development', 'AI & ML', 'Data & analytics', 'Cloud & automation', 'QA & testing', 'Consulting', 'Academy'],
  },
  {
    id: 'software',
    keywords: ['software', 'application', 'applications', 'app', 'apps', 'web app', 'mobile app', 'mobile', 'website', 'saas', 'enterprise software', 'custom software', 'development', 'develop', 'build', 'end to end', 'end-to-end', 'development only', 'dev only'],
    text: 'We design, develop, test, and operate software products for businesses, institutions, and other organizations: web and mobile applications, enterprise software, and cloud-based SaaS platforms. We can take the full build end to end, or plug in as development-only capacity if you already have your own QA or PM function.',
    links: [{ label: 'Software development', to: '/services#software' }, { label: 'What we have built', to: '/products' }],
    chips: ['Products', 'Enquire about a build', 'Our services'],
  },
  {
    id: 'ai',
    keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'llm', 'chatbot', 'chat bot', 'bot', 'data science', 'generative', 'gpt'],
    text: 'We integrate AI into existing products and customer-facing touchpoints: LLM integrations, chatbots, and AI-assisted tooling, plus machine learning and data science work. TestSphere, our tool that generates test cases from requirements, is one example.',
    links: [{ label: 'AI & machine learning', to: '/services#ai' }],
    chips: ['TestSphere', 'Enquire about an AI project', 'Our services'],
  },
  {
    id: 'data',
    keywords: ['data', 'data engineering', 'analytics', 'mis', 'reporting', 'reports', 'pipeline', 'pipelines', 'modernisation', 'modernization', 'migration', 'migrate', 'migration assurance', 'databricks', 'pyspark', 'airflow', 'etl'],
    text: 'Our data work covers data engineering and pipelines, data modernisation and legacy-to-cloud migration, analytics and MIS reporting (including fixed-scope MIS automation sprints), and Migration Assurance: independent, record-level validation with a documented confidence score. We work across GCP, AWS, Azure, Databricks, PySpark, and Airflow.',
    links: [{ label: 'Data & analytics', to: '/services#data' }],
    chips: ['Enquire about a data project', 'Academy', 'Our services'],
  },
  {
    id: 'cloud',
    keywords: ['cloud', 'automation', 'automate', 'gcp', 'aws', 'azure', 'workflow', 'process automation', 'reconciliation', 'devops', 'maintenance', 'maintain'],
    text: 'We build cloud computing solutions on GCP, AWS, and Azure, automate manual reporting and reconciliation, handle workflow and process automation, and operate and maintain what we build.',
    links: [{ label: 'Cloud & automation', to: '/services#cloud' }],
    chips: ['Enquire about automation', 'Our services'],
  },
  {
    id: 'testing',
    keywords: ['testing', 'test', 'qa', 'quality assurance', 'quality', 'defect', 'defects', 'bug', 'bugs', 'test cases', 'test automation', 'validation'],
    text: 'Our QA & testing work covers test strategy, planning, and execution; defect and execution-cycle tracking; and independent validation of migrations and data. It is available on its own or as part of a build. We also built TestSphere, which generates test scenarios and test cases from requirements.',
    links: [{ label: 'QA & testing', to: '/services#testing' }],
    chips: ['TestSphere', 'Testing course', 'Enquire about testing'],
  },
  {
    id: 'consulting',
    keywords: ['consulting', 'consultant', 'consult', 'advisory', 'advice', 'advise', 'iwms', 'business analysis', 'readiness'],
    text: 'Our consulting is independent advisory on software, data, and QA: QA, business analysis, and project leadership advisory; IWMS platform consulting; data and cloud platform advisory; and migration planning and readiness reviews.',
    links: [{ label: 'Consulting', to: '/services#consulting' }],
    chips: ['Book a conversation', 'Our services'],
  },
  {
    id: 'academy',
    keywords: ['academy', 'course', 'courses', 'training', 'train', 'learn', 'learning', 'class', 'classes', 'student', 'students', 'cohort', 'enrol', 'enroll', 'sql', 'python', 'spark', 'hadoop', 'git'],
    text: 'Our Academy runs a live data engineering program covering SQL, Python, Git, Hadoop, Spark, and cloud platforms, taught by experienced professionals. A Testing & QA Automation track is coming soon, and you can register your interest.',
    links: [{ label: 'Academy', to: '/academy' }, { label: 'Ask for the syllabus', to: '/contact' }],
    chips: ['Testing course', 'Contact us'],
  },
  {
    id: 'syllabus',
    priority: true,
    keywords: ['syllabus', 'curriculum', 'course content', 'course details', 'fees for the course'],
    text: `To get the Data Engineering syllabus, email ${CONTACT_EMAIL} or call ${CONTACT_PHONE} and mention the Data Engineering program. We'll send it across.`,
    links: [{ label: 'Email for the syllabus', href: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Data Engineering syllabus request')}` }, { label: 'Academy', to: '/academy' }],
    chips: ['Testing course', 'Contact us'],
  },
  {
    id: 'testing-track',
    keywords: ['testing course', 'testing track', 'qa course', 'qa training', 'testing training', 'automation course', 'test automation course', 'qa automation', 'register interest', 'register my interest', 'playwright', 'waitlist', 'notify me'],
    text: `The Testing & QA Automation track is coming soon. To register your interest, email ${CONTACT_EMAIL} with your name and phone number (optional), or call ${CONTACT_PHONE}. We'll share details as the track opens.`,
    links: [{ label: 'Email to register', href: TRACK_INTEREST_MAILTO }, { label: 'Academy', to: '/academy' }],
    chips: ['Academy', 'Contact us'],
  },
  {
    id: 'products',
    keywords: ['products', 'product', 'portfolio', 'built', 'case study', 'case studies', 'clients', 'projects', 'examples', 'demo'],
    text: `Applications we have built and are building: ${products.map((p) => p.name).join(', ')}. Ask me about any of them.`,
    links: [{ label: 'Products', to: '/products' }],
    chips: ['TestSphere', 'Hospital Management', 'Grievance Management', 'Contact us'],
  },
  productIntent(products.find((p) => p.key === 'testsphere'), ['test sphere']),
  productIntent(products.find((p) => p.key === 'hospital'), ['hospital', 'hospital management', 'healthcare']),
  productIntent(products.find((p) => p.key === 'realestate'), ['real estate', 'property', 'properties', 'lease', 'leases']),
  productIntent(products.find((p) => p.key === 'school'), ['school', 'school management', 'education']),
  productIntent(products.find((p) => p.key === 'commerce'), ['quick commerce', 'e-commerce', 'ecommerce', 'retail', 'shop', 'online store']),
  productIntent(products.find((p) => p.key === 'grievance'), ['grievance', 'complaint', 'complaints', 'civic', 'citizen', 'citizens', 'public services']),
  productIntent(products.find((p) => p.key === 'chatbot'), ['ai chatbot']),
  {
    id: 'about',
    keywords: ['about', 'who we are', 'company', 'founders', 'founder', 'team', 'mission', 'story'],
    text: 'Build to Better Tech Private Limited designs, develops, tests, and operates software products and technology-enabled solutions, and undertakes training, research, and innovation in AI, machine learning, data science, analytics, automation, and cloud computing. It is led by two co-founders.',
    links: [{ label: 'About us', to: '/about' }],
    chips: ['Our services', 'Contact us'],
  },
  {
    id: 'status',
    keywords: ['incorporated', 'incorporation', 'registered', 'registration', 'legal', 'private limited', 'pvt ltd'],
    text: 'Build to Better Tech Private Limited is currently completing incorporation.',
    links: [{ label: 'Contact page', to: '/contact' }],
    chips: ['Contact us'],
  },
  {
    id: 'contact',
    keywords: ['contact', 'contact us', 'reach', 'email', 'mail', 'phone', 'call', 'number', 'talk to', 'speak to', 'get in touch', 'address'],
    text: `You can email us at ${CONTACT_EMAIL} or call ${CONTACT_PHONE}. You can also send an enquiry from the Contact page.`,
    links: [{ label: 'Contact page', to: '/contact' }, { label: 'Email us', href: enquiryMailto }],
    chips: ['Our services', 'Products'],
  },
  {
    id: 'enquiry',
    priority: true,
    keywords: ['how much', 'charges', 'fees', 'rates', 'enquire', 'enquiry', 'inquiry', 'quote', 'quotation', 'pricing', 'price', 'cost', 'budget', 'proposal', 'hire', 'start a project', 'get started', 'book a conversation'],
    text: `We scope every engagement individually, so there is no fixed price list. To start, email ${CONTACT_EMAIL} or call ${CONTACT_PHONE} and tell us what you are working with. The team will get back to you.`,
    links: [{ label: 'Email us', href: enquiryMailto }, { label: 'Contact page', to: '/contact' }],
    chips: ['Our services', 'Contact us'],
  },
];

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const compiled = intents.map((intent) => ({
  intent,
  matchers: intent.keywords.map((k) => ({
    re: new RegExp(`(^|[^a-z0-9])${escapeRe(k.toLowerCase())}($|[^a-z0-9])`),
    score: (intent.weight ?? 2) * k.length,
  })),
}));

export const FALLBACK = {
  text: 'I can only help with questions about Build to Better Tech: our services, products, Academy, and how to get in touch. Try one of these, or write to the team directly.',
  links: [{ label: 'Email us', href: enquiryMailto }],
  chips: MAIN_CHIPS,
};

export function respond(input) {
  const q = input.toLowerCase().replace(/[’']/g, "'");
  let best = null;
  let bestScore = 0;
  for (const { intent, matchers } of compiled) {
    let score = 0;
    for (const m of matchers) if (m.re.test(q)) score += m.score;
    if (score > 0 && intent.priority) score += 1000;
    if (score > bestScore) {
      best = intent;
      bestScore = score;
    }
  }
  return best ? { text: best.text, links: best.links, chips: best.chips } : FALLBACK;
}

const chipQueries = {
  'Our services': 'services',
  'Software development': 'software development',
  'AI & ML': 'ai machine learning',
  'Data & analytics': 'data analytics',
  'Cloud & automation': 'cloud automation',
  'QA & testing': 'qa testing',
  Consulting: 'consulting',
  Academy: 'academy',
  Products: 'products',
  'Contact us': 'contact us',
  TestSphere: 'testsphere',
  'Hospital Management': 'hospital management system',
  'Grievance Management': 'grievance management system',
  'Testing course': 'testing course',
  'Enquire about a build': 'enquire',
  'Enquire about an AI project': 'enquire',
  'Enquire about a data project': 'enquire',
  'Enquire about automation': 'enquire',
  'Enquire about testing': 'enquire',
  'Book a conversation': 'book a conversation',
};

export const chipToQuery = (label) => chipQueries[label] ?? label;
