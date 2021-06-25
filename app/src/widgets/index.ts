import React, { ReactElement } from "react";
import { injectSaga } from "redux-sagas-injector";

import { TriggerUpdateAction, WidgetMeta } from "components/widget/duck";
import { Dimensions } from "components/widget";
import WidgetCategory from "widgets/categories";

import widgetProperties, { widgetImports, WidgetType } from "./list";

export type ValueUpdateAction = ({
  id,
  values,
}: {
  id: string;
  values: Record<string, any>;
}) => void;

export interface WidgetProps {
  id: string;
  type: WidgetType;
  meta: WidgetMeta;
  dimensions?: Dimensions;
  setData: ValueUpdateAction;
  setOptions: ValueUpdateAction;
  triggerUpdate: (action: TriggerUpdateAction) => void;
  widgetStatusDisplay: ReactElement | null;
}

export interface ConfigurationProps<T> {
  id: string;
  options: T;
  setOptions: (values: Partial<T>) => void;
  save: () => void;
}

export interface WidgetProperties<T = Record<string, any>> {
  configurable: boolean;
  widgetType: WidgetType;
  category: WidgetCategory;
  initialHeight: number;
  initialWidth: number;
  initialOptions: T;
  initialMeta: WidgetMeta;
}

export interface WidgetImports {
  component: () => Promise<any>;
  configuration?: () => Promise<any>;
}

export interface WidgetElements {
  Component: React.ComponentClass<WidgetProps>;
  Configuration: React.ComponentClass<ConfigurationProps<any>>;
}

const injectModuleSaga = (widgetType: WidgetType) => (module: any) => {
  if (module.saga) {
    injectSaga(widgetType, module.saga);
  }
  return module;
};

export default Object.entries(widgetProperties).reduce(
  (accumulator, [widgetType, values]) => {
    const { configuration } = widgetImports[widgetType as WidgetType];
    return {
      ...accumulator,
      [widgetType]: {
        ...values,
        Component: React.lazy(async () =>
          widgetImports[widgetType as WidgetType]
            .component()
            .then(injectModuleSaga(widgetType as WidgetType))
        ),
        Configuration: configuration ? React.lazy(configuration) : null,
      },
    };
  },
  {}
) as Record<WidgetType, WidgetProperties & WidgetElements>;
