import React from "react";
import { useTranslation } from "react-i18next";

import Icon from "components/icon";

const WidgetError: React.FC<Props> = ({ labelKey = "common.error" }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center text-center h-full text-color-danger text-3">
      <Icon name="error" className="mb-2" />
      <div className="font-semibold">{t(labelKey)}</div>
    </div>
  );
};

export interface Props {
  labelKey?: string;
}

export default WidgetError;
