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
    <section id="work" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900">

      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-medium tracking-wide text-cyan-700 dark:text-cyan-400">
          Work
        </p>
        <h2 className="mt-3 font-serif text-3xl text-slate-900 dark:text-white md:text-4xl">
          Selected projects
        </h2>

        <div className="mt-16 space-y-4">
          {caseStudies.map((study) => (
            <article
              key={study.company}
              className="group relative bg-white p-8 transition-all hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 md:p-10"
            >
              <div className="grid gap-6 md:grid-cols-[180px,1fr] md:gap-12">
                <div>
                  <div className={`h-0.5 w-10 ${study.accent} mb-4`} />
                  <h3 className="font-serif text-2xl text-slate-900 dark:text-white">
                    {study.company}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {study.title}
                  </p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {study.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
