---
title: "Mongoose Schema"
date: "2017-08-10"
author: "Codeekage"
topic : "MongoDB"
image : "/img/agiri.jpeg"
sortName : "express"
---


 <div id="mongoose-schemas">
                        <p>So far, we’ve added bunch of not working codes that practically destroys all the work
                            and effort we’ve invested over the last chapters. 🤦‍</p>
                        <h5>Let’s fix that ⛏🛠: </h5>
                        <p>To do that we need to understand some concepts and how a database is probably created, and
                            how tables, row, and columns are been defined. In MongoDB, we can say: how the collections,
                            fields, and documents are defined. </p>
                        <p>Earlier, we understood that MongoDB documents database takes a JSON format; but we are yet
                            to see in action. Schemas, SchemaTypes, and Queries are the building blocks to achieving
                            that.</p>
                        <div id="mongoose-schema">
                            <h1><i class="fa fa-link"></i> Schemas</h1>
                            <p><code>Mongoose</code> dependency that was installed earlier; and everything in Mongoose
                                starts with a Schema. A schema is a representation of a plain or theory in the form of
                                an outline or model. Schemas maps to a MongoDB collection and defines the shape of the
                                documents within that collection i.e. one schema to one MongoDB collection. </p>
                            <p>
                                For those familiar with some other databases like MSSQL, and MYSQL; Schema are much
                                more like defining a table, defining each field, and assigning specific data types. The
                                awesomeness about using MongoDB and Mongoose are schemas. The definition system is a
                                lot like JSON.
                            </p>
                            <div class="code-area" id="code-schema-definition">
                                <code>
                                        <p>...</p>
                                        <p><const>const</const> TodoSchema = <fnc>new</fnc> <const>Schema</const>({
                                           <p class="inner">id:  {</p>
                                            <p class="indent-2"> type : <string>String,</string></p>
                                            <p class="indent-2"> unique : <num>true</num></p>
                                            <p class="inner">},</p>
                                           <p class="inner">task:  {</p>
                                            <p class="indent-2"> type : <string>String,</string></p>
                                            <p class="indent-2"> required : <num>true</num></p>
                                            <p class="inner">},</p>
                                           <p class="inner">addDate:  {</p>
                                            <p class="indent-2"> type : <string>Date,</string></p>
                                            <p class="indent-2"> default : <string>Date</string>.<fnc>now</fnc>()</p>
                                            <p class="inner">}</p>
                                        <p>});</p>
                                        <p>...</p>
                                    </code>
                            </div>
                            <p>The above code depicts a typical Schema definition. Schemas not only define the
                                structure of your structure and casting of properties, the also define document
                                instance methods, stat Model methods, compound indexes and document lifecycle hooks
                                called middleware. </p>
                        </div>
                        <div id="mongoose-schema-types">
                            <h1><i class="fa fa-link"></i>SchemaTypes</h1>
                            <p>
                                SchemaTypes handle definition to path defaults, validation getters, setters,
                                field delection defaults, for queries, and other general characteristics of Mongoose
                                document properties.
                            </p>
                            <p>You can think of a Mongoose schema as the configuration object for Mongoose model. A
                                SchemaType is then configuration object for an individual property. A SchemaType says
                                what type a given path shoulf have, whether it has any getters/setters, and what values
                                are valid for that path. </p>
                            <div id="valid-schema-types">
                                <h2>Valid Schema Types:</h2>
                                <ul class="dots-li">
                                    <code>
                                        <li>String</li>
                                        <li>Buffer</li>
                                        <li>Boolean</li>
                                        <li>Date</li>
                                        <li>Number</li>
                                        <li>Schema.Types.Mixed</li>
                                        <li>Schema.Types.ObjectId</li>
                                        <li>Schema.Types.Decimalsl128</li>
                                        <li>[]</li>
                                        <li>[String]</li>
                                        <li>[Number]</li>
                                        <li>[Date]</li>
                                        <li>[Buffer]</li>
                                        <li>[Boolean]</li>
                                        <li>[Schema.Types.Mixed]</li>
                                        <li>[Schema.Types.ObjectId]</li>
                                        <li>[[]]</li>
                                        <li>[[Number]]</li>
                                        <li>{}</li>
                                        <li>Map</li>
                                    </code>
                                </ul>
                            </div>
                            <div id="schema-type-options">
                                <h2>Schema Type Options</h2>
                                <p>You can declare a schema type using the type directly, or an object with
                                    a <code>type</code> property as seen in the above <a href="#code-schema-definition">code.</a>
                                </p>
                                <h5>Schema Types <code>options</code></h5>
                                <ul class="dots-li">
                                    <li><code>required:</code> boolean or function, if truw adds a required validatior
                                        for this property.</li>
                                    <li><code>default:</code> Any or function, sets a default value for the path. If
                                        the value is a function, the return value of
                                        the function is used as default.</li>
                                    <li><code>select:</code>boolean, specifies defautl projections for queries.</li>
                                    <li><code>validate:</code>function, adds a valiator function for this property</li>
                                    <li><code>get:</code> function defines a custom getter for this property using
                                        Object.defineProperty()</li>
                                    <li><code>set:</code> function defines a custom setter for this property using
                                        Object.defineProperty()</li>
                                    <li><code>alias:</code> string, mongoose >= 4.1.0.0 only. Defines a virtual with
                                        the given name that gets/sets this path.</li>
                                    <li><code>index:</code> boolean, wherther to an index on this property.</li>
                                    <li><code>unique:</code> boolean, whether to define a unique index on this
                                        property.</li>
                                    <li><code>sparse:</code> boolean, whether to define a sparse index on this
                                        property. </li>
                                    Read More on Schema Types Options <a href="https://mongoosejs.com/docs/schematypes.html">Here</a>.
                                </ul>
                            </div>
                            <h4>💪💪Challenge💪💪</h4>
                            <p>Let's try out our knowledge so far. We will be creating some models for our application.
                                First, complete the challenge.</p>
                            <ol type="i">
                                <li>Create a folder in the root directory <code>./model</code></li>
                                <li>Create a file with in the <code>./model/todo.model.js</code></li>
                                <li>Copy the following code <a href="#code-schema-definition">here</a> into the file
                                    you just created</li>
                                <li>Add apporiate comments to your code</li>
                                <li>Commit and push your code to the repo <code>german-todo-app</code></li>
                                <li>Good Luck 🏆🏆🏆🏆🏆🏆</li>
                            </ol>
                        </div>
                        <div id="mongoose-models">
                            <h1><i class="fa fa-link"></i>Mongoose Models</h1>
                            <p>Models are fancy constructors complied from <code>Schema</code> definitions. An instance
                                of model is called a document.
                                Models are responsibke for creating and readign documents from the underlying MongoDB
                                database.</p>
                            <p>Compling schema are quite easy</p>
                            <div class="code-area"><code>
                                <p><const>const</const> TodoModel <fnc>=</fnc> mongoose.<const>model</const>(<string>"todo"</string>, TodoSchema);</p>
                            </code></div>
                            <p>A model can become available for use within your application after it's been exported as
                                a module.
                                Exporting a module can be done in serval ways but we'll be exporting this way for now,
                                and the during the time of this course we'll learn more ways to export modules.</p>
                            <div class="code-area" id="code-export-models"><code>
                                        <p><props>export</props>.TodoModel <fnc>=</fnc> mongoose.<const>model</const>(<string>"todo"</string>, TodoSchema);</p>
                                    </code></div>
                            <p>The first argument is the singular name of the collection the model is for. Mongoose
                                will automatically look for the plural version of the model name</p>
                            <p>Thus, for the code above, the model <code>Todo</code> is for the <code>todos </code>
                                collection in the database. </p>
                            <p>The <code>.model()</code> function makes a copy of <code>schema</code>. Ensure that
                                you’ve added everything you want to the <code>schema</code> before calling <code>.model()</code>.
                                It’s usually a good practice to keep the calling <code>.model()</code> at the bottom of
                                the code. </p>
                            <h4>💪💪Challenge💪💪</h4>
                            <p>Let's update our codes and kick out the errors.</p>
                            <ol type="i">
                                <li>Open up <code>./model/index.js</code></li>
                                <li>Require <code>mongoose</code> at the top of tthe file.</li>
                                <li>Require <code>{Schema}</code> from the <code>mongoose</code> reference</li>
                                <li>Add this <a href="#code-export-model">code</a> to the bottom of the file.</li>
                                <li>Start the <code>MongoDB Server</code></li>
                                <li>Start <code>Node.js Server</code></li>
                                <p>A this point you shouldn't have any error trying your API with <a href="http://">Postman</a></p>
                                <li>Good Luck! 🏆🏆🏆🏆🏆🏆🏆</li>
                            </ol>

</div>
                    </div>