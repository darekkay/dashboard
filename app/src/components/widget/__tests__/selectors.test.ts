import { getTypeFromId } from "../selectors";

describe("Widget selectors", () => {
  it("extract the widget type from the id", () => {
    expect(getTypeFromId("type-01")).toEqual("type");
    expect(getTypeFromId("type-")).toEqual("type");
    expect(getTypeFromId("type-dash-")).toEqual("type-dash");
    expect(getTypeFromId("type-dash-suffix")).toEqual("type-dash");
  });
});
