import React from "react";
import { useTranslation } from "react-i18next";

import type { ConfigurationProps } from "widgets/index";
import Input from "components/forms/input";

const Configuration = ({
  options,
  setOptions,
  save,
}: ConfigurationProps<WidgetOptions>) => {
  const { t } = useTranslation();
  return (
    <Input
      setValue={(value) => setOptions({ headline: value })}
      value={options.headline}
      label={t("common.headline")}
      type="text"
      onEnter={save}
    />
  );
};

export interface WidgetOptions {
  headline: string;
}

export default Configuration;
