"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
    >
      {/* Center circle */}
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="currentColor"
        className="text-amber-500"
      />
      {/* Rays */}
      <g className="theme-toggle-sun-rays text-amber-400" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" />
        <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" />
        <line x1="4.93" y1="19.07" x2="7.05" y2="16.95" />
        <line x1="16.95" y1="7.05" x2="19.07" y2="4.93" />
      </g>
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
    >
      {/* Crescent moon */}
      <path
        className="theme-toggle-moon text-slate-600 dark:text-slate-300"
        d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9 9 0 1 0 20.354 15.354z"
        fill="currentColor"
      />
      {/* Star */}
      <path
        className="theme-toggle-star text-slate-500 dark:text-slate-400"
        d="M18 6l.5 1.5L20 8l-1.5.5L18 10l-.5-1.5L16 8l1.5-.5L18 6z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [announcement, setAnnouncement] = useState("");

  // Clear announcement after it's been read
  useEffect(() => {
    if (announcement) {
      const timer = setTimeout(() => setAnnouncement(""), 1000);
      return () => clearTimeout(timer);
    }
  }, [announcement]);

  const handleToggle = () => {
    toggleTheme();
    const newTheme = theme === "light" ? "dark" : "light";
    setAnnouncement(`${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} mode enabled`);
  };

  if (!mounted) {
    return <div className="h-11 w-11 p-2.5" aria-hidden="true" />;
  }

  const targetMode = theme === "light" ? "Dark" : "Light";

  return (
    <>
      <button
        onClick={handleToggle}
        className="group relative h-11 flex items-center justify-center rounded-full text-slate-600 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 w-11 md:hover:w-[5.5rem] md:hover:pl-3 md:hover:pr-4"
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        <span className="flex items-center gap-2">
          <span className="shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] md:group-hover:scale-110">
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </span>
          <span className="hidden md:block theme-toggle-text text-sm font-medium whitespace-nowrap overflow-hidden w-0 group-hover:w-auto">
            {targetMode}
          </span>
        </span>
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {announcement}
      </span>
    </>
  );
}
