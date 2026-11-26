
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
  <article className="group w-[300px] shrink-0 overflow-hidden border border-white/15 bg-[#151616] transition-all duration-300 hover:border-[#F0440A] md:w-[340px]">

    {/* IMAGE */}
    <div className="h-[220px] overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* NAME */}
    <div className="flex items-center justify-between px-6 py-6">
      <h3 className="text-xl font-semibold tracking-tight text-[#F1EFE5]">
        {item.name}
      </h3>

      <span className="flex items-center gap-1.5">
  <span className="h-2 w-2 bg-[#F0440A]" />
  <span className="h-2 w-2 bg-[#F0440A]" />
</span>
    </div>

  </article>
);

export default function BenefitCards() {
  return (
    <div className="group w-full overflow-hidden">

      <div
        className="flex w-max gap-5 group-hover:[animation-play-state:paused]"
        style={{
          animation: "benefit-marquee 25s linear infinite",
        }}
      >
        {[...benefits, ...benefits].map((item, index) => (
          <BenefitCard key={index} item={item} />
        ))}
      </div>

      <style>{`
        @keyframes benefit-marquee {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>

    </div>
  );
}
