import React, { memo, useState } from "react";
import dayjs from "dayjs";

import useInterval from "common/hooks/useInterval";

import { WidgetProps } from "../index";

export const DateTime: React.FC<WidgetProps> = memo(() => {
  const [date, setDate] = useState(dayjs());
  useInterval(() => setDate(dayjs()), 1000);

  return (
    <time className="text-center p-4" dateTime={date.toISOString()}>
      <div className="text-5 font-semibold">{date.format("HH:mm")}</div>
      <div className="text-3">{date.format("dddd")}</div>
      <div className="text-2">{date.format("LL")}</div>
    </time>
  );
});

DateTime.displayName = "DateTime";

export type Props = WidgetProps;

export default DateTime;
