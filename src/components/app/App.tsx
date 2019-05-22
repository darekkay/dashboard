import React, { memo } from "react";
import { connect } from "react-redux";

import { actionCreators as heartbeatActionCreators } from "common/ducks/heartbeat";
import Dashboard from "components/dashboard/Dashboard";
import Footer from "components/footer/Footer";
import useInterval from "common/hooks/useInterval";

import mapStateToProps from "./selectors";

export interface Props {
  gridColumns: number;
  gridRows: number;
  widgetIDs: string[];
  sendHeartbeat: (date: number) => void;
}

export const App = memo((props: Props) => {
  const { gridColumns, gridRows, widgetIDs, sendHeartbeat } = props;

  /* istanbul ignore next */
  useInterval(() => sendHeartbeat(Date.now()), 1000);

  return (
    <>
      <main className="scrollable-y">
        <Dashboard
          columns={gridColumns}
          rows={gridRows}
          widgetIDs={widgetIDs}
        />
      </main>
      <Footer />
    </>
  );
});

export default connect(
  mapStateToProps,
  heartbeatActionCreators
)(App);
