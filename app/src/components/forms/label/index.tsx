import React from "react";
import cn from "classnames";
import isEmpty from "lodash/isEmpty";

const Label: React.FC<Props> = ({ text, className, children, ...domProps }) => {
  if (isEmpty(text)) return <>{children}</>;
  return (
    <label
      className={cn("max-w-full w-full flex flex-col", className)}
      {...domProps}
    >
      <span className="mb-2 text-2 font-semibold">{text}</span>
      {children}
    </label>
  );
};

export interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text?: string;
  children?: React.ReactNode | React.ReactNode[];
}

export default Label;
