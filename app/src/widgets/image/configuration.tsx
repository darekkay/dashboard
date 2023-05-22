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
      setValue={(value) => setOptions({ url: value })}
      value={options.url}
      label={t("widget.image.configuration.url")}
      type="url"
      inputMode="url"
      autoComplete="url"
      onEnter={save}
    />
  );
};

export interface WidgetOptions {
  url: string;
}

export default Configuration;
