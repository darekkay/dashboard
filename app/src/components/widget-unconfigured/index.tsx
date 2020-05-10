import React from "react";
import { useTranslation } from "react-i18next";

/* This component is displayed if a required widget configuration is missing */
const WidgetUnconfigured: React.FC<Props> = ({ type }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="sr-only">{t("widget.common.unconfigured")}</div>
      <div className="mb-2">{t(`widget.${type}.name`)}</div>
    </>
  );
};

export interface Props {
  type: string;
}

export default WidgetUnconfigured;
