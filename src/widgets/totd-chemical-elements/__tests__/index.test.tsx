import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { widgetProps } from "common/utils/mock";

import ChemicalElements from "../index";

describe("<ChemicalElements />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ChemicalElements
        {...widgetProps}
        id="totd-chemical-elements-mock-id"
        symbol="V"
        atomicNumber="23"
        name="Vanadium"
      />
    );
  });

  it("renders without error", () => {
    expect(wrapper.find("div[children='Vanadium']")).toHaveLength(1);
  });
});
