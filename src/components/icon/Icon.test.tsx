import React from "react";
import { shallow } from "enzyme";

import Icon from "./Icon";

describe("<Icon />", () => {
  it("renders without error", () => {
    const wrapper = shallow(<Icon name="heart" />);
    expect(wrapper.find(".icon")).toHaveLength(1);
  });

  it("does not render unknown icons", () => {
    const throwFn = () => shallow(<Icon name="c01c4b" />);
    expect(throwFn).toThrow();
  });
});
