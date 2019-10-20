import React, { memo } from "react";
import { connect } from "react-redux";

import {
  actionCreators as layoutActionCreators,
  Layout
} from "common/ducks/layout";
import Dashboard from "components/dashboard";
import Drawer from "components/drawer";
import Header from "components/header";

import mapStateToProps from "./selectors";

export interface Props {
  gridColumns: number;
  widgetIDs: string[];

  layout: Layout;
  saveLayout: (layout: Layout) => void;

  isLayoutEditable: boolean;
  toggleLayoutEditable: () => void;

  addWidgetToLayout: (widgetName: string) => void;
  removeWidgetFromLayout: (widgetId: string) => void;
}

export const App: React.FC<Props> = memo(props => {
  const {
    gridColumns,
    widgetIDs,
    layout,
    saveLayout,
    isLayoutEditable,
    toggleLayoutEditable,
    addWidgetToLayout,
    removeWidgetFromLayout
  } = props;

  return (
    <>
      <Header
        isLayoutEditable={isLayoutEditable}
        toggleLayoutEditable={toggleLayoutEditable}
      />
      <div className="flex h-full flex-col md:flex-row">
        <main className="flex-grow h-full w-full p-1 md:p-6 overflow-y-auto">
          <Dashboard
            columns={gridColumns}
            layout={layout}
            isLayoutEditable={isLayoutEditable}
            widgetIDs={widgetIDs}
            saveLayout={saveLayout}
            removeWidgetFromLayout={removeWidgetFromLayout}
          />
        </main>
        {/* TODO: connect drawer instead */}
        {isLayoutEditable && (
          <Drawer addWidgetToLayout={addWidgetToLayout}></Drawer>
        )}
      </div>
    </>
  );
});

export default connect(
  mapStateToProps,
  {
    ...layoutActionCreators
  }
)(App);
