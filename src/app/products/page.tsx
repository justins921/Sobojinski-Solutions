import type { Metadata } from 'next'
import Link from 'next/link'
import BrowserFrame from '@/components/BrowserFrame'

export const metadata: Metadata = {
  title: 'Products & Services',
  description: 'Real software products from Sobojinski Solutions: EMR OS for physical therapy clinics, Ugly Site Scraper for lead generation, DoThatAgain for personal memory, plus custom web design and SEO services.',
}

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0', fontSize: '0.9rem', color: '#475569' }}>
      <CheckIcon /> {children}
    </li>
  )
}

export default function ProductsPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="section-label">Products &amp; Services</div>
          <h1>Products &amp; Professional Services</h1>
          <p>Real software we built and ship, plus expert web design and SEO services to grow your business.</p>
        </div>
      </section>

      {/* EMR OS */}
      <section className="section">
        <div className="container">
          <div className="content-block reveal">
            <div className="content-block-text">
              <div className="section-label" style={{ color: '#10B981' }}>Healthcare · Flagship</div>
              <h2>EMR OS</h2>
              <p>Electronic medical records built for independent physical therapy practices. Scheduling, documentation, billing, and patient engagement in one fast, intuitive system that stays out of the way and lets providers focus on patients.</p>
              <p>Includes AI billing tools that work with your own API key: underpayment detection against your fee schedules, denial-risk scoring on claims, documentation-to-code review that checks billed codes against clinical notes, and AI-drafted appeal letters for denied claims.</p>
              <p style={{ fontWeight: 600, color: '#0F172A' }}>$175 per provider per month. Everything included. No tiers, no upsells.</p>
              <ul className="feature-list" style={{ listStyle: 'none', marginTop: '1.5rem' }}>
                <FeatureItem>Patient records &amp; chart management</FeatureItem>
                <FeatureItem>Appointment scheduling &amp; reminders</FeatureItem>
                <FeatureItem>Home exercise programs with video</FeatureItem>
                <FeatureItem>Underpayment detection &amp; fee schedules</FeatureItem>
                <FeatureItem>Denial-pattern analysis &amp; risk scoring</FeatureItem>
                <FeatureItem>Documentation-to-code AI review</FeatureItem>
                <FeatureItem>AI-drafted appeal letters</FeatureItem>
              </ul>
              <a href="https://emros.sobojinskisolutions.com" className="btn btn-primary" style={{ marginTop: '1.5rem', background: '#10B981', borderColor: '#10B981' }}>Visit EMR OS</a>
            </div>
            <div className="content-block-visual">
              <BrowserFrame
                src="/screenshots/emr.png"
                alt="EMR OS screenshot"
                url="emros.sobojinskisolutions.com"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ugly Site Scraper */}
      <section className="section bg-light">
        <div className="container">
          <div className="content-block reversed reveal">
            <div className="content-block-text">
              <div className="section-label" style={{ color: '#F97316' }}>Lead Generation</div>
              <h2>Ugly Site Scraper</h2>
              <p>Find ugly, outdated websites and turn them into web design clients. Ugly Site Scraper scans the web for businesses with sites that clearly need help, so freelancers and agencies can build a steady pipeline of prospects.</p>
              <p>If you sell websites, this is your unfair advantage. Stop guessing who needs a redesign and start with a list.</p>
              <ul className="feature-list" style={{ listStyle: 'none', marginTop: '1.5rem' }}>
                <FeatureItem>Find outdated sites in any market</FeatureItem>
                <FeatureItem>Prospect lists built for outreach</FeatureItem>
                <FeatureItem>Built by someone who sells websites</FeatureItem>
              </ul>
              <a href="https://uglysitescraper.com" className="btn btn-primary" style={{ marginTop: '1.5rem', background: '#F97316', borderColor: '#F97316' }} target="_blank" rel="noopener noreferrer">Visit Ugly Site Scraper</a>
            </div>
            <div className="content-block-visual">
              <BrowserFrame
                src="/screenshots/uss.png"
                alt="Ugly Site Scraper screenshot"
                url="uglysitescraper.com"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DoThatAgain */}
      <section className="section">
        <div className="container">
          <div className="content-block reveal">
            <div className="content-block-text">
              <div className="section-label" style={{ color: '#2563EB' }}>iOS App</div>
              <h2>DoThatAgain</h2>
              <p>A voice-first personal memory app. Record what worked and what did not, rate your experiences, and ask your own history later. Your decisions, lessons, and ideas, searchable whenever you need them.</p>
              <p>Built for people who learn by doing and want to stop repeating mistakes.</p>
              <ul className="feature-list" style={{ listStyle: 'none', marginTop: '1.5rem' }}>
                <FeatureItem>Voice-first quick capture</FeatureItem>
                <FeatureItem>Worked / did not work ratings</FeatureItem>
                <FeatureItem>Full-text search across your history</FeatureItem>
              </ul>
              <a href="https://dothatagain.app" className="btn btn-primary" style={{ marginTop: '1.5rem' }} target="_blank" rel="noopener noreferrer">Visit DoThatAgain</a>
            </div>
            <div className="content-block-visual">
              <BrowserFrame
                src="/screenshots/dta.png"
                alt="DoThatAgain screenshot"
                url="dothatagain.app"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Penelope */}
      <section className="section bg-light">
        <div className="container">
          <div className="content-block reversed reveal">
            <div className="content-block-text">
              <div className="section-label" style={{ color: '#8B5CF6' }}>In Development</div>
              <h2>Penelope</h2>
              <p>An AI sales agent for agencies. Cold email infrastructure, prospecting, and follow-up automation designed to book meetings while you do the work.</p>
              <p>Currently in development. Join the waitlist to hear when it launches.</p>
              <ul className="feature-list" style={{ listStyle: 'none', marginTop: '1.5rem' }}>
                <FeatureItem>Cold email infrastructure</FeatureItem>
                <FeatureItem>Prospecting &amp; list building</FeatureItem>
                <FeatureItem>Automated follow-up sequences</FeatureItem>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem', background: '#8B5CF6', borderColor: '#8B5CF6' }}>Join the Waitlist</Link>
            </div>
            <div className="content-block-visual">
              <div className="visual-card" style={{ borderTop: '4px solid #8B5CF6' }}>
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                  <rect x="25" y="50" width="150" height="100" rx="12" fill="#F5F3FF" stroke="#8B5CF6" strokeWidth="2" />
                  <rect x="45" y="70" width="40" height="8" rx="4" fill="#8B5CF6" opacity="0.2" />
                  <rect x="45" y="88" width="110" height="6" rx="3" fill="#CBD5E1" />
                  <rect x="45" y="102" width="90" height="6" rx="3" fill="#CBD5E1" />
                  <rect x="45" y="116" width="70" height="6" rx="3" fill="#CBD5E1" />
                  <circle cx="150" cy="70" r="14" fill="#8B5CF6" opacity="0.12" />
                  <path d="M144 70l4 4 8-8" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Design */}
      <section className="section" id="web-design">
        <div className="container">
          <div className="content-block reveal">
            <div className="content-block-text">
              <div className="section-label" style={{ color: '#2563EB' }}>Design &amp; Development</div>
              <h2>Custom Web Design</h2>
              <p>We got our start building websites, and we still do it better than anyone. Whether you need a polished landing page, a full business website, or a custom e-commerce store, we craft every detail to match your brand and convert visitors into customers.</p>
              <p>Fully responsive, SEO-friendly, and built with modern technology. No templates, no page builders, just clean, custom code designed for performance.</p>
              <ul className="feature-list" style={{ listStyle: 'none', marginTop: '1.5rem' }}>
                <FeatureItem>Custom responsive design</FeatureItem>
                <FeatureItem>E-commerce &amp; online stores</FeatureItem>
                <FeatureItem>Landing pages &amp; lead generation</FeatureItem>
                <FeatureItem>Content management systems</FeatureItem>
                <FeatureItem>Performance optimization</FeatureItem>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Get a Quote</Link>
            </div>
            <div className="content-block-visual">
              <div className="visual-card" style={{ borderTop: '4px solid #2563EB' }}>
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                  <rect x="25" y="20" width="150" height="100" rx="8" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2" />
                  <rect x="25" y="20" width="150" height="20" rx="8" fill="#2563EB" opacity="0.1" />
                  <circle cx="40" cy="30" r="3" fill="#EF4444" />
                  <circle cx="50" cy="30" r="3" fill="#F59E0B" />
                  <circle cx="60" cy="30" r="3" fill="#22C55E" />
                  <rect x="40" y="50" width="60" height="8" rx="4" fill="#2563EB" opacity="0.2" />
                  <rect x="40" y="65" width="120" height="5" rx="2.5" fill="#CBD5E1" />
                  <rect x="40" y="76" width="100" height="5" rx="2.5" fill="#CBD5E1" />
                  <rect x="40" y="87" width="80" height="5" rx="2.5" fill="#CBD5E1" />
                  <rect x="40" y="100" width="50" height="12" rx="6" fill="#2563EB" opacity="0.15" />
                  <rect x="25" y="135" width="45" height="45" rx="6" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1" opacity="0.6" />
                  <rect x="78" y="135" width="45" height="45" rx="6" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1" opacity="0.6" />
                  <rect x="130" y="135" width="45" height="45" rx="6" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1" opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services */}
      <section className="section bg-light" id="seo-services">
        <div className="container">
          <div className="content-block reversed reveal">
            <div className="content-block-text">
              <div className="section-label" style={{ color: '#F97316' }}>Search Optimization</div>
              <h2>SEO Services</h2>
              <p>Our data-driven SEO strategies get your business found by the right people at the right time. We combine technical expertise, content strategy, and proven tactics to boost your rankings and drive organic traffic that converts.</p>
              <ul className="feature-list" style={{ listStyle: 'none', marginTop: '1.5rem' }}>
                <FeatureItem>Keyword research &amp; strategy</FeatureItem>
                <FeatureItem>On-page &amp; technical SEO</FeatureItem>
                <FeatureItem>Link building &amp; outreach</FeatureItem>
                <FeatureItem>Content strategy &amp; optimization</FeatureItem>
                <FeatureItem>Monthly reporting &amp; analytics</FeatureItem>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem', background: '#F97316', borderColor: '#F97316' }}>Get Started</Link>
            </div>
            <div className="content-block-visual">
              <div className="visual-card" style={{ borderTop: '4px solid #F97316' }}>
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                  <rect x="25" y="30" width="150" height="140" rx="12" fill="#FFF7ED" stroke="#F97316" strokeWidth="2" />
                  <circle cx="65" cy="65" r="20" fill="none" stroke="#F97316" strokeWidth="2" />
                  <line x1="80" y1="80" x2="95" y2="95" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
                  <rect x="110" y="55" width="50" height="6" rx="3" fill="#F97316" opacity="0.3" />
                  <rect x="110" y="68" width="35" height="6" rx="3" fill="#CBD5E1" />
                  <path d="M40 120 L65 105 L90 115 L115 90 L140 100 L165 85" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <path d="M40 120 L65 105 L90 115 L115 90 L140 100 L165 85 L165 150 L40 150 Z" fill="#F97316" opacity="0.05" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <h2 className="reveal">Not Sure Which Product<br />Is Right for You?</h2>
          <p className="reveal">Reach out and we&rsquo;ll help you find the right fit for your business.</p>
          <div className="cta-buttons reveal">
            <Link href="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
            <Link href="/about" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>Learn About Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
