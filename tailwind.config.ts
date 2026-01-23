import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      colors: {
        // Pastel palette
        pastel: {
          blue: "#dbeafe",
          violet: "#ede9fe",
          cyan: "#cffafe",
          rose: "#ffe4e6",
        },
      },
    },
  },
  plugins: [],
};

export default config;
