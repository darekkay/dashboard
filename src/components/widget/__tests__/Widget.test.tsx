import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { Widget } from "../Widget";
import { defaultOptions } from "../selectors";

describe("<Widget />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Widget
        id="mock-widget"
        type="text"
        x={1}
        y={1}
        height={1}
        width={1}
        heightInPx={125}
        options={defaultOptions}
        data={{}}
        setOption={() => null}
        hasError={false}
      />
    );
  });

  it("renders without error", () => {
    expect(wrapper.find(".error")).toHaveLength(0);
  });

  it("renders errors", () => {
    wrapper.setProps({ hasError: true });
    expect(wrapper.find(".error")).toHaveLength(1);
  });
});
