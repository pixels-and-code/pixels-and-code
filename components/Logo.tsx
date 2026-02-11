export function Logo({ className = "", size = "text-[26px]" }: { className?: string; size?: string }) {
  return (
    <span
      className={`font-semibold tracking-tight ${size} ${className}`}
      aria-hidden="true"
    >
      <span className="text-slate-800 dark:text-white">Pixels</span>
      <span className="bg-gradient-to-b from-teal-400 to-teal-700 bg-clip-text text-transparent">
        &
      </span>
      <span className="text-slate-800 dark:text-white">Code</span>
    </span>
  );
}
