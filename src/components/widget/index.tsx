import React, { memo } from "react";
import { connect } from "react-redux";
import cn from "classnames";

import widgetComponents from "common/widgets";
import withErrorHandling, {
  State as ErrorProps
} from "common/hoc/withErrorHandling";

import makeSelectWidget from "./selectors";
import { actionCreators } from "./duck";

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
  setOptionValue: () => void;
  setDataValue: () => void;
  isLayoutEditable: boolean;
  className?: string;
  children?: React.ReactNode;
}

/** Single widget within the dashboard */
export const Widget = memo((props: Props & ErrorProps) => {
  const {
    id,
    type,
    options,
    data,
    hasError,
    setOptionValue,
    setDataValue,
    isLayoutEditable,
    className,
    children,
    ...rest
  } = props;
  const Component = widgetComponents[type];
  return (
    <div
      className={cn(
        "widget",
        `widget-${type}`,
        "border",
        "rounded",
        "overflow-hidden",
        "text-color-widget",
        "bg-color-widget",
        {
          "flex flex-col items-center justify-center text-center":
            options.align === "center",
          error: hasError
        },
        className
      )}
      {...rest}
    >
      {hasError && "» Error «"}
      {isLayoutEditable && (
        <div className="absolute inset-0 bg-color-widget-dim" />
      )}
      {!hasError &&
        React.createElement(Component, {
          id,
          setOptionValue,
          setDataValue,
          ...options,
          ...data
        })}
      {children}
    </div>
  );
});

const mapStateToProps = (id: string) => makeSelectWidget(id);

export default (id: string) =>
  connect(
    mapStateToProps(id),
    actionCreators // NICE: bind id to action creators
  )(withErrorHandling(Widget));
