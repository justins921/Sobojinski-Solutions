import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore our suite of purpose-built software platforms: EMR OS for healthcare, Golf OS for golf improvement, Work OS for workforce coordination, and SEO OS for digital marketing.',
}

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

export default function ProductsPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="section-label">Our Products</div>
          <h1>Purpose-Built Platforms</h1>
          <p>Each product is an independent operating system designed for the specific workflows, compliance needs, and daily operations of its industry.</p>
        </div>
      </section>

      {/* EMR OS */}
      <section className="section">
        <div className="container">
          <div className="content-block reveal">
            <div className="content-block-text">
              <div className="section-label" style={{ color: '#10B981' }}>Healthcare</div>
              <h2>EMR OS</h2>
              <p>A modern electronic medical records platform designed for independent practices and small clinics. EMR OS streamlines patient care, simplifies records management, and keeps you compliant — without the complexity of enterprise systems.</p>
              <p>Built from the ground up for providers who want a fast, intuitive system that stays out of the way and lets them focus on patients.</p>
              <ul className="feature-list" style={{ listStyle: 'none', marginTop: '1.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0', fontSize: '0.9rem', color: '#475569' }}><CheckIcon /> Patient records & chart management</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0', fontSize: '0.9rem', color: '#475569' }}><CheckIcon /> Appointment scheduling & reminders</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0', fontSize: '0.9rem', color: '#475569' }}><CheckIcon /> E-prescribing & medication tracking</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0', fontSize: '0.9rem', color: '#475569' }}><CheckIcon /> HIPAA-compliant data handling</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0', fontSize: '0.9rem', color: '#475569' }}><CheckIcon /> Billing & insurance integration</li>
              </ul>
              <a href="https://emros.sobojinskisolutions.com" className="btn btn-primary" style={{ marginTop: '1.5rem', background: '#10B981', borderColor: '#10B981' }}>Visit EMR OS</a>
            </div>
            <div className="content-block-visual">
              <div className="visual-card" style={{ borderTop: '4px solid #10B981' }}>
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                  <rect x="30" y="20" width="140" height="160" rx="12" fill="#F0FDF4" stroke="#10B981" strokeWidth="2" />
                  <rect x="50" y="40" width="100" height="8" rx="4" fill="#10B981" opacity="0.3" />
                  <rect x="50" y="58" width="70" height="6" rx="3" fill="#CBD5E1" />
                  <rect x="50" y="74" width="100" height="6" rx="3" fill="#CBD5E1" />
                  <rect x="50" y="90" width="85" height="6" rx="3" fill="#CBD5E1" />
                  <path d="M50 115h100" stroke="#E2E8F0" strokeWidth="1" />
                  <rect x="50" y="130" width="40" height="28" rx="6" fill="#10B981" opacity="0.15" />
                  <rect x="100" y="130" width="40" height="28" rx="6" fill="#10B981" opacity="0.1" />
                  <path d="M60 140v8m4-12v12m4-8v8" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Golf OS */}
      <section className="section bg-light">
        <div className="container">
          <div className="content-block reversed reveal">
            <div className="content-block-text">
              <div className="section-label" style={{ color: '#22C55E' }}>Golf Improvement</div>
              <h2>Golf OS</h2>
              <p>Complete golf course and club management in one platform. Golf OS handles tee time bookings, member management, POS integration, and course operations — giving your staff and members a seamless experience.</p>
              <p>Designed for courses, clubs, and resorts that want modern tools without the cost and complexity of legacy golf management software.</p>
              <ul className="feature-list" style={{ listStyle: 'none', marginTop: '1.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0', fontSize: '0.9rem', color: '#475569' }}><CheckIcon /> Tee time booking & management</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0', fontSize: '0.9rem', color: '#475569' }}><CheckIcon /> Member profiles & communication</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0', fontSize: '0.9rem', color: '#475569' }}><CheckIcon /> POS & pro shop integration</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0', fontSize: '0.9rem', color: '#475569' }}><CheckIcon /> Course condition tracking</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0', fontSize: '0.9rem', color: '#475569' }}><CheckIcon /> Tournament & event management</li>
              </ul>
              <a href="https://golf.sobojinskisolutions.com" className="btn btn-primary" style={{ marginTop: '1.5rem', background: '#22C55E', borderColor: '#22C55E' }}>Visit Golf OS</a>
            </div>
            <div className="content-block-visual">
              <div className="visual-card" style={{ borderTop: '4px solid #22C55E' }}>
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="80" fill="#F0FDF4" stroke="#22C55E" strokeWidth="2" />
                  <circle cx="100" cy="100" r="55" fill="none" stroke="#22C55E" strokeWidth="1" opacity="0.3" />
                  <circle cx="100" cy="100" r="30" fill="none" stroke="#22C55E" strokeWidth="1" opacity="0.2" />
                  <circle cx="100" cy="100" r="6" fill="#22C55E" />
                  <line x1="100" y1="40" x2="100" y2="20" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
                  <rect x="96" y="10" width="8" height="12" rx="2" fill="#22C55E" opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work OS */}
      <section className="section">
        <div className="container">
          <div className="content-block reveal">
            <div className="content-block-text">
              <div className="section-label" style={{ color: '#8B5CF6' }}>Productivity</div>
              <h2>Work OS</h2>
              <p>Workforce coordination and project management built for teams that need to move fast. Work OS combines task tracking, scheduling, team communication, and reporting into a single streamlined interface.</p>
              <p>No bloat, no feature overload — just the tools your team actually needs to get work done and stay aligned.</p>
              <ul className="feature-list" style={{ listStyle: 'none', marginTop: '1.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0', fontSize: '0.9rem', color: '#475569' }}><CheckIcon /> Task & project management</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0', fontSize: '0.9rem', color: '#475569' }}><CheckIcon /> Team scheduling & availability</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0', fontSize: '0.9rem', color: '#475569' }}><CheckIcon /> Time tracking & reporting</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0', fontSize: '0.9rem', color: '#475569' }}><CheckIcon /> File sharing & collaboration</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0', fontSize: '0.9rem', color: '#475569' }}><CheckIcon /> Customizable workflows</li>
              </ul>
              <a href="https://workos.sobojinskisolutions.com" className="btn btn-primary" style={{ marginTop: '1.5rem', background: '#8B5CF6', borderColor: '#8B5CF6' }}>Visit Work OS</a>
            </div>
            <div className="content-block-visual">
              <div className="visual-card" style={{ borderTop: '4px solid #8B5CF6' }}>
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                  <rect x="20" y="40" width="160" height="120" rx="12" fill="#F5F3FF" stroke="#8B5CF6" strokeWidth="2" />
                  <rect x="35" y="55" width="50" height="40" rx="6" fill="#8B5CF6" opacity="0.15" />
                  <rect x="95" y="55" width="70" height="18" rx="4" fill="#8B5CF6" opacity="0.1" />
                  <rect x="95" y="80" width="50" height="6" rx="3" fill="#CBD5E1" />
                  <rect x="35" y="110" width="130" height="6" rx="3" fill="#CBD5E1" />
                  <rect x="35" y="125" width="90" height="6" rx="3" fill="#CBD5E1" />
                  <rect x="35" y="140" width="60" height="6" rx="3" fill="#CBD5E1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO OS */}
      <section className="section bg-light">
        <div className="container">
          <div className="content-block reversed reveal">
            <div className="content-block-text">
              <div className="section-label" style={{ color: '#F97316' }}>Marketing</div>
              <h2>SEO OS</h2>
              <p>SEO management and optimization platform built for agencies, marketers, and business owners who want actionable insights instead of data overload. Track rankings, audit sites, analyze competitors, and execute strategies from one dashboard.</p>
              <p>Powered by the same SEO expertise behind our proven 90-day ranking guarantee.</p>
              <ul className="feature-list" style={{ listStyle: 'none', marginTop: '1.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0', fontSize: '0.9rem', color: '#475569' }}><CheckIcon /> Keyword tracking & research</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0', fontSize: '0.9rem', color: '#475569' }}><CheckIcon /> Site audits & technical SEO</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0', fontSize: '0.9rem', color: '#475569' }}><CheckIcon /> Competitor analysis & benchmarking</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0', fontSize: '0.9rem', color: '#475569' }}><CheckIcon /> Backlink monitoring</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0', fontSize: '0.9rem', color: '#475569' }}><CheckIcon /> Automated reporting & alerts</li>
              </ul>
              <a href="https://seoos.sobojinskisolutions.com" className="btn btn-primary" style={{ marginTop: '1.5rem', background: '#F97316', borderColor: '#F97316' }}>Visit SEO OS</a>
            </div>
            <div className="content-block-visual">
              <div className="visual-card" style={{ borderTop: '4px solid #F97316' }}>
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                  <rect x="25" y="30" width="150" height="140" rx="12" fill="#FFF7ED" stroke="#F97316" strokeWidth="2" />
                  <path d="M50 140 L75 110 L100 125 L125 80 L150 90" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <circle cx="50" cy="140" r="3" fill="#F97316" />
                  <circle cx="75" cy="110" r="3" fill="#F97316" />
                  <circle cx="100" cy="125" r="3" fill="#F97316" />
                  <circle cx="125" cy="80" r="3" fill="#F97316" />
                  <circle cx="150" cy="90" r="3" fill="#F97316" />
                  <rect x="45" y="45" width="40" height="8" rx="4" fill="#F97316" opacity="0.2" />
                  <rect x="95" y="45" width="55" height="8" rx="4" fill="#F97316" opacity="0.1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Also Offering Web Design */}
      <section className="section">
        <div className="container">
          <div className="mission-block reveal">
            <h2>Still Need a Website?</h2>
            <p>We haven&rsquo;t forgotten our roots. Sobojinski Solutions still offers custom web design and SEO services for businesses that need a strong digital presence. <Link href="/contact" style={{ color: '#fff', textDecoration: 'underline' }}>Get in touch</Link> to discuss your project.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <h2 className="reveal">Not Sure Which Platform<br />Is Right for You?</h2>
          <p className="reveal">Schedule a call with our team and we&rsquo;ll help you find the right solution for your business.</p>
          <div className="cta-buttons reveal">
            <Link href="/contact" className="btn btn-primary btn-lg">Schedule a Call</Link>
            <Link href="/about" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>Learn About Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
