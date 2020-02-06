import React from "react";
import { useTranslation } from "react-i18next";

import { ConfigurationProps } from "widgets/index";
import Input from "components/forms/input";

const Configuration = ({ id, options, setOptions }: ConfigurationProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Input
        setValue={value => setOptions({ headline: value })}
        value={options.headline}
        label={t("common.headline")}
        className="mb-6"
        type="text"
      />
    </>
  );
};

export default Configuration;
