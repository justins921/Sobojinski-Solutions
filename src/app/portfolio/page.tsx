import type { Metadata } from 'next'
import Link from 'next/link'
import BrowserFrame from '@/components/BrowserFrame'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'See the websites, platforms, and products built by Sobojinski Solutions. Real projects for real businesses across healthcare, local services, and nonprofits.',
}

const projects = [
  {
    name: 'EMR OS',
    type: 'Software Platform',
    description: 'Electronic medical records built for independent physical therapy practices. Scheduling, documentation, billing, and patient engagement in one system, with AI billing tools for underpayment detection, denial-risk scoring, documentation-to-code review, and appeal drafts. $175 per provider per month, everything included.',
    screenshot: '/screenshots/emr.png',
    shotUrl: 'emros.sobojinskisolutions.com',
    color: '#059669',
    url: 'https://emros.sobojinskisolutions.com',
    results: 'Flagship product, in active development with a pilot clinic.',
  },
  {
    name: 'Fox Valley Physical Therapy',
    type: 'Client Website',
    description: 'Full website for a physical therapy clinic in Oshkosh, Wisconsin. Service pages, provider info, and online scheduling built for speed and local search.',
    screenshot: '/screenshots/fvpt.png',
    shotUrl: 'foxvalleyphysicaltherapy.com',
    color: '#1D4ED8',
    url: 'https://foxvalleyphysicaltherapy.com',
    results: 'Live client site.',
  },
  {
    name: 'Karni Pier',
    type: 'Client Website',
    description: 'Website for a pier installation company. Migrated off an expensive page builder to a fast, modern site that the owner can afford to keep.',
    screenshot: '/screenshots/karni.png',
    shotUrl: 'karnipier.com',
    color: '#0284C7',
    url: 'https://karnipier.com',
    results: 'Live client site.',
  },
  {
    name: 'Bikers Down',
    type: 'Client Website',
    description: 'Website for a Wisconsin nonprofit supporting injured motorcyclists. Clear mission pages, event info, and donation paths.',
    screenshot: '/screenshots/bikers.png',
    shotUrl: 'bikersdownwi.org',
    color: '#7C3AED',
    url: 'https://bikersdownwi.org',
    results: 'Live client site.',
  },
  {
    name: 'Don Wells Lawn & Snow',
    type: 'Client Website',
    description: 'Website for a lawn care and snow removal business. Service listings, quote requests, and local SEO that brings in seasonal work.',
    screenshot: '/screenshots/donwells.png',
    shotUrl: 'donwells.example.com',
    color: '#4D7C0F',
    url: '',
    results: 'Ongoing client.',
  },
  {
    name: 'Cedar Sense',
    type: 'E-Commerce Website',
    description: 'Custom e-commerce website for a natural products brand. Built with a focus on clean UX, fast load times, and seamless checkout. Includes product filtering, inventory management integration, and mobile-first responsive design.',
    screenshot: null,
    shotUrl: '',
    color: '#059669',
    url: 'https://cedarsense.com',
    results: 'Increased online sales by 40% within the first 3 months of launch.',
  },
  {
    name: 'HempWorks Wisconsin',
    type: 'Business Website + SEO',
    description: 'Full website redesign and SEO campaign for a Wisconsin-based hemp products company. Rebuilt the site for speed and conversions, then executed a comprehensive SEO strategy targeting local and national keywords.',
    screenshot: null,
    shotUrl: '',
    color: '#16A34A',
    url: 'https://hempworkswi.com',
    results: 'Page 1 Google rankings achieved within 90 days for primary keywords.',
  },
]

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
                {project.screenshot && (
                  <BrowserFrame
                    src={project.screenshot}
                    alt={`${project.name} screenshot`}
                    url={project.shotUrl}
                  />
                )}
                <div className="portfolio-card-content">
                  <div className="portfolio-card-type" style={{ color: project.color }}>{project.type}</div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
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
      <section className="final-cta">
        <div className="container">
          <h2 className="reveal">Want to Be Our Next Success Story?</h2>
          <p className="reveal">Whether you need a custom website, SEO that delivers, or a tool built for your business, let&rsquo;s talk.</p>
          <div className="reveal">
            <Link href="/contact" className="btn btn-white btn-lg">Start Your Project</Link>
          </div>
        </div>
      </section>
    </>
  )
}
