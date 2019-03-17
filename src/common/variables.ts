// Variables shared between SCSS and JS

// I couldn't find a better way to import SCSS modules without TypeScript complaining
// eslint-disable-next-line @typescript-eslint/no-var-requires
const sharedVariables = require("styles/shared.module.scss");

export interface Variables {
  dashboardMaxWidth: number;
  dashboardGridGap: number;
}

const variables: Variables = {
  dashboardMaxWidth: parseInt(sharedVariables.dashboardMaxWidth),
  dashboardGridGap: parseInt(sharedVariables.dashboardGridGap)
};

export default variables;
