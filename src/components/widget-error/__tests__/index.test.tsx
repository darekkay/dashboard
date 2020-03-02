import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import WidgetError from "../index";

describe("<WidgetError />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<WidgetError />);
  });

  it("renders without error", () => {
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
