import React from "react";
import { shallow } from "enzyme";

import Icon from "../index";

describe("<Icon />", () => {
  it("renders a font awesome icon", () => {
    const wrapper = shallow(<Icon name="cog" />);
    expect(wrapper.find(".icon")).toHaveLength(1);
  });

  it("does not render unknown icons", () => {
    const throwFn = () => shallow(<Icon name="c01c4b" />);
    expect(throwFn).toThrow();
  });
});
