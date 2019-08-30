import React, { memo } from "react";
import { useTranslation } from "react-i18next";

import Button, { ButtonSize } from "components/button";
import { availableWidgetNames } from "widgets/index";
import Icon from "../icon";

/* TODO: render display name instead of slug */
const Drawer = memo(({ addWidgetToLayout }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="p-3 bg-color-default border" style={{ width: "250px" }}>
      <div className="p-3 text-center uppercase font-bold text-2">
        {t("widget.common.drawerHeadline")}
      </div>
      {availableWidgetNames.map(widgetName => (
        <div key={widgetName} className="flex justify-between py-2">
          {t(`widget.${widgetName}.name`)}
          <Button
            size={ButtonSize.Small}
            outline
            aria-label={t("widget.common.add", {
              widget: t(`widget.${widgetName}.name`)
            })}
            onClick={() => addWidgetToLayout(widgetName)}
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
