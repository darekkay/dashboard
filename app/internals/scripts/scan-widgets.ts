/** Scans available widgets and creates a "list" file for the application */

import { readdirSync, writeFileSync } from "fs";

import logger from "@darekkay/logger";

import type { WidgetProperties } from "widgets";
import type { WidgetType } from "widgets/list";

/* This script scans all availables widgets and extracts data which is required at compile/run time */

const CLIENT_PATH = "src/widgets";
const SERVER_PATH = "../server/src";
const FILE_PROPERTIES = "properties.ts";

const directoriesForPath = (path: string) =>
  readdirSync(path, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

/* Widget properties are defined in a separate file */
const getWidgetProperties = (widget: string) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require(`../../${CLIENT_PATH}/${widget}/${FILE_PROPERTIES}`).default;
  } catch {
    logger.error(`Missing properties.ts file for module '${widget}'`);
    return null;
  }
};

logger.info("Scanning available widgets.");

const allWidgets = directoriesForPath(CLIENT_PATH);
const widgetProperties = allWidgets
  .map((widget) => ({
    widget,
    properties: getWidgetProperties(widget),
  }))
  .filter(({ properties }) => properties !== null)
  .reduce(
    (accumulator, { widget, properties }) => ({
      ...accumulator,
      [widget]: properties,
    }),
    {}
  ) as Record<WidgetType, WidgetProperties>;

/* Client */

const clientTemplate = (
  widgets: Record<WidgetType, WidgetProperties>
) => `/** AUTOGENERATED (npm run scan:widgets) **/
import { WidgetProperties, WidgetImports } from "widgets";

export type WidgetType = ${Object.keys(widgets)
  .map((widget) => `"${widget}"`)
  .join(" | ")};

const widgetProperties: Record<WidgetType, WidgetProperties> = ${JSON.stringify(
  widgets
)};
export default widgetProperties;

export const widgetImports: Record<WidgetType, WidgetImports> = {
  ${Object.values(widgets)
    .map(
      (widget) => `"${widget.widgetType}": {
  component: async () => import("widgets/${widget.widgetType}"),
  ${
    widget.configurable
      ? `configuration: async () => import("widgets/${widget.widgetType}/configuration")`
      : ""
  }
  }`
    )
    .join(",")}
};

export const initialMeta = (widgetType: WidgetType) =>
  widgetProperties[widgetType].initialMeta;
`;

writeFileSync(`${CLIENT_PATH}/list.ts`, clientTemplate(widgetProperties));

/* Server */

const updateCycleWidgets = Object.entries(widgetProperties).reduce(
  (accumulator, [key, props]) => ({
    ...accumulator,
    [key]: { updateCycle: props.initialMeta.updateCycle },
  }),
  {}
);

// NICE: replace "any" with a proper type. this would require a duplication of the client-side WidgetProperties type (or a subset of it)
const serverTemplate = (
  widgets: Record<string, WidgetProperties>
) => `/** AUTOGENERATED (npm run scan:widgets) **/

const widgets: Record<string, any> = ${JSON.stringify(widgets)};
export default widgets;
`;

writeFileSync(`${SERVER_PATH}/widgets.ts`, serverTemplate(updateCycleWidgets));

logger.success("Scan finished.");
