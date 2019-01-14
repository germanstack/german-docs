---
title: "Custom Middleware && Handlers"
date: "2017-08-10"
author: "Codeekage"
topic : "Express"
image : "/img/agiri.jpeg"
sortName : "express"
---

<div id="middleware-and-handlers">
                     <!--    <h3><i class="fa fa-link"></i>Custom Functions and Handlers</h3> -->
                        <p>With our knowledge of <i>Middleware Functions</i> building custom handlers, and middleware
                            functions will be piece of cake. The concept behind middleware functions, that you should
                            understand is Middleware Functions, are just function. Handlers, are functions designed to
                            perform a specific task. </p>
                        <p>Will be creating middleware functions with handlers to perform specific task e.g. Error
                            handling, Log handling, and etc.</p>
                        <p>The code below depicts a handler in a middleware function. </p>
                        <div class="code-area"><code>app.<fnc>use</fnc>(someHanlder)</code></div>
                    </div>

<div id="express-error-handling">
                        <h2><i class="fa fa-link"></i>Error Handling in Express</h2>
                        <p>This refers to how Express catches and processes errors that occurs both synchronously
                            and
                            asynchronously. </p>
                        <p>Express comes with a default error handler, that you don’t necessarily need to write
                            your own error handler to get started. The built-in error handler takes care of any
                            error that may occur in the application. This default error-handling middleware
                            function is added at the end of the middleware function stack. </p>
                        <p>Using the <code>next()</code> to pass errors, you may not any custom error handler.
                            Errors
                            will be handled by the built-in error-handler; the error will be written to the client
                            with the stack trace. </p>
                        <p>This stack trace are not included in productions, so even if a the <code>next()</code>
                            is
                            called with error after you’ve started writing the response (for example, if you
                            encounter an error while sending a response across to a client) the Express default
                            error handler closes the connection and fails the request AKA the application goes
                            bazooka! Crashes. </p>
                        <p>In this scenario, custom error handler becomes extremely important. We don’t want
                            applications going nuts in production. In a custom error handler, you must delegate to
                            the default Express error handler, when the errors have already been sent to the
                            client. </p>
                        <p>Like every we’ve written, has three (3) arguments. Defining error-handlers requires
                            four (4) argument instead of three(3) <code>(err, req, res, next)</code></p>
                        <p>Let’s add some code to our <code>index.js</code></p>
                        <div class="code-area">
                            <code>
                                        <p>....</p>
                                        <comment><i>//hanlder function</i></comment>
                                        <p>function <fnc>errorHandler(</fnc>err, req, res, next<fnc>){</fnc></p>
                                            <p class="inner-1"><props>console</props>.<fnc>error</fnc>(err.stack)</p>
                                            <p class="inner-1"> res.<const>status(<num>500</num>)</const>.<fnc>send</fnc>({</p>
                                                <p class="inner-2"><string>error : </string> err.message</p>
                                                <p class="inner-1">});</p>
                                                <p class="inner-1"><fnc>next</fnc>(err);</p>
                                        <p>}</p>
                                        <p><comment><i>//milddware function</i></comment></p>
                                        <p>app.<fnc>use</fnc>(errorHandler);</p>
                                        ......
                                    </code>
                        </div>
                        <p>Responses from within a middleware function can be in any format, such as an HTML error
                            page, a simple message, or a JSON string. </p>
                        <p>Note:</p>
                        <ol type="i">
                            <li>The default error handler can get triggered if you call <code>next()</code> with an
                                error in your code more than once, even if custom error handling middleware is in
                                place. </li>
                            <li>You define error-handling middleware last, after other <code>app.use()</code> and
                                routes calls.</li>
                        </ol>
                        <p>Try out your codes and ensure nothing is breaking or acting freaking funny.</p>
                    </div>
                    <div id="summary">
                        <h3><i class="fa fa-link"></i>Summary</h3>
                        <p>So far we've learnt a lot and have crossed from being a novice Node.js developer,
                            to a beginner who understands concept not just a coder. Know this, remembering the syntax
                            isn't really neccessary
                            but understanding the concept and what is, and who is? That's what makes you an awesome
                            developer.
                        </p>
                        <p>Before we dot our 'i' and cross out 't(s)'. Let's make the API we've designed
                            available for consumption.
                        </p>
                        <p>Follow the steps and further explanation will done later in this course.</p>
                        <ol>
                            <li><code>npm install cors</code></li>
                            <li>Modify <code>index.js</code> to have the following codes: </li>
                            <div class="code-area"><code>
                                <p>...</p>
                                <p><comment><i>//require dependencies</i></comment></p>
                                <p><const>const</const> cors = <fnc>require</fnc>(<string>'cors'</string>)</p>
                                <p><const>const</const> bodyParser = <fnc>require</fnc>(<string>'bodyParser'</string>)</p>
                                <p><comment><i>//cors options</i></comment></p>
                                <p><const>let</const> corsOptions <fnc>=</fnc> {</p>
                                    <p class="inner-1"><props>origin :</props> <string>"*"</string>,</p>
                                    <p class="inner-1"><props>optionSuccessStatus :</props> <num>200</num></p>
                                <p>}</p>
                                <p><comment><i>//cors middleware function</i></comment></p>
                                <p>app.<fnc>use</fnc>(<fnc>cors</fnc>(corsOptions));</p>
                                <p><comment><i>//json parser middleware function for [POST, PUT, DElETE] </i></comment></p>
                                <p>app.<fnc>use</fnc>(bodyParser.<fnc>json</fnc>());</p>
                                <p>app.<fnc>use</fnc>(express.<fnc>urlencoded</fnc>({<props>extended : <num>false</num></props>}));</p>
                                <p><comment><i>//errorHandler middleware function</i></comment></p>
                                <p>app.<fnc>use</fnc>(errorHandler);</p>
                                <p>....</p>
                            </code></div>
                        </ol>
                        <h4>🏋️‍🏋️‍Challenge🏋️‍🏋️‍</h4>
                        <p>Using <code>fetch API</code></p>
                        <ol>
                            <li>Design a static <code>HTML, CSS, JS</code> client side webpage</li>
                            <li>Use JavaScript <code>fetch api</code> to call the endpoints</li>
                            <ol type="i">
                                <li>Render the data from the API</li>
                                <li>Add todos to the API</li>
                                <li>Edit todos and also delete todos</li>
                            </ol>
                            <li>Ensure to add proper comments in the: <code>HTML, CSS, and JS</code> files.</li>
                            <li>Commit and push the codes to <code>german-todo-app</code> repo created earlier in this
                                course.</li>
                            <li>Good Luck 🏆🏆🏆🏆🏆</li>
                        </ol>

</div>