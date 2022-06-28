import React from "react";
import { useTranslation } from "react-i18next";

import Button from "components/button";
import Icon from "components/icon";

import type { WidgetProps } from "../index";
import type { WidgetOptions } from "./configuration";

const Counter = ({ id, value = 0, setData }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="mb-1 text-6 font-semibold text-center">
        {t("number", { value })}
      </div>
      <div className="w-full flex items-center justify-around">
        <Button
          outline
          size="small"
          onClick={() => setData({ id, values: { value: value - 1 } })}
          aria-label={t("widget.counter.decrement")}
        >
          <Icon name="minus" />
        </Button>
        <Button
          outline
          size="small"
          onClick={() => setData({ id, values: { value: value + 1 } })}
          aria-label={t("widget.counter.increment")}
        >
          <Icon name="plus" />
        </Button>
      </div>
    </div>
  );
};

interface Props extends WidgetProps, WidgetOptions {
  value?: number;
}

export default Counter;
