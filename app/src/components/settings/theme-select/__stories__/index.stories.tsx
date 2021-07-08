import React from "react";
import { Provider } from "react-redux";

import initStore from "state/store";

import ThemeSelect from "../index";

export default {
  title: "Components/Settings/ThemeSelect",
};

export const Variants = () => {
  const { store } = initStore();
  return (
    <Provider store={store}>
      <ThemeSelect />
    </Provider>
  );
};
