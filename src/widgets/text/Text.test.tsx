import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Text from "./Text";

describe("<Text />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Text />);
  });

  it("renders without error", () => {
    expect(wrapper.find(".text")).toHaveLength(1);
  });
});
