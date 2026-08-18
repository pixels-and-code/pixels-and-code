"use client";

import { ScrollFadeIn, StaggerContainer, StaggerItem } from "./ScrollFadeIn";

const services = [
  {
    title: "Frontend Engineering",
    description:
      "Production React and React Native applications built for performance and maintainability.",
  },
  {
    title: "Design Systems",
    description:
      "Scalable component libraries from strategy through adoption. Architecture, accessibility, and team enablement.",
  },
  {
    title: "Technical Leadership",
    description:
      "Team mentoring, architecture decisions, and modern workflows including AI-assisted development.",
  },
];

export function Services() {
  return (
    <section id="services" className="border-b border-line px-7 py-20 md:py-[110px]">
      <ScrollFadeIn>
        <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] uppercase leading-none tracking-display text-ink">
          What I do
        </h2>
      </ScrollFadeIn>

      <StaggerContainer className="mt-14 flex flex-col" staggerDelay={0.1}>
        {services.map((service, index) => (
          <StaggerItem
            key={service.title}
            className="grid grid-cols-1 items-center gap-4 border-t border-line py-9 last:border-b md:grid-cols-[120px,1fr,1fr] md:gap-8"
          >
            <span className="font-mono text-sm text-accent">
              ({String(index + 1).padStart(2, "0")})
            </span>
            <h3 className="font-display text-[clamp(1.4rem,2.4vw,2rem)] uppercase tracking-[-0.01em] text-ink">
              {service.title}
            </h3>
            <p className="text-base leading-[1.65] text-muted">
              {service.description}
            </p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
