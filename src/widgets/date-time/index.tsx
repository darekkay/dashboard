import React, { memo, useState } from "react";
import moment from "moment";

import useInterval from "common/hooks/useInterval";
import { WidgetProps } from "../index";

export const DateTime: React.FunctionComponent<WidgetProps> = memo(() => {
  const [momentDate, setMomentDate] = useState(moment());
  useInterval(() => setMomentDate(moment()), 1000);

  return (
    <time className="text-center p-4" dateTime={momentDate.toISOString()}>
      <div>{momentDate.format("HH:mm")}</div>
      <div>{momentDate.format("dddd")}</div>
      <div>{momentDate.format("LL")}</div>
    </time>
  );
});

export interface Props extends WidgetProps {}

export default DateTime;
