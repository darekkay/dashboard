import { resolve } from "path";

import dotenv from "dotenv";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

const loadEnvFiles = (mode) => {
  // similar approach to how Vite handles env files
  const envFiles = [`.env.${mode}.local`, `.env.${mode}`, `.env.local`, `.env`];
  for (const file of envFiles) {
    dotenv.config({ path: file });
  }
};

// https://vitejs.dev/config/
export default ({ mode }) => {
  loadEnvFiles(mode);

  return defineConfig({
    server: {
      port: 42007,
    },

    resolve: {
      alias: [
        {
          find: /^~@darekkay\/styles/,
          replacement: resolve(__dirname, "node_modules/@darekkay/styles"),
        },
      ],
    },

    define: {
      // explanation: https://darekkay.com/blog/create-react-app-to-vite/#environmental-variables
      "process.env.NODE_ENV": `"${mode}"`,
      "process.env.APP_VERSION": `"${process.env.npm_package_version}"`,
      "process.env.DASHBOARD_API_BASE_URL": `"${process.env.DASHBOARD_API_BASE_URL}"`,
      "process.env.DASHBOARD_IS_STORAGE_PAUSED": `"${process.env.DASHBOARD_IS_STORAGE_PAUSED}"`,
    },

    build: {
      outDir: "build",

      rollupOptions: {
        output: {
          // https://github.com/facebook/regenerator/issues/378
          intro: "window.regeneratorRuntime = undefined;",
        },
      },
    },

    plugins: [
      react({
        // Exclude Storybook stories
        // eslint-disable-next-line prefer-named-capture-group
        exclude: /\.stories\.(t)sx?$/,
      }),
      svgr(),
      tsconfigPaths(),
    ],
  });
};
