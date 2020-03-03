import React, { memo, Suspense, useRef, useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import Measure from "react-measure";
import cn from "classnames";

import withErrorHandling, {
  State as ErrorProps
} from "common/hoc/withErrorHandling";
import Loading from "components/loading";
import WidgetOverlay from "components/widget-overlay";
import WidgetError from "components/widget-error";
import widgets, { ValueUpdateAction } from "widgets";

import makeSelectWidget, { getTypeFromId } from "./selectors";
import { actionCreators, WidgetMeta } from "./duck";

const initialDimensions = { width: 1, height: 1 };

export interface Dimensions {
  width: number;
  height: number;
}

export interface Props {
  id: string;
  type: string;
  options: { [key: string]: any };
  data: { [key: string]: any };
  meta: WidgetMeta;
  setOptions: ValueUpdateAction;
  setData: ValueUpdateAction;
  triggerUpdate: (id: string) => void;
  removeWidgetFromLayout: (id: string) => void;
  className?: string;
  /** Required to inject the resize handle */
  children?: React.ReactNode;
}

/** Single widget within the dashboard */
export const Widget: React.FC<Props & ErrorProps> = memo(props => {
  const {
    id,
    type,
    options,
    data,
    meta,
    hasError,
    setOptions,
    setData,
    triggerUpdate,
    removeWidgetFromLayout,
    className,
    children,
    ...rest
  } = props;

  const { t } = useTranslation();
  const headline = t(`widget.${type}.headline`, options);

  const [dimensions, setDimensions] = useState<Dimensions>(initialDimensions);
  const [isDraggable, setDraggable] = useState(true);
  const [isWidgetMenuVisible, setWidgetMenuVisible] = useState(false);

  const widgetRef = useRef(null);

  return (
    <div
      className={cn(
        "widget",
        "flex",
        "flex-col",
        "border",
        "rounded",
        "overflow-hidden",
        "bg-color-panel",
        "relative",
        {
          error: hasError
        },
        className
      )}
      ref={widgetRef}
      tabIndex={0}
      aria-label={t(`widget.${type}.name`)}
      onFocus={event => setWidgetMenuVisible(true)}
      onBlur={event => {
        // The widget becomes draggable if neither of its children is focused
        if (widgetRef?.current) {
          // @ts-ignore
          const widgetNode = widgetRef.current as Element;
          const blurWithinParent = widgetNode.contains(
            event.relatedTarget as Element
          );
          setDraggable(!blurWithinParent);
          setWidgetMenuVisible(blurWithinParent);
        }
      }}
      {...rest}
    >
      {headline && (
        <h3
          id={`widget-${id}-headline`}
          className="m-0 py-1 px-2 text-2 font-normal"
        >
          {headline}
        </h3>
      )}

      {hasError && <WidgetError />}

      {!hasError && (
        <Measure
          bounds
          onResize={contentRect => {
            setDimensions(contentRect?.bounds || initialDimensions);
          }}
        >
          {({ measureRef }) => (
            <div
              ref={measureRef}
              className="flex flex-col items-center justify-center h-full"
            >
              <Suspense fallback={<Loading type="skeleton" />}>
                {React.createElement(widgets[type].Component, {
                  id,
                  setOptions,
                  setData,
                  triggerUpdate,
                  meta: {
                    ...meta,
                    dimensions
                  },
                  ...options,
                  ...data
                })}
              </Suspense>
            </div>
          )}
        </Measure>
      )}

      <WidgetOverlay
        id={id}
        type={type}
        options={options}
        setOptions={setOptions}
        isWidgetMenuVisible={isWidgetMenuVisible}
        isDraggable={isDraggable}
        setDraggable={setDraggable}
        removeWidgetFromLayout={removeWidgetFromLayout}
      />

      {/* react-grid-library uses children to inject the resize handler */}
      {children}
    </div>
  );
});

const mapStateToProps = (id: string) => makeSelectWidget(id);

export default (id: string) =>
  connect(mapStateToProps(id), {
    ...actionCreators,
    triggerUpdate: actionCreators.triggerUpdate(getTypeFromId(id))
  })(withErrorHandling(Widget));
