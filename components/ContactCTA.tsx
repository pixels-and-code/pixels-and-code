import { ScrollFadeIn } from "./ScrollFadeIn";

export function ContactCTA() {
  return (
    <section className="px-7 pb-[140px] pt-[130px] text-center">
      <ScrollFadeIn>
        <p className="font-mono text-[13px] uppercase tracking-label text-muted">
          Interested in working together?
        </p>
        <a
          href="mailto:dan@pixels-and-code.co.uk"
          className="mt-6 inline-block font-display text-[clamp(3rem,8vw,7.5rem)] uppercase leading-none tracking-display text-ink transition-colors duration-[250ms] hover:text-accent"
        >
          Let&apos;s talk
        </a>
        <p className="mt-7 font-mono text-sm text-muted">
          dan@pixels-and-code.co.uk
        </p>
      </ScrollFadeIn>
    </section>
  );
}
