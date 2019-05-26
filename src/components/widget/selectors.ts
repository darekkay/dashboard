import createSelector from "selectorator";

import { OptionsProps } from "components/widget/Widget";

export const defaultOptions: OptionsProps = {
  align: "center"
};

export const getTypeFromId = (id: string) =>
  id.substring(0, id.lastIndexOf("-"));

const makeSelectWidget = (id: string) =>
  createSelector(
    [`widgets.${id}`, `sharedData.${getTypeFromId(id)}`],
    (widget, sharedData) => ({
      id,
      ...widget,
      options: {
        ...defaultOptions,
        ...widget.options
      },
      data: {
        ...sharedData,
        ...widget.data
      }
    })
  );

export default makeSelectWidget;
