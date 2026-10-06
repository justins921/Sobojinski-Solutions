import Link from 'next/link'
import type { Metadata } from 'next'
import FaqAccordion from '@/components/FaqAccordion'
import BrowserFrame from '@/components/BrowserFrame'

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

function Check({ className = '' }: { className?: string }) {
  return (
    <svg className={`check-icon ${className}`} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const emrBullets = [
  'Underpayment detection flags claims paid below your contracted rates',
  'Denial-risk scoring catches problem claims before you submit them',
  'Documentation-to-code review checks your notes support every billed CPT',
  'AI appeal drafts turn denials into ready-to-send letters in seconds',
]

const ussBullets = [
  'Scan the web for outdated, broken, and ugly business websites',
  'Build a prospect list of businesses that clearly need help',
  'Purpose-built for freelancers and agencies selling web design',
]

const dtaBullets = [
  'Voice-first capture: say what worked, say what did not',
  'Searchable history of your decisions, lessons, and ideas',
  'Your data stays yours on your iPhone',
]

const clientSites = [
  {
    name: 'Fox Valley Physical Therapy',
    tag: 'Healthcare Website',
    desc: 'Full website for a physical therapy clinic in Oshkosh, Wisconsin. Service pages, provider info, and online scheduling built for speed and local search.',
    src: '/screenshots/fvpt.png',
    url: 'foxvalleyphysicaltherapy.com',
    href: 'https://foxvalleyphysicaltherapy.com',
  },
  {
    name: 'Karni Pier',
    tag: 'Contractor Website',
    desc: 'Website for a pier installation company. Migrated off an expensive page builder to a fast, modern site that the owner can afford to keep.',
    src: '/screenshots/karni.png',
    url: 'karnipier.com',
    href: 'https://karnipier.com',
  },
  {
    name: 'Bikers Down',
    tag: 'Nonprofit Website',
    desc: 'Website for a Wisconsin nonprofit supporting injured motorcyclists. Clear mission pages, event info, and donation paths.',
    src: '/screenshots/bikers.png',
    url: 'bikersdownwi.org',
    href: 'https://bikersdownwi.org',
  },
  {
    name: 'Don Wells Lawn & Snow',
    tag: 'Local Service Website',
    desc: 'Website for a lawn care and snow removal business. Service listings, quote requests, and local SEO that brings in seasonal work.',
    src: '/screenshots/donwells.png',
    url: 'donwells.example.com',
    href: '/contact',
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-pill fade-in-up">
              <Check /> Built and shipped by one person
            </div>
            <h1 className="fade-in-up delay-1">
              Software That Works as<br />Hard as You Do
            </h1>
            <p className="hero-subtitle fade-in-up delay-2">
              EMR OS for physical therapy clinics. Websites for local businesses.
              Custom tools that solve specific problems. Real products, live today,
              built by Justin Sobojinski using AI-assisted development to ship faster and iterate quickly.
            </p>
            <div className="hero-buttons fade-in-up delay-3">
              <Link href="#emr" className="btn btn-primary btn-lg">See EMR OS</Link>
              <Link href="/contact" className="btn btn-outline btn-lg">Start a Project</Link>
            </div>
            <div className="hero-shot fade-in-up delay-4">
              <BrowserFrame
                src="/screenshots/emr.png"
                alt="EMR OS dashboard showing the electronic medical records system for physical therapy clinics"
                url="emros.sobojinskisolutions.com"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST STRIP ============ */}
      <section className="trust-strip">
        <div className="container">
          <div className="trust-items reveal">
            <span className="trust-item"><Check /> Real products, not vaporware</span>
            <span className="trust-item"><Check /> Flat honest pricing</span>
            <span className="trust-item"><Check /> You talk to the builder</span>
            <span className="trust-item"><Check /> No bloat, no page builders</span>
          </div>
        </div>
      </section>

      {/* ============ EMR OS FLAGSHIP ============ */}
      <section className="section bg-light" id="emr">
        <div className="container">
          <div className="split reveal">
            <div className="split-text">
              <div className="section-label">Flagship Product</div>
              <h2>EMR OS: the EMR built for independent PT clinics</h2>
              <p className="lead">
                Scheduling, documentation, billing, and patient engagement in one fast,
                intuitive system. Plus AI billing tools that find money other systems leave behind.
              </p>
              <ul className="benefit-list">
                {emrBullets.map((b) => (
                  <li key={b}><Check /> {b}</li>
                ))}
              </ul>
              <p className="price-line">$175 per provider per month. Everything included. No tiers, no upsells.</p>
              <div className="split-cta">
                <a href="https://emros.sobojinskisolutions.com" className="btn btn-primary btn-lg">Visit EMR OS</a>
                <Link href="/products" className="btn btn-outline btn-lg">Full Details</Link>
              </div>
            </div>
            <div className="split-visual">
              <BrowserFrame
                src="/screenshots/emr.png"
                alt="EMR OS electronic medical records dashboard"
                url="emros.sobojinskisolutions.com"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ MORE PRODUCTS ============ */}
      <section className="section" id="products">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">More Products</div>
            <h2>Small tools that do one job well</h2>
            <p>Every product below is live or in active development. I do not sell ideas or roadmaps.</p>
          </div>
          <div className="shot-grid">
            <div className="shot-card reveal">
              <BrowserFrame
                src="/screenshots/uss.png"
                alt="Ugly Site Scraper lead generation tool"
                url="uglysitescraper.com"
              />
              <div className="shot-card-body">
                <h3>Ugly Site Scraper</h3>
                <ul className="benefit-list compact">
                  {ussBullets.map((b) => (
                    <li key={b}><Check /> {b}</li>
                  ))}
                </ul>
                <a href="https://uglysitescraper.com" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Learn More</a>
              </div>
            </div>
            <div className="shot-card reveal">
              <BrowserFrame
                src="/screenshots/dta.png"
                alt="DoThatAgain personal memory app"
                url="dothatagain.app"
              />
              <div className="shot-card-body">
                <h3>DoThatAgain</h3>
                <ul className="benefit-list compact">
                  {dtaBullets.map((b) => (
                    <li key={b}><Check /> {b}</li>
                  ))}
                </ul>
                <a href="https://dothatagain.app" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Learn More</a>
              </div>
            </div>
            <div className="shot-card reveal">
              <div className="shot-soon">
                <span className="soon-badge">In Development</span>
              </div>
              <div className="shot-card-body">
                <h3>Penelope</h3>
                <ul className="benefit-list compact">
                  <li><Check /> AI sales agent for agencies</li>
                  <li><Check /> Cold email infrastructure that books meetings</li>
                  <li><Check /> Prospecting and follow-up on autopilot</li>
                </ul>
                <Link href="/contact" className="btn btn-outline">Get Notified</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CLIENT WORK ============ */}
      <section className="section bg-light" id="client-work">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Client Work</div>
            <h2>Websites built for real businesses</h2>
            <p>Fast, modern websites for local businesses and nonprofits. Designed to load quickly, rank well, and turn visitors into customers.</p>
          </div>
          <div className="client-grid">
            {clientSites.map((c) => (
              <div className="shot-card reveal" key={c.name}>
                <BrowserFrame src={c.src} alt={`${c.name} website`} url={c.url} />
                <div className="shot-card-body">
                  <span className="product-tag">{c.tag}</span>
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                  <a href={c.href} className="card-link" target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    {c.href.startsWith('http') ? 'Visit Site' : 'Get a Site Like This'} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MEET THE BUILDER ============ */}
      <section className="section" id="builder">
        <div className="container">
          <div className="builder-card reveal">
            <div className="builder-photo">
              <img src="/justin.jpg" alt="Justin Sobojinski, founder of Sobojinski Solutions" />
            </div>
            <div className="builder-content">
              <div className="section-label">Meet the Builder</div>
              <h2>Hey, I&rsquo;m Justin</h2>
              <p>
                I&rsquo;m the founder of Sobojinski Solutions, and I build everything here myself,
                using AI-assisted development to ship faster and iterate quickly. Every product,
                every client website, every custom tool. When you work with me,
                you talk directly to the person writing the code.
              </p>
              <ul className="benefit-list">
                <li><Check /> You work directly with the builder, start to finish</li>
                <li><Check /> Real products that ship, not slide decks and roadmaps</li>
                <li><Check /> Honest about what software can and cannot do for you</li>
              </ul>
              <Link href="/about" className="btn btn-outline">More About Me</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CUSTOM TOOLS ============ */}
      <section className="section bg-light" id="custom-tools">
        <div className="container">
          <div className="split reveal">
            <div className="split-text">
              <div className="section-label">Custom Tools</div>
              <h2>Need a tool that does exactly what you need?</h2>
              <p className="lead">
                I build one-off web tools for businesses: calculators, estimators,
                quoting widgets, internal dashboards. Small, focused tools that do one
                job well and live on your website.
              </p>
              <p>
                I also publish free tools anyone can use. Try our{' '}
                <a href="https://generatorwattage.com" target="_blank" rel="noopener noreferrer" className="inline-link">
                  generator sizing calculator
                </a>{' '}
                to see the kind of thing we make.
              </p>
              <div className="split-cta">
                <Link href="/contact" className="btn btn-primary btn-lg">Ask About a Custom Tool</Link>
              </div>
            </div>
            <div className="split-visual">
              <div className="tool-visual">
                <div className="tool-bar" />
                <div className="tool-line tool-line-short" />
                <div className="tool-line" />
                <div className="tool-line tool-line-med" />
                <div className="tool-btn"><Check /> Calculate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Services</div>
            <h2>Web design and SEO that delivers</h2>
            <p>Custom websites and search optimization for small businesses that want to be found and chosen.</p>
          </div>
          <div className="service-grid">
            <div className="service-card reveal">
              <h3>Custom Web Design</h3>
              <p>
                Handcrafted, responsive websites that look great and convert visitors into customers.
                From landing pages to full business sites, designed and developed for your brand and goals.
                No templates, no page builders.
              </p>
              <Link href="/contact" className="btn btn-outline">Get a Quote</Link>
            </div>
            <div className="service-card reveal">
              <h3>SEO Services</h3>
              <p>
                Data-driven SEO that gets you found. Keyword research, on-page optimization,
                technical SEO, and content strategy for local businesses that depend on
                Google for customers.
              </p>
              <Link href="/contact" className="btn btn-outline">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="section bg-light" id="testimonials">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Testimonials</div>
            <h2>Trusted by businesses like yours</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card reveal">
              <div className="testimonial-stars" aria-label="5 out of 5 stars">
                {'★★★★★'}
              </div>
              <p className="testimonial-text">
                &ldquo;Sobojinski Solutions completely transformed our online presence. The website
                they built is fast, beautiful, and our customers love it. We&rsquo;ve seen a
                significant increase in leads since launch.&rdquo;
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: '#1D4ED8' }}>CS</div>
                <div className="testimonial-author-info">
                  <strong>Cedar Sense</strong>
                  <span>E-Commerce Client</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal">
              <div className="testimonial-stars" aria-label="5 out of 5 stars">
                {'★★★★★'}
              </div>
              <p className="testimonial-text">
                &ldquo;The SEO results have been incredible. We went from invisible on Google to
                showing up on the first page within the guaranteed timeframe. Justin really
                knows his stuff.&rdquo;
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: '#059669' }}>HW</div>
                <div className="testimonial-author-info">
                  <strong>HempWorks Wisconsin</strong>
                  <span>SEO Client</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal">
              <div className="testimonial-stars" aria-label="5 out of 5 stars">
                {'★★★★★'}
              </div>
              <p className="testimonial-text">
                &ldquo;Professional, responsive, and genuinely invested in our success. The custom
                design perfectly captures our brand and the whole experience was seamless.&rdquo;
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: '#7C3AED' }}>DW</div>
                <div className="testimonial-author-info">
                  <strong>Don Wells</strong>
                  <span>Web Design Client</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">FAQ</div>
            <h2>Frequently asked questions</h2>
            <p>Straight answers to the questions we hear most.</p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="final-cta">
        <div className="container">
          <h2 className="reveal">Ready to build something real?</h2>
          <p className="reveal">
            Whether you need a product, a website, or a tool that does one job perfectly, let&rsquo;s talk.
          </p>
          <div className="reveal">
            <Link href="/contact" className="btn btn-white btn-lg">Start Your Project</Link>
          </div>
        </div>
      </section>
    </>
  )
}
