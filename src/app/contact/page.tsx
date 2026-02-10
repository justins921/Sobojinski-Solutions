import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Sobojinski Solutions. Book a free strategy call to discuss your web design and SEO needs.',
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header bg-paper bg-constellation">
        <div className="container">
          <div className="flag-label flag-coral fade-in-up">Get in Touch</div>
          <h1 className="fade-in-up delay-1">
            Let&rsquo;s Start a<br />
            <span className="text-teal">Conversation</span>
          </h1>
          <p className="fade-in-up delay-2">
            Book a free strategy call or drop us a message. No pressure, no hard
            sell &mdash; just honest advice.
          </p>
        </div>
        <svg
          className="atomic-decor"
          style={{ top: '20%', right: '8%', width: '55px', opacity: 0.1 }}
          viewBox="0 0 60 60"
        >
          <path d="M10 40 Q25 10 45 30 Q25 35 10 40Z" fill="#2A9D8F" />
        </svg>
      </section>

      <div className="retro-stripe">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Contact Cards */}
      <section className="section">
        <div className="container">
          <div className="contact-grid reveal">
            <div className="contact-card">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  fill="#2A9D8F"
                  opacity="0.15"
                  stroke="#2D3436"
                  strokeWidth="1.5"
                />
                <path
                  d="M14 18 L24 26 L34 18"
                  stroke="#2D3436"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <rect
                  x="12"
                  y="16"
                  width="24"
                  height="16"
                  rx="2"
                  stroke="#2D3436"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <h4>Email Us</h4>
              <p>
                <a href="mailto:justin@sobojinskisolutions.com">
                  justin@sobojinskisolutions.com
                </a>
              </p>
            </div>

            <div className="contact-card">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  fill="#E76F51"
                  opacity="0.15"
                  stroke="#2D3436"
                  strokeWidth="1.5"
                />
                <path
                  d="M16 14 L20 14 L22 20 L19 22 C20.5 25 23 27.5 26 29 L28 26 L34 28 L34 32 C34 33.1 33.1 34 32 34 C22 34 14 26 14 16 C14 14.9 14.9 14 16 14Z"
                  stroke="#2D3436"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h4>Call Us</h4>
              <p>
                <a href="tel:+447834569629">+44 7834 569 629</a>
              </p>
            </div>

            <div className="contact-card">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  fill="#E9C46A"
                  opacity="0.15"
                  stroke="#2D3436"
                  strokeWidth="1.5"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="10"
                  stroke="#2D3436"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="24" cy="24" r="3" fill="#2D3436" />
                <line
                  x1="24"
                  y1="14"
                  x2="24"
                  y2="10"
                  stroke="#2D3436"
                  strokeWidth="1.5"
                />
                <line
                  x1="24"
                  y1="38"
                  x2="24"
                  y2="34"
                  stroke="#2D3436"
                  strokeWidth="1.5"
                />
                <line
                  x1="14"
                  y1="24"
                  x2="10"
                  y2="24"
                  stroke="#2D3436"
                  strokeWidth="1.5"
                />
                <line
                  x1="38"
                  y1="24"
                  x2="34"
                  y2="24"
                  stroke="#2D3436"
                  strokeWidth="1.5"
                />
              </svg>
              <h4>Strategy Call</h4>
              <p>Book a free call to discuss your project and goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section section-lg bg-offwhite">
        <div className="container">
          <div className="content-block reveal">
            <div className="content-block-text" style={{ maxWidth: '100%' }}>
              <div className="flag-label flag-teal">Send a Message</div>
              <h2>
                Tell Us About<br />
                Your <span className="text-teal">Project</span>
              </h2>
              <p style={{ marginBottom: '2rem' }}>
                Fill out the form and we&rsquo;ll get back to you within 24
                hours. Or if you prefer, call us directly or book a strategy
                call using the links above.
              </p>

              <ContactForm />
            </div>

            <div className="content-block-visual">
              {/* Decorative mid-century composition */}
              <svg viewBox="0 0 400 500" fill="none" style={{ width: '100%' }}>
                {/* Abstract communication illustration */}
                {/* Envelope / message */}
                <rect
                  x="80"
                  y="60"
                  width="240"
                  height="160"
                  rx="4"
                  fill="#FAF8F2"
                  stroke="#2D3436"
                  strokeWidth="2"
                />
                <path
                  d="M80 60 L200 160 L320 60"
                  stroke="#2D3436"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M80 220 L160 140"
                  stroke="#2D3436"
                  strokeWidth="2"
                  opacity="0.3"
                />
                <path
                  d="M320 220 L240 140"
                  stroke="#2D3436"
                  strokeWidth="2"
                  opacity="0.3"
                />

                {/* Signal waves */}
                <path
                  d="M200 250 Q200 270 220 280"
                  stroke="#2A9D8F"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.5"
                />
                <path
                  d="M200 250 Q200 280 240 300"
                  stroke="#2A9D8F"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.4"
                />
                <path
                  d="M200 250 Q200 290 260 320"
                  stroke="#2A9D8F"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.3"
                />

                {/* Phone */}
                <rect
                  x="140"
                  y="300"
                  width="60"
                  height="100"
                  rx="8"
                  fill="#FAF8F2"
                  stroke="#2D3436"
                  strokeWidth="2"
                />
                <rect
                  x="148"
                  y="316"
                  width="44"
                  height="60"
                  rx="2"
                  fill="#2A9D8F"
                  opacity="0.1"
                />
                <circle
                  cx="170"
                  cy="388"
                  r="5"
                  stroke="#2D3436"
                  strokeWidth="1.5"
                  fill="none"
                />

                {/* Decorative elements */}
                {/* Starburst top-right */}
                <g transform="translate(340,80) scale(0.5)">
                  <line
                    x1="0"
                    y1="-40"
                    x2="0"
                    y2="40"
                    stroke="#E9C46A"
                    strokeWidth="2"
                  />
                  <line
                    x1="-40"
                    y1="0"
                    x2="40"
                    y2="0"
                    stroke="#E9C46A"
                    strokeWidth="2"
                  />
                  <line
                    x1="-28"
                    y1="-28"
                    x2="28"
                    y2="28"
                    stroke="#E9C46A"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="28"
                    y1="-28"
                    x2="-28"
                    y2="28"
                    stroke="#E9C46A"
                    strokeWidth="1.5"
                  />
                  <circle cx="0" cy="0" r="5" fill="#E76F51" />
                </g>

                {/* Boomerang */}
                <path
                  d="M50 350 Q80 300 100 340 Q75 345 50 350Z"
                  fill="#E76F51"
                  stroke="#2D3436"
                  strokeWidth="1.5"
                />

                {/* Diamond */}
                <path
                  d="M320 350 L340 380 L320 410 L300 380Z"
                  fill="#2A9D8F"
                  opacity="0.3"
                  stroke="#2D3436"
                  strokeWidth="1.5"
                />

                {/* Dots */}
                <circle cx="60" cy="120" r="6" fill="#E9C46A" />
                <circle cx="340" cy="260" r="4" fill="#E76F51" />
                <circle cx="280" cy="440" r="8" fill="#8B9556" opacity="0.5" />

                {/* Atom bottom */}
                <g transform="translate(320,460) scale(0.35)">
                  <ellipse
                    rx="50"
                    ry="18"
                    stroke="#2D3436"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.4"
                  />
                  <ellipse
                    rx="50"
                    ry="18"
                    stroke="#2D3436"
                    strokeWidth="1.5"
                    fill="none"
                    transform="rotate(60)"
                    opacity="0.4"
                  />
                  <ellipse
                    rx="50"
                    ry="18"
                    stroke="#2D3436"
                    strokeWidth="1.5"
                    fill="none"
                    transform="rotate(120)"
                    opacity="0.4"
                  />
                  <circle r="4" fill="#E9C46A" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <div className="retro-stripe">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
