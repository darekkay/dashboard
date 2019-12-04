import React, { memo } from "react";
import { shouldTriggerUpdate } from "components/widget/utils";
import { useMountEffect } from "common/hooks/useMountEffect";

import { WidgetProps } from "../index";

export { saga } from "./sagas";

const ChemicalElements: React.FC<Props> = memo(
  ({ id, name, symbol, atomicNumber, meta, setData, triggerUpdate }) => {
    useMountEffect(() => {
      if (shouldTriggerUpdate(meta)) {
        triggerUpdate(id);
      }
    });

    return (
      <div className="w-100 p-4 text-center">
        <div className="text-1">{atomicNumber}</div>
        <div className="text-4">{symbol}</div>
        <div className="text-2">{name}</div>
      </div>
    );
  }
);

interface Props extends WidgetProps {
  name: string;
  symbol: string;
  atomicNumber: string;
}

export default ChemicalElements;
