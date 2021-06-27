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
    <div className="space-y-6">
      <Input
        setValue={(value) => setOptions({ headline: value })}
        value={options.headline}
        label={t("common.headline")}
        type="text"
        onEnter={save}
      />
      <Input
        setValue={(value) => setOptions({ url: value })}
        value={options.url}
        label={t("widget.chart.configuration.url")}
        type="url"
        inputMode="url"
        autoComplete="url"
        onEnter={save}
      />
      <Input
        setValue={(value) => setOptions({ dataPath: value })}
        value={options.dataPath}
        label={t("widget.chart.configuration.dataPath")}
        type="text"
        onEnter={save}
      />
      <Input
        setValue={(value) => setOptions({ dataKeyX: value })}
        value={options.dataKeyX}
        label={t("widget.chart.configuration.dataKeyX")}
        type="text"
        onEnter={save}
      />
      <Input
        setValue={(value) => setOptions({ dataKeyY: value })}
        value={options.dataKeyY}
        label={t("widget.chart.configuration.dataKeyY")}
        type="text"
        onEnter={save}
      />
    </div>
  );
};

export interface WidgetOptions {
  headline: string;
  url: string;

  dataPath: string;
  dataKeyX: string;
  dataKeyY: string;
}

export default Configuration;
