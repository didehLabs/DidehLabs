import { defineConfig, type Plugin } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'

interface SiteData {
  url: string
  name: string
  title: string
  description: string
  tagline: string
  email: string
  phone: string
  whatsapp: string
  address: { locality: string; region: string; country: string }
  founder: { name: string; jobTitle: string; url: string; sameAs: string[] }
  services: { name: string; description: string }[]
  markets: string[]
  industries: string[]
  faqs: { q: string; a: string }[]
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Injects structured data (JSON-LD) and a no-JavaScript fallback into index.html
// from one shared source of truth: src/data/site.json
function seoPlugin(): Plugin {
  const site: SiteData = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, 'src/data/site.json'), 'utf-8'),
  )
  const u = site.url
  const countries = site.markets.map((name) => ({ '@type': 'Country', name }))

  const graph = [
    {
      '@type': 'ProfessionalService',
      '@id': `${u}/#organization`,
      name: site.name,
      alternateName: 'DidehLabs',
      url: `${u}/`,
      description: site.description,
      slogan: site.tagline,
      logo: {
        '@type': 'ImageObject',
        '@id': `${u}/#logo`,
        url: `${u}/favicon/android-chrome-512x512.png`,
        width: 512,
        height: 512,
      },
      image: `${u}/og-image.png`,
      email: site.email,
      telephone: site.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
      areaServed: countries,
      knowsAbout: [
        'Website audits',
        'Website performance',
        'Local SEO',
        'Booking systems',
        'Conversion optimization',
        'AI growth intelligence',
      ],
      founder: { '@id': `${u}/#founder` },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: site.email,
          telephone: site.phone,
          availableLanguage: 'English',
          areaServed: site.markets,
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services',
        itemListElement: site.services.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.name, description: s.description, provider: { '@id': `${u}/#organization` }, areaServed: countries },
        })),
      },
    },
    {
      '@type': 'Person',
      '@id': `${u}/#founder`,
      name: site.founder.name,
      jobTitle: site.founder.jobTitle,
      url: site.founder.url,
      sameAs: site.founder.sameAs,
      worksFor: { '@id': `${u}/#organization` },
    },
    {
      '@type': 'WebSite',
      '@id': `${u}/#website`,
      url: `${u}/`,
      name: site.name,
      description: site.description,
      inLanguage: 'en',
      publisher: { '@id': `${u}/#organization` },
    },
    {
      '@type': 'WebPage',
      '@id': `${u}/#webpage`,
      url: `${u}/`,
      name: site.title,
      description: site.description,
      inLanguage: 'en',
      isPartOf: { '@id': `${u}/#website` },
      about: { '@id': `${u}/#organization` },
      primaryImageOfPage: { '@type': 'ImageObject', url: `${u}/og-image.png`, width: 1200, height: 630 },
      breadcrumb: { '@id': `${u}/#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${u}/#breadcrumb`,
      itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${u}/` }],
    },
    {
      '@type': 'FAQPage',
      '@id': `${u}/#faq`,
      mainEntity: site.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]

  const jsonLd = `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>`

  const noscript = `<noscript>
      <main style="max-width:720px;margin:0 auto;padding:32px;font-family:Arial,sans-serif;line-height:1.6">
        <h1>${escapeHtml(site.name)}: ${escapeHtml(site.tagline)}</h1>
        <p>${escapeHtml(site.description)}</p>
        <h2>Services</h2>
        <ul>${site.services.map((s) => `<li><strong>${escapeHtml(s.name)}</strong>: ${escapeHtml(s.description)}</li>`).join('')}</ul>
        <h2>Who we help</h2>
        <p>${escapeHtml(site.industries.join(', '))}.</p>
        <h2>Markets</h2>
        <p>${escapeHtml(site.markets.join(', '))}.</p>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:${site.email}">${site.email}</a><br />WhatsApp: <a href="${site.whatsapp}">${site.phone}</a></p>
      </main>
    </noscript>`

  return {
    name: 'didehlabs-seo',
    transformIndexHtml(html) {
      return html.replace('<!--SEO_JSONLD-->', jsonLd).replace('<!--SEO_NOSCRIPT-->', noscript)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
    seoPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
