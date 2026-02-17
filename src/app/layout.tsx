import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollEffects from '@/components/ScrollEffects'

export const metadata: Metadata = {
  title: {
    default: 'Sobojinski Solutions | Business Solutions, Engineered',
    template: '%s | Sobojinski Solutions',
  },
  description: 'Purpose-built software platforms that solve real business problems. From healthcare to hospitality, Sobojinski Solutions delivers the operating systems your business needs.',
  keywords: ['business solutions', 'software platforms', 'EMR', 'golf management', 'project management', 'SEO platform', 'SaaS', 'business software'],
  openGraph: {
    title: 'Sobojinski Solutions | Business Solutions, Engineered',
    description: 'Purpose-built software platforms that solve real business problems across healthcare, hospitality, workforce management, and digital marketing.',
    type: 'website',
    url: 'https://sobojinskisolutions.com/',
    siteName: 'Sobojinski Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobojinski Solutions | Business Solutions, Engineered',
    description: 'Purpose-built software platforms that solve real business problems.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollEffects />
      </body>
    </html>
  )
}
