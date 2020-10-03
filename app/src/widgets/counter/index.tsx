import React from "react";
import { useTranslation } from "react-i18next";

import Button from "components/button";
import Icon from "components/icon";

import { WidgetProps } from "../index";
import { Props as ConfigurationProps } from "./configuration";

const Counter: React.FC<Props> = ({ id, value = 0, setData }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="mb-1 text-5 font-bold text-center">
        {t("number", { value })}
      </div>
      <div className="w-full flex items-center justify-around">
        <Button
          outline
          border={false}
          size="small"
          onClick={() => setData({ id, values: { value: value - 1 } })}
          aria-label={t("widget.counter.decrement")}
        >
          <Icon name="minus" />
        </Button>
        <Button
          outline
          border={false}
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

interface Props extends WidgetProps, ConfigurationProps {
  value?: number;
}

export default Counter;
