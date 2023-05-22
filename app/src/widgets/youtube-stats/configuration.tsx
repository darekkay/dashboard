import React from "react";
import { useTranslation } from "react-i18next";
import { Input } from "@darekkay/react-ui";

import { ConfigurationProps } from "widgets/index";

const Configuration = ({
  options,
  setOptions,
  save,
}: ConfigurationProps<WidgetOptions>) => {
  const { t } = useTranslation();
  return (
    <Input
      setValue={(value) => setOptions({ query: value })}
      value={options.query}
      label={t("widget.youtube-stats.configuration.query")}
      type="text"
      onEnter={save}
    />
  );
};

export interface WidgetOptions {
  query: string;
}

export default Configuration;
