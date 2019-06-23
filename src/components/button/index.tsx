import React, { memo } from "react";
import cn from "classnames";

import "./styles.scss";

export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary"
}

export enum ButtonSize {
  Regular = "regular",
  Small = "small"
}

const Button = memo(
  ({
    children,
    className,
    type = ButtonType.Primary,
    size = ButtonSize.Regular,
    outline,
    disabled,
    onClick
  }: Props) => (
    <button
      className={cn(
        "btn",
        `btn-${type}${outline ? "-outline" : ""}`,
        `btn-${size}`,
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
);

export interface Props {
  children: React.ReactNode;
  className?: string;
  type?: ButtonType;
  size?: ButtonSize;
  outline?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export default Button;
