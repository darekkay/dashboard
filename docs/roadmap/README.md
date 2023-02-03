# Roadmap

This is the project's idea hub. Smaller tasks are listed as [GitHub Issues](https://github.com/darekkay/dashboard/issues).

## Vision

Like with most side projects, the idea for this project came from my own desire to have a single place to see all my relevant data. For example, I'm working with a todo manager, checking my calendar events or looking up the weather forecast. I also like to monitor stuff.

My personal goal is to have a dashboard with all the integrations I find useful to myself, but also create widgets other people might need. I also like to challenge myself technically with topics that I'm not familiar with.

This project is neither meant as a startup, nor do I have any plans to monetize it, yet. It might change in the future, but the project will remain open-source forever.

## Features and improvements

### Multi-board support

Currently, only one fixed board can be used. Adding more boards to be able to switch between multiple views would be great. Automatically switching between the boards after x seconds might be a nice addition.

### Accounts support

All data is being stored on the user's device. This is really nice from privacy perspective, but inconvenient for syncing between devices.

### Custom widget color

Changing the (background) color of each widget would be a nice personalization feature. Either the UI offers a selection of colors, or any possible color is allowed (color picker). The second solution requires a good foreground color handling to ensure a sufficient contrast ratio.

## Widget ideas

Here's a list of rough widget ideas and integrations. They may or may not be implemented in the future.

- Tasks, Todo list
  - Local
  - 3rd Party (Todoist, Trello, GitHub Issues, ...)
- Calendar, Next events
- Countdown
- Timer
- Pomodoro Timer
- Time tracking
- Bookmarks, [Static Marks](https://darekkay.com/static-marks/)
- Video
  - YouTube, Vimeo, ...
  - This widget should be interchangeable with the Website widget. Something like [Iframely](https://iframely.com/) could be used to get the Iframe URL for any URL.
- Map
  - [React map library comparison](https://blog.logrocket.com/react-map-library-comparison/)
  - [Maps with React and Leaflet](https://www.smashingmagazine.com/2020/02/javascript-maps-react-leaflet/)
- Animations
- Soundboard, Background Sounds ([Noisli](https://www.noisli.com/), [MyNoise](https://mynoise.net/))
- Quote (daily or slideshow)
  - [Inspirational Quotes](https://github.com/vinitshahdeo/inspirational-quotes/)
- RSS Feeds
- Daily tips
  - "Chemical Element of the day" already exists
  - More integrations from [Tip of the Day](https://tips.darekkay.com/)
  - IMDB movie tips
- Server Administration
  - Status Page, Uptime
- Status Page for external services
  - See [StatusDash](https://statusdash.dev/) and [Statuspage](https://www.atlassian.com/software/statuspage)
- [PM2](https://pm2.keymetrics.io/) status
- GitHub / GitLab integration
- [NPM statistics](https://github.com/npm/download-counts)
- [Instagram statistics](https://developers.facebook.com/docs/instagram-api/guides/business-discovery)
- [Mastodon statistics](https://docs.joinmastodon.org/methods/accounts/) ([example](https://fosstodon.org/api/v1/accounts/242470@mastodon.social))
- [StackExchange statistics](https://api.stackexchange.com/docs)
- [GoodReads API](https://www.goodreads.com/api)
  - e.g. reading progress, library size
- [NomadList](https://nomadlist.com/@craigcarlyle.json) information
- Last.fm
- Calculator
- Plex [intergration](https://github.com/Arcanemagus/plex-api/wiki/Plex-Web-API-Overview)
- Whiteboard (for drawing)
- Currencies exchange rate
  - [Hacker News thread 1](https://news.ycombinator.com/item?id=22087612)
  - [Hacker News thread 2](https://news.ycombinator.com/item?id=22979288)
- [Stock Trading](https://www.tradingview.com/)
- [Man pages](https://tldr.sh/)
- Launchpad (Music Pad)
  - Pressing a widget makes a sound
  - Placing multiple widgets enables a Launchpad functionality
  - See [Online Launchpad](https://agile-spire-1086.herokuapp.com/) and [Tone.js](https://github.com/Tonejs/Tone.js)
  - Find good royalty-free samples
- Advent calendar
  - Place 24 widgets with different hidden goodies (links, images, ...).
- Conway's Game of Life
- [Bonsai](https://news.ycombinator.com/item?id=26336396) simulation
- Mini Games
  - Cookie Clicker
  - Tamagotchi
- Current IP address
- IMDB Watchlist/Rated list
- CI dashboard
  - [GitHub Actions](https://github.com/chriskinsman/github-action-dashboard)

Many more integrations ideas can be found in other products, e.g.:

- [Smashing](https://github.com/Smashing/smashing/wiki/Additional-Widgets)
- [n8n.io](https://n8n.io/integrations)
- [MagicMirror](https://github.com/MichMich/MagicMirror/wiki/3rd-Party-Modules)
- [unofficial-apis](https://github.com/Rolstenhouse/unofficial-apis)
- [Public APIs](https://public-apis.io/)
- [public-apis](https://github.com/public-apis/public-apis)

## Out of scope

- Twitter integration
  - A Twitter Stats widget was one of the first widgets in this dashboard project. Since February 2023, the access to the Twitter API is no longer free. Even if a free tier is introduced one day, Musk irreversibly lost any trust to use his platform.
