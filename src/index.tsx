import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "components/app/App";

import initStore from "./store";
// import * as serviceWorker from "./common/serviceWorker";

import "./styles/mixins.scss";
import "./styles/base.scss";
import "./styles/utilities.scss";
import "./styles/layout.scss";
import "./styles/typography.scss";

const { store, persistor } = initStore();

// NICE: implement and display loading component
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister(); // TODO: enable service worker
