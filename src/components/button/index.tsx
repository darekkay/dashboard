import React, { memo } from "react";
import cn from "classnames";

import "./styles.scss";

export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
  Danger = "danger",
  Unstyled = "unstyled"
}

export enum ButtonSize {
  Regular = "regular",
  Small = "small"
}

const Button: React.FC<Props> = memo(
  ({
    children,
    className,
    variant = ButtonVariant.Primary,
    size = ButtonSize.Regular,
    outline,
    ...domProps
  }) => (
    <button
      className={cn(
        "btn",
        `btn-${variant}${outline ? "-outline" : ""}`,
        `btn-${size}`,
        className
      )}
      {...domProps}
    >
      {children}
    </button>
  )
);

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  outline?: boolean;
}

export default Button;
