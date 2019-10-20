import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Menu from "components/menu";

import Header from "../index";

describe("<Header />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Header isLayoutEditable={false} toggleLayoutEditable={() => null} />
    );
  });

  it("renders without error", () => {
    expect(wrapper.find("header")).toHaveLength(1);
  });

  it("renders a menu only when the layout is not being edited", () => {
    expect(wrapper.find(Menu)).toHaveLength(1);
    wrapper.setProps({ isLayoutEditable: true });
    expect(wrapper.find(Menu)).toHaveLength(0);
  });
});
