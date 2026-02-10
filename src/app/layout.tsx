import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollEffects from '@/components/ScrollEffects'

export const metadata: Metadata = {
  title: {
    default: 'Sobojinski Solutions | Custom Web Design & SEO',
    template: '%s | Sobojinski Solutions',
  },
  description: 'Custom websites and SEO strategies that help your business grow. Handcrafted web design with a 90-day ranking guarantee.',
  keywords: ['web design', 'SEO', 'custom websites', 'search engine optimization', 'digital marketing'],
  openGraph: {
    title: 'Sobojinski Solutions | Custom Web Design & SEO',
    description: 'Custom websites and SEO strategies that help your business grow.',
    type: 'website',
    url: 'https://sobojinskisolutions.com/',
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
        <div className="retro-stripe" style={{ position: 'fixed', top: '68px', left: 0, width: '100%', zIndex: 999 }}>
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        {children}
        <div className="retro-stripe">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <Footer />
        <ScrollEffects />
      </body>
    </html>
  )
}
