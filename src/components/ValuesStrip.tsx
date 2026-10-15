import { Gauge, Crosshair, ShieldCheck, Cpu, Handshake } from 'lucide-react'
import { motion } from 'framer-motion'

const values = [
  { icon: Crosshair, label: 'Evidence-first', text: 'Every recommendation comes from a real audit of your real website, not a guess.' },
  { icon: Handshake, label: 'Plain language', text: 'We talk about lost bookings and lost revenue, not technical scores.' },
  { icon: Gauge, label: 'Performance', text: 'Fast pages keep visitors long enough to become customers.' },
  { icon: ShieldCheck, label: 'Trust', text: 'Secure sites, visible proof and clear services that earn customer confidence.' },
  { icon: Cpu, label: 'AI-native', text: 'AI finds and explains the gaps. Our engineers fix them.' },
]

const ValuesStrip = () => {
  return (
    <section className="border-b border-border bg-muted/50">
      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-10">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow mb-3">How we operate</p>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-[0.04em] text-foreground md:text-3xl">
            Non‑negotiables
          </h2>
          <p className="mt-3 text-muted-foreground">
            The principles behind our engine and every fix we ship.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                className="group border border-border bg-background p-6 cursor-default"
              >
                <Icon className="h-8 w-8 text-primary transition duration-300 group-hover:scale-110" strokeWidth={1.5} />
                <h3 className="mt-4 font-heading text-sm font-bold uppercase tracking-[0.12em] text-foreground">
                  {v.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ValuesStrip
