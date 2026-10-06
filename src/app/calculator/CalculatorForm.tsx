'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

type ProjectType = 'website' | 'ecommerce' | 'webapp' | 'tool' | 'seo'
type Timeline = 'standard' | 'rush' | 'flexible'

const PROJECT_TYPES: { id: ProjectType; label: string; desc: string; base: number; perPage: number; monthly: boolean }[] = [
  { id: 'website', label: 'Business Website', desc: 'Marketing site for your business', base: 1500, perPage: 150, monthly: false },
  { id: 'ecommerce', label: 'E-commerce Site', desc: 'Online store with checkout', base: 3000, perPage: 200, monthly: false },
  { id: 'webapp', label: 'Custom Web App', desc: 'Software built for your workflow', base: 5000, perPage: 0, monthly: false },
  { id: 'tool', label: 'One-Off Tool', desc: 'Calculator, estimator, or widget', base: 800, perPage: 0, monthly: false },
  { id: 'seo', label: 'SEO Campaign', desc: 'Ongoing search optimization', base: 500, perPage: 0, monthly: true },
]

const FEATURES: { id: string; label: string; desc: string; cost: number; monthlyCost?: number }[] = [
  { id: 'contact', label: 'Contact form', desc: 'Quote requests, callbacks', cost: 200 },
  { id: 'blog', label: 'Blog / news section', desc: 'Publish updates and articles', cost: 400 },
  { id: 'checkout', label: 'E-commerce checkout', desc: 'Sell products online', cost: 1500 },
  { id: 'accounts', label: 'User accounts / login', desc: 'Members or customer portals', cost: 1200 },
  { id: 'dashboard', label: 'Custom dashboard', desc: 'Admin panel or reporting', cost: 2000 },
  { id: 'api', label: 'API integrations', desc: 'Connect to other software', cost: 800 },
  { id: 'ai', label: 'AI features', desc: 'Chat, generation, or analysis', cost: 1500 },
]

const TIMELINES: { id: Timeline; label: string; desc: string; modifier: number }[] = [
  { id: 'standard', label: 'Standard', desc: '4 to 6 weeks', modifier: 1 },
  { id: 'rush', label: 'Rush', desc: '2 to 3 weeks (+25%)', modifier: 1.25 },
  { id: 'flexible', label: 'Flexible', desc: '8+ weeks (save 10%)', modifier: 0.9 },
]

function formatMoney(n: number): string {
  return '$' + Math.round(n).toLocaleString('en-US')
}

export default function CalculatorForm() {
  const [projectType, setProjectType] = useState<ProjectType>('website')
  const [pages, setPages] = useState(5)
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['contact'])
  const [timeline, setTimeline] = useState<Timeline>('standard')

  const type = PROJECT_TYPES.find((t) => t.id === projectType)!
  const showPages = type.perPage > 0

  function toggleFeature(id: string) {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    )
  }

  const { low, high, monthly } = useMemo(() => {
    let estimate = type.base
    if (showPages) estimate += pages * type.perPage
    for (const f of FEATURES) {
      if (selectedFeatures.includes(f.id)) estimate += f.cost
    }
    estimate *= TIMELINES.find((t) => t.id === timeline)!.modifier
    return {
      low: estimate * 0.8,
      high: estimate * 1.2,
      monthly: type.monthly,
    }
  }, [type, pages, selectedFeatures, timeline, showPages])

  return (
    <div className="calc-grid">
      <div className="calc-form">
        {/* Project type */}
        <div className="calc-group">
          <h3>What are you building?</h3>
          <div className="calc-options">
            {PROJECT_TYPES.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`calc-option${projectType === t.id ? ' selected' : ''}`}
                onClick={() => setProjectType(t.id)}
                aria-pressed={projectType === t.id}
              >
                <span className="calc-option-label">{t.label}</span>
                <span className="calc-option-desc">{t.desc}</span>
                <span className="calc-option-price">
                  from {formatMoney(t.base)}{t.monthly ? '/mo' : ''}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Pages */}
        {showPages && (
          <div className="calc-group">
            <h3>How many pages?</h3>
            <div className="calc-slider-row">
              <input
                type="range"
                min={1}
                max={50}
                value={pages}
                onChange={(e) => setPages(Number(e.target.value))}
                className="calc-slider"
                aria-label="Number of pages"
              />
              <span className="calc-pages-value">{pages} {pages === 1 ? 'page' : 'pages'}</span>
            </div>
            <p className="calc-hint">Home, About, Services, Contact each count as one page.</p>
          </div>
        )}

        {/* Features */}
        <div className="calc-group">
          <h3>What features do you need?</h3>
          <div className="calc-features">
            {FEATURES.map((f) => (
              <label key={f.id} className={`calc-feature${selectedFeatures.includes(f.id) ? ' selected' : ''}`}>
                <input
                  type="checkbox"
                  checked={selectedFeatures.includes(f.id)}
                  onChange={() => toggleFeature(f.id)}
                />
                <span className="calc-feature-check" aria-hidden="true" />
                <span className="calc-feature-text">
                  <span className="calc-feature-label">{f.label}</span>
                  <span className="calc-feature-desc">{f.desc}</span>
                </span>
                <span className="calc-feature-price">+{formatMoney(f.cost)}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="calc-group">
          <h3>How fast do you need it?</h3>
          <div className="calc-options calc-options-row">
            {TIMELINES.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`calc-option${timeline === t.id ? ' selected' : ''}`}
                onClick={() => setTimeline(t.id)}
                aria-pressed={timeline === t.id}
              >
                <span className="calc-option-label">{t.label}</span>
                <span className="calc-option-desc">{t.desc}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result panel */}
      <div className="calc-result-wrap">
        <div className="calc-result">
          <div className="calc-result-label">Your estimated range</div>
          <div className="calc-result-price">
            {formatMoney(low)} &ndash; {formatMoney(high)}
            {monthly && <span className="calc-result-per">/month</span>}
          </div>
          <p className="calc-result-note">
            This is a rough ballpark based on typical projects. Every project is different,
            so the real number depends on the details.
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg calc-result-cta">
            Get an Exact Quote
          </Link>
          <p className="calc-result-disclaimer">
            Free to ask. We will give you a straight answer with no pressure and no obligation.
          </p>
        </div>
      </div>
    </div>
  )
}
