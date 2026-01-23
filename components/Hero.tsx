export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Light mode */}
      <div aria-hidden="true" className="absolute inset-0 bg-white dark:hidden" />
      <div
        aria-hidden="true"
        className="absolute inset-0 dark:hidden"
        style={{
          background: "radial-gradient(circle at 70% 30%, rgba(99, 102, 241, 0.08) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.06) 0%, transparent 40%)",
        }}
      />

      {/* Dark mode - rich navy with gradient mesh */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden dark:block"
        style={{ background: "#0c0f1a" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden dark:block"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 20% 0%, rgba(99, 102, 241, 0.25) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(168, 85, 247, 0.15) 0%, transparent 50%), radial-gradient(ellipse 50% 30% at 60% 40%, rgba(34, 211, 238, 0.08) 0%, transparent 50%)",
        }}
      />

      {/* Gradient orb */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 dark:opacity-30"
        style={{
          background: "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #22d3ee 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 w-full">
        <p className="text-sm font-medium tracking-wide text-indigo-600 dark:text-indigo-400">
          Dan Cork · Folkestone, UK
        </p>

        <h1 className="mt-6 font-serif text-5xl text-slate-900 dark:text-white sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05]">
          Frontend Engineering
          <br />
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
            & Design Systems
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Helping startups and scale-ups build production React applications
          and scalable component libraries.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-slate-800 hover:scale-105 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
          >
            Get in touch
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
          >
            View work
            <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom accent line */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
    </section>
  );
}
