"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [announcement, setAnnouncement] = useState("");

  // Clear announcement after it's been read
  useEffect(() => {
    if (announcement) {
      const timer = setTimeout(() => setAnnouncement(""), 1000);
      return () => clearTimeout(timer);
    }
  }, [announcement]);

  // Dark is the default, so the first render matches the server output and is
  // corrected once ThemeProvider has read the applied theme off the document.
  const next = theme === "dark" ? "light" : "dark";

  const handleToggle = () => {
    toggleTheme();
    setAnnouncement(`${next.charAt(0).toUpperCase() + next.slice(1)} mode enabled`);
  };

  return (
    <>
      <button
        onClick={handleToggle}
        aria-label={`Switch to ${next} mode`}
        className="btn btn-secondary gap-2 px-[18px] py-[9px] text-xs text-muted hover:border-accent hover:text-accent"
      >
        <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
        <span>Switch to {next} mode</span>
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {announcement}
      </span>
    </>
  );
}
