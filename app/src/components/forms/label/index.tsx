import React from "react";
import cn from "classnames";
import _ from "lodash";

const Label: React.FC<Props> = ({ text, className, children, ...domProps }) => {
  if (_.isEmpty(text)) return <>{children}</>;
  return (
    <label
      className={cn("max-w-full w-full flex flex-col", className)}
      {...domProps}
    >
      <span className="mb-2 text-2">{text}</span>
      {children}
    </label>
  );
};

export interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text?: string;
  children?: React.ReactNode | React.ReactNode[];
}

export default Label;
