import { ComponentProps } from "react";

/**
 * Edge-to-edge content padding. The redesign has no max-width container:
 * sections run full-bleed with 28px of horizontal padding.
 */
export function Bleed({ className = "", children, ...props }: ComponentProps<"div">) {
  return (
    <div className={`px-7 ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
