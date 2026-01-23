export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white dark:bg-slate-950">

      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-cyan-700 dark:text-cyan-400">
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
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-cyan-600 to-cyan-700 px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
            >
              Get in touch
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-3.5 text-sm font-medium text-slate-700 transition-colors hover:bg-white dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
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
