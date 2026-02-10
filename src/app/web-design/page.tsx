import Link from 'next/link';

export const metadata = {
  title: 'Custom Web Design',
  description:
    'Custom websites built from scratch - no templates. Conversion-optimized, responsive, and lightning-fast. Get a website that works for your business.',
};

export default function WebDesignPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header bg-paper bg-constellation">
        <div className="container">
          <div className="flag-label flag-coral fade-in-up">Web Design</div>
          <h1 className="fade-in-up delay-1">Custom Websites<br /><span className="text-teal">Built From Scratch</span></h1>
          <p className="fade-in-up delay-2">No templates. No shortcuts. Just handcrafted websites designed to convert visitors into customers.</p>
        </div>
        <svg className="atomic-decor" style={{ top: '18%', left: '8%', width: '50px', opacity: 0.1 }} viewBox="0 0 50 50">
          <path d="M10 35 Q20 10 35 25 Q20 28 10 35Z" fill="#2A9D8F" />
        </svg>
        <svg className="atomic-decor" style={{ bottom: '20%', right: '12%', width: '45px', opacity: 0.12 }} viewBox="0 0 60 60">
          <line x1="30" y1="0" x2="30" y2="60" stroke="#2D3436" strokeWidth="2" />
          <line x1="0" y1="30" x2="60" y2="30" stroke="#2D3436" strokeWidth="2" />
          <line x1="8" y1="8" x2="52" y2="52" stroke="#2D3436" strokeWidth="1.5" />
          <line x1="52" y1="8" x2="8" y2="52" stroke="#2D3436" strokeWidth="1.5" />
          <circle cx="30" cy="30" r="4" fill="#E76F51" />
        </svg>
      </section>

      <div className="retro-stripe">
        <span></span><span></span><span></span><span></span><span></span>
      </div>

      {/* Why Custom Section */}
      <section className="section section-lg">
        <div className="container">
          <div className="content-block reveal">
            <div className="content-block-text">
              <div className="flag-label flag-coral">Why Custom?</div>
              <h2>Templates Are<br /><span className="text-teal">Someone Else&rsquo;s Vision</span></h2>
              <p>Your business is unique. Your website should be too. Templates force your brand into someone else&rsquo;s mold, come with bloated code that slows your site down, and look like a thousand other sites on the internet.</p>
              <p>A custom website is built around your specific goals, your brand identity, and your customers&rsquo; needs. Every element has a purpose. Every page is designed to move visitors toward action.</p>
            </div>
            <div className="content-block-visual">
              <div className="visual-frame">
                <svg viewBox="0 0 400 300" fill="none" style={{ width: '100%' }}>
                  {/* Template vs Custom comparison */}
                  {/* Template side */}
                  <text x="100" y="30" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="700" fill="#E76F51" textAnchor="middle" letterSpacing="0.1em">TEMPLATE</text>
                  <rect x="20" y="40" width="160" height="120" rx="3" fill="#FAF8F2" stroke="#2D3436" strokeWidth="2" strokeDasharray="6 4" />
                  <rect x="35" y="55" width="130" height="10" rx="1" fill="#2D3436" opacity="0.1" />
                  <rect x="35" y="75" width="60" height="60" rx="1" fill="#2D3436" opacity="0.08" />
                  <rect x="105" y="75" width="60" height="60" rx="1" fill="#2D3436" opacity="0.08" />
                  <rect x="35" y="145" width="130" height="8" rx="1" fill="#2D3436" opacity="0.06" />
                  <line x1="100" y1="170" x2="100" y2="200" stroke="#2D3436" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                  <text x="100" y="220" fontFamily="Josefin Sans, sans-serif" fontSize="10" fill="#6D4C3D" textAnchor="middle" opacity="0.6">Generic. Slow. Forgettable.</text>

                  {/* Arrow */}
                  <path d="M195 100 L205 100" stroke="#2D3436" strokeWidth="2" />
                  <polygon points="210,100 204,95 204,105" fill="#2D3436" />

                  {/* Custom side */}
                  <text x="300" y="30" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="700" fill="#2A9D8F" textAnchor="middle" letterSpacing="0.1em">CUSTOM</text>
                  <rect x="220" y="40" width="160" height="120" rx="3" fill="#FAF8F2" stroke="#2A9D8F" strokeWidth="3" />
                  <rect x="235" y="55" width="80" height="12" rx="2" fill="#2A9D8F" opacity="0.3" />
                  <rect x="235" y="75" width="130" height="50" rx="2" fill="#E9C46A" opacity="0.2" stroke="#2D3436" strokeWidth="1" />
                  <rect x="235" y="133" width="50" height="18" rx="2" fill="#E76F51" stroke="#2D3436" strokeWidth="1.5" />
                  <circle cx="360" cy="60" r="8" fill="#E9C46A" opacity="0.5" />
                  <line x1="300" y1="170" x2="300" y2="200" stroke="#2A9D8F" strokeWidth="2" />
                  <text x="300" y="220" fontFamily="Josefin Sans, sans-serif" fontSize="10" fill="#1B7A6E" textAnchor="middle" fontWeight="600">Unique. Fast. Converts.</text>

                  {/* Decorative starburst */}
                  <g transform="translate(200,260) scale(0.35)">
                    <line x1="0" y1="-30" x2="0" y2="30" stroke="#E9C46A" strokeWidth="2" />
                    <line x1="-30" y1="0" x2="30" y2="0" stroke="#E9C46A" strokeWidth="2" />
                    <line x1="-21" y1="-21" x2="21" y2="21" stroke="#E9C46A" strokeWidth="1.5" />
                    <line x1="21" y1="-21" x2="-21" y2="21" stroke="#E9C46A" strokeWidth="1.5" />
                    <circle cx="0" cy="0" r="4" fill="#2A9D8F" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section bg-teal">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label" style={{ color: 'var(--mcm-mustard)' }}>What&rsquo;s Included</span>
            <h2 style={{ color: 'var(--mcm-cream)' }}>Everything Your<br />Website <span style={{ color: 'var(--mcm-mustard)' }}>Needs</span></h2>
            <p style={{ color: 'var(--mcm-cream)', opacity: 0.85 }}>Every project comes with these essentials baked in &mdash; no add-ons, no upsells.</p>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <div className="service-card reveal" style={{ background: 'var(--mcm-cream)' }}>
              <svg className="service-card-icon" viewBox="0 0 72 72" fill="none">
                <rect x="6" y="6" width="24" height="60" rx="4" stroke="#2D3436" strokeWidth="2" fill="#2A9D8F" opacity="0.15" />
                <rect x="24" y="12" width="24" height="48" rx="2" stroke="#2D3436" strokeWidth="2" fill="#E9C46A" opacity="0.15" />
                <rect x="40" y="6" width="26" height="60" rx="2" stroke="#2D3436" strokeWidth="2" fill="#E76F51" opacity="0.15" />
              </svg>
              <h4>Responsive Design</h4>
              <p>Looks and works beautifully on every device &mdash; phones, tablets, and desktops.</p>
            </div>

            <div className="service-card reveal" style={{ background: 'var(--mcm-cream)' }}>
              <svg className="service-card-icon" viewBox="0 0 72 72" fill="none">
                <circle cx="36" cy="36" r="28" stroke="#2D3436" strokeWidth="2" fill="#E9C46A" opacity="0.15" />
                <path d="M36 12 L36 36 L52 36" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M20 48 L28 36 L36 42 L48 24" stroke="#2A9D8F" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
              <h4>Fast Load Speeds</h4>
              <p>Optimized code and assets ensure your site loads in under 2 seconds.</p>
            </div>

            <div className="service-card reveal" style={{ background: 'var(--mcm-cream)' }}>
              <svg className="service-card-icon" viewBox="0 0 72 72" fill="none">
                <path d="M36 8 L42 26 H60 L46 38 L52 56 L36 44 L20 56 L26 38 L12 26 H30 Z" fill="#E76F51" opacity="0.2" stroke="#2D3436" strokeWidth="2" />
              </svg>
              <h4>Conversion Optimized</h4>
              <p>Strategic layouts and CTAs designed to turn visitors into leads and customers.</p>
            </div>

            <div className="service-card reveal" style={{ background: 'var(--mcm-cream)' }}>
              <svg className="service-card-icon" viewBox="0 0 72 72" fill="none">
                <rect x="10" y="20" width="52" height="36" rx="4" stroke="#2D3436" strokeWidth="2" fill="#2A9D8F" opacity="0.15" />
                <circle cx="36" cy="38" r="10" stroke="#2D3436" strokeWidth="2" />
                <path d="M36 32 L36 38 L40 40" stroke="#2D3436" strokeWidth="2" strokeLinecap="round" fill="none" />
                <rect x="28" y="56" width="16" height="4" fill="#2D3436" opacity="0.3" />
              </svg>
              <h4>CMS Built In</h4>
              <p>Edit your own content anytime without touching code. Simple and intuitive.</p>
            </div>

            <div className="service-card reveal" style={{ background: 'var(--mcm-cream)' }}>
              <svg className="service-card-icon" viewBox="0 0 72 72" fill="none">
                <rect x="12" y="12" width="48" height="48" rx="6" stroke="#2D3436" strokeWidth="2" fill="#E9C46A" opacity="0.15" />
                <path d="M28 36 L34 42 L46 28" stroke="#2A9D8F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <h4>SSL Included</h4>
              <p>Every site comes with SSL certification for security and better Google rankings.</p>
            </div>

            <div className="service-card reveal" style={{ background: 'var(--mcm-cream)' }}>
              <svg className="service-card-icon" viewBox="0 0 72 72" fill="none">
                <circle cx="24" cy="36" r="16" stroke="#2D3436" strokeWidth="2" fill="#E76F51" opacity="0.15" />
                <circle cx="48" cy="36" r="16" stroke="#2D3436" strokeWidth="2" fill="#2A9D8F" opacity="0.15" />
                <path d="M36 24 C40 30 40 42 36 48 C32 42 32 30 36 24Z" fill="#E9C46A" opacity="0.3" />
              </svg>
              <h4>Custom Domain</h4>
              <p>Your own professional domain, fully configured and ready to go from day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section section-lg bg-pattern-dots">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">The Process</span>
            <h2>From Concept to <span className="text-coral">Launch</span></h2>
            <p>A streamlined process designed to get you online without the headaches.</p>
          </div>

          <div className="process-grid">
            <div className="process-step reveal">
              <h4>Discovery</h4>
              <p>We dig into your business, brand, audience, and goals. This is the foundation everything else is built on.</p>
            </div>
            <div className="process-step reveal">
              <h4>Wireframe</h4>
              <p>We map out the structure and user flow before any visual design begins, so the layout is strategic.</p>
            </div>
            <div className="process-step reveal">
              <h4>Design &amp; Develop</h4>
              <p>Your site comes to life with custom design, clean code, and responsive development.</p>
            </div>
            <div className="process-step reveal">
              <h4>Launch</h4>
              <p>After thorough testing and your approval, we launch your site and train you on the CMS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Section */}
      <section className="section bg-paper">
        <div className="container">
          <div className="content-block reversed reveal">
            <div className="content-block-text">
              <div className="flag-label flag-teal">Hosting &amp; Infrastructure</div>
              <h2>Enterprise-Grade<br /><span className="text-teal">Hosting Included</span></h2>
              <p>Your website is hosted on Webflow&rsquo;s enterprise infrastructure, powered by Tier 1 CDN providers like Amazon CloudFront and Fastly. That means:</p>
              <ul className="feature-list" style={{ marginTop: '1rem' }}>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#2A9D8F" /><path d="M6 10l3 3 5-6" stroke="#F5F0E1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  99.99% uptime guarantee
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#2A9D8F" /><path d="M6 10l3 3 5-6" stroke="#F5F0E1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Global CDN for fast loads worldwide
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#2A9D8F" /><path d="M6 10l3 3 5-6" stroke="#F5F0E1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Automatic SSL certification
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#2A9D8F" /><path d="M6 10l3 3 5-6" stroke="#F5F0E1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  DDoS protection built in
                </li>
              </ul>
            </div>
            <div className="content-block-visual">
              {/* Retro space-age server illustration */}
              <svg viewBox="0 0 400 350" fill="none" style={{ width: '100%' }}>
                {/* Rocket launch curves (inspired by the space poster) */}
                <path d="M60 350 Q60 180 60 80" stroke="#4A7C9B" strokeWidth="20" strokeLinecap="round" fill="none" />
                <path d="M100 350 Q100 200 100 100" stroke="#B7C4A1" strokeWidth="16" strokeLinecap="round" fill="none" />
                <path d="M135 350 Q135 220 135 120" stroke="#D4A843" strokeWidth="12" strokeLinecap="round" fill="none" />
                {/* Sun/globe */}
                <circle cx="280" cy="180" r="100" fill="#E9C46A" opacity="0.4" />
                <circle cx="280" cy="180" r="100" stroke="#2D3436" strokeWidth="2" fill="none" />
                {/* Grid lines on globe */}
                <ellipse cx="280" cy="180" rx="100" ry="40" stroke="#2D3436" strokeWidth="1" fill="none" opacity="0.3" />
                <ellipse cx="280" cy="180" rx="40" ry="100" stroke="#2D3436" strokeWidth="1" fill="none" opacity="0.3" />
                <line x1="180" y1="180" x2="380" y2="180" stroke="#2D3436" strokeWidth="1" opacity="0.3" />
                <line x1="280" y1="80" x2="280" y2="280" stroke="#2D3436" strokeWidth="1" opacity="0.3" />
                {/* Signal dots */}
                <circle cx="320" cy="120" r="4" fill="#2A9D8F" />
                <circle cx="240" cy="140" r="3" fill="#E76F51" />
                <circle cx="300" cy="230" r="5" fill="#4A7C9B" />
                <circle cx="250" cy="200" r="3" fill="#E9C46A" />
              </svg>
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
          <h2 className="reveal" style={{ color: 'var(--mcm-cream)' }}>Ready for a Website<br />That <span style={{ color: 'var(--mcm-mustard)' }}>Works?</span></h2>
          <p className="reveal" style={{ color: 'var(--mcm-cream)', opacity: 0.8 }}>Let&rsquo;s talk about what your business needs and how a custom website can get you there.</p>
          <div className="cta-buttons reveal">
            <Link href="/contact" className="btn btn-primary btn-lg">Get Your Free Strategy Call</Link>
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
