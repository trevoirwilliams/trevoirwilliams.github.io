---
layout: post
title: Create Your First React App
sub-title: Let's explore the steps to get started with building a React 
img: react-app.png
tags: [javascript, development, web, react]
comments: true
---
{% include JB/setup %}

{{page.sub-title}}

<!--more-->
React JS is a JavaScript library for building single page applications with intuitive and interactive UIs. It has been growing in popularity and is currently being used by big companies like Facebook, Instagram and WhatsApp.

In this post, we will look at some steps towards getting started with a React JS app. 

## Prerequisites 
- [Download and Install Node Package Manager](https://www.npmjs.com/get-npm)
Node Package Manager (npm for short) is a Package Manager that allows you to tap into a bunch of open source libraries and download them to your project. It also allow you to manage package versions, which will spare you the trouble of trying to make sure that you have the latest javascript libraries as you go along. 

It is launched from the console. So after a successful installation, you may open your **Command Prompt** and type **npm**. You will be able to tell if your got an error, or some magically output to the screen. 

## Install Create React App
Using npm, and the **create-react-app** command, we can bootstrap a react app file and folder structure. 
```
    npm install -g create-react-app     
``` 
I typically have a designated folder for all my projects. If you have one, then navigate to it using the command prompt. If not, then create a folder called **projects** on your C drive (to make it easy to find). 

## Create the React Site
Now to create the new app, we will run the following command:
```
    create-react-app hello-react
```

## Viewing the React Website
Now navigate into the newly created folder and do an npm start. This will invoke Node JS server and serve up the content of the web app in the folder. 
```
    cd hello-react
    npm start
```

Your browser should pop up with your new React site. Alternatively, you may visit http://localhost:3000 in your browser to see your React site. 

## Updating the Site
Now, let's get our hands dirty. Using your favourite text editor (I use Visual Studio Code), open _hello-react/src/App.js_
Edit this line:
```
    Edit <code>src/App.js</code> and save to reload.
```
And change it to:
```
    Hello World!
```

Open up your app again and you will see the changes!

## Create a React Component
To create our first React component, we create a folder in the src folder named **components**. Then create a file called _HomepageText.js_ in the src/components folder. This file will hold our new homepage image component.

We'll create this component by adding the following code to the _HomepageText.js_ file:
```js
    import React from 'react';

    function _HomepageText() {
        const txt = 'My Name Is _____'; // Enter your name where the line is
        return (
            <h1>{txt}</h1>
        );
    }

    export default HomepageText;
```
Then, in App.js, make this edit 
```js
    <!-- <img src={logo} className="App-logo" alt="logo" /> -->
    <HomepageText />
```
Now that we have made reference to the component, we need to include an import statement at the top, so that the app doesn't break. 
```js
    import HomepageImage from './components/HomepageImage'
```

The final _App.js_ should look something like this:
```js
    import React from 'react';
    import './App.css';
    import HomepageImage from './components/HomepageImage'

    function App() {
        return (
            <div className="App">
            <header className="App-header">
                <HomepageImage />
                <p>
                My first React website!
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
                    Learn React
                </a>
            </header>
            </div>
        );
    }

    export default App;
```

Now when you reopen you app using npm start or browsing to http://localhost:3000. You should see your sentence big and bold where the picture used to be. 

Now you can pat yourself on the back, you just made your first React JS App! Next article will be even more fun.