import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import ChemicalElements from "../index";

describe("<ChemicalElements />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ChemicalElements
        id="totd-chemical-elements-mock-id"
        symbol="V"
        atomicNumber="23"
        name="Vanadium"
        meta={{}}
        setData={() => null}
        setOptions={() => null}
        triggerUpdate={() => null}
      />
    );
  });

  it("renders without error", () => {
    expect(wrapper.find("div[children='Vanadium']")).toHaveLength(1);
  });
});
