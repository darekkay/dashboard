import React from "react";
import dayjs from "dayjs";

import { render, screen } from "common/testing";
import { widgetContentProps } from "common/utils/mock";

import { DateTime } from "../index";

describe("<DateTime />", () => {
  test("renders the current date", () => {
    render(<DateTime {...widgetContentProps} timezone="auto" />);
    expect(screen.getByText(dayjs().format("dddd"))).toBeInTheDocument();
  });

  test("renders the current date for other timezones", () => {
    render(<DateTime {...widgetContentProps} timezone="Asia/Calcutta" />);
    expect(
      screen.getByText(dayjs().tz("Asia/Calcutta").format("HH:mm"))
    ).toBeInTheDocument();
  });
});
