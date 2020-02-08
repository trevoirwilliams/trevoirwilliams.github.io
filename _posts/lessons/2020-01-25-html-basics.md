---
layout: post
title: The Ultimate HTML Primer
sub-title: A succinct walk through of how to author an HTML page  
img: html-examples.jpeg
tags: [html, tutorial, guide]
comments: true
author : Trevoir Williams
bgcolor: ff5a71
keywords: html, tutorial, guide
---
{% include JB/setup %}

{{page.sub-title}}

<!--more-->

An HTML document has two aspects to it. It contains structured information (Markup), and text-links (HyperText) to other documents. We structure our pages using HTML elements. Elements are constructs of the markup language that provide structure and meaning and that the browser inteprets to some form of visual representation. 

HTML5 is the latest revision of HTML. The World Wide Web Consortium (W3C) organizes development standards for the World Wide Web. As web pages and web applications grow more complex, W3C updates HTML’s standards.

## A simple example of HTML Document
We will explore what an HTML needs to look like at minimum, and what each element is responsible for. 

```html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Page Title</title>
        </head>
    <body>

        <h1>My First Heading</h1>
        <p>My first paragraph.</p>

    </body>
    </html>
```

<br/>

#### Mandatory Elements
**!DOCTYPE html**: The <!DOCTYPE html> statement must always be the first to appear on an HTML page and tells the browser which version of the language is being used.

**html**: The < html> and </ html> tags tell the web browser where the HTML code starts and ends.

**head**: The < head> and </ head> tags contains information about the web site.

**title**: The < title> and </ title> tags tell the browser what the page title is. The title can be seen by identifying the tab in your internet browser. 

**body**: Between the < body> and </ body> tags the page content is placed.

<br/>

#### Page Contents
**h1**: Creates a heading 1 tag, the largest of the heading tags.

**p**: Creates a paragraph, perhaps the most common block level element.

<br/>

## Where to learn more
This is just an introduction to the topic. To learn more, I recommend these resources:
<br/>
https://www.w3.org/TR/WCAG20/ <br/>
https://webaim.org <br/>
https://developers.google.com/web/fundamentals/accessibility/ <br/>
