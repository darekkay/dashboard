import React from "react";
import { shallow, ShallowWrapper  } from "enzyme";

import WidgetOverlay from "../index";

describe("<WidgetOverlay />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<WidgetOverlay />);
  });

  it("renders without error", () => {
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
