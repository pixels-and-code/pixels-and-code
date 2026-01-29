import Link from "next/link";
import { ScrollFadeIn } from "./ScrollFadeIn";

export function ContactCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFadeIn>
          <div className="flex flex-col items-center text-center">
            <h2 className="font-serif text-3xl text-slate-900 dark:text-white md:text-4xl">
              Interested in working together?
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-md">
              I&apos;d love to hear about your project.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-b from-cyan-600 to-cyan-700 px-8 py-4 text-sm font-medium text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
            >
              Get in touch
            </Link>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
