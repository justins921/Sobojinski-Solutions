import type { Metadata } from 'next'
import Link from 'next/link'
import BrowserFrame from '@/components/BrowserFrame'

export const metadata: Metadata = {
  title: 'Website Portfolio',
  description: 'Client websites designed and built by Sobojinski Solutions. Real sites for healthcare, local services, and nonprofits.',
}

const projects = [
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
]

export default function PortfolioPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="section-label">Our Work</div>
          <h1>Website Portfolio</h1>
          <p>Client websites we have designed and built. Real sites for healthcare practices, local services, and nonprofits.</p>
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
