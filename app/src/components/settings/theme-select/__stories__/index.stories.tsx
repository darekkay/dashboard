import React from "react";
import { Provider } from "react-redux";
import { storiesOf } from "@storybook/react";

import initStore from "state/store";

import ThemeSelect from "../index";

const Story = () => {
  const { store } = initStore();
  return (
    <Provider store={store}>
      <ThemeSelect />
    </Provider>
  );
};

storiesOf("Components.ThemeSelect", module).add("Variants", () => <Story />);
