import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'

const ABOUT_IMG =
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80'

const team = [
  {
    id: 1,
    initials: 'JO',
    name: 'Jedidiah Okon',
    role: 'Founder & Full-Stack Engineer',
    bio: "I'm Jedidiah Okon, founder of didehLabs. I built the engine that finds and audits local businesses' websites, and I lead the engineering behind every fix. Before didehLabs I shipped healthcare, fintech and EdTech platforms.",
    years: '4+',
    specialty: 'AI & Full-Stack',
    stack: [
      "Python / Django",
      "React / Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Firebase / Firestore",
      "Playwright",
      "Lighthouse API",
      "Gemini / OpenAI",
      "Tailwind CSS",
      "GCP · Vercel · Heroku"
    ],
    portfolio: 'https://jedidiahokon.netlify.app',
    email: 'okonjedidiah5@gmail.com',
  },
  {
    id: 2,
    image: '/waris.png',
    name: 'Derojuu',
    role: 'Full-Stack Engineer & Product Builder',
    bio: "Odumbo Abdulwaris here. I turn ideas into production-ready products that scale, perform, and deliver real business value.",
    years: '4+',
    specialty: 'Full-Stack & AI',
    stack: [
      "TypeScript",
      "React / Next.js",
      "Node.js / Express",
      "PostgreSQL / MySQL",
      "GCP / Vercel",
      "Zustand / Zod",
      "Redis / WebSockets",
      "AI Integrations"
    ],
    portfolio: 'https://derojuu-portfolio.vercel.app',
    email: 'odumboabdulwaris@gmail.com',
  },
  {
    id: 3,
    initials: 'UX',
    name: 'Creative Partner',
    role: 'UI/UX & Frontend Lead',
    bio: 'Dedicated to designing stunning visual environments, conversion optimization, and immersive web experiences using modern frameworks like React, Next.js, and Framer Motion.',
    years: '4+',
    specialty: 'UI/UX Design',
    stack: ["React/Next.js", "Framer Motion", "Tailwind CSS", "TypeScript", "Figma", "Vite"],
    portfolio: '#',
    email: 'okonjedidiah5@gmail.com',
  },
]

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile viewports to adjust slide offsets dynamically
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % team.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + team.length) % team.length)
  }

  const handleCardClick = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play interval - resets automatically when user manually changes card
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 5000)
    return () => clearInterval(timer)
  }, [currentIndex])

  const offset = isMobile ? '52%' : '75%'

  const cardVariants = {
    active: {
      x: '0%',
      scale: 1,
      opacity: 1,
      zIndex: 10,
    },
    right: {
      x: offset,
      scale: 0.82,
      opacity: 0.35,
      zIndex: 5,
    },
    left: {
      x: `-${offset}`,
      scale: 0.82,
      opacity: 0.35,
      zIndex: 5,
    },
    hidden: {
      x: '0%',
      scale: 0.6,
      opacity: 0,
      zIndex: 1,
    },
  }

  return (
    <section id="about" className="border-b border-border bg-muted/40 relative overflow-hidden py-24 md:py-32">
      
      {/* Premium Background Design */}
      
      {/* 1. Subtle Unsplash Code Overlay */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: `url(${ABOUT_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      
      {/* 2. Hardware-Accelerated CSS Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.85] dark:opacity-[0.6] pointer-events-none" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, var(--color-border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)
          `, 
          backgroundSize: '48px 48px' 
        }} 
      />
      
      {/* 3. Glowing Ambient Orb centered behind the carousel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/25 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none z-0" />
      
      {/* Gradient Vignette to blend the borders */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-transparent to-background/90 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4">
        <div className="text-center mb-16 space-y-4">
          <p className="eyebrow">People & Purpose</p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-[0.04em] text-foreground sm:text-4xl md:text-[2.75rem]">
            Meet the team
          </h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed text-muted-foreground">
            The people who build the engine and fix what it finds.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex flex-col items-center justify-center min-h-[650px] w-full max-w-5xl mx-auto px-2 md:px-4 overflow-visible">
          
          {/* Slider viewport - size scaled up significantly for desktop */}
          <div className="relative w-full max-w-[290px] sm:max-w-[340px] md:max-w-[500px] h-[500px] md:h-[600px] flex items-center justify-center overflow-visible">
            {team.map((member, idx) => {
              let position = 'hidden'
              if (idx === currentIndex) {
                position = 'active'
              } else if (idx === (currentIndex + 1) % team.length) {
                position = 'right'
              } else if (idx === (currentIndex - 1 + team.length) % team.length) {
                position = 'left'
              }

              const isActive = position === 'active'

              return (
                <motion.div
                  key={member.id}
                  initial="hidden"
                  animate={position}
                  variants={cardVariants}
                  transition={{ type: 'tween', ease: 'easeInOut', duration: 0.4 }}
                  className={`absolute w-full h-full rounded-sm border border-white/[0.08] bg-navy-deep/95 p-6 md:p-10 text-white backdrop-blur-md shadow-2xl flex flex-col justify-between cursor-pointer`}
                  onClick={() => !isActive && handleCardClick(idx)}
                >
                  <div className="space-y-5">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary border border-primary/30 px-2.5 py-1 rounded-sm">
                        {idx === 0 ? 'Founder' : idx === 1 ? 'Partner' : 'Partner'}
                      </span>
                      <span className="text-[10px] font-medium tracking-wide text-white/50">
                        Remote-first
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={`${member.name}, ${member.role}`}
                          loading="lazy"
                          decoding="async"
                          className="h-14 w-14 rounded-full object-cover shrink-0 border border-primary/30"
                        />
                      ) : (
                        <div className="h-14 w-14 rounded-full bg-primary text-navy-deep flex items-center justify-center font-heading text-xl font-bold shrink-0">
                          {member.initials}
                        </div>
                      )}
                      <div>
                        <h3 className="font-heading text-lg font-bold uppercase tracking-wide truncate max-w-[170px] md:max-w-[280px]">
                          {member.name}
                        </h3>
                        <p className="text-[10px] md:text-xs text-primary font-semibold tracking-wider uppercase mt-0.5 truncate max-w-[170px] md:max-w-[280px]">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm md:text-base text-white/75 leading-relaxed font-sans line-clamp-5 md:line-clamp-6">
                      {member.bio}
                    </p>

                    {/* Team Member Tech Stack Tags */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {member.stack.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] font-semibold px-2 py-1 border border-white/10 bg-white/5 text-white/75 rounded-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4 border-t border-white/[0.08] pt-4">
                      <div>
                        <strong className="block text-xl md:text-2xl font-bold text-white font-heading">{member.years}</strong>
                        <span className="text-[9px] md:text-[10px] uppercase tracking-wide text-white/50">Experience</span>
                      </div>
                      <div>
                        <strong className="block text-xl md:text-2xl font-bold text-primary font-heading truncate">{member.specialty}</strong>
                        <span className="text-[9px] md:text-[10px] uppercase tracking-wide text-white/50">Domain Focus</span>
                      </div>
                    </div>

                    {isActive && (
                      <div className="flex gap-2.5 pt-1">
                        <a
                          href={member.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-corporate flex-1 text-center py-2.5 text-xs font-bold uppercase tracking-wide flex items-center justify-center gap-1.5"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Portfolio
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="flex-1 text-center py-2.5 text-xs font-bold uppercase tracking-wide border border-white/20 hover:border-primary transition-colors flex items-center justify-center"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Email
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 mt-8 relative z-10">
            <button
              onClick={handlePrev}
              className="p-3 border border-border bg-background hover:border-primary hover:scale-110 transition-all duration-200 text-foreground cursor-pointer rounded-sm flex items-center justify-center shadow-sm"
              aria-label="Previous Team Member"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="text-xs font-bold tracking-wider text-muted-foreground uppercase min-w-[50px] text-center">
              {currentIndex + 1} / {team.length}
            </div>
            <button
              onClick={handleNext}
              className="p-3 border border-border bg-background hover:border-primary hover:scale-110 transition-all duration-200 text-foreground cursor-pointer rounded-sm flex items-center justify-center shadow-sm"
              aria-label="Next Team Member"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
