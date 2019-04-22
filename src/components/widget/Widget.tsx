import React from "react";
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
  type: string;
  options: OptionsProps;
  heightInPx: number;
  setOption: () => void;
}

const isGap = (type: string) => type === "empty";

/** Single widget within the dashboard */
export class Widget extends React.PureComponent<Props & ErrorProps> {
  render() {
    const {
      id,
      width,
      height,
      type,
      options,
      heightInPx,
      hasError,
      setOption
    } = this.props;
    const Component = widgetComponents[type];
    return (
      <div
        className={cn(`widget-${type}`, {
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
        {!hasError &&
          React.createElement(Component, { id, setOption, ...options })}
      </div>
    );
  }
}

const mapStateToProps = (id: string) => makeSelectWidget(id);

export default (id: string) =>
  connect(
    mapStateToProps(id),
    actionCreators // NICE: bind id to action creators
  )(withErrorHandling(Widget));
