import React from "react";
import cn from "classnames";

import Icon, { IconName } from "components/icon";

const iconName = (value: number): IconName => {
  if (value < 0) return "arrowDown";
  if (value > 0) return "arrowUp";
  return "equals";
};

const ariaLabel = (value: number, unit?: string, percentage?: number) => {
  let result = `${value}`;
  if (unit !== undefined) result += ` ${unit}`;
  if (percentage !== undefined) result += ` (${percentage}%)`;
  return result;
};

/* Display a value deviation (increment/decrement) */
const Deviation: React.FC<Props> = ({ value, unit, percentage, className }) => {
  return (
    <div
      className={cn(
        "flex items-center",
        {
          "text-color-danger": (percentage || value) < 0,
          "text-color-success": (percentage || value) > 0
        },
        className
      )}
      aria-label={ariaLabel(value, unit, percentage)}
    >
      <Icon name={iconName(percentage || value)} position="left" />{" "}
      {Math.abs(value)} {unit}
      {percentage && <> / {Math.abs(percentage)}%</>}
    </div>
  );
};

export interface Props {
  value: number;
  unit?: string;
  percentage?: number;

  className?: string;
}

export default Deviation;
