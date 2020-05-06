import React from "react";

import useTriggerUpdate from "common/hooks/useTriggerUpdate";
import Deviation from "components/stats/deviation";

import { WidgetProps } from "../index";

export { saga } from "./sagas";

const Cryptocurrencies: React.FC<Props> = ({
  id,
  crypto,
  fiat,
  imageUrl,
  currentPrice,
  last24h,
  meta,
  triggerUpdate
}) => {
  useTriggerUpdate({ id, params: { crypto, fiat }, meta, triggerUpdate }, [
    crypto,
    fiat
  ]);

  return (
    <div className="flex flex-col items-center text-center">
      {imageUrl && (
        <div style={{ width: "2rem", height: "2rem" }}>
          <img src={imageUrl} alt={crypto} />
        </div>
      )}
      {currentPrice && (
        <div className="text-4 font-semibold">
          {currentPrice} <span className="text-2 uppercase">{fiat}</span>
        </div>
      )}
      {last24h && (
        <>
          <Deviation
            value={last24h.change}
            className="text-2 font-semibold"
            percentage={last24h.changePercentage}
          />
        </>
      )}
    </div>
  );
};

interface Props extends WidgetProps {
  imageUrl?: string;
  currentPrice: number;
  last24h?: {
    change: number;
    changePercentage: number;
  };

  // TODO: import from settings instead?
  crypto: string;
  fiat: string;
}

export default Cryptocurrencies;
