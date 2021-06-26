/** Removes unnecessary data from the demo file */

import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

import { State } from "../../src/state/store";

const demoFilePath = join(
  __dirname,
  "..",
  "..",
  "src",
  "templates",
  "demo.json"
);
const demo = JSON.parse(readFileSync(demoFilePath, "utf-8")) as State;

// redux-persist
// @ts-expect-error
delete demo._persist;

// configuration
demo.config.language = "";
demo.config.theme = "";

// widgets
demo.widgets = Object.entries(demo.widgets).reduce((acc, [id, widget]) => {
  const supportsUpdates = widget.meta.updateCycle !== undefined;
  if (supportsUpdates) {
    widget.data = {};
    widget.meta.updateStatus = "idle";
    delete widget.meta.lastUpdated;
  }

  return {
    ...acc,
    [id]: widget,
  };
}, {});

// layout
demo.layout.isEditable = false;

writeFileSync(demoFilePath, JSON.stringify(demo, null, 2));
