import React from "react";

import { render, screen } from "common/testing";

import WidgetError from "../index";

describe("<WidgetError />", () => {
  test("renders without errors", () => {
    render(<WidgetError />);
    expect(screen.getByText(/error.unknown/i)).toBeInTheDocument();
  });
});
