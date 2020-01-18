import React from "react";
import { mount, ReactWrapper } from "enzyme";

import { widgetProps } from "common/utils/mock";

import ChemicalElements from "../index";

describe("<ChemicalElements />", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <ChemicalElements
        {...widgetProps}
        id="totd-chemical-elements-mock-id"
        symbol="V"
        atomicNumber="23"
        name="Vanadium"
        nameDE="Vanadium"
      />
    );
  });

  it("renders without error", () => {
    expect(wrapper.find("div[children='Vanadium']")).toHaveLength(1);
  });

  /* TODO: Write using react-hooks-testing-library or similar */
  xit("should trigger update", () => {
    const triggerUpdate = jest.fn();
    wrapper.setProps({
      meta: { updateCycle: { hours: 1 } },
      triggerUpdate
    });
    expect(triggerUpdate).toHaveBeenCalledTimes(1);
  });
});
