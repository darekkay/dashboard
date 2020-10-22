import React from "react";

import useTriggerUpdate from "common/hooks/useTriggerUpdate";

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
}) => {
  useTriggerUpdate({ id, params: {}, meta, triggerUpdate }, []);

  return (
    <dl>
      {flag && (
        <img
          className="block mb-4 mx-auto"
          src={flag}
          alt={`Flag of ${name}`}
          width={90}
        />
      )}
      <div className="flex items-center">
        <dt className="mr-2 ">Capital:</dt>
        <dd className="font-semibold">{capital}</dd>
      </div>
      <div className="flex items-center">
        <dt className="mr-2 ">Currency:</dt>
        <dd className="font-semibold">{currency}</dd>
      </div>
      <div className="flex items-center">
        <dt className="mr-2 ">Languages:</dt>
        <dd className="font-semibold">{languages}</dd>
      </div>
    </dl>
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
