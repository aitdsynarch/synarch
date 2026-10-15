import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function PixelArrow() {
  const pixels = [
    // Arrow head — top horizontal line
    [5, 0], [6, 0], [7, 0], [8, 0],

    // Arrow head — right edge
    [8, 1], [8, 2], [8, 3],

    // Arrow head — inner corner
    [6, 2], [7, 2],

    // Diagonal shaft
    [5, 3],
    [4, 4],
    [3, 5],
    [2, 6],
    [1, 7],
    [0, 8],
  ];

  const PIXEL = 12;
  const GAP = 3;
  const STEP = PIXEL + GAP;

  return (
    <div
      className="relative h-[135px] w-[135px] shrink-0 sm:h-[150px] sm:w-[150px]"
      aria-hidden="true"
    >
      {pixels.map(([x, y]) => (
        <span
          key={`${x}-${y}`}
          className="absolute block bg-[#F0440A]"
          style={{
            width: `${PIXEL}px`,
            height: `${PIXEL}px`,
            left: `${x * STEP}px`,
            top: `${y * STEP}px`,
          }}
        />
      ))}
    </div>
  );
}


export default function FooterCTA() {
  return (
    <section
      id="footer-cta"
      className="overflow-hidden border-b border-black/15  text-[#191919]"
    >
      <div className="mx-auto grid max-w-[1600px] items-center gap-10 px-5 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1fr_300px] lg:px-16 lg:py-20">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-black/65 sm:text-xs">
            <span className="h-2 w-2 shrink-0 bg-[#F0440A]" />
            Let's build together
          </p>

          <h2 className="text-[clamp(2.7rem,6.5vw,6.5rem)] font-semibold leading-[0.93] tracking-[-0.075em]">
            Ideas today.
            <br />
            <span className="text-[#F0440A]">
              Impact tomorrow.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-6 text-black/60 sm:text-base sm:leading-7">
            Join a community of curious minds, builders, and problem
            solvers shaping a better tomorrow through technology.
          </p>
        </motion.div>

        
{/* Right Content */}
<motion.div
  initial={{ opacity: 0, x: 18 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.15 }}
  className="flex items-center justify-between gap-5 lg:justify-end lg:gap-7"
>
  <PixelArrow />

  <div className="relative flex shrink-0 flex-col items-start gap-4">
    <span className="absolute -right-2 -top-2 h-2 w-2 bg-[#F0440A]" />

    <Link
      to="/join"
      className="group inline-flex items-center gap-5 bg-[#191919] px-5 py-4 text-xs font-semibold text-white transition-colors duration-300 hover:bg-[#F0440A] sm:px-6 sm:py-5 sm:text-sm"
    >
      Join SYNARCH

      <span className="inline-block text-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
        ↗
      </span>
    </Link>

    <Link
      to="/join"
      className="group flex items-center gap-3 text-xs text-black/60 transition-colors hover:text-[#F0440A] sm:text-sm"
    >
      Be a part of our journey

      <span className="transition-transform group-hover:translate-x-1">
        →
      </span>
    </Link>
  </div>
</motion.div>

      </div>

      {/* Pixel Divider */}
      <div className="relative mx-auto h-0 max-w-[1600px]">
        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 bg-[#F0440A]" />
        <span className="absolute -top-1 left-[calc(50%+5px)] h-2 w-2 bg-[#191919]" />
      </div>
    </section>
  );
}