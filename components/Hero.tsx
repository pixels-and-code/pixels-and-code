export function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white dark:bg-slate-950">

      <div className="mx-auto max-w-6xl px-6 py-32 w-full">
        <p className="text-sm font-medium tracking-wide text-cyan-700 dark:text-cyan-400">
          Dan Cork · Folkestone, UK
        </p>

        <h1 className="mt-6 font-serif text-5xl text-slate-900 dark:text-white sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05]">
          Frontend Engineering
          <br />
          <span className="bg-gradient-to-b from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
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
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-cyan-600 to-cyan-700 px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
          >
            Get in touch
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
          >
            View work
            <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

    </section>
  );
}
