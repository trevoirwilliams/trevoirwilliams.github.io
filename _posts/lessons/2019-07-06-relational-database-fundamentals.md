---
layout: post
title: Working with Relational Databases
sub-title: A guide on how to get started with Relational Databases. 
img: relational-database.png
tags: [sql, database, development, tips, database series]
keywords: [sql, database, development, tips, database series]
comments: true
---
{% include JB/setup %}

{{page.sub-title}}

<!--more-->

When working with data in relational databases there are some key concepts one must appreciate. 

## The Relational Model
- Data is organised and stored in table. Each columns has a title and each row is a record, with data in each cell (Think of Microsoft Excel).
- Databases hold a collection of data stored in tables. The Database is the grand storage for all tables. 

### Relationship Categories in Databases
- one-to-one: Relationship between one student and one teacher (think extra lessons)
- many-to-one: Relationship between many students and one school
- one-to-many: Relationship between one student and classes
- many-to-many: Relationship between many students and many teachers

### Primary Key v Foreign Key
A primary key is a column that best identifies one unique row. It ensures that each record as unique. This column is usually given the title *ID*.

- It ensures that there are no duplicates
- It cannot be unknown (NULL)
- There can only be one primary key per table

A foreign key is a column that matches a primary key in another table so we can join the data in each together.
- It is an easier way to reference related data. For instance, relating a number of students to a class is easier when you reference the Student's ID as a Foreign key, instead of repeating this student's details for each class they are taking. 
- Must match back to a primary key in the original table. For example Foreign Key value for Student ID '2' must be present on Students' table as a primary key. Then, we can know the student being referenced. 


### SQL Statements
SQL is short for Structured Query Language. It is a standard language for querying, manipulating and modifying relational databases (MSSQL, PostgreSQL, MySQL, etc.).

SQL statements are used to read and transform the data coming from pone or more tables. Four basic operation of data manipulations (CRUD) are:

#### C - Create
``` sql
    insert into table (columns...) values (values...)
    -- For Example
    insert into students name, city, country values ('Trevoir Williams','123 My Street','Jamaica')
```

#### R - Read
``` sql
    select * from table
    -- For Example - this will return all rows and columns
    select * from students
```

#### U - Update
``` sql
    update table set column = value where {condition}
    -- For Example - this will update the city address of the student with ID = 1 
    update students set city = '321 Portland Cottage' where ID = 1
```

#### D - Delete
``` sql
    delete from table where {condition}
    -- For Example - this will delete students with ID = 1
    delete from students where ID = 1
```

# Microsoft SQL Server 2017 for Everyone!
Learn the fundamentals of database design, development and querying using Microsoft SQL Server 2017. 
If you are looking to get acquainted with the concept of Databases and Queries then this is the right [course](http://bit.ly/2IcEswe) for you. 

[Microsoft SQL Server 2017 for Everyone!](http://bit.ly/2IcEswe)

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