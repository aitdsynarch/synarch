
import { motion } from "framer-motion";

const navigation = [
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Events", href: "#events" },
  { label: "Projects", href: "#projects" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "Email", href: "mailto:hello@synarch.in" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="overflow-hidden bg-[#F0EEE3] text-[#191919]"
    >
      <div className="mx-auto max-w-[1600px] px-5 pt-16 sm:px-10 lg:px-16">

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between gap-8 border-b border-black/20 pb-12 md:flex-row md:items-end"
        >
          <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
            Think bigger.
            <br />
            <span className="text-[#F0440A]">Build together.</span>
          </h2>

          <a
            href="#join"
            className="w-fit border border-black/20 px-5 py-4 text-xs font-bold uppercase tracking-wider transition-colors hover:border-[#F0440A] hover:bg-[#F0440A] hover:text-white"
          >
            Join SYNARCH ↗
          </a>
        </motion.div>

        {/* Footer content */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-5">
            <a
              href="#top"
              className="text-4xl font-black tracking-[-0.08em]"
            >
              SYNARCH<span className="text-[#F0440A]">.</span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-black/60">
              A student-driven technology community for ideas, innovation,
              collaboration, and building meaningful things together.
            </p>

            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
              Think · Learn · Build · Connect
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
              Explore
            </h3>

            <nav className="flex flex-col items-start gap-4">
              {navigation.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-3 text-sm transition-colors hover:text-[#F0440A]"
                >
                  <span className="font-mono text-[10px] text-black/30">
                    0{index + 1}
                  </span>
                  {item.label}
                  <span className="opacity-0 transition-opacity group-hover:opacity-100">
                    ↗
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Social links */}
          <div className="lg:col-span-4">
            <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
              Connect with us
            </h3>

            <div className="flex flex-wrap gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={
                    social.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="border border-black/15 px-4 py-3 text-xs transition-colors hover:border-[#F0440A] hover:bg-[#F0440A] hover:text-white"
                >
                  {social.label} ↗
                </a>
              ))}
            </div>

            <p className="mt-5 max-w-xs text-xs leading-6 text-black/50">
              Have an idea or a project? Let's build something meaningful.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col justify-between gap-3 border-t border-black/15 py-6 sm:flex-row sm:items-center">
          <p className="text-[10px] uppercase tracking-wider text-black/45">
            © {new Date().getFullYear()} SYNARCH. All rights reserved.
          </p>

          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/45">
            Built for what's next.
          </p>

          <a
            href="#top"
            className="w-fit text-[10px] font-bold uppercase tracking-wider transition-colors hover:text-[#F0440A]"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
