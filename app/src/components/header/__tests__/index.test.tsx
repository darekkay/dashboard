import React from "react";
import { render } from "common/testing";

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

    // TODO: replace when the issue is fixed
    // "banner" role is currently broken: https://github.com/testing-library/dom-testing-library/issues/578
    // expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(container.querySelector("header")).toBeInTheDocument();
  });
});
