import React from "react";

import Label from "components/forms/label";

const DatePicker: React.FC<Props> = ({
  label,
  value,
  setValue,
  ...domProps
}) => {
  return (
    <Label text={label}>
      <input
        className="w-full px-4 py-2 border rounded bg-default text-default"
        type="date"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        {...domProps}
      />
    </Label>
  );
};

export interface Props {
  label?: string;
  value?: string;
  setValue: (value: string) => void;
}

export default DatePicker;
