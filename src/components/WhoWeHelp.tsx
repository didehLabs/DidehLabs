import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const groups = [
  { title: 'Health & Care', items: ['Private clinics', 'Dentists'] },
  { title: 'Professional Services', items: ['Law firms', 'Accountants', 'Real estate agencies'] },
  { title: 'Home & Trade Services', items: ['HVAC', 'Plumbers', 'Electricians', 'Roofing', 'Remodeling', 'Locksmiths'] },
  { title: 'Everyday Local Business', items: ['Hair salons', 'Fitness studios', 'Bakeries', 'Coffee shops', 'Dog groomers'] },
]

const markets = ['United Arab Emirates', 'United Kingdom', 'Canada', 'Australia', 'United States', 'Nigeria']

const WhoWeHelp = () => {
  return (
    <section id="who" className="section-y border-b border-border bg-muted/40">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          subtitle="Who we help"
          title="Owner-run businesses that live on local customers"
          description="When a customer can't book, can't trust the site or can't load the page, they call someone else. We find those leaks and fix them."
          centered
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {groups.map((g) => (
            <div key={g.title} className="border border-border bg-card p-8">
              <h3 className="font-heading text-base font-bold uppercase tracking-wider text-foreground">{g.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {g.items.map((i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
        <div className="mt-12 text-center">
          <p className="eyebrow mb-4">Markets we scan</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {markets.map((m) => (
              <span key={m} className="border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeHelp
