import React from "react";
import { connect } from "react-redux";

import { Config } from "common/ducks/settings";
import Dashboard from "components/dashboard/Dashboard";
import Link from "components/link/Link";

import { State } from "../store";

import "./App.scss";

export interface Props {
  config: Config;
}

export class App extends React.PureComponent<Props> {
  render() {
    const { config } = this.props;
    return (
      <div className="App">
        <main>
          <Dashboard
            columns={config.grid.columns}
            rows={config.grid.rows}
            widgets={config.widgets}
          />
        </main>
        <footer className="text-right">
          <Link url="https://github.com/darekkay/dashboard">Dashboard</Link>{" "}
          {process.env.REACT_APP_VERSION}
        </footer>
      </div>
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
