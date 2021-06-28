import React from "react";

import { render, screen } from "common/testing";

import Header from "../index";

describe("<Header />", () => {
  test("renders without errors", () => {
    const { container } = render(
      <Header
        isFullscreen={false}
        addWidgetToLayout={() => null}
        toggleFullscreen={() => null}
      />
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(container.querySelector("header")).toBeInTheDocument();
  });
});
