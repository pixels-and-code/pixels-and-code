"use client";

import Link from "next/link";
import { ScrollFadeIn, StaggerContainer, StaggerItem } from "./ScrollFadeIn";
import { Label, Section, Container } from "@/components/ui";

const stats = [
  { value: "15+", label: "Years experience" },
  { value: "2014", label: "React since" },
  { value: "2017", label: "React Native since" },
];

const roles = [
  { company: "Birdie", role: "Frontend Consultant", id: "birdie-2025" },
  { company: "Unit4", role: "Design System Manager", id: "unit4" },
  { company: "Orri", role: "Lead Frontend Engineer", id: "orri" },
];

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-16">
          <ScrollFadeIn>
            <div>
              <Label>Experience</Label>
              <h2 className="mt-3 font-serif text-4xl text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
                Track record
              </h2>
              <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                Delivering quality software and leading teams across fintech,
                healthcare, and enterprise.
              </p>

              <div className="mt-16 relative">
                <div className="absolute inset-0 -m-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-rose-500/10 dark:from-cyan-500/5 dark:via-violet-500/5 dark:to-rose-500/5" />
                <div className="relative grid grid-cols-3 gap-8 p-6">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-serif text-4xl bg-gradient-to-b from-cyan-500 to-cyan-700 bg-clip-text text-transparent md:text-5xl">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.2}>
            <div className="lg:pt-16">
              <Label as="span">Notable roles</Label>
              <StaggerContainer className="mt-8" staggerDelay={0.1}>
                {roles.map((item) => (
                  <StaggerItem key={item.id}>
                    <Link
                      href={`/work#${item.id}`}
                      className="group flex items-center justify-between border-b border-slate-200 py-5 dark:border-slate-700 transition-colors hover:border-cyan-500 dark:hover:border-cyan-400"
                    >
                      <span className="font-medium text-lg text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                        {item.company}
                      </span>
                      <span className="text-slate-600 dark:text-slate-400">
                        {item.role}
                      </span>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollFadeIn>
        </div>
      </Container>
    </Section>
  );
}
