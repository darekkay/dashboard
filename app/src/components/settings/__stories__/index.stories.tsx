import React from "react";
import { Provider } from "react-redux";

import initStore from "state/store";

import Settings from "../index";

export default {
  title: "Components/Settings",
};

export const Variants = () => {
  const { store } = initStore();
  return (
    <Provider store={store}>
      <Settings closeModal={() => null} />
    </Provider>
  );
};
