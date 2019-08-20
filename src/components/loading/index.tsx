import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import "./styles.scss";

export interface Props {
  className?: string;
}

const Loading = memo(({ className }: Props) => {
  const { t } = useTranslation();
  return (
    <div
      className={cn("loading mx-auto", className)}
      aria-label={t("common.loading")}
    />
  );
});

export default Loading;
