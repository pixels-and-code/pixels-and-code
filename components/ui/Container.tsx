import { ComponentProps } from "react";

type ContainerSize = "sm" | "md" | "lg" | "xl";

interface ContainerProps extends ComponentProps<"div"> {
  size?: ContainerSize;
}

const sizeClasses: Record<ContainerSize, string> = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

export function Container({
  size = "lg",
  className = "",
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={`mx-auto px-6 ${sizeClasses[size]} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
