import type { Metadata } from 'next'
import CalculatorForm from './CalculatorForm'

export const metadata: Metadata = {
  title: 'Project Cost Estimator',
  description: 'Estimate what your website, web app, or custom tool project will cost. Answer a few questions and get an instant ballpark range from Sobojinski Solutions.',
}

export default function CalculatorPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="section-label">Project Estimator</div>
          <h1>What Will My Project Cost?</h1>
          <p>
            Answer a few questions about your project and get an instant ballpark estimate.
            No email required, no sales call. Just a straight number range.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CalculatorForm />
        </div>
      </section>
    </>
  )
}
