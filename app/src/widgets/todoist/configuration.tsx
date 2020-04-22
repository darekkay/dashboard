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
        label={t("widget.todoist.configuration.token")}
        className="mb-6"
        value={options.token}
        setValue={value => setOptions({ token: value })}
      ></Input>
    </>
  );
};

export default Configuration;
