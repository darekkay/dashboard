import React from "react";

import { render, screen } from "common/testing";

import WidgetOverlay, { Props as WidgetOverlayProps } from "../index";

describe("<WidgetOverlay />", () => {
  const renderWidgetOverlay = (props: Partial<WidgetOverlayProps>) =>
    render(
      <WidgetOverlay
        id="text-01"
        type="text"
        isWidgetMenuVisible={props.isWidgetMenuVisible ?? false}
        isDraggable={props.isDraggable ?? false}
        setDraggable={() => null}
        options={{}}
        setOptions={() => null}
        removeWidgetFromLayout={() => null}
        openConfigurationModal={() => null}
        {...props}
      />
    );

  test("doesn't render anything when no overlay or menu is visible", () => {
    const { container } = renderWidgetOverlay({
      isDraggable: false,
      isWidgetMenuVisible: false,
    });
    expect(container).toBeEmptyDOMElement();
  });

  test("renders a draggable section", () => {
    const { container } = renderWidgetOverlay({ isDraggable: true });
    expect(container.querySelector(".grid-draggable")).not.toBeNull();
  });

  test("renders a widget menu", () => {
    renderWidgetOverlay({ isWidgetMenuVisible: true });
    expect(screen.getByRole("menubar")).toBeInTheDocument();
  });
});
