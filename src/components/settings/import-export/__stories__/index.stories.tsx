import React from "react";
import { Provider } from "react-redux";
import { storiesOf } from "@storybook/react";

import initStore from "state/store";

import ImportExport from "../index";

const Story = () => {
  const { store } = initStore();
  return (
    <Provider store={store}>
      <ImportExport />
    </Provider>
  );
};

storiesOf("Components.ImportExport", module).add("Variants", () => <Story />);
