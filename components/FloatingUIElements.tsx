"use client";

/**
 * Wireframe UI sketches drifting behind the hero headline.
 * Top-right only, so they never collide with the headline or the buttons.
 * Animation is CSS-driven, so prefers-reduced-motion (handled globally in
 * globals.css) stops them without any JS.
 */
export function FloatingUIElements() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-hidden opacity-80 md:block"
    >
      {/* Browser / input bar */}
      <div className="absolute right-[5%] top-[16%] animate-floatA">
        <svg width="180" height="50" viewBox="0 0 180 50" fill="none">
          <rect x="1" y="1" width="178" height="48" rx="4" strokeWidth="1.5" stroke="var(--chip)" />
          <line x1="14" y1="25" x2="100" y2="25" strokeWidth="1.5" stroke="var(--accent)" strokeLinecap="round" />
          <line x1="105" y1="15" x2="105" y2="35" strokeWidth="1.5" stroke="var(--accent)" strokeLinecap="round" />
        </svg>
      </div>

      {/* Toggle pill */}
      <div className="absolute right-[22%] top-[13%] animate-floatB">
        <svg width="56" height="30" viewBox="0 0 52 28" fill="none">
          <rect x="1" y="1" width="50" height="26" rx="13" strokeWidth="1.5" stroke="var(--chip)" />
          <circle cx="38" cy="14" r="8" fill="var(--accent)" />
        </svg>
      </div>

      {/* Document card */}
      <div className="absolute right-[11%] top-[30%] animate-floatC">
        <svg width="110" height="84" viewBox="0 0 130 100" fill="none">
          <rect x="1" y="1" width="128" height="98" rx="6" strokeWidth="1.5" stroke="var(--chip)" />
          <line x1="14" y1="24" x2="75" y2="24" strokeWidth="1.5" stroke="var(--chip)" strokeLinecap="round" />
          <line x1="14" y1="46" x2="116" y2="46" strokeWidth="1.5" stroke="var(--line)" strokeLinecap="round" />
          <line x1="14" y1="64" x2="100" y2="64" strokeWidth="1.5" stroke="var(--line)" strokeLinecap="round" />
          <rect x="14" y="76" width="40" height="12" rx="2" fill="var(--accent)" />
        </svg>
      </div>
    </div>
  );
}
