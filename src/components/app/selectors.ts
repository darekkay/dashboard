import createSelector from "selectorator";

/* TODO: use a hash to prevent re-rendering */

const selectComponentProps = createSelector(
  ["config.grid.columns", "layout", "widgets"],
  (columns, layout, widgets) => ({
    gridColumns: columns,
    layout: layout.config,
    isLayoutEditable: layout.isEditable,
    widgetIDs: Object.keys(widgets)
  })
);

export default selectComponentProps;
