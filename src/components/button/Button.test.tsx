import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Button, { ButtonType } from "./Button";

describe("<Button />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Button>Example</Button>);
  });

  it("renders a single button element", () => {
    expect(wrapper.find("button")).toHaveLength(1);
  });

  it("renders all type/outline combinations", () => {
    wrapper.setProps({ type: ButtonType.Primary });
    expect(wrapper.find(".btn-primary")).toHaveLength(1);

    wrapper.setProps({ type: ButtonType.Secondary });
    expect(wrapper.find(".btn-secondary")).toHaveLength(1);

    wrapper.setProps({ type: ButtonType.Primary, outline: true });
    expect(wrapper.find(".btn-primary-outline")).toHaveLength(1);

    wrapper.setProps({ type: ButtonType.Secondary, outline: true });
    expect(wrapper.find(".btn-secondary-outline")).toHaveLength(1);
  });
});
