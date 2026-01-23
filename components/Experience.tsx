const stats = [
  { value: "15+", label: "Years experience" },
  { value: "2014", label: "React since" },
  { value: "2017", label: "React Native since" },
];

const roles = [
  { company: "Unit4", role: "Design System Lead" },
  { company: "Birdie", role: "Senior Frontend Engineer" },
  { company: "NearForm", role: "Technical Lead" },
  { company: "Portchain", role: "Frontend Lead" },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium tracking-wide text-indigo-600 dark:text-indigo-400">
              Experience
            </p>
            <h2 className="mt-3 font-serif text-3xl text-slate-900 dark:text-white md:text-4xl">
              Track record
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              Delivering quality software and leading teams across fintech,
              healthcare, and enterprise.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400 md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pt-12">
            <h3 className="text-sm font-medium tracking-wide text-indigo-600 dark:text-indigo-400">
              Notable roles
            </h3>
            <ul className="mt-6">
              {roles.map((item) => (
                <li
                  key={item.company}
                  className="flex items-center justify-between border-b border-slate-200 py-4 dark:border-slate-700"
                >
                  <span className="font-medium text-slate-900 dark:text-white">
                    {item.company}
                  </span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {item.role}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
