import React from "react";

import { render, screen, userEvent } from "common/testing";
import { widgetContentProps } from "common/utils/mock";

import Counter from "../index";

describe("<Counter />", () => {
  test("increments the value", async () => {
    const setData = jest.fn();
    render(<Counter {...widgetContentProps} setData={setData} value={5} />);
    userEvent.click(
      screen.getByRole("button", { name: "widget.counter.increment" })
    );

    expect(setData).toHaveBeenCalledWith({
      id: "widget-mock-id",
      values: { value: 6 },
    });
  });

  test("decrements a default value", async () => {
    const setData = jest.fn();
    render(<Counter {...widgetContentProps} setData={setData} />);
    userEvent.click(
      screen.getByRole("button", { name: "widget.counter.decrement" })
    );

    expect(setData).toHaveBeenCalledWith({
      id: "widget-mock-id",
      values: { value: -1 },
    });
  });
});
