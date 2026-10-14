
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Events", href: "#events" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 border-b border-black/15 bg-[#F5F4EC]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-12 lg:px-20">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-black tracking-tight text-[#171717]"
          onClick={() => setMenuOpen(false)}
        >
          SYNARCH<span className="text-[#F0440A]">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-black/65 transition-colors hover:text-[#F0440A]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#join"
          className="hidden border border-black px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-colors hover:border-[#F0440A] hover:bg-[#F0440A] hover:text-white md:inline-flex"
        >
          Join SYNARCH ↗
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] border border-black/20 md:hidden"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            className="h-[2px] w-5 bg-black"
          />
          <motion.span
            animate={
              menuOpen
                ? { rotate: -45, y: -4 }
                : { rotate: 0, y: 0 }
            }
            className="h-[2px] w-5 bg-black"
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-black/10 bg-[#F5F4EC] md:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-black/10 py-4 text-sm font-medium transition-colors hover:text-[#F0440A]"
                >
                  {link.label}
                </motion.a>
              ))}

              <a
                href="#join"
                onClick={() => setMenuOpen(false)}
                className="mt-5 bg-[#F0440A] px-5 py-4 text-center text-sm font-semibold text-white"
              >
                Join SYNARCH ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
