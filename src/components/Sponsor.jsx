import { Link } from "react-router-dom";
import React from "react";
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
  <div className="flex items-center gap-4 text-[10px] font-bold tracking-[3px] text-gray-400">
    <span className="text-[#F0440A]">{number}</span>
    {children}
  </div>
);

export default function Sponsor() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#101111] text-[#F1EFE5] font-sans selection:bg-[#F0440A] selection:text-white">

      
<div className="relative overflow-hidden border-y border-white/10 py-10 md:py-12">

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
  <div className="absolute left-8 top-10 h-3 w-3 bg-[#F0440A]" />
  

  <div className="relative flex flex-col gap-8 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">

    {/* Heading */}
    <h1 className="ml-4 whitespace-nowrap text-4xl font-bold leading-none tracking-[0.02em] sm:ml-10 sm:text-6xl md:text-7xl lg:text-[90px]">
      Our Sponsors<span className="text-[#F0440A]">.</span>
    </h1>

    {/* Sponsor Button */}
    <Link
  to="/contact"
  className="group flex w-fit items-center gap-4 border border-white/20 px-6 py-3 text-xs font-medium uppercase tracking-[1.5px] text-[#F1EFE5] transition-all duration-300 hover:border-[#F0440A] hover:text-[#F0440A]"
>
  Sponsor Us
  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
    ↗
  </span>
</Link>

  </div>
</div>

      {/* INTRO / BENEFITS */}
      <section
        id="benefits"
        className="border-t border-white/10 px-6 py-24 md:px-16 lg:px-24"
      >
        <div className="mx-auto max-w-7xl">

          <SectionLabel number="01">
            WHY PARTNER WITH US
          </SectionLabel>

          <div className="mt-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <h2 className="text-5xl font-bold leading-tight tracking-[-3px] md:text-6xl">
              More than visibility.
              <br />
              <span className="text-[#F0440A]">
                It's an opportunity.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-8 text-gray-400">
              SYNARCH is not just a technology club. It's a growing
              ecosystem of curious minds, creative thinkers and future
              professionals. Your support helps us create opportunities
              beyond the classroom.
            </p>
          </div>

          <div className="mt-16">
  <BenefitCards />
</div>
        </div>
      </section>

      {/* PARTNERSHIP LEVELS */}
      <section
        id="partners"
        className="border-t border-white/10 bg-[#151616] px-6 py-24 md:px-16 lg:px-24"
      >
        <div className="mx-auto max-w-7xl">

          <SectionLabel number="02">
            PARTNERSHIP LEVELS
          </SectionLabel>

          <div className="mt-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="text-5xl font-bold leading-tight tracking-[-3px] md:text-6xl">
              Choose your
              <br />
              <span className="text-[#F0440A]">impact.</span>
            </h2>

            <p className="max-w-sm text-sm leading-8 text-gray-400">
              Different ways to support innovation and connect
              with the next generation of technology leaders.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {tiers.map((tier) => (
              <article
                key={tier.no}
                className={`group flex min-h-[510px] flex-col border p-7 transition duration-300 hover:-translate-y-2 ${
                  tier.featured
                    ? "border-[#F0440A] bg-[#1D1A18]"
                    : "border-white/15 bg-[#191A1A] hover:border-[#F0440A]"
                }`}
              >

                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold tracking-[2px] text-gray-500">
                    PARTNERSHIP / {tier.no}
                  </span>

                  {tier.featured && (
                    <span className="bg-[#F0440A] px-3 py-1.5 text-[8px] font-bold tracking-widest text-white">
                      FEATURED
                    </span>
                  )}
                </div>

                <h3 className="mt-12 text-2xl font-bold tracking-tight">
                  {tier.name}
                </h3>

                <p className="mt-3 min-h-12 text-xs leading-6 text-gray-400">
                  {tier.desc}
                </p>

                <div className="my-7 h-px bg-white/15" />

                <span className="text-[9px] font-bold tracking-[2px] text-gray-500">
                  WHAT'S INCLUDED
                </span>

                <ul className="mt-7 space-y-5">
                  {tier.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-3 text-xs text-gray-300"
                    >
                      <span className="text-[#F0440A]">↗</span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Link
  to="/contact"
  className={`mt-auto flex items-center justify-between border px-5 py-4 text-[9px] font-bold tracking-[1.5px] transition ${
    tier.featured
      ? "border-[#F0440A] bg-[#F0440A] text-white hover:bg-orange-600"
      : "border-white/20 hover:border-[#F0440A] hover:bg-[#F0440A]"
  }`}
>
  DISCUSS PARTNERSHIP
  <span className="text-base">↗</span>
</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

     

      

    </main>
  );
}
