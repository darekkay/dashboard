import selectComponentProps from "../selectors";

describe("App selector", () => {
  it("returns required props", () => {
    const result = selectComponentProps({
      config: {
        grid: {
          columns: 3,
          rows: 2
        }
      },
      widgets: {
        "id-01": {},
        "id-02": {}
      }
    });
    expect(result.gridColumns).toEqual(3);
    expect(result.gridRows).toEqual(2);
    expect(result.widgetIDs).toEqual(["id-01", "id-02"]);
  });
});
