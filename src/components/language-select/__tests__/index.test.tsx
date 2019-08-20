import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Button from "components/button";

import { LanguageSelect } from "../index";

describe("<LanguageSelect />", () => {
  let wrapper: ShallowWrapper;
  const changeLanguageSpy = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <LanguageSelect language="de" changeLanguage={changeLanguageSpy} />
    );
  });

  it("toggles theme when clicking the button", () => {
    wrapper.setProps({ language: "en" });

    wrapper.find(Button).simulate("click");
    expect(changeLanguageSpy).toHaveBeenCalledWith("de");

    wrapper.setProps({ language: "de" });
    wrapper.first().simulate("click");
    expect(changeLanguageSpy).toHaveBeenCalledWith("en");
  });
});
