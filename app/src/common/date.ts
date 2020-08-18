import dayjs from "dayjs";

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
