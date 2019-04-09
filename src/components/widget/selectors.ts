import createSelector from "selectorator";

import variables, { Variables } from "common/variables";
import { OptionsProps } from "components/widget/Widget";

export const defaultOptions: OptionsProps = {
  align: "center"
};

// make a 1x1 widget appear as a square at full width
export const getWidgetHeightInPx = (
  columns: number,
  widgetHeight: number,
  variables: Variables
) => {
  // calculate the width of a single 1x1 cell
  const totalGapSize = (columns - 1) * variables.dashboardGridGap;
  const singleCellWidth =
    (variables.dashboardMaxWidth - totalGapSize) / columns;

  // use the widget width and the column gap to calculate the real widget height
  const columnGapSize = (widgetHeight - 1) * variables.dashboardGridGap;
  return singleCellWidth * widgetHeight + columnGapSize;
};

const makeSelectWidgetHeightInPx = (id: string) =>
  createSelector(
    ["config.grid.columns", `widgets.${id}.height`],
    (columns: number, widgetHeight: number) =>
      getWidgetHeightInPx(columns, widgetHeight, variables)
  );

export const makeSelectWidget = (id: string) =>
  createSelector(
    [`widgets.${id}`, makeSelectWidgetHeightInPx(id)],
    (widget, heightInPx) => ({
      ...widget,
      heightInPx,
      options: {
        ...defaultOptions,
        ...widget.options
      }
    })
  );
