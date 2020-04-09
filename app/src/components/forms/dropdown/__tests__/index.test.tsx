import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Dropdown from "components/forms/dropdown/index";

describe("<Dropdown />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Dropdown setValue={() => null} options={[]} />);
  });

  it("renders without error", () => {
    expect(wrapper.isEmptyRender()).toBe(false);
  });
});
