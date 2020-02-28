import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import _ from "lodash";

import { Layout } from "common/ducks/layout";
import { GRID } from "common/environment";
import makeWidget from "components/widget";
import WelcomePage from "components/welcome-page";
import { WidgetsState } from "components/widget/duck";

const ReactGridLayout = WidthProvider(Responsive);

export interface Props {
  layout: Layout;
  isLayoutEditable: boolean;
  widgetIDs: string[];
  saveLayout: (layout: Layout) => void;
  removeWidgetFromLayout: (widgetId: string) => void;
  importWidgets: (widgets: WidgetsState) => void;
  [key: string]: any;
}

const updateProps = ["layout", "isLayoutEditable"];

const makeWidgetMemoized = _.memoize(makeWidget);

/** A grid containing all the widgets */
class Dashboard extends React.Component<Props> {
  shouldComponentUpdate(nextProps: Readonly<Props>) {
    return (
      this.props.widgetIDs.length !== nextProps.widgetIDs.length ||
      updateProps.some(prop => this.props[prop] !== nextProps[prop])
    );
  }

  render() {
    const {
      layout,
      isLayoutEditable,
      widgetIDs,
      saveLayout,
      removeWidgetFromLayout,
      importWidgets
    } = this.props;
    if (widgetIDs.length === 0)
      return (
        <WelcomePage saveLayout={saveLayout} importWidgets={importWidgets} />
      );
    return (
      <ReactGridLayout
        className="layout"
        layouts={layout}
        breakpoints={{ mobile: 0, desktop: 768 }}
        cols={{ mobile: 1, desktop: GRID.COLUMNS_COUNT }}
        rowHeight={GRID.ROW_HEIGHT_PX}
        compactType={null}
        useCSSTransforms={false}
        isDraggable={isLayoutEditable}
        isResizable={isLayoutEditable}
        draggableCancel=".grid-undraggable"
        onLayoutChange={(__: any, allLayouts: Layout) => {
          saveLayout(allLayouts);
        }}
      >
        {widgetIDs.map((widgetID: string) =>
          // @ts-ignore
          React.createElement(makeWidgetMemoized(widgetID), {
            key: widgetID,
            isLayoutEditable,
            removeWidgetFromLayout
          })
        )}
      </ReactGridLayout>
    );
  }
}

export default Dashboard;
