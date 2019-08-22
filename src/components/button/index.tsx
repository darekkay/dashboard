import React, { memo } from "react";
import cn from "classnames";

import "./styles.scss";

export enum ButtonMode {
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
    mode = ButtonMode.Primary,
    size = ButtonSize.Regular,
    outline,
    ...domProps
  }: Props) => (
    <button
      className={cn(
        "btn",
        `btn-${mode}${outline ? "-outline" : ""}`,
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
  mode?: ButtonMode;
  size?: ButtonSize;
  outline?: boolean;
}

export default Button;
