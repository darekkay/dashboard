import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Button, { ButtonVariant } from "../index";

describe("<Button />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Button>Example</Button>);
  });

  it("renders a single button element", () => {
    expect(wrapper.find("button")).toHaveLength(1);
  });

  it("renders all variant/outline combinations", () => {
    wrapper.setProps({ variant: ButtonVariant.Primary });
    expect(wrapper.find(".btn-primary")).toHaveLength(1);

    wrapper.setProps({ variant: ButtonVariant.Secondary });
    expect(wrapper.find(".btn-secondary")).toHaveLength(1);

    wrapper.setProps({ variant: ButtonVariant.Primary, outline: true });
    expect(wrapper.find(".btn-primary-outline")).toHaveLength(1);

    wrapper.setProps({ variant: ButtonVariant.Secondary, outline: true });
    expect(wrapper.find(".btn-secondary-outline")).toHaveLength(1);
  });
});
