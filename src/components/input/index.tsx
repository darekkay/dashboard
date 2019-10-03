import React, { memo } from "react";
import cn from "classnames";

const onKeyUp = (
  event: any,
  onEnter?: (value: string) => void,
  onEscape?: (value: string) => void
) => {
  if (event.key === "Enter" && onEnter) {
    onEnter(event.target.value);
  } else if (event.key === "Escape" && onEscape) {
    onEscape(event.target.value);
  }
};

const Input: React.FC<Props> = memo(
  ({ className, label, setValue, onEnter, onEscape, ...domProps }) => {
    return (
      <label className="max-w-full w-full flex flex-col">
        {label && <span className="mb-2 text-2">{label}</span>}
        <input
          className={cn(
            "w-full p-2 border rounded text-color-default bg-color-default text-2",
            className
          )}
          onChange={event => setValue(event.target.value)}
          onKeyUp={event => onKeyUp(event, onEnter, onEscape)}
          {...domProps}
        />
      </label>
    );
  }
);

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  setValue: (value: string) => void;
  onEnter?: (value: string) => void;
  onEscape?: (value: string) => void;
}

export default Input;
