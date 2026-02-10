import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero bg-constellation">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="flag-label flag-olive fade-in-up">What We Do</div>
              <h1 className="fade-in-up delay-1">
                Your all-in-one<br />
                design and SEO<br />
                <span className="highlight">partner.</span>
              </h1>
              <p className="hero-subtitle fade-in-up delay-2">
                Custom websites, landing pages, ongoing support, and SEO for small teams who want a site that converts and stays easy to manage.
              </p>
              <div className="hero-buttons fade-in-up delay-3">
                <Link href="/contact" className="btn btn-primary btn-lg">Book a Call</Link>
                <a href="#featured-work" className="btn btn-outline btn-lg">View Case Studies</a>
              </div>
              <ul className="pill-tags fade-in-up delay-4">
                <li className="pill-tag pill-teal">Custom builds</li>
                <li className="pill-tag pill-coral">Landing pages</li>
                <li className="pill-tag pill-mustard">SEO foundations</li>
                <li className="pill-tag pill-olive">Ongoing support</li>
                <li className="pill-tag">Fast turnaround</li>
              </ul>
            </div>
            <div className="hero-decor fade-in-up delay-2">
              <svg viewBox="0 0 500 500" fill="none" style={{ width: '100%', maxWidth: '480px' }}>
                <path d="M60 380 Q160 200 360 180" stroke="#2A9D8F" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.55" />
                <path d="M80 400 Q180 230 380 210" stroke="#E76F51" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.45" />
                <path d="M100 415 Q200 255 395 235" stroke="#E9C46A" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.45" />
                <circle cx="300" cy="160" r="65" fill="#E9C46A" opacity="0.7" />
                <circle cx="300" cy="160" r="65" stroke="#2D3436" strokeWidth="1.5" fill="none" opacity="0.3" />
                <rect x="80" y="80" width="50" height="50" rx="10" fill="#2A9D8F" opacity="0.7" stroke="#2D3436" strokeWidth="1" />
                <rect x="150" y="120" width="35" height="35" rx="8" fill="#E76F51" opacity="0.6" stroke="#2D3436" strokeWidth="1" />
                <rect x="380" y="100" width="40" height="40" rx="8" fill="#4A7C9B" opacity="0.5" stroke="#2D3436" strokeWidth="1" />
                <rect x="400" y="290" width="55" height="35" rx="8" fill="#8B9556" opacity="0.5" stroke="#2D3436" strokeWidth="1" />
                <rect x="120" y="300" width="30" height="45" rx="6" fill="#E9C46A" opacity="0.4" stroke="#2D3436" strokeWidth="1" />
                <g transform="translate(200,310)">
                  <line x1="0" y1="-40" x2="0" y2="40" stroke="#2D3436" strokeWidth="1.5" opacity="0.25" />
                  <line x1="-40" y1="0" x2="40" y2="0" stroke="#2D3436" strokeWidth="1.5" opacity="0.25" />
                  <line x1="-28" y1="-28" x2="28" y2="28" stroke="#2D3436" strokeWidth="1" opacity="0.2" />
                  <line x1="28" y1="-28" x2="-28" y2="32" stroke="#2D3436" strokeWidth="1" opacity="0.2" />
                  <circle cx="0" cy="0" r="6" fill="#2A9D8F" opacity="0.5" />
                  <circle cx="0" cy="0" r="2.5" fill="#E76F51" opacity="0.6" />
                </g>
                <g transform="translate(420,180) scale(0.45)">
                  <line x1="0" y1="-25" x2="0" y2="25" stroke="#E9C46A" strokeWidth="2" opacity="0.5" />
                  <line x1="-25" y1="0" x2="25" y2="0" stroke="#E9C46A" strokeWidth="2" opacity="0.5" />
                  <line x1="-18" y1="-18" x2="18" y2="18" stroke="#E9C46A" strokeWidth="1.5" opacity="0.4" />
                  <line x1="18" y1="-18" x2="-18" y2="18" stroke="#E9C46A" strokeWidth="1.5" opacity="0.4" />
                  <circle cx="0" cy="0" r="3" fill="#E76F51" opacity="0.5" />
                </g>
                <circle cx="100" cy="180" r="3" fill="#2D3436" opacity="0.2" />
                <circle cx="155" cy="200" r="2.5" fill="#2D3436" opacity="0.15" />
                <circle cx="138" cy="248" r="2.5" fill="#2D3436" opacity="0.12" />
                <line x1="100" y1="180" x2="155" y2="200" stroke="#2D3436" strokeWidth="0.8" opacity="0.1" />
                <line x1="155" y1="200" x2="138" y2="248" stroke="#2D3436" strokeWidth="0.8" opacity="0.1" />
                <circle cx="350" cy="350" r="2.5" fill="#2D3436" opacity="0.15" />
                <circle cx="408" cy="368" r="3" fill="#2D3436" opacity="0.18" />
                <line x1="350" y1="350" x2="408" y2="368" stroke="#2D3436" strokeWidth="0.8" opacity="0.08" />
                <path d="M60 320 Q85 275 115 300 Q82 308 60 320Z" fill="#E76F51" opacity="0.4" stroke="#2D3436" strokeWidth="1" strokeOpacity="0.2" />
                <path d="M440 60 L458 82 L440 104 L422 82Z" fill="#2A9D8F" opacity="0.35" stroke="#2D3436" strokeWidth="1" strokeOpacity="0.2" />
              </svg>
            </div>
          </div>
        </div>
        <svg className="atomic-decor" style={{ top: '18%', right: '4%', width: '35px', opacity: 0.1 }} viewBox="0 0 40 40">
          <line x1="20" y1="2" x2="20" y2="38" stroke="#2D3436" strokeWidth="1.5" />
          <line x1="2" y1="20" x2="38" y2="20" stroke="#2D3436" strokeWidth="1.5" />
          <line x1="7" y1="7" x2="33" y2="33" stroke="#2D3436" strokeWidth="1" />
          <line x1="33" y1="7" x2="7" y2="33" stroke="#2D3436" strokeWidth="1" />
          <circle cx="20" cy="20" r="2.5" fill="#E9C46A" />
        </svg>
      </section>

      <div className="olive-divider"></div>

      {/* Featured Work */}
      <section className="section section-lg" id="featured-work">
        <div className="container">
          <div className="section-header reveal">
            <div className="flag-label flag-olive">Featured Work</div>
            <p style={{ marginTop: '0.5rem' }}>See a few of our client launches.</p>
          </div>
          <div className="featured-work-grid">
            <div className="work-card reveal">
              <div className="work-card-image">
                <svg viewBox="0 0 560 350" fill="none">
                  <rect width="560" height="350" fill="#EDE5D0" />
                  <rect width="560" height="30" fill="#2D3436" opacity="0.85" />
                  <circle cx="18" cy="15" r="5" fill="#E76F51" opacity="0.8" />
                  <circle cx="34" cy="15" r="5" fill="#E9C46A" opacity="0.8" />
                  <circle cx="50" cy="15" r="5" fill="#2A9D8F" opacity="0.8" />
                  <rect x="30" y="50" width="200" height="18" rx="3" fill="#2A9D8F" opacity="0.25" />
                  <rect x="30" y="80" width="500" height="8" rx="2" fill="#2D3436" opacity="0.08" />
                  <rect x="30" y="96" width="420" height="8" rx="2" fill="#2D3436" opacity="0.06" />
                  <rect x="30" y="120" width="240" height="140" rx="6" fill="#2A9D8F" opacity="0.1" />
                  <rect x="290" y="120" width="240" height="65" rx="6" fill="#E9C46A" opacity="0.12" />
                  <rect x="290" y="200" width="240" height="60" rx="6" fill="#E76F51" opacity="0.1" />
                  <rect x="30" y="280" width="120" height="32" rx="16" fill="#E76F51" opacity="0.3" />
                </svg>
                <div className="work-card-badge"><strong>+32%</strong> Leads</div>
              </div>
              <div className="work-card-body">
                <h3>Cedar Sense</h3>
                <p>Custom e-commerce build for artisan cedar products with integrated SEO strategy.</p>
                <Link href="/contact" className="work-card-link">View the Case Study</Link>
              </div>
            </div>
            <div className="work-card reveal">
              <div className="work-card-image">
                <svg viewBox="0 0 560 350" fill="none">
                  <rect width="560" height="350" fill="#EDE5D0" />
                  <rect width="560" height="30" fill="#2D3436" opacity="0.85" />
                  <circle cx="18" cy="15" r="5" fill="#E76F51" opacity="0.8" />
                  <circle cx="34" cy="15" r="5" fill="#E9C46A" opacity="0.8" />
                  <circle cx="50" cy="15" r="5" fill="#2A9D8F" opacity="0.8" />
                  <rect x="30" y="50" width="500" height="80" rx="6" fill="#E76F51" opacity="0.12" />
                  <rect x="50" y="70" width="180" height="14" rx="3" fill="#FAF8F2" opacity="0.6" />
                  <rect x="50" y="92" width="300" height="8" rx="2" fill="#FAF8F2" opacity="0.3" />
                  <rect x="30" y="150" width="160" height="120" rx="6" fill="#8B9556" opacity="0.12" />
                  <rect x="210" y="150" width="160" height="120" rx="6" fill="#4A7C9B" opacity="0.1" />
                  <rect x="390" y="150" width="140" height="120" rx="6" fill="#E9C46A" opacity="0.12" />
                  <rect x="30" y="290" width="100" height="28" rx="14" fill="#2A9D8F" opacity="0.3" />
                </svg>
                <div className="work-card-badge">Launched in<br /><strong>14 days</strong></div>
              </div>
              <div className="work-card-body">
                <h3>HempWorks Wisconsin</h3>
                <p>Site design and SEO foundations for a local hemp products retailer.</p>
                <Link href="/contact" className="work-card-link">View the Case Study</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="olive-divider"></div>

      {/* Sprint Banner + About Snippet */}
      <section className="section section-lg">
        <div className="container">
          <div className="about-snippet-grid reveal">
            <div className="sprint-banner">
              <svg style={{ position: 'absolute', top: '1rem', right: '1.5rem', opacity: 0.15 }} width="40" height="40" viewBox="0 0 40 40">
                <line x1="20" y1="0" x2="20" y2="40" stroke="#FAF8F2" strokeWidth="2" />
                <line x1="0" y1="20" x2="40" y2="20" stroke="#FAF8F2" strokeWidth="2" />
                <line x1="6" y1="6" x2="34" y2="34" stroke="#FAF8F2" strokeWidth="1.5" />
                <line x1="34" y1="6" x2="6" y2="34" stroke="#FAF8F2" strokeWidth="1.5" />
              </svg>
              <h3>Web Design +<br />SEO Build Sprint</h3>
              <p>Get your custom site designed, built, and SEO-ready in as little as 2 weeks.</p>
              <Link href="/contact" className="btn">Learn More</Link>
            </div>
            <div>
              <h2>A Little About Us</h2>
              <p style={{ marginTop: '1rem', color: 'var(--mcm-brown)' }}>We&rsquo;re small by choice &mdash; fast, focused, and easy to work with. Every project gets direct access to Justin, who handles strategy, design, and development personally.</p>
              <p style={{ color: 'var(--mcm-brown)' }}>No hand-offs to junior designers. No agency runaround. Just honest work and real results.</p>
              <Link href="/about" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>More About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section-lg bg-offwhite" id="services">
        <div className="container">
          <div className="section-header reveal">
            <div className="flag-label flag-teal">Our Services</div>
            <h2>Two Services.<br />One <span className="text-teal">Big Impact.</span></h2>
            <p>We keep things focused so we can keep things excellent. Custom web design and proven SEO &mdash; that&rsquo;s our sweet spot.</p>
          </div>
          <div className="services-grid">
            <div className="service-card reveal">
              <span className="service-card-number">01</span>
              <svg className="service-card-icon" viewBox="0 0 64 64" fill="none">
                <rect x="4" y="10" width="56" height="38" rx="3" stroke="#2D3436" strokeWidth="2" fill="#2A9D8F" opacity="0.12" />
                <rect x="4" y="10" width="56" height="30" rx="3" stroke="#2D3436" strokeWidth="2" fill="none" />
                <line x1="18" y1="48" x2="46" y2="48" stroke="#2D3436" strokeWidth="2" />
                <line x1="32" y1="40" x2="32" y2="48" stroke="#2D3436" strokeWidth="2" />
                <circle cx="32" cy="25" r="6" fill="#E76F51" opacity="0.5" stroke="#2D3436" strokeWidth="1.5" />
              </svg>
              <h3>Web Design</h3>
              <p>Custom websites built from scratch &mdash; not templates. Every pixel crafted to convert visitors into customers, optimized for speed and every device.</p>
              <Link href="/web-design" className="btn btn-primary">Learn More</Link>
            </div>
            <div className="service-card reveal">
              <span className="service-card-number">02</span>
              <svg className="service-card-icon" viewBox="0 0 64 64" fill="none">
                <circle cx="26" cy="26" r="16" stroke="#2D3436" strokeWidth="2" fill="#E9C46A" opacity="0.15" />
                <line x1="38" y1="38" x2="54" y2="54" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" />
                <path d="M18 32 L24 24 L30 28 L36 16" stroke="#2A9D8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <circle cx="36" cy="16" r="2.5" fill="#E76F51" />
              </svg>
              <h3>SEO</h3>
              <p>Get found on Google. Our proven strategies come with a 90-day ranking guarantee &mdash; if we don&rsquo;t deliver, we work for free until we do.</p>
              <Link href="/seo" className="btn btn-secondary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-teal-grid">
        <div className="container">
          <div className="stats-row">
            <div className="stat-item reveal">
              <div className="stat-number" style={{ color: 'var(--mcm-mustard)' }}>100%</div>
              <div className="stat-label" style={{ color: 'var(--mcm-cream)' }}>Custom Built</div>
            </div>
            <div className="stat-item reveal">
              <div className="stat-number" style={{ color: 'var(--mcm-mustard)' }}>90</div>
              <div className="stat-label" style={{ color: 'var(--mcm-cream)' }}>Day Guarantee</div>
            </div>
            <div className="stat-item reveal">
              <div className="stat-number" style={{ color: 'var(--mcm-mustard)' }}>0</div>
              <div className="stat-label" style={{ color: 'var(--mcm-cream)' }}>Templates Used</div>
            </div>
            <div className="stat-item reveal">
              <div className="stat-number" style={{ color: 'var(--mcm-mustard)' }}>24/7</div>
              <div className="stat-label" style={{ color: 'var(--mcm-cream)' }}>Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section-lg bg-pattern-dots" id="process">
        <div className="container">
          <div className="section-header reveal">
            <div className="flag-label flag-teal">How It Works</div>
            <h2>Our <span className="text-coral">Process</span></h2>
            <p>Simple, transparent, and designed around your schedule.</p>
          </div>
          <div className="process-grid">
            <div className="process-step reveal">
              <h4>Strategy Call</h4>
              <p>We learn about your business, goals, and what success looks like for you. Completely free, no strings attached.</p>
            </div>
            <div className="process-step reveal">
              <h4>Design &amp; Build</h4>
              <p>We craft your custom website from scratch, sharing progress and refining until it&rsquo;s exactly right.</p>
            </div>
            <div className="process-step reveal">
              <h4>Optimize</h4>
              <p>Every page is optimized for speed, search engines, and conversions before we launch.</p>
            </div>
            <div className="process-step reveal">
              <h4>Launch &amp; Grow</h4>
              <p>Your site goes live and our SEO strategy kicks in. Monthly reports keep you in the loop.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-lg" id="testimonials">
        <div className="container">
          <div className="section-header reveal">
            <div className="flag-label flag-mustard">Kind Words</div>
            <h2>What Our <span className="text-teal">Clients</span> Say</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card reveal">
              <p className="testimonial-text">Sobojinski Solutions completely transformed our online presence. The website they built is fast, beautiful, and our customers love it. We&rsquo;ve seen a significant increase in leads since launch.</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">C</div>
                <div className="testimonial-author-info">
                  <strong>Cedar Sense</strong>
                  <span>E-Commerce Client</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal">
              <p className="testimonial-text">The SEO results have been incredible. We went from invisible on Google to showing up on the first page within the guaranteed timeframe. Justin really knows his stuff.</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: 'var(--mcm-coral)' }}>H</div>
                <div className="testimonial-author-info">
                  <strong>HempWorks Wisconsin</strong>
                  <span>SEO Client</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal">
              <p className="testimonial-text">Professional, responsive, and genuinely invested in our success. The custom design perfectly captures our brand and the CMS makes updates a breeze.</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: 'var(--mcm-mustard-dark)', color: 'var(--mcm-charcoal)' }}>D</div>
                <div className="testimonial-author-info">
                  <strong>Don Wells</strong>
                  <span>Web Design Client</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section bg-charcoal">
        <div className="container">
          <svg style={{ display: 'block', margin: '0 auto 1.5rem', opacity: 0.2 }} width="50" height="50" viewBox="0 0 50 50">
            <line x1="25" y1="2" x2="25" y2="48" stroke="#E9C46A" strokeWidth="1.5" />
            <line x1="2" y1="25" x2="48" y2="25" stroke="#E9C46A" strokeWidth="1.5" />
            <line x1="8" y1="8" x2="42" y2="42" stroke="#E9C46A" strokeWidth="1" />
            <line x1="42" y1="8" x2="8" y2="42" stroke="#E9C46A" strokeWidth="1" />
            <circle cx="25" cy="25" r="3" fill="#E9C46A" />
          </svg>
          <h2 className="reveal" style={{ color: 'var(--mcm-cream)' }}>Ready to Grow<br />Your Business?</h2>
          <p className="reveal" style={{ color: 'var(--mcm-cream)', opacity: 0.8 }}>Book a free strategy call and let&rsquo;s map out exactly how to get your business ranking and converting online.</p>
          <div className="cta-buttons reveal">
            <Link href="/contact" className="btn btn-primary btn-lg">Book Your Free Call</Link>
            <a href="tel:+447834569629" className="btn btn-light btn-lg">Call +44 7834 569 629</a>
          </div>
        </div>
      </section>
    </>
  )
}
