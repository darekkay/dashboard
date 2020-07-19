import React from "react";

import { render } from "common/testing";

import Label from "../index";

describe("<Label />", () => {
  test("renders without errors", () => {
    const { container } = render(<Label text="example" />);
    expect(container.querySelector("label")).not.toBeNull();
  });

  test("doesn't render a label if a text is missing", () => {
    const { container } = render(<Label text={undefined} />);
    expect(container).toBeEmptyDOMElement();
  });
});
