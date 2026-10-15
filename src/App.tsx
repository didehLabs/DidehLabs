import {
  Navbar,
  Hero,
  Marquee,
  Process,
  Services,
  DiagnosticEngine,
  ValuesStrip,
  About,
  PeopleBand,
  BrandStory,
  Legacy,
  WhoWeHelp,
  Materials,
  FAQ,
  CTA,
  Footer,
  SEO,
} from "@/components";

const App = () => {
  return (
    <div className="relative z-[2] flex min-h-screen w-full flex-col overflow-x-hidden">
      <SEO title="didehLabs | AI Growth Intelligence for Local Businesses" />
      
      {/* Noise Overlay */}
      <div className="noise-overlay" aria-hidden />

      <Navbar />
      <main id="main">
      <Hero />
      <Marquee />
      <Process />
      <Services />
      <DiagnosticEngine />
      <ValuesStrip />
      <About />
      <PeopleBand />
      <BrandStory />
      <Legacy />
      <WhoWeHelp />
      <Materials />
      <FAQ />
      <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
