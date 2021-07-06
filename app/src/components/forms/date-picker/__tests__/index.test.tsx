import React from "react";

import { render } from "common/testing";

import DatePicker from "../index";

describe("<DatePicker />", () => {
  test("renders without errors", () => {
    const { container } = render(<DatePicker setValue={() => null} />);
    expect(container.querySelector("input[type='date']")).not.toBeNull();
  });
});
