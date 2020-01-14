---
title: Comparing Strings Efficiently
lang: en-US
published: 2014-07-31
layout: BlogLayout
meta:
  - name: keywords
    content: csharp dotnet
  - name: description
    content: When comparing strings, nothing compares to StringComparison.
---

After doing some tests to measure the performance of StringBuilder, I started thinking about other ways strings are commonly used. What are some common inefficiencies, and how can I avoid them? Immediately I thought of evaluating strings.

I had previously seen comments on StackOverflow about `ToUpper()` being more efficient than `ToLower()`. I tried finding a source for this claim, but came up empty. The closest thing I found on the topic was an MSDN page pointing out that `ToUpper()` is more reliable that `ToLower()`, but nothing about performance.

In my own tests (full code [here](http://gist.github.com/fotijr/88eab8d947759f708ec2)), I found there was no significant difference between `ToUpper()` and `ToLower()`. Thanks to one StackOverflow comment, I did discover that `ToUpperInvariant()` is slightly faster than `ToLowerInvariant()`, but not by much. With no major gains found comparing `.ToUpper()` and `.ToLower()`, it was time to compare strings like a real .NET developer.

StringComparison is the proper way to compare strings (bet you didn’t see _that_ coming). Using `.ToUpper()` or `.ToLower()` creates another string in memory, while using StringComparison avoids that step allowing a much more efficient comparison.

```c#
string someString = "hello";
string otherString = "HELLO";
if (someString.Equals(otherString, StringComparison.OrdinalIgnoreCase))
{
   // they match
}
```
This code is **20 times faster** than using `ToUpper()` or `ToLower()`. If this was a suprise to you or if you just want to check out other best practices, Microsoft has [very thorough](https://docs.microsoft.com/en-us/dotnet/standard/base-types/best-practices-strings) documentation discussing the different approaches for using strings in .NET.