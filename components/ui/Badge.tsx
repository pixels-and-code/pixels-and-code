import { ComponentProps } from "react";

type BadgeSize = "sm" | "md";

interface BadgeProps extends ComponentProps<"span"> {
  size?: BadgeSize;
}

const sizeClasses: Record<BadgeSize, string> = {
  sm: "px-2.5 py-[3px] text-[11px]",
  md: "px-3 py-1 text-xs",
};

/** Tag chip: mono, uppercase, hairline border */
export function Badge({
  size = "sm",
  className = "",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-[2px] border border-chip font-mono uppercase tracking-mono text-muted ${sizeClasses[size]} ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
}
