import React from "react";

import { render, screen } from "common/testing";
import Dropdown from "components/forms/dropdown/index";

describe("<Dropdown />", () => {
  test("renders without errors", () => {
    render(<Dropdown setValue={() => null} options={[]} />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  test("renders options", () => {
    render(<Dropdown setValue={() => null} options={["A", "B", "C"]} />);
    expect(screen.getAllByRole("option")).toHaveLength(3);
  });
});
