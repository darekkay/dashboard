import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Footer from "./Footer";

describe("<Footer />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it("renders without error", () => {
    expect(wrapper.find("footer")).toHaveLength(1);
  });
});
