"use client";

import { ScrollFadeIn } from "./ScrollFadeIn";
import { Label } from "@/components/ui";

export function About() {
  return (
    <section id="about" className="border-b border-line px-7 py-20 md:py-[110px]">
      <div className="grid items-start gap-12 md:grid-cols-2 md:gap-20">
        <ScrollFadeIn>
          <Label>About</Label>
          <h2 className="mt-5 font-display text-[clamp(1.8rem,3.4vw,3rem)] uppercase leading-[1.05] tracking-display text-ink">
            A pragmatist with fifteen years on the web
          </h2>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.15}>
          <div className="flex flex-col gap-[22px] text-[17px] leading-[1.7] text-muted">
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
              D&amp;D campaign, watch far too much actual play, and sketch.
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
