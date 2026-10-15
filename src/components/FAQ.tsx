import SectionHeading from './SectionHeading'
import site from '@/data/site.json'

const FAQ = () => {
  return (
    <section id="faq" className="section-y border-b border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          subtitle="FAQ"
          title="Questions we get asked"
          description="Straight answers about what didehLabs does and how we work."
          centered
        />
        <div className="mx-auto mt-14 max-w-3xl divide-y divide-border border border-border bg-card">
          {site.faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-bold uppercase tracking-wider text-foreground">
                {f.q}
                <span className="text-primary transition-transform duration-200 group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <p className="mt-4 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
