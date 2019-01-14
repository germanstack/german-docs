---
title: "Introduction && Installation"
date: "2017-08-10"
author: "Codeekage"
topic : "Express"
image : "/img/agiri.jpeg"
sortName : "express"
---
<div id="express-introduction">
                        <h2 id="express"><i class="fa fa-link"></i>Introduction</h2>
                        <p>Express is a minimal and flexible Node.js web application framework that provides a robust
                            set of features for web and mobile applications.
                        </p>
                        <p>
                            RESTful API for this application will be developed using Express. Express has a large
                            library of HTTP utility and middleware at your disposal, creating a production level API
                            using express is always fun, quick, and easy.
                        </p>
                        <p>
                            With Express’ provision of thin layer fundamental web features, your application
                            performance is not something to really worry about. Express doesn’t affect or obscure any
                            Node.js feature you will be using.
                        </p>
                    </div>
                    <div id="express-installation">
                        <h2><i class="fa fa-link"></i> Installing Express</h2>
                        <p>
                            In the next few pages of this course, we’ll be building a <code>german-todo-app</code>. But
                            to do that,
                            we need to install some packages (or dependencies NB: packages and dependencies will be
                            used interchangbly), like <code>express</code>. Installation process is easy,
                            and straight
                            forward that you have nothing to worry about. We’ll be using a <a href="#npm-installation">Package
                                Manager</a> mentioned earlier in this course. Make sure you have the package manager
                            installed. You can check if the package manager exists by performing the following
                            commands:
                        </p>
                        <ol type="i">
                            <li>Run <code>npm –version</code></li>
                            <li>You should see the version of <code>npm</code> running on your machine. </li>
                        </ol>
                        <p>
                            Let’s proceed to installing express. Remember the folder we created earlier for all <a href="#node-projects">Node.js
                                Projects?</a>
                            Awesome! Navigate to the folder, and create a folder for this project <code>german-todo-app</code>
                            Done? Okay! Let’s get to the proper installation and codes:
                        </p>
                        <ol type="i">
                            <li>Run <code>npm init</code> in <code>german-todo-app</code> directory from the terminal.</li>
                            <li>Run <code>npm install expres</code></li>
                        </ol>
                        <p>
                            Express has been successfully installed. By default, with version npm 5.0+ npm
                            install adds the module to the dependencies list in the package.json file; with earlier
                            versions of npm, you must specify the –save option explicitly.
                        </p>
                        <ol>
                            <li>Open up <code>package.json</code> and locate <code>dependencies:</code>, you will
                                notice express has
                                been added as a dependency for this application. Which is cool. Earlier we also looked
                                at
                                and package.json and discussed some keys in the JSON, <a href="#package-json">read up
                                    here</a>. </li>

<li>
                                Also notice a folder has been created <code>node-modules</code>. DO NOT Tampere with
                                this folder.
                                Don’t try editing any package in there. Messing around with the <code>node-modules</code>
                                folder can
                                make your application act really funny, and throw some unexpected behavior.
                            </li>
                        </ol>
                        <h3>Breakout Session ⏰⏰<code>node-modules</code>. </h3>
                                            <div id="node-modules">
                        <h1><i class="fa fa-link"></i> <code>node-modules</code></h1>
                        <p>Remember when we did an overview of <a href="#package-vs-modules">Modules and Packages</a>?
                            Awesome! Node.js saves application
                            dependencies in the node-modules folder dynamically; whenever a npm install or any package
                            manager runs an installation successfully, the package is automatically saved to the
                            node-modules folder. This makes it a lot easier to use the package on one single require()
                            call. The package and all of its modules becomes available for use. </p>
                    </div>
                    </div>