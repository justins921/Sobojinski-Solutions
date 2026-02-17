import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Sobojinski Solutions. Whether you need a platform for your industry or want to discuss a project, we are here to help.',
}

export default function ContactPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="section-label fade-in-up">Contact Us</div>
          <h1 className="fade-in-up delay-1">Let&rsquo;s Start a Conversation</h1>
          <p className="fade-in-up delay-2">Whether you have a question about our products, need a custom solution, or want to explore a partnership — we&rsquo;re here to help.</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section">
        <div className="container">
          <div className="contact-grid reveal">
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </div>
              <h4>Email Us</h4>
              <p><a href="mailto:justin@sobojinskisolutions.com">justin@sobojinskisolutions.com</a></p>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </div>
              <h4>Call Us</h4>
              <p><a href="tel:+447834569629">+44 7834 569 629</a></p>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </div>
              <h4>Schedule a Call</h4>
              <p>Book a free strategy session to discuss your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section bg-light">
        <div className="container">
          <div className="form-section reveal">
            <div>
              <div className="section-label">Send a Message</div>
              <h2 style={{ marginBottom: '1rem' }}>Tell Us About Your Needs</h2>
              <p style={{ color: '#64748B', marginBottom: '2rem' }}>Fill out the form and we&rsquo;ll get back to you within 24 hours. Or reach out directly using the contact details above.</p>
              <ContactForm />
            </div>
            <div>
              <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '2rem' }}>
                <h3 style={{ marginBottom: '1.5rem' }}>Quick Answers</h3>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>What products do you offer?</h4>
                  <p style={{ fontSize: '0.875rem', color: '#64748B' }}>We build four specialized platforms: EMR OS (healthcare), Golf OS (golf management), Work OS (workforce tools), and SEO OS (SEO platform).</p>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>Do you still offer web design?</h4>
                  <p style={{ fontSize: '0.875rem', color: '#64748B' }}>Yes, we still offer custom web design and SEO services alongside our platform products. Just mention it in your message.</p>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>How quickly do you respond?</h4>
                  <p style={{ fontSize: '0.875rem', color: '#64748B' }}>We respond to all inquiries within 24 hours. For urgent matters, call us directly.</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>Where are you based?</h4>
                  <p style={{ fontSize: '0.875rem', color: '#64748B' }}>We work with clients globally. Our team operates across time zones to ensure responsive support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
