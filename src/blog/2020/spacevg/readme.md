---
title: SpaceVG
subtitle: Building an SVG animation with Vue and Vite.
lang: en-US
published: 2020-09-26
layout: BlogLayout
meta:
  - name: keywords
    content: javascript vue vite svg css animation
  - name: description
    content: Building an SVG animation with Vue and Vite.
---

Last week I started on a fun project to try out a few technologies. My goals were:

- Gain experience with [Vue 3](https://github.com/vuejs/vue-next/releases/tag/v3.0.0).
- Try out [Vite](https://github.com/vitejs/vite).
- See how much I could achieve using an SVG and CSS animations (without JS or libraries).

Since there was no other utility to this project, I could build whatever I wanted. Naturally I chose space, since I’m obsessed with space. I decided to build a visualization of a reusable launch vehicle. Reusability in space unlocks so much potential, plus it's [extremely](https://www.youtube.com/watch?v=z46RiuZvh6c) [cool](https://www.youtube.com/watch?v=lXgLyCYuYA4).

## Shipped

The final result is viewable at [spacevg.fotijr.com](https://spacevg.fotijr.com/). Code is available on [GitHub](https://github.com/fotijr/spacevg), and just like [this very site](../how-its-made/#netlify), SpaceVG is continuously deployed with Netlify.

![SpaceVG](./thumbnail.png 'SpaceVG')

Let's revisit those project goals.

## Vue 3

For this project Vue 3 felt very familiar, since I didn't rely on too many new features. I did enjoy experimenting with the [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api). It's clear how this new API will excel when sharing logic between components. Ultimately it wasn't need in this effort since most of the component logic was baked into CSS animations.

I also tried out Vue 3's experimental new feature, [state-driven CSS variables](https://github.com/vuejs/rfcs/blob/sfc-improvements/active-rfcs/0000-sfc-style-variables.md). With CSS variables now widely supported among popular browsers, it unlocks a lot of potential in the design process. In the end, toggling animations with one class on the outer `<g>` element [proved simplest](https://github.com/fotijr/spacevg/blob/9e7ccfbbab1604d0dfb27cbc1c8018affcf269d8/src/components/PlanetEarth.vue#L26). But again, it's still valuable having another option in the toolbox.

## Vite

I remember seeing this tweet from Evan You (creator of Vue), which eventually proved to be the beginnings of Vite:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">As I was going to bed, I had an idea about a no-bundler dev setup (using native browser ES imports), but with support for Vue SFCs **with hot reload**. Now it&#39;s almost 6AM and I have PoC working. The hot reload is so fast it&#39;s near instant.</p>&mdash; Evan You (@youyuxi) <a href="https://twitter.com/youyuxi/status/1252173663199277058?ref_src=twsrc%5Etfw">April 20, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Reading this at the time, I was almost annoyed. _Why are you working on something else? Just ship Vue 3!_ Obviously I was eager for the new Vue to be production-ready. Ironically, I ended up being way more grateful for Vite when coding SpaceVG then I was for any new Vue 3 features.

Vite is a development build tool and web server. It is wonderfully fast, since it avoids bundling by using ES module imports. Vite starts up almost immediately, and the hot module replacement is so fast that it seems almost simultaneous with saving changes in a file. 

Vite's speed and simplicity are due to its [clear and opinionated](https://github.com/vitejs/vite#how-and-why) goals. I love how focused the vision is in this project. It seems to have really enabled them to build something incredibly useful, and honestly, _fun_. I was not expecting to enjoy Vite this much, but the truly-immediate feedback makes a huge impact on the developer experience.

## SVG
Scalable Vector Graphics (SVG) are an invaluable tool for the responsive web. As the name implies, they are scalable so look great at any resolution. I wanted to have the entire space scene inside of an SVG. Normally for a task like this I would use [D3](https://d3js.org/), which is an incredibly powerful API for building SVGs. Since my goal was learning technical details, I skipped D3 and just started adding nodes to my SVG.

The biggest difficulty in working with an SVG for this was the fact that I am not an artist. I don't use Adobe tools, so generating the original SVG elements to look like a recognizable rocket was a bit of a challenge. I mostly relied on this [online editor](https://editor.method.ac/), which feels like MS Paint with the ability to export as an SVG Path.

## CSS animations
[CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) are a powerful feature in web browsers. Performance is generally quite good, since there are native optimization tricks used by browsers that aren't available directly in JavaScript. I'm passionate about writing well-performing software, so this is a valuable front-end capability for any developer to understand.

Animations are built into most UI frameworks for common scenarios like transitions. For a task like SpaceVG where it's basically animating an entire scene, most people would use a library like [GreenSock](https://greensock.com/gsap/). GreenSock allows you to define all element behavior in JS, but then translates that to CSS animations. This gives you the maintainability and clarity of an expressive API, while still taking advantage of native browser performance. 

I didn't use GreenSock for this task because I was avoiding third-party libraries. I wanted a fuller understanding of CSS animations. I can say after writing SpaceVG that something like GreenSock makes perfect sense. There are a lot of duplicate timing values in my animations and if I want to tweak any values, I usually need to edit a few other computed values.


## Animation bugs in Safari
In development, I used Firefox for testing. I verified in Chrome at some point in the middle of the work, and the animations looked identical. Great! I did _not_, however, try it in Safari until my work was done. Here's how it looked:

<video width="400" height="330" controls loop>
  <source src="./safari-behavior.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

In case it's not clear, the problems in the video are:
- No initial "ignition", on both stages. This is the simplest animation, since it's only toggling visibility on the fire element.
- First stage position is wrong after MECO, and it jumps around during the landing.
- Second stage position is wrong when it should be beginning its first burn.
- Satellite pops out of the fairings and goes the opposite way.
- Fairing opening animation is wrong, it should slide open. 
- Second stage position is wrong at the start of the de-orbit burn.

Clearly, my work was not done. I began doing some research and there are lots of posts from people encountering Safari bugs. Unfortunately, much of the information was contradictory. Here are the issues I found, although it may be easier to read my [PR](https://github.com/fotijr/spacevg/pull/2):

- **Safari can't handle multiple usages of the same animation in the same attribute.** This feels like a joke but yes, really. I only discovered this by on a whim copy/pasting an animation and changing the name. This fixed the fire animation only working the last time for both rocket stages.

- **Keyframes need explicit 0% and 100% values.** Other browsers use whatever the previous value of the element is, but Safari seems to revert back to its original value (even though I was using `animation-fill-mode: forwards;`). Explicitly stating the 0% and 100% values of all keyframe animations fixed all of the rocket positioning issues.

- **Don't assume any value!** This is similar to the previous quirk, but Safari seems to struggle knowing what value to animate. I had to specify `rotateZ(0deg)` in a transform, but a zero degree rotation should be the default.

## The good, the bad, and the Safari
Overall, I had a lot of fun building SpaceVG. I unexpectedly became a huge fan of Vite. Vue 3 was a smooth upgrade and output bundle size is impressive. And Safari is the worst 😈

My kids also seemed to really enjoy this project. They took turns pressing the launch button and quickly turned it into a [Kessler Syndrome](https://en.wikipedia.org/wiki/Kessler_syndrome) animation.

![Kessler Syndrome](./kessler-syndrome.png 'Kessler Syndrome')
