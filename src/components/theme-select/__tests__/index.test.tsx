import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { Theme, ThemeSelect } from "../index";

describe("<ThemeSelect />", () => {
  let wrapper: ShallowWrapper;
  const changeThemeSpy = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <ThemeSelect theme="default" changeTheme={changeThemeSpy} />
    );
  });

  it("changes the theme", () => {
    wrapper.setProps({ theme: "default" });
    wrapper
      .find(Theme)
      .at(0)
      .simulate("click");
    expect(changeThemeSpy).toHaveBeenCalledWith("default");

    wrapper
      .find(Theme)
      .at(1)
      .simulate("click");
    expect(changeThemeSpy).toHaveBeenCalledWith("dark");
  });
});
