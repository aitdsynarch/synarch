
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import S from "./Sections/S";
import Y from "./Sections/Y";
import N from "./Sections/N";
import A from "./Sections/A";
import R from "./Sections/R";
import C from "./Sections/C";
import H from "./Sections/H";

const panels = [
  { letter: "S", word: "Synergy", component: S },
  { letter: "Y", word: "Yielding", component: Y },
  { letter: "N", word: "Nexus", component: N },
  { letter: "A", word: "Alliance", component: A },
  { letter: "R", word: "Revolutionizing", component: R },
  { letter: "C", word: "Collaboration", component: C },
  { letter: "H", word: "Horizon", component: H },
];

export default function Synarch() {
  const [active, setActive] = useState("S");

  return (
    <section
      id="synarch"
      className="min-h-screen bg-[#F0EEE3] p-4 text-[#191919] sm:p-6 lg:p-10"
    >
      <div className="mx-auto flex max-w-[1600px] flex-col">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em]">
            Explore SYNARCH
          </span>

          <span className="text-[10px] text-black/50 sm:text-xs">
            TAP TO EXPAND ↗
          </span>
        </div>

        {/* Mobile: Vertical Accordion */}
        <div className="flex flex-col border-2 border-[#191919] lg:hidden">
          {panels.map(({ letter, word, component: Content }, index) => {
            const isActive = active === letter;

            return (
              <div
                key={letter}
                className="border-b-2 border-[#191919] last:border-b-0"
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => setActive(isActive ? "" : letter)}
                  aria-expanded={isActive}
                  className={`flex w-full items-center justify-between gap-3 px-4 py-5 text-left transition-colors duration-300 sm:px-5 ${
                    isActive
                      ? "bg-[#191919] text-[#F0EEE3]"
                      : "bg-[#F0EEE3] text-[#191919] active:bg-[#E8E4D7]"
                  }`}
                >
                  <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    <span
                      className={`shrink-0 font-mono text-xs ${
                        isActive ? "text-[#F0440A]" : "text-black/40"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <span className="shrink-0 text-2xl font-black tracking-tight">
                      {letter}
                    </span>

                    <span
                      className={`min-w-0 text-[10px] font-bold uppercase tracking-wider sm:text-xs sm:tracking-widest ${
                        isActive ? "text-white/70" : "text-black/50"
                      }`}
                    >
                      {word}
                    </span>
                  </div>

                  <motion.span
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`shrink-0 text-2xl font-light ${
                      isActive ? "text-[#F0440A]" : "text-black/50"
                    }`}
                  >
                    +
                  </motion.span>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key={`${letter}-mobile-content`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 sm:p-7">
                        <div className="mb-6 flex items-center justify-between gap-3">
                          <span className="text-xs font-bold uppercase tracking-widest text-[#F0440A]">
                            {letter} — {word}
                          </span>

                          <span className="shrink-0 text-xs text-black/40">
                            0{index + 1} / 07
                          </span>
                        </div>

                        <Content />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop: Horizontal Expandable Panels */}
        <div className="hidden min-h-[75vh] flex-1 overflow-hidden border-2 border-[#191919] lg:flex">
          {panels.map(({ letter, word, component: Content }, index) => {
            const isActive = active === letter;

            return (
              <motion.div
                key={letter}
                initial={false}
                animate={{ flex: isActive ? 7 : 0.65 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 22,
                }}
                onClick={() => setActive(letter)}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                aria-label={`${letter}: ${word}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(letter);
                  }
                }}
                className={`relative min-w-0 overflow-hidden border-r-2 border-[#191919] last:border-r-0 ${
                  isActive
                    ? ""
                    : "cursor-pointer hover:bg-[#E8E4D7]"
                }`}
              >
                <AnimatePresence mode="wait">
                  {isActive ? (
                    <motion.div
                      key={`${letter}-desktop-content`}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 overflow-y-auto p-8 pt-16 xl:p-12 xl:pt-20"
                    >
                      <div className="mb-10 flex items-center justify-between gap-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#F0440A]">
                          {letter} — {word}
                        </span>

                        <span className="shrink-0 text-xs text-black/40">
                          0{index + 1} / 07
                        </span>
                      </div>

                      <Content />
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`${letter}-desktop-label`}
                      className="absolute inset-0 flex flex-col items-center justify-end gap-3 pb-6"
                    >
                      <span className="text-4xl font-black xl:text-5xl">
                        {letter}
                      </span>

                      <span
                        className="text-[10px] font-bold uppercase tracking-widest text-black/40"
                        style={{
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                        }}
                      >
                        {word}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}