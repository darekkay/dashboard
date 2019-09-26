import React, { memo } from "react";
import { useTranslation } from "react-i18next";

import Button, { ButtonSize } from "components/button";
import { availableWidgets } from "widgets";
import Icon from "../icon";

/* TODO: render display name instead of slug */
const Drawer = memo(({ addWidgetToLayout }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="p-3 bg-color-default border" style={{ width: "250px" }}>
      <div className="p-3 text-center uppercase font-bold text-2">
        {t("widget.common.drawerHeadline")}
      </div>
      {availableWidgets.map(widget => (
        <div key={widget.name} className="flex justify-between py-2">
          {t(`widget.${widget.name}.name`)}
          <Button
            size={ButtonSize.Small}
            outline
            aria-label={t("widget.common.add", {
              widget: t(`widget.${widget.name}.name`)
            })}
            onClick={() => addWidgetToLayout(widget.name)}
          >
            <Icon name="plus" alt="" />
          </Button>
        </div>
      ))}
    </div>
  );
});

export interface Props {
  addWidgetToLayout: (widgetName: string) => void;
}

export default Drawer;
