import React from "react";
import cn from "classnames";

import Icon from "components/icon";
import Label from "components/forms/label";

import "./styles.scss";

const Dropdown = <T extends string>({
  className,
  label,
  options,
  getOptionLabel,
  setValue,
  children,
  ...domProps
}: Props<T>) => {
  return (
    <Label text={label}>
      <div
        className={cn(
          "forms-dropdown relative",
          {
            "bg-color-default": !className?.includes("bg-color-"),
          },
          className
        )}
      >
        <select
          className="w-full pl-4 pr-7 py-1 border rounded bg-color-default text-color-default"
          onChange={(event) => {
            setValue(event.target.value as T);
          }}
          {...domProps}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {getOptionLabel ? getOptionLabel(option) : option}
            </option>
          ))}
          {children}
        </select>
        <Icon
          name="chevronDown"
          className="absolute transform-center bg-color-inherit pointer-events-none"
        />
      </div>
    </Label>
  );
};

export interface Props<T extends string>
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: readonly T[];
  getOptionLabel?: (value: T) => string;
  setValue: (value: T) => void;
}

export default Dropdown;
