import React from "react";
import dayjs from "dayjs";

import { render, screen } from "common/testing";
import { widgetProps } from "common/utils/mock";

import { DateTime } from "../index";

describe("<DateTime />", () => {
  test("renders the current date", () => {
    render(<DateTime {...widgetProps} id="date-time-mock-id" />);
    expect(screen.getByText(dayjs().format("dddd"))).toBeInTheDocument();
  });
});
