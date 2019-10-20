import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Header from "../index";

describe("<Header />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Header isLayoutEditable={false} toggleLayoutEditable={() => null} />
    );
  });

  it("renders without error", () => {
    expect(wrapper.find("header")).toHaveLength(1);
  });
});
