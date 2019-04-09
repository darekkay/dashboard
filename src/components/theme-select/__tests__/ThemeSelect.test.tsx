import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { ThemeSelect } from "../ThemeSelect";

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
    wrapper.find("Button").simulate("click");
    expect(changeThemeSpy).toHaveBeenCalledWith("dark");

    wrapper.setProps({ theme: "dark" });
    wrapper.find("Button").simulate("click");
    expect(changeThemeSpy).toHaveBeenCalledWith("default");
  });
});
