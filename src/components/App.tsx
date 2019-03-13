import React, { PureComponent } from "react";

import "./App.scss";

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <header>Dashboard version {process.env.REACT_APP_VERSION}</header>
      </div>
    );
  }
}

export default App;
