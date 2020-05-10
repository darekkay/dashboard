import React from "react";
import { render, screen, userEvent } from "common/testing";

import { widgetProps } from "common/utils/mock";

import Text from "../index";

describe("<Text />", () => {
  test("updates the content on change", async () => {
    const id = "text-mock-id";
    const content = "hello world";
    const setDataSpy = jest.fn();

    render(
      <Text {...widgetProps} id={id} content={content} setData={setDataSpy} />
    );
    const textbox = screen.getByRole("textbox", { name: "widget.text.name" });

    await userEvent.type(textbox, "new");
    expect(setDataSpy).toHaveBeenCalledTimes(3);
  });
});
