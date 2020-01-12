import React from "react";
import { useTranslation } from "react-i18next";

import Icon from "components/icon";

/* This component is displayed if a required widget configuration is missing */
const WidgetUnconfigured: React.FC<Props> = ({ type }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="mb-2">{t(`widget.${type}.name`)}</div>
      <Icon
        name="cog"
        className="icon-2x"
        alt={t("widget.common.unconfigured")}
      />
    </>
  );
};

export interface Props {
  type: string;
}

export default WidgetUnconfigured;
