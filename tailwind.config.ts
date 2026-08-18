import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // Body copy
        sans: ["var(--font-archivo)", "ui-sans-serif", "system-ui", "sans-serif"],
        // Headings and logo - always uppercase
        display: ["var(--font-archivo-black)", "Impact", "sans-serif"],
        // Labels, nav, buttons, tags, captions
        mono: ["var(--font-space-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        // Theme tokens - values live in app/globals.css (:root and .dark)
        bg: "var(--bg)",
        card: "var(--card)",
        line: "var(--line)",
        chip: "var(--chip)",
        ink: "var(--text)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        fill: "var(--fill)",
        onfill: "var(--onfill)",
      },
      letterSpacing: {
        display: "-0.02em",
        hero: "-0.025em",
        mono: "0.04em",
        label: "0.08em",
      },
      keyframes: {
        floatA: {
          "0%, 100%": { transform: "translate(0, 0) rotate(-6deg)" },
          "50%": { transform: "translate(6px, -14px) rotate(-4deg)" },
        },
        floatB: {
          "0%, 100%": { transform: "translate(0, 0) rotate(4deg)" },
          "50%": { transform: "translate(-8px, 10px) rotate(6deg)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        floatA: "floatA 11s ease-in-out infinite",
        floatB: "floatB 13s ease-in-out infinite",
        floatC: "floatB 12s ease-in-out infinite",
        blink: "blink 1.2s step-end infinite",
      },
    },
  },
  plugins: [typography],
};

export default config;
