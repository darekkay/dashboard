import React from "react";
import { injectSaga } from "redux-sagas-injector";

import { TriggerUpdateAction, WidgetMeta } from "components/widget/duck";
import { Dimensions } from "components/widget";
import WidgetCategory from "widgets/categories";

import availableWidgets from "./list";

export type ValueUpdateAction = ({
  id,
  values
}: {
  id: string;
  values: Record<string, any>;
}) => void;

export interface WidgetProps {
  id: string;
  meta: WidgetMeta;
  dimensions?: Dimensions;
  setData: ValueUpdateAction;
  setOptions: ValueUpdateAction;
  triggerUpdate: (action: TriggerUpdateAction) => void;
}

export interface ConfigurationProps<T> {
  id: string;
  options: T;
  setOptions: (values: Partial<T>) => void;
  save: () => void;
}

export interface WidgetProperties {
  configurable: boolean;
  widgetType: string;
  category: WidgetCategory;
  initialHeight: number;
  initialWidth: number;
  initialOptions: Record<string, any>;
  initialMeta: WidgetMeta;
}

export interface WidgetElements {
  Component: React.ComponentClass<WidgetProps>;
  Configuration: React.ComponentClass<ConfigurationProps<any>>;
}

const importWidgets = (widgets: Record<string, WidgetProperties>) =>
  Object.entries(widgets).reduce(
    (acc, [type, values]) => ({
      ...acc,
      [type]: {
        ...values,
        Component: React.lazy(() =>
          import(`widgets/${type}`).then(module => {
            if (module.saga) {
              injectSaga(type, module.saga); // NICE: import dynamically?
            }
            return module;
          })
        ),
        Configuration: values.configurable
          ? React.lazy(() => import(`widgets/${type}/configuration`))
          : null
      }
    }),
    {}
  ) as Record<string, WidgetProperties & WidgetElements>;

export default importWidgets(
  availableWidgets as Record<string, WidgetProperties>
);
