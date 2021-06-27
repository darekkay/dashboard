import React from "react";
import { useTranslation } from "react-i18next";

import useTriggerUpdate from "common/hooks/useTriggerUpdate";
import Icon from "components/icon";

import { WidgetProps } from "../index";

export { saga } from "./sagas";

const TotdWorldCountries: React.FC<Props> = ({
  id,
  name,
  capital,
  currency,
  languages,
  flag,
  meta,
  triggerUpdate,
  widgetStatusDisplay,
}) => {
  const { t } = useTranslation();
  useTriggerUpdate({ id, params: {}, meta, triggerUpdate }, []);

  if (widgetStatusDisplay) return widgetStatusDisplay;

  return (
    <div>
      {flag && (
        <img
          className="block mb-3 mx-auto p-1 border rounded"
          src={flag}
          alt={`Flag of ${name}`}
          style={{ height: "50px" }}
        />
      )}

      <div className="flex items-center" data-testid="stats-row">
        <Icon
          name="mapMarker"
          alt={t("widget.totd-world-countries.capital")}
          position="left"
          className="text-offset"
        />
        <div className="text-3 mx-2">{capital}</div>
      </div>

      <div className="flex items-center" data-testid="stats-row">
        <Icon
          name="moneyBill"
          alt={t("widget.totd-world-countries.currency")}
          position="left"
          className="text-offset"
        />
        <div className="text-3 mx-2">{currency}</div>
      </div>

      <div className="flex items-center" data-testid="stats-row">
        <Icon
          name="language"
          alt={t("widget.totd-world-countries.languages")}
          position="left"
          className="text-offset"
        />
        <div className="text-3 mx-2">{languages}</div>
      </div>
    </div>
  );
};

interface Props extends WidgetProps {
  name: string;
  capital: string;
  currency: string;
  languages: string;
  flag?: string;
}

export default TotdWorldCountries;
