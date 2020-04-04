import React from "react";
import cn from "classnames";

const Headline: React.FC<Props> = ({ level = 2, className, children }) => {
  return React.createElement(
    `h${level}`,
    {
      className: cn("font-semibold", className)
    },
    children
  );
};

export interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  level?: number;
}

export default Headline;
