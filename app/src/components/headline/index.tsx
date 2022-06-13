import React from "react";
import cn from "classnames";

const Headline = ({ level = 2, className, children }: Props) => {
  return React.createElement(
    `h${level}`,
    {
      className: cn("font-semibold", className),
    },
    children
  );
};

export interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export default Headline;
