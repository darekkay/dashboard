import React from "react";
import { useTranslation } from "react-i18next";

import { ConfigurationProps } from "widgets/index";
import Input from "components/forms/input";

const Configuration = ({
  options,
  setOptions,
  save,
}: ConfigurationProps<WidgetOptions>) => {
  const { t } = useTranslation();
  return (
    <>
      <Input
        setValue={(value) => setOptions({ username: value })}
        value={options.username}
        label={t("widget.twitter-stats.configuration.username")}
        className="mb-6"
        type="text"
        onEnter={save}
      />
    </>
  );
};

export interface WidgetOptions {
  username: string;
}

export default Configuration;
