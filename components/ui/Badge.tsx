import { ComponentProps } from "react";

type BadgeVariant = "solid" | "outline";
type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps extends ComponentProps<"span"> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

const variantClasses: Record<BadgeVariant, string> = {
  solid: "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200",
  outline: "border border-slate-300 text-slate-500 dark:border-slate-600 dark:text-slate-400",
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-xs",
  lg: "px-4 py-1.5 text-sm font-medium",
};

export function Badge({
  variant = "outline",
  size = "md",
  className = "",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-block ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
}
