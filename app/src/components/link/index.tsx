import React from "react";

export const Link = ({ external = true, children, ...domProps }: Props) => {
  return (
    <a
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      {...domProps}
    >
      {children}
    </a>
  );
};

export interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode | React.ReactNode[];
  external?: boolean;
}

export default Link;
