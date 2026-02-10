import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Sobojinski Solutions - a web design and SEO agency dedicated to building custom websites that drive real business results.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header bg-paper bg-constellation">
        <div className="container">
          <div className="flag-label flag-coral fade-in-up">About Us</div>
          <h1 className="fade-in-up delay-1">The Story Behind<br /><span className="text-teal">the Solutions</span></h1>
          <p className="fade-in-up delay-2">We believe every business deserves a website that works as hard as they do.</p>
        </div>
        {/* Decorative starburst */}
        <svg className="atomic-decor" style={{ top: '20%', right: '10%', width: '60px', opacity: 0.12 }} viewBox="0 0 60 60">
          <line x1="30" y1="0" x2="30" y2="60" stroke="#2D3436" strokeWidth="2" />
          <line x1="0" y1="30" x2="60" y2="30" stroke="#2D3436" strokeWidth="2" />
          <line x1="8" y1="8" x2="52" y2="52" stroke="#2D3436" strokeWidth="1.5" />
          <line x1="52" y1="8" x2="8" y2="52" stroke="#2D3436" strokeWidth="1.5" />
          <circle cx="30" cy="30" r="4" fill="#2A9D8F" />
        </svg>
        <svg className="atomic-decor" style={{ bottom: '15%', left: '8%', width: '40px', opacity: 0.1 }} viewBox="0 0 40 40">
          <path d="M5 25 Q15 5 25 20 Q15 22 5 25Z" fill="#E76F51" />
        </svg>
      </section>

      <div className="retro-stripe">
        <span></span><span></span><span></span><span></span><span></span>
      </div>

      {/* Mission Section */}
      <section className="section section-lg">
        <div className="container">
          <div className="content-block reveal">
            <div className="content-block-text">
              <div className="flag-label flag-coral">Our Mission</div>
              <h2>Custom Websites<br />at <span className="text-teal">Affordable Prices</span></h2>
              <p>Sobojinski Solutions was founded on a simple idea: small businesses shouldn&rsquo;t have to choose between quality and affordability when it comes to their online presence.</p>
              <p>Too many agencies sell cookie-cutter templates at premium prices. We do the opposite &mdash; every website we build is handcrafted from scratch, tailored to your brand, and priced fairly.</p>
              <p>We pair that with proven SEO strategies so your website doesn&rsquo;t just look great &mdash; it actually gets found by the people searching for what you offer.</p>
            </div>
            <div className="content-block-visual">
              {/* Decorative mid-century composition */}
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
                {/* Background shapes */}
                <circle cx="200" cy="200" r="160" fill="#E9C46A" opacity="0.15" />
                <circle cx="200" cy="200" r="100" fill="#2A9D8F" opacity="0.1" />
                {/* Grid lines (Mondrian-inspired) */}
                <line x1="100" y1="50" x2="100" y2="350" stroke="#2D3436" strokeWidth="3" />
                <line x1="250" y1="50" x2="250" y2="350" stroke="#2D3436" strokeWidth="3" />
                <line x1="50" y1="150" x2="350" y2="150" stroke="#2D3436" strokeWidth="3" />
                <line x1="50" y1="280" x2="350" y2="280" stroke="#2D3436" strokeWidth="3" />
                {/* Colored squares */}
                <rect x="55" y="55" width="40" height="90" fill="#2A9D8F" />
                <rect x="105" y="155" width="140" height="120" fill="#E76F51" opacity="0.8" />
                <rect x="255" y="55" width="90" height="90" fill="#E9C46A" />
                <rect x="255" y="285" width="90" height="60" fill="#4A7C9B" />
                <rect x="55" y="285" width="40" height="60" fill="#8B9556" />
                {/* Circle accents */}
                <circle cx="320" cy="200" r="15" fill="#2D3436" />
                <circle cx="80" cy="240" r="10" fill="#E9C46A" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-teal">
        <div className="container">
          <div className="section-header reveal">
            <div className="flag-label" style={{ background: 'var(--mcm-mustard)', color: 'var(--mcm-charcoal)' }}>Our Values</div>
            <h2 style={{ color: 'var(--mcm-cream)' }}>What Drives <span style={{ color: 'var(--mcm-mustard)' }}>Us</span></h2>
          </div>

          <div className="services-grid">
            <div className="service-card reveal" style={{ background: 'var(--mcm-cream)' }}>
              <svg className="service-card-icon" viewBox="0 0 72 72" fill="none">
                <path d="M36 8 L40 28 L60 28 L44 40 L50 60 L36 48 L22 60 L28 40 L12 28 L32 28Z" fill="#E9C46A" stroke="#2D3436" strokeWidth="2" />
              </svg>
              <h3>Quality Over Quantity</h3>
              <p>We take on fewer projects so we can give each one the attention it deserves. No assembly lines here.</p>
            </div>

            <div className="service-card reveal" style={{ background: 'var(--mcm-cream)' }}>
              <svg className="service-card-icon" viewBox="0 0 72 72" fill="none">
                <rect x="8" y="16" width="56" height="40" rx="4" stroke="#2D3436" strokeWidth="2" fill="#2A9D8F" opacity="0.15" />
                <path d="M8 28 L36 44 L64 28" stroke="#2D3436" strokeWidth="2" fill="none" />
                <line x1="8" y1="28" x2="8" y2="56" stroke="#2D3436" strokeWidth="2" />
                <line x1="64" y1="28" x2="64" y2="56" stroke="#2D3436" strokeWidth="2" />
              </svg>
              <h3>Transparent Communication</h3>
              <p>No jargon, no hidden fees, no surprises. You&rsquo;ll always know what we&rsquo;re doing and why.</p>
            </div>

            <div className="service-card reveal" style={{ background: 'var(--mcm-cream)' }}>
              <svg className="service-card-icon" viewBox="0 0 72 72" fill="none">
                <circle cx="36" cy="36" r="24" stroke="#2D3436" strokeWidth="2" fill="#E76F51" opacity="0.15" />
                <path d="M36 16 L36 36 L50 44" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" fill="none" />
                <circle cx="36" cy="36" r="3" fill="#2D3436" />
              </svg>
              <h3>Results That Last</h3>
              <p>We build for the long term. Our websites and SEO strategies are designed to keep working for years, not weeks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="section section-lg bg-pattern-dots">
        <div className="container">
          <div className="content-block reversed reveal">
            <div className="content-block-text">
              <div className="flag-label flag-teal">The Personal Touch</div>
              <h2>Work Directly With<br /><span className="text-teal">the Person Building It</span></h2>
              <p>When you work with Sobojinski Solutions, you&rsquo;re not passed off to a junior designer or an outsourced team. You work directly with Justin, who handles everything from strategy to design to development.</p>
              <p>That means faster communication, a more cohesive vision, and someone who genuinely cares about your project from start to finish.</p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>Let&rsquo;s Talk</Link>
            </div>
            <div className="content-block-visual">
              {/* Abstract portrait/workspace illustration */}
              <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
                {/* Desk */}
                <rect x="40" y="200" width="320" height="120" rx="4" fill="#6D4C3D" opacity="0.2" stroke="#2D3436" strokeWidth="2" />
                {/* Monitor */}
                <rect x="120" y="80" width="160" height="110" rx="4" fill="#FAF8F2" stroke="#2D3436" strokeWidth="3" />
                <rect x="120" y="80" width="160" height="20" fill="#2D3436" />
                <circle cx="140" cy="90" r="4" fill="#E76F51" />
                <circle cx="154" cy="90" r="4" fill="#E9C46A" />
                <circle cx="168" cy="90" r="4" fill="#2A9D8F" />
                {/* Code lines on monitor */}
                <rect x="135" y="110" width="80" height="5" rx="1" fill="#2A9D8F" opacity="0.4" />
                <rect x="135" y="120" width="120" height="5" rx="1" fill="#2D3436" opacity="0.1" />
                <rect x="135" y="130" width="60" height="5" rx="1" fill="#E76F51" opacity="0.3" />
                <rect x="135" y="140" width="100" height="5" rx="1" fill="#2D3436" opacity="0.1" />
                <rect x="135" y="150" width="90" height="5" rx="1" fill="#E9C46A" opacity="0.3" />
                <rect x="135" y="160" width="70" height="5" rx="1" fill="#2D3436" opacity="0.1" />
                {/* Monitor stand */}
                <rect x="185" y="190" width="30" height="15" fill="#2D3436" opacity="0.3" />
                {/* Coffee cup */}
                <rect x="310" y="220" width="30" height="35" rx="2" fill="#E76F51" stroke="#2D3436" strokeWidth="2" />
                <path d="M340 230 Q355 230 355 245 Q355 255 340 255" stroke="#2D3436" strokeWidth="2" fill="none" />
                {/* Plant */}
                <rect x="60" y="240" width="25" height="30" fill="#E9C46A" stroke="#2D3436" strokeWidth="2" />
                <circle cx="72" cy="228" r="18" fill="#8B9556" stroke="#2D3436" strokeWidth="2" />
                <circle cx="62" cy="220" r="12" fill="#2A9D8F" stroke="#2D3436" strokeWidth="2" />
                {/* Starburst */}
                <g transform="translate(340,100) scale(0.4)">
                  <line x1="0" y1="-40" x2="0" y2="40" stroke="#E9C46A" strokeWidth="3" />
                  <line x1="-40" y1="0" x2="40" y2="0" stroke="#E9C46A" strokeWidth="3" />
                  <line x1="-28" y1="-28" x2="28" y2="28" stroke="#E9C46A" strokeWidth="2" />
                  <line x1="28" y1="-28" x2="-28" y2="28" stroke="#E9C46A" strokeWidth="2" />
                  <circle cx="0" cy="0" r="5" fill="#E76F51" />
                </g>
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
          <h2 className="reveal" style={{ color: 'var(--mcm-cream)' }}>Let&rsquo;s Build Something<br /><span style={{ color: 'var(--mcm-mustard)' }}>Together</span></h2>
          <p className="reveal" style={{ color: 'var(--mcm-cream)', opacity: 0.8 }}>Ready to take the next step? Book a free strategy call and we&rsquo;ll map out a plan tailored to your business.</p>
          <div className="cta-buttons reveal">
            <Link href="/contact" className="btn btn-primary btn-lg">Book Your Free Call</Link>
          </div>
        </div>
      </section>

      <div className="retro-stripe">
        <span></span><span></span><span></span><span></span><span></span>
      </div>
    </>
  );
}
