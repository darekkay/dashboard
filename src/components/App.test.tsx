import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import config from "../config";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App config={config} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
