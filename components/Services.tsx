const services = [
  {
    title: "Frontend Engineering",
    description:
      "Production React and React Native applications built for performance and maintainability.",
    accent: "bg-gradient-to-b from-cyan-500 to-cyan-700",
    bg: "bg-cyan-50 dark:bg-cyan-950/30",
  },
  {
    title: "Design Systems",
    description:
      "Scalable component libraries from strategy through adoption. Architecture, accessibility, and team enablement.",
    accent: "bg-gradient-to-b from-violet-400 to-violet-600",
    bg: "bg-violet-50 dark:bg-violet-950/30",
  },
  {
    title: "Technical Leadership",
    description:
      "Team mentoring, architecture decisions, and engineering best practices.",
    accent: "bg-gradient-to-b from-rose-400 to-rose-600",
    bg: "bg-rose-50 dark:bg-rose-950/30",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-medium tracking-wide text-cyan-700 dark:text-cyan-400">
          Services
        </p>
        <h2 className="mt-3 font-serif text-3xl text-slate-900 dark:text-white md:text-4xl">
          How I can help
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative p-8 transition-all ${service.bg}`}
            >
              <div className={`h-0.5 w-10 ${service.accent} mb-6`} />
              <h3 className="font-serif text-xl text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
