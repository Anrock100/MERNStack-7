// Example-1
/*
var express = require("express");
var app = express();

app.get('/', (request, response)=>{
    response.send("Hello world of node express");
});

app.get('/about', (request, response)=>{
    response.send("About Us");
});

app.get('*', (request, response)=>{
    response.send("404 Page not found!");
});

app.listen(8000);
*/

//Example-2 - HTML Contents
/*
const { response } = require("express");
var express = require("express");
var app = express();
app.get('', (request, response)=>{
    response.send(`
    <html>
        <head>
            <title>Index page</title>
        </head>
        <body>
            <h1>Welcome to mysite.com</h1>
        </body>
    </html>
    `);
});
app.get('/about', (request, response)=>{
    response.send(`
    <html>
        <head>
            <title>About Us</title>
        </head>
        <body>
            <h1>About Us</h1>
        </body>
    </html>
    `);
});
app.get('/contact', (request, response)=>{
    response.send(`
    <html>
        <head>
            <title>Contact Us</title>
        </head>
        <body>
            <h1>Contact Us</h1>
        </body>
    </html>
    `);
});
app.get('*', (request, response)=>{
    response.send(`
    <html>
        <head>
            <title>404 Page not found!</title>
        </head>
        <body>
            <h1>404 Page not found!</h1>
        </body>
    </html>
    `);
});
app.listen(8000);
*/
// 127.0.0.1:8000
// 127.0.0.1:800/about
// 127.0.0.1:800/contact
// 127.0.0.1:800/test

//Example-2 - Text File
/*
var express = require("express");
var fs = require("fs");

var app = express();
app.get('', (request, response)=>{
    //read text from file - sync
    
    var data = fs.readFileSync("./data/index.txt", 'utf-8');
    response.send(data);
    

    //read text from file - async
    fs.readFile("./data/index.txt", 'utf-8', (error, data)=>{
        console.log(data);
        response.send(data);
    });

    //read text from database
});
app.get('/about', (request, response)=>{
    response.send(``);
});
app.get('/contact', (request, response)=>{
    response.send(``);
});
app.get('*', (request, response)=>{
    response.send(``);
});
app.listen(8000);
*/

// Example-3 - Returning HTML
/*
var express = require("express");
var app = express();
app.get('', (request, response)=>{
    response.send(`<h1>Welcome to mysite</h1>`);
});
app.listen(80);
*/

// Example-4 - Returning JSON
/*
var express = require("express");
var app = express();
app.get('', (request, response)=>{
    var obj1 = {
        pid:1,
        name:'Broadway',
        address:'Ktm'
    };
    var jsonStr = JSON.stringify(obj1);
    response.send(jsonStr);
});
app.listen(80);
*/

//Example-5 - Returning XMl data
// npm i xml-parse-from-string
//https://www.npmjs.com/package/xml-parse-from-string
/*
var express = require("express");
var app = express();
app.get('', (request, response)=>{
    var strXML =`
        <person>
            <pid>1</pid>
            <name>Broadway</name>
            <address>KTM</address>
        </person>
    `;
    response.send(strXML);
});
app.listen(80);
*/

// Example-6 Render HTML File -1 (display with file extension)
var express = require("express");
var path = require("path");
var filePath = path.join(__dirname, "example-7");
var app = express();
app.get('', (request, response)=>{
    response.send(``);
});
app.use(express.static(filePath));
app.listen(8000);

//127.0.0.1/index.html

// Example-7 Render HTML File -2 (Remove file extension)
/*
var express = require("express");
var path = require("path");
var filePath = path.join(__dirname, "example-6");
var app = express();
app.get('', (request, response)=>{
    response.sendFile(`${filePath}/index.html`);
});
app.get('/about', (request, response)=>{
    response.sendFile(`${filePath}/about.html`);
});
app.get('/contact', (request, response)=>{
    response.sendFile(`${filePath}/contact.html`);
});
app.get('*', (request, response)=>{
    response.sendFile(`${filePath}/pagenotfound.html`);
});
app.listen(8000);
*/


//Example-8 Render Template File -1
// npm install ejs
// https://ejs.co/
/*
var express = require("express");
var path = require("path");
var app = express();
app.set('view engine', 'ejs');
app.get('', (request, response)=>{
    //index.ejs -> read and display from views folder
    //we can send value(s) to index.ejs file from current app
    objPerson = {
        id:1,
        name:'Broadway',
        address:'Kathmandu'
    };
    objPersons = [
        {id:1, name:'Broadway', address:'Kathmandu'},
        {id:2, name:'Infosys', address:'Lalitpur'},
        {id:3, name:'Nepal', address:'Bhaktapur'},
    ]
    //records read from text file/xml file/database -> redirect to views
    response.render('index', {objPerson}); 
});
app.listen(8000);
*/