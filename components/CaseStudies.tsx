"use client";

import { ScrollFadeIn, StaggerContainer, StaggerItem } from "./ScrollFadeIn";

const caseStudies = [
  {
    company: "Birdie",
    title: "Performance Optimisation",
    description:
      "Built Playwright performance testing suite and refactored frontend monorepo architecture. Resolved bottlenecks in core user journeys.",
    tags: ["React", "Playwright", "Performance"],
    accent: "bg-gradient-to-b from-cyan-500 to-cyan-700",
  },
  {
    company: "Unit4",
    title: "Design System from Scratch",
    description:
      "Architected monorepo with Nx, built accessible web components with React wrappers. Adopted by 3 teams across 4 products within 6 months.",
    tags: ["Design Systems", "Web Components", "Nx"],
    accent: "bg-gradient-to-b from-violet-400 to-violet-600",
  },
  {
    company: "Orri",
    title: "Greenfield Healthcare App",
    description:
      "Designed frontend architecture for eating disorder treatment platform. Built TypeScript SDK and design system foundations.",
    tags: ["React", "TypeScript", "Healthcare"],
    accent: "bg-gradient-to-b from-rose-400 to-rose-600",
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="py-32 md:py-40 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFadeIn>
          <p className="text-sm font-medium tracking-wide text-cyan-700 dark:text-cyan-400">
            Work
          </p>
          <h2 className="mt-3 font-serif text-4xl text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
            Selected projects
          </h2>
        </ScrollFadeIn>

        <StaggerContainer className="mt-20 space-y-6" staggerDelay={0.15}>
          {caseStudies.map((study) => (
            <StaggerItem key={study.company}>
              <article
                className="group relative bg-slate-50 p-10 transition-all duration-300 hover:bg-slate-100 hover:shadow-lg hover:scale-[1.01] dark:bg-slate-900 dark:hover:bg-slate-800 md:p-12"
              >
                <div className="grid gap-8 md:grid-cols-[200px,1fr] md:gap-16">
                  <div>
                    <div className={`h-1 w-12 ${study.accent} mb-6`} />
                    <h3 className="font-serif text-3xl text-slate-900 dark:text-white md:text-4xl">
                      {study.company}
                    </h3>
                    <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
                      {study.title}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                      {study.description}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-slate-200 px-4 py-1.5 text-sm font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
