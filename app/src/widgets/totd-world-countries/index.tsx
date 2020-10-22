import React from "react";

import useTriggerUpdate from "common/hooks/useTriggerUpdate";

import { WidgetProps } from "../index";

export { saga } from "./sagas";

const TotdWorldCountries: React.FC<Props> = ({
  id,
  name,
  capital,
  countryCode,
  currency,
  languages,
  tld,
  flag,
  meta,
  triggerUpdate,
}) => {
  useTriggerUpdate({ id, params: {}, meta, triggerUpdate }, []);

  return (
    <div>
      <div className="text-3 w-100 p-2 text-center">
        <u>
          <strong>{name}</strong>
        </u>
      </div>
      <div className="text-2">
        <strong>Capital: </strong>
        {capital}
      </div>
      <div className="text-2">
        <strong>Country Code: </strong> {countryCode}
      </div>
      <div className="text-2">
        <strong>Currency: </strong>
        {currency}
      </div>
      <div className="text-2">
        <strong>Languages: </strong>
        {languages}
      </div>
      <div className="text-2">
        <strong>Top-Level-Domain: </strong>
        {tld}
      </div>
      {flag && (
        <img className="w-100" src={flag} alt={`Flag of ${name}`} />
      )}
    </div>
  );
};

interface Props extends WidgetProps {
  name: string;
  capital: string;
  countryCode: string;
  currency: string;
  languages: string;
  tld: string;
  flag?: string;
}

export default TotdWorldCountries;
