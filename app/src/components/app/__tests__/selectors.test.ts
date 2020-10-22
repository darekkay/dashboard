import selectComponentProps from "../selectors";

describe("App selector", () => {
  test("returns required props", () => {
    const result = selectComponentProps({
      config: {
        grid: {
          columns: 3,
          rows: 2,
        },
      },
      layout: {
        config: [],
        isEditable: false,
      },
      widgets: {
        "text-01": {},
        "image-02": {},
        "unknown-widget-03": {},
      },
    });
    expect(result.widgetIDs).toEqual(["text-01", "image-02"]);
  });
});
