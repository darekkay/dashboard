import React, { memo } from "react";

export interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
}

export const Link = memo((props: Props) => {
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
});

export default Link;
