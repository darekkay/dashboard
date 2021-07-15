import React, { useState } from "react";
import cn from "classnames";

import Button from "components/button";
import Label from "components/forms/label";
import Icon from "components/icon";

const onKeyUp = (event: any, props: Props) => {
  if (event.key === "Enter" && props.onEnter) {
    props.onEnter(event.target.value);
  } else if (event.key === "Escape" && props.clearOnEscape) {
    props.setValue("");
  }
};

const Input: React.FC<Props> = (props) => {
  const {
    className,
    label,
    value,
    setValue,
    clearOnEscape,
    onEnter,
    ...domProps
  } = props;
  const [isFocused, setFocused] = useState(false);
  const clearValue = () => setValue("");
  return (
    <Label text={label}>
      <div
        className="flex items-center w-full relative"
        // replace with onFocusIn / onFocusOut when implemented in React:
        // https://github.com/facebook/react/issues/6410
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
      >
        <input
          className={cn(
            "w-full px-4 py-2 border rounded bg-default text-default",
            {
              "pr-7": isFocused,
            },
            className
          )}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          onKeyUp={(event) => onKeyUp(event, props)}
          value={value}
          type="text"
          {...domProps}
        />
        {value && isFocused && (
          <Button
            className="absolute right-0 h-full"
            size="small"
            variant="unstyled"
            border={false}
            onMouseDown={clearValue}
            aria-hidden
            tabIndex={-1}
          >
            <Icon name="times" />
          </Button>
        )}
      </div>
    </Label>
  );
};

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  setValue: (value: string) => void;
  onEnter?: (value: string) => void;
  clearOnEscape?: boolean;
}

export default Input;
