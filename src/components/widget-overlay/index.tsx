import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import Button, { ButtonSize, ButtonVariant } from "components/button";
import Icon from "components/icon";
import WidgetConfiguration from "components/widget-configuration";
import widgets, { ValueUpdateAction } from "widgets";

const WidgetOverlay: React.FC<Props> = ({
  id,
  type,
  options,
  setOptions,
  removeWidgetFromLayout,
  isLayoutEditable
}) => {
  const { t } = useTranslation();

  const isWidgetConfigurable = widgets[type].configurable;

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      {/* Dimmed background in edit mode */}
      {isLayoutEditable && <div className="absolute inset-0 bg-color-dim" />}

      {/* Configuration button */}
      {isWidgetConfigurable && (
        <div
          className={cn(
            "visibility-target absolute -top-1 -right-1 border grid-undraggable",
            {
              "bg-color-panel mr-8": isLayoutEditable,
              "bg-color-default": !isLayoutEditable
            }
          )}
        >
          <Button
            size={ButtonSize.Small}
            variant={ButtonVariant.Unstyled}
            border={false}
            className={cn("no-transition", {
              "visibility-target": !isLayoutEditable
            })}
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
      {isLayoutEditable && (
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

      {isWidgetConfigurable && (
        <WidgetConfiguration
          id={id}
          type={type}
          configuration={widgets[type].Configuration}
          options={options}
          setOptions={setOptions}
          closeModal={closeModal}
          isModalOpen={isModalOpen}
        ></WidgetConfiguration>
      )}
    </>
  );
};

export interface Props {
  id: string;
  type: string;
  options: { [key: string]: any };
  setOptions: ValueUpdateAction;
  removeWidgetFromLayout: (id: string) => void;
  isLayoutEditable: boolean;
}

export default WidgetOverlay;
