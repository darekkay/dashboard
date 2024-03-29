import React, { useMemo, useRef } from "react";
import { Responsive as ReactGridLayout } from "react-grid-layout";
import { useResizeDetector } from "react-resize-detector";
import memoize from "lodash/memoize";

import { Layout } from "common/ducks/layout";
import { GRID } from "common/environment";
import makeWidget from "components/widget";
import WelcomePage from "components/welcome-page";
import { State } from "state/store";

const makeWidgetMemoized = memoize(makeWidget);

/** A grid containing all the widgets */
const Dashboard = ({ layout, widgetIDs, saveLayout, importState }: Props) => {
  const targetRef = useRef(null);
  const { width } = useResizeDetector({ targetRef });

  // memoize widgets to utilize RGL's rerender optimization: https://github.com/react-grid-layout/react-grid-layout#performance
  const widgets = useMemo(
    () =>
      widgetIDs.map((widgetID: string) =>
        React.createElement(makeWidgetMemoized(widgetID), {
          key: widgetID,
        })
      ),
    // https://github.com/facebook/react/issues/14476#issuecomment-471199055
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(widgetIDs)]
  );

  if (widgetIDs.length === 0) return <WelcomePage importState={importState} />;

  return (
    <ReactGridLayout
      innerRef={targetRef}
      className="layout"
      layouts={layout}
      breakpoints={{ mobile: 0, desktop: 768 }}
      cols={{ mobile: 1, desktop: GRID.COLUMNS_COUNT }}
      rowHeight={GRID.ROW_HEIGHT_PX}
      compactType="vertical"
      useCSSTransforms={false}
      isDraggable
      isResizable
      draggableHandle=".grid-draggable"
      onLayoutChange={(__: any, allLayouts: Layout) => {
        saveLayout(allLayouts);
      }}
      width={width ?? 0}
    >
      {widgets}
    </ReactGridLayout>
  );
};

export interface Props {
  layout: Layout;
  widgetIDs: string[];
  saveLayout: (layout: Layout) => void;
  importState: (state: State) => void;
  [key: string]: any; // required for shouldComponentUpdate
}

export default Dashboard;
