import React from "react";
import clsx from "clsx";

import "./styles.scss";

export type ButtonVariant = "primary" | "secondary" | "danger" | "unstyled";

export type ButtonSize = "regular" | "small" | "auto";

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "regular",
      outline = false,
      border = true,
      style,
      ...domProps
    }: Props,
    ref
  ) => (
    <button
      className={clsx(
        "btn",
        `btn-${variant}${outline ? "-outline" : ""}`,
        `btn-${size}`,
        { "btn-border": border },
        "inline-flex",
        "items-center",
        "justify-center",
        "rounded",
        "cursor-pointer",
        "text-4",
        "no-underline",
        className
      )}
      style={style}
      type="button"
      {...domProps}
      ref={ref}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  outline?: boolean;
  border?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}

export default Button;
