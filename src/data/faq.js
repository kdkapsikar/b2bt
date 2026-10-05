import { ACADEMY_EMAIL, CALL_TEXT, CONTACT_EMAIL } from '../config.js';

export const faq = [
  {
    q: 'Can development or testing be engaged independently?',
    a: 'Yes. We can deliver a build end to end, provide development-only capacity where you already have your own QA or project management function, or undertake QA and testing on its own.',
  },
  {
    q: 'How are engagements structured?',
    a: 'Every engagement is scoped individually, and we do not publish a fixed price list. Please share your requirements and our team will respond.',
  },
  {
    q: 'Can AI be added to existing products?',
    a: "Yes. We integrate LLMs, chatbots, and AI-assisted tooling into existing products and customer-facing touchpoints. A chatbot for a client's website is currently in development.",
  },
  {
    q: 'Which platforms and technologies do you work with?',
    a: 'For data and cloud work: GCP, AWS, Azure, Databricks, PySpark, and Airflow. For AI work: LLM APIs.',
  },
  {
    q: 'Do you offer training?',
    a: `Yes. The Academy runs a live data engineering programme covering SQL, Python, Git, Hadoop, Spark, and cloud platforms. A Testing & QA Automation track will follow. For training enquiries, please email ${ACADEMY_EMAIL}.`,
  },
  {
    q: 'How can I contact the team?',
    a: `Please email ${CONTACT_EMAIL} or call ${CALL_TEXT}. Our site assistant, Rivet, is also available through the chat button.`,
  },
];
