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
      <Input
        setValue={value => setOptions({ query: value })}
        value={options.query}
        label={t("widget.github-stats.configuration.query")}
        className="mb-6"
        type="text"
        onEnter={save}
      />
      {/* TODO: form elements hint? */}
    </>
  );
};

export default Configuration;
