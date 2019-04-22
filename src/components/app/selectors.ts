import createSelector from "selectorator";

const selectComponentProps = createSelector(
  ["config.grid.columns", "config.grid.rows", "widgets"],
  (columns, rows, widgets) => ({
    gridColumns: columns,
    gridRows: rows,
    widgetIDs: Object.keys(widgets)
  })
);

export default selectComponentProps;
