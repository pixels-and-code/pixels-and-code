"use client";

import { ScrollFadeIn, StaggerContainer, StaggerItem } from "./ScrollFadeIn";
import { Label, Section, Container, AccentBar } from "@/components/ui";

const services = [
  {
    title: "Frontend Engineering",
    description:
      "Production React and React Native applications built for performance and maintainability.",
    accent: "bg-gradient-to-b from-teal-500 to-teal-700",
    bg: "bg-teal-50 dark:bg-teal-950/30",
    border: "border-teal-200/50 dark:border-teal-800/30",
    glow: "hover:shadow-teal-500/10",
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
      "Team mentoring, architecture decisions, and modern workflows including AI-assisted development.",
    accent: "bg-gradient-to-b from-rose-400 to-rose-600",
    bg: "bg-rose-50 dark:bg-rose-950/30",
    border: "border-rose-200/50 dark:border-rose-800/30",
    glow: "hover:shadow-rose-500/10",
  },
];

export function Services() {
  return (
    <Section id="services">
      <Container>
        <ScrollFadeIn>
          <Label>Services</Label>
          <h2 className="mt-3 font-serif text-4xl text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
            How I can help
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            Trusted by teams at Birdie, Unit4, Orri, Foundational, and more.
          </p>
        </ScrollFadeIn>

        <StaggerContainer className="mt-20 grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
          {services.map((service) => (
            <StaggerItem key={service.title} className="h-full">
              <div
                className={`group relative h-full p-10 md:p-12 transition-all duration-300 border ${service.bg} ${service.border} hover:scale-[1.02] hover:shadow-xl ${service.glow}`}
              >
                <AccentBar gradient={service.accent} className="mb-8" />
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
      </Container>
    </Section>
  );
}
