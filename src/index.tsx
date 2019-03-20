import React from "react";
import ReactDOM from "react-dom";

import getThemeStyle from "common/themes";
import Button from "components/button/Button";

import "./styles/mixins.scss";
import "./styles/base.scss";
import "./styles/utilities.scss";
import "./styles/layout.scss";
import "./styles/typography.scss";

import App from "./components/App";
import config from "./config";
// import * as serviceWorker from "./common/serviceWorker";

ReactDOM.render(<App config={config} />, document.getElementById("root"));

// Temporary theme preview button
// TODO: introduce state into the project and refactor

let selectedTheme = config.theme;

const toggleTheme = () => {
  document.documentElement.setAttribute("style", getThemeStyle(selectedTheme));
  /* istanbul ignore next */
  selectedTheme = selectedTheme === "default" ? "dark" : "default";
};
toggleTheme();

const ThemeToggle = () => (
  <Button type="primary" onClick={toggleTheme}>
    Toggle Theme
  </Button>
);
ReactDOM.render(<ThemeToggle />, document.getElementById("theme-toggle"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister(); // TODO: enable service worker
