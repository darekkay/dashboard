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

  it("changes the language", () => {
    wrapper
      .find(Button)
      .at(0)
      .simulate("click");
    expect(changeLanguageSpy).toHaveBeenCalledWith("en");

    wrapper
      .find(Button)
      .at(1)
      .simulate("click");
    expect(changeLanguageSpy).toHaveBeenCalledWith("de");
  });
});
