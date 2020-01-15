---
layout: post
title: SQL Operators in the WHERE Clause
sub-title: Get familiar with commonly used to know SQL Operators and Keywords when filtering data with the WHERE Clause 
image: /assets/images/sql-img.jpg
tags: [sql, database, development]
comments: true
---

SQL Operators include reserved keywords or characters used primarily in the SQL statement’s WHERE clause. These keywords allow you to be more specific with conditions. 

## SQL Comparison Operators

Comparison operators in SQL are used to compare the values of either a column and a static value, a column and a variable's value or a column and another column.

| Operator | Usage | Examples -  _SELECT * FROM tableName ..._|
| -------- | --------- | ----------------- |
| = | Checks if a a column's value is EQUAL to a particular value.  | _WHERE COL1 = VALUE_ |
| != or <> | Checks if a column's value is NOT EQUAL to a particular value. | _WHERE COL1 != VALUE_ |
| > | Checks if a column's value is GREATER THAN a particular value. | _WHERE COL1 > VALUE_ |
| < | Checks if a column's value is LESS THAN a particular value. | _WHERE COL1 < VALUE_ |
| >= | Checks if a column's value is GREATER THAN OR EQUAL TO a particular value. | _WHERE COL1 >= VALUE_ |
| <= | Checks if a column's value is LESS THAN OR EQUAL TO a particular value. | _WHERE COL1 <= VALUE_ |

## SQL Logical Operators

Logical operators in the SQL are used to enhance the WHERE clause's ability to perform value comparisons between a column and a value. 

| Operator | Usage | Examples -  _SELECT * FROM tableName ..._|
| -------- | --------- | ----------------- |
| BETWEEN | Checks if a column's value is found in a range. | _WHERE COL1 BETWEEN VALUE1 AND VALUE2_ |
| IN | Checks if a column's value is IN a list of values. This list can be of words, numbers or a sub-query | _WHERE COL1 IN (val1, val2, ...)_  |
| NOT | Checks if a column's value is NOT a particular value. | _WHERE COL1 > VALUE_ |
| AND | Allows you to specify an additional condition in a WHERE clause. Both conditions must evaluate to true. If either side is false, then the whole WHERE condition will be false.  | _WHERE COL1 < VALUE1 AND COL1 != VALUE2_ |
| OR | Allows you to specify an additional condition in a WHERE clause. If either side is true, then the whole WHERE condition will be true. | _WHERE COL1 = VALUE1 OR COL1 = VALUE2_ |
| EXISTS | Checks if a column's value is present in a record set from a sub-query. | _WHERE EXISTS (SELECT col FROM tabeName)_ |
| LIKE | Checks if a column's value matches an expression. Otherwise known as the WILDCARD operator. This is usually used when you want to find a word based on a portion or pattern of the word. The modulus ('%') is used around the expression. | _WHERE COL1 LIKE '%expression%'_ |
| ANY | Returns TRUE if ANY of the sub-query values meet the condition. | _WHERE COL1 ANY (SELECT col FROM tabeName)_ |
| ALL | Returns TRUE if ALL of the sub-query values meet the condition. | _WHERE COL1 ALL (SELECT col FROM tabeName) |

## Conclusion
These statements help us to enhance our WHERE clauses and allow us to be more specific in making reference to what values we are interested in retrieving from a table.  

Enhance your Database Development and Design skills by enrolling in [Microsoft SQL Server 2017 for Everyone!](http://bit.ly/2IcEswe) AND [MySQL Database Development Mastery](http://bit.ly/2Gb0E9N).

These courses will guide you through the intricate world of Database Design, Development and Querying; using the most popular, powerful and in demand Relational Database Management Systems in the industry.