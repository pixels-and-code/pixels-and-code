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
      className={`text-sm font-semibold tracking-widest uppercase text-teal-700 dark:text-teal-400 ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
