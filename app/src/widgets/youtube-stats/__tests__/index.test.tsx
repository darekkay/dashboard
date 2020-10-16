import React from "react";
import { render, screen } from "@testing-library/react";

import { widgetProps } from "common/utils/mock";

import YoutubeStats from "../index";

describe("<YoutubeStats />", () => {
  test("renders without errors", () => {
    render(<YoutubeStats {...widgetProps} id="youtube-stats-mock-id" />);
    expect(
      screen.getByRole("TODO", { name: /todo text/i })
    ).toBeInTheDocument();
  });
});
