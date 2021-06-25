import createSelector from "selectorator";

import { Widget } from "components/widget/duck";
import { WidgetType } from "widgets/list";

export const getTypeFromId = (id: string) =>
  id.substring(0, id.lastIndexOf("-")) as WidgetType;

const makeSelectWidget = (id: string) =>
  createSelector([`widgets.${id}`], (widget: Widget) => ({
    id,
    ...widget,
    options: widget.options,
    meta: widget.meta,
    data: {
      ...widget.data,
    },
  }));

export default makeSelectWidget;
