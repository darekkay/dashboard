import React from "react";
import { useTranslation } from "react-i18next";

import Icon from "components/icon";

const WidgetError: React.FC<Props> = ({ labelKey = "error.unknown" }) => {
  const { t } = useTranslation();
  return (
    <div
      className="flex flex-col items-center justify-center h-full overflow-hidden text-center text-danger text-3"
      data-testid="widget-error"
    >
      <Icon name="error" className="mb-2" />
      <div className="font-semibold">{t(labelKey)}</div>
    </div>
  );
};

export interface Props {
  labelKey?: string;
}

export default WidgetError;
