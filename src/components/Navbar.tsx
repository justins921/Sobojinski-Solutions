'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [pathname])

  const serviceItems = [
    { href: '/products#web-design', label: 'Web Design', desc: 'Custom websites that convert visitors into customers' },
    { href: '/products#seo-services', label: 'SEO', desc: 'Get found on Google by the right people' },
    { href: '/contact?interest=custom-software', label: 'Custom Software', desc: 'Web apps built for your exact workflow' },
    { href: '/#custom-tools', label: 'One-Off Tools', desc: 'Calculators, estimators, and tools that do one job well' },
  ]

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/calculator', label: 'Estimator' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        <Link href="/" className="nav-logo" aria-label="Sobojinski Solutions - Home">
          <img src="/logo.jpg" alt="Sobojinski Solutions" className="nav-logo-icon" width={40} height={40} />
          <div className="nav-logo-text">
            Sobojinski
            <span>Solutions</span>
          </div>
        </Link>

        <button
          className={`nav-toggle${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
          {navItems.slice(0, 2).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={pathname === item.href ? 'active' : ''}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li
            className={`nav-dropdown${servicesOpen ? ' open' : ''}`}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="nav-dropdown-toggle"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <ul className="nav-dropdown-menu" role="menu">
              {serviceItems.map((item) => (
                <li key={item.label} role="menuitem">
                  <Link href={item.href} onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>
                    <span className="nav-dropdown-label">{item.label}</span>
                    <span className="nav-dropdown-desc">{item.desc}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {navItems.slice(2).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={pathname === item.href ? 'active' : ''}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="nav-cta">
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
