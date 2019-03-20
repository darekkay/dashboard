import React from "react";

import Link from "./link/Link";
import Dashboard from "./dashboard/Dashboard";

import "./App.scss";

interface Config {
  grid: {
    rows: number;
    columns: number;
  };
  widgets: {
    width: number;
    height: number;
    type: string;
    options?: object;
  }[];
  theme: string;
}

export interface Props {
  config: Config;
}

class App extends React.PureComponent<Props> {
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

export default App;
