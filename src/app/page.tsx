import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="grid-pattern"></div>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge fade-in-up">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1l2.2 4.4L15 6.3l-3.5 3.4.8 4.9L8 12.4l-4.3 2.2.8-4.9L1 6.3l4.8-.9L8 1z" fill="currentColor" /></svg>
                Business Solutions, Engineered
              </div>
              <h1 className="fade-in-up delay-1">
                Purpose-Built Platforms for{' '}
                <span className="highlight">Modern Business</span>
              </h1>
              <p className="hero-subtitle fade-in-up delay-2">
                We build specialized operating systems and deliver expert web design &amp; SEO services to solve real problems across healthcare, golf improvement, workforce management, and digital marketing.
              </p>
              <div className="hero-buttons fade-in-up delay-3">
                <Link href="/products" className="btn btn-primary btn-lg">Explore Products</Link>
                <Link href="/contact" className="btn btn-white btn-lg">Get in Touch</Link>
              </div>
            </div>
            <div className="hero-visual fade-in-up delay-2">
              <div className="hero-visual-grid">
                <div className="hero-product-chip chip-emr">
                  <div className="chip-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                  </div>
                  <div className="chip-name">EMR OS</div>
                  <div className="chip-desc">Healthcare platform</div>
                </div>
                <div className="hero-product-chip chip-golf">
                  <div className="chip-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                  </div>
                  <div className="chip-name">Golf OS</div>
                  <div className="chip-desc">Golf management</div>
                </div>
                <div className="hero-product-chip chip-work">
                  <div className="chip-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                  </div>
                  <div className="chip-name">Work OS</div>
                  <div className="chip-desc">Workforce tools</div>
                </div>
                <div className="hero-product-chip chip-seo">
                  <div className="chip-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" /></svg>
                  </div>
                  <div className="chip-name">SEO OS</div>
                  <div className="chip-desc">SEO platform</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Bar */}
      <div className="brand-bar">
        <span></span><span></span><span></span><span></span>
      </div>

      {/* Products Overview */}
      <section className="section" id="products">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Our Products</div>
            <h2>One Company, Four Powerful Platforms</h2>
            <p>Each platform is purpose-built to solve specific industry challenges, backed by the full strength of Sobojinski Solutions.</p>
          </div>
          <div className="products-grid">
            <div className="product-card product-card-emr reveal">
              <div className="product-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
              </div>
              <h3>EMR OS</h3>
              <span className="product-tag">Healthcare</span>
              <p>A modern electronic medical records platform designed for independent practices and clinics. Streamline patient care, records management, and compliance.</p>
              <a href="https://emros.sobojinskisolutions.com" className="btn btn-outline">Learn More</a>
            </div>
            <div className="product-card product-card-golf reveal">
              <div className="product-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
              </div>
              <h3>Golf OS</h3>
              <span className="product-tag">Golf Improvement</span>
              <p>Complete golf course and club management. Tee time bookings, member management, POS integration, and course operations all in one platform.</p>
              <a href="https://golf.sobojinskisolutions.com" className="btn btn-outline">Learn More</a>
            </div>
            <div className="product-card product-card-work reveal">
              <div className="product-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
              </div>
              <h3>Work OS</h3>
              <span className="product-tag">Productivity</span>
              <p>Workforce coordination and project management built for teams that need to move fast. Task tracking, scheduling, and collaboration simplified.</p>
              <a href="https://workos.sobojinskisolutions.com" className="btn btn-outline">Learn More</a>
            </div>
            <div className="product-card product-card-seo reveal">
              <div className="product-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" /></svg>
              </div>
              <h3>SEO OS</h3>
              <span className="product-tag">Marketing</span>
              <p>SEO management and optimization platform. Keyword tracking, site audits, competitor analysis, and actionable insights to grow your organic traffic.</p>
              <a href="https://seoos.sobojinskisolutions.com" className="btn btn-outline">Learn More</a>
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
            <p>Alongside our platform products, we offer custom web design and SEO services to help businesses establish and grow their digital presence.</p>
          </div>
          <div className="products-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="product-card reveal" style={{ borderTop: '4px solid #2563EB' }}>
              <div className="product-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
              </div>
              <h3>Custom Web Design</h3>
              <span className="product-tag" style={{ background: '#EFF6FF', color: '#2563EB' }}>Design &amp; Development</span>
              <p>Handcrafted, responsive websites that look great and convert visitors into customers. From landing pages to full e-commerce builds, we design and develop sites tailored to your brand and goals.</p>
              <Link href="/contact" className="btn btn-outline">Get a Quote</Link>
            </div>
            <div className="product-card reveal" style={{ borderTop: '4px solid #F97316' }}>
              <div className="product-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
              </div>
              <h3>SEO Services</h3>
              <span className="product-tag" style={{ background: '#FFF7ED', color: '#F97316' }}>Search Optimization</span>
              <p>Data-driven SEO strategies that get you found. We handle keyword research, on-page optimization, technical SEO, link building, and content strategy — backed by our proven 90-day ranking guarantee.</p>
              <Link href="/contact" className="btn btn-outline">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sobojinski */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Why Choose Us</div>
            <h2>Built Different, on Purpose</h2>
            <p>We don't build generic software. Every platform is engineered for the specific workflows and challenges of its industry.</p>
          </div>
          <div className="values-grid">
            <div className="value-item reveal">
              <div className="value-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h3>Industry-Specific</h3>
              <p>Not one-size-fits-all. Each platform is tailored to the exact needs, compliance requirements, and workflows of its target industry.</p>
            </div>
            <div className="value-item reveal">
              <div className="value-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
              </div>
              <h3>Modern & Fast</h3>
              <p>Built with cutting-edge technology for speed, reliability, and security. No legacy baggage, no bloated interfaces.</p>
            </div>
            <div className="value-item reveal">
              <div className="value-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <h3>Hands-On Support</h3>
              <p>Direct access to our team. No ticket queues, no chatbot runarounds. Real people solving real problems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section-sm stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item reveal">
              <div className="stat-number" data-count="4" data-suffix="">4</div>
              <div className="stat-label">Platform Products</div>
            </div>
            <div className="stat-item reveal">
              <div className="stat-number" data-count="100" data-suffix="%">100%</div>
              <div className="stat-label">Custom Built</div>
            </div>
            <div className="stat-item reveal">
              <div className="stat-number" data-count="5" data-suffix="+">5+</div>
              <div className="stat-label">Industries Served</div>
            </div>
            <div className="stat-item reveal">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
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

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <h2 className="reveal">Ready to Transform<br />Your Business?</h2>
          <p className="reveal">Let&rsquo;s discuss how our platforms can solve your specific business challenges. No pressure, just solutions.</p>
          <div className="cta-buttons reveal">
            <Link href="/contact" className="btn btn-primary btn-lg">Get Started</Link>
            <Link href="/products" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>View All Products</Link>
          </div>
        </div>
      </section>
    </>
  )
}
