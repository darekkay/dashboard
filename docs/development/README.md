# Development

## Technology Stack

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) (Typescript preset).

- Programming language: [TypeScript](https://www.typescriptlang.org/)
- View: [React](https://reactjs.org/)
- State management: [Redux](https://redux.js.org/)
- Side effects: [redux-observable](https://redux-observable.js.org/)
- Internationalization: [i18next](https://www.i18next.com/)
- Styling: [SCSS](https://sass-lang.com/) with [Tailwind](https://tailwindcss.com/)
- Package management: [yarn](https://yarnpkg.com)

## Installation

Notice: You may also use `npm` instead of `yarn`.

1. Install all dependencies:

```bash
yarn install
```

2. Start app:

```bash
yarn start
```

3. Open [http://localhost:42007](http://localhost:42007) to view the app in the browser.

## Available tasks

The `package.json` file contains other useful scripts, which you can execute using `yarn <command>` or `npm run <command>`:

| Command   | Description                                          |
| --------- | ---------------------------------------------------- |
| build     | Builds the app for production to the `build` folder. |
| format    | Reformat all files with `prettier`.                  |
| generate  | Generate boilerplate code (components, widgets).     |
| lint:fix  | Run ESLint, apply automatic fixes if possible.       |
| storybook | Start Storybook                                      |
| test      | Run tests and check test coverage.                   |

The `master` branch is (manually) deployed to [dashboard.darekkay.com](https://dashboard.darekkay.com).

## Creating a new widget

1. Run the file generator (`yarn generate`) and select `Widget`.
2. Adjust the widget's `properties.ts` file with sane initial values.
3. Re-scan the available widgets (`yarn scan-widgets`).
4. Add mandatory widget labels (at least `name`) to all translation files under `common/translations`.

Optionally, you may create a `configuration.tsx` file to enable a configuration modal for the new widget.
