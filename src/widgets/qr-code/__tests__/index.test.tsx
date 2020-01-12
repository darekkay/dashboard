import React from "react";
import { mount, ReactWrapper } from "enzyme";

import WidgetUnconfigured from "components/widget-unconfigured";
import { widgetProps } from "common/utils/mock";

import QrCode from "../index";

describe("<QrCode />", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <QrCode {...widgetProps} id="qr-code-mock-id" content="example" />
    );
  });

  it("renders without error", () => {
    expect(wrapper.find("canvas")).toHaveLength(1);
  });

  it("doesn't render if the content is missing", () => {
    wrapper.setProps({ content: undefined });
    expect(wrapper.find(WidgetUnconfigured)).toHaveLength(1);
  });
});
