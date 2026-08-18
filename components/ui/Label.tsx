import { ComponentProps } from "react";

interface LabelProps extends ComponentProps<"p"> {
  as?: "p" | "span";
}

/** Accent mono eyebrow label, e.g. WORK / EXPERIENCE / ABOUT */
export function Label({
  as: Component = "p",
  className = "",
  children,
  ...props
}: LabelProps) {
  return (
    <Component
      className={`font-mono text-[13px] uppercase tracking-label text-accent ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
