---
layout: post
title: Bootstrap 4 and Visual Studio Code in 10 Minutes 
sub-title: A guide on how to author Bootstrap 4 Pages using Visual Studio Code
img: extensions-lists.png
tags: [html, web, development, bootstrap]
keywords: [html, web, development, bootstrap]
comments: true
---
{% include JB/setup %}

{{page.sub-title}}

<!--more-->
<p class="lead">
<a href="https://code.visualstudio.com/download" target="_blank">Visual Studio Code </a> is a code editor that is optimized for building and debugging modern web applications. It is open source and boasts a large community of developers who are constantly producing excellent extensions that increase productivity. 
</p>
<p class="lead">
<a href="https://getbootstrap.com/" target="_blank">Bootstrap 4 </a> is the newest version of Bootstrap, which is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites. 
</p>

## Download Visual Studio Code
<p class="lead">
Proceed to <a href="https://code.visualstudio.com/download" target="_blank">Download Visual Studio Code </a> and acquire the version that best suits your Operating System. The installation station is fairly straightforward and you can go ahead and click next until completion. 
</p>

## Setup Web Project
<ul class="list-style arrow-list arrow-list-two pl-0">
                  <li>
                    <i class="fa fa-angle-double-right grey" aria-hidden="true"></i> Create a Folder on your desktop and call it *first-bootstrap-site*. It is always recommended that you avoid using spaces and most special characters (- and _ are allowed) when naming files and folders in web development.
                  </li>
                  <li>
                    <i class="fa fa-angle-double-right grey" aria-hidden="true"></i> Open Visual Studio Code (if not already open). Go to File -> Open Folder -> Find *first-bootstrap-site* on Desktop -> Select Folder
                  </li>
                </ul>

<div class="text-center">
    <img src="/assets/images/open-folder.png" alt="open-folder" class="img-fluid">
</div>
<p class="lead">
To the Left, you will see a Pane called *EXPLORER*. Under this Pane, go ahead and create a new file and name it *index.html*. Please note, every time you start a website, the first file almost always should have this filename. It will save you a lot of headaches and troubleshooting time in the future. 
</p>

<div class="text-center">
    <img src="/assets/images/create-file.png" alt="create-file" class="img-fluid"/>
</div>

## Install Useful Extensions
Extensions exist to help us as developers move more quickly in our environment and get more done in less time. We can browse available extensions by visiting the Extensions pane to the left side of the IDE window. 

From here we can search for the extensions we wish to install. Let us proceed to find and install the following plugins (you may be required to reload VS Code after installing each):
<ul class="list-style arrow-list arrow-list-two pl-0">
                  <li>
                    <i class="fa fa-angle-double-right grey" aria-hidden="true"></i>  Bootstrap 4, Font awesome 4, Font Awesome 5 Free & Pro Snippets - Ashok Koyi

                  </li>
                  <li>
                    <i class="fa fa-angle-double-right grey" aria-hidden="true"></i>  Live Server - Ritwick Dey

                  </li>
                </ul>

<div class="text-center">
    <img src="/assets/images/extensions-lists.png" alt="extension-list" class="img-fluid"/>
</div>

## Add Bootstrap to Our Page
Now we get to see the full power of Visual Code and these extensions. let's go back to our Explorer pane and open *index.html*. It may still be open, so you can select it from the already open tab at the top of the IDE Window. 

Type the text *b4-$* in the first line of the document and press enter when the autocomplete suggestion appears. If this auto complete bar disappears, hold down *CTRL* and press *Space Bar* to make it come back. 

This will populate your page with a beautifully bootstrap HTML Page Skeleton. All the essential HTMl tags will be generated alongside already included CSS and Javascript files needed to have Bootstrap 4 capabilities on your page. Let's do the following:
- Change the text in the title tag to 
```html
    <title>My First Bootstrap Page!</title>
``` 

- Add the following code after the opening body tag
```html
    <div class="jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple bootstrap 4 website that I am developing</p>
    </div>
```

The Bootstrap CSS Framework gives us a whole host of ready made CSS styles that we can access by applying the relevant class to out HTML tags. Above will produce a pre-style display on our page, without much design effort on our part. 

## Preview with Live Server
Now we will preview what we have done. Right Click *index.html* -> Click *Open With Live Server*

This will launch your default browser and begin to display your newly created Bootstrap 4 Web Page. 

## Going Forward
All pages that you create beyond this point, can be created using similar steps. You would have already installed your extensions and they will remain until you have either removed them, or removed Visual Studio Code altogether. 

For the Full compliment of the Power of Bootstrap 4, you can check their official <a href="https://getbootstrap.com/" target="_blank">website </a>  

I hope you enjoyed this exercise. Have Fun!