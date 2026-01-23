"use client";

import { ScrollFadeIn } from "./ScrollFadeIn";

export function Contact() {
  return (
    <section id="contact" className="py-32 md:py-40 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFadeIn>
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-wide text-cyan-700 dark:text-cyan-400">
              Contact
            </p>
            <h2 className="mt-3 font-serif text-4xl text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
              Let&apos;s work together
            </h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              Looking for frontend engineering expertise or design systems
              guidance? I&apos;d love to hear about your project.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="mailto:dan@pixels-and-code.co.uk"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-cyan-600 to-cyan-700 px-8 py-4 text-sm font-medium text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
              >
                Get in touch
              </a>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-4 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-[1.02] dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
              >
                Download CV
              </a>
            </div>

            <p className="mt-16 text-slate-600 dark:text-slate-400">
              Based in Folkestone, UK · Available for remote work worldwide and hybrid in the UK
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
