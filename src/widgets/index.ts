import React from "react";

export type OptionUpdateAction = ({
  id,
  key,
  value
}: {
  id: string;
  key: string;
  value: any;
}) => void;

export interface WidgetProps {
  id: string;
  setDataValue: OptionUpdateAction;
  setOptionValue: OptionUpdateAction;
}

export interface Widgets {
  [key: string]: {
    component: React.ComponentClass<WidgetProps>;
  };
}

const availableWidgetNames = ["text", "date-time"];

const widgets: Widgets = availableWidgetNames.reduce(
  (acc, widgetName) => ({
    ...acc,
    [widgetName]: {
      component: React.lazy(() => import(`widgets/${widgetName}`))
    }
  }),
  {}
);

export default widgets;
