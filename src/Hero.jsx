
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroBackground from "./components/HeroBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#F0EEE3] px-6 text-[#171717] sm:px-12 lg:px-20"
    >
      {/* Separate background component */}
      <HeroBackground />

      {/* Navbar */}
      <div className="relative z-30">
        <Navbar />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto grid min-h-[78vh] max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4">

        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 py-12 lg:py-16"
        >
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#F0440A]">
            <span className="h-px w-8 bg-[#F0440A]" />
            Student-led technology community
          </p>

          <h1 className="max-w-2xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl xl:text-8xl">
            Minds that
            <br />
            <span className="text-[#F0440A]">build</span> the
            <br />
            future.
          </h1>

          <p className="mt-7 max-w-md text-base leading-7 text-black/65 sm:text-lg">
            A space for curious minds to explore technology,
            create meaningful projects and turn ideas into impact.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="group inline-flex items-center gap-3 bg-[#F0440A] px-6 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-black"
            >
              Explore SYNARCH
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
  href="https://synarch-courses.onrender.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="border-b border-black/50 pb-1 text-sm font-semibold transition-colors hover:border-[#F0440A] hover:text-[#F0440A]"
>
  Discover what we do
</a>
          </div>

         
        </motion.div>

        {/* Right artwork */}
       {/* Right Artwork */}
<motion.div
  initial={{ opacity: 0, x: 25, scale: 0.96 }}
  animate={{ opacity: 1, x: 0, scale: 1 }}
  transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
  className="relative mx-auto w-full max-w-[760px] lg:ml-8 lg:-mr-16 xl:ml-12 xl:-mr-20"
>
  {/* Image Glow */}
  <div className="pointer-events-none absolute inset-10 rounded-full bg-[#F0440A]/[0.05] blur-3xl" />

  <img
    src="/images/hero.png"
    alt="SYNARCH architectural artwork"
    fetchPriority="high"
    className="relative block h-auto w-full object-contain"
  />

  {/* Artwork Label */}
  <div className="absolute bottom-3 right-2 flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-black/45 sm:right-0">
    <span className="h-px w-6 bg-[#F0440A]" />
    SYNARCH / 001
  </div>
</motion.div>
      </div>

      {/* Bottom information */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 border-t border-black/15 py-5 text-[9px] uppercase tracking-[0.14em] text-black/45 sm:text-[10px] sm:tracking-[0.18em]">
        <span>Technology · Creativity · Community</span>
        <span>Built by students, for the future.</span>
      </div>
    </section>
  );
}
