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
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input type="text" id="firstName" name="firstName" className="form-input" placeholder="John" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" id="lastName" name="lastName" className="form-input" placeholder="Doe" required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" id="email" name="email" className="form-input" placeholder="john@company.com" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone" className="form-label">Phone (optional)</label>
        <input type="tel" id="phone" name="phone" className="form-input" placeholder="+1 (555) 000-0000" />
      </div>
      <div className="form-group">
        <label htmlFor="service" className="form-label">What product are you interested in?</label>
        <select id="service" name="service" className="form-select">
          <option value="">Select a product...</option>
          <option value="emr-os">EMR OS — Healthcare Platform</option>
          <option value="golf-os">Golf OS — Golf Management</option>
          <option value="work-os">Work OS — Workforce Management</option>
          <option value="seo-os">SEO OS — SEO Platform</option>
          <option value="web-design">Web Design Services</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message" className="form-label">Tell us about your needs</label>
        <textarea id="message" name="message" className="form-textarea" rows={5} placeholder="Describe your project or business challenge..." required></textarea>
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-lg"
        style={{
          width: '100%',
          marginTop: '0.5rem',
          background: status === 'sent' ? '#10B981' : status === 'error' ? '#EF4444' : undefined,
          borderColor: status === 'sent' ? '#10B981' : status === 'error' ? '#EF4444' : undefined,
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
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 9l4 4 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Message Sent!
          </>
        )}
        {status === 'error' && 'Error — Please try again'}
      </button>
    </form>
  )
}
