import React from "react";
import { render, screen } from "@testing-library/react";

import { widgetProps } from "common/utils/mock";

import YoutubeStats from "../index";

describe("<YoutubeStats />", () => {
  test("renders without errors", () => {
    render(
      <YoutubeStats 
        {...widgetProps} 
        id="youtube-stats-mock-id" 
        subscriberCount={1}
        viewCount={2}
        url="https://www.youtube.com/c/mkbhd" 
      />);

    expect(screen.queryByText("widget.common.unconfigured")).toBeNull();
    expect(screen.queryByTestId("widget-error")).toBeNull();
  });
});
