import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
}

// All meta tags, Open Graph, Twitter cards and JSON-LD live in index.html (injected from
// src/data/site.json at build time) so crawlers and social bots see them without running JavaScript.
// This component only keeps the document title and language in sync at runtime.
const SEO: React.FC<SEOProps> = ({ title = 'didehLabs | AI Growth Intelligence for Local Businesses' }) => (
  <Helmet>
    <html lang="en" />
    <title>{title}</title>
  </Helmet>
)

export default SEO
