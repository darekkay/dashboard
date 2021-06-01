import React from "react";
import dayjs from "dayjs";

import { render, screen } from "common/testing";
import { widgetProps } from "common/utils/mock";

import { DateTime } from "../index";

describe("<DateTime />", () => {
  test("renders the current date", () => {
    render(<DateTime {...widgetProps} timezone="auto" />);
    expect(screen.getByText(dayjs().format("dddd"))).toBeInTheDocument();
  });

  test("renders the current date for other timezones", () => {
    render(<DateTime {...widgetProps} timezone="Asia/Calcutta" />);
    expect(
      screen.getByText(dayjs().tz("Asia/Calcutta").format("HH:mm"))
    ).toBeInTheDocument();
  });
});
