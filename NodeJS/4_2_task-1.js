// import http, url, qurystring
var http = require('http');
//create server
var server = http.createServer((req, res)=>{
    res.end("Server is running....");
});
server.listen(80, "127.0.0.1");

//receive query string
//parse query string to command, num1, num2
//send command, num1, num2 to library
//receive result and display