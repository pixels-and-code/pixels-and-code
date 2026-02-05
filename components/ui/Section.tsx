import { ComponentProps } from "react";

type SectionSpacing = "sm" | "md" | "lg";

interface SectionProps extends ComponentProps<"section"> {
  spacing?: SectionSpacing;
}

const spacingClasses: Record<SectionSpacing, string> = {
  sm: "py-16 md:py-20",
  md: "py-20 md:py-28",
  lg: "py-32 md:py-40",
};

export function Section({
  spacing = "lg",
  className = "",
  children,
  ...props
}: SectionProps) {
  return (
    <section className={`${spacingClasses[spacing]} ${className}`.trim()} {...props}>
      {children}
    </section>
  );
}
