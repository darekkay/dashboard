import React from "react";
import { connect } from "react-redux";

import { Config } from "common/ducks/settings";
import Dashboard from "components/dashboard/Dashboard";
import Footer from "components/footer/Footer";

import { State } from "../store";

export interface Props {
  config: Config;
}

export class App extends React.PureComponent<Props> {
  render() {
    const { config } = this.props;
    return (
      <>
        <main className="scrollable-y">
          <Dashboard
            columns={config.grid.columns}
            rows={config.grid.rows}
            widgets={config.widgets}
          />
        </main>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    config: state.config
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
