import React from "react";

import Widget from "components/widget/Widget";
import variables, { Variables } from "../../common/variables";
import "./Dashboard.scss";

// make a 1x1 widget appear as a square at full width
export const getWidgetHeightInPx = (
  columns: number,
  widgetHeight: number,
  variables: Variables
) => {
  // calculate the width of a single 1x1 cell
  const totalGapSize = (columns - 1) * variables.dashboardGridGap;
  const singleCellWidth =
    (variables.dashboardMaxWidth - totalGapSize) / columns;

  // use the widget width and the column gap to calculate the real widget height
  const columnGapSize = (widgetHeight - 1) * variables.dashboardGridGap;
  return singleCellWidth * widgetHeight + columnGapSize;
};

export interface Props {
  columns: number;
  rows: number;
  widgets: {
    width: number;
    height: number;
  }[];
}

/** A grid containing all the widgets */
class Dashboard extends React.Component<Props> {
  render() {
    const { columns, rows, widgets } = this.props;
    return (
      <div
        className="dashboard"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr`,
          gridTemplateRows: `repeat(${rows}, auto`
        }}
      >
        {widgets &&
          widgets.map((widget, idx) => (
            <Widget
              key={idx}
              width={widget.width}
              height={widget.height}
              rowHeightInPx={getWidgetHeightInPx(
                columns,
                widget.height,
                variables
              )}
            />
          ))}
      </div>
    );
  }
}

export default Dashboard;
