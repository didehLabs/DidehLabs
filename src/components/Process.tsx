import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeading from './SectionHeading'

const steps = [
  {
    num: "01",
    title: "Scout & Discover",
    desc: "Automated scouts search Google Maps and business directories for local businesses, capturing their website, contact details and social presence.",
  },
  {
    num: "02",
    title: "Decide & Audit",
    desc: "AI decides which businesses are worth pursuing. The engine then audits the real site: speed, mobile, security, broken assets, booking and contact paths, and trust signals.",
  },
  {
    num: "03",
    title: "Quantify the Opportunity",
    desc: "Findings are turned into business language: lost bookings, lost trust, lost revenue. Each business gets a ranked opportunity based on conversion-impacting gaps.",
  },
  {
    num: "04",
    title: "Reach Out & Fix",
    desc: "We contact the owner by email or WhatsApp with what we found, follow up, and fix the leaks: performance, booking, trust, SEO, mobile and conversion paths.",
  },
]

const Process = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="how" className="section-y border-b border-border bg-background" ref={ref}>
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          subtitle="Our Process"
          title="How the engine works"
          description="Every engagement starts with evidence. If we get in touch, it's because we have already found something specific, and we can show you what it costs."
          centered
        />

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="group border border-border bg-card p-8 flex flex-col justify-between min-h-[260px] hover:border-primary/45 transition-colors cursor-default"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-heading text-lg font-black text-primary tracking-wide transition duration-300 group-hover:scale-125 inline-block">{step.num}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary transition duration-300 group-hover:scale-150" />
                </div>
                <h3 className="font-heading text-base font-bold uppercase tracking-wider text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Process
