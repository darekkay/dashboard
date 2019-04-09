import React from "react";
import { connect } from "react-redux";

import { ConfigState } from "common/ducks/settings";
import { WidgetState } from "components/widget/duck";
import Dashboard from "components/dashboard/Dashboard";
import Footer from "components/footer/Footer";

import { State } from "../store";

export interface Props {
  config: ConfigState;
  widgets: WidgetState[];
}

export class App extends React.PureComponent<Props> {
  render() {
    const { config, widgets } = this.props;
    return (
      <>
        <main className="scrollable-y">
          <Dashboard
            columns={config.grid.columns}
            rows={config.grid.rows}
            widgets={widgets}
          />
        </main>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    config: state.config,
    widgets: state.widgets
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
