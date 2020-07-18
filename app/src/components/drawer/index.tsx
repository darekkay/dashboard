import React from "react";
import { useTranslation } from "react-i18next";
import _ from "lodash";

import Button from "components/button";
import widgets, { WidgetProperties } from "widgets";
import { categories } from "widgets/categories";
import Icon from "../icon";

const categoriesWithWidgets = _.groupBy(widgets, widget => widget.category);

const Drawer: React.FC<Props> = ({ addWidgetToLayout }) => {
  const { t } = useTranslation();
  return (
    <div className="p-4 bg-color-panel border-left" style={{ width: "280px" }}>
      <div className="sr-only">{t("widget.common.headline")}</div>
      {categories.map((category: string) => (
        <div className="mb-6" key={category}>
          <div className="p-2 text-center uppercase font-bold text-2">
            {t(`widget.category.${category}`)}
          </div>
          {categoriesWithWidgets[category].map(
            ({ widgetType: widget }: WidgetProperties) => (
              <div key={widget} className="flex justify-between py-2">
                {t(`widget.${widget}.name`)}
                <Button
                  size="small"
                  outline
                  border={false}
                  aria-label={t("widget.common.add", {
                    widget: t(`widget.${widget}.name`)
                  })}
                  onClick={() => addWidgetToLayout(widget)}
                >
                  <Icon name="plus" alt="" />
                </Button>
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export interface Props {
  addWidgetToLayout: (widgetName: string) => void;
}

export default Drawer;
