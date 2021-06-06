import React, { memo, useState } from "react";
import dayjs from "dayjs";

import useInterval from "common/hooks/useInterval";

import { WidgetProps } from "../index";
import { WidgetOptions } from "./configuration";

export const DateTime: React.FC<Props> = memo(({ timezone }) => {
  const [date, setDate] = useState(dayjs());
  useInterval(() => setDate(dayjs()), 1000);

  const timeZoneDate = timezone === "auto" ? date : date.tz(timezone);
  return (
    <time
      className="text-center pt-3 pb-4 px-4"
      dateTime={timeZoneDate.toISOString()}
    >
      <div className="text-6 leading-tight font-semibold">
        {timeZoneDate.format("HH:mm")}
      </div>
      <div className="text-3 text-offset">{timeZoneDate.format("dddd")}</div>
      <div className="text-3">{timeZoneDate.format("LL")}</div>
    </time>
  );
});

DateTime.displayName = "DateTime";

interface Props extends WidgetProps, WidgetOptions {}

export default DateTime;
