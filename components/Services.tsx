"use client";

import { ScrollFadeIn, StaggerContainer, StaggerItem } from "./ScrollFadeIn";

const services = [
  {
    title: "Frontend Engineering",
    description:
      "Production React and React Native applications built for performance and maintainability.",
    accent: "bg-gradient-to-b from-cyan-500 to-cyan-700",
    bg: "bg-cyan-50 dark:bg-cyan-950/30",
    border: "border-cyan-200/50 dark:border-cyan-800/30",
    glow: "hover:shadow-cyan-500/10",
  },
  {
    title: "Design Systems",
    description:
      "Scalable component libraries from strategy through adoption. Architecture, accessibility, and team enablement.",
    accent: "bg-gradient-to-b from-violet-400 to-violet-600",
    bg: "bg-violet-50 dark:bg-violet-950/30",
    border: "border-violet-200/50 dark:border-violet-800/30",
    glow: "hover:shadow-violet-500/10",
  },
  {
    title: "Technical Leadership",
    description:
      "Team mentoring, architecture decisions, and engineering best practices.",
    accent: "bg-gradient-to-b from-rose-400 to-rose-600",
    bg: "bg-rose-50 dark:bg-rose-950/30",
    border: "border-rose-200/50 dark:border-rose-800/30",
    glow: "hover:shadow-rose-500/10",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 md:py-40 bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFadeIn>
          <p className="text-sm font-medium tracking-wide text-cyan-700 dark:text-cyan-400">
            Services
          </p>
          <h2 className="mt-3 font-serif text-4xl text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
            How I can help
          </h2>
        </ScrollFadeIn>

        <StaggerContainer className="mt-20 grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
          {services.map((service) => (
            <StaggerItem key={service.title} className="h-full">
              <div
                className={`group relative h-full p-10 md:p-12 transition-all duration-300 border ${service.bg} ${service.border} hover:scale-[1.02] hover:shadow-xl ${service.glow}`}
              >
                <div className={`h-1 w-12 ${service.accent} mb-8`} />
                <h3 className="font-serif text-2xl text-slate-900 dark:text-white md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
