import React, { memo } from "react";
import moment from "moment";

import { WidgetProps } from "../index";

export const DateTime = memo(({ date }: Props) => {
  const momentDate = moment(date);
  return (
    <time dateTime={momentDate.toISOString()}>
      <div>{momentDate.format("HH:mm")}</div>
      <div>{momentDate.format("dddd")}</div>
      <div>{momentDate.format("LL")}</div>
    </time>
  );
});

export interface Props extends WidgetProps {
  date: number;
}

export default DateTime;
