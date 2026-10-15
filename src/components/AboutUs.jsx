
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const pixels = [
    { left: "0%", top: "65%", size: 72, color: "#F0440A" },
    { left: "7.3%", top: "49%", size: 54, color: "#F0440A" },
    { left: "7.3%", top: "38%", size: 36, color: "#F0EEE3" },
    { left: "11%", top: "38%", size: 36, color: "#242424" },
    { left: "88%", top: "82%", size: 42, color: "#F0EEE3" },
    { left: "92%", top: "72%", size: 42, color: "#F0440A" },
    { left: "96%", top: "62%", size: 42, color: "#F0440A" },
  ];

  return (
    <section
      id="about"
      className="relative isolate min-h-[600px] overflow-hidden bg-[#101111] px-5 py-12 text-[#F0EEE3] sm:px-10 sm:py-16 lg:min-h-[680px] lg:px-16"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.09]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240,238,227,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(240,238,227,0.25) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* Top Label */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto flex max-w-7xl items-center gap-3"
      >
        <span className="h-3 w-3 bg-gradient-to-br from-[#F0EEE3] to-[#F0440A]" />

        <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/55 sm:text-xs">
          About SYNARCH
        </span>

        <div className="ml-2 h-px flex-1 bg-white/20" />

        <div className="flex h-2.5 w-2.5 shrink-0">
          <span className="flex-1 bg-[#F0EEE3]" />
          <span className="flex-1 bg-[#F0440A]" />
        </div>
      </motion.div>

      {/* Decorative Pixel Blocks */}
      <div className="pointer-events-none absolute inset-0 -z-0 hidden sm:block">
        {pixels.map((pixel, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="absolute"
            style={{
              left: pixel.left,
              top: pixel.top,
              width: pixel.size,
              height: pixel.size,
              backgroundColor: pixel.color,
            }}
          />
        ))}

        {/* Vertical Lines */}
        <span className="absolute left-[7.3%] top-[10%] h-[40%] w-px bg-white/60" />
        <span className="absolute left-[17.5%] top-[13%] h-[38%] w-px bg-white/70" />
        <span className="absolute right-[13.5%] top-[15%] h-[38%] w-px bg-white/40" />
        <span className="absolute right-[5%] bottom-0 h-[35%] w-px bg-white/50" />

        {/* Orange Accent */}
        <span className="absolute bottom-[18%] left-[7.2%] h-12 w-1 bg-[#F0440A]" />

        {/* Left Dot Pattern */}
        <div className="absolute left-[11.5%] top-[58%] grid grid-cols-5 gap-3">
          {Array.from({ length: 25 }, (_, i) => (
            <span
              key={i}
              className="h-1 w-1 bg-white/75"
            />
          ))}
        </div>

        {/* Right Dot Pattern */}
        <div className="absolute right-[9%] top-[32%] grid grid-cols-5 gap-4">
          {Array.from({ length: 25 }, (_, i) => (
            <span
              key={i}
              className="h-1 w-1 bg-white/75"
            />
          ))}
        </div>

        {/* Side Text */}
        <div className="absolute right-[7%] top-[11%] text-[9px] font-medium uppercase leading-[2] tracking-[0.25em] text-white/55">
          People
          <br />
          Ideas
          <br />
          Technology
          <br />
          Impact
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center pb-8 pt-20 text-center sm:pt-24 lg:pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(2.8rem,7.5vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.065em]"
        >
          Skills today
          <span className="text-[#F0440A]">.</span>
          <br />

          <span className="text-[#F0440A]">
            Careers tomorrow.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8"
        >
          SYNARCH is a student-driven technology club that helps college
  students build in-demand skills and prepare for technical
  interviews, internships, and placements. Through our industry
  connections, professional network, and community, we help students
  discover opportunities and connect with potential employers to
  take the next step in their careers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <Link
            to="/join"
            className="group mt-8 inline-flex items-stretch bg-[#F0EEE3] text-[#191919] transition-colors duration-300 hover:bg-[#F0440A] hover:text-white"
          >
            <span className="flex items-center px-7 py-4 text-[11px] font-bold uppercase tracking-[0.22em] sm:px-9">
              Join SYNARCH
            </span>

            <span className="flex w-14 items-center justify-center bg-[#F0440A] text-white transition-colors duration-300 group-hover:bg-[#F0EEE3] group-hover:text-[#191919]">
              <ArrowUpRight
                size={22}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 flex h-1 w-full">
        <span className="w-[20%] bg-[#F0EEE3]" />
        <span className="w-[30%] bg-[#F0440A]" />
        <span className="flex-1 bg-white/15" />
      </div>
    </section>
  );
}
