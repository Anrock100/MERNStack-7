// Required Libs
//npm init -y
//npm i express
//npm i ejs

// Import libs
const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get('/', function(request, response){
    response.render("index");
});
app.get('/person', function(request, response){
    var objPerson = {id:1, name:'Aayush Sharma', address:'KTM'};
    response.render("person", {objPerson});
});
app.get('/persons', function(request, response){
    var objPersons =[
        {id:1, name:'Aayush Sharma', address:'KTM'},
        {id:2, name:'Ajay Rai', address:'KTM'},
        {id:3, name:'AA Shrestha', address:'LAT'},
        {id:4, name:'BB Thapa', address:'KTM'},
        {id:5, name:'CC Raj', address:'BHK'}
    ];
    response.render("persons", {objPersons});
});
app.get('/countries', ()=>{
    //HW of the day
    //read countries from CSV file
    //send to ejs file
    //view all countries with paging
    //Add new, edit, and delete country (csv file)
});
app.listen(8000);