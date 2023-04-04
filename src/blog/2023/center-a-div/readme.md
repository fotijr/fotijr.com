---
title: How to center a div
subtitle: The definitive guide on how to center a div.
lang: en-US
published: 2023-03-19
layout: BlogLayout
meta:
  - name: keywords
    content: css
  - name: description
    content: The definitive guide on how to center a div.
---

Recently I was asked simple question:

> How would you center a div?

Instead of a clear answer popping into my head, I initially just had questions. _Is it the only child DOM element? Is the size fixed? Is content length variable? What should the overflow behavior be?_ And many more. It's a meme for a reason 🤷

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The senior engineer waiting for you to finish your question so they can reply “it depends”. <a href="https://t.co/mJ3FnpK5FH">pic.twitter.com/mJ3FnpK5FH</a></p>&mdash; Taylor Poindexter (@engineering_bae) <a href="https://twitter.com/engineering_bae/status/1570756303374684162?ref_src=twsrc%5Etfw">September 16, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

It struck me how interesting the simplest of questions can be, and so I wanted to dive in. Here's my version of _The Definitive Guide on How to Center a Div_.

All linked demos are single page examples with unminified CSS and JS and so are easily explored & downloaded.

## Centered with flex
The most maintainable & capable way to center HTML elements is using `display: flex`. Flex can center horizontally, vertically, and has other alignment methods available. It also works on multiple DOM elements at the same tree level.
```css
/* Centers child div horizontally & vertically */
display: flex;
align-items: center;
justify-content: center;
```

✨ <a href="/examples/centering/flex.html">Demo with flex</a>

Use flex, unless you have a reason not to.

## Centered absolutely
Centering with `position: absolute` is cheating. It's quick and easy but breaks down in many situations. It won't work with multiple DOM elements at the same level in the DOM tree. It also behaves differently when an element higher in the DOM tree has `position: relative` set. But if you must, here's how to do it:

```css
position: absolute;
top: 50%;
left: 50%; s
transform: translate(-50%, -50%);
```

✨ <a href="/examples/centering/absolute.html">Demo with absolute</a>

Positioning absolutely _does_ work well in modal/popup types of usages, where:
- It's the only element being shown.
- It's reliably a direct child of the `<body>` tag.

This is how [Angular Material's CDK](https://material.angular.io/cdk/portal/overview) Dialog works. It creates a "portal" at the top-level of the DOM tree, and any dialogs are inserted there to ensure correct positioning. The CDK portal happens mostly under the hood, so you can create and use dialogs in any component and not have to worry about references directly to DOM elements.

***
**🚧 ⚠ Warning: the rest of the methods are not recommended, for obvious reasons.**
***

## Centered over cursor
Why worry about where to position the div? Just put it on the user's cursor. If it's in the wrong place, it's a user error. There are two ways to do this: base64-encode the content, or get the mouse position in JS and update the content's absolute position.

### Base64-encoded cursor
Info here about base encoding.

✨ <a href="/examples/centering/cursor.html">Demo with base64 cursor</a>


### Cursor position in JS
Detect a mouse move in JavaScript and update CSS variables. 

✨ <a href="/examples/centering/cursor.html">Demo with cursor centering</a>


## Centered geospatially
If you're trying to center content on a web page, your thinking too small. Instead, center it on ...the planet. Get a user's location using `navigator.geolocation.getCurrentPosition()`. Once the latitude and longitude coordinates are known, center the content over the user's location using [Globe.gl](https://globe.gl/) to plot it on a globe.

✨ <a href="/examples/centering/geo.html">Demo with geo centering</a>

## Centered gyroscopically
[MDN doc](https://developer.mozilla.org/en-US/docs/Web/API/Window/deviceorientation_event) on `deviceorientation`. [Great demo](https://sensor-js.xyz/demo.html) on device sensor data available in JS.

✨ <a href="/examples/centering/gyroscope.html">Demo with gyroscopic centering</a>
