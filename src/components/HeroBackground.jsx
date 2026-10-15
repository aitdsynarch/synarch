
import { useState } from "react";
import { motion } from "framer-motion";

const DOT_GAP = 28;
const DOTS_X = 42;
const DOTS_Y = 24;

export default function HeroBackground() {
  const [mouse, setMouse] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden bg-[#F0EEE3]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMouse({ x: -1000, y: -1000 });
      }}
    >
      {/* Soft Orange Ambient Glow */}
      <div className="absolute right-[10%] top-[15%] h-[400px] w-[400px] rounded-full bg-[#F0440A]/[0.06] blur-[120px]" />

      {/* Interactive Dot Field */}
      <div className="absolute inset-0">
        {Array.from({ length: DOTS_X * DOTS_Y }, (_, i) => {
          const col = i % DOTS_X;
          const row = Math.floor(i / DOTS_X);

          const x = col * DOT_GAP + 12;
          const y = row * DOT_GAP + 12;

          const distance = Math.hypot(mouse.x - x, mouse.y - y);
          const active = isHovering && distance < 150;

          const strength = active
            ? Math.max(0, 1 - distance / 150)
            : 0;

          return (
            <motion.span
              key={i}
              className="absolute block rounded-full"
              style={{
                left: x,
                top: y,
                width: active ? 4 + strength * 3 : 2,
                height: active ? 4 + strength * 3 : 2,
                backgroundColor: "#F0440A",
                boxShadow: active
                  ? `0 0 ${strength * 16}px rgba(240,68,10,${strength * 0.65})`
                  : "none",
              }}
              animate={{
                opacity: active ? 0.75 * strength : 0,
                scale: active ? 0.7 + strength * 0.6 : 0.5,
              }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            />
          );
        })}
      </div>

      {/* Architectural Frame — All Four Lines Together */}
      <div className="absolute inset-0">

        {/* Top Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute left-[8%] right-[8%] top-0 h-px origin-left bg-black/[0.07]"
        />

        {/* Bottom Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-0 left-[8%] right-[8%] h-px origin-left bg-black/[0.07]"
        />

        {/* Left Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute bottom-0 left-[3%] top-0 w-px origin-top bg-black/[0.07]"
        />

        {/* Right Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-0 right-[3%] top-0 w-px origin-top bg-black/[0.07]"
        />
      </div>

      {/* Paper Grain */}
      <div
        className="absolute inset-0 opacity-[0.10] mix-blend-multiply"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%27180%20180%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%27.85%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%27.18%27/%3E%3C/svg%3E")',
        }}
      />
    </div>
  );
}