import React, { memo } from "react";

export interface Props {
  children: React.ReactNode;
  className?: string;
  url: string;
  title?: string;
  external?: boolean;
}

export const Link = memo((props: Props) => {
  const { className, url, title, external = true } = props;
  return (
    <a
      className={className}
      href={url}
      title={title}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {props.children}
    </a>
  );
});

export default Link;
