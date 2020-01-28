import React from "react";
import { mount, ReactWrapper, shallow } from "enzyme";

import Menu, { MenuAction, MenuSeparator } from "../index";

describe("<Menu />", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <Menu icon="cog" title="title">
        <MenuAction text="Item 1" icon="cog" />
        <MenuSeparator />
        <MenuAction text="Item 2" icon="edit" />
      </Menu>
    );
  });

  it("renders required aria attributes", () => {
    expect(wrapper.find("[role='menu']")).toHaveLength(1);
    expect(wrapper.find("[role='menuitem']")).toHaveLength(2);
  });

  it("renders a separator", () => {
    expect(wrapper.find("hr")).toHaveLength(1);
  });

  it("doesn't allow MenuAction to be used outside of a Menu", () => {
    const throwFn = () => shallow(<MenuAction text="Item 1" icon="cog" />);
    expect(throwFn).toThrow();
  });
});
