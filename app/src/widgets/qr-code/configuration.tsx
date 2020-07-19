import React from "react";
import { useTranslation } from "react-i18next";

import { ConfigurationProps } from "widgets/index";
import Input from "components/forms/input";
import TextArea from "components/forms/text-area";

const Configuration = ({
  options,
  setOptions,
  save,
}: ConfigurationProps<Props>) => {
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
      <TextArea
        setValue={(value) => setOptions({ content: value })}
        value={options.content}
        label={t("widget.qr-code.configuration.content")}
        rows={5}
      />
    </div>
  );
};

export interface Props {
  content: string;
  headline?: string;
}

export default Configuration;
