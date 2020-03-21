---
title: That Conference 2014 Recap
lang: en-US
published: 2014-08-14
layout: BlogLayout
meta:
  - name: keywords
    content: csharp dotnet JavaScript
  - name: description
    content: That Conference 2014 was an amazing experience filled with meeting new people, leveling up skills, and learning new tools.
---

That Conference just wrapped up, and it was incredible. It was the conference’s third year in existence, and my first year in attendance. I learned so much about all phases of development. I’m still in shock at how affordable the conference is, and I can’t recommend it highly enough to anyone in our industry. Here are my notes on the sessions I attended. Be sure to check out the speakers highlighted below, they are all friendly, immense sources of knowledge.

## Day 1
**Ripples on the Pond** by Elizabeth Naramore  
Elizabeth kicked off the conference with a keynote on the psychology and human element involved with software engineering. She did a great job calling out our industry’s shame culture. How quick are we to publicly mock others’ mistakes? We don’t know what factors went into the development decisions, so it’s not fair to ignorantly criticize. Be positive, encourage others and help them grow.

**Building an SDK for Your API** by Wade Wegner  
Wade currently works for Microsoft, but when he worked for Salesforce he wrote an SDK for their API. He covered every aspect of the development process, from building and testing a nuget package to setting up a continuous integration build. He used Travis CI as the continuous integration service and showed some of the configuration involved. Wade did everything live in code, which was a great start to the technical sessions.

**Understanding OWIN** by Keith Dahlby  
OWIN is an open standard interface between .NET servers and web applications, allowing developers to loosely couple the server software stack. It was originally developed by Microsoft, but has since been driven by the community (which is what Microsoft prefers). I wanted to attend this session because I understood the basic principles of OWIN but had a hard time envisioning a practical use case for it. What I learned from Keith is that OWIN and other supporting tools will be replacing System.Web. System.Web is a huge library, and every time your app spins up, nothing happens until the entirety of System.Web is loaded. The challenge for me will be to evaluate what parts of System.Web my applications are using, and (along with OWIN) identify other libraries I can use to replace it and cut down on the app startup time.

**From Callback Hell to the JavaScript “Promise” Land** by Brandon Martinez  
JavaScript promises were an enigma to me. I had briefly looked into them and it didn’t click with me, so I moved on. Brandon’s talk was great because I left the room fully understanding the concept and ready to use it in my code (I started refactoring a production app that night). Promises greatly simplify your JavaScript, and the Q library adds cross-browser capability as well as making the code more readable with .then() statements.

**Git Deep Dive** by Edward Thomson  
I’ve used Git sparingly, being that my employer’s source control of choice is SVN. This talk was good exposure for me on the underlying workings of Git and how it differs from other source control. A distributed version control system is a different beast, so it’s important to understand what’s going on under the hood. Edward’s experience working Git into TFS has clearly made him an expert on the topic, and we all get to benefit from his labors for Microsoft.

## Day 2
**Machine Learning** by Seth Juarez  
Machine learning is one of those topics that sounds like sci-fi and can be intimidating to try and learn. In the past I’ve tried reading about it, but the material I found didn’t start from the beginning so I wouldn’t pick up much. Seth started his talk as if introducing machine learning for the first time. He demystified the topic and broke it down to its simplest principle- feeding your program data instead of feeding it code. His demo app (using his machine learning library) showed the math in action with several different examples, which was very helpful to get the concepts to stick for me.

**SignalR All the Things!** by Javier Lozano
I’ve been looking forward to using SignalR in an application but haven’t gotten around to it due to time demands and project priorities. Javier Lozano showed how easy it can be to add SignalR. He even highlighted the bandwidth reduction it can bring compared to polling. After his talk, I feel prepared and more eager to implement this exciting framework.

**Reactive JavaScript with RxJS** by Ryan Anklam  
Reactive programming is a pattern similar to functional programming. Being an object-oriented programmer, this is a completely different way of approaching code for me. RxJS is a reactive programming javascript framework. Ryan showed how it’s in use at Netflix and what advantages it brings them. RxJS solves similar problems that JavaScript promises do, and most of the use cases I see tend to be cleanly solved by promises. Still, the talk gave me great exposure to an area I’m not familiar with. Ryan’s example problem of autocomplete really highlights RxJS’s strengths.

**Full Stack Web Performance** by Nik Molnar  
Nik Molnar’s session on full stack web performance made me eager to get back into my codebase. His one hour talk was jam packed with incredible content. If you ever get the chance to hear him talk about performance (or Notepad?!), take it. I have no doubt he could have kept going for another two hours enlightening the room. Nik highlighted many simple steps that can be taken to improve a site’s load time and responsiveness (and demoed all techniques live). Note to Nik: one vote for keeping the Justin Timberlake hashtag joke.

## Day 3
**Building The Starter League** by Mike McGee  
Mike gave the last day’s keynote. He shared his experience with building The Starter League. It was good to hear from the entrepreneurial side of things, and pretty crazy how fast a project can go from idea to actual thing when the right team and cirumstances arise. However, my biggest takeaway was the failings of our current education system. The Starter League is a 3-month, $6,000 course on learning how to code. It was shocking to me how big of a market this was to recent graduates. After 4 years and huge bills, our graduates are still needing additional training. The Starter League has an awesome approach, empowering students as owners and having weekly standups to constantly evaluate and improve the process. I’m glad to see them pairing with high schools and colleges to spread their success.

**SMACSS Your Sass Up** by Mina Markham  
Most of my web work in my job is in one large MVC site. The root CSS styling comes from an enterprise team, so it’s not something that needs to be regularly changed. Because of that, I wanted to be sure I’m staying up with the latest CSS writing and structuring methodologies. SMACSS is a great way to separate concerns when writing CSS with Sass. Mina showed some useful examples, and the folder structure she uses just makes sense. It will take some time to get my brain naturally thinking about CSS in terms of its purpose, but at I have the base knowledge now.

**You’re the Tech Lead! Now What?** by Eryn O’Neil  
Tech lead is a role many of us play in the industry, and I think “play” is an apt word because it usually comes with zero training. Eryn shared experience and scenarios that were common to everyone in the room. She refocused everyone on the true roles of a tech lead: to facilitate, advocate, and motivate. A common frustration for me is not feeling productive, but this talk was a check for me to reevaluate what being productive really means. My work day is transitioning from a maker’s schedule to a manager’s schedule, and that’s something I need to be aware of.

**Developing for Chromecast** by Chris Powers  
Chris Powers shared his experiences using Chromecast for digital signage at Groupon. It was an ideal session for me because I have a very similar potential use case at my job. Why use a $500 computer to run a basically glorified slideshow when you can do it on a $35 Chromecast? His continual point- Chromecast is just Chrome. I appreciated his honesty with Chromecast’s pitfalls, which include network issues and administrative pains. Slightly disappointing Chromecast has to be connected to the internet, but it’s not a deal breaker. Shout out to Roy Kolak for his work on the Will Smith-infused demos, they were a pretty big hit with the room. Chris recently open-sourced Greenscreen, the code that drives the signage at Groupon.

## Summary
These were only the sessions I was able to attend. With so many other sessions available, many other attendees probably had a completely different experience, learning different skills and techniques. If you attended, I’d love to hear what you took away from That Coonference.

Lastly, I’d be remiss if I didn’t thank some of the many awesome people that gave up their time to make That Conference so incredible: Clark Sell, John Wright, Brandon Martinez, Kevin Davis, and so many others that I don’t know.
