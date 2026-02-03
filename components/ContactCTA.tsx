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
            <Link href="/contact" className="btn btn-primary btn-lg mt-8">
              Get in touch
            </Link>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
