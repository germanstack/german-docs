---
title: "Packages && Modules"
date: "2017-08-10"
author: "Codeekage"
topic : "Node.js"
sortName : "nodejs"
image: "/img/agiri.jpeg"
---



<div id="package-json">
    <h2>package.json</h2>
                        <p><code>package.json</code> is a extremely important when building Node Apps. It must be an
                            actual JSON not a JavaScript object literal.</p>
                        <p>First, let’s make some modification to <code>package.json</code> to have a start command:</p>
                        <ol type="i">
                            <li>Locate scripts and modify the code:</li>
                            <div class="img-holder"><img src="/img/scripts.PNG" alt=""></div>
                            <li>Run <code>npm start</code> in the terminal</li>
                            <div class="img-holder"><img src="/img/npm-start.PNG" alt=""></div>
                            <li>Awesome you've done great!</li>
                        </ol>
                        <p>We have bunch of objects in the <code>pacakge.json</code> file. Let's spend some time
                            understanding we have in there.</p>
                        <p>
                            <code>name:</code> The name and version together form an identifier that is assumed to be
                            completely
                            unique. If you plan on publishing a package, the name and version are the most important
                            things in the package.json and are required. In a case where you don’t plan on publishing a
                            package, the name and version becomes optional.
                        </p>
                        <ol type="i">
                            <h4>Some rules:</h4>
                            <li>The name must be less than or equal to 214 characters. This includes the scope for
                                scoped packages. </li>
                            <li>The name can’t start with a dot or an underscore </li>
                            <li>New packages must not have uppercase letters in the name.</li>
                            <li>The name ends up being part of a URL, an argument on the command line, and a folder
                                name. Therefore, the name can’t contain any non-URL-safe characters.</li>
                        </ol>
                        <ol type="i">
                            <h4>Some tips:</h4>
                            <li>Don’t use the same name as a core Node module e.g. path, http, and fs. </li>
                            <li>Don’t put “js” or “node” in the name. It’s assumed that it’s js, since you’re writing
                                package.json file, and you can specify the engine using the “engines” field.</li>
                            <li>The name will probably be passed as an argument to require (), so it should be
                                something short, but also reasonably descriptive. </li>
                        </ol>
                        <p>
                            <code>version:</code> Version must be parseable by node-server, which bundled with npm as a
                            dependency.
                        </p>
                        <p>
                            <code>description:</code>Put a description in it, It’s a string. This helps people discover
                            your package, as it’s listed in npm search.
                        </p>
                        <p>
                            <code>keyword:</code>It’s an array of strings. This helps people discover your package as
                            it’s listed in npm search.
                        </p>
                        <p>
                            <code>homepage:</code>The url to the project homepage.
                        </p>
                        <p>
                            <code>bug:</code>The url to your project’s issue tracket and/or the email address to which
                            issues should be reported. These are helpful for people who encounter issues with your
                            package. You can either specify both values i.e. email and a url or both. If a url is
                            provide, it will be used by the npm bugs command. If you want to specify only a url, a
                            simple string is just fine.
                        </p>
                        <p>
                            <code>license:</code> You should specify a license for your package so that people know how
                            they are permitted to use it, and any restriction you’re placing on it.
                        </p>
                        <p>
                            <code>scripts:</code> The scripts property is a dictionary containing scripts command that
                            are run at various times in he lifecycle of your package. The key is the lifecycle event,
                            and the value is the command to run at that point.
                        </p>
                        <p>
                            <code>dependencies:</code> Dependencies are specified in a simple object that maps a
                            package name to a version range. The version range is a string which has one or more
                            space-separated descriptors.
                        </p>
                    </div>

<div id="package-vs-modules">

<h1>Package vs. Modules</h1>
                        <p>
                            A package is a bundle of more than one module grouped together (packaged) in an
                            application.
                            In the early part of this course, we initialized a Node app and spent some time in the
                            <code>package.json</code>, we discussed publishing with name and version. Some Node apps
                            can also be
                            considered a package. We won’t be covering how to build node packages in this edition
                            maybe later courses will. But understand a bundle of module makes up a package.
                            A module is a reusable JavaScript file in the application, that must have been exported and
                            made available to other files in your application.

</p>
                        <p>Now we've gotten a good introduction let's go ahead in the next course and build a <code>german-todo-app.</code></p>
                    </div>