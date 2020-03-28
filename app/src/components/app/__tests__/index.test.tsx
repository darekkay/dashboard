import React from "react";
import ReactDOM from "react-dom";

import { mountConnected } from "common/utils/mock";
import App from "../index";

/** With react-grid-layout 0.17.1, this test is failing */
it("renders without crashing", () => {
  const div = document.createElement("div");

  const wrapper = mountConnected(<App />);
  ReactDOM.render(wrapper, div);
  ReactDOM.unmountComponentAtNode(div);
});
