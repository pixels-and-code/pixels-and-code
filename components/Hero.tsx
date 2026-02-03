"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { TypeWriter } from "./TypeWriter";
import { FloatingUIElements } from "./FloatingUIElements";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  // LCP-optimised variant: h1 visible immediately, only animate transform
  const lcpVariants = {
    hidden: { y: 20 },
    visible: {
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const MotionWrapper = shouldReduceMotion ? "div" : motion.div;
  const motionProps = shouldReduceMotion
    ? {}
    : {
        variants: containerVariants,
        initial: "hidden",
        animate: "visible",
      };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <FloatingUIElements />
      <MotionWrapper className="relative z-10 mx-auto max-w-6xl px-6 py-32 w-full" {...motionProps}>
        {shouldReduceMotion ? (
          <>
            <p className="text-sm font-medium tracking-wide text-cyan-700 dark:text-cyan-400">
              Dan Cork · Folkestone, UK
            </p>

            <h1 className="mt-6 font-serif text-slate-900 dark:text-white leading-[1.05] text-[clamp(2.5rem,8vw,5rem)]">
              Frontend Engineering
              <br />
              <TypeWriter />
            </h1>

            <p className="mt-8 max-w-xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed md:text-xl">
              Helping startups and scale-ups build production React applications
              and scalable component libraries.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Link href="/work" className="btn btn-primary btn-lg">
                View work
              </Link>
              <Link href="/contact" className="btn btn-ghost group gap-2">
                Get in touch
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </>
        ) : (
          <>
            <motion.p
              variants={itemVariants}
              className="text-sm font-medium tracking-wide text-cyan-700 dark:text-cyan-400"
            >
              Dan Cork · Folkestone, UK
            </motion.p>

            <motion.h1
              variants={lcpVariants}
              className="mt-6 font-serif text-slate-900 dark:text-white leading-[1.05] text-[clamp(2.5rem,8vw,5rem)]"
            >
              Frontend Engineering
              <br />
              <TypeWriter />
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed md:text-xl"
            >
              Helping startups and scale-ups build production React applications
              and scalable component libraries.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-12 flex flex-wrap items-center gap-6">
              <Link href="/work" className="btn btn-primary btn-lg">
                View work
              </Link>
              <Link href="/contact" className="btn btn-ghost group gap-2">
                Get in touch
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </>
        )}
      </MotionWrapper>
    </section>
  );
}
