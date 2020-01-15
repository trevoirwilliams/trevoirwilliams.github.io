---
layout: post
title: Relational SQL vs. Non-Relational NoSQL Databases
sub-title: A comparison between Relational Databases and NoSQL Databases. 
img: sqlvnosql.jpg
tags: [nosql, sql, database, development]
comments: true
---
{% include JB/setup %}

{{page.sub-title}}

<!--more-->

There are two main types of databases, relational and non-relational. The major difference between them is how they handle data.

Relational databases are structured. You have tables and these tables may have dependencies on each other, or relationships. A database for a store will have a table for *customers* and one for *orders*. These two tables are related, because an order is made by a customer. 

Non-relational databases are document-oriented. This so called document type storage allows multiple 'categories' of data to be stored in one construct or *Document*. So using the previous example, a Customer document, would have the customer's information, a sub-category for all their orders, etc. 

# Relational SQL Databases
A relational database uses SQL which is short for Structured Query Language. This is a fairly rigid and standard way of storing data using tables, columns and rows. Columns represent the data point to be stored and a row represents a record with data points per column that has been defined. These are defined in a table which is usually atomic in nature; this means that a table should really only store data records on one *entity* or *object* at a time. Eg. A Table Customers should ONLY be storing customer records. 

When additional details are required, or data needs to be associated with a record from one table to another, then we have what we call relationships. A common *key* is established between the two (or more) tables and this is used for that association there after. 

### Popular Relational SQL Database Systems
- Microsoft SQL Server
- Oracle 
- MySQL / MariaDB
- PostgreSQL
- Microsoft Azure SQL

# Non-Relational NoSQL Database
Unlike its relational counterparts, no-sql databases allow far more flexibility and adaptability as you design your application.  If your data requirements aren’t clear at the outset or if you’re dealing with massive amounts of unstructured data, you may not have the luxury of developing a relational database with clearly defined tables and relationships. 

NoSQL databases are document-oriented. Instead of using tables, these documents allow us to store unstructured data in a single document. So a document could contain a customer's details, as well as all their orders to date, their favourites, etc. Thi is more intuitive and requires fewer hops across tables to find all the data *relating* to a customer. Note however that this  results in a need for additional processing effort and more storage as the document sizes grow. The storage will not be as highly organized at with an Relational Database.


### Popular Non-Relational No-SQL Databases
- MongoDB
- Oracle NoSQL 
- Apache CouchDB
- Redis

# Which should you choose?
#### Use Relational SQL Databases When:
- You will enforce the ACID (Atomicity, Consistency, Isolation, Durability) principles. 
This reduces anomalies, enforces integrity and that is why this is preferred for commerce and financial applications. 
- Your data structure is not changing. 
If you application design is solid and not expected to be changing with future requirements (at least not very often) then you may proceed to use this type of construct and be confident in your data.

#### Use Non-Relational No-SQL Databases When:
- You are doing Rapid Application Development.
No-SQL database supporting rapidly changing designs and coding sprints and is perfect for more Agile settings, where requirements change often. 
- You're storing large amounts of data with little to no structure. 
Much like expressed in the previous point, if your data requirements are not clear, bu you know that you need to store lots of data somewhere and somehow, then you can use this database type, which you can morph on the fly to match the requirement. 

