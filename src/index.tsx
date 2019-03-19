import React from "react";
import ReactDOM from "react-dom";

import "./styles/mixins.scss";
import "./styles/base.scss";
import "./styles/utilities.scss";
import "./styles/layout.scss";
import "./styles/typography.scss";
import "./styles/theme.scss";

import App from "./components/App";
import config from "./config";
// import * as serviceWorker from "./common/serviceWorker";

ReactDOM.render(<App config={config} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister(); // TODO: enable service worker
