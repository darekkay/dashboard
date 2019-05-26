import React from "react";
import RGL, { Layout, WidthProvider } from "react-grid-layout";

import makeWidget from "components/widget/Widget";

const ReactGridLayout = WidthProvider(RGL);

export interface Props {
  columns: number;
  layout: Layout[];
  isLayoutEditable: boolean;
  widgetIDs: string[];
  saveLayout: (layout: Layout[]) => void;
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
    /* TODO: responsive */
    return (
      <ReactGridLayout
        className="layout"
        layout={layout}
        cols={columns}
        rowHeight={100}
        compactType={null}
        isRearrangeable={false}
        isDraggable={isLayoutEditable}
        isResizable={isLayoutEditable}
        onLayoutChange={(layout: Layout[]) => {
          saveLayout(layout);
        }}
      >
        {widgetIDs.map(widgetID =>
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
