import _ from "lodash";

const widgets = {
  "date-time-01": {
    x: 0,
    y: 0,
    width: 2,
    height: 2,
    type: "date-time",
    data: {},
    options: {},
    meta: {}
  },
  "search-02": {
    x: 3,
    y: 0,
    width: 3,
    height: 1,
    type: "search",
    data: {},
    options: {
      pattern: "https://duckduckgo.com/?q=%s",
      title: "DuckDuckGo"
    },
    meta: {}
  },
  "text-03": {
    x: 7,
    y: 0,
    width: 5,
    height: 3,
    type: "text",
    data: {
      content: "Hello World!"
    },
    options: {},
    meta: {}
  },
  "totd-chemical-elements-01": {
    x: 2,
    y: 2,
    width: 1,
    height: 1,
    type: "totd-chemical-elements",
    data: {},
    options: {},
    meta: {
      updateCycle: { hours: 24 }
    }
  }
};

export const initialWidgets = Object.entries(widgets).reduce(
  (acc, [key, widget], index) => ({
    ...acc,
    [key]: _.omit(widget, ["height", "width", "x", "y"])
  }),
  {}
);

export const initialLayout = {
  mobile: Object.entries(widgets).map(([key, widget], index) => ({
    i: key,
    x: 0,
    y: index,
    w: 1,
    h: widget.height
  })),

  desktop: Object.entries(widgets).map(([key, widget]) => ({
    i: key,
    x: widget.x,
    y: widget.y,
    w: widget.width,
    h: widget.height
  }))
};
