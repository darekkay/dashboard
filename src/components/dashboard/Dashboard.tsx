import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import { Layout } from "common/ducks/layout";
import makeWidget from "components/widget/Widget";

const ReactGridLayout = WidthProvider(Responsive);

export interface Props {
  columns: number;
  layout: Layout;
  isLayoutEditable: boolean;
  widgetIDs: string[];
  saveLayout: (layout: Layout) => void;
  [key: string]: any;
}

const updateProps = ["columns", "layout", "isLayoutEditable"];

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
      columns,
      layout,
      isLayoutEditable,
      widgetIDs,
      saveLayout
    } = this.props;
    return (
      <ReactGridLayout
        className="layout"
        layouts={layout}
        breakpoints={{ mobile: 0, desktop: 768 }}
        cols={{ mobile: 1, desktop: columns }}
        rowHeight={100}
        compactType={null}
        isRearrangeable={false}
        isDraggable={isLayoutEditable}
        isResizable={isLayoutEditable}
        onLayoutChange={(__: any, allLayouts: Layout) => {
          saveLayout(allLayouts);
        }}
      >
        {widgetIDs.map((widgetID: string) =>
          // @ts-ignore
          React.createElement(makeWidget(widgetID), {
            key: widgetID,
            isLayoutEditable
          })
        )}
      </ReactGridLayout>
    );
  }
}

export default Dashboard;
