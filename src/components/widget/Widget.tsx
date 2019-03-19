import React from "react";
import cn from "classnames";

import "./Widget.scss";

export interface Props {
  width: number;
  height: number;
  type: string;
  heightInPx: number;
  children: React.ReactNode;
}

const isGap = (type: string) => type === "empty";

/** Single widget within the dashboard */
class Widget extends React.Component<Props> {
  render() {
    const { width, height, type, heightInPx, children } = this.props;
    return (
      <div
        className={cn({ widget: !isGap(type) })}
        style={{
          gridRowStart: `span ${height}`,
          gridColumnStart: `span ${width}`,
          height: isGap(type) ? 0 : `${heightInPx}px`
        }}
      >
        {children}
      </div>
    );
  }
}

export default Widget;
