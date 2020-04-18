import React from "react";
import { useTranslation } from "react-i18next";

import useTriggerUpdate from "common/hooks/useTriggerUpdate";

import { WidgetProps } from "../index";

export { saga } from "./sagas";

const ChemicalElements: React.FC<Props> = ({
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

  useTriggerUpdate({ id, params: {}, meta, triggerUpdate }, []);

  return (
    <div className="w-100 p-4 text-center">
      <div className="text-2">{atomicNumber}</div>
      <div className="text-5 font-semibold">{symbol}</div>
      <div className="text-3">{i18n.language === "de" ? nameDE : name}</div>
    </div>
  );
};

interface Props extends WidgetProps {
  name: string;
  nameDE: string;
  symbol: string;
  atomicNumber: string;
}

export default ChemicalElements;
