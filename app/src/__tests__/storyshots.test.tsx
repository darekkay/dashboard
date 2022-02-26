import path from "path";

import initStoryshots from "@storybook/addon-storyshots";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";
// import { Page } from "puppeteer/lib/esm/common/Page";

// const beforeScreenshot = async (page: Page) => {
// console.log("beforeScreenshot");
// await page.waitForSelector(".theme-default");
// };

initStoryshots({
  suite: "Image snapshots",
  framework: "react",
  configPath: path.join(__dirname, "..", "..", ".storybook"),
  storyKindRegex: "Components",
  test: imageSnapshot({
    storybookUrl: `file://${path.join(
      __dirname,
      "..",
      "..",
      "storybook-static"
    )}`,
    getMatchOptions: () => {
      return {
        failureThreshold: 0.2,
        failureThresholdType: "percent"
      };
    }
    // beforeScreenshot
    // setupTimeout: 60000,
    // testTimeout: 60000
  })
});
