import React from "react";
import moment from "moment";
import { render, screen } from "common/testing";

import { widgetProps } from "common/utils/mock";

import { DateTime } from "../index";

describe("<DateTime />", () => {
  test("renders the current date", () => {
    render(<DateTime {...widgetProps} id="date-time-mock-id" />);
    // TODO: mock moment instead?
    expect(screen.getByText(moment().format("dddd"))).toBeInTheDocument();
  });
});
