import React from "react";

import "./Widget.scss";

export interface Props {
  width: number;
  height: number;
  rowHeightInPx: number;
}

/** Single widget within the dashboard */
class Widget extends React.Component<Props> {
  render() {
    const { width, height, rowHeightInPx } = this.props;
    return (
      <div
        className="widget"
        style={{
          gridRowStart: `span ${height}`,
          gridColumnStart: `span ${width}`,
          height: `${rowHeightInPx}px`
        }}
      />
    );
  }
}

export default Widget;
