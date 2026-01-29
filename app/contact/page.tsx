import type { Metadata } from "next";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Contact | Pixels and Code",
  description:
    "Get in touch to discuss your frontend engineering or design systems project.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFadeIn>
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-wide text-cyan-700 dark:text-cyan-400">
              Contact
            </p>
            <h1 className="mt-3 font-serif text-4xl text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
              Let&apos;s work together
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              Looking for frontend engineering expertise or design systems
              guidance? I&apos;d love to hear about your project.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="mailto:dan@pixels-and-code.co.uk"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-cyan-600 to-cyan-700 px-8 py-4 text-sm font-medium text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                dan@pixels-and-code.co.uk
              </a>
              <a
                href="https://linkedin.com/in/dancork"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-8 py-4 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-slate-50 hover:shadow-lg hover:scale-[1.02] dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
                <span className="sr-only"> (opens in new window)</span>
              </a>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-8 py-4 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-slate-50 hover:shadow-lg hover:scale-[1.02] dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Download CV
              </a>
            </div>

            <p className="mt-16 text-slate-600 dark:text-slate-400">
              Based in Folkestone, UK · Available for remote work worldwide and
              hybrid in the UK
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
