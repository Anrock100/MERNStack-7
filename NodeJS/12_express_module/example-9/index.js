//import libs
const express = require('express');
const app = express();
var port = '8000'; //default is 80

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.render("index");
});
app.get('/getValues1', function(request, response){
    var id = request.query.id;
    var name = request.query.name;
    var address = request.query.address;
    response.send({id:id, name:name, address:address});
});
app.get('/getValues2/:id/:name/:address', function(request, response){
    response.send(request.params);
});
app.get('/getValues3', function(request, response){
    response.send({id:request.query.txtid, name:request.query.txtname, address:request.query.txtaddress});
});
app.post('/getValues4', function(request, response){
    //receive value from form.
    response.send(request.body);
});
app.listen(port);