import React, {
  Dispatch,
  SetStateAction,
  MouseEvent,
  useEffect,
  useState
} from "react";
import { useTranslation } from "react-i18next";

import Button, { ButtonSize, ButtonVariant } from "components/button";
import Icon from "components/icon";
import widgets, { ValueUpdateAction } from "widgets";

import "./styles.scss";

const MOUSE_MOVE_THRESHOLD = 3;

/* Minimal movement should trigger a click instead of a move event */
const isMouseMoved = (
  lastMouseDownPosition: { x: number; y: number },
  event: MouseEvent
) =>
  Math.abs(event.pageX - lastMouseDownPosition.x) > MOUSE_MOVE_THRESHOLD ||
  Math.abs(event.pageY - lastMouseDownPosition.y) > MOUSE_MOVE_THRESHOLD;

const WidgetOverlay: React.FC<Props> = ({
  id,
  type,
  options,
  setOptions,
  isWidgetMenuVisible,
  isDraggable,
  setDraggable,
  removeWidgetFromLayout,
  openConfigurationModal
}) => {
  const { t } = useTranslation();

  const isWidgetConfigurable = widgets[type].configurable;

  const [lastMouseDownPosition, setLastMouseDownPosition] = useState({
    x: 0,
    y: 0
  });
  const [lastMouseUpPosition, setLastMouseUpPosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    if (!isDraggable) {
      const element = document.elementFromPoint(
        lastMouseUpPosition.x,
        lastMouseUpPosition.y
      );
      element && (element as HTMLElement).focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDraggable]);

  return (
    <>
      {isDraggable && (
        <div
          className="widget-overlay absolute inset-0 cursor-move grid-draggable"
          onMouseDown={event => {
            setLastMouseDownPosition({ x: event.pageX, y: event.pageY });
          }}
          onMouseUp={event => {
            setLastMouseUpPosition({ x: event.pageX, y: event.pageY });
            setDraggable(isMouseMoved(lastMouseDownPosition, event));
          }}
        />
      )}

      {isWidgetMenuVisible && (
        <div className="button-bar absolute z-20 flex px-2 bg-color-panel border rounded">
          {/* Configuration button */}
          {isWidgetConfigurable && (
            <div className="bg-color-panel mr-1">
              <Button
                size={ButtonSize.Auto}
                variant={ButtonVariant.Unstyled}
                border={false}
                className="no-transition"
                aria-label={t(`widget.common.configuration`, {
                  widget: t(`widget.${type}.name`)
                })}
                onClick={openConfigurationModal}
              >
                <Icon name="cog" />
              </Button>
            </div>
          )}

          {/* Remove button */}
          {isWidgetMenuVisible && (
            <div className="bg-color-panel">
              <Button
                size={ButtonSize.Auto}
                variant={ButtonVariant.Unstyled}
                border={false}
                aria-label={t(`widget.common.remove`, {
                  widget: t(`widget.${type}.name`)
                })}
                onClick={() => removeWidgetFromLayout(id)}
              >
                <Icon name="trash" className="text-color-danger" />
              </Button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export interface Props {
  id: string;
  type: string;
  options: { [key: string]: any };
  setOptions: ValueUpdateAction;
  isWidgetMenuVisible: boolean;
  isDraggable: boolean;
  setDraggable: Dispatch<SetStateAction<boolean>>;
  removeWidgetFromLayout: (id: string) => void;
  openConfigurationModal: () => void;
}

export default WidgetOverlay;
