import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Section from "../index";

describe("<Section />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Section type="modal" />);
  });

  it("renders without error", () => {
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
