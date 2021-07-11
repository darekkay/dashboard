import React, { FocusEventHandler, useRef, useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import useBooleanState from "common/hooks/useBooleanState";
import WidgetOverlay from "components/widget-overlay";
import WidgetConfiguration from "components/widget-configuration";
import { actions as layoutActions } from "common/ducks/layout";
import widgets, { ValueUpdateAction } from "widgets";
import { WidgetType } from "widgets/list";
import WidgetContent from "components/widget-content";

import makeSelectWidget, { getTypeFromId } from "./selectors";
import {
  actions,
  triggerUpdate as createTriggerUpdate,
  TriggerUpdateAction,
  WidgetMeta,
} from "./duck";

/** Single widget within the dashboard */
export const Widget: React.FC<Props> = (props) => {
  const {
    id,
    type,
    options,
    data,
    meta,
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

  const [isDraggable, setDraggable] = useState(true);

  const [isWidgetMenuVisible, showWidgetMenu, , setWidgetMenuVisible] =
    useBooleanState(false);

  const [
    isConfigurationModalOpen,
    openConfigurationModal,
    closeConfigurationModal,
  ] = useBooleanState(false);

  const widgetRef = useRef(null);

  const onBlur: FocusEventHandler = (event) => {
    // The widget becomes draggable if neither of its children is focused
    // NOTE: relatedTarget is "null" in Firefox, if the target is an iframe, which makes the Website widget unusable
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1545573
    const relatedTarget = event.relatedTarget as Element;
    if (widgetRef?.current) {
      // @ts-expect-error
      const widgetNode = widgetRef.current as Element;
      const blurWithinParent = widgetNode.contains(relatedTarget);
      setDraggable(!blurWithinParent && !(type === widgets.website.widgetType));
      setWidgetMenuVisible(blurWithinParent);
    }
  };

  return (
    <>
      <div
        ref={widgetRef}
        className={cn(
          "widget",
          "flex",
          "flex-col",
          "border-0",
          "rounded",
          "shadow-md",
          "bg-default",
          "relative",
          { "is-focused": isWidgetMenuVisible },
          className
        )}
        data-testid="widget"
        tabIndex={0}
        aria-label={t(`widget.${type}.name`)}
        onFocus={showWidgetMenu}
        onBlur={onBlur}
        {...rest}
      >
        <WidgetContent
          id={id}
          type={type}
          headline={headline}
          data={data}
          options={options}
          meta={meta}
          setOptions={setOptions}
          setData={setData}
          triggerUpdate={triggerUpdate}
        />

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

export interface Props {
  id: string;
  type: WidgetType;
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

export interface Dimensions {
  width: number;
  height: number;
}

const mapStateToProps = (id: string) => makeSelectWidget(id);

export default (id: string) =>
  connect(mapStateToProps(id), {
    setOptions: actions.setOptions,
    setData: actions.setData,
    removeWidgetFromLayout: layoutActions.removeWidgetFromLayout,
    triggerUpdate: createTriggerUpdate(getTypeFromId(id)),
  })(Widget);
