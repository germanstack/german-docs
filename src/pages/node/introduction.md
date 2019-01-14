---
title: "Introduction/Installation"
date: "2017-08-10"
author: "Codeekage"
topic : "Node.js"
sortName : "nodejs"
image: "/img/agiri.jpeg"
---

Node.js is an asynchronous event driven JavaScript runtime, designed to build scalable
network applications.
As an event driven JavaScript runtime, Node takes the event model a bit further
in similar design to, and influenced by systems like Ruby’s Event Machine or
Python’s Twisted. It presents an event loop as a runtime construct instead of
as a library.</p>

There is always a blocking call to start the event-loop. Typically, behavior
is defined through callbacks at the beginning of the script and at the end,
starts a server through a blocking call. Unlike Node, they are no such
<code>start-the-event-loop</code> call. Node simply enters the event loop after
executing the input script, and exist the event loop when they are no more
callbacks to perform.

Node 👉 Event-Loop 👉 Executes Input Scripts 👉 <code>if</code>(More scripts)
Execute Scripts <code>else</code> Leave.

This behavior is a lot similar to browser JavaScript – where the event loop is
hidden from the user. Node is designed with streaming and low latency in mind,
making HTTP a first-class citizen in Node. </p>

 Installation</h1>
<p>Node is very easy to install. Head over to <a href="http://nodejs.org">https://nodejs.org</a>
and find the LTS (Long Term Support) compatible Node.js for your OS. Check if
Node.js has been successfully installed:

<ol type="i">
<li>Open up terminal</li>
<li>Run <code>node --version</code> (make sure you’re the latest stable version
of Node.js) Check for existing Node Package Manager <code>npm</code>
</li>
    </ol>
</p>

<p id="npm-installation"> Usually installation on Windows Machine comes with npm
JavaScript runtime package manager.  You can look up installation on <a href="http://npmjs.org">https://npmjs.org</a> to see installation steps for your machine. Installation of <code>npm</code> is very necessary when building Node.js
applications.</p>
             
<p id="node-projects"> After installation perform the following:
<ol type="i">
<li> Create a directory for all Node.js projects (this is not really necessary as node is
installed globally and can run from anyway on your machine) to keep you Node.js
project in one place.
</li>
<li>
Create a directory for the project <code>project 101</code>
</li>
<li>
Create an <code>index.js</code>
</li>
<li>
Write the following simple, regular JavaScript:
</li>
<br>
<div class="code-area">
    <code>
        <comment>//init a variable</comment>
        <br>
        <const>let</const> counter = <num>0</num>;
        <br>
        <comment>//set interval function</comment>
        <br>
        <fnc>setInterval</fnc>(<fnc>() => </fnc> {
        <br>
        <props>console</props>.<fnc>log</fnc>(counter);
        <br>
        counter++;
        <br>
        }, <comment>/*set interval*/</comment><num>1000</num>);
        <br>
    </code>
</div>
<br>
<li>Launch the terminal, navigate to the project directory and run <code>node index.js</code></li>
<li>Hit <code>CMD + C</code> or <code>CTRL + C</code> to end the process</li>
</ol>
</p>
<p>
Notice the script is the regular day-to-day JavaScript nothing too fancy and nothing different
from what you already know. Although, Node.js has its little new syntax but nothing
different from codes you already know.
</p>
</div>