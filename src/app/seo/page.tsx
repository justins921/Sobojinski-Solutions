import Link from 'next/link';

export const metadata = {
  title: 'SEO Services | Sobojinski Solutions',
  description: 'Get found on Google with our proven SEO strategies. 90-day ranking guarantee - if we don\'t deliver, we work for free until we do.',
};

export default function SeoPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header bg-paper bg-constellation">
        <div className="container">
          <div className="flag-label flag-coral fade-in-up">SEO Services</div>
          <h1 className="fade-in-up delay-1">Get Found on<br /><span className="text-teal">Google</span></h1>
          <p className="fade-in-up delay-2">Proven SEO strategies with a 90-day ranking guarantee. If we don&rsquo;t deliver, we work for free until we do.</p>
        </div>
        <svg className="atomic-decor" style={{ top: '25%', right: '10%', width: '50px', opacity: 0.12 }} viewBox="0 0 50 50">
          <g transform="translate(25,25)">
            <ellipse rx="22" ry="8" stroke="#2D3436" strokeWidth="1.5" fill="none" />
            <ellipse rx="22" ry="8" stroke="#2D3436" strokeWidth="1.5" fill="none" transform="rotate(60)" />
            <ellipse rx="22" ry="8" stroke="#2D3436" strokeWidth="1.5" fill="none" transform="rotate(120)" />
            <circle r="3" fill="#E76F51" />
          </g>
        </svg>
      </section>

      <div className="retro-stripe">
        <span></span><span></span><span></span><span></span><span></span>
      </div>

      {/* 90-Day Guarantee Section */}
      <section className="section section-lg">
        <div className="container">
          <div className="content-block reveal">
            <div className="content-block-text">
              <div className="flag-label flag-coral">The Guarantee</div>
              <h2>90 Days to<br /><span className="text-teal">Page One</span></h2>
              <p>We&rsquo;re so confident in our SEO strategies that we back them with a guarantee: see ranking improvements within 90 days, or we continue working at no additional cost until you do.</p>
              <p>No other agency offers this because most agencies rely on guesswork. We rely on proven, data-driven methods that consistently deliver results for local and national businesses.</p>
              <div className="guarantee-badge" style={{ marginTop: '1.5rem' }}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" fill="#E9C46A" stroke="#2D3436" strokeWidth="2" />
                  <path d="M16 24 L22 30 L34 18" stroke="#2D3436" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                <div className="guarantee-badge-text">90-Day Ranking<br />Guarantee</div>
              </div>
            </div>
            <div className="content-block-visual">
              {/* Search/ranking illustration */}
              <svg viewBox="0 0 400 350" fill="none" style={{ width: '100%' }}>
                {/* Search bar */}
                <rect x="40" y="30" width="320" height="50" rx="25" fill="#FAF8F2" stroke="#2D3436" strokeWidth="2" />
                <circle cx="330" cy="55" r="15" fill="#2A9D8F" stroke="#2D3436" strokeWidth="2" />
                <circle cx="327" cy="52" r="7" stroke="#FAF8F2" strokeWidth="2" fill="none" />
                <line x1="332" y1="57" x2="338" y2="63" stroke="#FAF8F2" strokeWidth="2" strokeLinecap="round" />
                <text x="70" y="60" fontFamily="Josefin Sans, sans-serif" fontSize="14" fill="#6D4C3D">your business name...</text>

                {/* Result cards */}
                <rect x="40" y="100" width="320" height="60" rx="4" fill="#2A9D8F" opacity="0.1" stroke="#2A9D8F" strokeWidth="2" />
                <rect x="56" y="112" width="120" height="8" rx="2" fill="#2A9D8F" />
                <rect x="56" y="128" width="280" height="6" rx="1" fill="#2D3436" opacity="0.15" />
                <rect x="56" y="140" width="200" height="6" rx="1" fill="#2D3436" opacity="0.1" />
                {/* #1 badge */}
                <circle cx="350" cy="130" r="16" fill="#E9C46A" stroke="#2D3436" strokeWidth="2" />
                <text x="350" y="136" fontFamily="Playfair Display, serif" fontSize="16" fontWeight="900" fill="#2D3436" textAnchor="middle">#1</text>

                <rect x="40" y="175" width="320" height="50" rx="4" fill="#FAF8F2" stroke="#2D3436" strokeWidth="1.5" opacity="0.6" />
                <rect x="56" y="187" width="100" height="6" rx="1" fill="#2D3436" opacity="0.2" />
                <rect x="56" y="199" width="240" height="5" rx="1" fill="#2D3436" opacity="0.1" />

                <rect x="40" y="238" width="320" height="50" rx="4" fill="#FAF8F2" stroke="#2D3436" strokeWidth="1.5" opacity="0.4" />
                <rect x="56" y="250" width="90" height="6" rx="1" fill="#2D3436" opacity="0.15" />
                <rect x="56" y="262" width="220" height="5" rx="1" fill="#2D3436" opacity="0.08" />

                {/* Arrow pointing up */}
                <g transform="translate(20, 200)">
                  <line x1="0" y1="60" x2="0" y2="0" stroke="#2A9D8F" strokeWidth="2" strokeLinecap="round" />
                  <polygon points="0,-8 -6,4 6,4" fill="#2A9D8F" />
                </g>

                {/* Decorative starburst */}
                <g transform="translate(370,30) scale(0.3)">
                  <line x1="0" y1="-30" x2="0" y2="30" stroke="#E9C46A" strokeWidth="2" />
                  <line x1="-30" y1="0" x2="30" y2="0" stroke="#E9C46A" strokeWidth="2" />
                  <line x1="-21" y1="-21" x2="21" y2="21" stroke="#E9C46A" strokeWidth="1.5" />
                  <line x1="21" y1="-21" x2="-21" y2="21" stroke="#E9C46A" strokeWidth="1.5" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section bg-coral">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label" style={{ color: 'var(--mcm-cream)' }}>What&rsquo;s Included</span>
            <h2 style={{ color: 'var(--mcm-cream)' }}>Our SEO <span style={{ color: 'var(--mcm-mustard)' }}>Package</span></h2>
            <p style={{ color: 'var(--mcm-cream)', opacity: 0.9 }}>A comprehensive approach to getting your business visible on search engines.</p>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <div className="service-card reveal" style={{ background: 'var(--mcm-cream)' }}>
              <svg className="service-card-icon" viewBox="0 0 72 72" fill="none">
                <rect x="8" y="8" width="56" height="56" rx="4" stroke="#2D3436" strokeWidth="2" fill="#2A9D8F" opacity="0.15" />
                <text x="36" y="44" fontFamily="serif" fontSize="28" fontWeight="900" fill="#2A9D8F" textAnchor="middle">G</text>
              </svg>
              <h4>Google My Business</h4>
              <p>Full setup and optimization of your Google Business Profile for maximum local visibility.</p>
            </div>

            <div className="service-card reveal" style={{ background: 'var(--mcm-cream)' }}>
              <svg className="service-card-icon" viewBox="0 0 72 72" fill="none">
                <circle cx="36" cy="30" r="18" stroke="#2D3436" strokeWidth="2" fill="#E9C46A" opacity="0.15" />
                <line x1="49" y1="43" x2="62" y2="56" stroke="#2D3436" strokeWidth="2" strokeLinecap="round" />
                <text x="36" y="35" fontFamily="serif" fontSize="14" fill="#2D3436" textAnchor="middle">KEY</text>
              </svg>
              <h4>Keyword Research</h4>
              <p>In-depth analysis to find the exact terms your customers are searching for.</p>
            </div>

            <div className="service-card reveal" style={{ background: 'var(--mcm-cream)' }}>
              <svg className="service-card-icon" viewBox="0 0 72 72" fill="none">
                <rect x="12" y="8" width="48" height="56" rx="3" stroke="#2D3436" strokeWidth="2" fill="#E76F51" opacity="0.15" />
                <line x1="22" y1="24" x2="50" y2="24" stroke="#2D3436" strokeWidth="2" />
                <line x1="22" y1="34" x2="44" y2="34" stroke="#2D3436" strokeWidth="2" />
                <line x1="22" y1="44" x2="48" y2="44" stroke="#2D3436" strokeWidth="2" />
                <path d="M22 52 L28 48 L34 54 L44 40" stroke="#2A9D8F" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
              <h4>On-Site Optimization</h4>
              <p>Technical SEO, meta tags, schema markup, and content optimization across every page.</p>
            </div>

            <div className="service-card reveal" style={{ background: 'var(--mcm-cream)' }}>
              <svg className="service-card-icon" viewBox="0 0 72 72" fill="none">
                <circle cx="36" cy="36" r="24" stroke="#2D3436" strokeWidth="2" fill="#4A7C9B" opacity="0.15" />
                <circle cx="36" cy="36" r="12" stroke="#2D3436" strokeWidth="2" fill="none" />
                <circle cx="36" cy="36" r="3" fill="#2D3436" />
                <line x1="36" y1="12" x2="36" y2="18" stroke="#2D3436" strokeWidth="2" />
                <line x1="36" y1="54" x2="36" y2="60" stroke="#2D3436" strokeWidth="2" />
                <line x1="12" y1="36" x2="18" y2="36" stroke="#2D3436" strokeWidth="2" />
                <line x1="54" y1="36" x2="60" y2="36" stroke="#2D3436" strokeWidth="2" />
              </svg>
              <h4>Local Listings</h4>
              <p>Consistent NAP data across all major directories and citation sources.</p>
            </div>

            <div className="service-card reveal" style={{ background: 'var(--mcm-cream)' }}>
              <svg className="service-card-icon" viewBox="0 0 72 72" fill="none">
                <rect x="8" y="16" width="56" height="40" rx="4" stroke="#2D3436" strokeWidth="2" fill="#E9C46A" opacity="0.15" />
                <path d="M24 48 L24 28" stroke="#2A9D8F" strokeWidth="6" strokeLinecap="round" />
                <path d="M36 48 L36 22" stroke="#E76F51" strokeWidth="6" strokeLinecap="round" />
                <path d="M48 48 L48 18" stroke="#E9C46A" strokeWidth="6" strokeLinecap="round" />
              </svg>
              <h4>Monthly Reporting</h4>
              <p>Clear, jargon-free reports showing your rankings, traffic, and progress each month.</p>
            </div>

            <div className="service-card reveal" style={{ background: 'var(--mcm-cream)' }}>
              <svg className="service-card-icon" viewBox="0 0 72 72" fill="none">
                <circle cx="36" cy="28" r="6" fill="#E9C46A" stroke="#2D3436" strokeWidth="2" />
                <path d="M36 34 L36 44" stroke="#2D3436" strokeWidth="2" />
                <path d="M36 44 L26 56 M36 44 L46 56" stroke="#2D3436" strokeWidth="2" />
                <path d="M36 38 L24 30 M36 38 L48 30" stroke="#2D3436" strokeWidth="2" />
                {/* Stars around figure */}
                <circle cx="16" cy="16" r="3" fill="#2A9D8F" />
                <circle cx="56" cy="16" r="3" fill="#E76F51" />
                <circle cx="12" cy="44" r="2" fill="#E9C46A" />
                <circle cx="60" cy="44" r="2" fill="#4A7C9B" />
              </svg>
              <h4>Google Review Funnel</h4>
              <p>Automated system to collect and showcase Google reviews from happy customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How SEO Works Section */}
      <section className="section section-lg bg-pattern-dots">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">The Process</span>
            <h2>How We Get You <span className="text-coral">Ranked</span></h2>
          </div>

          <div className="process-grid">
            <div className="process-step reveal">
              <h4>Audit</h4>
              <p>We analyze your current online presence, competitors, and opportunities to build a targeted strategy.</p>
            </div>
            <div className="process-step reveal">
              <h4>Optimize</h4>
              <p>On-site and technical SEO improvements to make your website search-engine friendly.</p>
            </div>
            <div className="process-step reveal">
              <h4>Build Authority</h4>
              <p>Local citations, Google Business optimization, and review generation to establish trust.</p>
            </div>
            <div className="process-step reveal">
              <h4>Track &amp; Report</h4>
              <p>Monthly reports with clear metrics so you always know where you stand and where you&rsquo;re heading.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section bg-teal">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label" style={{ color: 'var(--mcm-mustard)' }}>Results</span>
            <h2 style={{ color: 'var(--mcm-cream)' }}>Numbers That <span style={{ color: 'var(--mcm-mustard)' }}>Matter</span></h2>
          </div>
          <div className="stats-row">
            <div className="stat-item reveal">
              <div className="stat-number" style={{ color: 'var(--mcm-mustard)' }}>90</div>
              <div className="stat-label" style={{ color: 'var(--mcm-cream)' }}>Day Guarantee</div>
            </div>
            <div className="stat-item reveal">
              <div className="stat-number" style={{ color: 'var(--mcm-mustard)' }}>1st</div>
              <div className="stat-label" style={{ color: 'var(--mcm-cream)' }}>Page Rankings</div>
            </div>
            <div className="stat-item reveal">
              <div className="stat-number" style={{ color: 'var(--mcm-mustard)' }}>100%</div>
              <div className="stat-label" style={{ color: 'var(--mcm-cream)' }}>Transparent Reporting</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section bg-charcoal">
        <div className="container">
          <svg style={{ display: 'block', margin: '0 auto 2rem', opacity: 0.3 }} width="60" height="60" viewBox="0 0 60 60">
            <line x1="30" y1="0" x2="30" y2="60" stroke="#E9C46A" strokeWidth="2" />
            <line x1="0" y1="30" x2="60" y2="30" stroke="#E9C46A" strokeWidth="2" />
            <line x1="8" y1="8" x2="52" y2="52" stroke="#E9C46A" strokeWidth="1.5" />
            <line x1="52" y1="8" x2="8" y2="52" stroke="#E9C46A" strokeWidth="1.5" />
            <circle cx="30" cy="30" r="4" fill="#E9C46A" />
          </svg>
          <h2 className="reveal" style={{ color: 'var(--mcm-cream)' }}>Ready to Get Found<br />on <span style={{ color: 'var(--mcm-mustard)' }}>Google?</span></h2>
          <p className="reveal" style={{ color: 'var(--mcm-cream)', opacity: 0.8 }}>Book a free strategy call and we&rsquo;ll audit your current online presence and show you exactly where the opportunities are.</p>
          <div className="cta-buttons reveal">
            <Link href="/contact" className="btn btn-primary btn-lg">Get Your Free SEO Audit</Link>
            <a href="tel:+447834569629" className="btn btn-light btn-lg">Call +44 7834 569 629</a>
          </div>
        </div>
      </section>

      <div className="retro-stripe">
        <span></span><span></span><span></span><span></span><span></span>
      </div>
    </>
  );
}
