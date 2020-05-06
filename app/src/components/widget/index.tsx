import React, { Suspense, useRef, useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import Measure from "react-measure";
import cn from "classnames";

import withErrorHandling, {
  State as ErrorProps
} from "common/hoc/withErrorHandling";
import useBooleanState from "common/hooks/useBooleanState";
import Loading from "components/loading";
import Icon from "components/icon";
import WidgetOverlay from "components/widget-overlay";
import WidgetError from "components/widget-error";
import WidgetConfiguration from "components/widget-configuration";
import widgets, { ValueUpdateAction } from "widgets";

import makeSelectWidget, { getTypeFromId } from "./selectors";
import { actionCreators, TriggerUpdateAction, WidgetMeta } from "./duck";

const initialDimensions = { width: 1, height: 1 };

export interface Dimensions {
  width: number;
  height: number;
}

export interface Props {
  id: string;
  type: string;
  options: Record<string, any>;
  data: Record<string, any>;
  meta: WidgetMeta;
  setOptions: ValueUpdateAction;
  setData: ValueUpdateAction;
  triggerUpdate: (action: TriggerUpdateAction) => void;
  removeWidgetFromLayout: (id: string) => void;
  className?: string;
  /** Required to inject the resize handle */
  children?: React.ReactNode;
}

/** Single widget within the dashboard */
export const Widget: React.FC<Props & ErrorProps> = props => {
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
  const headline = t(`widget.${type}.headline`, { ...options, ...data });
  const isWidgetConfigurable = widgets[type].configurable;

  const [dimensions, setDimensions] = useState<Dimensions>(initialDimensions);
  const [isDraggable, setDraggable] = useState(true);

  const [
    isWidgetMenuVisible,
    showWidgetMenu,
    ,
    setWidgetMenuVisible
  ] = useBooleanState(false);

  const [
    isConfigurationModalOpen,
    openConfigurationModal,
    closeConfigurationModal
  ] = useBooleanState(false);

  const widgetRef = useRef(null);

  return (
    <>
      <div
        className={cn(
          "widget",
          "flex",
          "flex-col",
          "border",
          "rounded",
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
        onFocus={showWidgetMenu}
        onBlur={event => {
          // The widget becomes draggable if neither of its children is focused
          // NOTE: relatedTarget is "null" in Firefox, if the target is an iframe, which makes the Website widget unusable
          const relatedTarget = event.relatedTarget as Element;
          if (widgetRef?.current) {
            // @ts-ignore
            const widgetNode = widgetRef.current as Element;
            const blurWithinParent = widgetNode.contains(relatedTarget);
            setDraggable(!blurWithinParent);
            setWidgetMenuVisible(blurWithinParent);
          }
        }}
        {...rest}
      >
        {headline && (
          <h3
            id={`widget-${id}-headline`}
            className="flex items-center m-0 py-1 px-2 text-2 font-semibold"
          >
            {meta.headlineIcon && (
              <Icon
                name={meta.headlineIcon}
                position="left"
                className="flex-shrink-0"
              />
            )}
            <span className="truncate">{headline}</span>
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
                className="flex flex-col items-center justify-center h-full overflow-hidden"
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
          openConfigurationModal={openConfigurationModal}
        />

        {/* react-grid-library uses children to inject the resize handler */}
        {children}
      </div>

      {/* Configuration modal */}
      {isWidgetConfigurable && (
        <WidgetConfiguration
          id={id}
          type={type}
          configuration={widgets[type].Configuration}
          options={options}
          setOptions={setOptions}
          closeModal={closeConfigurationModal}
          isModalOpen={isConfigurationModalOpen}
        />
      )}
    </>
  );
};

const mapStateToProps = (id: string) => makeSelectWidget(id);

export default (id: string) =>
  connect(mapStateToProps(id), {
    ...actionCreators,
    triggerUpdate: actionCreators.triggerUpdate(getTypeFromId(id))
  })(withErrorHandling(Widget));
