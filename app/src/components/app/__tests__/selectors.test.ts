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
      layout: {
        config: [],
        isEditable: false
      },
      widgets: {
        "id-01": {},
        "id-02": {}
      }
    });
    expect(result.widgetIDs).toEqual(["id-01", "id-02"]);
  });
});
