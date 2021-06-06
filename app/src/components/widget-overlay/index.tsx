/* istanbul ignore file */
import React, { MouseEvent, TouchEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Button from "components/button";
import Icon from "components/icon";
import widgets, { ValueUpdateAction } from "widgets";
import { WidgetType } from "widgets/list";

import "./styles.scss";

const MOUSE_MOVE_THRESHOLD = 3;

/* Minimal movement should trigger a click instead of a move event */
const isMouseMoved = (
  lastMouseDownPosition: { x: number; y: number },
  coordinates: { x: number; y: number }
) => {
  return (
    Math.abs(coordinates.x - lastMouseDownPosition.x) > MOUSE_MOVE_THRESHOLD ||
    Math.abs(coordinates.y - lastMouseDownPosition.y) > MOUSE_MOVE_THRESHOLD
  );
};

/* Handle both mobile and desktop devices */
const eventCoordinates = (event: MouseEvent<any> | TouchEvent<any>) => {
  if ("pageX" in event)
    return {
      x: event.pageX,
      y: event.pageY,
    };
  if ("changedTouches" in event && event.changedTouches.length > 0) {
    return {
      x: event.changedTouches[0].pageX,
      y: event.changedTouches[0].pageY,
    };
  }
  return { x: 0, y: 0 };
};

const WidgetOverlay: React.FC<Props> = ({
  id,
  type,
  isWidgetMenuVisible,
  isDraggable,
  setDraggable,
  removeWidgetFromLayout,
  openConfigurationModal,
}) => {
  const { t } = useTranslation();

  const isWidgetConfigurable = widgets[type].configurable;

  const [lastMouseDownPosition, setLastMouseDownPosition] = useState({
    x: 0,
    y: 0,
  });
  const [lastMouseUpPosition, setLastMouseUpPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (!isDraggable) {
      const element = document.elementFromPoint(
        lastMouseUpPosition.x,
        lastMouseUpPosition.y
      );
      if (element) (element as HTMLElement).focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDraggable]);

  const onHoldDown = (event: MouseEvent<any> | TouchEvent<any>) => {
    setLastMouseDownPosition(eventCoordinates(event));
  };
  const onHoldUp = (event: MouseEvent<any> | TouchEvent<any>) => {
    const coordinates = eventCoordinates(event);
    setLastMouseUpPosition(coordinates);
    setDraggable(isMouseMoved(lastMouseDownPosition, coordinates));
  };

  return (
    <>
      {isDraggable && (
        <div
          className="widget-overlay absolute inset-0 cursor-move grid-draggable"
          onMouseDown={onHoldDown}
          onMouseUp={onHoldUp}
          onTouchStart={onHoldDown}
          onTouchEnd={onHoldUp}
        />
      )}

      {isWidgetMenuVisible && (
        <div
          role="menubar"
          className="button-bar absolute z-20 flex px-2 bg-default border rounded shadow-lg"
          aria-label={t("widget.common.headline")}
          aria-orientation="horizontal"
        >
          {/* Configuration button */}
          {isWidgetConfigurable && (
            <div className="bg-default mr-1">
              <Button
                role="menuitem"
                size="auto"
                variant="unstyled"
                border={false}
                className="no-transition"
                aria-label={t(`widget.common.configuration`, {
                  widget: t(`widget.${type}.name`),
                })}
                onClick={openConfigurationModal}
              >
                <Icon name="cog" />
              </Button>
            </div>
          )}

          {/* Remove button */}
          <div className="bg-default">
            <Button
              role="menuitem"
              size="auto"
              variant="unstyled"
              border={false}
              aria-label={t(`widget.common.remove`, {
                widget: t(`widget.${type}.name`),
              })}
              onClick={() => removeWidgetFromLayout(id)}
            >
              <Icon name="trash" className="text-danger" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export interface Props {
  id: string;
  type: WidgetType;
  options: Record<string, any>;
  setOptions: ValueUpdateAction;
  isWidgetMenuVisible: boolean;
  isDraggable: boolean;
  setDraggable: (value: boolean) => void;
  removeWidgetFromLayout: (id: string) => void;
  openConfigurationModal: () => void;
}

export default WidgetOverlay;
