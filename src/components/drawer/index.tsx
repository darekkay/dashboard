import React, { memo } from "react";

import Button, { ButtonSize } from "components/button";
import { availableWidgetNames } from "widgets/index";
import Icon from "../icon";

/* TODO: render display name instead of slug */
const Drawer = memo(({ addWidget }: Props) => {
  return (
    <div className="p-3 bg-color-default border" style={{ width: "200px" }}>
      <div className="p-3 text-center uppercase font-bold text-2">Widgets</div>
      {availableWidgetNames.map(widgetName => (
        <div className="flex justify-between py-2">
          {widgetName}
          <Button
            size={ButtonSize.Small}
            outline
            ariaLabel={`Add widget '${widgetName}'`}
            onClick={() => addWidget(widgetName)}
          >
            <Icon name="plus" alt="" />
          </Button>
        </div>
      ))}
    </div>
  );
});

export interface Props {
  addWidget: (widgetName: string) => void;
}

export default Drawer;
