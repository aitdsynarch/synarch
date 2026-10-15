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
  { letter: "S", component: S },
  { letter: "Y", component: Y },
  { letter: "N", component: N },
  { letter: "A", component: A },
  { letter: "R", component: R },
  { letter: "C", component: C },
  { letter: "H", component: H },
];

export default function Synarch() {
  const [active, setActive] = useState("S");

  return (
    <section id="synarch" className="min-h-screen bg-[#F0EEE3] p-4 text-[#191919] sm:p-6 lg:p-10">
      <div className="mx-auto flex min-h-[85vh] max-w-[1600px] flex-col">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-[0.25em]">Explore SYNARCH</span>
          <span className="text-xs text-black/50">CLICK TO EXPAND ↗</span>
        </div>
        <div className="flex min-h-[75vh] flex-1 overflow-hidden border-2 border-[#191919]">
          {panels.map(({ letter, component: Content }, index) => {
            const isActive = active === letter;
            return (
              <motion.div
                key={letter}
                initial={false}
                animate={{ flex: isActive ? 7 : 0.65 }}
                transition={{ type: "spring", stiffness: 100, damping: 22 }}
                onClick={() => setActive(letter)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActive(letter);
                }}
                className={`relative min-w-0 overflow-hidden border-r-2 border-[#191919] ${isActive ? "" : "cursor-pointer hover:bg-[#E8E4D7]"}`}
              >
                <AnimatePresence mode="wait">
                  {isActive ? (
                    <motion.div
                      key={`${letter}-content`}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 overflow-y-auto p-5 pt-16 sm:p-8 sm:pt-16 lg:p-12 lg:pt-20"
                    >
                      <div className="mb-10 flex justify-between">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#F0440A]">SYNARCH / {letter}</span>
                        <span className="text-xs text-black/40">0{index + 1} / 07</span>
                      </div>
                      <Content />
                    </motion.div>
                  ) : (
                    <motion.div key={`${letter}-label`} className="absolute inset-0 flex items-end justify-center pb-5 sm:pb-6">
                      <span className="text-3xl font-black sm:text-4xl lg:text-5xl">{letter}</span>
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
