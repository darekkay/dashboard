import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Widget from "components/widget/Widget";
import Dashboard from "../Dashboard";

describe("<Dashboard />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Dashboard columns={3} rows={2} widgetIDs={[]} />);
  });

  it("renders widgets", () => {
    expect(wrapper.find(Widget)).toHaveLength(0);
    wrapper.setProps({
      widgetsIDs: ["id-01", "id-02"]
    });
    // TODO: write tests for connected component
    // expect(wrapper.find(Widget)).toHaveLength(2);
  });
});
