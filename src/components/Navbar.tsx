import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, ChevronDown, Search } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const NAV = [
  { label: 'Process', href: '#how' },
  { label: 'Services', href: '#services' },
  { label: 'Diagnostic Engine', href: '#demo' },
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#materials' },
  { label: 'Our Story', href: '#history' },
] as const

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

const navItemClass =
  'flex items-center gap-0.5 px-1.5 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#30454C] transition-colors hover:text-[#1a1f24] xl:px-2 xl:text-[11px] xl:tracking-[0.12em] dark:text-white dark:hover:text-white/90 cursor-pointer'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest < 32) {
      setIsHidden(false)
      return
    }
    if (latest > previous && latest > 72) {
      setIsHidden(true)
      setOpen(false)
    } else if (latest < previous) {
      setIsHidden(false)
    }
  })

  return (
    <>
      <motion.header
        initial={false}
        animate={isHidden ? 'hidden' : 'visible'}
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md dark:bg-background/95"
      >
        <div className="mx-auto flex min-h-[5rem] max-w-[1600px] items-center justify-between gap-3 px-4 py-2 sm:min-h-[5.5rem] sm:px-6 lg:gap-6 lg:px-8">
          <a
            href="#"
            className="flex min-w-0 shrink items-center gap-3 sm:gap-3.5"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <div className="relative h-10 w-10 shrink-0">
              <img
                src="/favicon/logo.png"
                alt="didehLabs"
                className="h-full w-full object-contain rounded-md"
              />
            </div>
            <span className="font-heading text-base font-bold uppercase tracking-[0.14em] text-[#30454C] sm:text-lg dark:text-white">
              dideh<span className="text-primary">Labs</span>
            </span>
          </a>

          <nav
            className="hidden max-w-[52rem] flex-1 flex-wrap items-center justify-center gap-x-0.5 lg:flex 2xl:max-w-none 2xl:gap-x-1"
            aria-label="Primary"
          >
            {NAV.map((item) => (
              <button
                key={item.href}
                type="button"
                className={navItemClass}
                onClick={() => scrollTo(item.href)}
              >
                {item.label}
                <ChevronDown className="h-3 w-3 shrink-0 opacity-45 dark:opacity-55" aria-hidden />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              className="hidden h-10 w-10 items-center justify-center text-[#30454C] transition hover:bg-muted lg:flex dark:text-white dark:hover:bg-white/10 cursor-pointer"
              aria-label="Search"
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={2} />
            </button>
            <ThemeToggle />
            <button
              type="button"
              className="btn-corporate hidden px-4 py-2.5 text-[11px] tracking-[0.14em] md:inline-flex"
              onClick={() => scrollTo('#contact')}
            >
              Contact
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center border border-border text-[#30454C] lg:hidden dark:border-white/25 dark:text-white cursor-pointer"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Reserve space so content is not hidden under fixed header */}
      <div className="h-[5rem] shrink-0 sm:h-[5.5rem]" aria-hidden />

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-[#30454C]/35 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="fixed left-3 right-3 top-[5.25rem] z-50 max-h-[min(80vh,calc(100vh-6rem))] overflow-y-auto border border-border bg-background shadow-xl sm:top-[5.75rem] lg:hidden"
            >
              <nav className="flex flex-col p-4">
                {NAV.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    className="flex items-center justify-between border-b border-border/70 py-3.5 text-left text-[12px] font-semibold uppercase tracking-[0.14em] text-[#30454C] dark:text-white cursor-pointer"
                    onClick={() => {
                      setOpen(false)
                      scrollTo(item.href)
                    }}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4 -rotate-90 opacity-40" aria-hidden />
                  </button>
                ))}
                <button
                  type="button"
                  className="btn-corporate mt-4 w-full py-3.5 text-[12px]"
                  onClick={() => {
                    setOpen(false)
                    scrollTo('#contact')
                  }}
                >
                  Contact
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
