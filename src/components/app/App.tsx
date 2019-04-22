import React from "react";
import { connect } from "react-redux";

import Dashboard from "components/dashboard/Dashboard";
import Footer from "components/footer/Footer";

import mapStateToProps from "./selectors";

export interface Props {
  gridColumns: number;
  gridRows: number;
  widgetIDs: string[];
}

export class App extends React.PureComponent<Props> {
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

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
