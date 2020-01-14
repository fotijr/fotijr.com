---
title: Services With Topshelf
lang: en-US
published: 2015-01-06
layout: BlogLayout
meta:
  - name: keywords
    content: dotnet
  - name: description
    content: Developing Windows services can be a brutally painful experience. With Topshelf, the transition from development to production is seamless.
---

When building software systems, at some point or another you’ll have a need to create a Windows service. Usually the development process of creating a service looks like this: build a console application that does the processing in a loop, test the application, then copy the code into a new service project and deploy as a Windows service to production. If there is any additional debugging to be done or features to add, start the process over. This cycle was so painful that I began avoiding services altogether when in the design stage.

All that changed when I learned about [Topshelf](http://docs.topshelf-project.com/en/latest/overview/index.html). Topshelf is a framework for .NET that makes it incredibly easy to build and deploy Windows services. With Topshelf, you can build and test the service as a console application. When it comes time for deployment, you can install the same .exe as a service from the command line. The transition from development to production is seamless. If you’ve developed Windows services the traditional way, developing with Topshelf for the first time seems almost magical.

The [code examples](http://docs.topshelf-project.com/en/latest/configuration/quickstart.html) on their site are very good, so I won’t bother writing my own example here. Open up the Package Manager Console in Visual Studio and run the following nuget command to get started:
```bash
Install-Package Topshelf
```
With Topshelf, you can configure your service with any settings just like you would when traditionally developing a Windows service. This includes running under another Windows account, starting automatically or manually, and service name and description details.

If you plan on using NLog for logging functionality, just call `.UseNLog` when initializing your host factory. You’ll also need to have NLog and the config package installed.
```bash
Install-Package NLog
Install-Package Nlog.Config
```