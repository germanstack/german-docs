---
title: "Setting up Express"
date: "2017-08-10"
author: "Sani"
image : "/img/sani.png"
topic : "Express"
sortName : "express"
---


<div id="setting-up-express">
                        <p>We’ve seen how we created a Node.js server with already existing Node.js modules. But let’s
                            also looking at doing this with Express:
                        </p>
                        <ol type="i">
                            <li>Create an index.js in the root directory of your project. </li>
                            <li>Add the following code</li>
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
                            <li>Run <code>node index</code> in the terminal</li>
                            <div class="img-holder"><img src="/img/exp-server.PNG" alt="">
                                <figcaption>Fig</figcaption>
                            </div>
                            <li>Congratulations you’ve designed a functional node.js server with Express. 🎉</li>
                        </ol>
                        <p id="exp-server-challenge">
                            Notice in the image above we are making use of <code>npm start</code>
                        </p>
                        <h4>💪💪Challenge💪💪</h4>
                        <p>Your challenge is as follows:</p>
                        <ol>
                            <li>Locate <b>“scripts”</b> in <code>package.json</code> </li>
                            <li>Modify <code>package.json</code> to have a <b>“start”</b> command as shown previously
                                in the earlier chapter of
                                this course.
                            </li>
                            <li>Ensure you start the server with <code>npm start</code>
                            </li>
                            <li>Push the code to a GitHub repo
                            </li>
                            <li>
                                Repo name should be <code>german-todo-app</code>
                            </li>
                            <li>
                                Good Luck. 🏆🏆
                            </li>
                        </ol>
                    </div>