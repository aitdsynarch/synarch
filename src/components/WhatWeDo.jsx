import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  BriefcaseBusiness,
  CalendarDays,
  Megaphone,
  ArrowUpRight,
} from "lucide-react";

const areas = [
  {
    number: "01",
    title: "Build",
    subtitle: "Development & Innovation",
    description:
      "Turn ideas into real products through web development, AI, open source, and collaborative projects.",
    icon: Code2,
    tags: ["Web Development", "AI / ML", "Open Source"],
  },
  {
    number: "02",
    title: "Learn",
    subtitle: "Skills & Technology",
    description:
      "Learn by building, experiment with emerging technologies, and grow through peer-to-peer learning.",
    icon: Rocket,
    tags: ["Tech Workshops", "Learning Paths", "Hands-on Labs"],
  },
  {
    number: "03",
    title: "Grow",
    subtitle: "Careers & Placements",
    description:
      "Prepare for internships and placements with DSA practice, resume reviews, mock interviews, and mentorship.",
    icon: BriefcaseBusiness,
    tags: ["DSA", "Interview Prep", "Mentorship"],
  },
  {
    number: "04",
    title: "Connect",
    subtitle: "Events & Community",
    description:
      "Bring students together through hackathons, meetups, tech talks, competitions, and networking.",
    icon: CalendarDays,
    tags: ["Hackathons", "Meetups", "Tech Talks"],
  },
  {
    number: "05",
    title: "Communicate",
    subtitle: "Media & Outreach",
    description:
      "Share ideas, tell stories, build the community's identity, and make technology accessible to everyone.",
    icon: Megaphone,
    tags: ["Design", "Content", "Social Media"],
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="relative overflow-hidden bg-[#F0EEE3] px-5 py-24 text-[#191919] sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F0440A]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em]">
                What We Do
              </span>
            </div>

            <h2 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              Ideas into
              <br />
              <span className="text-[#F0440A]">impact.</span>
            </h2>
          </div>

          <p className="max-w-sm text-base leading-7 text-black/65 md:text-lg">
            We bring technology, creativity, and community together to help
            students build real skills and meaningful things.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
          {areas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.article
                key={area.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative flex min-h-[340px] flex-col overflow-hidden border border-black/10 bg-[#F7F5EC] p-7 transition-colors duration-300 hover:bg-[#191919] hover:text-[#F0EEE3] sm:p-8 ${
                  index < 2
                    ? "lg:col-span-3"
                    : "lg:col-span-2"
                }`}
              >
                <div className="mb-12 flex items-start justify-between">
                  <span className="font-mono text-sm text-black/45 transition-colors group-hover:text-white/45">
                    / {area.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center border border-black/15 transition-all duration-300 group-hover:border-[#F0440A] group-hover:bg-[#F0440A]">
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="transition-colors group-hover:text-white"
                    />
                  </div>
                </div>

                <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#F0440A]">
                  {area.subtitle}
                </p>

                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                    {area.title}
                  </h3>

                  <ArrowUpRight
                    size={22}
                    className="shrink-0 -translate-x-1 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                  />
                </div>

                <p className="max-w-md text-sm leading-6 text-black/60 transition-colors group-hover:text-white/65">
                  {area.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-8">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-black/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-black/65 transition-colors group-hover:border-white/20 group-hover:text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-black/15 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-black/55">
            More than a club. A space to build what comes next.
          </p>

          <a
            href="#join"
            className="group inline-flex w-fit items-center gap-3 text-sm font-bold uppercase tracking-wider"
          >
            Be part of SYNARCH
            <span className="flex h-9 w-9 items-center justify-center bg-[#F0440A] text-white transition-transform group-hover:translate-x-1">
              <ArrowUpRight size={18} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}