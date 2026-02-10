'use client'

import { useEffect } from 'react'

export default function ScrollEffects() {
  useEffect(() => {
    function revealOnScroll() {
      const reveals = document.querySelectorAll('.reveal')
      const windowHeight = window.innerHeight

      reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top
        const revealPoint = 120

        if (elementTop < windowHeight - revealPoint) {
          el.classList.add('visible')
        }
      })
    }

    function animateCounters() {
      const counters = document.querySelectorAll('.stat-number') as NodeListOf<HTMLElement>

      counters.forEach((counter) => {
        if (counter.dataset.animated) return

        const rect = counter.getBoundingClientRect()
        if (rect.top > window.innerHeight || rect.bottom < 0) return

        counter.dataset.animated = 'true'
        const text = counter.textContent?.trim() || ''

        if (text.includes('%') || text.includes('/') || text.includes('st') || text.includes('nd') || text.includes('rd') || text.includes('th')) {
          const match = text.match(/(\d+)/)
          if (!match) return

          const target = parseInt(match[1], 10)
          const suffix = text.replace(match[1], '')
          const duration = 1500
          let startTime: number | null = null

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = Math.floor(eased * target)

            if (text.indexOf(match![1]) === 0) {
              counter.textContent = current + suffix
            } else {
              counter.textContent = suffix.split(match![1])[0] + current + suffix.split(match![1])[1]
            }

            if (progress < 1) {
              requestAnimationFrame(step)
            } else {
              counter.textContent = text
            }
          }

          requestAnimationFrame(step)
        }
      })
    }

    function parallaxDecor() {
      const scrolled = window.pageYOffset
      const decors = document.querySelectorAll('.atomic-decor') as NodeListOf<HTMLElement>

      decors.forEach((decor, index) => {
        const speed = 0.03 + (index * 0.01)
        const yPos = -(scrolled * speed)
        decor.style.transform = `translateY(${yPos}px)`
      })
    }

    function rotateStarbursts() {
      const scrolled = window.pageYOffset
      const starbursts = document.querySelectorAll('.decor-starburst') as NodeListOf<HTMLElement>

      starbursts.forEach((star) => {
        star.style.transform = `rotate(${scrolled * 0.05}deg)`
      })
    }

    function handleScroll() {
      revealOnScroll()
      animateCounters()
      rotateStarbursts()
      if (window.innerWidth > 768) {
        parallaxDecor()
      }
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = (anchor as HTMLAnchorElement).getAttribute('href')
        if (!href) return
        const target = document.querySelector(href)
        if (target) {
          e.preventDefault()
          const offset = 100
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset
          window.scrollTo({ top: targetPosition, behavior: 'smooth' })
        }
      })
    })

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Trigger on load
    revealOnScroll()
    animateCounters()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}
