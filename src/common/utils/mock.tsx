import React from "react";
import { Provider } from "react-redux";

import config from "../../config";
import initStore from "../../store";

const store = initStore({ config });

export const mountConnected = (Component: React.ReactNode) => (
  <Provider store={store}>{Component}</Provider>
);
