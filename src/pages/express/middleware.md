---
title: "Express Middleware Functions"
date: "2017-08-10"
author: "Codeekage"
topic : "Express"
image : "/img/agiri.jpeg"
sortName : "express"
---


<div id="express-middleware">
                      
                        <p>We've successfully added some working codes, but we barely understand what's going on.
                            '🙄🤷‍🤦‍️' Happy it's working.😁😁
                        </p>
                        <p>Review the codes:</p>
                        <ol>
                            <li><code>app.use()</code></li>
                            <li><code>route.get('/', (req, res, next))</code></li>
                        </ol>
                        <p>All these to us now are jargons!</p>
                        <p>Understanding middlewares will give us a grasp on the codes. First, what's a <b>Middleware
                                Function?</b></p>
                        <p>
                            <i>Middleware Funcitons:</i> are functions that have access to the request
                            object (<code>req</code>), the response object(<code>res</code>), and the <code>next</code>
                            function <i>(in the application’s
                                request-response cycle)</i>.
                        </p>
                        <p>Middleware functions can perform the following task</p>
                        <ol type="i">
                            <li>Execute any code.
                            </li>
                            <li>Make changes to the request and the response objects.
                            </li>
                            <li>End the request-response cycle.
                            </li>
                            <li>Call the next middle in the stack.
                            </li>
                        </ol>
<div id="next-function">
                            <h3>The <code>next()</code> Function</h3>
                            <p>Is a function in the Express router which, when invoked, executes the
                                middleware succeeding the current middleware. </p>
                            <p>
                                If the current middleware function does not end a <code>request-response cycle</code>,
                                it
                                must call <code>next()</code>
                                to pass control to the next middleware function. Where this fails the request will be
                                left
                                hanging.
                            </p>

<p>With the defintions of <code>middleware functions</code> we now know <code>app.get</code>
                                is
                                a middleware function, because it has access to the <code>(req, res)</code> objects,
                                and
                                the <code>next</code> function.
                                <code>next</code> can be anything, but by convention <code>next</code> is commonly
                                used.
                            </p>
                            <p>A middleware also acts as a bridge between an operating system or database and
                                applications, especially on a network. <code>app.use</code> is a bridge between our
                                routes and the application.</p>
                            <p>Earlier, the routes were not exposed when we first created them in <code>todo.js</code>,
                                that's because we needed a brigde between the root app in the <code>index.js</code>
                                file
                                and our routes in
                                <code>todo.js</code> so, we implemented <code>app.use</code> and required our routes.</p>
                            <p>In other words, <code>app.use()</code> acts as a bridge between a middleware function
                                and
                                the application request-response cycle.</p>
                        </div>
                        <div id="more-routes">
                            <h1>Adding More Request</h1>
                            Let's add a <code>post, put, and delete</code> request. And some more middleware bridges in
                            the root app.
                            Install some dependencies before we proceed.
                            <ol>
                                <li>Run <code>npm i body-parser lodash</code></li>
                                <li>After a successful installation, modify the following codes:</li>
                                <li><code>require</code> dependencies</li>
                                <div class="code-area">
                                    <code>
                                        <p><const>const</const> express = <fnc>require</fnc>(<string>'express'</string>);</p>
                                        <p><const>const</const> _ = <fnc>require</fnc>(<string>'lodash'</string>);</p> 
                                        <p><const>const</const> route = express.<code>Router</code>();</p>
                                    </code>
                                </div>
                                <!-- todo/ GET -->
                                <li><code>GET /todo</code></li>
                                <div class="code-area">
                                    <code>
                                        <p>route.<fnc>get</fnc>(<string>'/todo'</string>, <fnc>(</fnc>req, res, next<fnc>) =></fnc> {</p>
                                            <p><comment><i>//</i></comment></p>
                                            <p class="indent-1">try{</p>
                                            <p class="indent-2">res<fnc>.json</fnc>(todo);</p>
                                            <p class="indent-1">}catch(err){</p>
                                            <p class="indent-3"><fnc>next</fnc>(err);</p>
                                            <p class="indent-1">}</p>
                                       <p>});</p>                                       
                                    </code>
                                </div>
                                <!-- todo/:id -->
                                <li><code>GET /todo/:id</code></li>
                                <div class="code-area">
                                    <code>
                                        <p>route.<fnc>get</fnc>(<string>'/todo/:id'</string>, <fnc>async (</fnc>req, res, next<fnc>) =></fnc> {</p>
                                            <p><comment><i>//</i></comment></p>
                                            <p class="indent-1">try{</p>
                                                <p class="indent-2"><const>const</const> todosById <fnc>= await  _.filter</fnc>(todo, {id : <fnc>parseInt</fnc>(req.params.id)});</p>
                                                <p class="indent-2"><fnc>if</fnc>(todosById.<string>length</string> <fnc><=</fnc> <num>1</num>){</p>
                                                    <p class="indent-1"><fnc> throw new Error</fnc>(<string>`Check id</string><temp>${</temp>req.params.id <temp>}</temp><string>`</string>)</p>
                                                    <p class="indent-2">}</p>
                                            <p class="indent-2">res<fnc>.json</fnc>(todo);</p>
                                            <p class="indent-1">}catch(err){</p>
                                            <p class="indent-3"><fnc>next</fnc>(err);</p>
                                            <p class="indent-2">}</p>
                                       <p>});</p>                                       
                                    </code>
                                </div>
                                <li><code>POST /todo</code></li>
                                <div class="code-area">
                                    <code>
                                        <p>route.<fnc>post</fnc>(<string>'/todo'</string>, <fnc>async (</fnc>req, res, next<fnc>) =></fnc> {</p>
                                            <p><comment><i>//</i></comment></p>
                                            <p class="indent-1">try{</p>
                                                <p class="indent-2"><const>const</const> newTodo <fnc>= await  _.concat</fnc>(todo, req.body);</p>
                                                <p class="indent-2"><fnc>if</fnc>(!newTodo){</p>
                                                    <p class="indent-3"><fnc> throw new Error</fnc>(<string>`Failed to add`</string>)</p>
                                                    <p class="indent-2">}</p>
                                            <p class="indent-2">res<fnc>.json</fnc>(newTodo);</p>
                                            <p class="indent-2">}catch(err){</p>
                                            <p class="indent-3"><fnc>next</fnc>(err);</p>
                                            <p class="indent-2">}</p>
                                       <p>});</p>                                       
                                    </code>
                                </div>
                                <li><code>PUT /todo/:id</code></li>
                                <div class="code-area">
                                    <code>
                                        <p>route.<fnc>put</fnc>(<string>'/todo/:id'</string>, <fnc>async (</fnc>req, res, next<fnc>) =></fnc> {</p>
                                            <p><comment><i>//</i></comment></p>
                                            <p class="indent-1">try{</p>
                                                <p class="indent-2"><const>const</const> todosById <fnc>= await _.findIndex</fnc>(todo, {id : <fnc>parseInt</fnc>(req.params.id)});</p>
                                                <p class="indent-2"><fnc>if</fnc>(index <fnc>===</fnc> <num>-1</num>){</p>
                                                    <p class="indent-3"><fnc> throw new Error</fnc>(<string>`Invalid id: </string><temp>${</temp>req.params.id <temp>}</temp><string>`</string>)</p>
                                                    <p class="indent-2">}</p>
                                                    <p class="indent-2">todo[index] <num>=</num> req.body;</p>
                                            <p class="indent-2">res<fnc>.json</fnc>(todo);</p>

<p class="indent-2">}catch(err){</p>
                                            <p class="indent-3"><fnc>next</fnc>(err);</p>
                                            <p class="indent-2">}</p>
                                       <p>});</p>                                       
                                    </code>
                                </div>
                                <li><code>DELETE /todo/:id</code></li>
                                <div class="code-area">
                                    <code>
                                        <p>route.<fnc>delete</fnc>(<string>'/todo/:id'</string>, <fnc>async (</fnc>req, res, next<fnc>) =></fnc> {</p>
                                            <p><comment><i>//</i></comment></p>
                                            <p class="indent-1">try{</p>
                                                <p class="indent-2"><fnc>await _.remove</fnc>(todo, {id : <fnc>parseInt</fnc>(req.params.id)});</p>
                                            <p class="indent-2">res<fnc>.json</fnc>(todo);</p>

 <p class="indent-2">}catch(err){</p>
                                            <p class="indent-3"><fnc>next</fnc>(err);</p>
                                            <p class="indent-2">}</p>
                                       <p>});</p>                                       
                                    </code>
                                </div>
                                <li><code>export module</code></li>
                                <div class="code-area"><code>
                                    <props>module.exports</props> <num>=</num> route;
                                </code></div>
                            </ol>
                        </div>
                        <div id="test-routes">
                            <h4>Testing Our Routes</h4>
                            <p>To check if all we've done works, we need one extra installation. PostMan, is highly
                                recommended for testing APIs, it ease testing out <code>post, put, and delete</code>request.</p>
                            <ol>
                                <li>Install PostMan</li>
                            </ol>
                            <p>The interface is quite easy to understand. You can read up the docs to help you get
                                started.
                                When you are a little bit comforatable with the docs, restart the server and test the
                                API we designed.</p>
                        </div>
                    </div>