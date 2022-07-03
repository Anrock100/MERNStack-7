var http = require("http");

var server = http.createServer((request, response)=>{
    records =[
        {id:1, name:'Raj Tahpa', addrsss:'KTM'},
        {id:2, name:'Kiran Rana', addrsss:'Lat'},
        {id:3, name:'Bibek Rai', addrsss:'Bhk'}
    ];
    //records -> file, database (array processing -> array methods)
    response.writeHead(200, {"Content-Type":"text/json"});
    response.write(JSON.stringify(records));
    response.end()
});
server.listen(8000);

/*
Status codes range
    1xx : communicational
    2xx : success
    3xx : redirectional
    4xx : client error
    5xx : server error
*/