
import { useState } from "react";
import { motion } from "framer-motion";
import {
  X,
  LockKeyhole,
  ArrowRight,
} from "lucide-react";

import Navbar from "./components/Navbar";
import HeroBackground from "./components/HeroBackground";

export default function Hero() {
  const [showCoupon, setShowCoupon] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [error, setError] = useState("");

  const closeCoupon = () => {
    setShowCoupon(false);
    setCoupon("");
    setError("");
  };

  const handleCouponSubmit = (e) => {
    e.preventDefault();

    const validCoupon = import.meta.env.VITE_COURSE_COUPON;

    if (!validCoupon) {
      setError("Coupon configuration is missing.");
      return;
    }

    if (coupon.trim() === validCoupon.trim()) {
      closeCoupon();

      window.open(
        "https://synarch-courses.onrender.com/",
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      setError("Invalid coupon code. Please try again.");
    }
  };

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#F0EEE3] px-6 text-[#171717] sm:px-12 lg:px-20"
    >
      <HeroBackground />

      {/* Navbar */}
      <div className="relative z-30">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto grid min-h-[78vh] max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 py-12 lg:py-16"
        >
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#F0440A]">
            <span className="h-px w-8 bg-[#F0440A]" />
            Student-led technology community
          </p>

          <h1 className="max-w-2xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl xl:text-8xl">
            Minds that
            <br />
            <span className="text-[#F0440A]">build</span> the
            <br />
            future.
          </h1>

          <p className="mt-7 max-w-md text-base leading-7 text-black/65 sm:text-lg">
            A space for curious minds to explore technology,
            create meaningful projects and turn ideas into impact.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
  type="button"
  onClick={() => {
    setError("");
    setCoupon("");
    setShowCoupon(true);
  }}
  className="group inline-flex items-center gap-3 bg-[#F0440A] px-6 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-black"
>
  Explore COURSES
  <span className="transition-transform duration-300 group-hover:translate-x-1">
    ↗
  </span>
</button>

            <a
  href="#about"
  className="border-b border-black/50 pb-1 text-sm font-semibold transition-colors hover:border-[#F0440A] hover:text-[#F0440A]"
>
  Discover what we do
</a>
          </div>
        </motion.div>

        {/* Right Artwork */}
        <motion.div
          initial={{ opacity: 0, x: 25, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="relative mx-auto w-full max-w-[760px] lg:ml-8 lg:-mr-16 xl:ml-12 xl:-mr-20"
        >
          <div className="pointer-events-none absolute inset-10 rounded-full bg-[#F0440A]/[0.05] blur-3xl" />

          <img
            src="/images/hero.png"
            alt="SYNARCH architectural artwork"
            fetchPriority="high"
            className="relative block h-auto w-full object-contain"
          />

          <div className="absolute bottom-3 right-2 flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-black/45 sm:right-0">
            <span className="h-px w-6 bg-[#F0440A]" />
            SYNARCH / 001
          </div>
        </motion.div>
      </div>

      {/* Bottom Information */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 border-t border-black/15 py-5 text-[9px] uppercase tracking-[0.14em] text-black/45 sm:text-[10px] sm:tracking-[0.18em]">
        <span>Technology · Creativity · Community</span>
        <span>Built by students, for the future.</span>
      </div>

      {/* Coupon Modal */}
{showCoupon && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm"
    onClick={(e) => {
      if (e.target === e.currentTarget) closeCoupon();
    }}
  >
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full max-w-sm rounded-2xl bg-[#F0EEE3] p-6 shadow-xl"
    >
      {/* Close Button */}
      <button
        type="button"
        onClick={closeCoupon}
        aria-label="Close popup"
        className="absolute right-4 top-4 text-black/50 transition hover:text-[#F0440A]"
      >
        <X size={20} />
      </button>

      {/* SYNARCH Logo */}
      <img
        src="/SYN.svg"
        alt="SYNARCH"
        className="mb-6 h-10 w-auto object-contain"
      />

      <h2 className="text-2xl font-bold text-[#171717]">
        Course Access
      </h2>

      <p className="mt-2 text-sm text-black/60">
        Enter your coupon code to continue.
      </p>

      <form onSubmit={handleCouponSubmit} className="mt-5">
        <input
          type="password"
          value={coupon}
          onChange={(e) => {
            setCoupon(e.target.value);
            setError("");
          }}
          placeholder="Enter coupon code"
          autoComplete="off"
          required
          className="w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-[#F0440A]"
        />

        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}

        <button
          type="submit"
          disabled={!coupon.trim()}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#F0440A] px-4 py-3 text-sm font-semibold text-white transition hover:bg-black disabled:opacity-50"
        >
          Continue <ArrowRight size={16} />
        </button>
      </form>
    </motion.div>
  </div>
)}
    </section>
  );
}
