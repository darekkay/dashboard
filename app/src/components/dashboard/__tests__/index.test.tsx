import React from "react";
import _ from "lodash";

import { renderConnected, screen } from "common/testing";
import { stateProps } from "common/utils/mock";

import Dashboard, { shouldUpdateComponent, Props } from "../index";

describe("<Dashboard />", () => {
  const defaultProps: Props = {
    layout: {
      mobile: [],
      desktop: [],
    },
    isLayoutEditable: false,
    saveLayout: _.noop,
    removeWidgetFromLayout: _.noop,
    importWidgets: _.noop,
    widgetIDs: ["search-01", "text-02"],
  };

  test("renders widgets", () => {
    renderConnected(<Dashboard {...defaultProps} />, {
      initialState: {
        ...stateProps,
        widgets: {
          "search-01": {
            type: "search",
            data: {},
            options: {
              pattern: "https://duckduckgo.com/?q=%s",
              title: "DuckDuckGo",
            },
            meta: {},
          },
          "text-02": {
            type: "text",
            data: {
              content:
                "Rule #1\n\nAlways code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
            },
            options: {},
            meta: {},
          },
        },
      },
    });

    expect(screen.getAllByTestId("widget")).toHaveLength(2);
    expect(screen.queryByText("welcome.message1")).toBeNull();
  });

  test("renders a welcome page", () => {
    renderConnected(<Dashboard {...defaultProps} widgetIDs={[]} />);
    expect(screen.getByText("welcome.message1")).toBeInTheDocument();
  });

  test("does not perform unnecessary re-renders", () => {
    expect(
      shouldUpdateComponent(defaultProps, {
        ...defaultProps,
        widgetIDs: ["text-02", "search-01"],
        saveLayout: () => 2,
      })
    ).toBe(false);

    expect(
      shouldUpdateComponent(defaultProps, {
        ...defaultProps,
        widgetIDs: ["search-01"],
      })
    ).toBe(true);
  });
});
