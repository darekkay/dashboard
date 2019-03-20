import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Widget, { defaultOptions } from "./Widget";

describe("<Widget />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Widget
        type="text"
        height={1}
        width={1}
        heightInPx={125}
        options={defaultOptions}
      >
        <div />
      </Widget>
    );
  });

  it("renders without error", () => {
    expect(wrapper.find(".widget")).toHaveLength(1);
  });

  it("renders gaps", () => {
    wrapper.setProps({ type: "empty" });
    expect(wrapper.find(".widget")).toHaveLength(0);
  });
});
