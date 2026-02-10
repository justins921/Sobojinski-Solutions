'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.pageYOffset > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/web-design', label: 'Web Design' },
    { href: '/seo', label: 'SEO' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <svg className="nav-logo-icon" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="6" fill="#2A9D8F" />
            <ellipse cx="24" cy="24" rx="22" ry="8" stroke="#2D3436" strokeWidth="1.5" fill="none" />
            <ellipse cx="24" cy="24" rx="22" ry="8" stroke="#2D3436" strokeWidth="1.5" fill="none" transform="rotate(60 24 24)" />
            <ellipse cx="24" cy="24" rx="22" ry="8" stroke="#2D3436" strokeWidth="1.5" fill="none" transform="rotate(120 24 24)" />
            <circle cx="24" cy="24" r="3" fill="#E76F51" />
          </svg>
          <div className="nav-logo-text">
            Sobojinski
            <span>Solutions</span>
          </div>
        </Link>

        <button
          className={`nav-toggle${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={pathname === item.href ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
              Book a Call
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
