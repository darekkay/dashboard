import { getWidgetHeightInPx } from "../selectors";

describe("Widget selectors", () => {
  it("use correct widget heights", () => {
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
