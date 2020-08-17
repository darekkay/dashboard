import _ from "lodash";

import { Widget } from "components/widget/duck";

import availableWidgets from "./list";

interface GridProps {
  x: number;
  y: number;
  width: number;
  height: number;
}

const widgets = {
  "date-time-01": {
    x: 7,
    y: 0,
    width: 3,
    height: 2,
    type: "date-time",
    data: {},
    options: {},
    meta: availableWidgets["date-time"].initialMeta,
  },
  "search-01": {
    x: 12,
    y: 0,
    width: 5,
    height: 2,
    type: "search",
    data: {},
    options: {
      pattern: "https://duckduckgo.com/?q=%s",
      title: "DuckDuckGo",
    },
    meta: availableWidgets.search.initialMeta,
  },
  "text-01": {
    x: 13,
    y: 2,
    width: 4,
    height: 4,
    type: "text",
    data: {
      content:
        "Rule #1\n\nAlways code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    },
    options: {},
    meta: availableWidgets.text.initialMeta,
  },
  "image-01": {
    x: 7,
    y: 2,
    width: 4,
    height: 4,
    type: "image",
    data: {},
    options: {
      url:
        "https://images.pexels.com/photos/162240/bull-calf-heifer-ko-162240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    meta: availableWidgets.image.initialMeta,
  },
  "totd-chemical-elements-01": {
    x: 11,
    y: 2,
    width: 2,
    height: 2,
    type: "totd-chemical-elements",
    data: {},
    options: {},
    meta: availableWidgets["totd-chemical-elements"].initialMeta,
  },
  "qr-code-01": {
    x: 10,
    y: 0,
    width: 2,
    height: 2,
    type: "qr-code",
    data: {},
    options: {
      content: "https://dashboard.darekkay.com/",
    },
    meta: availableWidgets["qr-code"].initialMeta,
  },
  "counter-01": {
    x: 11,
    y: 4,
    width: 2,
    height: 2,
    type: "counter",
    data: {},
    options: {},
    meta: availableWidgets.counter.initialMeta,
  },
  "cryptocurrencies-01": {
    x: 4,
    y: 0,
    width: 3,
    height: 2,
    type: "cryptocurrencies",
    data: {},
    options: {
      fiat: "eur",
      crypto: "bitcoin",
    },
    meta: availableWidgets.cryptocurrencies.initialMeta,
  },
  "github-stats-01": {
    x: 4,
    y: 2,
    width: 3,
    height: 3,
    type: "github-stats",
    data: {},
    options: {
      query: "darekkay/dashboard",
    },
    meta: availableWidgets["github-stats"].initialMeta,
  },
} as Record<string, Widget & GridProps>;

export const exampleWidgets = Object.entries(widgets).reduce(
  (accumulator, [key, widget]) => ({
    ...accumulator,
    [key]: _.omit(widget, ["height", "width", "x", "y"]),
  }),
  {}
);

export const exampleLayout = {
  mobile: Object.entries(widgets).map(([key, widget], index) => ({
    i: key,
    x: 0,
    y: index,
    w: 1,
    h: widget.height,
  })),

  desktop: Object.entries(widgets).map(([key, widget]) => ({
    i: key,
    x: widget.x,
    y: widget.y,
    w: widget.width,
    h: widget.height,
  })),
};
