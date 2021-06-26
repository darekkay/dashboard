import React from "react";

import { render, screen } from "common/testing";
import { widgetContentProps } from "common/utils/mock";

import Website from "../index";

describe("<Website />", () => {
  test("renders without errors", () => {
    render(<Website {...widgetContentProps} url="https://example.com" />);
    expect(screen.getByTitle("widget-mock-id")).toBeInTheDocument();
    expect(
      screen.queryByText("widget.common.unconfigured")
    ).not.toBeInTheDocument();
  });

  test("doesn't render if the url is missing", () => {
    render(<Website {...widgetContentProps} url="" />);
    expect(screen.getByText("widget.common.unconfigured")).toBeInTheDocument();
  });
});
