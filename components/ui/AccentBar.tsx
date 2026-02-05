import { ComponentProps } from "react";

type AccentBarWidth = "sm" | "md" | "full";

interface AccentBarProps extends Omit<ComponentProps<"div">, "children"> {
  width?: AccentBarWidth;
  gradient?: string;
}

const widthClasses: Record<AccentBarWidth, string> = {
  sm: "w-8",
  md: "w-12",
  full: "w-full",
};

export function AccentBar({
  width = "md",
  gradient = "bg-gradient-to-b from-cyan-500 to-cyan-700",
  className = "",
  ...props
}: AccentBarProps) {
  return (
    <div
      className={`h-1 ${widthClasses[width]} ${gradient} ${className}`.trim()}
      aria-hidden="true"
      {...props}
    />
  );
}
