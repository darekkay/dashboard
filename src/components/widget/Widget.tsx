import React, { memo } from "react";
import { connect } from "react-redux";
import cn from "classnames";

import widgetComponents from "common/widgets";
import withErrorHandling, {
  State as ErrorProps
} from "common/hoc/withErrorHandling";

import makeSelectWidget from "./selectors";
import { actionCreators } from "./duck";

import "./Widget.scss";

export interface OptionsProps {
  align: "center" | "base";
}

export interface Props {
  id: string;
  width: number;
  height: number;
  x: number;
  y: number;
  type: string;
  options: OptionsProps;
  data: { [key: string]: any };
  heightInPx: number;
  setOption: () => void;
}

/** Single widget within the dashboard */
export const Widget = memo((props: Props & ErrorProps) => {
  const {
    id,
    width,
    height,
    x,
    y,
    type,
    options,
    data,
    heightInPx,
    hasError,
    setOption
  } = props;
  const Component = widgetComponents[type];
  return (
    <div
      className={cn("widget", `widget-${type}`, {
        "d-flex align-items-center justify-content-center text-center":
          options.align === "center",
        error: hasError
      })}
      style={{
        gridRow: `${y + 1} / span ${height}`,
        gridColumn: `${x + 1} / span ${width}`,
        height: `${heightInPx}px`
      }}
    >
      {hasError && "» Error «"}
      {!hasError &&
        React.createElement(Component, {
          id,
          setOption,
          ...options,
          ...data
        })}
    </div>
  );
});

const mapStateToProps = (id: string) => makeSelectWidget(id);

export default (id: string) =>
  connect(
    mapStateToProps(id),
    actionCreators // NICE: bind id to action creators
  )(withErrorHandling(Widget));
