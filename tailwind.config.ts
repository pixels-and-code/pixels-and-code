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
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      colors: {
        // Pastel palette
        pastel: {
          blue: "#dbeafe",
          violet: "#ede9fe",
          teal: "#cffafe",
          rose: "#ffe4e6",
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
