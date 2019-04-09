import React from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import cn from "classnames";

import widgetComponents from "common/widgets";
import { makeSelectWidget } from "components/widget/selectors";

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
}

const isGap = (type: string) => type === "empty";

/** Single widget within the dashboard */
export class Widget extends React.Component<Props & ErrorProps> {
  render() {
    const { width, height, type, options, heightInPx, hasError } = this.props;
    const Component = widgetComponents[type];
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
        {!hasError && React.createElement(Component, options)}
      </div>
    );
  }
}

const mapStateToProps = (id: string) => makeSelectWidget(id);

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({}, dispatch);

export default (id: string) =>
  connect(
    mapStateToProps(id),
    mapDispatchToProps
  )(withErrorHandling(Widget));
