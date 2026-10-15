
import { motion } from "framer-motion";
import FooterCTA from "./FooterCTA";
import FooterBottom from "./FooterBottom";
import FooterWordmark from "./FooterWordmark";

const navigation = [
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Events", href: "#events" },
  { label: "Projects", href: "#projects" },
  { label: "Join Us", href: "#join" },
];

const socials = [
  { label: "WhatsApp", href: "https://whatsapp.com/channel/0029VbDumka3LdQdSeGxXK0D" },
  { label: "Instagram", href: "https://www.instagram.com/aitd.synarch/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aitdsynarch" },
  { label: "GitHub", href: "https://github.com/aitdsynarch/" },
  { label: "Discord", href: "https://discord.com/users/aitd.synarch" },
  { label: "Reddit", href: "https://www.reddit.com/user/aitdsynarch/" },
  { label: "X", href: "https://x.com/aitdsynarch" },
  { label: "YouTube", href: "https://youtube.com/" },

];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#F0EEE3] text-[#191919]"
    >
      {/* Top CTA */}
      <FooterCTA />

      {/* Main Footer */}
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10 lg:px-16">

        {/* Section Label */}
        <div className="flex items-center justify-between gap-4 border-y border-black/15 py-4">
          <span className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black/50">
            <span className="h-2 w-2 bg-[#F0440A]" />
            The SYNARCH Community
          </span>

          
        </div>

        {/* Content Grid */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">

          {/* Brand Block */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-4"
          >
            <a
              href="#top"
              aria-label="SYNARCH home"
              className="group inline-flex items-center gap-3"
            >
              {/* Geometric Pixel Mark */}
              <span className="grid grid-cols-3 gap-[3px]">
                {Array.from({ length: 9 }, (_, i) => (
                  <span
                    key={i}
                    className={`h-[7px] w-[7px] transition-colors duration-300 ${
                      [0, 1, 2, 3, 5, 6, 7, 8].includes(i)
                        ? "bg-[#F0440A] group-hover:bg-[#191919]"
                        : "bg-transparent"
                    }`}
                  />
                ))}
              </span>

              <span className="text-3xl font-black tracking-[-0.08em] sm:text-4xl">
                synarch<span className="text-[#F0440A]">.</span>
              </span>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-black/60">
              A student-driven technology community where curiosity
              becomes creation, ideas become projects, and people
              build the future together.
            </p>

            {/* Animated Accent Blocks */}
            <div className="mt-8 flex items-center gap-1.5">
              {[40, 24, 14, 8].map((width, index) => (
                <motion.span
                  key={index}
                  initial={{ width: 0 }}
                  whileInView={{ width }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  className="block h-[4px] bg-[#F0440A]"
                />
              ))}
            </div>

            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
              Think Beyond The Possibility
            </p>
          </motion.div>

          {/* Navigation Block */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 lg:pl-8"
          >
            <h3 className="mb-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black/45">
              <span className="h-1.5 w-1.5 bg-[#F0440A]" />
              Explore
            </h3>

            <nav
              aria-label="Footer navigation"
              className="flex flex-col items-start"
            >
              {navigation.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex w-full max-w-[240px] items-center justify-between border-b border-black/10 py-3.5 text-sm transition-colors duration-200 hover:border-[#F0440A] hover:text-[#F0440A]"
                >
                  <span className="flex items-center gap-4">
                    <span className="font-mono text-[10px] text-black/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </span>

                  <span className="translate-x-[-4px] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                    ↗
                  </span>
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Block */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5"
          >
            <h3 className="mb-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black/45">
              <span className="h-1.5 w-1.5 bg-[#F0440A]" />
              Get in touch
            </h3>

            <p className="max-w-md text-sm leading-7 text-black/60">
              Have an idea, a project, or an opportunity to collaborate?
              Let's turn your next big idea into something real.
            </p>

            <a
              href="mailto:hello@synarch.in"
              className="group mt-6 inline-flex items-center gap-4 border-b border-black/20 pb-3 text-base font-semibold transition-colors hover:border-[#F0440A] hover:text-[#F0440A] sm:text-lg"
            >
              hello@synarch.in
              <span className="text-[#F0440A] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-black/15 px-3.5 py-2.5 text-[10px] font-semibold uppercase tracking-wider transition-all duration-200 hover:border-[#F0440A] hover:bg-[#F0440A] hover:text-white"
                >
                  {social.label} ↗
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Big Wordmark */}
        <FooterWordmark/>
      </div>

      {/* Copyright + Back to Top */}
      <FooterBottom />
    </footer>
  );
}
