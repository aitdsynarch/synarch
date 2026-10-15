
import { motion } from "framer-motion";

const blocks = [
  { width: 44, opacity: 1 },
  { width: 28, opacity: 0.75 },
  { width: 18, opacity: 0.5 },
  { width: 10, opacity: 0.3 },
  { width: 5, opacity: 0.2 },
];

export default function AccentBlocks() {
  return (
    <div
      className="group inline-flex items-center gap-[5px]"
      aria-hidden="true"
    >
      {blocks.map((block, index) => (
        <motion.span
          key={index}
          initial={{ width: 0, opacity: 0, scaleX: 0 }}
          whileInView={{
            width: block.width,
            opacity: block.opacity,
            scaleX: 1,
          }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.45,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          whileHover={{ scaleY: 1.5 }}
          className="block h-[5px] origin-left bg-[#F0440A] transition-colors duration-300 group-hover:bg-[#191919]"
          style={{ flexShrink: 0 }}
        />
      ))}
    </div>
  );
}