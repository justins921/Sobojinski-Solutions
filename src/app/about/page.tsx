import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about the evolution of Sobojinski Solutions from a web design agency to a full business solutions company building purpose-built platforms across multiple industries.',
}

export default function AboutPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="section-label fade-in-up">Our Story</div>
          <h1 className="fade-in-up delay-1">From Web Design to<br />Business Solutions</h1>
          <p className="fade-in-up delay-2">We started building websites. Now we build the operating systems that power modern businesses.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="mission-block reveal">
            <h2>Creating Solutions for Your Business Needs</h2>
            <p>Sobojinski Solutions is a business solutions company that builds purpose-built software platforms. We engineer specialized operating systems for healthcare, hospitality, workforce management, and digital marketing — solving real problems with modern technology.</p>
          </div>
        </div>
      </section>

      {/* Evolution Timeline */}
      <section className="section bg-light">
        <div className="container">
          <div className="content-block reveal">
            <div className="content-block-text">
              <div className="section-label">Our Evolution</div>
              <h2>Building Better, Step by Step</h2>
              <p>What started as a passion for crafting websites evolved into something bigger — a mission to build software that solves real business problems across industries.</p>
            </div>
            <div>
              <div className="timeline">
                <div className="timeline-item past">
                  <div className="timeline-dot"></div>
                  <div className="timeline-year">The Beginning</div>
                  <h4>Web Design Agency</h4>
                  <p>Sobojinski Solutions launched as a custom web design and SEO agency, helping small businesses establish their digital presence with handcrafted websites.</p>
                </div>
                <div className="timeline-item past">
                  <div className="timeline-dot"></div>
                  <div className="timeline-year">The Pivot</div>
                  <h4>Identifying Gaps</h4>
                  <p>Working with clients across healthcare, hospitality, and other industries, we saw the same pattern: businesses stuck with clunky, outdated software that didn&rsquo;t fit their needs.</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-year">Today</div>
                  <h4>Business Solutions Company</h4>
                  <p>We&rsquo;re building a suite of purpose-built platforms — EMR OS, Golf OS, Work OS, and SEO OS — each engineered for the specific challenges of its industry.</p>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-year">What&rsquo;s Next</div>
                  <h4>Expanding the Ecosystem</h4>
                  <p>Each platform will grow and evolve based on user feedback. We&rsquo;re committed to building software that stays ahead of the industries it serves.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Our Values</div>
            <h2>What Drives Us</h2>
            <p>These principles guide every product we build and every decision we make.</p>
          </div>
          <div className="team-values-grid">
            <div className="team-value-card reveal">
              <div className="value-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h4>Purpose Over Features</h4>
              <p>We build what businesses actually need, not what looks impressive on a features page. Every feature earns its place.</p>
            </div>
            <div className="team-value-card reveal">
              <div className="value-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <h4>Direct Communication</h4>
              <p>No jargon, no layers of account managers. You work directly with the people building your platform.</p>
            </div>
            <div className="team-value-card reveal">
              <div className="value-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
              </div>
              <h4>Quality Engineering</h4>
              <p>Modern technology, clean code, and thoughtful design. We build fast, reliable software that our users can trust.</p>
            </div>
            <div className="team-value-card reveal">
              <div className="value-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
              </div>
              <h4>Long-Term Thinking</h4>
              <p>We don&rsquo;t ship and forget. Our platforms evolve with the industries they serve, growing better over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="section bg-light">
        <div className="container">
          <div className="content-block reversed reveal">
            <div className="content-block-text">
              <div className="section-label">The Team</div>
              <h2>Small Team, Big Impact</h2>
              <p>Sobojinski Solutions is led by Justin, who brings a hands-on approach to every project. From strategy to architecture to implementation, you get direct access to the person making the decisions.</p>
              <p>We&rsquo;re intentionally lean. That means faster iteration, stronger accountability, and zero bureaucracy between your needs and our solutions.</p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>Work With Us</Link>
            </div>
            <div className="content-block-visual">
              <div className="visual-card">
                <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
                  <rect x="20" y="10" width="140" height="160" rx="16" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="2" />
                  <circle cx="90" cy="65" r="30" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2" />
                  <path d="M90 55v20m-10-10h20" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
                  <rect x="45" y="115" width="90" height="8" rx="4" fill="#E2E8F0" />
                  <rect x="55" y="132" width="70" height="6" rx="3" fill="#E2E8F0" />
                  <rect x="65" y="148" width="50" height="6" rx="3" fill="#E2E8F0" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <h2 className="reveal">Ready to Build Something<br />Together?</h2>
          <p className="reveal">Whether you need a platform for your industry or a custom website for your business, we&rsquo;re here to help.</p>
          <div className="cta-buttons reveal">
            <Link href="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
            <Link href="/products" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>Explore Products</Link>
          </div>
        </div>
      </section>
    </>
  )
}
