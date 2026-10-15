import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const categories = [
  {
    name: 'Frontend Systems',
    detail: 'Next.js, React, TypeScript and Tailwind CSS for fast, responsive, mobile-first websites.',
    src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Backend & APIs',
    detail: 'Node.js, TypeScript, Express, Python and Django, with PostgreSQL for reliable data.',
    src: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Cloud & Infrastructure',
    detail: 'GCP, Vercel and automated deployment workflows for reliable, fast delivery.',
    src: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'The Audit Engine',
    detail: 'Gemini AI for analysis, Lighthouse and Playwright for real browser testing, and automated email and WhatsApp delivery.',
    src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80',
  },
]

const Materials = () => {
  return (
    <section id="materials" className="section-y bg-background border-b border-border">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          subtitle="Our Tech Stack"
          title="The stack behind the engine"
          description="The same modern stack powers our audit engine and the websites we fix."
          centered
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group border border-border bg-card"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <img
                  loading="lazy"
                  decoding="async"
                  src={c.src}
                  alt={c.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-base font-bold uppercase tracking-[0.08em] text-foreground">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Materials
