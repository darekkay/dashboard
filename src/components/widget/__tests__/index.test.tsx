import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import _ from "lodash";

import { Widget } from "../index";

describe("<Widget />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Widget
        id="mock-widget"
        type="text"
        options={{}}
        setOptions={() => null}
        data={{}}
        setData={() => null}
        meta={{}}
        triggerUpdate={_.noop}
        removeWidgetFromLayout={_.noop}
        hasError={false}
      />
    );
  });

  it("renders without error", () => {
    expect(wrapper.find(".error")).toHaveLength(0);
    expect(wrapper.find(".bg-color-dim")).toHaveLength(0);
  });

  it("renders errors", () => {
    wrapper.setProps({ hasError: true });
    expect(wrapper.find(".error")).toHaveLength(1);
  });
});
