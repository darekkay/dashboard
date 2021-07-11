import React from "react";
import { Responsive } from "react-grid-layout";
import { SizeMe } from "react-sizeme";
import memoize from "lodash/memoize";

import { Layout } from "common/ducks/layout";
import { GRID } from "common/environment";
import makeWidget from "components/widget";
import WelcomePage from "components/welcome-page";
import { State } from "state/store";

const ReactGridLayout = Responsive;

const updateProps = ["layout"];

const makeWidgetMemoized = memoize(makeWidget);

export const shouldUpdateComponent = (
  currentProps: Props,
  nextProps: Props
) => {
  return (
    currentProps.widgetIDs.length !== nextProps.widgetIDs.length ||
    updateProps.some((prop) => currentProps[prop] !== nextProps[prop])
  );
};

/** A grid containing all the widgets */
class Dashboard extends React.Component<Props> {
  shouldComponentUpdate(nextProps: Readonly<Props>) {
    return shouldUpdateComponent(this.props, nextProps);
  }

  render() {
    const { layout, widgetIDs, saveLayout, importState } = this.props;
    if (widgetIDs.length === 0)
      return <WelcomePage importState={importState} />;
    return (
      <SizeMe refreshMode="debounce">
        {({ size }) => (
          <ReactGridLayout
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
            width={size.width ?? 0}
          >
            {widgetIDs.map((widgetID: string) =>
              React.createElement(makeWidgetMemoized(widgetID), {
                key: widgetID,
              })
            )}
          </ReactGridLayout>
        )}
      </SizeMe>
    );
  }
}

export interface Props {
  layout: Layout;
  widgetIDs: string[];
  saveLayout: (layout: Layout) => void;
  importState: (state: State) => void;
  [key: string]: any; // required for shouldComponentUpdate
}

export default Dashboard;
