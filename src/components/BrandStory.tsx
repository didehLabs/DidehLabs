import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const STORY_IMG =
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80'

const BrandStory = () => {
  return (
    <section id="brand" className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-[1600px] gap-0 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <p className="eyebrow mb-4">Our Philosophy</p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-[0.04em] text-foreground md:text-4xl">
            We are DidehLabs
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We believe every local business is losing customers to digital problems it cannot see. So we built an AI engine that finds those leaks, measures what they cost, and proves it with evidence.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Then our engineers fix them: faster pages, easier booking, stronger trust and better local visibility. Real business results, explained in plain language.
          </p>
          <button
            type="button"
            className="mt-10 inline-flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-accent transition hover:text-primary cursor-pointer"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play className="h-4 w-4 fill-current" />
            Talk to us
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative min-h-[320px] lg:min-h-[560px]"
        >
          <img src={STORY_IMG} alt="Developer working on a laptop" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          <button
            type="button"
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center border-2 border-white bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 cursor-pointer rounded-full"
            aria-label="Talk to us"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play className="ml-1 h-9 w-9 fill-current" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default BrandStory
