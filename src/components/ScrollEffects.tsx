'use client'

import { useEffect } from 'react'

export default function ScrollEffects() {
  useEffect(() => {
    // Scroll-reveal using IntersectionObserver
    const revealElements = document.querySelectorAll('.reveal')
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    revealElements.forEach((el) => revealObserver.observe(el))

    // Animated counters for .stat-number elements
    const counterElements = document.querySelectorAll('.stat-number[data-count]')
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const target = parseInt(el.dataset.count || '0', 10)
            const suffix = el.dataset.suffix || ''
            const prefix = el.dataset.prefix || ''
            const duration = 1500
            let startTime: number | null = null

            const step = (timestamp: number) => {
              if (!startTime) startTime = timestamp
              const progress = Math.min((timestamp - startTime) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              const current = Math.floor(eased * target)
              el.textContent = prefix + current.toLocaleString() + suffix

              if (progress < 1) {
                requestAnimationFrame(step)
              } else {
                el.textContent = prefix + target.toLocaleString() + suffix
              }
            }

            requestAnimationFrame(step)
            counterObserver.unobserve(el)
          }
        })
      },
      { threshold: 0.3 }
    )

    counterElements.forEach((el) => counterObserver.observe(el))

    // Smooth scroll for anchor links
    function handleAnchorClick(e: Event) {
      const anchor = e.currentTarget as HTMLAnchorElement
      const href = anchor.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          const offset = 80
          const top = target.getBoundingClientRect().top + window.scrollY - offset
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }
    }

    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach((link) => link.addEventListener('click', handleAnchorClick))

    return () => {
      revealObserver.disconnect()
      counterObserver.disconnect()
      anchorLinks.forEach((link) => link.removeEventListener('click', handleAnchorClick))
    }
  }, [])

  return null
}
