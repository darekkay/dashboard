import React from "react";

import { render, screen, userEvent } from "common/testing";

import { BackgroundSelect } from "../index";

describe("<BackgroundSelect />", () => {
  test("changes the background url", () => {
    const changeBackgroundSpy = jest.fn();
    render(
      <BackgroundSelect
        backgroundUrl=""
        changeBackgroundUrl={changeBackgroundSpy}
      />
    );

    const input = screen.getByRole("textbox");
    userEvent.paste(input, "https://example.com");
    expect(changeBackgroundSpy).toHaveBeenCalledWith("https://example.com");
  });
});
