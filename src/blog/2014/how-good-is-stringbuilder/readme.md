---
title: How Good is StringBuilder?
lang: en-US
published: 2014-07-29
layout: BlogLayout
meta:
  - name: keywords
    content: dotnet
  - name: description
    content: Developing Windows services can be a brutally painful experience. With Topshelf, the transition from development to production is seamless.
---

For some reason, I really enjoy using StringBuilder. I often get to refactor code, and one of the common code improvements I find myself making is replacing `someString += moreString` with `someStringBuilder.Append(moreString)`. Doing that en masse feels very rewarding to me, but how much of an efficiency increase am I really contributing?

## The Obvious
Strings in .NET are immutable, meaning they cannot be changed. This has many benefits (thread-safe, better security, easily optimized), but can be inefficient if that string is being modified continually. This is where StringBuilder comes in. StringBuilder is mutable, allowing it to efficiently modify a string. Once the building is done, StringBuilder easily outputs to a string.

## The Test
I wanted to be able to test the overhead of StringBuilder to identify the point in which it makes sense to use it, and how much of an improvement it truly brings. I assumed the improvements would vary, so I wanted to make the test easy to configure and rerun. The test program requires inputs for string length and the amount of times to loop.

## The Disclaimer
After writing my tests, I found that this has already been done many times, many years ago. Chinh Do built informative tests on the topic, shown in parts [one](http://chinhdo.com/20070224/stringbuilder-is-not-always-faster/) and [two](http://chinhdo.com/20070929/stringbuilder-part-2/) (with charts!). Microsoft also has a solid [knowledge base article](https://support.microsoft.com/en-us/help/306822/how-to-improve-string-concatenation-performance-in-visual-c) with a StringBuilder test. I hope my tests bring something new in that you can easily adjust the parameters of the test as the console application is running.

## The Results
No surprise, StringBuilder is really efficient with concatenations. I thought there would be more of an overhead for using StringBuilder, but it usually starts becoming a consistent win at over three concatenations. Interestingly enough, StringBuilder is equally efficient if only called once. There is a bit of a drop off between two and five concatenations where using a string may be faster, but the advantage is thousandths of a millisecond. After five concatenations, StringBuilder leaves the immutable string in the dust.

## The Code
I put my test program code into a [GitHub Gist](https://gist.github.com/fotijr/7a97632f4af1c962aeff), try it out and see the difference for yourself.