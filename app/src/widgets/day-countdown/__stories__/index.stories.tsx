import React from "react";
import dayjs from "dayjs";

import { widgetProps } from "common/utils/mock";
import { Widget } from "components/widget";
import { initialMeta } from "widgets/list";
import Section from "components/section";

export default {
  title: "Widgets/DayCountdown",
};

const commonProps = {
  ...widgetProps,
  type: "day-countdown",
  meta: initialMeta("day-countdown"),
} as const;

export const Variants = () => {
  const now = dayjs();
  return (
    <div className="my-6">
      <Section type="story" headline="Future event">
        <Widget
          {...commonProps}
          id="day-countdown-01"
          options={{
            eventName: "Christmas",
            eventDate: now.add(1, "day").format("YYYY-MM-DD"),
          }}
          data={{}}
        />
      </Section>
      <Section type="story" headline="Past event">
        <Widget
          {...commonProps}
          id="day-countdown-02"
          options={{
            eventName: "Christmas",
            eventDate: now.subtract(3, "day").format("YYYY-MM-DD"),
          }}
          data={{}}
        />
      </Section>
      <Section type="story" headline="Current event">
        <Widget
          {...commonProps}
          id="day-countdown-02"
          options={{
            eventName: "Christmas",
            eventDate: now.format("YYYY-MM-DD"),
          }}
          data={{}}
        />
      </Section>
    </div>
  );
};
