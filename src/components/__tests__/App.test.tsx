import React from "react";
import ReactDOM from "react-dom";

import { mountConnected } from "common/utils/mock";
import App from "../App";

it("renders without crashing", () => {
  const div = document.createElement("div");

  const wrapper = mountConnected(<App />);
  ReactDOM.render(wrapper, div);
  ReactDOM.unmountComponentAtNode(div);
});
