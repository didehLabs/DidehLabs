import { motion } from 'framer-motion'

const HERO_IMG =
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2400&q=80'

const Hero = () => {
  return (
    <section className="relative min-h-[min(92vh,920px)] w-full overflow-hidden bg-navy-deep">
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Code on a screen"
          className="h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
          width={2400}
          height={1600}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/75 to-navy-deep/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-navy-deep/40" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[min(92vh,920px)] max-w-[1600px] flex-col justify-center px-4 pb-8 pt-28 sm:justify-end sm:px-6 sm:pb-24 sm:pt-28 lg:px-10 lg:pb-28 lg:pt-32">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-4 text-primary"
          >
            AI-Native · Evidence-First · Revenue-Focused
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-heading text-4xl font-bold uppercase leading-[1.05] tracking-[0.04em] text-white sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem]"
          >
            We find the revenue your website is losing, then fix it
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl"
          >
            didehLabs is an AI growth intelligence studio for local businesses. Our engine scans businesses, audits their real websites, and shows exactly where customers are slipping away. Then our engineers fix it.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <button
              type="button"
              className="btn-corporate px-8 py-3.5"
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See what we fix
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center border border-white/90 bg-transparent px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 cursor-pointer"
              onClick={() => document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See the audit engine
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/55 md:flex"
          aria-hidden
        >
          <span className="h-px w-12 bg-white/30" />
          Scroll to explore
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
