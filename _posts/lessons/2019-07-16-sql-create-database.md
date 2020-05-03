---
layout: post
title: SQL Create New Database and Tables
sub-title: A walk through of how to create a new database and tables using SQL 
img: sql-img.jpg
tags: [sql, database, development]
keywords: [sql, database, development]
comments: true
---
{% include JB/setup %}

{{page.sub-title}}

<!--more-->
A database is an organized collection of data. This is generally stored and accessed electronically from a computer system, through a Database Management Tool. Most traditionally used databases (in no particular order) and their suggested management tools are:
- Microsoft SQL Server - Microsoft Management Studio 
- Microsoft Azure SQL - Microsoft Management Studio / Azure Portal
- MySQL - MySQL Workbench / phpMyAdmin (Web Based)
- PostgreSQL - pgAdmin (Web Based)
- OracleDB - Oracle SQL Developer

Each of these systems is capable of housing multiple databases. Each database is autonomous and acts as a storage mechanism. While the objects included in a database may differ from system to system, but the most commonly seen objects are:
- Tables - To store data in the form of columns and rows
- Views - Read-Only representations of data from one or more tables
- Stored Procedures - Specialized SQL procedures used to carry out specific instructions
- Functions - User-Defined instruction that carries out a specific command and returns a specific result. 

## Create a Database
Each database system has it's unique nuances and may have differing SQL statements to accomplish certain tasks. The create command is fairly universal across all the advertised systems. It is as follows:

```sql
    CREATE DATABASE database_name;
    -- database_name: represents the name of the database. It is good to name the database according to the type of data it is expected to store. Example: School_Management_System
```
After successfully creating a database, you will want ot start populating it with tables, since these will be where the actual data is stored. 

```sql
    CREATE TABLE table_name
    (
        column1 data_type(size),
        column2 data_type(size), 
        column3 data_type(size),
        columnN...
    );
    /*
    table_name: represents name of the table. each table should be named according to what it will store and should be design to only store that data. One table should never be storing details of Teachers and Subjects in the case of our School_Management_System database. Teachers should have a table and so should Subjects. 

    column: name of the column. The column represent the data point to be stored. Example: Fname, DateOfBirth, etc..

    data_type: Type of data we want to store in the particular column. Example: int for non decimal numbers, varchar(size) for text, date for date of birth.

    size: Size of the data we can store in a particular column. Example: if for a column we specify the data_type as varchar and size as 10 then this column can store an word or phrase number of maximum 10 digits. 
    */
```

## Further Learning
Learn more about Microsoft SQL and MySQL database development at your own pace by taking [Microsoft SQL Server 2017 for Everyone!](https://trevoirwilliams.github.io/mssql-course){:target="_blank"}  and [MySQL Database Development Mastery](https://trevoirwilliams.github.io/mysql-course){:target="_blank"} . 

Further to that, learn to build a fully functional web application on top of a database by taking [Learn ASP.Net MVC and Entity Framework (Database First)](https://trevoirwilliams.github.io/mvc-db-course){:target="_blank"} 
 