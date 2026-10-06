import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sobojinskisolutions.com'
  const now = new Date()

  const routes = ['', '/products', '/portfolio', '/about', '/contact'].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }))

  return routes
}
