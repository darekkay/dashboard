import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import duration from "dayjs/plugin/duration";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(duration);
dayjs.extend(localizedFormat);

export interface Duration {
  years?: number;
  y?: number;

  months?: number;
  M?: number;

  days?: number;
  d?: number;

  hours?: number;
  h?: number;

  minutes?: number;
  m?: number;

  seconds?: number;
  s?: number;

  milliseconds?: number;
  ms?: number;
}

export default dayjs;
