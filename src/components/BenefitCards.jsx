
import React from "react";

const benefits = [
  {
    id: 1,
    name: "HANGERAGE",
    image: "/images/hangerage.jpg",
  },
  {
    id: 2,
    name: "ADRI BROADBAND",
    image: "/images/adri.avif",
  },
];

const BenefitCard = ({ item }) => (
  <article className="group w-[calc((100vw-56px)/3)] min-w-0 shrink-0 overflow-hidden border border-white/15 bg-[#151616] transition-all duration-300 hover:border-[#F0440A] sm:w-[calc((100vw-80px)/3)] md:w-[calc((100%-40px)/3)]">

    {/* IMAGE */}
    <div className="h-[85px] overflow-hidden sm:h-[120px] md:h-[160px] lg:h-[190px]">
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* NAME */}
    <div className="flex min-h-[48px] items-center justify-between gap-1 px-2 py-3 sm:px-3 md:px-4 md:py-4">
      <h3 className="min-w-0 break-words text-[9px] font-medium leading-tight tracking-tight text-[#F1EFE5] sm:text-[11px] md:text-sm lg:text-base">
        {item.name}
      </h3>

      <span className="flex shrink-0 items-center gap-1">
        <span className="h-1.5 w-1.5 bg-[#F0440A]" />
        <span className="h-1.5 w-1.5 bg-[#F0440A]" />
      </span>
    </div>

  </article>
);

export default function BenefitCards() {
  // Duplicate cards for seamless marquee animation
  const repeatedBenefits = [...benefits, ...benefits];

  return (
    <div className="group w-full overflow-hidden">

      <div
        className="flex w-max gap-3 sm:gap-4 md:gap-5 group-hover:[animation-play-state:paused]"
        style={{
          animation: "benefit-marquee 20s linear infinite",
        }}
      >
        {repeatedBenefits.map((item, index) => (
          <BenefitCard
            key={`${item.id}-${index}`}
            item={item}
          />
        ))}
      </div>

      <style>{`
        @keyframes benefit-marquee {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .group > div {
            animation: none !important;
          }
        }
      `}</style>

    </div>
  );
}
