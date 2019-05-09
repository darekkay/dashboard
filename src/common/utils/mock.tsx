import React from "react";
import { Provider } from "react-redux";

import initStore from "../../state/store";

const { store } = initStore();

export const mountConnected = (Component: React.ReactNode) => (
  <Provider store={store}>{Component}</Provider>
);
