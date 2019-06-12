import React, { memo } from "react";
import { connect } from "react-redux";

import { actionCreators as heartbeatActionCreators } from "common/ducks/heartbeat";
import {
  actionCreators as layoutActionCreators,
  Layout
} from "common/ducks/layout";
import Dashboard from "components/dashboard/Dashboard";
import Footer from "components/footer/Footer";
import useInterval from "common/hooks/useInterval";

import mapStateToProps from "./selectors";

export interface Props {
  gridColumns: number;
  widgetIDs: string[];

  layout: Layout;
  saveLayout: (layout: Layout) => void;

  isLayoutEditable: boolean;
  toggleLayoutEditable: () => void;

  sendHeartbeat: (date: number) => void;
}

export const App = memo((props: Props) => {
  const {
    gridColumns,
    widgetIDs,
    layout,
    saveLayout,
    isLayoutEditable,
    toggleLayoutEditable,
    sendHeartbeat
  } = props;

  /* istanbul ignore next */
  useInterval(() => sendHeartbeat(Date.now()), 1000);

  return (
    <>
      <main className="p-1 md:p-6 h-100 overflow-y-auto">
        <Dashboard
          columns={gridColumns}
          layout={layout}
          isLayoutEditable={isLayoutEditable}
          widgetIDs={widgetIDs}
          saveLayout={saveLayout}
        />
      </main>
      <Footer
        isLayoutEditable={isLayoutEditable}
        toggleLayoutEditable={toggleLayoutEditable}
      />
    </>
  );
});

export default connect(
  mapStateToProps,
  {
    ...heartbeatActionCreators,
    ...layoutActionCreators
  }
)(App);
