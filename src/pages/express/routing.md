---
title: "Express Routing"
date: "2017-08-10"
author: "Codeekage"
topic : "Express"
image : "/img/agiri.jpeg"
sortName : "express"
---


<div id="express-routing">
                        <h2><i class="fa fa-link"></i>Routing (HTTP Request Methods) </h2>
                        <p>Routing refers to how an application resolves and responds to a client request at a
                            particular endpoint, which is a URI (or path) to a specific HTTP request method (GET, POST,
                            PUT, and so on).
                        </p>
                        <p>
                            A route can have mutiple handler functions, which are executed when the route is
                            matched.
                        </p>
                        <p>A typical express route:</p>
                        <div class="code-area">
                            <code>
                                app.<fnc>METHOD</fnc><const>(</const>URI, HANDLER<const>)</const>;
                            </code>
                        </div>
                        <p>Where:</p>
                        <ol>
                            <li><code>app</code> is an instance of express.</li>
                            <li><code>METHOD</code> is an HTTP request method (get, post, put, etc)</li>
                            <li><code>URI</code> is a path on the server. </li>
                            <li> <code>HANDLER</code> the executed behaviour of the route when it's matched.</li>
                        </ol>
                        <h4>💪💪Challenge💪💪</h4>
                        <p>We've written some basic routes in our previous codes.</p>
                        <ol>
                            <li>Identify the basic route</li>
                            <li>Add a simple comment above the code</li>
                            <li>Commit and push the added comments to the repo.</li>
                            <li>Good Luck 🏆🏆🏆</li>
                        </ol>
                        <p>Now, we understand what routes are, it's safe to add some routes to our <code>german-todo-app</code></p>
                        <ol>
                            <li>Create a <code>route</code> folder in the root directory</li>
                            <li>Create a <code>todo.js</code> file in the <code>route</code> folder</li>
                            <li>Add the following code to <code>todo.js</code></li>
                            <div class="code-area">
                                <code>
                                    <p><const>const</const> express = <fnc>require</fnc>(<string>'express'</string>);</p>
                                    <p><const>const</const> route = express.<fnc>Router</fnc>();</p>
                                    <p>route.<fnc>get</fnc>(<string>'/todo'</string>, <const>(</const>req, res, next<const>) =></const> {</p>
                                    <p class="inner">res.<fnc>json</fnc>(todo);</p>
                                    <p>});</p>
                                </code>
                            </div>
                        </ol>
                        <p>Running the code above will result to no change. First, we need to modify index.js.</p>
                        <p>Currently <code>index.js</code>:</p>
                        <ol type="i">
                            <div class="code-area">
                                <code>
                                    <p><const>const</const> express = <fnc>require</fnc>(<string>'epress'</string>);</p>
                                    <p><comment><i>//init express app</i></comment></p>
                                    <p><const>const</const> app = <fnc>express</fnc>();</p>
                                    <p><comment><i>//set a port</i></comment></p>
                                    <p><const>const</const> port = <num>4000</num>;</p>
                                    <p><comment><i>//set a hostname</i></comment></p>
                                    <p><const>const</const> hostname = <string>'127.0.0.1'</string>;</p>
                                    <p>app.<fnc>get</fnc>(<string>'/'</string>, <fnc>(</fnc>req, res <fnc>) => </fnc> {</p>
                                    <p class="inner">res.<fnc>send</fnc>(<string>'Hello World'</string>);</p>
                                    <p>});</p>
                                    <p>app.<fnc>listen</fnc>(port, <fnc>() => </fnc>{</p>
                                    <p class="inner"><props>console</props>.<fnc>log</fnc>(<string>`Server running at https://</string><temp>${</temp>hostname<temp>}</temp><string>:</string> <temp>${</temp>port<temp>}</temp><string>`</string>);</p>
                                    <p>});</p>
                                </code>
                            </div>
                            <li>Replace <code>app.get</code> with the code below:</li>
                            <div class="code-area"><code>
                                    <p>app.<fnc>use</fnc>(<string>'/'</string>, <fnc>require</fnc>(<string>'./routes/todo'</string>));</p>
                            </code></div>
                            <li>Hit save and restart the server with <code>npm start</code></li>
                            <li>Open the route in the browser <a href="http://127.0.0.1:4000/todo" target="_blank">http://127.0.0.1:4000/todo</a></li>
                            <li>Notice we have a <code>ReferenceError: todo is not defined</code></li>
                            <li>Let's create an array of todos in <code>todo.js</code></li>
                            <div class="code-area">
                                <code>
                                    <p>...</p>
                                    <p><const>const</const> todo = [{
                                       <p class="inner">id : <num>1</num>,</p>
                                       <p class="inner">task: <string>'CLeaning'</string></p>
                                       <p class="inner">time: <string>'10:00AM'</string></p>
                                       <p class="inner">done: <num>false</num></p>
                                    <p>}]</p>
                                    <p>...</p>
                                </code>
                            </div>
                        </ol>
                        <h4>💪💪Challenge💪💪</h4>
                        <ol type="i">
                            <li>Expand the todo array to have a minimum of <code>10 objects</code></li>
                            <li>Add sensible comments to the codebase</li>
                            <li>Commit and push changes to the repo</li>
                            <li>Good Luck 🏆🏆🏆🏆 </li>
                        </ol>
                    </div>