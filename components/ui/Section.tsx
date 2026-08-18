import { ComponentProps } from "react";

type SectionSpacing = "sm" | "md" | "lg" | "none";

interface SectionProps extends ComponentProps<"section"> {
  spacing?: SectionSpacing;
  /** Hairline rule along the bottom edge, separating full-bleed sections */
  divided?: boolean;
}

const spacingClasses: Record<SectionSpacing, string> = {
  none: "",
  sm: "py-16 md:py-20",
  md: "py-20 md:py-[90px]",
  lg: "py-20 md:py-[110px]",
};

export function Section({
  spacing = "lg",
  divided = false,
  className = "",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={`${spacingClasses[spacing]} ${divided ? "border-b border-line" : ""} ${className}`.trim()}
      {...props}
    >
      {children}
    </section>
  );
}
