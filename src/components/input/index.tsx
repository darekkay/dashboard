import React, { memo } from "react";

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

const Input = memo(({ value, setValue, onEnter, onEscape }: Props) => {
  return (
    <input
      className="max-w-full w-100 m-2 p-2 border rounded text-color-default bg-color-default text-2"
      value={value}
      onChange={event => setValue(event.target.value)}
      onKeyUp={event => onKeyUp(event, onEnter, onEscape)}
    />
  );
});

export interface Props {
  value: string;
  setValue: (value: string) => void;
  onEnter?: (value: string) => void;
  onEscape?: (value: string) => void;
}

export default Input;
