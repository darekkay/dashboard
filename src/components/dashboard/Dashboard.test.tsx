import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Dashboard, { getWidgetHeightInPx } from "./Dashboard";

describe("<Dashboard />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Dashboard columns={3} rows={2} widgets={[]} />);
  });

  it("renders without error", () => {
    expect(wrapper.find(".dashboard")).toHaveLength(1);
  });

  it("renders widgets", () => {
    expect(wrapper.find("Widget")).toHaveLength(0);
    wrapper.setProps({
      widgets: [
        { width: 1, height: 1, type: "text" },
        { width: 2, height: 3, type: "text" }
      ]
    });
    expect(wrapper.find("Widget")).toHaveLength(2);
  });

  it("uses correct widget heights", () => {
    let result;
    result = getWidgetHeightInPx(12, 1, {
      dashboardGridGap: 15,
      dashboardMaxWidth: 1200
    });
    expect(result).toEqual(86.25); // magic number from browser dev tools

    result = getWidgetHeightInPx(12, 3, {
      dashboardGridGap: 15,
      dashboardMaxWidth: 1200
    });
    expect(result).toEqual(288.75); // magic number from browser dev tools
  });
});
