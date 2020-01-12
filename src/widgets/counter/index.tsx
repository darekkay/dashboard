import React from "react";
import { useTranslation } from "react-i18next";

import Button, { ButtonSize } from "components/button";
import Icon from "components/icon";

import { WidgetProps } from "../index";

const Counter: React.FC<Props> = ({ id, value = 0, setData }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="mb-1 text-5 text-center">{value}</div>
      <div className="w-full flex items-center justify-around">
        <Button
          outline
          size={ButtonSize.Small}
          onClick={() => setData({ id, values: { value: value - 1 } })}
          aria-label={t("widget.counter.decrement")}
        >
          <Icon name="minus" />
        </Button>
        <Button
          outline
          size={ButtonSize.Small}
          onClick={() => setData({ id, values: { value: value + 1 } })}
          aria-label={t("widget.counter.increment")}
        >
          <Icon name="plus" />
        </Button>
      </div>
    </div>
  );
};

interface Props extends WidgetProps {
  value?: number;
}

export default Counter;
