import React from "react";

import { render, screen } from "common/testing";
import widgets from "widgets";

import Drawer from "../index";

describe("<Drawer />", () => {
  test("renders a button per available", () => {
    render(<Drawer addWidgetToLayout={() => null} />);
    expect(screen.getAllByRole("button")).toHaveLength(
      Object.keys(widgets).length
    );
  });
});
