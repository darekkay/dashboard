import React from "react";

export type ValueUpdateAction = ({
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
  setDataValue: ValueUpdateAction;
  setOptionValue: ValueUpdateAction;
}

export interface ConfigurationProps {
  id: string;
  options: { [key: string]: any };
  setOptionValue: ValueUpdateAction;
}

export interface Widgets {
  [key: string]: {
    component: React.ComponentClass<WidgetProps>;
    configuration?: React.ComponentClass<ConfigurationProps>;
  };
}

export const availableWidgets = [
  { name: "text", configurable: false },
  { name: "date-time", configurable: false },
  { name: "search", configurable: false }
];

const widgets: Widgets = availableWidgets.reduce(
  (acc, widget) => ({
    ...acc,
    [widget.name]: {
      component: React.lazy(() => import(`widgets/${widget.name}`)),
      configuration: widget.configurable
        ? React.lazy(() => import(`widgets/${widget.name}/configuration`))
        : null
    }
  }),
  {}
);

export default widgets;
