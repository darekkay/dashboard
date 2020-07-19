import React from "react";

import { render, screen } from "common/testing";
import { widgetProps } from "common/utils/mock";

import Image from "../index";

describe("<Image />", () => {
  test("renders without errors", () => {
    render(
      <Image
        {...widgetProps}
        id="image-mock-id"
        url="https://example.com/example.jpg"
      />
    );
    expect(screen.queryByText("widget.common.unconfigured")).toBeNull();
  });

  test("doesn't render if the url is missing", () => {
    render(<Image {...widgetProps} id="image-mock-id" url="" />);
    expect(screen.getByText("widget.common.unconfigured")).toBeInTheDocument();
  });
});
