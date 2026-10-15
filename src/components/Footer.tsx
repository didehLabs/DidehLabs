import ThemeToggle from './ThemeToggle'

const Footer = () => {
  const year = new Date().getFullYear()

  const cols = [
    {
      title: 'Company',
      links: [
        { label: 'About Team', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Diagnostic Engine', href: '#demo' },
        { label: 'Process Workflow', href: '#how' },
      ],
    },
    {
      title: 'What we fix',
      links: [
        { label: 'Website Performance', href: '#services' },
        { label: 'Booking Systems', href: '#services' },
        { label: 'Trust & Local SEO', href: '#services' },
        { label: 'Mobile & Conversion', href: '#services' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Who we help', href: '#who' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
      ],
    },
  ]

  return (
    <footer className="border-t border-white/10 bg-navy-deep text-white">
      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-3.5 sm:gap-4">
              <div className="relative h-10 w-10 shrink-0">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/favicon/logo.png"
                  alt="didehLabs"
                  className="h-full w-full object-contain rounded-md"
                />
              </div>
              <span className="font-heading text-xl font-bold uppercase tracking-[0.14em] sm:text-2xl">
                dideh<span className="text-primary">Labs</span>
              </span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/75">
              AI growth intelligence for local businesses. We find the digital leaks that cost you customers and revenue, then fix them.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: 'GitHub', href: 'https://github.com/okonjedidiah5' },
                { label: 'LinkedIn', href: 'https://linkedin.com' },
                { label: 'WhatsApp', href: 'https://wa.me/2347042932301' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 px-4 items-center justify-center border border-white/20 text-xs font-bold uppercase transition duration-200 hover:border-primary hover:bg-primary hover:text-navy-deep hover:scale-105"
                  aria-label={s.label}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7 lg:justify-end">
            {cols.map((c) => (
              <div key={c.title}>
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/50">{c.title}</h3>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-sm font-medium text-white/85 transition hover:text-primary">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 pt-10 sm:flex-row sm:items-center">
          <p className="text-xs text-white/55">
            © {year} didehLabs. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-white/70">
            <a href="#" className="hover:text-primary">
              Privacy policy
            </a>
            <a href="#" className="hover:text-primary">
              Terms
            </a>
            <a href="#" className="hover:text-primary">
              Cookies
            </a>
            <div className="flex items-center gap-2 border-l border-white/15 pl-6 text-white [&_button]:text-white [&_button:hover]:bg-white/10 [&_svg]:text-white">
              <span className="text-white/50">Display</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
