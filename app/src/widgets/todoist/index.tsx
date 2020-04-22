import React, { memo } from "react";

import useTriggerUpdate from "common/hooks/useTriggerUpdate";

import { WidgetProps } from "../index";

export { saga } from "./sagas";

const Todoist: React.FC<Props> = memo(
  ({
    id,
    token,
    meta, 
    setData,
    triggerUpdate
  }) => {
    useTriggerUpdate({ id, params: { token }, meta, triggerUpdate }, [
      token
    ]);

    return (
      <div className="flex flex-col items-center text-center">
        <div className="text-4 font-semibold">
          <span className="center"> Todoist </span> 
          <span className="text-2 uppercase">{token}</span>
        </div>
      </div>
    );
  }
);

interface Props extends WidgetProps {
  token: string;
}

export default Todoist;
