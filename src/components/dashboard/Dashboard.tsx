import React from "react";

import makeWidget from "components/widget/Widget";

import "./Dashboard.scss";

export interface Props {
  columns: number;
  rows: number;
  widgetIDs: string[];
}

/** A grid containing all the widgets */
class Dashboard extends React.Component<Props> {
  render() {
    const { columns, rows, widgetIDs } = this.props;
    return (
      <div
        className="dashboard"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr`,
          gridTemplateRows: `repeat(${rows}, auto`
        }}
      >
        {widgetIDs.map(widgetID =>
          // @ts-ignore
          React.createElement(makeWidget(widgetID), { key: widgetID })
        )}
      </div>
    );
  }
}

export default Dashboard;
