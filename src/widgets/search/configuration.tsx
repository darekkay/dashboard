import React from "react";
import { useTranslation } from "react-i18next";

import { ConfigurationProps } from "widgets/index";
import Input from "components/input";

const Configuration = ({ id, options, setOptions }: ConfigurationProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Input
        setValue={value => setOptions({ id, values: { title: value } })}
        value={options.title}
        label={t("widget.search.configuration.title")}
        className="mb-6"
      />
      <Input
        setValue={value => setOptions({ id, values: { pattern: value } })}
        value={options.pattern}
        label={t("widget.search.configuration.pattern")}
      />
    </>
  );
};

export default Configuration;
