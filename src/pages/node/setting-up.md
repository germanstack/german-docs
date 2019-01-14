---
title: "Setting Up Node Server"
date: "2017-08-10"
author: "Codeekage"
topic : "Node.js"
sortName : "nodejs"
image: "/img/agiri.jpeg"
---


<p> Let’s initialize a Node App and get ready to build a server. NB: Feel free to delete <code>project 101</code>
                        </p>
                        <ol type="i">
                            <li>
                                Launch the terminal and navigate to the Node.js project folder created earlier in this
                                doc.
                            </li>
                            <li>
                                Create a folder <code>node-000</code>
                            </li>
                            <li>
                                Run <code>npm init</code>
                            </li>
                            <li>
                                Follow up the guides to create the <code>package.json</code>
                            </li>
                            <div class="img-holder">
                                <img src="/img/terminal.PNG" alt="">
                                <figcaption>Fig 1.0 <code>npm init</code> in terminal</figcaption>
                            </div>
                            <li>
                                And <code>package.json</code> should look like this:
                            </li>
                            <div class="img-holder">
                                <img src="/img/package-json.PNG" alt="">
                                <figcaption>Fig 1.1 <code>package.json</code></figcaption>
                            </div>
                        </ol>

<p>
                            Congratulations you just initialized your first Node.js App 🚀🎉🎉🎉</p>
 <p>
                            A server is very easy to get initialized. No xampp, or wampp, or any of that sort is
                            required in
                            Node. Some few lines of codes, with no much configuration and you have a perfect Node.js
                            server
                            running at a port of your choice. Let’s follow the step for creating a server:
                            <ol type="i">
                                <li>
                                    Create an <code>index.js</code> in the <code>node-000</code> project folder.
                                </li>
                                <li>
                                    Add the following scripts to create your server:
                                </li>
<div class="code-area">
<code> 
    <const>const</const> http = <fnc>require</fnc>(<string>"http"</string>);
    <br>
    <comment>//set a hostname</comment>
    <br>
    <const>const</const> hostname = <string>'127.0.0.1'</string>
    <br>
    <comment>//set a port</comment>
    <br>
    <const>const</const> port = <num>3000</num>;
    <br>
    <const>const</const> server = http.<fnc>createServer</fnc>(<fnc>(</fnc>req, res <fnc>) => </fnc>{
    <br>
    <comment><i>//set responses code to 200</i></comment>
    <br>
    res.statusCode = <num>200</num>;
    <br>
    res.<fnc>setHeader</fnc>(<string>'Content-Type', 'text/plain'</string>);
    <br>
    <comment><i>//send a respond</i></comment>
    <br>
    res.<fnc>end</fnc>(<string>'Hello World<num>\n</num>'</string>);
    <br>
    });
    <br>
    <comment><i>//strat up server</i></comment>
    <br>
    server.<fnc>listen</fnc>(port, hostname, <fnc>() => </fnc>{
    <br>
    <comment><i>//log server running to the console</i></comment>
    <br>
    <props>console</props>.<fnc>log</fnc>(<string>`Server running at https://</string><temp>${</temp>hostname<temp>}</temp><string>:</string> <temp>${</temp>port<temp>}</temp><string>`</string>);
    <br>
    }); 
</code>
                                </div>
                                <li>Run <code>node index</code> in the terminal</li>
                                <li>Open the browser and navigate to the <code>http://127.0.0.1:3000.</code> </li>
                            </ol>
                        </p>
                    </div>