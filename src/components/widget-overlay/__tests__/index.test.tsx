import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import WidgetOverlay from "../index";

describe("<WidgetOverlay />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <WidgetOverlay
        id="text-01"
        type="text"
        isWidgetMenuVisible
        isDraggable
        setDraggable={() => null}
        options={{}}
        setOptions={() => null}
        removeWidgetFromLayout={() => null}
      />
    );
  });

  it("renders without error", () => {
    expect(wrapper.isEmptyRender()).toBe(false);
    expect(wrapper.find(".grid-draggable")).toHaveLength(1);
  });

  it("doesn't render a drag handle when not draggable", () => {
    wrapper.setProps({ isDraggable: false });
    expect(wrapper.find(".grid-draggable")).toHaveLength(0);
  });
});
