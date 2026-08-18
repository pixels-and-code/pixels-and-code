"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TypeWriter } from "./TypeWriter";
import { FloatingUIElements } from "./FloatingUIElements";
import { Button } from "@/components/ui";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // The h1 is the LCP element, so it animates transform only and never fades in
  const rise = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease, delay },
        };

  const riseNoFade = shouldReduceMotion
    ? {}
    : {
        initial: { y: 28 },
        animate: { y: 0 },
        transition: { duration: 0.7, ease, delay: 0.08 },
      };

  return (
    <section className="relative flex min-h-[88vh] flex-col justify-center border-b border-line">
      <FloatingUIElements />

      <div className="relative px-7 pb-[60px] pt-[120px]">
        <motion.div className="flex items-center gap-3" {...rise(0)}>
          <span className="h-[7px] w-[7px] rounded-full bg-accent" />
          <p className="font-mono text-[13px] uppercase tracking-[0.06em] text-muted">
            Available for new projects
          </p>
        </motion.div>

        <motion.h1
          className="mt-[30px] font-display text-[clamp(2.6rem,6.4vw,6rem)] uppercase leading-[0.98] tracking-display text-ink"
          {...riseNoFade}
        >
          Frontend engineering
          <br />
          <TypeWriter />
        </motion.h1>

        <motion.div
          className="mt-11 flex flex-wrap items-end justify-between gap-9"
          {...rise(0.16)}
        >
          <p className="max-w-[480px] text-lg leading-[1.65] text-muted">
            I help startups and scale-ups ship production React applications and
            design systems that hold up at scale. Fifteen years in, still
            obsessed with the craft.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button as="link" href="/work" variant="primary" size="lg">
              View case studies
            </Button>
            <Button as="link" href="/contact" variant="secondary" size="lg">
              Get in touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
