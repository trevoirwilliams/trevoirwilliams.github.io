---
layout: post
title: Tips to Write Better Code
sub-title: Common Coding Tips to help you with the presentation of your code. 
img: code.jpg
keywords: code, mistakes, programming, better, developer
---

{% include JB/setup %}

{{page.sub-title}}

<!--more-->

Mistakes are all a part of learning. However, there are certain mistakes that tend to continue and need to be addressed. Below is a list of common practices (that can be perceived as mistakes) that developers may continue to do overtime, while not realizing the underlying dangers. 

Making these adjustments to your developer habits and patterns will not only be beneficial to you but also to the other developers that have to take a look at your code. 

### One Function, One Concern
A function should only be responsible for doing one thing. You don't want to a have one function doing input, output and processing (acceptable in very special circumstances). This  will bloat your function and potentially lead to a debugging nightmare. 

That being said, it is not a one-size-fits-all situation where you have one function for input, another for output, etc. This can lead to too many functions too. I prefer to think that a function should address one concern (not necessarily operation) at a time. If your function is designed to get a car record, then that is all it should do. There might be something else involved in the record's retrieval, but the function should not be trying to get a car record and calculate the mileage and find all the drivers (and so on) in one function. 

### Remove Commented-Out Code
You don't want to leave old code lying around in your files. Sometimes we would have written a paragraph of code and then had an epiphany afterwards. We then commented it out and started over. That is fine until someone else needs to look at or use the code. Now, no one knows how relevant this commented out code is. I have actually been caught in this trap before, where I commented out a block of code, inadvertently uncommented it and then spent hours wondering why my new code wasn't working. 

Just delete the commented-out code. Even though the code is not in the latest revision, if someone has plans with it the code is still available in version control. 

I wrote a post a while ago about some simple rules that you can follow to create good names for your variables. And I can’t emphasize enough how important good variable names are. Most of the time, you are not the only developer working on a project. Other developers need to understand your code as well.

### Use Descriptive Variable Names
Simple fix for many problems. If you are storing a number, called the variable 'num'. If you are storing first name, then name the variable 'firstName' or 'fname' or something relevant. Please avoid calling them 'x' and 'y'. No one else will understand what x means. To be frank, after a night out enjoying yourself, you will look at 'x' and wonder what in the world this variable was being used for. 

Do yourself and your team  a favour and use sensible variable names. 

### Use Variables for Preset Values
Having poorly name variables is one part of the struggle. The next part is hard coding certain values in operations, without any indication as to what this hard coded value might be. They tend to call them 'Magic Numbers' or 'Magic Strings'.

Take for instance the following operation:
```php
    $area = 7 * 7 * 3.14;
```

What do those numbers represent? If you remember you math, then you might see that this formula is for the area of a circle...but what is 3.14? What are the 7s? It is better to place these values in variables with appropriate names, so that someone looking at the code can deduce the relevance of these seemingly randomly placed numbers. 
```php
    $pi = 3.14;
    //Raising 7 to the power of 2
    $area = pow(7, 2) * $pi;
```
The same principle applies to strings. Place preset values in variables so that others can figure out what those values are for. 

Enhance your PHP Development Skills by enrolling in [Modern PHP Web Development w/ MySQL, GitHub & Bootstrap 4](http://bit.ly/32QbYlN) AND [Basic PHP Development with Bootstrap, GitHub and Heroku](http://bit.ly/2VRx4iv).

### Format Your Code
Messing up the formatting of code is something that is often done by people who don’t have a lot of programming experience.

That being said, most modern IDEs enforce certain formatting best practices. This makes it rather difficult for someone to write messy code. In fact, you have to be very DELIBERATE to mess up the indentation and ignore the auto complete prompts and naming conventions being suggested.

I suggest that you rely on the IDE's suggestions and allow the suggested formatting to guide your way. 

Enhance your ASP.NET MVC and Core Development Skills by enrolling in [Learn ASP.Net MVC and Entity Framework (Database First)](http://bit.ly/2TF8A9s) AND [Complete ASP.Net Core 3.1 and Entity Framework Development](http://bit.ly/2ux9hcn).