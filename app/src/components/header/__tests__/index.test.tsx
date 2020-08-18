import React from "react";

import { render, screen } from "common/testing";

import Header from "../index";

describe("<Header />", () => {
  test("renders without errors", () => {
    const { container } = render(
      <Header
        isLayoutEditable={false}
        toggleLayoutEditable={() => null}
        isFullscreen={false}
        toggleFullscreen={() => null}
      />
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(container.querySelector("header")).toBeInTheDocument();
  });
});
