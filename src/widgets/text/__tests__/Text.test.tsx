import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Text from "../Text";

describe("<Text />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Text />);
  });

  it("renders a fixed text", () => {
    let content = "hello world";
    wrapper.setProps({ content });
    expect(wrapper.text()).toEqual(content);
  });
});
