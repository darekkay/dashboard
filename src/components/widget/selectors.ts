import createSelector from "selectorator";

export const getTypeFromId = (id: string) =>
  id.substring(0, id.lastIndexOf("-"));

const makeSelectWidget = (id: string) =>
  createSelector(
    [`widgets.${id}`, `sharedData.${getTypeFromId(id)}`],
    (widget, sharedData) => ({
      id,
      ...widget,
      options: widget.options,
      data: {
        ...sharedData,
        ...widget.data
      }
    })
  );

export default makeSelectWidget;
