import { Widget } from "components/widget/duck";

import selectComponentProps from "../selectors";

const emptyWidget = (type: string) =>
  ({
    type,
    options: {},
    data: {},
    meta: {},
  } as Widget);

describe("App selector", () => {
  test("returns required props", () => {
    const result = selectComponentProps({
      config: {
        theme: "default",
        language: "en",
        backgroundUrl: "",
      },
      layout: {
        config: {
          desktop: [
            { i: "text-01", x: 0, y: 0, w: 1, h: 1 },
            { i: "image-02", x: 3, y: 0, w: 1, h: 1 },
          ],
          mobile: [],
        },
        nextWidgetId: 1,
      },
      widgets: {
        "text-01": emptyWidget("text"),
        "image-02": emptyWidget("image"),
        "unknown-widget-03": emptyWidget("unknown-widget"),
      },
    });
    expect(result.widgetIDs).toEqual(["text-01", "image-02"]);
  });
});
