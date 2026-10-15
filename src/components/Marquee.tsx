import { motion } from 'framer-motion';

const items = [
  "Website Performance Fixes", "Booking System Implementation", "Trust Signal Improvements",
  "Local SEO Visibility", "Mobile Experience Overhauls", "Conversion Funnel Repair",
  "AI Revenue Intelligence", "Automated Website Audits",
];

const Marquee = () => {
  // Double the list to create a seamless looping effect
  const doubled = [...items, ...items];

  return (
    <div className="w-full overflow-hidden border-y border-border bg-card py-5 relative select-none">
      {/* Side gradients to fade out text edges */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex whitespace-nowrap gap-16 w-max pl-16"
        animate={{ x: [0, "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        {doubled.map((text, idx) => (
          <span key={idx} className="inline-flex items-center gap-4 text-xs font-heading font-bold uppercase tracking-[0.18em] text-muted-foreground/80">
            {text}
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
