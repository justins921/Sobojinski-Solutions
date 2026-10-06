'use client'

const faqs = [
  {
    q: 'What is EMR OS?',
    a: 'EMR OS is electronic medical records software built for independent physical therapy practices. It handles scheduling, documentation, billing, and patient engagement in one system, plus AI billing tools that catch underpayments, score denial risk, check documentation against billed codes, and draft appeal letters. It costs $175 per provider per month with everything included.',
  },
  {
    q: 'Do you build custom websites for small businesses?',
    a: 'Yes. We design and build fast, modern websites for local businesses, contractors, nonprofits, and healthcare practices. We use AI-assisted development to build and iterate quickly, so every site is mobile responsive, optimized for local search, and you get more for your budget. No templates, no page builders, no monthly platform fees you do not need.',
  },
  {
    q: 'What does a website cost?',
    a: 'Every project is different, so we quote based on what you need. A simple business site costs less than a full e-commerce build. Try our project estimator for a rough range, then tell us about your project through the contact form and we will give you a straight answer with no pressure.',
  },
  {
    q: 'Do you offer SEO services?',
    a: 'Yes. We do keyword research, on-page optimization, technical SEO, and content strategy for local businesses that depend on Google for customers. Our approach is data-driven and focused on rankings that bring in real business, not vanity metrics.',
  },
  {
    q: 'What are custom web tools?',
    a: 'Small, focused web tools built for one specific job: calculators, estimators, quoting widgets, or internal dashboards that live on your website. We also publish free tools anyone can use. If your business has a repetitive task that software could handle, ask us about it.',
  },
  {
    q: 'Who builds the projects?',
    a: 'Every project is designed and built by Justin Sobojinski directly, using AI-assisted development to ship faster and iterate quickly. There are no account managers, no handoffs, and no junior developers learning on your dime. You talk to the person building your software.',
  },
  {
    q: 'What is Ugly Site Scraper?',
    a: 'Ugly Site Scraper finds outdated, ugly business websites and turns them into web design leads. It is built for freelancers and agencies who sell websites and want a steady pipeline of prospects that clearly need a redesign.',
  },
  {
    q: 'What is DoThatAgain?',
    a: 'DoThatAgain is a voice-first personal memory app for iOS. Record what worked and what did not, rate your experiences, and search your own history later. It is your own searchable record of decisions, lessons, and ideas.',
  },
]

export default function FaqAccordion() {
  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <div key={i} className="faq-item reveal open">
          <div className="faq-question" style={{ cursor: 'default' }}>
            {faq.q}
          </div>
          <div className="faq-answer" style={{ maxHeight: 'none' }}>
            <p>{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
