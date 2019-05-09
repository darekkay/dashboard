import React from "react";
import ReactDOM from "react-dom";

import { mountConnected } from "common/utils/mock";
import App from "../app/App";

jest.useFakeTimers();

it("renders without crashing", () => {
  const div = document.createElement("div");

  const wrapper = mountConnected(<App />);
  ReactDOM.render(wrapper, div);
  ReactDOM.unmountComponentAtNode(div);

  expect(setInterval).toHaveBeenCalled();
});
