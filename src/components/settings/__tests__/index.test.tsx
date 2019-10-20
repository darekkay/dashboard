import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Settings from "../index";

describe("<Settings />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Settings />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
