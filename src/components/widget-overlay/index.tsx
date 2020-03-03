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
import WidgetConfiguration from "components/widget-configuration";
import widgets, { ValueUpdateAction } from "widgets";

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
  removeWidgetFromLayout
}) => {
  const { t } = useTranslation();

  const isWidgetConfigurable = widgets[type].configurable;

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

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

      {/* Configuration button */}
      {isWidgetConfigurable && isWidgetMenuVisible && (
        <div className="absolute -top-1 -right-1 mr-8 border bg-color-panel grid-undraggable">
          <Button
            size={ButtonSize.Small}
            variant={ButtonVariant.Unstyled}
            border={false}
            className="no-transition"
            aria-label={t(`widget.common.configuration`, {
              widget: t(`widget.${type}.name`)
            })}
            onClick={openModal}
          >
            <Icon name="cog" />
          </Button>
        </div>
      )}

      {/* Remove button */}
      {isWidgetMenuVisible && (
        <div className="absolute -top-1 -right-1 bg-color-panel border grid-undraggable">
          <Button
            size={ButtonSize.Small}
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

      {/* Configuration modal */}
      {isWidgetConfigurable && (
        <WidgetConfiguration
          id={id}
          type={type}
          configuration={widgets[type].Configuration}
          options={options}
          setOptions={setOptions}
          closeModal={closeModal}
          isModalOpen={isModalOpen}
        />
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
}

export default WidgetOverlay;
