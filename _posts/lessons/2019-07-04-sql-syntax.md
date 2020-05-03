---
layout: post
title: SQL SELECT Statement Syntax
sub-title: A peek at the SQL Select Statement and the basic syntax
img: sql-course.jpg
tags: [sql, database, development, tips, database series]
keywords: [sql, database, development, tips, database series]
comments: true
---

{% include JB/setup %}

{{page.sub-title}}

<!--more-->

An SQL SELECT statement retrieves records from a database table according to clauses (for example, FROM and WHERE) that specify criteria. The syntax is:

```sql
  SELECT column1, column2, *columns...* FROM table WHERE column2='value';
```
In the above SQL statement:

- The SELECT clause specifies one or more columns to be retrieved; to specify multiple columns, use a comma and a space between column names. To retrieve all columns, use the wild card * (an asterisk).

- The FROM clause specifies one or more tables to be queried. Use a comma and space between table names when specifying multiple tables.

- The WHERE clause selects only the rows in which the specified column contains the specified value. The value is enclosed in single quotes (for example, WHERE last_name='Vader').

- The semicolon (;) is the statement terminator. Technically, if you're sending only one statement to the back end, you don't need the statement terminator; if you're sending more than one, you need it. It's best practice to include it.

# Microsoft SQL Server 2017 for Everyone!
Learn the fundamentals of database design, development and querying using Microsoft SQL Server 2017. 
If you are looking to get acquainted with the concept of Databases and Queries then this is the right [course](http://bit.ly/2IcEswe){:target="_blank"} for you. 

[Microsoft SQL Server 2017 for Everyone!](http://bit.ly/2IcEswe){:target="_blank"}

What you will learn:
- Install SQL Server and SQL Management Studio
- Connect to an Instance
- Create a database
- Create Tables
- Run Queries against Tables
- General use of the SQL Server Management Studio 
- Create Relationships
- Use Aggregate functions to do quick mathematical operations
- Export data to Excel using the Management Studio
- Practical use of SQL
