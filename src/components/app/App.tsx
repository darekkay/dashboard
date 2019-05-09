import React from "react";
import { connect } from "react-redux";

import { actionCreators as heartbeatActionCreators } from "common/ducks/heartbeat";
import Dashboard from "components/dashboard/Dashboard";
import Footer from "components/footer/Footer";

import mapStateToProps from "./selectors";

export interface Props {
  gridColumns: number;
  gridRows: number;
  widgetIDs: string[];
  sendHeartbeat: (date: number) => void;
}

export class App extends React.PureComponent<Props> {
  private heartbeat: any;

  componentDidMount() {
    /* istanbul ignore next */
    this.heartbeat = window.setInterval(
      () => this.props.sendHeartbeat(Date.now()),
      1000
    );
  }

  componentWillUnmount() {
    window.clearInterval(this.heartbeat);
  }

  render() {
    const { gridColumns, gridRows, widgetIDs } = this.props;
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
  }
}

export default connect(
  mapStateToProps,
  heartbeatActionCreators
)(App);
