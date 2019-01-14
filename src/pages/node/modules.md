---
title: "Modules"
date: "2017-08-10"
author: "Codeekage"
topic : "Node.js"
sortName : "nodejs"
image: "/img/agiri.jpeg"
---


<div id="modules">
<p>You can consider modules to be the same as JavaScript libraries. More like some functions
                            you’d love to have in your application.</p>
                        <h2>Built-in Modules</h2>
                        <p>Node.js has a set of built-in modules which you can use without any further installation,
                            with package managers like npm or yarn.</p>
                        <h2>Include Modules</h2>
                        <p>To include a module, use the <code>require()</code> function with the name of the module as
                            an argument in the parenthesis.
                        </p>
                        <div class="code-area">
                            <code>
                                    var http = require(‘https’);
                                </code>
                        </div>
                        <p>
                            The HTTP module is now available for use in your application. Remember when we created the
                            server, and required http? Yes. You can also import other built-in modules and installed
                            modules from packages as we’ll see in the later chapters of this book.
                        </p>
                    </div>