# Development

This is the technical overview of the project.

## Technology Stack

The project consists of three different modules: `client`, `server` and `docs`.

### Client

This client module was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) (Typescript preset).

- Programming language: [TypeScript](https://www.typescriptlang.org/)
- View: [React](https://reactjs.org/)
- State management: [Redux](https://redux.js.org/)
- Side effects: [redux-saga](https://redux-saga.js.org/)
- Internationalization: [react-i18next](https://react.i18next.com/)
- Styling: [SCSS](https://sass-lang.com/) with [Tailwind](https://tailwindcss.com/)
- Testing: [jest](https://jestjs.io/), [react-testing-library](https://testing-library.com/)
- Dependency management: [yarn](https://yarnpkg.com)

#### Storybook

This project uses [Storybook](https://storybook.js.org/), a tool for developing UI components in isolation. It is automatically deployed [here](https://dashboard.darekkay.com/storybook/) on every push to production. Every widget and every common component should provide a story in a `__stories__` sub-folder.

### Server

The server module is an [Express](https://expressjs.com/) application. Currently, it is being used as a "gateway" to access 3rd-party data. Here are some reasons why routing external requests through the `server` module is a good idea:

- Some 3rd party services cannot be called directly from the client because they don't allow [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).
- API keys will be leaked if the request is being sent directly from the client.
- Routing the request through the server module enables internal caching, so the 3rd party service doesn't get as many (duplicate) requests.

### Documentation

The documentation is created with [VuePress](https://vuepress.vuejs.org/). It is hosted at [dashboard.darekkay.com/docs/](https://dashboard.darekkay.com/docs/).

## Setup

### Prerequisites

Required:

- Node.js 12+

Recommended:

- React Developer Tools (AddOn for [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) / [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/))
- Redux DevTools (AddOn for [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) / [Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/))

Some widgets require a 3rd-party API key which needs to be stored at `server/.env`:

- [Unsplash](https://unsplash.com/documentation)
- [Twitter](https://developer.twitter.com/en/docs/twitter-api)
- [OpenWeatherMap](https://openweathermap.org/api)
- [YouTube](https://developers.google.com/youtube/v3/getting-started)

The project will run with missing API keys, but the affected widgets will not work.

### Installation

Depending on the module(s) that you want to work on, you have to repeat those steps for each subfolder.

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

Notice: The `server` module offers the `yarn dev` task which uses `nodemon`. It will restart the server every time a file is changed.

## Available tasks

The `package.json` files contain other useful scripts, which you can execute using `yarn <command>` or `npm run <command>`:

| Command         | Description                                          |
| --------------- | ---------------------------------------------------- |
| build           | Builds the app for production to the `build` folder. |
| format          | Reformat all files with `prettier`.                  |
| generate        | Generate boilerplate code (components, widgets).     |
| lint:fix        | Run ESLint, apply automatic fixes if possible.       |
| storybook:start | Start Storybook                                      |
| test            | Run tests and check test coverage.                   |

The `master` branch is (manually) deployed to [dashboard.darekkay.com](https://dashboard.darekkay.com).

## Architecture

### Creating a new widget

1. Run the file generator (`yarn generate Widget`) in the `app` module.
2. Adjust the widget's `properties.ts` file with sane initial values.
3. Re-scan the available widgets (`yarn scan-widgets`).
4. Add mandatory widget labels (at least `name`) to all translation files under `common/translations`.
5. Edit documentation under `docs/widgets`.

### Creating a new server endpoint

1. Run the file generator (`yarn generate`) in the `server` module.
2. Add the new route to `server/src/router.ts`

### Auto-updating data

Many widgets depend on external data. To keep this data up-to-date, each widget defines an update cycle in its `properties.ts` file:

```javascript
export const initialMeta = {
  updateCycle: { hours: 24 },
  updateStatus: "idle",
};
```

When creating a new widget (using `yarn generate`), make sure to choose the option to "use sagas". This will set up much of the necessary boilerplate. The core update logic is implemented in `useTriggerUpdate`. An update will be automatically triggered:

- After each update cycle (per widget type)
- Whenever a dependent prop changes (e.g. when adjusting the settings)
- On page reload

### Internationalization

The [react-i18next](https://react.i18next.com/) library handles internationalization. Translations are located under `src/common/translations`, one file per language. Currently, English (`en.json`) and German (`de.json`) translations are available. If a label translation is missing, the English label will be used as fallback.

The label keys can be viewed in a `debug` mode by adding `debug:labels` to the URL, e.g. [https://dashboard.darekkay.com/?debug:labels](https://dashboard.darekkay.com/?debug:labels).

Default UI language is based on the browser language and can be changed by the user in the settings dialog.

Numbers are localized using a custom [i18next formatter](https://www.i18next.com/translation-function/formatting): `t("number", { value }`.

To find missing label translations, run `yarn i18n` in the `app` module.

### Typography

Use CSS utility classes `text-1` to `text-7` to adjust font sizes. To preserve a consistent look across all widgets, use `text-3` as the base size.

### Color palette

Base style definitions are extracted into a common [@darekkay/styles](https://github.com/darekkay/darekkay-styles) package. This includes a color palette based on the [U.S. Web Design System](https://designsystem.digital.gov/design-tokens/color/overview/). It provides some unique accessibility properties: a foreground/background color ratio with a number of 50+ will always be accessible (WCAG AA). All available colors can be viewed in [Storybook](https://dashboard.darekkay.com/storybook/?path=/story/common-colors--kitchen-sink).

Currently, there are two different color themes (`default` and `dark`). Those themes are implemented using CSS custom properties, making it easy to maintain and extend. The naming should be color-agnostic (e.g. `primary` instead of `red`), but it is still a work in progress.

### Icons

This project uses icons from [Font Awesome](https://fontawesome.com/icons). The icons are imported and (re-)defined one at a time to include only used icons in the build bundle (`components/icon/font-awesome`):

```jsx
import { faHome, ... } from "@fortawesome/free-solid-svg-icons";

export type FontAwesomeIconName = "home" | ...;

const icons = {
  home: faHome,
  ...
}
```

Example usage:

```jsx
<Icon name="home" />
```

### Grid

The actual dashboard/grid functionality is implemented with the [react-grid-layout](https://github.com/STRML/react-grid-layout/) library. Because of some critical issues, a [fork](https://github.com/darekkay/react-grid-layout) is currently being used.

### Browser support

All current browsers are supported (Chrome, Firefox, Safari, Edge). IE11 is **not** supported, mostly due to the usage of [CSS Custom Properties](https://caniuse.com/#search=custom%20properties). I've tried using [a polyfill](https://github.com/nuxodin/ie11CustomProperties), but the results weren't great.

## Contributing

Please run `yarn ci` for every changed module to make sure there are not linting issues or failing unit tests. Run `yarn lint:fix` to fix some common issues, incl. prettier formatting.

### Commit message format

- Use imperative form (e.g. "Fix" instead of "Fixed" or "Fixes").

### Changelog format

The changelog uses emojis to categorize changes. View the emoji format [here](https://github.com/darekkay/config-files/blob/master/github/CHANGELOG.md).

### Code of Conduct

This project is released with a [Contributor Code of Conduct](https://github.com/darekkay/dashboard/blob/master/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
