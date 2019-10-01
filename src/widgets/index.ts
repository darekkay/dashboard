import React from "react";

import availableWidgets from "./list";

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

export interface WidgetProperties {
  configurable: boolean;
  initialHeight: number;
  initialWidth: number;
  initialOptions: {
    [key: string]: any;
  };
}

export interface WidgetElements {
  Component: React.ComponentClass<WidgetProps>;
  Configuration: React.ComponentClass<ConfigurationProps>;
}

const importWidgets = (widgets: { [key: string]: WidgetProperties }) =>
  Object.entries(widgets).reduce(
    (acc, [type, values]) => ({
      ...acc,
      [type]: {
        ...values,
        Component: React.lazy(() => import(`widgets/${type}`)),
        Configuration: values.configurable
          ? React.lazy(() => import(`widgets/${type}/configuration`))
          : null
      }
    }),
    {}
  ) as { [key: string]: WidgetProperties & WidgetElements };

export default importWidgets(availableWidgets);
