import React, { memo, useState } from "react";
import moment from "moment";

import useInterval from "common/hooks/useInterval";

import { WidgetProps } from "../index";

export const DateTime: React.FC<WidgetProps> = memo(() => {
  const [momentDate, setMomentDate] = useState(moment());
  useInterval(() => setMomentDate(moment()), 1000);

  return (
    <time className="text-center p-4" dateTime={momentDate.toISOString()}>
      <div className="text-5 font-semibold">{momentDate.format("HH:mm")}</div>
      <div className="text-3">{momentDate.format("dddd")}</div>
      <div className="text-2">{momentDate.format("LL")}</div>
    </time>
  );
});

export interface Props extends WidgetProps {}

export default DateTime;
