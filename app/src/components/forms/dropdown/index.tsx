import React from "react";
import cn from "classnames";

import Icon from "components/icon";

import "./styles.scss";
import Label from "components/forms/label";

const Dropdown: React.FC<Props> = ({
  className,
  label,
  options,
  getOptionLabel,
  setValue,
  children,
  ...domProps
}) => {
  return (
    <Label text={label}>
      <div
        className={cn(
          "forms-dropdown relative",
          {
            "bg-color-default": !className?.includes("bg-color-")
          },
          className
        )}
      >
        <select
          className="w-full pl-4 pr-7 py-3 border rounded bg-color-default text-color-default text-2"
          onChange={event => {
            setValue(event.target.value);
          }}
          {...domProps}
        >
          {options.map(option => (
            <option key={option} value={option}>
              {getOptionLabel ? getOptionLabel(option) : option}
            </option>
          ))}
          {children}
        </select>
        <Icon name="chevronDown" className="bg-color-inherit" />
      </div>
    </Label>
  );
};

export interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: string[];
  getOptionLabel?: (value: string) => string;
  setValue: (value: string) => void;
}

export default Dropdown;
