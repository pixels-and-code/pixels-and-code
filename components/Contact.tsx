export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      {/* Gradient accents */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-30 dark:opacity-20 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[300px] h-[300px] opacity-30 dark:opacity-20 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-indigo-600 dark:text-indigo-400">
            Contact
          </p>
          <h2 className="mt-3 font-serif text-3xl text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
            Let&apos;s work together
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            Looking for frontend engineering expertise or design systems
            guidance? I&apos;d love to hear about your project.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:dan@pixels-and-code.co.uk"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:shadow-indigo-500/30 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
            >
              Get in touch
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-3.5 text-sm font-medium text-slate-700 transition-colors hover:bg-white dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
            >
              Download CV
            </a>
          </div>

          <p className="mt-12 text-sm text-slate-600 dark:text-slate-400">
            Based in Folkestone, UK · Available for remote work worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
