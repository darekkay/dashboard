import React from "react";

import { render, screen, userEvent } from "common/testing";
import { widgetProps } from "common/utils/mock";

import Counter from "../index";

describe("<Counter />", () => {
  test("increments the value", async () => {
    const setData = jest.fn();
    render(
      <Counter
        {...widgetProps}
        id="counter-mock-id"
        setData={setData}
        value={5}
      />
    );
    await userEvent.click(
      screen.getByRole("button", { name: "widget.counter.increment" })
    );

    expect(setData).toHaveBeenCalledWith({
      id: "counter-mock-id",
      values: { value: 6 },
    });
  });

  test("decrements the value", async () => {
    const setData = jest.fn();
    render(
      <Counter
        {...widgetProps}
        id="counter-mock-id"
        setData={setData}
        value={5}
      />
    );
    await userEvent.click(
      screen.getByRole("button", { name: "widget.counter.decrement" })
    );

    expect(setData).toHaveBeenCalledWith({
      id: "counter-mock-id",
      values: { value: 4 },
    });
  });
});
