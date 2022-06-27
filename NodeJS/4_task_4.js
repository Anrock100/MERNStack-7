var http = require("http");
var fs = require("fs");

//create new server
var server = http.createServer((request, response)=>{
    console.log(request.url);
    if((request.url ==='/') || (request.url==='/index')){
        // response.writeHeader(200, {"Content-Type":"text/html"});
        //response.write("<h1>Welcome to NodeJS</h1>");   
        fs.readFile('./mysite1/index.html', null, function(error, data){
            if(error){
                response.writeHeader(404, "Page not found!", {"Content-Type":"text/html"});
                response.write("<h1>404 Page not found!</h1>");
            }
            else{
                response.writeHeader(200, {"Content-Type":"text/html"});
                response.write(data); 
            }
            response.end();
        });
    }
    else if(request.url ==='/about'){
        // response.writeHeader(200, {"Content-Type":"text/html"});
        // response.write("<h1>About Us</h1>");  
        // response.end(); 

        fs.readFile('./mysite1/about.html', null, function(error, data){
            if(error){
                response.writeHeader(404, "Page not found!", {"Content-Type":"text/html"});
                response.write("<h1>404 Page not found!</h1>");
            }
            else{
                response.writeHeader(200, {"Content-Type":"text/html"});
                response.write(data); 
            }
            response.end();
        });
    }
    else{
        response.writeHeader(404, "Page not found!", {"Content-Type":"text/html"});
        response.write("<h1>404 Page not found!</h1>");
        response.end();
    }
});
server.listen(8000, "127.0.0.1");