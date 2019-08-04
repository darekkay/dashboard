import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Button from "components/button";

import { ThemeSelect } from "../index";

describe("<ThemeSelect />", () => {
  let wrapper: ShallowWrapper;
  const changeThemeSpy = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <ThemeSelect theme="default" changeTheme={changeThemeSpy} />
    );
  });

  it("toggles theme when clicking the button", () => {
    wrapper.setProps({ theme: "default" });

    wrapper.find(Button).simulate("click");
    expect(changeThemeSpy).toHaveBeenCalledWith("dark");

    wrapper.setProps({ theme: "dark" });
    wrapper.first().simulate("click");
    expect(changeThemeSpy).toHaveBeenCalledWith("default");
  });
});
