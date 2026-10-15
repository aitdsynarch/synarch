
import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  BriefcaseBusiness,
  CalendarDays,
  Megaphone,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

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
      className="bg-[#F0EEE3] px-5 py-20 text-[#191919] sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F0440A]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em]">
              What We Do
            </span>
          </div>

          <h2 className="text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
            Ideas into <span className="text-[#F0440A]">impact.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-black/60 sm:text-base">
            We bring technology, creativity, and community together to
            help students build real skills and meaningful things.
          </p>
        </motion.div>

        {/* Left sticky image + right scrolling cards */}
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left image */}
          <div className="lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative h-[380px] overflow-hidden bg-[#191919] sm:h-[500px] lg:h-[620px]"
            >
              <img
                src="/images/what.png"
                alt="Students collaborating on technology and projects"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/10" />

           

              
            </motion.div>
          </div>

          {/* Right scrolling cards */}
          <div className="space-y-5">
            {areas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.article
                  key={area.number}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.05,
                    ease: "easeOut",
                  }}
                  className="group relative flex min-h-[310px] flex-col border border-black/10 bg-[#F7F5EC] p-6 transition-colors duration-300 hover:bg-[#191919] hover:text-[#F0EEE3] sm:min-h-[330px] sm:p-8"
                >
                  <div className="mb-9 flex items-start justify-between">
                    <span className="font-mono text-sm text-black/40 transition-colors group-hover:text-white/40">
                      / {area.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center border border-black/15 transition-colors group-hover:border-[#F0440A] group-hover:bg-[#F0440A]">
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
                      className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                  <p className="max-w-lg text-sm leading-6 text-black/60 transition-colors group-hover:text-white/65">
                    {area.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-7">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-black/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-black/60 transition-colors group-hover:border-white/20 group-hover:text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-black/15 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-black/55">
            More than a club. A space to build what comes next.
          </p>

          <Link
            to="/join"
            className="group inline-flex w-fit items-center gap-3 text-sm font-bold uppercase tracking-wider"
          >
            Be part of SYNARCH
            <span className="flex h-10 w-10 items-center justify-center bg-[#F0440A] text-white transition-transform group-hover:translate-x-1">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
