"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const phrases = [
  "& Design Systems",
  "& React Applications",
  "& Scalable UI",
];

export function TypeWriter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (shouldReduceMotion) {
    return (
      <span className="bg-gradient-to-b from-cyan-500 to-cyan-700 bg-clip-text text-transparent pb-2 inline-block">
        {phrases[currentIndex]}
      </span>
    );
  }

  return (
    <span className="relative inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className="bg-gradient-to-b from-cyan-500 to-cyan-700 bg-clip-text text-transparent inline-block pb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
        >
          {phrases[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
