
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Users, Code2, CalendarDays, Globe } from "lucide-react";

const stats = [
  {
    value: 100,
    suffix: "+",
    label: "Community Members",
    description: "Students learning and building together.",
    icon: Users,
  },
  {
    value: 25,
    suffix: "+",
    label: "Projects & Ideas",
    description: "Ideas transformed into real experiences.",
    icon: Code2,
  },
  {
    value: 12,
    suffix: "+",
    label: "Events & Workshops",
    description: "Experiences that inspire innovation.",
    icon: CalendarDays,
  },
  {
    value: 5,
    suffix: "+",
    label: "Tech Domains",
    description: "Multiple paths to explore technology.",
    icon: Globe,
  },
];

function CountUp({ value, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frame;
    const duration = 1400;
    let startTime;

    const animate = (time) => {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [value, start]);

  return <>{count}</>;
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.25,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#191919] px-5 py-20 text-[#F0EEE3] sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
       
        {/* Stats grid */}
        <div className="grid grid-cols-1 border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                }}
                className="group relative flex min-h-[270px] flex-col border-b border-r border-white/15 p-6 transition-colors duration-300 hover:bg-white/[0.04] sm:p-8"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-mono text-xs text-white/35">
                    / 0{index + 1}
                  </span>

                  <Icon
                    size={21}
                    strokeWidth={1.5}
                    className="text-[#F0440A] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                <div className="mb-3 flex items-baseline gap-1">
                  <span className="text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">
                    <CountUp value={stat.value} start={isInView} />
                  </span>
                  <span className="text-3xl font-semibold text-[#F0440A]">
                    {stat.suffix}
                  </span>
                </div>

                <h3 className="text-sm font-semibold tracking-wide">
                  {stat.label}
                </h3>

                <p className="mt-2 max-w-[240px] text-xs leading-5 text-white/45">
                  {stat.description}
                </p>

                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#F0440A] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
