import createSelector from "selectorator";

import availableWidgets from "widgets";
import { getTypeFromId } from "components/widget/selectors";

/* TODO: use a hash to prevent re-rendering */

const selectComponentProps = createSelector(
  ["layout", "widgets", "config.theme", "config.backgroundUrl"],
  (layout, widgets, theme, backgroundUrl) => ({
    layout: layout.config,
    isLayoutEditable: layout.isEditable,
    widgetIDs: Object.keys(widgets).filter(
      // exclude non-available widgets, e.g. when switching development branches
      (widgetId: string) => availableWidgets[getTypeFromId(widgetId)]
    ),
    currentTheme: theme,
    backgroundUrl,
  })
);

export default selectComponentProps;
