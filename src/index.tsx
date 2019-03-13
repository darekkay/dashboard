import React from "react";
import ReactDOM from "react-dom";

import "./styles/base.css";
import "./styles/common.css";
import "./styles/utils.css";

import App from "./components/App";
// import * as serviceWorker from "./components/serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister(); // TODO: enable service worker
