import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="brand-bar">
        <span></span><span></span><span></span><span></span>
      </div>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-logo" style={{ marginBottom: '0.5rem' }}>
              <svg className="nav-logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="40" height="40" rx="10" fill="#1E293B" />
                <path d="M12 14h6v6h-6z" fill="#2563EB" />
                <path d="M22 14h6v6h-6z" fill="#10B981" />
                <path d="M12 24h6v6h-6z" fill="#8B5CF6" />
                <path d="M22 24h6v6h-6z" fill="#F97316" />
              </svg>
              <div className="nav-logo-text" style={{ color: '#F8FAFC' }}>
                Sobojinski
                <span>Solutions</span>
              </div>
            </Link>
            <p>Purpose-built software platforms and professional web design &amp; SEO services. Solving real business problems across healthcare, golf improvement, workforce management, and digital marketing.</p>
          </div>
          <div>
            <h4>Products</h4>
            <ul className="footer-links">
              <li><a href="https://emros.sobojinskisolutions.com">EMR OS</a></li>
              <li><a href="https://golfos.sobojinskisolutions.com">Golf OS</a></li>
              <li><a href="https://workos.sobojinskisolutions.com">Work OS</a></li>
              <li><a href="https://seoos.sobojinskisolutions.com">SEO OS</a></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link href="/products#web-design">Web Design</Link></li>
              <li><Link href="/products#seo-services">SEO Services</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Get in Touch</h4>
            <ul className="footer-links">
              <li><Link href="/contact">Send Us a Message</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sobojinski Solutions. All rights reserved.</p>
          <ul className="footer-bottom-links">
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
