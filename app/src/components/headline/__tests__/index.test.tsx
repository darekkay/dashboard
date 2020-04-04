import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Headline from "../index";

describe("<Headline />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Headline level={2}>Default headline</Headline>);
  });

  it("renders without error", () => {
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
