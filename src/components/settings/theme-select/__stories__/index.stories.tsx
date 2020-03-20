import React from "react";
import { storiesOf } from "@storybook/react";
import { Provider } from "react-redux";

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
