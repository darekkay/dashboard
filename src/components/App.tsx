import React, { PureComponent } from "react";

import "./App.scss";
import Link from "./link/Link";

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <header>
          <Link url="https://github.com/darekkay/dashboard">Dashboard</Link>{" "}
          version {process.env.REACT_APP_VERSION}
        </header>
      </div>
    );
  }
}

export default App;
