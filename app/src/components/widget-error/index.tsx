import React from "react";
import { useTranslation } from "react-i18next";

import Icon from "components/icon";

const WidgetError: React.FC<Props> = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center h-full text-color-danger">
      <Icon name="error" position="left" />
      <div className="font-semibold">{t("common.error")}</div>
    </div>
  );
};

export interface Props {
  //
}

export default WidgetError;
