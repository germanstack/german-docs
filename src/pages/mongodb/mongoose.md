---
title: "Introducing Mongoose"
date: "2017-08-10"
author: "Codeekage"
topic : "MongoDB"
image : "/img/agiri.jpeg"
sortName : "express"
---

<div id="using-mongodb-mongoose">
                        <p>During the time of this course all CRUD (Create, Read, Update and Delete) operations will be
                            done using
                            Mongoose.
                        </p>
                        <p>Let's update our <code>german-todo-app</code> to have a database. 🎉🎉
                            By now we should have been able to setup our MongoDB environment and ready to build.</p>
                        <p>If that's done follow the steps below to add a database to the application:</p>
                        <ol>
                            <li>Start up the MonogoDB server</li>
                            <li>Start up Node.js Server for <code>german-todo-app</code></li>
                            <li>Run <code>npm install mongodb mongoose</code> in the terminal</li>
                            <li>Add the following code to <code>index.js</code></li>
                            <div class="code-area">
                                <code>
                                        <p>.....</p>
                                        <p><const>const</const> MongoClient = <fnc>require</fnc>(<string>'mongoose'</string>)</p>
                                        <p>....</p>
        
<p>MongoClient.<fnc>connect</fnc>(dbURI, {</p>
                                            <p class="indent-1"><props>useNewUrlParser</props>: <num>true</num>,</p>
                                            <p class="indent-1"><props>useCreatIndex</props>: <num>true</num></p>
                                            <p>}, <fnc>(</fnc>err, db <fnc>) => </fnc>{</p>
                                                <p class="indent-1"><fnc>if</fnc>(err){</p>
                                                    <p class="indent-2"><props>console</props>.<fnc>log</fnc>(err);</p>
                                                <p class="indent-1">} <fnc>else</fnc> {</p>
                                                    <p class="indent-2"><props>console</props>.<fnc>log</fnc>(<string>`connected to <temp>${</temp></string> dbURI <string><temp>}</temp> Name : <temp>${</temp></string> db.Name<string><temp>}</temp></string>`);</p>
                                                    <p class="indent-1">}</p>
                                        <p>})</p>
                                        <p>.... </p>
                                    </code>
                            </div>
                            <p>Awesome!</p>
                            <li>Add the following code to <code>todo.js</code></li>
                            <div id="mongodb-routes">
                                <h2>Updating Request to Use Mongoose</h2>
                                Let's add a <code>post, put, and delete</code> request. And some more middleware
                                bridges in
                                the root app.
                                Install some dependencies before we proceed.
                                <ol>
                                    <li>Run <code>npm i body-parser lodash</code></li>
                                    <li>After a successful installation, modify the following codes:</li>
                                    <li><code>require</code> dependencies</li>
                                    <div class="code-area">
                                        <code>
                                                    <p><const>const</const> {TodoModel} = <fnc>require</fnc>(<string>'../model/todo'</string>);</p>
                                                </code>
                                    </div>
                                    <!-- GET todo/ -->
                                    <li><code>GET /todo</code></li>
                                    <div class="code-area">
                                        <code>
                                                <p>route.<fnc>get</fnc>(<string>'/todo'</string>, <fnc>(</fnc>req, res, next<fnc>) =></fnc> {</p>
                                                    <p><comment><i>//</i></comment></p>
                                                    <p class="indent-1">try{</p>
                                                    <p class="indent-2"><const>const</const> todos <fnc>= await</fnc> TodoModel.<fnc>find</fnc>({});</p>
                                                    <p class="indent-2">res<fnc>.json</fnc>(todos);</p>
                                                    <p class="indent-1">}catch(err){</p>
                                                    <p class="indent-3"><fnc>next</fnc>(err);</p>
                                                    <p class="indent-1">}</p>
                                               <p>});</p>                                       
                                            </code>
                                    </div>
                                    <!-- GET todo/:id -->
                                    <li><code>GET /todo/:id</code></li>
                                    <div class="code-area">
                                        <code>
                                                <p>route.<fnc>get</fnc>(<string>'/todo/:id'</string>, <fnc>async (</fnc>req, res, next<fnc>) =></fnc> {</p>
                                                    <p><comment><i>//</i></comment></p>
                                                    <p class="indent-1">try{</p>
                                                        <p class="indent-2"><const>const</const> todosById <fnc>= await </fnc>TodoModel.<const>findOne</const>({id:<fnc>parseInt</fnc>(req.params.id)});</p>
                                                        <p class="indent-2"><fnc>if</fnc>(!todosById){</p>
                                                            <p class="indent-3"><fnc> throw new Error</fnc>(<string>`Check id</string><temp>${</temp>req.params.id <temp>}</temp><string>`</string>)</p>
                                                            <p class="indent-2">}</p>
                                                    <p class="indent-2">res<fnc>.json</fnc>(todoById);</p>
                                                    <p class="indent-1">}catch(err){</p>
                                                    <p class="indent-2"><fnc>next</fnc>(err);</p>
                                                    <p class="indent-1">}</p>
                                               <p>});</p>                                       
                                            </code>
                                    </div>
                                    <!-- POST /todo -->
                                    <li><code>POST /todo</code></li>
                                    <div class="code-area">
                                        <code>
                                                <p>route.<fnc>post</fnc>(<string>'/todo'</string>, <fnc>(</fnc>req, res, next<fnc>) =></fnc> {</p>
                                                    <p><comment><i>//</i></comment></p>
                                                    <p class="indent-1">try{</p>
                                                        <p class="indent-2"><const>const</const> newTodo <fnc>= await </fnc>TodoModel.<const>create</const>(req.body);</p>
                                                        <p class="indent-2"><fnc>if</fnc>(!newTodo){</p>
                                                            <p class="indent-3"><fnc> throw new Error</fnc>(<string>`Failed to add`</string>)</p>
                                                            <p class="indent-2">}</p>
                                                    <p class="indent-2">res<fnc>.json</fnc>(newTodo);</p>
                                                    <p class="indent-1">} catch(err){</p>
                                                    <p class="indent-2"><fnc>next</fnc>(err);</p>
                                                    <p class="indent-1">}</p>
                                               <p>});</p>                                       
                                            </code>
                                    </div>
                                    <!-- PUT /todo/:id -->
                                    <li><code>PUT /todo/:id</code></li>
                                    <div class="code-area">
                                        <code>
                                                <p>route.<fnc>put</fnc>(<string>'/todo/:id'</string>, <fnc>async (</fnc>req, res, next<fnc>) =></fnc> {</p>
                                                    <p><comment><i>//</i></comment></p>
                                                    <p class="indent-1">try{</p>
                                                        <p class="indent-2"><const>const</const> toUpate <fnc>= await </fnc>TodoModel.<const>findOneAndUpdate</const>({id:<fnc>parseInt</fnc>(req.params.id)}, req.body);</p>
                                                        <p class="indent-2"><fnc>if</fnc>(!toupdate){</p>
                                                            <p class="indent-3"><fnc> throw new Error</fnc>(<string>`Invalid id: </string><temp>${</temp>req.params.id <temp>}</temp><string>`</string>)</p>
                                                            <p class="indent-2">}</p>
                                                            <p class="indent-2"><const>const</const> updated <fnc>= await </fnc>TodoModel.<const>findOne</const>({id: toUpate.id
                                                            });</p>

<p class="indent-2">res<fnc>.json</fnc>(updated);</p>
        
<p class="indent-1">}catch(err){</p>
                                                    <p class="indent-2"><fnc>next</fnc>(err);</p>
                                                    <p class="indent-1">}</p>
                                               <p>});</p>                                       
                                            </code>
                                    </div>
                                    <li><code>DELETE /todo/:id</code></li>
                                    <div class="code-area">
                                        <code>
                                            <p>route.<fnc>delete</fnc>(<string>'/todo/:id'</string>, <fnc>async (</fnc>req, res, next<fnc>) =></fnc> {</p>
                                                <p><comment><i>//</i></comment></p>
                                                <p class="indent-1">try{</p>
                                                    <p class="indent-1"><const>const</const> toDelete <fnc>= await </fnc>TodoModel.<const>findOneAndDelete</const>({id:<fnc>parseInt</fnc>(req.params.id)});</p> 
                                                    <p class="indent-2"><fnc>if</fnc>(!toDelete){</p>
                                                        <p class="indent-3"><fnc> throw new Error</fnc>(<string>`Invalid id: </string><temp>${</temp>req.params.id <temp>}</temp><string>`</string>)</p>
                                                        <p class="indent-2">}</p>
                                                    <p class="indent-2">res<fnc>.json</fnc>(toDelete);</p>
                                                    <p class="indent-1">}catch(err){</p>
                                                    <p class="indent-2"><fnc>next</fnc>(err);</p>
                                                    <p class="indent-1">}</p>
                                               <p>});</p>                                       
                                            </code>
                                    </div>
                                    <li><code>export module</code></li>
                                    <div class="code-area"><code>
                                            <props>module.exports</props> <num>=</num> route;
                                        </code></div>
                                </ol>
                            </div>
                        </ol>
                    </div>
