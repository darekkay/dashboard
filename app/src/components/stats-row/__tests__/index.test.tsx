import React from "react";
import { render, screen } from "@testing-library/react";

import StatsRow from "../index";

describe("<StatsRow />", () => {
  test("renders without errors", () => {
    render(
      <StatsRow
        icon="star"
        labelKey="widget.github-stats.stars"
        value={12347}
      />
    );
    expect(screen.getByTestId("stats-row")).toBeInTheDocument();
  });

  test("doesn't render stats when no value is provided", () => {
    render(<StatsRow icon="star" labelKey="widget.github-stats.stars" />);
    expect(screen.queryByTestId("stats-row")).toBeNull();
  });
});
