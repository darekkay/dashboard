import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import isEmpty from "lodash/isEmpty";

import WidgetUnconfigured from "components/widget-unconfigured";
import useInterval from "common/hooks/useInterval";

import { WidgetProps } from "../index";
import { WidgetOptions } from "./configuration";

const UPDATE_INTERVAL_MINUTES = 1 * 60 * 1000;

type TimeReference = "past" | "future" | "today";

const getTimeReference = (diffInDays: number): TimeReference => {
  if (diffInDays < 0) return "past";
  else if (diffInDays > 0) return "future";
  return "today";
};

const TimeDisplay = ({
  diffInDays,
  timeReference,
}: {
  diffInDays: number;
  timeReference: TimeReference;
}) => {
  const { t } = useTranslation();
  if (timeReference === "future" || timeReference === "past") {
    return (
      <div>
        <span className="text-5 font-semibold text-accent">{diffInDays}</span>
        <span className="ml-2 text-4 font-semibold">
          {t(`widget.day-countdown.${diffInDays === 1 ? "day" : "days"}`)}
        </span>
      </div>
    );
  } else {
    return (
      <div className="text-5 font-semibold text-accent">
        {t("widget.day-countdown.today")}
      </div>
    );
  }
};

const TransitionLabel = ({
  timeReference,
}: {
  timeReference: TimeReference;
}) => {
  const { t } = useTranslation();
  const suffix = {
    past: "since",
    future: "until",
    today: "is",
  }[timeReference];
  return (
    <span className="text-3 text-offset">
      {t(`widget.day-countdown.transition.${suffix}`)}
    </span>
  );
};

const DayCountdown: React.FC<Props> = ({ type, eventName, eventDate }) => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  useInterval(() => setCurrentDate(dayjs()), UPDATE_INTERVAL_MINUTES);

  if (isEmpty(eventDate)) return <WidgetUnconfigured type={type} />;

  const diffInDays = dayjs(eventDate)
    .startOf("day")
    .diff(currentDate.startOf("day"), "day");
  const timeReference = getTimeReference(diffInDays);

  return (
    <div className="flex flex-col items-center">
      <TimeDisplay
        diffInDays={Math.abs(diffInDays)}
        timeReference={timeReference}
      />
      <TransitionLabel timeReference={timeReference} />
      <div className="text-4">{eventName}</div>
    </div>
  );
};

interface Props extends WidgetProps, WidgetOptions {}

export default DayCountdown;
