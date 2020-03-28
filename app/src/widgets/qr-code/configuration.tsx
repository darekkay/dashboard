import React from "react";
import { useTranslation } from "react-i18next";

import { ConfigurationProps } from "widgets/index";
import Input from "components/forms/input";
import TextArea from "components/forms/text-area";

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
        setValue={value => setOptions({ headline: value })}
        value={options.headline}
        label={t("common.headline")}
        className="mb-6"
        type="text"
        onEnter={save}
      />
      <TextArea
        setValue={value => setOptions({ content: value })}
        value={options.content}
        label={t("widget.qr-code.configuration.content")}
        rows={5}
      />
    </>
  );
};

export default Configuration;
