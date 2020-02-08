---
layout: post
title: C# ADO.Net - LINQ vs SQL Data Reader
sub-title: A short comparison of how queries look in LINQ syntax vs using SQl Data Reader  
img: adonet.jpg
tags: [csharp, tutorial, linq, data reader]
comments: true
author : Trevoir Williams
bgcolor: ff5a71
keywords: csharp, tutorial, linq, data reader
---
{% include JB/setup %}

{{page.sub-title}}

<!--more-->

ADO.NET is a data access technology from the Microsoft .NET Framework that programmers can use to access data and data services from a database. ADO.NET facilitates connections to different data sources (most commonly SQL Server and XML) and allows you to conducts queries against your database store, from your C# application. This is a quick write up where I compare the syntax of LINQ queries and the SqlDataReader implementation. 

#### SqlDataReader 
A SqlDataReader is a type that is good for reading data in the most efficient manner possible. You can read from SqlDataReader objects in a forward-only sequential manner. Once you’ve read some data, you must save it because you will not be able to go back and read it again. 

In the follow code snippet, we construct a Form Load event for a Windows Forms application. This application contains a combo box list that should be populated with the contents of a database table called *TypesOfCars*. Comments are provided along the way to guide what is taking place in each step. 

<script src="https://gist.github.com/trevoirwilliams/c91e293114b10863884b93d74be6ddce.js"></script>

#### LINQ 
Language-Integrated Query (LINQ) is the name for a set of technologies based on the integration of query capabilities directly into the C# language. Traditionally, queries against data are expressed as simple strings without type checking at compile time or IntelliSense support. LINQ queries return results as objects. It enables you to uses object-oriented approach on the result set and not to worry about transforming different formats of results into objects.

In the follow code snippet, we rewrite the previously shared Form Load event to populate the combo box list with the contents of a database table called *TypesOfCars*, but using a LINQ query

<script src="https://gist.github.com/trevoirwilliams/562b5ab82f210eec8fcc33edcfc12f82.js"></script>


#### Final Thoughts
I have a huge preference for LINQ given that it helps to keep my C# application, looking like a C# application. The SqlDataReader code requirements introduce SQL syntax and certain data conversion requirements that make the implementation more tedious and open to errors. 

That being said, this is my opinion, I am not saying that one is out and out better than the other. If you have conflicting points of view on the matter, I would love to hear your thoughts. 
