import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Widget from "components/widget/Widget";
import Dashboard from "../Dashboard";

describe("<Dashboard />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Dashboard columns={3} rows={2} widgetIDs={["id-01", "id-02"]} />
    );
  });

  const shouldUpdate = ({
    columns,
    rows,
    widgetIDs
  }: {
    columns?: number;
    rows?: number;
    widgetIDs?: string[];
  }) =>
    // @ts-ignore
    wrapper.instance().shouldComponentUpdate({
      columns: columns || 3,
      rows: rows || 2,
      widgetIDs: widgetIDs || ["id-02", "id-01"]
    });

  xit("renders widgets", () => {
    // TODO: write tests for connected component
    expect(wrapper.find(Widget)).toHaveLength(2);
  });

  it("does not perform unnecessary re-renders", () => {
    expect(shouldUpdate({})).toBe(false);
    expect(
      shouldUpdate({ rows: 2, columns: 3, widgetIDs: ["id-02", "id-01"] })
    ).toBe(false);
    expect(shouldUpdate({ rows: 99 })).toBe(true);
    expect(shouldUpdate({ columns: 99 })).toBe(true);
    expect(shouldUpdate({ widgetIDs: ["id-01"] })).toBe(true);
  });
});
