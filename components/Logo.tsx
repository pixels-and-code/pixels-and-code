export function Logo({
  className = "",
  size = "text-[17px]",
}: {
  className?: string;
  size?: string;
}) {
  return (
    <span
      className={`font-display uppercase tracking-display text-ink ${size} ${className}`.trim()}
      aria-hidden="true"
    >
      Pixels<span className="text-accent">&amp;</span>Code
    </span>
  );
}
