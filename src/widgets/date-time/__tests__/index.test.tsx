import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { DateTime } from "../index";

describe("<DateTime />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<DateTime date={Date.now()} />);
  });

  it("renders without error", () => {
    expect(wrapper.find("time")).toHaveLength(1);
  });
});
