---
layout: post
title: Three Developer Tips When Using Third Party Libraries
sub-title: Some tips to help prevent malicious code from being injected into your web application, through third party libraries.  
img: web-script.jpg
tags: [web,script,javascript,css]
comments: true
author : Trevoir Williams
bgcolor: ff5a71
keywords: web,script,javascript,css
---
{% include JB/setup %}

{{page.sub-title}}

<!--more-->

In the world of open source libraries, it is rather easy to access frameworks, libraries and scripts and use them for our own purposes. This in turn opens up a risk to you the developer, who may be developing sensitive applications that others may want to harm. Given **minification**, **obfuscation** and the general ease with which third party code can be integrated, a developer may just include malicious code into your website all too easily. Malicious scripts sometimes contain code to steal site traffic or even users’ personal or payment data.


Below, I outline some steps that can be taken to ensure that the code you are about to inject, would not have been intercepted and tampered with and help to verify the sanity of the code files. 

### Use the Original Version of Third-party JavaScript Libraries
**Risk**
You might be using a theme or someone elses impression of a library. For example, **AdminLTE** (which I trust and use by the way) comes chock full of libraries like [JQuery](https://jquery.com/) and [ChartJS](http://www.chartjs.org/). Another developer may have taken AdminLTE's source code file and modified some of these scripts for his own purpose, then advertised it on his own repository as an *enhanced version*. After minifications and obfuscations, it is almost impossible to discover injected JavaScript parts.

**Mitigation**
If you see that a template you’ve downloaded uses some third-party JS libraries, check the version it uses and replace the file with a freshly downloaded one of the same version from the original repository. Meaning, go to [JQuery](https://jquery.com/) and retrieve the original script file(s) for the version you were given, then replace it in your local folder. It almost guarantees you that any modifications made to the file in between, will be expunged during the file replacement. (Libraries themselves can be the source of malware; such cases are rare but they do happen.)

### Add Integrity Check to CDN Links
**Risk**
If you use any CDN links to third-party libraries, and the library itself becomes modified with malicious code, this will affect all websites that make reference to the file.

**Mitigation**
Use [Sub-Resource Integrity (SRI) Hash Generator](https://www.srihash.org/) to add an integrity HTML attribute to your link, when adding external scripts. The integrity attribute’s value is a checksum of the file:

```html
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
></script>
```

If something changes, the checksum will also change and the browser won’t load the script.

### Don’t Overdose on Plugins and Libraries
Yes, there are many third-party libraries that can do many things. This doesn't mean that you should try and get them all. In fact, many times, one library has 'all' the features that we may need, but we find pieces of functionality in 4-5 other libraries and include them all. 

The more plugins and libraries you have, the bulkier your site and the slower your loading times, so don’t use plugins unless absolutely necessary. 
If you must use a lot of plugins, make sure you have  package manager (like [NuGet](https://www.nuget.org/) or [Composer](https://getcomposer.org/))to manage them. Also be selective of where you place your references.  



