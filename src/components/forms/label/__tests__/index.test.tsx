import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Label from "../index";

describe("<Label />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Label text="label" />);
  });

  it("renders without error", () => {
    expect(wrapper.find("label")).toHaveLength(1);
  });

  it("doesn't render a label if a text is missing", () => {
    wrapper.setProps({ text: undefined });
    expect(wrapper.find("label")).toHaveLength(0);
  });
});
