const services = [
  {
    title: "Frontend Engineering",
    description:
      "Production React and React Native applications built for performance and maintainability.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Design Systems",
    description:
      "Scalable component libraries from strategy through adoption. Architecture, accessibility, and team enablement.",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Technical Leadership",
    description:
      "Team mentoring, architecture decisions, and engineering best practices.",
    color: "from-cyan-500 to-teal-500",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-medium tracking-wide text-indigo-600 dark:text-indigo-400">
          Services
        </p>
        <h2 className="mt-3 font-serif text-3xl text-slate-900 dark:text-white md:text-4xl">
          How I can help
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:bg-slate-800"
            >
              <div className={`h-1 w-12 bg-gradient-to-r ${service.color} mb-6`} />
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
