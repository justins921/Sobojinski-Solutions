'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus('sent')
        form.reset()
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        throw new Error('Submission failed')
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input type="text" id="firstName" name="firstName" className="form-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" id="lastName" name="lastName" className="form-input" required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" id="email" name="email" className="form-input" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone" className="form-label">Phone (optional)</label>
        <input type="tel" id="phone" name="phone" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="service" className="form-label">What are you interested in?</label>
        <select id="service" name="service" className="form-select">
          <option value="">Select a service...</option>
          <option value="web-design">Custom Web Design</option>
          <option value="seo">SEO Services</option>
          <option value="both">Web Design + SEO</option>
          <option value="other">Something else</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message" className="form-label">Tell us about your project</label>
        <textarea id="message" name="message" className="form-textarea" rows={5} required></textarea>
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-lg"
        style={{
          marginTop: '0.5rem',
          background: status === 'sent' ? 'var(--mcm-olive)' : status === 'error' ? 'var(--mcm-coral)' : undefined,
        }}
        disabled={status === 'sending'}
      >
        {status === 'idle' && (
          <>
            Send Message
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </>
        )}
        {status === 'sending' && 'Sending...'}
        {status === 'sent' && (
          <>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="2" /><path d="M6 9l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Message Sent!
          </>
        )}
        {status === 'error' && 'Error — Please try again'}
      </button>
    </form>
  )
}
