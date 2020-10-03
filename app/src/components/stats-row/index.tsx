import React from "react";
import { useTranslation } from "react-i18next";

import Icon, { IconName } from "components/icon";

const StatsRow: React.FC<Props> = ({ value, labelKey, icon }) => {
  const { t } = useTranslation();
  if (typeof value !== "number") return null;
  return (
    <div className="flex items-center" data-testid="stats-row">
      <Icon name={icon} position="left" />
      <div className="font-semibold text-3 mx-2">{t("number", { value })}</div>
      <div className="text-2">{t(labelKey)}</div>
    </div>
  );
};

export interface Props {
  value?: number;
  labelKey: string;
  icon: IconName;
}
export default StatsRow;
