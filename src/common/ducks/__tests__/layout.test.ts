import { Layout as ReactGridLayout } from "react-grid-layout";
import {
  initialState,
  reducerWithInitialState,
  actionCreators,
  LayoutState
} from "../layout";

const getInitialState = (widgets: ReactGridLayout[]) => {
  const layout = {
    mobile: widgets.map((widget, index) => ({
      ...widget,
      x: 0,
      y: index,
      w: 1
    })),
    desktop: widgets
  };
  return {
    isEditable: false,
    config: layout,
    nextWidgetId: 100
  };
};

const getLastWidget = (widgets: ReactGridLayout[]) =>
  widgets[widgets.length - 1];

describe("Layout duck", () => {
  it("saves the layout", () => {
    const updatedState = reducerWithInitialState()(
      initialState,
      actionCreators.saveLayout("mockLayout")
    );

    expect(updatedState.config).toEqual("mockLayout");
  });

  it("toggles the editing state", () => {
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

  it("places a new widget in the next available row", () => {
    const addWidgetToLayoutAction = (widgets: ReactGridLayout[]) =>
      reducerWithInitialState()(
        getInitialState(widgets),
        actionCreators.addWidgetToLayout("text")
      );

    let updatedState = addWidgetToLayoutAction([
      { i: "text-01", x: 0, y: 0, w: 1, h: 1 }
    ]);
    expect(getLastWidget(updatedState.config.desktop).y).toEqual(1);

    updatedState = addWidgetToLayoutAction([
      { i: "text-01", x: 0, y: 0, w: 1, h: 3 }
    ]);
    expect(getLastWidget(updatedState.config.desktop).y).toEqual(3);

    updatedState = addWidgetToLayoutAction([
      { i: "text-01", x: 0, y: 0, w: 1, h: 3 },
      { i: "text-02", x: 3, y: 3, w: 1, h: 3 }
    ]);
    expect(getLastWidget(updatedState.config.desktop).y).toEqual(6);

    updatedState = addWidgetToLayoutAction([]);
    expect(getLastWidget(updatedState.config.desktop).y).toEqual(0);
  });

  it("removes widgets from the dashboard", () => {
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
        { i: "text-02", x: 3, y: 3, w: 1, h: 3 }
      ],
      "text-01"
    );
    expect(updatedState.config.desktop.length).toEqual(1);
    expect(getLastWidget(updatedState.config.desktop).i).toEqual("text-02");

    updatedState = removeWidgetFromLayoutAction(
      [
        { i: "text-01", x: 0, y: 0, w: 1, h: 3 },
        { i: "text-02", x: 3, y: 3, w: 1, h: 3 }
      ],
      "text-03"
    );
    expect(updatedState.config.desktop.length).toEqual(2);
  });

  it("increments the nextWidgetId", () => {
    const incrementNextWidgetIdAction = (state: LayoutState) =>
      reducerWithInitialState()(state, actionCreators.incrementNextWidgetId());

    const updatedState = incrementNextWidgetIdAction(getInitialState([]));
    expect(updatedState.nextWidgetId).toEqual(101);
  });
});
