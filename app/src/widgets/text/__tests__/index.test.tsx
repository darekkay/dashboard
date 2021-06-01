import React from "react";

import { render, screen, userEvent } from "common/testing";
import { widgetProps } from "common/utils/mock";

import Text from "../index";

describe("<Text />", () => {
  test("updates the content on change", async () => {
    const content = "hello world";
    const setDataSpy = jest.fn();

    render(<Text {...widgetProps} content={content} setData={setDataSpy} />);
    const textbox = screen.getByRole("textbox", { name: "widget.text.name" });

    userEvent.type(textbox, "new");
    expect(setDataSpy).toHaveBeenCalledTimes(3);
  });
});
