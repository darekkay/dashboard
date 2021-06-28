import React from "react";
import { useTranslation } from "react-i18next";
import groupBy from "lodash/groupBy";

import widgets, { WidgetProperties } from "widgets";
import { categories } from "widgets/categories";
import { WidgetType } from "widgets/list";
import Icon from "components/icon";
import Link from "components/link";

const categoriesWithWidgets = groupBy(widgets, (widget) => widget.category);

const Drawer: React.FC<Props> = ({ addWidgetToLayout, onWidgetAdded }) => {
  const { t } = useTranslation();
  return (
    <div className="" style={{ marginLeft: "-2rem", marginRight: "-2rem" }}>
      <div className="visually-hidden">{t("widget.common.headline")}</div>
      {categories.map((category) => (
        <div key={category} className="mb-6 w-full">
          <h3 className="mb-4 px-6 text-4 font-bold">
            {t(`widget.category.${category}`)}
          </h3>

          <div className="space-y-1">
            {categoriesWithWidgets[category].map(
              ({ widgetType: widget }: WidgetProperties) => (
                <button
                  key={widget}
                  type="button"
                  className="flex flex-col items-start px-6 py-2 w-full border-0 bg-default hover:bg-offset focus:bg-offset text-left cursor-pointer"
                  onClick={() => {
                    addWidgetToLayout(widget);
                    onWidgetAdded();
                  }}
                >
                  <div className="flex items-center text-4 ">
                    <Icon
                      name="plusSquare"
                      position="left"
                      className="text-4"
                    />
                    {t(`widget.${widget}.name`)}
                  </div>
                  <div className="text-3 text-offset">
                    {t(`widget.${widget}.description`)}
                  </div>
                </button>
              )
            )}
          </div>
          <hr className="mt-6" />
        </div>
      ))}
      <div className="px-6">
        <Link
          className="inline-flex items-center"
          href="https://dashboard.darekkay.com/docs/widgets/"
          external
        >
          <Icon name="question" position="left" />
          {t("common.help")}
        </Link>
      </div>
    </div>
  );
};

export interface Props {
  addWidgetToLayout: (widgetType: WidgetType) => void;
  onWidgetAdded: () => void;
}

export default Drawer;
