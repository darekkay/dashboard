import React from "react";
import cn from "classnames";

import "./Button.scss";

const Button = ({
  children,
  className,
  type = "primary",
  outline,
  ...rest
}: Props) => (
  <button
    className={cn(
      "btn",
      {
        [`btn-${type}${outline ? "-outline" : ""}`]: type
      },
      className
    )}
    {...rest}
  >
    {children}
  </button>
);

export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary"
}

export interface Props {
  children: React.ReactNode;
  className?: string;
  type?: "primary" | "secondary";
  outline?: boolean;
}

export default Button;
