import React from "react";
import cn from "classnames";

import withErrorHandling, {
  State as ErrorProps
} from "common/hoc/withErrorHandling";

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
export class Widget extends React.Component<Props & ErrorProps> {
  render() {
    const {
      width,
      height,
      type,
      options,
      heightInPx,
      hasError,
      children
    } = this.props;
    return (
      <div
        className={cn({
          widget: !isGap(type),
          "d-flex align-items-center justify-content-center text-center":
            options.align === "center",
          error: hasError
        })}
        style={{
          gridRowStart: `span ${height}`,
          gridColumnStart: `span ${width}`,
          height: isGap(type) ? 0 : `${heightInPx}px`
        }}
      >
        {hasError && "» Error «"}
        {!hasError && children}
      </div>
    );
  }
}

export const WidgetEnhanced = withErrorHandling(Widget);

export default Widget;
