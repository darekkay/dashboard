import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { Widget } from "./Widget";
import { defaultOptions } from "./selectors";

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
        hasError={false}
      >
        <div />
      </Widget>
    );
  });

  it("renders without error", () => {
    expect(wrapper.find(".error")).toHaveLength(0);
  });

  it("renders errors", () => {
    wrapper.setProps({ hasError: true });
    expect(wrapper.find(".error")).toHaveLength(1);
  });

  it("renders gaps", () => {
    wrapper.setProps({ type: "empty" });
    expect(wrapper.find(".widget")).toHaveLength(0);
  });
});
