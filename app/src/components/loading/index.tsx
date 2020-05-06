import React from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import "./styles.scss";

const Loading: React.FC<Props> = ({ className, type = "spinner" }) => {
  const { t } = useTranslation();
  return (
    <div
      className={cn(
        {
          "spinner mx-auto": type === "spinner",
          skeleton: type === "skeleton"
        },
        className
      )}
      aria-label={t("common.loading")}
    />
  );
};

export interface Props {
  className?: string;
  type?: "spinner" | "skeleton";
}

export default Loading;
