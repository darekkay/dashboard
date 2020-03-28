import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import WidgetUnconfigured from "../index";

describe("<WidgetUnconfigured />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<WidgetUnconfigured type="image" />);
  });

  it("renders without error", () => {
    expect(wrapper).not.toBeNull();
  });
});
