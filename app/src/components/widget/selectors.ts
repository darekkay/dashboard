import createSelector from "selectorator";

import { WidgetType } from "widgets/list";

export const getTypeFromId = (id: string) =>
  id.substring(0, id.lastIndexOf("-")) as WidgetType;

const makeSelectWidget = (id: string) =>
  createSelector([`widgets.${id}`], (widget) => ({
    id,
    ...widget,
    options: widget.options,
    meta: widget.meta,
    data: {
      ...widget.data,
    },
  }));

export default makeSelectWidget;
