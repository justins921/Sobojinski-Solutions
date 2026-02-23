import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'See the websites, platforms, and products built by Sobojinski Solutions. Real projects, real results for businesses across multiple industries.',
}

const projects = [
  {
    name: 'Cedar Sense',
    type: 'E-Commerce Website',
    description: 'Custom e-commerce website for a natural products brand. Built with a focus on clean UX, fast load times, and seamless checkout. Includes product filtering, inventory management integration, and mobile-first responsive design.',
    tags: ['Web Design', 'E-Commerce', 'SEO'],
    color: '#10B981',
    url: 'https://cedarsense.com',
    results: 'Increased online sales by 40% within the first 3 months of launch.',
  },
  {
    name: 'HempWorks Wisconsin',
    type: 'Business Website + SEO',
    description: 'Full website redesign and SEO campaign for a Wisconsin-based hemp products company. Rebuilt the site for speed and conversions, then executed a comprehensive SEO strategy targeting local and national keywords.',
    tags: ['Web Design', 'SEO', 'Local SEO'],
    color: '#22C55E',
    url: 'https://hempworkswi.com',
    results: 'Page 1 Google rankings achieved within 90 days for primary keywords.',
  },
  {
    name: 'EMR OS',
    type: 'Software Platform',
    description: 'Purpose-built electronic medical records platform for independent practices and small clinics. Features patient records management, appointment scheduling, e-prescribing, HIPAA-compliant data handling, and billing integration.',
    tags: ['Platform', 'Healthcare', 'SaaS'],
    color: '#2563EB',
    url: 'https://emros.sobojinskisolutions.com',
    results: 'Streamlining healthcare operations for independent providers.',
  },
  {
    name: 'Golf OS',
    type: 'Software Platform',
    description: 'Complete golf course and club management platform. Handles tee time bookings, member management, POS integration, course condition tracking, and tournament management in a single unified interface.',
    tags: ['Platform', 'Golf Improvement', 'SaaS'],
    color: '#22C55E',
    url: 'https://golfos.sobojinskisolutions.com',
    results: 'Modern management tools for courses and clubs.',
  },
  {
    name: 'Work OS',
    type: 'Software Platform',
    description: 'Workforce coordination and project management platform. Combines task tracking, team scheduling, time tracking, file sharing, and customizable workflows into a streamlined interface built for teams that move fast.',
    tags: ['Platform', 'Productivity', 'SaaS'],
    color: '#8B5CF6',
    url: 'https://workos.sobojinskisolutions.com',
    results: 'Helping teams stay aligned and ship faster.',
  },
  {
    name: 'SEO OS',
    type: 'Software Platform',
    description: 'SEO management and optimization platform for agencies, marketers, and business owners. Keyword tracking, site audits, competitor analysis, backlink monitoring, and automated reporting — all from one dashboard.',
    tags: ['Platform', 'Marketing', 'SaaS'],
    color: '#F97316',
    url: 'https://seoos.sobojinskisolutions.com',
    results: 'Data-driven SEO insights for smarter decisions.',
  },
]

const filters = ['All', 'Web Design', 'SEO', 'Platform']

export default function PortfolioPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="section-label">Our Work</div>
          <h1>Portfolio</h1>
          <p>Real projects built for real businesses. From custom websites and SEO campaigns to full software platforms, here&rsquo;s a look at what we&rsquo;ve delivered.</p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section">
        <div className="container">
          <div className="portfolio-grid">
            {projects.map((project) => (
              <div key={project.name} className="portfolio-card reveal">
                <div className="portfolio-card-preview" style={{ borderTop: `4px solid ${project.color}` }}>
                  <div className="portfolio-card-icon" style={{ color: project.color }}>
                    {project.tags.includes('Platform') ? (
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" /><path d="M7 8h3m-3 3h5" /></svg>
                    ) : project.tags.includes('SEO') && !project.tags.includes('Web Design') ? (
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /><path d="M11 8v6m-3-3h6" /></svg>
                    ) : (
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" /><circle cx="12" cy="10" r="0.5" fill="currentColor" /></svg>
                    )}
                  </div>
                </div>
                <div className="portfolio-card-content">
                  <div className="portfolio-card-type" style={{ color: project.color }}>{project.type}</div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="portfolio-card-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="portfolio-tag">{tag}</span>
                    ))}
                  </div>
                  {project.results && (
                    <div className="portfolio-card-result">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      <span>{project.results}</span>
                    </div>
                  )}
                  <a href={project.url} className="btn btn-outline" style={{ marginTop: '1rem' }} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <h2 className="reveal">Want to Be Our<br />Next Success Story?</h2>
          <p className="reveal">Whether you need a custom website, SEO that delivers, or a full platform built for your industry — let&rsquo;s talk.</p>
          <div className="cta-buttons reveal">
            <Link href="/contact" className="btn btn-primary btn-lg">Start Your Project</Link>
            <Link href="/products" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>View Products &amp; Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
