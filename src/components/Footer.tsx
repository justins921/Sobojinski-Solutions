import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-logo" style={{ marginBottom: '0.5rem' }}>
              <img src="/logo.jpg" alt="Sobojinski Solutions" className="nav-logo-icon" width={40} height={40} />
              <div className="nav-logo-text" style={{ color: '#F8FAFC' }}>
                Sobojinski
                <span>Solutions</span>
              </div>
            </Link>
            <p>Real software products, client websites, custom web tools, and SEO services for small businesses. Built and shipped by Sobojinski Solutions.</p>
          </div>
          <div>
            <h4>Products</h4>
            <ul className="footer-links">
              <li><a href="https://emros.sobojinskisolutions.com">EMR OS</a></li>
              <li><a href="https://uglysitescraper.com" target="_blank" rel="noopener noreferrer">Ugly Site Scraper</a></li>
              <li><a href="https://dothatagain.app" target="_blank" rel="noopener noreferrer">DoThatAgain</a></li>
              <li><Link href="/products">Penelope (soon)</Link></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link href="/products#web-design">Web Design</Link></li>
              <li><Link href="/products#seo-services">SEO Services</Link></li>
              <li><Link href="/#custom-tools">Custom Tools</Link></li>
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
