import { CONTACT_EMAIL, CONTACT_PHONE } from '../config.js';

export const faq = [
  {
    q: 'Can you take on just the development, or just the testing?',
    a: 'Yes. We can run a build end to end, plug in as development-only capacity if you already have your own QA or PM function, or take on QA and testing on its own.',
  },
  {
    q: 'What does an engagement look like?',
    a: 'We scope every engagement individually, so there is no fixed price list. Tell us what you are working with and the team will get back to you.',
  },
  {
    q: 'Do you add AI to existing products?',
    a: "Yes. We integrate LLMs, chatbots, and AI-assisted tooling into existing products and customer-facing touchpoints. A chatbot for a client's website is in build today.",
  },
  {
    q: 'Which platforms and technologies do you work with?',
    a: 'On data and cloud work, GCP, AWS, Azure, Databricks, PySpark, and Airflow. On AI work, LLM APIs.',
  },
  {
    q: 'Do you offer training?',
    a: 'Yes. The Academy runs a live data engineering program covering SQL, Python, Git, Hadoop, Spark, and cloud platforms. A Testing & QA Automation track is coming soon.',
  },
  {
    q: 'How do I get in touch?',
    a: `Email ${CONTACT_EMAIL} or call ${CONTACT_PHONE}, or ask Rivet, our site assistant, using the chat button.`,
  },
];
