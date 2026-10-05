import { ACADEMY_EMAIL, ADDRESS, BOT_NAME, CALL_TEXT, CONTACT_EMAIL } from '../config.js';
import { products } from '../data/products.js';

const MAIN_CHIPS = ['Our services', 'Products', 'Academy', 'Contact us'];

export const WELCOME = {
  text: `👋  Hello, I am ${BOT_NAME}, the virtual assistant for Bring2Better Tech. I can provide information about our services, products, and Academy, or share our contact details. How may I assist you?`,
  chips: MAIN_CHIPS,
};

const productIntent = (p, extra = []) => ({
  id: `product-${p.key}`,
  keywords: [p.name.toLowerCase(), ...extra],
  text: `${p.name} (${p.sector}): ${p.what}`,
  links: [{ label: 'View all products', to: '/products' }],
  chips: ['Products', 'Contact us'],
});

const intents = [
  {
    id: 'greeting',
    keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'namaste'],
    weight: 1,
    text: `Hello. I can provide information on our services, products, Academy, or contact details. How may I assist you?`,
    chips: MAIN_CHIPS,
  },
  {
    id: 'thanks',
    keywords: ['thanks', 'thank you', 'thankyou', 'thx', 'great', 'awesome'],
    weight: 1,
    text: 'You are welcome! Is there anything else I can assist you with?',
    chips: MAIN_CHIPS,
  },
  {
    id: 'bye',
    keywords: ['bye', 'goodbye', 'see you'],
    weight: 1,
    text: 'Goodbye. Please return at any time if you have further questions.',
    chips: MAIN_CHIPS,
  },
  {
    id: 'identity',
    keywords: ['who are you', 'your name', 'what are you', 'are you a bot', 'are you human', 'are you real', 'what can you do'],
    text: `I am ${BOT_NAME}, the virtual assistant for this website. I can answer questions about Bring2Better Tech, including our services, products, Academy, and contact details.`,
    chips: MAIN_CHIPS,
  },
  {
    id: 'services',
    keywords: ['services', 'service', 'what do you do', 'what you do', 'offer', 'offerings', 'capabilities', 'help with', 'solutions'],
    text: 'We work across seven areas: software development, AI & machine learning, data & analytics, cloud & automation, QA & testing, consulting, and our Academy. Please select an area for more information.',
    links: [{ label: 'All services', to: '/services' }],
    chips: ['Software development', 'AI & ML', 'Data & analytics', 'Cloud & automation', 'QA & testing', 'Consulting', 'Academy'],
  },
  {
    id: 'software',
    keywords: ['software', 'application', 'applications', 'app', 'apps', 'web app', 'mobile app', 'mobile', 'website', 'saas', 'enterprise software', 'custom software', 'development', 'develop', 'build', 'end to end', 'end-to-end', 'development only', 'dev only'],
    text: 'We design, develop, test, and operate software products for businesses, institutions, and other organisations: web and mobile applications, enterprise software, and cloud-based SaaS platforms. We can deliver the full build end to end, or provide development-only capacity where you already have your own QA or project management function.',
    links: [{ label: 'Software development', to: '/services#software' }, { label: 'Applications we have built', to: '/products' }],
    chips: ['Products', 'Enquire about a build', 'Our services'],
  },
  {
    id: 'ai',
    keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'llm', 'chatbot', 'chat bot', 'bot', 'data science', 'generative', 'gpt'],
    text: 'We integrate AI into existing products and customer-facing touchpoints: LLM integrations, chatbots, and AI-assisted tooling, together with machine learning and data science solutions. TestSphere, our tool that generates test cases from requirements, is one example.',
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
    text: 'We deliver cloud computing solutions on GCP, AWS, and Azure, automate manual reporting and reconciliation, implement workflow and process automation, and operate and maintain what we build.',
    links: [{ label: 'Cloud & automation', to: '/services#cloud' }],
    chips: ['Enquire about automation', 'Our services'],
  },
  {
    id: 'testing',
    keywords: ['testing', 'test', 'qa', 'quality assurance', 'quality', 'defect', 'defects', 'bug', 'bugs', 'test cases', 'test automation', 'validation'],
    text: 'Our QA & testing work covers test strategy, planning, and execution; defect and execution-cycle tracking; and independent validation of migrations and data. It is available independently or as part of a build. We have also developed TestSphere, which generates test scenarios and test cases from requirements.',
    links: [{ label: 'QA & testing', to: '/services#testing' }],
    chips: ['TestSphere', 'Testing course', 'Enquire about testing'],
  },
  {
    id: 'consulting',
    keywords: ['consulting', 'consultant', 'consult', 'advisory', 'advice', 'advise', 'iwms', 'business analysis', 'readiness'],
    text: 'Our consulting is independent advisory on software, data, and QA: QA, business analysis, and project leadership advisory; IWMS platform consulting; data and cloud platform advisory; and migration planning and readiness reviews.',
    links: [{ label: 'Consulting', to: '/services#consulting' }],
    chips: ['Request a consultation', 'Our services'],
  },
  {
    id: 'academy',
    keywords: ['academy', 'course', 'courses', 'training', 'train', 'learn', 'learning', 'class', 'classes', 'student', 'students', 'cohort', 'enrol', 'enroll', 'sql', 'python', 'spark', 'hadoop', 'git'],
    text: `Our Academy runs a live data engineering programme covering SQL, Python, Git, Hadoop, Spark, and cloud platforms, taught by experienced professionals. A Testing & QA Automation track will follow, and you may register your interest. For training enquiries, please email ${ACADEMY_EMAIL}.`,
    links: [{ label: 'Academy', to: '/academy' }],
    chips: ['Testing course', 'Contact us'],
  },
  {
    id: 'syllabus',
    priority: true,
    keywords: ['syllabus', 'curriculum', 'course content', 'course details', 'fees for the course'],
    text: `To receive the Data Engineering syllabus, please email ${ACADEMY_EMAIL} or call ${CALL_TEXT}, mentioning the Data Engineering programme. We will share it with you.`,
    links: [{ label: 'Academy', to: '/academy' }],
    chips: ['Testing course', 'Contact us'],
  },
  {
    id: 'testing-track',
    keywords: ['testing course', 'testing track', 'qa course', 'qa training', 'testing training', 'automation course', 'test automation course', 'qa automation', 'register interest', 'register my interest', 'playwright', 'waitlist', 'notify me'],
    text: `The Testing & QA Automation track is opening soon. To register your interest, please email ${ACADEMY_EMAIL} with your name and, optionally, your phone number, or call ${CALL_TEXT}. We will share details when the track opens.`,
    links: [{ label: 'Academy', to: '/academy' }],
    chips: ['Academy', 'Contact us'],
  },
  {
    id: 'products',
    keywords: ['products', 'product', 'portfolio', 'built', 'case study', 'case studies', 'clients', 'projects', 'examples', 'demo'],
    text: `Applications we have built and are building: ${products.map((p) => p.name).join(', ')}. I can provide details on any of them.`,
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
    text: 'Bring2Better Tech Private Limited designs, develops, tests, and operates software products and technology-enabled solutions, and undertakes training, research, and innovation in AI, machine learning, data science, analytics, automation, and cloud computing.',
    links: [{ label: 'About us', to: '/about' }],
    chips: ['Our services', 'Contact us'],
  },
  {
    id: 'status',
    keywords: ['incorporated', 'incorporation', 'registered', 'registration', 'legal', 'private limited', 'pvt ltd'],
    text: 'Bring2Better Tech Private Limited is an incorporated company.',
    chips: ['Contact us'],
  },
  {
    id: 'contact',
    keywords: ['contact', 'contact us', 'reach', 'email', 'mail', 'phone', 'call', 'number', 'talk to', 'speak to', 'get in touch'],
    text: `You may email us at ${CONTACT_EMAIL} or call ${CALL_TEXT}.`,
    chips: ['Our location', 'Our services'],
  },
  {
    id: 'location',
    priority: true,
    keywords: ['address', 'location', 'located', 'office', 'where are you', 'where is your', 'visit you', 'directions', 'map'],
    text: `Our office is located at ${ADDRESS}.`,
    chips: ['Contact us', 'Our services'],
  },
  {
    id: 'enquiry',
    priority: true,
    keywords: ['how much', 'charges', 'fees', 'rates', 'enquire', 'enquiry', 'inquiry', 'quote', 'quotation', 'pricing', 'price', 'cost', 'budget', 'proposal', 'hire', 'start a project', 'get started', 'book a conversation'],
    text: `Every engagement is scoped individually, so we do not publish a fixed price list. To begin, please email ${CONTACT_EMAIL} or call ${CALL_TEXT} with details of your requirements, and our team will respond.`,
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

const EMOJI = {
  greeting: '👋', thanks: '😊', bye: '👋', identity: '🤖', services: '🛠️', software: '💻', ai: '✨',
  data: '📊', cloud: '☁️', testing: '✅', consulting: '💡', academy: '🎓', syllabus: '📚',
  'testing-track': '🧪', products: '🚀', about: '🏢', status: '🏢', contact: '📞', location: '📍', enquiry: '✉️',
  'product-testsphere': '🧪', 'product-hospital': '🏥', 'product-realestate': '🏠', 'product-school': '🏫',
  'product-commerce': '🛒', 'product-grievance': '📣', 'product-chatbot': '💬',
};

export const FALLBACK = {
  text: `🙂  I am able to assist only with questions about Bring2Better Tech, including our services, products, Academy, and contact details. You may also email ${CONTACT_EMAIL} or call ${CALL_TEXT} directly.`,
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
  if (!best) return FALLBACK;
  const emoji = EMOJI[best.id];
  return { text: emoji ? `${emoji}  ${best.text}` : best.text, links: best.links, chips: best.chips };
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
  'Request a consultation': 'book a conversation',
  'Our location': 'office address',
};

export const chipToQuery = (label) => chipQueries[label] ?? label;
