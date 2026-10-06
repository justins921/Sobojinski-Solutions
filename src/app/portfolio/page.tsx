import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'See the websites, platforms, and products built by Sobojinski Solutions. Real projects for real businesses across healthcare, local services, and nonprofits.',
}

const projects = [
  {
    name: 'EMR OS',
    type: 'Software Platform',
    description: 'Electronic medical records built for independent physical therapy practices. Scheduling, documentation, billing, and patient engagement in one system, with AI billing tools for underpayment detection, denial-risk scoring, documentation-to-code review, and appeal drafts. $175 per provider per month, everything included.',
    tags: ['Platform', 'Healthcare'],
    color: '#10B981',
    gradient: 'visual-emr',
    initials: 'EMR',
    url: 'https://emros.sobojinskisolutions.com',
    results: 'Flagship product, in active development with a pilot clinic.',
  },
  {
    name: 'Fox Valley Physical Therapy',
    type: 'Client Website',
    description: 'Full website for a physical therapy clinic in Oshkosh, Wisconsin. Service pages, provider info, and online scheduling built for speed and local search.',
    tags: ['Client Site', 'Web Design'],
    color: '#2563EB',
    gradient: 'visual-fvpt',
    initials: 'FVPT',
    url: 'https://foxvalleyphysicaltherapy.com',
    results: 'Live client site.',
  },
  {
    name: 'Karni Pier',
    type: 'Client Website',
    description: 'Website for a pier installation company. Migrated off an expensive page builder to a fast, modern site that the owner can afford to keep.',
    tags: ['Client Site', 'Web Design'],
    color: '#0EA5E9',
    gradient: 'visual-karni',
    initials: 'KP',
    url: 'https://karnipier.com',
    results: 'Live client site.',
  },
  {
    name: 'Bikers Down',
    type: 'Client Website',
    description: 'Website for a Wisconsin nonprofit supporting injured motorcyclists. Clear mission pages, event info, and donation paths.',
    tags: ['Client Site', 'Web Design'],
    color: '#8B5CF6',
    gradient: 'visual-bikers',
    initials: 'BD',
    url: 'https://bikersdownwi.org',
    results: 'Live client site.',
  },
  {
    name: 'Don Wells Lawn & Snow',
    type: 'Client Website',
    description: 'Website for a lawn care and snow removal business. Service listings, quote requests, and local SEO that brings in seasonal work.',
    tags: ['Client Site', 'Web Design'],
    color: '#65A30D',
    gradient: 'visual-donwells',
    initials: 'DW',
    url: '',
    results: 'Ongoing client.',
  },
  {
    name: 'Cedar Sense',
    type: 'E-Commerce Website',
    description: 'Custom e-commerce website for a natural products brand. Built with a focus on clean UX, fast load times, and seamless checkout. Includes product filtering, inventory management integration, and mobile-first responsive design.',
    tags: ['Web Design', 'E-Commerce', 'SEO'],
    color: '#10B981',
    gradient: 'visual-emr',
    initials: 'CS',
    url: 'https://cedarsense.com',
    results: 'Increased online sales by 40% within the first 3 months of launch.',
  },
  {
    name: 'HempWorks Wisconsin',
    type: 'Business Website + SEO',
    description: 'Full website redesign and SEO campaign for a Wisconsin-based hemp products company. Rebuilt the site for speed and conversions, then executed a comprehensive SEO strategy targeting local and national keywords.',
    tags: ['Web Design', 'SEO', 'Local SEO'],
    color: '#22C55E',
    gradient: 'visual-bikers',
    initials: 'HW',
    url: 'https://hempworkswi.com',
    results: 'Page 1 Google rankings achieved within 90 days for primary keywords.',
  },
]

const filters = ['All', 'Web Design', 'SEO', 'Platform', 'Client Site']

export default function PortfolioPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="section-label">Our Work</div>
          <h1>Portfolio</h1>
          <p>Real projects built for real businesses. From software platforms to client websites and SEO campaigns, here&rsquo;s a look at what we&rsquo;ve delivered.</p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section">
        <div className="container">
          <div className="portfolio-grid">
            {projects.map((project) => (
              <div key={project.name} className="portfolio-card reveal">
                <div className={`card-visual ${project.gradient}`}>
                  <span className="visual-initial">{project.initials}</span>
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
                  {project.url && (
                    <a href={project.url} className="btn btn-outline" style={{ marginTop: '1rem' }} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  )}
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
          <p className="reveal">Whether you need a custom website, SEO that delivers, or a tool built for your business, let&rsquo;s talk.</p>
          <div className="cta-buttons reveal">
            <Link href="/contact" className="btn btn-primary btn-lg">Start Your Project</Link>
            <Link href="/products" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>View Products &amp; Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
