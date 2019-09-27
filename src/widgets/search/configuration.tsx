import React from "react";
import { useTranslation } from "react-i18next";

import { ConfigurationProps } from "widgets/index";
import Input from "components/input";

const Configuration = ({ id, options, setOptionValue }: ConfigurationProps) => {
  const { t } = useTranslation();
  return (
    <Input
      setValue={value => setOptionValue({ id, key: "pattern", value })}
      value={options.pattern}
      label={t("widget.search.configuration.pattern")}
    />
  );
};

export default Configuration;
