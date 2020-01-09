# Development

## Technology Stack

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) (Typescript preset).

- Programming language: [TypeScript](https://www.typescriptlang.org/)
- View: [React](https://reactjs.org/)
- State management: [Redux](https://redux.js.org/)
- Side effects: [redux-saga](https://redux-saga.js.org/)
- Internationalization: [react-i18next](https://react.i18next.com/)
- Styling: [SCSS](https://sass-lang.com/) with [Tailwind](https://tailwindcss.com/)
- Dependency management: [yarn](https://yarnpkg.com)

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

| Command         | Description                                          |
| --------------- | ---------------------------------------------------- |
| build           | Builds the app for production to the `build` folder. |
| format          | Reformat all files with `prettier`.                  |
| generate        | Generate boilerplate code (components, widgets).     |
| lint:fix        | Run ESLint, apply automatic fixes if possible.       |
| storybook:start | Start Storybook                                      |
| test            | Run tests and check test coverage.                   |

The `master` branch is (manually) deployed to [dashboard.darekkay.com](https://dashboard.darekkay.com).

## Creating a new widget

1. Run the file generator (`yarn generate Widget`).
2. Adjust the widget's `properties.ts` file with sane initial values.
3. Optionally, you may create a `configuration.tsx` file to enable a configuration modal for the new widget.
4. Re-scan the available widgets (`yarn scan-widgets`).
5. Add mandatory widget labels (at least `name`) to all translation files under `common/translations`.
6. Add documentation under `docs/widgets`.

## Storybook

This project uses [Storybook](https://storybook.js.org/), a tool for developing UI components in isolation. It is automatically deployed [here](https://dashboard.darekkay.com/storybook/) on every push to production. Every widget and every common component should provide a story in a `__stories__` sub-folder.

## Internationalization

The [react-i18next](https://react.i18next.com/) library handles internationalization. Translations are located under `src/common/translations`, one file per language. Currently, English (`en.json`) and German (`de.json`) translations are available.

The label keys can be viewed in a `debug` mode by adding `debug:labels` to the URL, e.g. [https://dashboard.darekkay.com/?debug:labels](https://dashboard.darekkay.com/?debug:labels).

Default UI language is based on the browser language and can be changed by the user in the settings dialog.

## Commit message format

- Use imperative form (e.g. "Fix" instead of "Fixed" or "Fixes").

## Changelog format

The changelog uses emojis to categorize changes. View the emoji format [here](https://github.com/darekkay/config-files/blob/master/github/CHANGELOG.md).

## Code of Conduct

This project is released with a [Contributor Code of Conduct](https://github.com/darekkay/dashboard/blob/master/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
