import React from "react";
import { createRoot } from "react-dom/client";

import "common/i18n";

// import * as serviceWorker from "common/serviceWorker";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./styles/index.scss";

import Entry from "./entry";

const container = document.querySelector("#root");
const root = createRoot(container!);
root.render(<Entry />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister(); // TODO: enable service worker
