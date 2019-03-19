import React from "react";
import cn from "classnames";

import "./Widget.scss";

export interface OptionsProps {
  align: "center" | "base";
}

export interface Props {
  width: number;
  height: number;
  type: string;
  options: OptionsProps;
  heightInPx: number;
  children: React.ReactNode;
}

export const defaultOptions: OptionsProps = {
  align: "center"
};

const isGap = (type: string) => type === "empty";

/** Single widget within the dashboard */
class Widget extends React.Component<Props> {
  render() {
    const { width, height, type, options, heightInPx, children } = this.props;
    return (
      <div
        className={cn({
          widget: !isGap(type),
          "d-flex align-items-center justify-content-center text-center":
            options.align === "center"
        })}
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
