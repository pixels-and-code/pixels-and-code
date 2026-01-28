"use client";

import { motion, useReducedMotion } from "framer-motion";

// Animated toggle component
function AnimatedToggle({ delay = 0 }: { delay?: number }) {
  return (
    <svg width="52" height="28" viewBox="0 0 52 28" fill="none">
      <rect x="1" y="1" width="50" height="26" rx="13" strokeWidth="2" stroke="currentColor" />
      <motion.circle
        cx="14"
        cy="14"
        r="8"
        strokeWidth="2"
        stroke="currentColor"
        animate={{ cx: [14, 38, 38, 14, 14] }}
        transition={{
          duration: 20,
          delay,
          repeat: Infinity,
          times: [0, 0.03, 0.5, 0.53, 1],
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}

// Animated checkbox component
function AnimatedCheckbox({ delay = 0 }: { delay?: number }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="1" y="1" width="26" height="26" rx="5" strokeWidth="2" stroke="currentColor" />
      <motion.path
        d="M7 14L12 19L21 9"
        strokeWidth="2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 1 }}
        animate={{ pathLength: [1, 0, 0, 1, 1] }}
        transition={{
          duration: 18,
          delay,
          repeat: Infinity,
          times: [0, 0.04, 0.5, 0.54, 1],
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}

// Animated radio component
function AnimatedRadio({ delay = 0 }: { delay?: number }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="12" strokeWidth="2" stroke="currentColor" />
      <motion.circle
        cx="14"
        cy="14"
        r="5"
        strokeWidth="2"
        stroke="currentColor"
        animate={{ scale: [1, 0, 0, 1, 1] }}
        transition={{
          duration: 22,
          delay,
          repeat: Infinity,
          times: [0, 0.03, 0.5, 0.53, 1],
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}

// Animated slider component
function AnimatedSlider({ delay = 0 }: { delay?: number }) {
  return (
    <svg width="100" height="18" viewBox="0 0 100 18" fill="none">
      <line x1="9" y1="9" x2="91" y2="9" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
      <motion.circle
        cx="50"
        cy="9"
        r="7"
        strokeWidth="2"
        stroke="currentColor"
        animate={{ cx: [50, 30, 70, 50] }}
        transition={{
          duration: 25,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}

// Animated button with pulsing line
function AnimatedButton({ delay = 0 }: { delay?: number }) {
  return (
    <svg width="140" height="52" viewBox="0 0 140 52" fill="none">
      <rect x="1" y="1" width="138" height="50" rx="25" strokeWidth="2" stroke="currentColor" />
      <motion.line
        x1="35"
        y1="26"
        x2="105"
        y2="26"
        strokeWidth="2"
        stroke="currentColor"
        strokeLinecap="round"
        animate={{ x2: [105, 85, 105] }}
        transition={{
          duration: 20,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}

// Animated input with cursor blink
function AnimatedInput({ delay = 0 }: { delay?: number }) {
  return (
    <svg width="180" height="50" viewBox="0 0 180 50" fill="none">
      <rect x="1" y="1" width="178" height="48" rx="8" strokeWidth="2" stroke="currentColor" />
      <line x1="14" y1="25" x2="100" y2="25" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
      <motion.line
        x1="105"
        y1="15"
        x2="105"
        y2="35"
        strokeWidth="2"
        stroke="currentColor"
        strokeLinecap="round"
        animate={{ opacity: [1, 1, 0, 0, 1] }}
        transition={{
          duration: 1.5,
          delay,
          repeat: Infinity,
          times: [0, 0.49, 0.5, 0.99, 1],
          ease: "linear",
        }}
      />
    </svg>
  );
}

// Animated dropdown with chevron bounce
function AnimatedDropdown({ delay = 0 }: { delay?: number }) {
  return (
    <svg width="120" height="42" viewBox="0 0 120 42" fill="none">
      <rect x="1" y="1" width="118" height="40" rx="6" strokeWidth="2" stroke="currentColor" />
      <line x1="12" y1="21" x2="80" y2="21" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
      <motion.path
        d="M98 17L104 23L110 17"
        strokeWidth="2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ y: [0, 1, 0] }}
        transition={{
          duration: 12,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}

const uiElements = [
  // Top area (below header safe zone)
  {
    id: "button-large",
    animated: <AnimatedButton delay={1} />,
    svg: (
      <svg width="140" height="52" viewBox="0 0 140 52" fill="none">
        <rect x="1" y="1" width="138" height="50" rx="25" strokeWidth="2" stroke="currentColor" />
        <line x1="35" y1="26" x2="105" y2="26" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
      </svg>
    ),
    position: { top: "10%", left: "3%" },
    rotation: -8,
    parallaxSpeed: 0.3,
    hideOnMobile: false,
    float: {
      x: [0, 15, 0, -15, 0],
      y: [0, -8, -16, -8, 0],
      rotate: [-8, -5, -8, -11, -8],
    },
    floatDuration: 12,
  },
  {
    id: "checkbox-top",
    animated: <AnimatedCheckbox delay={15} />,
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="1" y="1" width="22" height="22" rx="4" strokeWidth="1.5" stroke="currentColor" />
      </svg>
    ),
    position: { top: "15%", left: "28%" },
    rotation: 12,
    parallaxSpeed: 0.15,
    hideOnMobile: true,
    float: {
      x: [0, 10, 0, -10, 0],
      y: [0, -6, 0, 6, 0],
      rotate: [12, 15, 12, 9, 12],
    },
    floatDuration: 10,
  },
  {
    id: "input-large",
    animated: <AnimatedInput delay={0} />,
    svg: (
      <svg width="180" height="50" viewBox="0 0 180 50" fill="none">
        <rect x="1" y="1" width="178" height="48" rx="8" strokeWidth="2" stroke="currentColor" />
        <line x1="14" y1="25" x2="100" y2="25" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
      </svg>
    ),
    position: { top: "12%", right: "5%" },
    rotation: 5,
    parallaxSpeed: 0.4,
    hideOnMobile: true,
    float: {
      x: [0, -12, -6, -18, 0],
      y: [0, 10, 16, 6, 0],
      rotate: [5, 8, 5, 2, 5],
    },
    floatDuration: 14,
  },
  {
    id: "dot-top",
    svg: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="6" strokeWidth="1.5" stroke="currentColor" />
      </svg>
    ),
    position: { top: "20%", right: "35%" },
    rotation: 0,
    parallaxSpeed: 0.12,
    hideOnMobile: true,
    float: {
      x: [0, 8, 0, -8, 0],
      y: [0, -8, -16, -8, 0],
    },
    floatDuration: 8,
  },
  // Upper middle area
  {
    id: "toggle",
    animated: <AnimatedToggle delay={8} />,
    position: { top: "22%", left: "3%" },
    rotation: 6,
    parallaxSpeed: 0.35,
    hideOnMobile: true,
    float: {
      x: [0, 8, -4, 12, 0],
      y: [0, -16, -8, -20, 0],
      rotate: [6, 10, 4, 8, 6],
    },
    floatDuration: 11,
  },
  {
    id: "card-right",
    svg: (
      <svg width="110" height="90" viewBox="0 0 110 90" fill="none">
        <rect x="1" y="1" width="108" height="88" rx="8" strokeWidth="2" stroke="currentColor" />
        <line x1="12" y1="22" x2="65" y2="22" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
        <line x1="12" y1="42" x2="98" y2="42" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" opacity="0.5" />
        <line x1="12" y1="58" x2="80" y2="58" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" opacity="0.5" />
        <line x1="12" y1="74" x2="55" y2="74" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    position: { top: "18%", right: "5%" },
    rotation: -4,
    parallaxSpeed: 0.32,
    hideOnMobile: true,
    float: {
      x: [0, -10, 0, -6, 0],
      y: [0, 8, 16, 8, 0],
      rotate: [-4, -1, -4, -7, -4],
    },
    floatDuration: 13,
  },
  {
    id: "radio-mid",
    animated: <AnimatedRadio delay={20} />,
    position: { top: "32%", left: "22%" },
    rotation: 0,
    parallaxSpeed: 0.18,
    hideOnMobile: true,
    float: {
      x: [0, 12, 0, -12, 0],
      y: [0, -6, -12, -6, 0],
    },
    floatDuration: 9,
  },
  // Middle area
  {
    id: "slider",
    animated: <AnimatedSlider delay={5} />,
    position: { top: "42%", right: "8%" },
    rotation: -2,
    parallaxSpeed: 0.38,
    hideOnMobile: true,
    float: {
      x: [0, 16, 8, 20, 0],
      y: [0, -6, 0, -10, 0],
      rotate: [-2, 1, -2, -5, -2],
    },
    floatDuration: 10,
  },
  {
    id: "radio-left",
    animated: <AnimatedRadio delay={30} />,
    position: { top: "48%", left: "5%" },
    rotation: 0,
    parallaxSpeed: 0.22,
    hideOnMobile: false,
    float: {
      x: [0, 10, 6, 14, 0],
      y: [0, 10, 16, 6, 0],
    },
    floatDuration: 9,
  },
  {
    id: "checkbox-mid",
    animated: <AnimatedCheckbox delay={25} />,
    position: { top: "52%", right: "22%" },
    rotation: -8,
    parallaxSpeed: 0.25,
    hideOnMobile: true,
    float: {
      x: [0, -8, 0, 8, 0],
      y: [0, -10, 0, -10, 0],
      rotate: [-8, -4, -8, -12, -8],
    },
    floatDuration: 8,
  },
  // Lower middle area
  {
    id: "button-small",
    animated: <AnimatedButton delay={12} />,
    svg: (
      <svg width="90" height="36" viewBox="0 0 90 36" fill="none">
        <rect x="1" y="1" width="88" height="34" rx="17" strokeWidth="2" stroke="currentColor" />
        <line x1="22" y1="18" x2="68" y2="18" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
      </svg>
    ),
    position: { top: "58%", left: "15%" },
    rotation: 8,
    parallaxSpeed: 0.28,
    hideOnMobile: true,
    float: {
      x: [0, 14, 0, -10, 0],
      y: [0, -8, -4, -12, 0],
      rotate: [8, 12, 8, 4, 8],
    },
    floatDuration: 10,
  },
  {
    id: "toggle-small",
    animated: <AnimatedToggle delay={18} />,
    position: { top: "60%", right: "15%" },
    rotation: -5,
    parallaxSpeed: 0.2,
    hideOnMobile: true,
    float: {
      x: [0, -12, 0, 12, 0],
      y: [0, 8, 12, 8, 0],
      rotate: [-5, -9, -5, -1, -5],
    },
    floatDuration: 9,
  },
  {
    id: "dot-mid",
    svg: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <circle cx="6" cy="6" r="5" strokeWidth="1.5" stroke="currentColor" />
      </svg>
    ),
    position: { top: "55%", left: "35%" },
    rotation: 0,
    parallaxSpeed: 0.1,
    hideOnMobile: true,
    float: {
      x: [0, 6, 0, -6, 0],
      y: [0, -6, 0, 6, 0],
    },
    floatDuration: 6,
  },
  // Bottom area
  {
    id: "dropdown",
    animated: <AnimatedDropdown delay={3} />,
    svg: (
      <svg width="120" height="42" viewBox="0 0 120 42" fill="none">
        <rect x="1" y="1" width="118" height="40" rx="6" strokeWidth="2" stroke="currentColor" />
        <line x1="12" y1="21" x2="80" y2="21" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
        <path d="M98 17L104 23L110 17" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    position: { top: "72%", left: "6%" },
    rotation: 10,
    parallaxSpeed: 0.42,
    hideOnMobile: true,
    float: {
      x: [0, -16, -8, -20, 0],
      y: [0, -8, -16, -8, 0],
      rotate: [10, 14, 10, 6, 10],
    },
    floatDuration: 12,
  },
  {
    id: "input-small",
    svg: (
      <svg width="85" height="32" viewBox="0 0 85 32" fill="none">
        <rect x="1" y="1" width="83" height="30" rx="5" strokeWidth="1.5" stroke="currentColor" />
        <line x1="10" y1="16" x2="50" y2="16" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" />
      </svg>
    ),
    position: { top: "68%", left: "32%" },
    rotation: -3,
    parallaxSpeed: 0.3,
    hideOnMobile: true,
    float: {
      x: [0, 10, 4, 14, 0],
      y: [0, 8, 14, 4, 0],
      rotate: [-3, 0, -3, -6, -3],
    },
    floatDuration: 10,
  },
  {
    id: "checkbox-bottom",
    animated: <AnimatedCheckbox delay={35} />,
    position: { top: "70%", right: "28%" },
    rotation: 6,
    parallaxSpeed: 0.22,
    hideOnMobile: true,
    float: {
      x: [0, -10, -4, -14, 0],
      y: [0, -8, -14, -6, 0],
      rotate: [6, 10, 6, 2, 6],
    },
    floatDuration: 9,
  },
  {
    id: "card-large",
    svg: (
      <svg width="130" height="100" viewBox="0 0 130 100" fill="none">
        <rect x="1" y="1" width="128" height="98" rx="10" strokeWidth="2" stroke="currentColor" />
        <line x1="14" y1="24" x2="75" y2="24" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
        <line x1="14" y1="46" x2="116" y2="46" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" opacity="0.5" />
        <line x1="14" y1="64" x2="100" y2="64" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" opacity="0.5" />
        <line x1="14" y1="82" x2="65" y2="82" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    position: { bottom: "6%", right: "8%" },
    rotation: -6,
    parallaxSpeed: 0.35,
    hideOnMobile: false,
    float: {
      x: [0, 12, 6, 16, 0],
      y: [0, -10, -6, -12, 0],
      rotate: [-6, -3, -6, -9, -6],
    },
    floatDuration: 14,
  },
  {
    id: "dot-bottom",
    svg: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="7" strokeWidth="1.5" stroke="currentColor" />
      </svg>
    ),
    position: { bottom: "15%", left: "25%" },
    rotation: 0,
    parallaxSpeed: 0.15,
    hideOnMobile: true,
    float: {
      x: [0, -8, 0, 8, 0],
      y: [0, 6, 10, 6, 0],
    },
    floatDuration: 7,
  },
  {
    id: "radio-bottom",
    animated: <AnimatedRadio delay={40} />,
    svg: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" strokeWidth="1.5" stroke="currentColor" />
      </svg>
    ),
    position: { bottom: "22%", right: "38%" },
    rotation: 0,
    parallaxSpeed: 0.18,
    hideOnMobile: true,
    float: {
      x: [0, 10, 0, -10, 0],
      y: [0, -4, -8, -4, 0],
    },
    floatDuration: 8,
  },
];

function FloatingElement({
  element,
  shouldReduceMotion,
}: {
  element: (typeof uiElements)[0];
  shouldReduceMotion: boolean | null;
}) {
  const content = element.animated && !shouldReduceMotion ? element.animated : element.svg;

  if (shouldReduceMotion) {
    return (
      <motion.div
        className={`absolute text-slate-300/70 dark:text-slate-700/70 pointer-events-none ${
          element.hideOnMobile ? "hidden md:block" : ""
        }`}
        style={{
          ...element.position,
          rotate: element.rotation,
        }}
      >
        {element.svg}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`absolute text-slate-300/70 dark:text-slate-700/70 pointer-events-none ${
        element.hideOnMobile ? "hidden md:block" : ""
      }`}
      style={element.position}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: element.float?.x,
        y: element.float?.y,
        rotate: element.float?.rotate || element.rotation,
      }}
      transition={{
        opacity: { duration: 0.8, delay: Math.random() * 0.5 },
        scale: { duration: 0.8, delay: Math.random() * 0.5 },
        x: {
          duration: element.floatDuration || 10,
          repeat: Infinity,
          ease: "easeInOut",
        },
        y: {
          duration: element.floatDuration || 10,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: element.floatDuration || 10,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      {content}
    </motion.div>
  );
}

export function FloatingUIElements() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {uiElements.map((element) => (
        <FloatingElement
          key={element.id}
          element={element}
          shouldReduceMotion={shouldReduceMotion}
        />
      ))}
    </div>
  );
}
