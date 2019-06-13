import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Loading from "../index";

describe("<Loading />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Loading />);
  });

  it("renders without error", () => {
    expect(wrapper.find(".loading")).toHaveLength(1);
  });
});
