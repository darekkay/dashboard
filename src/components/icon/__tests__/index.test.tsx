import React from "react";
import { shallow } from "enzyme";

import Icon from "../index";

describe("<Icon />", () => {
  it("renders a defined icon", () => {
    const wrapper = shallow(<Icon name="heart" />);
    expect(wrapper.find(".icon-heart")).toHaveLength(1);
  });

  it("does not render unknown icons", () => {
    const throwFn = () => shallow(<Icon name="c01c4b" />);
    expect(throwFn).toThrow();
  });
});
