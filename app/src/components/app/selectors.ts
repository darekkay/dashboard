import createSelector from "selectorator";

import availableWidgets from "widgets";
import { getTypeFromId } from "components/widget/selectors";

/* TODO: use a hash to prevent re-rendering */

const selectComponentProps = createSelector(
  ["config.theme", "layout", "widgets"],
  (theme, layout, widgets) => ({
    layout: layout.config,
    isLayoutEditable: layout.isEditable,
    widgetIDs: Object.keys(widgets).filter(
      // exclude non-available widgets, e.g. when switching development branches
      (widgetId: string) => availableWidgets[getTypeFromId(widgetId)]
    ),
    currentTheme: theme,
  })
);

export default selectComponentProps;
