import createSelector from "selectorator";

/* TODO: use a hash to prevent re-rendering */

const selectComponentProps = createSelector(
  ["config.theme", "layout", "widgets"],
  (theme, layout, widgets) => ({
    layout: layout.config,
    isLayoutEditable: layout.isEditable,
    widgetIDs: Object.keys(widgets),
    currentTheme: theme
  })
);

export default selectComponentProps;
