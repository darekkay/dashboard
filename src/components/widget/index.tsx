import React, { memo, Suspense } from "react";
import { connect } from "react-redux";
import cn from "classnames";

import withErrorHandling, {
  State as ErrorProps
} from "common/hoc/withErrorHandling";
import widgets, { ValueUpdateAction } from "widgets/index";

import Loading from "../loading";

import makeSelectWidget from "./selectors";
import { actionCreators } from "./duck";

export interface Props {
  id: string;
  width: number;
  height: number;
  x: number;
  y: number;
  type: string;
  options: { [key: string]: any };
  data: { [key: string]: any };
  setOptionValue: ValueUpdateAction;
  setDataValue: ValueUpdateAction;
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
  const Component = widgets[type].component;

  return (
    <div
      className={cn(
        "widget",
        `widget-${type}`,
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "border",
        "rounded",
        "overflow-hidden",
        "text-color-widget",
        "bg-color-widget",
        {
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
      {!hasError && (
        <Suspense fallback={<Loading />}>
          {React.createElement(Component, {
            id,
            setOptionValue,
            setDataValue,
            ...options,
            ...data
          })}
        </Suspense>
      )}
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
