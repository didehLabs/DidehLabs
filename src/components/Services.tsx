import { Zap, Target, CalendarCheck, ShieldCheck, Search, Smartphone } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const pillars = [
  {
    icon: Zap,
    title: 'Website Performance Fixes',
    body: 'Slow pages send customers away before they see anything. We find the bottlenecks, then fix them so pages load fast and visitors stay.',
  },
  {
    icon: CalendarCheck,
    title: 'Booking System Implementation',
    body: 'Make it easy for customers to book or order online, so enquiries turn into appointments and sales instead of lost opportunities.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust Signal Improvements',
    body: 'Reviews, proof, clear services and secure browsing. We fix what makes visitors hesitate, so they trust you before they call.',
  },
  {
    icon: Search,
    title: 'Local SEO Visibility',
    body: 'Be found by customers nearby: metadata, schema markup and local search readiness, so your business shows up when it matters.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Experience Overhauls',
    body: 'Most customers arrive on a phone. We rebuild broken or clumsy mobile experiences so they work properly on every screen.',
  },
  {
    icon: Target,
    title: 'Conversion Funnel Repair',
    body: 'Clear calls to action, WhatsApp and booking paths, and lead capture that works, so more visitors become customers.',
  },
]

const Services = () => {
  return (
    <section id="services" className="section-y border-b border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          subtitle="Our services"
          title="We fix the leaks the engine finds"
          description="didehLabs helps owner-run businesses find and fix the digital problems that cost them customers and revenue. Here is what we fix."
          centered
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
          className="mt-16 grid gap-px bg-border md:grid-cols-2"
        >
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <motion.article
                key={p.title}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group bg-background p-8 lg:p-10 cursor-default"
              >
                <Icon className="h-10 w-10 text-primary transition duration-300 group-hover:scale-110" strokeWidth={1.25} />
                <h3 className="mt-6 font-heading text-xl font-bold uppercase tracking-[0.06em] text-foreground">
                  {p.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{p.body}</p>
                <button
                  type="button"
                  className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-primary transition hover:text-accent cursor-pointer"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Talk to us
                </button>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
