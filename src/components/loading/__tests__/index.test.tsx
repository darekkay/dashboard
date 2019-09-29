import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Loading from "../index";

describe("<Loading />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Loading />);
  });

  it("renders a spinner by default", () => {
    expect(wrapper.find(".spinner")).toHaveLength(1);
  });
});
