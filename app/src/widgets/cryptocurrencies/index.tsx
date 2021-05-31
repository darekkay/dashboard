import React from "react";
import { useTranslation } from "react-i18next";

import useTriggerUpdate from "common/hooks/useTriggerUpdate";
import Deviation from "components/stats/deviation";

import { WidgetProps } from "../index";
import { WidgetOptions } from "./configuration";

export { saga } from "./sagas";

const Cryptocurrencies: React.FC<Props> = ({
  id,
  crypto,
  fiat,
  imageUrl,
  currentPrice,
  last24h,
  meta,
  triggerUpdate,
}) => {
  useTriggerUpdate({ id, params: { crypto, fiat }, meta, triggerUpdate }, [
    crypto,
    fiat,
  ]);
  const { t } = useTranslation();
  return (
    <div
      className="flex flex-col items-center text-center"
      data-testid="widget-cryptocurrencies"
    >
      {imageUrl && (
        <div className="mb-1" style={{ width: "2rem", height: "2rem" }}>
          <img src={imageUrl} alt={crypto} />
        </div>
      )}
      {currentPrice && (
        <div className="text-5 font-semibold">
          {t("number", { value: currentPrice })}
          <span className="ml-2 text-2 uppercase text-color-offset">
            {fiat}
          </span>
        </div>
      )}
      {last24h && (
        <Deviation
          value={last24h.change}
          className="text-3 font-semibold"
          percentage={last24h.changePercentage}
        />
      )}
    </div>
  );
};

interface Props extends WidgetProps, WidgetOptions {
  imageUrl?: string;
  currentPrice?: number;
  last24h?: {
    change: number;
    changePercentage: number;
  };
}

export default Cryptocurrencies;
