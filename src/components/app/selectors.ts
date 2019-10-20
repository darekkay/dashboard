import createSelector from "selectorator";

/* TODO: use a hash to prevent re-rendering */

const selectComponentProps = createSelector(
  ["config.grid.columns", "config.theme", "layout", "widgets"],
  (columns, theme, layout, widgets) => ({
    gridColumns: columns,
    layout: layout.config,
    isLayoutEditable: layout.isEditable,
    widgetIDs: Object.keys(widgets),
    currentTheme: theme
  })
);

export default selectComponentProps;
