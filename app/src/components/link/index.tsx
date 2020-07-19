import React from "react";

export const Link: React.FC<Props> = (props) => {
  const { external = true, ...domProps } = props;
  return (
    <a
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      {...domProps}
    >
      {props.children}
    </a>
  );
};

export interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
}

export default Link;
