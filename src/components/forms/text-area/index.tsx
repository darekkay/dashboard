import React from "react";
import cn from "classnames";

import Label from "components/forms/label";

const TextArea: React.FC<Props> = ({
  label,
  className,
  setValue,
  ...domProps
}) => {
  return (
    <Label text={label}>
      <textarea
        className={cn(
          "py-1 px-3 w-full h-full border rounded resize-none text-3",
          { "bg-color-default": !className?.includes("bg-color-") },
          className
        )}
        onChange={event => {
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
