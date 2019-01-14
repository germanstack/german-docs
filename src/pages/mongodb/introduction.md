---
title: "Introduction && Installation"
date: "2017-08-10"
author: "Codeekage"
topic : "MongoDB"
image : "/img/agiri.jpeg"
sortName : "express"
---


<div id="mongodb-introduction">
                        <h2 id="mongodb"><i class="fa fa-link"></i>MongoDB NoSQL</h2>
                        <p>MongoDB is an open-source document database designed for ease of development and automatic
                            scaling with high performance, and high availability. </p>
                        <p>Document database may seem new and even more complex. Let’s get a quick run through of what
                            <i>Document Database</i> actually do before we go ahead installing things, we know nothing
                            about. </p>
                        <p>Nothing to worry! Document databases pairs each key with a complex data structure known as a
                            document. Documents can contain many different key-value pairs, or key-array pairs, or even
                            nested documents. Document database takes the structure of JSON, and something a lot
                            similar to object literals in JavaScript. </p>
                        <p>Document databases is also one of the types of NoSQL databases alongside Graph Stores,
                            Key-Value, and Wide-Columns. NoSQL Databases was developed in response to the demands
                            presented in building modern applications, encompassing a wide variety of different
                            database technologies.</p>
                        <p>Most of us with the PHP, .NET Framework background would be a lot familiar with MSSQL and
                            MySQL which are all relational databases. Relational databases were not designed with
                            modern applications in mind; taking advantage of the commodity storage and processing power
                            available today. </p>
                        <p>Let’s head over to installation and see how MongoDB is a lot simple to get started with and
                            add some codes to our previous to-do application. </p>
                    </div>
<div id="mongodb-installation">
                        <h2><i class="fa fa-link"></i>Installation</h2>
                        <p>Installing MongoDB is a lot more technical than installing Node. But if you are familiar
                            with certain configurations like: adding PATH to your environment then it will be piece of
                            cake. I would recommend heading over to MongoDB official installation <a href="https://docs.mongodb.com/manual/installatio">guide</a>
                            and make sure your installation is work properly on your machine before going ahead with
                            this course. </p>
                    </div>

<h4>🚧🚧Breakout Session Ahead ⏰⏰</h4>
                    <div id="mongodb-documents">
                        <h3> <i class="fa fa-link"></i> MongoDB Documents</h3>
                        <p>A record in MongoDB is a document, which is a data structure composed of field and value
                            pairs. AKA JSON objects. Typically, MongoDB documents are plain JSON objects. The
                            values of fields may include other documents, arrays, and arrays of documents. </p>
                        <div class="img-holder"><img src="/img/crud-annotated-document_bakedsvg.png" alt=""></div>
                        <h3 class="underline"> <i class="fa fa-link"></i> Advantages of Documents</h3>
                        <p>The advantages of using documents are:</p>
                        <ol>
                            <li>Documents (i.e. objects) correspond to native data types in many programming languages.</li>
                            <li>Embedded documents and arrays reduce need for expensive joins.</li>
                            <li>Dynamic schema supports fluent polymorphism</li>
                        </ol>
                        <h3 class="underline"> <i class="fa fa-link"></i> Key Features</h3>
                        <h5>1. High Performance</h5>
                        <p>MongoDB provides high performance data persistence. In particular:</p>
                        <ol>
                            <li>Support for embedded data models reduces I/O activity on database system. </li>
                            <li>Indexes support faster queries and can include keys from embedded documents and arrays.</li>
                        </ol>
                        <h5>2.  Rich Query Language</h5>
                        <p>MongoDB supports a rich query language to support read and write operations (CRUD) as well
                            as:</p>
                        <ol>
                            <li>Data Aggregation </li>
                            <li>Text Search and Geospatial Queries.</li>
                        </ol>
                        <h5>3. High Availability </h5>
                        <p>MongoDB’s replication facility, called replica set, provides </p>
                        <ol>
                            <li>Automatic failover and </li>
                            <li>Data redundancy. </li>
                        </ol>
                        <p>A replica set is a group of MongoDB servers that maintain the same data set, providing
                            redundancy and increasing data availability. </p>
                        <h5>4. Horizontal Scalability </h5>
                          <h4>🚖🚖</h4>
                    </div>