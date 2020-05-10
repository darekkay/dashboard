import React from "react";

import { render, screen, userEvent } from "common/testing";

import { LanguageSelect } from "../index";

describe("<LanguageSelect />", () => {
  test("changes the language", () => {
    const changeLanguageSpy = jest.fn();
    render(<LanguageSelect language="de" changeLanguage={changeLanguageSpy} />);

    const dropdown = screen.getByRole("combobox");

    userEvent.selectOptions(dropdown, "de");
    expect(changeLanguageSpy).toHaveBeenCalledWith("de");

    userEvent.selectOptions(dropdown, "en");
    expect(changeLanguageSpy).toHaveBeenCalledWith("en");
  });
});
