import type { Metadata } from "next";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { Experience } from "@/components/Experience";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "About | Pixels and Code",
  description:
    "15+ years building for the web, specialising in React, design systems, and frontend architecture.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr,2fr] lg:gap-20 items-start">
            <ScrollFadeIn>
              <div>
                <p className="text-sm font-medium tracking-wide text-cyan-700 dark:text-cyan-400">
                  About
                </p>
                <h1 className="mt-3 font-serif text-4xl text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
                  A bit about me
                </h1>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.15}>
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  I&apos;ve been building for the web for over 15 years, working with
                  React since 2014 and React Native since 2017. I specialise in
                  design systems, performance optimisation, UX design, and helping
                  teams structure their frontend architecture for scale.
                </p>
                <p>
                  I&apos;m a pragmatist at heart. I care about quality, but I also
                  understand when to balance craft with business needs. I enjoy
                  mentoring developers and designers on UX and UI, and I like
                  solving hard problems: whether that&apos;s rescuing a struggling
                  codebase, building a design system from scratch, or leading a
                  team through a complex refactor.
                </p>
                <p>
                  I&apos;m based in Folkestone on the Kent coast with my wife, two
                  girls and our little maltipoo, Luna. Outside of work, I run a
                  D&D campaign, watch far too much actual play, and sketch.
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      <Experience />
      <ContactCTA />
    </>
  );
}
