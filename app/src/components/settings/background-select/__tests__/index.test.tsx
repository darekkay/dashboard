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

  test("toggles first built-in image when a custom image is selected", () => {
    const changeBackgroundSpy = jest.fn();
    render(
      <BackgroundSelect
        backgroundUrl="custom"
        changeBackgroundUrl={changeBackgroundSpy}
      />
    );
    const randomButton = screen.getByRole("button", { name: "common.random" });
    userEvent.click(randomButton);

    expect(changeBackgroundSpy).toHaveBeenCalledWith("/backgrounds/bg-01.jpg");
  });

  test("toggles next built-in image", () => {
    const changeBackgroundSpy = jest.fn();
    render(
      <BackgroundSelect
        backgroundUrl="/backgrounds/bg-09.jpg"
        changeBackgroundUrl={changeBackgroundSpy}
      />
    );
    const randomButton = screen.getByRole("button", { name: "common.random" });
    userEvent.click(randomButton);

    expect(changeBackgroundSpy).toHaveBeenCalledWith("/backgrounds/bg-10.jpg");
  });

  test("toggles first built-in image when last built-in image is selected", () => {
    const changeBackgroundSpy = jest.fn();
    render(
      <BackgroundSelect
        backgroundUrl="/backgrounds/bg-19.jpg"
        changeBackgroundUrl={changeBackgroundSpy}
      />
    );
    const randomButton = screen.getByRole("button", { name: "common.random" });
    userEvent.click(randomButton);

    expect(changeBackgroundSpy).toHaveBeenCalledWith("/backgrounds/bg-01.jpg");
  });
});
