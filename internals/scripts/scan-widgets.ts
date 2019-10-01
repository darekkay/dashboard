import { readdirSync, existsSync, writeFileSync } from "fs";

const WIDGETS_PATH = "src/widgets";
const CONFIGURATION_FILE = "configuration.tsx";
const OUTPUT_FILE = "list.ts";

const directoriesForPath = (path: string) =>
  readdirSync(path, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

/* A widget is configurable if a configuration file exists */
const isConfigurable = (widget: string) =>
  existsSync(`${WIDGETS_PATH}/${widget}/${CONFIGURATION_FILE}`);

const allWidgets = directoriesForPath(WIDGETS_PATH);
const result = allWidgets.reduce(
  (acc, widget) => ({
    ...acc,
    [widget]: {
      configurable: isConfigurable(widget)
    }
  }),
  {}
);

const template = (widgets: object) => `import { Widgets } from "./index";
export default ${JSON.stringify(widgets)} as Widgets;`;

writeFileSync(`${WIDGETS_PATH}/${OUTPUT_FILE}`, template(result));
