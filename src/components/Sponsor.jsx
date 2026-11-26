
import React from "react";
import { Link } from "react-router-dom";
import BenefitCards from "./BenefitCards";

const tiers = [
  {
    no: "01",
    name: "Community Partner",
    desc: "Be a part of the community building tomorrow.",
    benefits: [
      "Logo on website",
      "Social media recognition",
      "Event acknowledgment",
      "Community association",
    ],
  },
  {
    no: "02",
    name: "Growth Partner",
    desc: "Build meaningful connections with emerging talent.",
    featured: true,
    benefits: [
      "Everything in Community",
      "Featured brand placement",
      "Dedicated social media post",
      "Event branding opportunities",
      "Direct student engagement",
    ],
  },
  {
    no: "03",
    name: "Title Partner",
    desc: "Become a driving force behind our vision.",
    benefits: [
      "Everything in Growth",
      "Premium brand visibility",
      "Exclusive event association",
      "Dedicated brand promotion",
      "Talent networking opportunities",
      "Strategic collaboration",
    ],
  },
];

const SectionLabel = ({ number, children }) => (
  <div className="flex items-center gap-3 text-[9px] font-medium tracking-[2px] text-gray-400 sm:gap-4 sm:text-[10px] sm:tracking-[3px]">
    <span className="text-[#F0440A]">{number}</span>
    {children}
  </div>
);

export default function Sponsor() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#101111] font-sans text-[#F1EFE5] selection:bg-[#F0440A] selection:text-white">

      {/* HERO / TITLE */}
      <div className="relative overflow-hidden border-y border-white/10 py-10 sm:py-12 md:py-14">

        {/* Background Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        {/* Decorative Squares */}
        <div className="absolute left-5 top-6 h-2 w-2 bg-[#F0440A] sm:left-8 sm:top-10 sm:h-3 sm:w-3" />

        <div className="relative flex flex-col gap-7 px-5 sm:px-8 md:flex-row md:items-center md:justify-between md:px-10">

          {/* Heading */}
          <h1 className="ml-2 whitespace-nowrap text-[clamp(2.2rem,8vw,5.625rem)] font-medium leading-none tracking-[-1.5px] sm:ml-5 md:ml-0 md:tracking-[0.02em]">
            Our Sponsors<span className="text-[#F0440A]">.</span>
          </h1>

          {/* Sponsor Button */}
          <Link
            to="/contact"
            className="group flex w-fit items-center gap-3 border border-white/20 px-5 py-3 text-[10px] font-medium uppercase tracking-[1.5px] text-[#F1EFE5] transition-all duration-300 hover:border-[#F0440A] hover:text-[#F0440A] sm:px-6 sm:py-3 sm:text-xs"
          >
            Sponsor Us
            <span className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </Link>

        </div>
      </div>

      {/* INTRO / BENEFITS */}
      <section
        id="benefits"
        className="border-t border-white/10 px-5 py-16 sm:px-8 sm:py-20 md:px-16 md:py-24 lg:px-24"
      >
        <div className="mx-auto max-w-7xl">

          <SectionLabel number="01">
            WHY PARTNER WITH US
          </SectionLabel>

          <div className="mt-8 flex flex-col justify-between gap-6 sm:mt-12 sm:gap-8 lg:flex-row lg:items-end">

            <h2 className="text-4xl font-medium leading-[1.12] tracking-[-1.8px] sm:text-5xl sm:tracking-[-2px] md:text-6xl md:tracking-[-3px]">
              More than visibility.
              <br />
              <span className="text-[#F0440A]">
                It's an opportunity.
              </span>
            </h2>

            <p className="max-w-md text-xs leading-7 text-gray-400 sm:text-sm sm:leading-8">
              SYNARCH is not just a technology club. It's a growing
              ecosystem of curious minds, creative thinkers and future
              professionals. Your support helps us create opportunities
              beyond the classroom.
            </p>
          </div>

          <div className="mt-10 sm:mt-16">
            <BenefitCards />
          </div>

        </div>
      </section>

      {/* PARTNERSHIP LEVELS */}
      <section
        id="partners"
        className="border-t border-white/10 bg-[#151616] px-5 py-16 sm:px-8 sm:py-20 md:px-16 md:py-24 lg:px-24"
      >
        <div className="mx-auto max-w-7xl">

          <SectionLabel number="02">
            PARTNERSHIP LEVELS
          </SectionLabel>

          <div className="mt-8 flex flex-col justify-between gap-6 sm:mt-12 sm:gap-8 lg:flex-row lg:items-end">

            <h2 className="text-4xl font-medium leading-[1.12] tracking-[-1.8px] sm:text-5xl sm:tracking-[-2px] md:text-6xl md:tracking-[-3px]">
              Choose your
              <br />
              <span className="text-[#F0440A]">impact.</span>
            </h2>

            <p className="max-w-sm text-xs leading-7 text-gray-400 sm:text-sm sm:leading-8">
              Different ways to support innovation and connect
              with the next generation of technology leaders.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">

            {tiers.map((tier) => (
              <article
                key={tier.no}
                className={`group flex min-w-0 flex-col border p-5 transition duration-300 sm:p-7 lg:min-h-[510px] lg:hover:-translate-y-2 ${
                  tier.featured
                    ? "border-[#F0440A] bg-[#1D1A18]"
                    : "border-white/15 bg-[#191A1A] hover:border-[#F0440A]"
                }`}
              >

                {/* Card Header */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[8px] font-medium tracking-[1.5px] text-gray-500 sm:text-[9px] sm:tracking-[2px]">
                    PARTNERSHIP / {tier.no}
                  </span>

                  {tier.featured && (
                    <span className="shrink-0 bg-[#F0440A] px-2.5 py-1.5 text-[8px] font-medium tracking-widest text-white">
                      FEATURED
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="mt-9 break-words text-xl font-medium tracking-tight sm:mt-12 sm:text-2xl">
                  {tier.name}
                </h3>

                <p className="mt-3 min-h-12 text-xs leading-6 text-gray-400">
                  {tier.desc}
                </p>

                <div className="my-6 h-px bg-white/15 sm:my-7" />

                <span className="text-[8px] font-medium tracking-[2px] text-gray-500 sm:text-[9px]">
                  WHAT'S INCLUDED
                </span>

                {/* Benefits */}
                <ul className="mt-6 space-y-4 sm:mt-7 sm:space-y-5">
                  {tier.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-xs leading-5 text-gray-300"
                    >
                      <span className="mt-0.5 shrink-0 text-[#F0440A]">↗</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/contact"
                  className={`mt-9 flex items-center justify-between gap-3 border px-4 py-4 text-[8px] font-medium tracking-[1px] transition sm:mt-auto sm:text-[9px] sm:tracking-[1.5px] ${
                    tier.featured
                      ? "border-[#F0440A] bg-[#F0440A] text-white hover:bg-orange-600"
                      : "border-white/20 hover:border-[#F0440A] hover:bg-[#F0440A]"
                  }`}
                >
                  <span>DISCUSS PARTNERSHIP</span>
                  <span className="shrink-0 text-base">↗</span>
                </Link>

              </article>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}
