import React from "react";

import { render, screen } from "common/testing";
import { widgetProps } from "common/utils/mock";

import Website from "../index";

describe("<Website />", () => {
  test("renders without errors", () => {
    render(
      <Website
        {...widgetProps}
        id="website-mock-id"
        url="https://example.com"
      />
    );
    expect(screen.getByTitle("website-mock-id")).toBeInTheDocument();
    expect(screen.queryByText("widget.common.unconfigured")).toBeNull();
  });

  test("doesn't render if the url is missing", () => {
    render(<Website {...widgetProps} id="website-mock-id" url="" />);
    expect(screen.getByText("widget.common.unconfigured")).toBeInTheDocument();
  });
});
