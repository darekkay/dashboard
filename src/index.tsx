import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";

import "common/i18n";
import { updateCssVariables } from "components/settings/theme-select";
import { defaultTheme } from "common/ducks/config";
// import * as serviceWorker from "common/serviceWorker";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./styles/index.scss";

import Entry from "./entry";

updateCssVariables(defaultTheme());

ReactDOM.render(<Entry />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister(); // TODO: enable service worker
