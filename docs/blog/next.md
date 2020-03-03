# 2020-03-xx (1.1.5)

![](../assets/img/1.1.5.png)

## Edit mode redesign

8/10 of my testers found the "edit mode" confusing and unnecessary. From user perspective, I agree: why can't I just drag and drop the widgets without entering an "edit mode"? The challenge was to make it work reliably without sacrificing the simple UI. For example, I like the `Text` widget's full-size behavior, which makes implementing drag'n'drop difficult, though.

One common pattern is to use a fixed header for every widget and use it as a drag handler. I've tested this approach, but I _really_ dislike cluttering the UI with otherwise unnecessary headers.

Instead, I've got inspired by [Ryeboard](https://www.ryeboard.com/). All widgets contain an overlay that makes them movable/resizable by default. To access the widget itself, the user has to click it once (without dragging). I think this solution has the best trade-off between UX and UI.
