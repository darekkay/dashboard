import { getTypeFromId } from "../selectors";

describe("Widget selectors", () => {
  test("extract the widget type from the id", () => {
    expect(getTypeFromId("type-01")).toBe("type");
    expect(getTypeFromId("type-")).toBe("type");
    expect(getTypeFromId("type-dash-")).toBe("type-dash");
    expect(getTypeFromId("type-dash-suffix")).toBe("type-dash");
  });
});
