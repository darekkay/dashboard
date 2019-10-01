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
  };
}

export const isConfigurable = (widget: string) =>
  availableWidgets[widget].configurable;

export default availableWidgets;
