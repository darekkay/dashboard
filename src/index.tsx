import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "common/i18n";

import App from "components/app";
import Loading from "components/loading";
import { updateCssVariables } from "components/theme-select";

import initStore from "state/store";
// import * as serviceWorker from "./common/serviceWorker";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import "./styles/index.scss";

const { store, persistor } = initStore();

updateCssVariables("default");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loading className="mt-8" />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister(); // TODO: enable service worker
