export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ampersand-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="25"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="26"
        fontWeight="600"
        letterSpacing="-1"
        className="fill-slate-800 dark:fill-white"
      >
        Pixels
      </text>
      <text
        x="62"
        y="25"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="26"
        fontWeight="600"
        letterSpacing="-1"
        fill="url(#ampersand-gradient)"
      >
        &amp;
      </text>
      <text
        x="78"
        y="25"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="26"
        fontWeight="600"
        letterSpacing="-1"
        className="fill-slate-800 dark:fill-white"
      >
        Code
      </text>
    </svg>
  );
}
