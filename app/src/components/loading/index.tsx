import React from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import "./styles.scss";

const Loading = ({ className, type = "spinner" }: Props) => {
  const { t } = useTranslation();
  return (
    <div
      className={cn(
        {
          "spinner mx-auto": type === "spinner",
          skeleton: type === "skeleton",
        },
        className
      )}
      role="progressbar"
      aria-busy
      aria-label={t("common.loading")}
    />
  );
};

export interface Props {
  className?: string;
  type?: "spinner" | "skeleton";
}

export default Loading;
