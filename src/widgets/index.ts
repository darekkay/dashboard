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

export interface Widgets {
  [key: string]: {
    configurable: boolean;
    initialHeight: number;
    initialWidth: number;
    initialOptions: {
      [key: string]: any;
    };
  };
}

export const isConfigurable = (widget: string) =>
  availableWidgets[widget].configurable;

export const initialHeight = (widget: string) =>
  availableWidgets[widget].initialHeight;

export const initialWidth = (widget: string) =>
  availableWidgets[widget].initialWidth;

export const initialOptions = (widget: string) =>
  availableWidgets[widget].initialOptions;

export default availableWidgets;
