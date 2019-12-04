import createSelector from "selectorator";

export const getTypeFromId = (id: string) =>
  id.substring(0, id.lastIndexOf("-"));

const makeSelectWidget = (id: string) =>
  createSelector(
    [`widgets.${id}`],
    widget => ({
      id,
      ...widget,
      options: widget.options,
      meta: widget.meta,
      data: {
        ...widget.data
      }
    })
  );

export default makeSelectWidget;
