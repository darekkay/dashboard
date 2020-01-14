import React, { memo } from "react";
import { useTranslation } from "react-i18next";

import Button, { ButtonSize } from "components/button";
import widgets from "widgets";
import Icon from "../icon";

const availableWidgets = Object.keys(widgets);

const Drawer: React.FC<Props> = memo(({ addWidgetToLayout }) => {
  const { t } = useTranslation();
  return (
    <div
      className="p-4 bg-color-panel border-left"
      style={{ width: "280px" }}
    >
      <div className="p-3 text-center uppercase font-bold text-2">
        {t("widget.common.drawerHeadline")}
      </div>
      {availableWidgets.map(widget => (
        <div key={widget} className="flex justify-between py-2">
          {t(`widget.${widget}.name`)}
          <Button
            size={ButtonSize.Small}
            outline
            aria-label={t("widget.common.add", {
              widget: t(`widget.${widget}.name`)
            })}
            onClick={() => addWidgetToLayout(widget)}
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
