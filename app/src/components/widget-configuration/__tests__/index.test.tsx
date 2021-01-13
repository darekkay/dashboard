import React from "react";

import { render, screen, userEvent } from "common/testing";
import widgets from "widgets";

import WidgetConfiguration, { Props } from "../index";

describe("<WidgetConfiguration />", () => {
  const renderWidgetConfiguration = (props: Partial<Props>) =>
    render(
      <WidgetConfiguration
        id="image-01"
        type="image"
        closeModal={() => {}}
        configuration={widgets.image.Configuration}
        isModalOpen
        options={{ url: "" }}
        setOptions={() => {}}
        {...props}
      />
    );

  test("renders without errors", () => {
    renderWidgetConfiguration({});
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  test("saves modal settings on save", async () => {
    const setOptions = jest.fn();
    renderWidgetConfiguration({ setOptions });

    expect(setOptions).not.toHaveBeenCalled();

    const imageSourceInput = screen.getByRole("textbox", {
      name: "widget.image.configuration.url",
    });
    userEvent.type(imageSourceInput, "https://example.com");

    const saveButton = screen.getByRole("button", { name: "common.save" });
    userEvent.click(saveButton);

    expect(setOptions).toHaveBeenCalledTimes(1);
  });

  test("discards modal settings on cancel", async () => {
    const setOptions = jest.fn();
    renderWidgetConfiguration({ setOptions });

    const imageSourceInput = screen.getByRole("textbox", {
      name: "widget.image.configuration.url",
    });
    userEvent.type(imageSourceInput, "https://example.com");

    const cancelButton = screen.getByRole("button", { name: "common.cancel" });
    userEvent.click(cancelButton);

    expect(setOptions).not.toHaveBeenCalled();
  });
});
