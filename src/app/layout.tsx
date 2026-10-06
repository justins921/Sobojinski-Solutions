import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollEffects from '@/components/ScrollEffects'

export const metadata: Metadata = {
  title: {
    default: 'Sobojinski Solutions | Custom Software, Websites & SEO',
    template: '%s | Sobojinski Solutions',
  },
  description: 'Sobojinski Solutions builds real software products like EMR OS for physical therapy clinics, designs websites for local businesses, and creates custom web tools. Plus web design and SEO services that deliver.',
  keywords: ['custom software', 'EMR', 'physical therapy software', 'web design', 'SEO services', 'custom websites', 'web tools', 'small business software', 'lead generation software'],
  metadataBase: new URL('https://sobojinskisolutions.com'),
  alternates: {
    canonical: 'https://sobojinskisolutions.com/',
  },
  openGraph: {
    title: 'Sobojinski Solutions | Custom Software, Websites & SEO',
    description: 'Real software products like EMR OS for physical therapy clinics, client websites, custom web tools, and SEO services for small businesses.',
    type: 'website',
    url: 'https://sobojinskisolutions.com/',
    siteName: 'Sobojinski Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobojinski Solutions | Custom Software, Websites & SEO',
    description: 'Real software products, client websites, custom web tools, and SEO services.',
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
