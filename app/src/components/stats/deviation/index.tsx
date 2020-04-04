import React from "react";
import cn from "classnames";

import Icon from "components/icon";

const iconName = (value: number) => {
  if (value < 0) return "arrowDown";
  if (value > 0) return "arrowUp";
  return "equals";
};

/* Display a value deviation (increment/decrement) */
const Deviation: React.FC<Props> = ({ value, unit, className }) => {
  return (
    <div
      className={cn(
        "flex items-center",
        {
          "text-color-danger": value < 0,
          "text-color-success": value > 0
        },
        className
      )}
      aria-label={`${value} ${unit || ""}`}
    >
      <Icon name={iconName(value)} position="left" /> {Math.abs(value)} {unit}
    </div>
  );
};

export interface Props {
  value: number;
  unit?: string;

  className?: string;
}

export default Deviation;
