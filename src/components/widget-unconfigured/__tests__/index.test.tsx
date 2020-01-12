import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Icon from "components/icon";

import WidgetUnconfigured from "../index";

describe("<WidgetUnconfigured />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<WidgetUnconfigured type="image" />);
  });

  it("renders without error", () => {
    expect(wrapper.find(Icon)).toHaveLength(1);
  });
});
