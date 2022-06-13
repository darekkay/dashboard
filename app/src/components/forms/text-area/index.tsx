import React from "react";
import cn from "classnames";

import Label from "components/forms/label";

const TextArea = ({ label, className, setValue, ...domProps }: Props) => {
  return (
    <Label text={label}>
      <textarea
        className={cn(
          "py-2 px-4 w-full h-full border rounded resize-none bg-default",
          { "text-4": !className?.includes("text-") },
          className
        )}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        {...domProps}
      />
    </Label>
  );
};

export interface Props
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  setValue: (value: string) => void;
}

export default TextArea;
