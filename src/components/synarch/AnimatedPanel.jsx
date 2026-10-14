
import { motion } from "framer-motion";

export default function AnimatedPanel({
  letter,
  active,
  index,
  onClick,
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial="idle"
      animate={active ? "active" : "idle"}
      whileHover="hover"
      className="group relative h-full min-w-0 overflow-hidden border-r-2 border-[#191919] text-left outline-none"
      style={{ flex: active ? 7 : 0.65 }}
      variants={{
        idle: { backgroundColor: "#F0EEE3" },
        hover: { backgroundColor: "#E8E4D7" },
        active: { backgroundColor: "#F0EEE3" },
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Orange background reveal */}
      <motion.div
        className="absolute inset-x-0 bottom-0 bg-[#F0440A]"
        variants={{
          idle: { height: "0%" },
          hover: { height: "100%" },
          active: { height: "0%" },
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Animated border */}
      <motion.div
        className="absolute left-0 top-0 z-10 h-[3px] w-full origin-left bg-[#F0440A]"
        variants={{
          idle: { scaleX: 0 },
          hover: { scaleX: 1 },
          active: { scaleX: 1 },
        }}
        transition={{ duration: 0.35 }}
      />

      {/* Small index */}
      <motion.span
        className="absolute left-3 top-4 z-10 font-mono text-[10px] sm:left-4 sm:top-5 sm:text-xs"
        variants={{
          idle: { opacity: 0, y: -5 },
          hover: { opacity: 1, y: 0 },
          active: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.25 }}
      >
        0{index + 1}
      </motion.span>

      {/* Letter */}
      <motion.span
        className="absolute bottom-4 left-1/2 z-10 block -translate-x-1/2 text-3xl font-black sm:bottom-6 sm:text-4xl lg:text-5xl"
        variants={{
          idle: {
            y: 0,
            rotate: 0,
            color: "#191919",
            scale: 1,
          },
          hover: {
            y: -12,
            rotate: -5,
            color: "#FFFFFF",
            scale: 1.15,
          },
          active: {
            y: -4,
            rotate: 0,
            color: "#F0440A",
            scale: 1.25,
          },
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 17,
        }}
      >
        {letter}
      </motion.span>

      {/* Active indicator */}
      <motion.span
        className="absolute bottom-0 left-0 z-20 h-1 bg-[#F0440A]"
        variants={{
          idle: { width: "0%" },
          hover: { width: "100%" },
          active: { width: "100%" },
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}
