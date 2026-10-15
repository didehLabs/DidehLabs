import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeading from './SectionHeading'

const DiagnosticEngine = () => {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true })

  const metrics = [
    { label: "Performance Score", value: "28", width: "28%", barBg: "bg-destructive", textColor: "text-destructive" },
    { label: "SEO Score", value: "54", width: "54%", barBg: "bg-[#f59e0b]", textColor: "text-[#f59e0b]" },
  ]

  const auditChecks = [
    { key: "SSL / HTTPS", val: "Missing", type: "bad", colorClass: "text-destructive font-bold" },
    { key: "Mobile Responsive", val: "Broken", type: "bad", colorClass: "text-destructive font-bold" },
    { key: "Booking / Order Flow", val: "Not Found", type: "bad", colorClass: "text-destructive font-bold" },
    { key: "WhatsApp CTA", val: "Present", type: "good", colorClass: "text-primary font-bold" },
    { key: "Broken Images", val: "4 detected", type: "warn", colorClass: "text-[#f59e0b] font-bold" },
  ]

  const insights = [
    {
      label: "Performance Degradation",
      desc: "Pages loading above 3s. Real customers bounce before they see anything.",
    },
    {
      label: "Security Gaps",
      desc: "Missing SSL and exposed HTTP create trust issues before a word is read.",
    },
    {
      label: "Broken Conversion Paths",
      desc: "No booking flow, no clear CTA, no WhatsApp link. Revenue leaks through invisible gaps.",
    },
    {
      label: "Broken Visual Assets",
      desc: "Images that don't load kill credibility — especially for food, fashion, and service businesses.",
    },
  ]

  return (
    <section id="demo" className="section-y border-b border-border bg-background" ref={ref}>
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          subtitle="The Diagnostic Engine"
          title="We audit before we say hello"
          description="Our proprietary engine audits performance, security, mobile experience, booking paths and trust signals, so every conversation starts with evidence, not guesswork."
          centered
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Terminal card (Left Column) */}
          <div className="lg:col-span-6">
            <div className="glass-panel overflow-hidden border border-border/80 bg-card/95 shadow-xl">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-muted/40">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]/80" />
                <div className="w-3 h-3 rounded-full bg-primary/80" />
                <span className="font-mono text-xs text-muted-foreground ml-3">
                  didehlabs_engine / audit_result.json
                </span>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex justify-between items-center border-b border-border/60 pb-3">
                  <span className="font-mono text-xs text-muted-foreground">target: <strong className="text-foreground">prospect_site.com</strong></span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-destructive/10 text-destructive border border-destructive/20 px-2 py-0.5 rounded-sm">
                    Sample scan
                  </span>
                </div>

                {/* Metric bars */}
                <div className="space-y-4">
                  {metrics.map((m) => (
                    <div key={m.label} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-semibold text-muted-foreground">{m.label}</span>
                        <span className={`font-bold ${m.textColor}`}>{m.value}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: m.width } : { width: 0 }}
                          transition={{ duration: 1.2, ease: 'easeOut' }}
                          className={`h-full ${m.barBg}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Audit checklist */}
                <div className="border-t border-border/60 pt-4 space-y-2">
                  {auditChecks.map((c) => (
                    <div key={c.key} className="flex justify-between items-center text-sm py-1.5 border-b border-border/40 last:border-0">
                      <span className="text-muted-foreground">{c.key}</span>
                      <span className={c.colorClass}>{c.val}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary border border-primary/30 px-2.5 py-1 rounded-sm">
                    High value prospect
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-accent/20 text-accent-foreground border border-accent/30 px-2.5 py-1 rounded-sm">
                    Score: 78 / 100
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Insights list (Right Column) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">What the engine catches</p>
              <h3 className="font-heading text-2xl font-bold uppercase tracking-[0.04em] text-foreground mt-2">
                Pinpoint your leaking revenue
              </h3>
            </div>
            
            <ul className="space-y-6">
              {insights.map((ins, idx) => (
                <li key={ins.label} className="group flex gap-4 items-start">
                  <div className="font-heading text-xl font-bold text-primary border-r-2 border-primary/35 pr-4 py-1 transition duration-300 group-hover:scale-125 origin-left">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold uppercase tracking-wider text-foreground">
                      {ins.label}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {ins.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button
                type="button"
                className="btn-corporate"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get your site audited
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiagnosticEngine
