# Dashboard

[![Travis](https://img.shields.io/travis/darekkay/dashboard.svg?style=flat-square)](https://travis-ci.org/darekkay/dashboard) [![license](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](https://github.com/darekkay/dashboard/blob/master/LICENSE)

## Goal

The goal of this project is a fully customizable and extendable dashboard/startpage, with modules like clock, weather, todo tasks, bookmarks, calendar, ... (see also my [ideas](#design-and-ideas))

Usually, I wait for a MVP before releasing a project. This project will be developed in public from Day 1. I document my progress and (knowledge) insights in the [journal](JOURNAL.md), while the [changelog](CHANGELOG.md) describes the actual project features.

The current state of the project is available at [dashboard.darekkay.com](https://dashboard.darekkay.com).

## Motivation

Why build yet another dashboard app?

Most popular apps (like [Momentum](https://momentumdash.com/)) are neither open-source nor customizable to a degree that I'd like it to be. On the other hand, most open-source projects seem to be outdated.

Finally, a new project is a great opportunity to learn new concepts. For this project, I mainly want to try out the following:

1. [TypeScript](https://www.typescriptlang.org/). I'm being late to the party with this one.
2. Reactive programming using [RxJS](https://rxjs.dev/). The data for each module may come from different places (service, local storage etc.), so it sounds like a good use case.

## Design and Ideas

The first milestone is a dashboard framework ("grid") with some simple, static modules (no external data, yet). The app and module configuration will be included in a simple config file. The result will be a static HTML page, like a custom browser [startpage](https://www.reddit.com/r/startpages).

The next step will be to integrate 3rd party providers. I'd like to store as few data as possible on the server side and use local storage whenever possible.

### Feature ideas

- [x] Themes support. Because noone will bat an eye without a Dark Mode™.
- [] Use a real login to restrict access to sensitive data, especially when integrating 3rd party providers.
- [x] Reorder modules within the UI instead of using a config file (Drag and Drop).
- [] Use a monorepo (lerna) to split this project into a core and individual modules.

### Implemented widgets

| type      | description           |
| --------- | --------------------- |
| text      | Notes field           |
| date-time | Current date and time |
| search    | Web search            |

The configuration options for each widget are listed [here](docs/widgets.md).

### Widget/integration ideas

- [x] Current date and time
- [] Current weather and forecast
- [] Bookmarks
- [x] Search (for different search engines)
- [x] Notes
- [] Calendar / next events
- [] Daily message (quote, image, tip)
- [] Todo tasks (integration with 3rd party, like Todoist, Wunderlist or GitHub Issues)
  ...

## Contribution

All contributors are highly welcome, especially designers. If you want to collaborate on this project, just give me a [note](mailto:hello@darekkay.com).

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) (Typescript preset).

Notice: I'm using `yarn`, but you may use `npm` as well.

1. Install all dependencies:

```bash
yarn install
```

2. Start app:

```bash
yarn start
```

3. Open [http://localhost:42007](http://localhost:42007) to view the app in the browser.

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

## License

This project and its contents are open source under the [MIT license](LICENSE).
