import Link from 'next/link'
import type { Metadata } from 'next'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Sobojinski Solutions | Custom Software, Websites & SEO',
  description: 'Sobojinski Solutions builds real software products like EMR OS for physical therapy clinics, plus client websites, SEO, and custom web tools for small businesses.',
  alternates: { canonical: 'https://sobojinskisolutions.com/' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Sobojinski Solutions',
  url: 'https://sobojinskisolutions.com/',
  description: 'Custom software products, client websites, SEO services, and one-off web tools for small businesses.',
  areaServed: 'United States',
  sameAs: [
    'https://emros.sobojinskisolutions.com',
    'https://uglysitescraper.com',
    'https://dothatagain.app',
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="grid-pattern"></div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="trust-badges fade-in-up">
                <span className="trust-badge">
                  <span className="badge-check">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  Real Products, Not Vaporware
                </span>
                <span className="trust-badge">
                  <span className="badge-check">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  Built by Hand
                </span>
                <span className="trust-badge">
                  <span className="badge-check">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  Direct Access to the Builder
                </span>
              </div>
              <h1 className="fade-in-up delay-1">
                Software That Works as{' '}
                <span className="highlight">Hard as You Do</span>
              </h1>
              <p className="hero-subtitle fade-in-up delay-2">
                We build real products like EMR OS for physical therapy clinics, design websites for local businesses, and create custom web tools that solve specific problems. No vaporware, no bloated platforms. Just software that ships and works.
              </p>
              <div className="hero-buttons fade-in-up delay-3">
                <Link href="#products" className="btn btn-primary btn-lg">See Our Products</Link>
                <Link href="/contact" className="btn btn-white btn-lg">Start a Project</Link>
              </div>
            </div>
            <div className="hero-visual fade-in-up delay-2">
              <div className="hero-visual-grid">
                <div className="hero-product-chip chip-emr">
                  <div className="chip-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                  </div>
                  <div className="chip-name">EMR OS</div>
                  <div className="chip-desc">Flagship product</div>
                </div>
                <div className="hero-product-chip">
                  <div className="chip-icon" style={{ background: 'rgba(249, 115, 22, 0.15)', color: '#F97316' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                  </div>
                  <div className="chip-name">Ugly Site Scraper</div>
                  <div className="chip-desc">Lead generation</div>
                </div>
                <div className="hero-product-chip">
                  <div className="chip-icon" style={{ background: 'rgba(37, 99, 235, 0.15)', color: '#2563EB' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                  </div>
                  <div className="chip-name">DoThatAgain</div>
                  <div className="chip-desc">Personal memory app</div>
                </div>
                <div className="hero-product-chip">
                  <div className="chip-icon" style={{ background: 'rgba(139, 92, 246, 0.15)', color: '#8B5CF6' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                  </div>
                  <div className="chip-name">Penelope</div>
                  <div className="chip-desc">In development</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section" id="products">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Our Products</div>
            <h2>Real Software, Built and Shipping</h2>
            <p>Every product below is live or in active development. We do not sell ideas or roadmaps.</p>
          </div>

          {/* EMR OS, flagship */}
          <div className="reveal" style={{ marginBottom: '2rem' }}>
            <div className="product-card" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="card-visual visual-emr" style={{ height: '200px' }}>
                <span className="visual-initial">EMR OS</span>
              </div>
              <div>
              <div className="flex" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                <div className="product-card-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                </div>
                <div>
                  <h3 style={{ margin: 0 }}>EMR OS</h3>
                  <span className="product-tag">Healthcare · Flagship</span>
                </div>
              </div>
              <p style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>Electronic medical records built for independent physical therapy practices. Scheduling, documentation, billing, and patient engagement in one fast, intuitive system, with AI billing tools that catch underpayments, score denial risk, check documentation against billed codes, and draft appeal letters.</p>
              <p style={{ fontWeight: 600, color: '#0F172A', marginBottom: '1.25rem' }}>$175 per provider per month. Everything included. No tiers, no upsells.</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href="https://emros.sobojinskisolutions.com" className="btn btn-primary">Visit EMR OS</a>
                <Link href="/products" className="btn btn-outline">Full Details</Link>
              </div>
              </div>
            </div>
          </div>

          <div className="products-grid">
            <div className="product-card reveal">
              <div className="card-visual visual-uss">
                <span className="visual-initial">USS</span>
              </div>
              <div className="product-card-icon" style={{ background: 'rgba(249, 115, 22, 0.1)', color: '#F97316' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              </div>
              <h3>Ugly Site Scraper</h3>
              <span className="product-tag" style={{ background: 'rgba(249, 115, 22, 0.1)', color: '#C2410C' }}>Lead Generation</span>
              <p>Find ugly, outdated websites and turn them into web design clients. Built for freelancers and agencies who want a steady pipeline of prospects that clearly need help.</p>
              <a href="https://uglysitescraper.com" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
            <div className="product-card reveal">
              <div className="card-visual visual-dta">
                <span className="visual-initial">DTA</span>
              </div>
              <div className="product-card-icon" style={{ background: 'rgba(37, 99, 235, 0.1)', color: '#2563EB' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
              </div>
              <h3>DoThatAgain</h3>
              <span className="product-tag" style={{ background: 'rgba(37, 99, 235, 0.1)', color: '#1D4ED8' }}>iOS App</span>
              <p>A voice-first personal memory app. Record what worked and what did not, then ask it later. Your own searchable history of decisions, lessons, and ideas.</p>
              <a href="https://dothatagain.app" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
            <div className="product-card reveal">
              <div className="card-visual visual-pen">
                <span className="visual-initial">P</span>
              </div>
              <div className="product-card-icon" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
              </div>
              <h3>Penelope</h3>
              <span className="product-tag" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#7C3AED' }}>In Development</span>
              <p>An AI sales agent for agencies. Cold email infrastructure, prospecting, and follow-up automation designed to book meetings while you do the work.</p>
              <Link href="/contact" className="btn btn-outline">Get Notified</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Work */}
      <section className="section bg-light" id="client-work">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Client Work</div>
            <h2>Websites We Have Built for Real Businesses</h2>
            <p>Fast, modern websites for local businesses and nonprofits. Designed to load quickly, rank well, and turn visitors into customers.</p>
          </div>
          <div className="products-grid">
            <div className="product-card reveal">
              <div className="card-visual visual-fvpt">
                <span className="visual-initial">FVPT</span>
              </div>
              <div className="product-card-icon" style={{ background: 'rgba(37, 99, 235, 0.1)', color: '#2563EB' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
              </div>
              <h3>Fox Valley Physical Therapy</h3>
              <span className="product-tag" style={{ background: '#EFF6FF', color: '#2563EB' }}>Healthcare Website</span>
              <p>Full website for a physical therapy clinic in Oshkosh, Wisconsin. Service pages, provider info, and online scheduling built for speed and local search.</p>
              <a href="https://foxvalleyphysicaltherapy.com" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Visit Site</a>
            </div>
            <div className="product-card reveal">
              <div className="card-visual visual-karni">
                <span className="visual-initial">KP</span>
              </div>
              <div className="product-card-icon" style={{ background: 'rgba(14, 165, 233, 0.1)', color: '#0EA5E9' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20" /><path d="M4 20V10l8-6 8 6v10" /></svg>
              </div>
              <h3>Karni Pier</h3>
              <span className="product-tag" style={{ background: '#F0F9FF', color: '#0EA5E9' }}>Contractor Website</span>
              <p>Website for a pier installation company. Migrated off an expensive page builder to a fast, modern site that the owner can afford to keep.</p>
              <a href="https://karnipier.com" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Visit Site</a>
            </div>
            <div className="product-card reveal">
              <div className="card-visual visual-bikers">
                <span className="visual-initial">BD</span>
              </div>
              <div className="product-card-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </div>
              <h3>Bikers Down</h3>
              <span className="product-tag" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#047857' }}>Nonprofit Website</span>
              <p>Website for a Wisconsin nonprofit supporting injured motorcyclists. Clear mission pages, event info, and donation paths.</p>
              <a href="https://bikersdownwi.org" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Visit Site</a>
            </div>
            <div className="product-card reveal">
              <div className="card-visual visual-donwells">
                <span className="visual-initial">DW</span>
              </div>
              <div className="product-card-icon" style={{ background: 'rgba(101, 163, 13, 0.1)', color: '#65A30D' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-7" /><path d="M12 15a5 5 0 0 0-5-5H4a2 2 0 0 0 0 4h3" /><path d="M12 15a5 5 0 0 1 5-5h3a2 2 0 0 1 0 4h-3" /></svg>
              </div>
              <h3>Don Wells Lawn &amp; Snow</h3>
              <span className="product-tag" style={{ background: 'rgba(101, 163, 13, 0.1)', color: '#4D7C0F' }}>Local Service Website</span>
              <p>Website for a lawn care and snow removal business. Service listings, quote requests, and local SEO that brings in seasonal work.</p>
              <Link href="/contact" className="btn btn-outline">Get a Site Like This</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Builder */}
      <section className="section" id="builder">
        <div className="container">
          <div className="builder-grid reveal">
            <div className="builder-photo">
              <span className="builder-initials">JS</span>
            </div>
            <div className="builder-content">
              <div className="section-label">Meet the Builder</div>
              <h2>Hey, I&rsquo;m Justin</h2>
              <p>I&rsquo;m the founder of Sobojinski Solutions, and I build everything here myself. Every product, every client website, every custom tool. When you work with me, you talk directly to the person writing the code.</p>
              <p>No account managers, no handoffs, no junior developers learning on your dime. Just one person who cares about shipping software that works.</p>
              <ul className="builder-points">
                <li>
                  <span className="point-check">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  You work directly with the builder, start to finish
                </li>
                <li>
                  <span className="point-check">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  Real products that ship, not slide decks and roadmaps
                </li>
                <li>
                  <span className="point-check">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  Honest about what software can and cannot do for you
                </li>
              </ul>
              <Link href="/about" className="btn btn-outline">More About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Tools */}
      <section className="section" id="custom-tools">
        <div className="container">
          <div className="content-block reveal">
            <div className="content-block-text">
              <div className="section-label" style={{ color: '#2563EB' }}>Custom Tools</div>
              <h2>Need a Tool That Does Exactly What You Need?</h2>
              <p>We build one-off web tools for businesses. Calculators, estimators, quoting widgets, internal dashboards. Small, focused tools that do one job well and live on your website.</p>
              <p>We also publish free tools anyone can use. Try our <a href="https://generatorwattage.com" target="_blank" rel="noopener noreferrer" style={{ color: '#2563EB', fontWeight: 600 }}>generator sizing calculator</a> to see the kind of thing we make.</p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Ask About a Custom Tool</Link>
            </div>
            <div className="content-block-visual">
              <div className="visual-card" style={{ borderTop: '4px solid #2563EB' }}>
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                  <rect x="40" y="30" width="120" height="140" rx="12" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2" />
                  <rect x="58" y="50" width="84" height="10" rx="5" fill="#2563EB" opacity="0.2" />
                  <rect x="58" y="70" width="84" height="10" rx="5" fill="#CBD5E1" />
                  <rect x="58" y="90" width="60" height="10" rx="5" fill="#CBD5E1" />
                  <rect x="58" y="115" width="84" height="28" rx="8" fill="#2563EB" opacity="0.15" />
                  <path d="M75 129l6 6 12-12" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-light" id="services">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Our Services</div>
            <h2>Web Design &amp; SEO That Delivers</h2>
            <p>Custom websites and search optimization for small businesses that want to be found and chosen.</p>
          </div>
          <div className="products-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="product-card reveal" style={{ borderTop: '4px solid #2563EB' }}>
              <div className="product-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
              </div>
              <h3>Custom Web Design</h3>
              <span className="product-tag" style={{ background: '#EFF6FF', color: '#2563EB' }}>Design &amp; Development</span>
              <p>Handcrafted, responsive websites that look great and convert visitors into customers. From landing pages to full business sites, we design and develop sites tailored to your brand and goals. No templates, no page builders.</p>
              <Link href="/contact" className="btn btn-outline">Get a Quote</Link>
            </div>
            <div className="product-card reveal" style={{ borderTop: '4px solid #F97316' }}>
              <div className="product-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
              </div>
              <h3>SEO Services</h3>
              <span className="product-tag" style={{ background: '#FFF7ED', color: '#F97316' }}>Search Optimization</span>
              <p>Data-driven SEO that gets you found. Keyword research, on-page optimization, technical SEO, and content strategy for local businesses that depend on Google for customers.</p>
              <Link href="/contact" className="btn btn-outline">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section bg-light" id="why-us">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Why Sobojinski Solutions</div>
            <h2>Why Work With Us?</h2>
            <p>Plenty of people sell websites and software. Here is what makes us different.</p>
          </div>
          <div className="why-grid">
            <ul className="why-list reveal">
              <li>
                <span className="why-check">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <div className="why-text">
                  <strong>Real products, not promises</strong>
                  <span>Everything we sell exists and works today. We do not pitch roadmaps or vaporware.</span>
                </div>
              </li>
              <li>
                <span className="why-check">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <div className="why-text">
                  <strong>One person, full accountability</strong>
                  <span>No layers, no finger-pointing. If something is wrong, you know exactly who fixes it.</span>
                </div>
              </li>
              <li>
                <span className="why-check">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <div className="why-text">
                  <strong>Built for speed</strong>
                  <span>Hand-coded sites and software with no bloat. Fast load times, fast iterations, fast answers.</span>
                </div>
              </li>
            </ul>
            <ul className="why-list reveal">
              <li>
                <span className="why-check">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <div className="why-text">
                  <strong>Honest pricing</strong>
                  <span>EMR OS is one flat price with everything included. Client work is quoted straight, no surprise add-ons.</span>
                </div>
              </li>
              <li>
                <span className="why-check">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <div className="why-text">
                  <strong>Small business focused</strong>
                  <span>We build for the businesses that get ignored by big agencies: local shops, clinics, contractors, nonprofits.</span>
                </div>
              </li>
              <li>
                <span className="why-check">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <div className="why-text">
                  <strong>We use what we sell</strong>
                  <span>Our own business runs on the same approach we sell to clients. We eat our own cooking.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" id="testimonials">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Testimonials</div>
            <h2>Trusted by Businesses Like Yours</h2>
            <p>Don&rsquo;t take our word for it. Here&rsquo;s what our clients have to say.</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card reveal">
              <div className="testimonial-stars">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2.2 4.4L15 6.3l-3.5 3.4.8 4.9L8 12.4l-4.3 2.2.8-4.9L1 6.3l4.8-.9L8 1z" /></svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2.2 4.4L15 6.3l-3.5 3.4.8 4.9L8 12.4l-4.3 2.2.8-4.9L1 6.3l4.8-.9L8 1z" /></svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2.2 4.4L15 6.3l-3.5 3.4.8 4.9L8 12.4l-4.3 2.2.8-4.9L1 6.3l4.8-.9L8 1z" /></svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2.2 4.4L15 6.3l-3.5 3.4.8 4.9L8 12.4l-4.3 2.2.8-4.9L1 6.3l4.8-.9L8 1z" /></svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2.2 4.4L15 6.3l-3.5 3.4.8 4.9L8 12.4l-4.3 2.2.8-4.9L1 6.3l4.8-.9L8 1z" /></svg>
              </div>
              <p className="testimonial-text">&ldquo;Sobojinski Solutions completely transformed our online presence. The website they built is fast, beautiful, and our customers love it. We&rsquo;ve seen a significant increase in leads since launch.&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: '#2563EB' }}>CS</div>
                <div className="testimonial-author-info">
                  <strong>Cedar Sense</strong>
                  <span>E-Commerce Client</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal">
              <div className="testimonial-stars">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2.2 4.4L15 6.3l-3.5 3.4.8 4.9L8 12.4l-4.3 2.2.8-4.9L1 6.3l4.8-.9L8 1z" /></svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2.2 4.4L15 6.3l-3.5 3.4.8 4.9L8 12.4l-4.3 2.2.8-4.9L1 6.3l4.8-.9L8 1z" /></svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2.2 4.4L15 6.3l-3.5 3.4.8 4.9L8 12.4l-4.3 2.2.8-4.9L1 6.3l4.8-.9L8 1z" /></svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2.2 4.4L15 6.3l-3.5 3.4.8 4.9L8 12.4l-4.3 2.2.8-4.9L1 6.3l4.8-.9L8 1z" /></svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2.2 4.4L15 6.3l-3.5 3.4.8 4.9L8 12.4l-4.3 2.2.8-4.9L1 6.3l4.8-.9L8 1z" /></svg>
              </div>
              <p className="testimonial-text">&ldquo;The SEO results have been incredible. We went from invisible on Google to showing up on the first page within the guaranteed timeframe. Justin really knows his stuff.&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: '#10B981' }}>HW</div>
                <div className="testimonial-author-info">
                  <strong>HempWorks Wisconsin</strong>
                  <span>SEO Client</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal">
              <div className="testimonial-stars">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2.2 4.4L15 6.3l-3.5 3.4.8 4.9L8 12.4l-4.3 2.2.8-4.9L1 6.3l4.8-.9L8 1z" /></svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2.2 4.4L15 6.3l-3.5 3.4.8 4.9L8 12.4l-4.3 2.2.8-4.9L1 6.3l4.8-.9L8 1z" /></svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2.2 4.4L15 6.3l-3.5 3.4.8 4.9L8 12.4l-4.3 2.2.8-4.9L1 6.3l4.8-.9L8 1z" /></svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2.2 4.4L15 6.3l-3.5 3.4.8 4.9L8 12.4l-4.3 2.2.8-4.9L1 6.3l4.8-.9L8 1z" /></svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2.2 4.4L15 6.3l-3.5 3.4.8 4.9L8 12.4l-4.3 2.2.8-4.9L1 6.3l4.8-.9L8 1z" /></svg>
              </div>
              <p className="testimonial-text">&ldquo;Professional, responsive, and genuinely invested in our success. The custom design perfectly captures our brand and the whole experience was seamless.&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: '#8B5CF6' }}>DW</div>
                <div className="testimonial-author-info">
                  <strong>Don Wells</strong>
                  <span>Web Design Client</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">FAQ</div>
            <h2>Frequently Asked Questions</h2>
            <p>Straight answers to the questions we hear most.</p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <h2 className="reveal">Ready to Build<br />Something Real?</h2>
          <p className="reveal">Whether you need a product, a website, or a tool that does one job perfectly, let&rsquo;s talk.</p>
          <div className="cta-buttons reveal">
            <Link href="/contact" className="btn btn-primary btn-lg">Start Your Project</Link>
            <Link href="/products" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>View All Products</Link>
          </div>
        </div>
      </section>
    </>
  )
}
