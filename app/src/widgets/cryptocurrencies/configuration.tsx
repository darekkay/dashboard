import React from "react";
import { useTranslation } from "react-i18next";

import { ConfigurationProps } from "widgets/index";
import Input from "components/forms/input";

const Configuration = ({
  id,
  options,
  setOptions,
  save
}: ConfigurationProps) => {
  const { t } = useTranslation();
  return (
    <>
      {/* TODO: Dropdowns instead of inputs? */}
      <Input
        setValue={value => setOptions({ fiat: value })}
        value={options.fiat}
        label={t("widget.cryptocurrencies.configuration.fiat")}
        className="mb-6"
        type="text"
        onEnter={save}
      />
      <Input
        setValue={value => setOptions({ crypto: value })}
        value={options.crypto}
        label={t("widget.cryptocurrencies.configuration.crypto")}
        className="mb-6"
        type="text"
        onEnter={save}
      />
    </>
  );
};

export default Configuration;
