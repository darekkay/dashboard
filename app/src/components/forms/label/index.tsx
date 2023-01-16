import React from "react";
import clsx from "clsx";
import isEmpty from "lodash/isEmpty";

const Label = ({ text, className, children, ...domProps }: Props) => {
  if (isEmpty(text)) return <>{children}</>;
  return (
    <label
      className={clsx("max-w-full w-full flex flex-col", className)}
      {...domProps}
    >
      <span className="mb-2 text-3 font-semibold">{text}</span>
      {children}
    </label>
  );
};

export interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text?: string;
  children?: React.ReactNode | React.ReactNode[];
}

export default Label;
