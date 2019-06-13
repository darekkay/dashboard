import React, { memo } from "react";
import cn from "classnames";

import "./styles.scss";

const Button = memo(
  ({ children, className, type = "primary", outline, onClick }: Props) => (
    <button
      className={cn(
        "btn",
        {
          [`btn-${type}${outline ? "-outline" : ""}`]: type
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
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
  onClick?: () => void;
}

export default Button;
