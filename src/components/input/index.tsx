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

const Input = memo(
  ({ className, setValue, onEnter, onEscape, ...domProps }: Props) => {
    return (
      <input
        className={cn(
          "max-w-full w-100 m-2 p-2 border rounded text-color-default bg-color-default text-2",
          className
        )}
        onChange={event => setValue(event.target.value)}
        onKeyUp={event => onKeyUp(event, onEnter, onEscape)}
        {...domProps}
      />
    );
  }
);

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  setValue: (value: string) => void;
  onEnter?: (value: string) => void;
  onEscape?: (value: string) => void;
}

export default Input;
