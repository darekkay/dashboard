import React from "react";
import { render, screen } from "@testing-library/react";
import dayjs from "dayjs";

import { widgetContentProps } from "common/utils/mock";

import DayCountdown from "../index";

describe("<DayCountdown />", () => {
  test("doesn't render if the event date is missing", () => {
    render(<DayCountdown {...widgetContentProps} eventName="Christmas" />);
    expect(screen.getByText("widget.common.unconfigured")).toBeInTheDocument();
  });

  test("handles multiple days before event", () => {
    jest.setSystemTime(dayjs("2021-12-21").toDate());
    render(
      <DayCountdown
        {...widgetContentProps}
        eventName="Christmas"
        eventDate="2021-12-24 08:17"
      />
    );
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("widget.day-countdown.days")).toBeInTheDocument();
    expect(
      screen.getByText("widget.day-countdown.transition.until")
    ).toBeInTheDocument();
  });

  test("handles 1 day before event", () => {
    jest.setSystemTime(dayjs("2021-12-23").toDate());
    render(
      <DayCountdown
        {...widgetContentProps}
        eventName="Christmas"
        eventDate="2021-12-24 08:17"
      />
    );
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("widget.day-countdown.day")).toBeInTheDocument();
    expect(
      screen.getByText("widget.day-countdown.transition.until")
    ).toBeInTheDocument();
  });

  test("handles the day of the vent", () => {
    jest.setSystemTime(dayjs("2021-12-24").toDate());
    render(
      <DayCountdown
        {...widgetContentProps}
        eventName="Christmas"
        eventDate="2021-12-24 08:17"
      />
    );
    expect(screen.getByText("widget.day-countdown.today")).toBeInTheDocument();
    expect(
      screen.getByText("widget.day-countdown.transition.is")
    ).toBeInTheDocument();
  });

  test("handles 1 day after event", () => {
    jest.setSystemTime(dayjs("2021-12-25").toDate());
    render(
      <DayCountdown
        {...widgetContentProps}
        eventName="Christmas"
        eventDate="2021-12-24 08:17"
      />
    );
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("widget.day-countdown.day")).toBeInTheDocument();
    expect(
      screen.getByText("widget.day-countdown.transition.since")
    ).toBeInTheDocument();
  });

  test("handles multiple days after event", () => {
    jest.setSystemTime(dayjs("2021-12-27").toDate());
    render(
      <DayCountdown
        {...widgetContentProps}
        eventName="Christmas"
        eventDate="2021-12-24 08:17"
      />
    );
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("widget.day-countdown.days")).toBeInTheDocument();
    expect(
      screen.getByText("widget.day-countdown.transition.since")
    ).toBeInTheDocument();
  });
});
