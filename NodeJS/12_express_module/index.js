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