import React from "react";

export type ValueUpdateAction = ({
  id,
  values
}: {
  id: string;
  values: { [key: string]: any };
}) => void;

export interface WidgetProps {
  id: string;
  setData: ValueUpdateAction;
  setOptions: ValueUpdateAction;
}

export interface ConfigurationProps {
  id: string;
  options: { [key: string]: any };
  setOptions: ValueUpdateAction;
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
  { name: "search", configurable: true }
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
