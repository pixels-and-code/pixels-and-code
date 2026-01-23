const caseStudies = [
  {
    company: "Birdie",
    title: "Performance Optimisation",
    description:
      "Built Playwright performance testing suite and refactored frontend monorepo architecture. Resolved bottlenecks in core user journeys.",
    tags: ["React", "Playwright", "Performance"],
    accent: "bg-gradient-to-r from-indigo-500 to-blue-500",
  },
  {
    company: "Unit4",
    title: "Design System from Scratch",
    description:
      "Architected monorepo with Nx, built accessible web components with React wrappers. Adopted by 3 teams across 4 products within 6 months.",
    tags: ["Design Systems", "Web Components", "Nx"],
    accent: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    company: "Orri",
    title: "Greenfield Healthcare App",
    description:
      "Designed frontend architecture for eating disorder treatment platform. Built TypeScript SDK and design system foundations.",
    tags: ["React", "TypeScript", "Healthcare"],
    accent: "bg-gradient-to-r from-cyan-500 to-teal-500",
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="relative py-24 md:py-32 bg-white dark:bg-slate-950 overflow-hidden">
      {/* Subtle gradient */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30 dark:opacity-20 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(168, 85, 247, 0.2) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <p className="text-sm font-medium tracking-wide text-indigo-600 dark:text-indigo-400">
          Work
        </p>
        <h2 className="mt-3 font-serif text-3xl text-slate-900 dark:text-white md:text-4xl">
          Selected projects
        </h2>

        <div className="mt-16 space-y-6">
          {caseStudies.map((study) => (
            <article
              key={study.company}
              className="group relative bg-slate-50 p-8 transition-all hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 md:p-10"
            >
              <div className="grid gap-6 md:grid-cols-[180px,1fr] md:gap-12">
                <div>
                  <div className={`h-1 w-12 ${study.accent} mb-4`} />
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
                        className="bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm dark:bg-slate-800 dark:text-slate-400"
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
