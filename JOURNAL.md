## 2019-03-14 (1.0.0)

The journey begins :rocket:

With zero practical TypeScript experience, I've had some issues setting up the project, despite using a [boilerplate](https://github.com/facebook/create-react-app). To get started, I've migrated three common JS components from my other app (button, link, icon). I've checked some best practices and popular Typescript/React projects, trying to do it the right way™ (e.g. correct types).

I'm really looking forward to experiencing the praised improvement over vanilla JavaScript. My IDE of choice, IntelliJ IDEA, supports TypeScript types for popular projects, so I've already got a good IntelliSense even without TypeScript .

The [CI pipeline](https://travis-ci.org/darekkay/dashboard) is on and the project is already [live](https://dashboard.darekkay.com) (not much is going on, though).

## 2019-03-17 (1.0.1)

I had to make a decision: what responsive behavior should the dashboard grid follow? There are multiple approaches:

1. [Hero Panel](https://heropanel.com/) uses pixel-perfect sizings and breaks at 700px into 1x1 widgets. This makes the widgets always look good, as they are fixed-sized. However, the content is simply cut above the breakpoint if it does not fit into the viewport. Also, I prefer seeing more content than a 1x1 widget in mobile view.

2. Use a [masonry](https://masonry.desandro.com/) layout. This approach makes sure to place all widgets optimally at all breakpoints. This is great for content where the order doesn't matter. However, on a dashboard I don't want my widgets to move around auto-magically.

3. Let the user define the layout for each breakpoint. Meh, too much work for the user.

4. Make the widgets fluid and break into a single column at 767px ([example](https://colorlib.com/polygon/adminator/index.html)). Also add a max width to prevent over-stretching the content.

I think that #4 is the best trade-off.

I've implemented a simple Dashboard using CSS Grid. The user may define the number of columns and rows and assign a relative width and height for each widget. In the future, this should be configurable within the UI (drag and drop), but for a MVP this is enough.

## 2019-03-20 (1.0.2)

I've implemented the first, very basic widget: Text Widget. It just displays fixed text, nothing fancy. Maybe it can be extended to support some basic formatting options in the future.

Most work happened under the hood. I've cleaned up the code and tried to establish a good framework to build upon.

## 2019-xx-xx (1.0.3)

I've added a new shiny favicon, based on [Font Awesome 5](https://fontawesome.com/).
