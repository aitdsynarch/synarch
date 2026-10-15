


const pixelBlocks = [
  { x: 0, y: 0, color: "bg-white/90" },
  { x: 1, y: 0, color: "bg-[#F0440A]" },
  { x: 2, y: 0, color: "bg-[#F0440A]" },
  { x: 1, y: 1, color: "bg-[#F0440A]" },
  { x: 2, y: 2, color: "bg-[#F0440A]" },
  { x: 3, y: 3, color: "bg-white/80" },
];

function PixelCorner({ right = false }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute bottom-0 ${
        right ? "right-0 scale-x-[-1]" : "left-0"
      }`}
    >
      {pixelBlocks.map((pixel, index) => (
        <span
          key={index}
          className={`absolute h-[18px] w-[18px] sm:h-5 sm:w-5 ${pixel.color}`}
          style={{
            left: `${pixel.x * 18}px`,
            bottom: `${pixel.y * 18}px`,
          }}
        />
      ))}
    </div>
  );
}

function PixelDivider() {
  return (
    <div className="relative hidden h-px flex-1 bg-white/25 md:block">
      <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-[#F0440A]" />
      <span className="absolute left-[calc(50%-10px)] top-1/2 h-2 w-2 -translate-y-1/2 bg-white" />
      <span className="absolute left-[calc(50%+5px)] top-1/2 h-2 w-2 -translate-y-1/2 bg-white/80" />
    </div>
  );
}

export default function FooterBottom() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer-bottom"
      className="relative isolate overflow-hidden bg-[#111313] text-white"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <PixelCorner />
      <PixelCorner right />

      <div className="mx-auto max-w-[1600px] px-5 sm:px-10 lg:px-16">

        {/* Social row */}
        

        {/* Aligned bottom row */}
        <div className="grid grid-cols-1 items-center gap-6 py-7 sm:grid-cols-[1fr_auto] md:grid-cols-[minmax(240px,auto)_minmax(100px,1fr)_auto] md:gap-8 md:py-8">

          {/* Copyright */}
          <div className="relative z-10 flex flex-col gap-3">
            <p className="flex items-center gap-3 text-[10px] tracking-[0.08em] text-white/60">
              <span className="h-2 w-2 shrink-0 bg-[#F0440A]" />
              <span>© {year} SYNARCH. All rights reserved.</span>
            </p>

            <p className="flex items-center gap-3 text-[10px] tracking-[0.08em] text-white/40">
              <span className="h-2 w-2 shrink-0 bg-[#F0440A]" />
              <span>Built by students, for what's next.</span>
            </p>
          </div>

          {/* Divider */}
          <PixelDivider />

          {/* Back to top */}
          <a
            href="#top"
            className="group relative z-10 mx-auto flex w-fit items-center gap-5 text-[10px] font-medium tracking-wide text-white/60 transition-colors hover:text-white sm:mx-0 sm:justify-self-end"
          >
            <span>Back to top</span>

            <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/30 text-base transition duration-200 group-hover:border-[#F0440A] group-hover:bg-[#F0440A] group-hover:text-white">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
