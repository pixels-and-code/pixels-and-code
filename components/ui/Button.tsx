import Link from "next/link";
import { ComponentProps, forwardRef } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ComponentProps<"button">, keyof ButtonBaseProps> & {
    as?: "button";
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<ComponentProps<typeof Link>, keyof ButtonBaseProps> & {
    as: "link";
    href: string;
  };

type ButtonAsAnchor = ButtonBaseProps &
  Omit<ComponentProps<"a">, keyof ButtonBaseProps> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  ghost: "btn-ghost",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    as = "button",
    children,
    ...rest
  } = props;

  const classes = `btn ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  if (as === "link") {
    const { href, ...linkProps } = rest as Omit<ButtonAsLink, "as" | "variant" | "size" | "className" | "children">;
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href!}
        className={classes}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  if (as === "a") {
    const { href, ...anchorProps } = rest as Omit<ButtonAsAnchor, "as" | "variant" | "size" | "className" | "children">;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const buttonProps = rest as Omit<ButtonAsButton, "as" | "variant" | "size" | "className" | "children">;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...buttonProps}
    >
      {children}
    </button>
  );
});
