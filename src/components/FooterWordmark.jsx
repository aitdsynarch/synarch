
import { motion } from "framer-motion";

export default function FooterWordmark() {
  const blocks = Array.from({ length: 12 }, (_, index) => index);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group relative border-t border-black/15 pt-5 text-center"
    >
      {/* Decorative Blocks */}
      <div className="pointer-events-none absolute right-0 top-8 flex gap-1.5 opacity-60">
        <span className="h-2 w-2 bg-[#F0440A]" />
        <span className="h-2 w-2 bg-[#F0440A]/50" />
        <span className="h-2 w-2 bg-[#F0440A]/25" />
      </div>

      {/* Tagline */}
      

      

      {/* Animated Blinking Bottom Blocks */}
      <div className="mt-8 flex h-2 w-full gap-1 overflow-hidden">
        {blocks.map((block) => (
          <motion.span
            key={block}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            animate={{
              backgroundColor: [
                "#F0440A",
                "#191919",
                "#F0440A",
                "#F0EEE3",
                "#F0440A",
              ],
              opacity: [1, 0.3, 1, 0.2, 1],
            }}
            transition={{
              scaleX: {
                duration: 0.35,
                delay: block * 0.045,
                ease: "easeOut",
              },
              backgroundColor: {
                duration: 1.6,
                delay: block * 0.12,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              },
              opacity: {
                duration: 1.6,
                delay: block * 0.12,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              },
            }}
            className="h-full origin-left"
            style={{
              flex: block % 4 === 0 ? 3 : block % 3 === 0 ? 2 : 1,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}