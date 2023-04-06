---
title: How to center a div
subtitle: The definitive guide on how to center a div.
lang: en-US
published: 2023-04-06
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

It struck me how interesting this simple question actually was, and so I wanted to dive in. Here's my version of _The Definitive Guide on How to Center a Div_.

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
Content can be saved as an image, then that image can be used as a CSS cursor.
```css
cursor: url('my-cool.svg'), auto;
```

For our example, it seemed like cheating to screenshot content and format the image. Instead, the demo page draws the content in a `<canvas>` element and then the content is base64-encoded and logged to the console. From there, I copied the data and put it into css using `cursor: url('data:image/jpeg;base64,LONG-DATA-STRING', auto);`.

The most difficult part about getting this working was the browser silently disallowing images over a certain size. Eventually I figured out I needed to first size the canvas element to 128x128 pixels before base64-encoding the data. MDN has [helpful details and best-practices](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#icon_size_limits) to consider if this is a technique you need to implement.

✨ <a href="/examples/centering/cursor.html">Demo with base64 cursor</a>


### Cursor position in JS
In addition to the pure-CSS approaches, you can let JavaScript assist _a little_ to improve the flexibility. Listening to the `mousemove` event allows for tracking the mouse position, and in the event listener you can pass the values from JS to CSS variables.

```js
window.addEventListener('mousemove', (event) => {
  const { pageX, pageY } = event;
  root.style.setProperty('--cursor-x', `${pageX}px`);
  root.style.setProperty('--cursor-y', `${pageY}px`);
});
```

In CSS the content can be positioned absolutely, with the `left` and `top` values coming from the CSS variables.
```css
left: var(--cursor-x);
top: var(--cursor-y);
```

✨ <a href="/examples/centering/cursor-vars.html">Demo with cursor centering</a>


## Centered geospatially
If you're trying to center content on a web page, your thinking too small. Instead, center it on ...the planet. Get a user's location using `navigator.geolocation.getCurrentPosition()`. Once the latitude and longitude coordinates are known, center the content over the user's location using [Globe.gl](https://globe.gl/) to plot it on a globe.

✨ <a href="/examples/centering/geo.html">Demo with geo centering</a>

## Centered gyroscopically
This approach will only work on mobile devices, but it's a lot of fun. The
[deviceorientation](https://developer.mozilla.org/en-US/docs/Web/API/Window/deviceorientation_event) event exposes a devices gryoscope & accelerometer data. To see all of what's possible, check out this [very detailed demo](https://sensor-js.xyz/demo.html) on sensor data available in JS.

✨ <a href="/examples/centering/gyroscope.html">Demo with gyroscopic centering</a>


## And if all else fails...
You can party like it's 1999 and do your whole layout in a `<table>`.
