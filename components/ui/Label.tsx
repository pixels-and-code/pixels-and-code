import { ComponentProps } from "react";

interface LabelProps extends ComponentProps<"p"> {
  as?: "p" | "span";
}

export function Label({
  as: Component = "p",
  className = "",
  children,
  ...props
}: LabelProps) {
  return (
    <Component
      className={`text-sm font-medium tracking-wide text-cyan-700 dark:text-cyan-400 ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
