import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Button, { ButtonMode } from "../index";

describe("<Button />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Button>Example</Button>);
  });

  it("renders a single button element", () => {
    expect(wrapper.find("button")).toHaveLength(1);
  });

  it("renders all mode/outline combinations", () => {
    wrapper.setProps({ mode: ButtonMode.Primary });
    expect(wrapper.find(".btn-primary")).toHaveLength(1);

    wrapper.setProps({ mode: ButtonMode.Secondary });
    expect(wrapper.find(".btn-secondary")).toHaveLength(1);

    wrapper.setProps({ mode: ButtonMode.Primary, outline: true });
    expect(wrapper.find(".btn-primary-outline")).toHaveLength(1);

    wrapper.setProps({ mode: ButtonMode.Secondary, outline: true });
    expect(wrapper.find(".btn-secondary-outline")).toHaveLength(1);
  });
});
