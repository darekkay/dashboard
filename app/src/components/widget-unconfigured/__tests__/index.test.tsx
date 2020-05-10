import React from "react";
import { render, screen } from "common/testing";

import WidgetUnconfigured from "../index";

describe("<WidgetUnconfigured />", () => {
  test("renders without errors", () => {
    render(<WidgetUnconfigured type="image" />);
    expect(screen.getByText("widget.common.unconfigured")).toBeInTheDocument();
  });
});
