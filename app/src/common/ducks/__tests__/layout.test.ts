import { Layout as ReactGridLayout } from "react-grid-layout";

import {
  initialState,
  reducerWithInitialState,
  actionCreators,
  LayoutState,
} from "../layout";

const getInitialState = (widgets: ReactGridLayout[]) => {
  const layout = {
    mobile: widgets.map((widget, index) => ({
      ...widget,
      x: 0,
      y: index,
      w: 1,
    })),
    desktop: widgets,
  };
  return {
    isEditable: false,
    config: layout,
    nextWidgetId: 100,
  };
};

const getLastWidget = (widgets: ReactGridLayout[]) =>
  widgets[widgets.length - 1];

describe("Layout duck", () => {
  test("saves an empty layout", () => {
    const updatedState = reducerWithInitialState()(
      initialState,
      actionCreators.saveLayout({ desktop: [], mobile: [] })
    );

    expect(updatedState.config.desktop).toHaveLength(0);
    expect(updatedState.config.mobile).toHaveLength(0);
  });

  test("sorts the widgets by meaningful focus order", () => {
    const updatedState = reducerWithInitialState()(
      initialState,
      actionCreators.saveLayout({
        desktop: [
          { i: "text-03", x: 0, y: 1, w: 1, h: 1 },
          { i: "text-02", x: 3, y: 0, w: 1, h: 1 },
          { i: "text-01", x: 0, y: 0, w: 1, h: 1 },
        ],
        mobile: [],
      })
    );

    expect(updatedState.config.desktop).toEqual([
      { i: "text-01", x: 0, y: 0, w: 1, h: 1 },
      { i: "text-02", x: 3, y: 0, w: 1, h: 1 },
      { i: "text-03", x: 0, y: 1, w: 1, h: 1 },
    ]);
  });

  test("toggles the editing state", () => {
    let updatedState = reducerWithInitialState()(
      initialState,
      actionCreators.toggleLayoutEditable()
    );

    expect(updatedState.isEditable).toEqual(true);

    updatedState = reducerWithInitialState()(
      updatedState,
      actionCreators.toggleLayoutEditable()
    );

    expect(updatedState.isEditable).toEqual(false);
  });

  test("places a new widget in the next available row", () => {
    const addWidgetToLayoutAction = (widgets: ReactGridLayout[]) =>
      reducerWithInitialState()(
        getInitialState(widgets),
        actionCreators.addWidgetToLayout("text")
      );

    let updatedState = addWidgetToLayoutAction([
      { i: "text-01", x: 0, y: 0, w: 1, h: 1 },
    ]);
    expect(getLastWidget(updatedState.config.desktop).y).toEqual(1);

    updatedState = addWidgetToLayoutAction([
      { i: "text-01", x: 0, y: 0, w: 1, h: 3 },
    ]);
    expect(getLastWidget(updatedState.config.desktop).y).toEqual(3);

    updatedState = addWidgetToLayoutAction([
      { i: "text-01", x: 0, y: 0, w: 1, h: 3 },
      { i: "text-02", x: 3, y: 3, w: 1, h: 3 },
    ]);
    expect(getLastWidget(updatedState.config.desktop).y).toEqual(6);

    updatedState = addWidgetToLayoutAction([]);
    expect(getLastWidget(updatedState.config.desktop).y).toEqual(0);
  });

  test("removes widgets from the dashboard", () => {
    const removeWidgetFromLayoutAction = (
      widgets: ReactGridLayout[],
      id: string
    ) =>
      reducerWithInitialState()(
        getInitialState(widgets),
        actionCreators.removeWidgetFromLayout(id)
      );

    let updatedState = removeWidgetFromLayoutAction(
      [
        { i: "text-01", x: 0, y: 0, w: 1, h: 3 },
        { i: "text-02", x: 3, y: 3, w: 1, h: 3 },
      ],
      "text-01"
    );
    expect(updatedState.config.desktop).toHaveLength(1);
    expect(getLastWidget(updatedState.config.desktop).i).toEqual("text-02");

    updatedState = removeWidgetFromLayoutAction(
      [
        { i: "text-01", x: 0, y: 0, w: 1, h: 3 },
        { i: "text-02", x: 3, y: 3, w: 1, h: 3 },
      ],
      "text-03"
    );
    expect(updatedState.config.desktop).toHaveLength(2);
  });

  test("increments the nextWidgetId", () => {
    const incrementNextWidgetIdAction = (state: LayoutState) =>
      reducerWithInitialState()(state, actionCreators.incrementNextWidgetId());

    const updatedState = incrementNextWidgetIdAction(getInitialState([]));
    expect(updatedState.nextWidgetId).toEqual(101);
  });
});
