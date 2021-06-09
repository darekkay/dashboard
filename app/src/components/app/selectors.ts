import createSelector from "selectorator";

import availableWidgets from "widgets";
import { LayoutState } from "common/ducks/layout";
import { getTypeFromId } from "components/widget/selectors";
import { State } from "state/store";
import { SelectedProps as AppProps } from "components/app/index";

/* TODO: use a hash to prevent re-rendering */

const selectComponentProps = createSelector<State, AppProps>(
  ["layout", "config.theme", "config.backgroundUrl"],
  (layout: LayoutState, theme, backgroundUrl) => ({
    layout: layout.config,
    isLayoutEditable: layout.isEditable,

    // mobile and desktop layouts are independent
    // as this selector is non-responsive, we take the desktop focus order
    widgetIDs: layout.config.desktop
      .map((widget) => widget.i)
      .filter(
        // exclude non-available widgets, e.g. when switching development branches
        (widgetId: string) => availableWidgets[getTypeFromId(widgetId)]
      ),
    currentTheme: theme,
    backgroundUrl,
  })
);

export default selectComponentProps;
