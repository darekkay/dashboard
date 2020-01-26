import React, { memo } from "react";
import { useTranslation } from "react-i18next";

import { shouldTriggerUpdate } from "components/widget/utils";
import { useMountEffect } from "common/hooks/useMountEffect";

import { WidgetProps } from "../index";

export { saga } from "./sagas";

const ChemicalElements: React.FC<Props> = memo(
  ({
    id,
    name,
    nameDE,
    symbol,
    atomicNumber,
    meta,
    setData,
    triggerUpdate
  }) => {
    const { i18n } = useTranslation();

    useMountEffect(() => {
      if (shouldTriggerUpdate(meta)) {
        triggerUpdate(id);
      }
    });

    return (
      <div className="w-100 p-4 text-center">
        <div className="text-2">{atomicNumber}</div>
        <div className="text-5 font-semibold">{symbol}</div>
        <div className="text-3">{i18n.language === "de" ? nameDE : name}</div>
      </div>
    );
  }
);

interface Props extends WidgetProps {
  name: string;
  nameDE: string;
  symbol: string;
  atomicNumber: string;
}

export default ChemicalElements;
