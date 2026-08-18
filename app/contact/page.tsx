import type { Metadata } from "next";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { Button } from "@/components/ui";

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
    <section className="min-h-[80vh] px-7 pb-[130px] pt-[150px]">
      <ScrollFadeIn>
        <p className="font-mono text-[13px] uppercase tracking-label text-accent">
          Contact: available for new projects
          <span aria-hidden="true" className="animate-blink">
            _
          </span>
        </p>

        <h1 className="mt-6 font-display text-[clamp(3rem,9vw,8.5rem)] uppercase leading-[0.92] tracking-hero text-ink">
          Let&apos;s build
          <br />
          <span className="text-outline">something</span>
        </h1>

        <p className="mt-9 max-w-[520px] text-lg leading-[1.6] text-muted">
          Looking for frontend engineering expertise or design systems guidance?
          Tell me about your project.
        </p>

        <div className="mt-12 flex flex-wrap gap-3.5">
          <Button
            as="a"
            href="mailto:dan@pixels-and-code.co.uk"
            variant="primary"
          >
            dan@pixels-and-code.co.uk
          </Button>
          <Button
            as="a"
            href="https://linkedin.com/in/dancork"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            LinkedIn ↗<span className="sr-only"> (opens in new window)</span>
          </Button>
          <Button as="a" href="/cv.pdf" download variant="secondary">
            Download CV ↓
          </Button>
        </div>

        <p className="mt-20 font-mono text-[13px] tracking-[0.02em] text-muted">
          Based in Folkestone, UK · Remote worldwide · Hybrid in the UK
        </p>
      </ScrollFadeIn>
    </section>
  );
}
