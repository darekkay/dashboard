import React from "react";
import ReactDOM from "react-dom";

import config from "../config";
import { App } from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App config={config} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
