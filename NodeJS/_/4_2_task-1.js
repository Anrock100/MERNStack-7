// import http, url, qurystring
var http = require('http');
var url = require('url');

//create server
var server = http.createServer((req, res)=>{
    var objUrl = url.parse(req.url, true);
    //console.log(objUrl);
    var command = objUrl.pathname; //receive /sum
    var objQuery = url.parse(objUrl.href, {parseQueryString: true}).query;
    //console.log(objQuery);
    var n1 = Number(objQuery.num1); //value of num1
    var n2 = Number(objQuery.num2); //value of num2
    var n3 = null;
    // console.log(command, n1, n2);
    if(command==='/sum'){
        n3 = n1+n2;
    }
    else if(command ==='/sub'){
        n3 = Math.abs(n1+n2);
    }
    res.write("Result : "+n3);
    //append n1, n2, n3, command, and current datetime on file as json data.
    res.end("Server is running....");
});
server.listen(80, "127.0.0.1");

//receive query string
//parse query string to command, num1, num2
//send command, num1, num2 to library
//receive result and display