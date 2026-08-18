"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const phrases = [
  "& design systems",
  "& technical leadership",
  "& performance",
  "& AI workflows",
];

// The longest phrase reserves the line width, preventing reflow and clipping
const longestPhrase = phrases.reduce((a, b) => (a.length > b.length ? a : b));

export function TypeWriter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (shouldReduceMotion) {
    return <span className="text-accent">{phrases[currentIndex]}</span>;
  }

  return (
    <span className="relative inline-block">
      <span className="invisible" aria-hidden="true">
        {longestPhrase}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          // Wraps on narrow screens so long phrases are never clipped
          className="absolute left-0 top-0 text-accent md:whitespace-nowrap"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
        >
          {phrases[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
