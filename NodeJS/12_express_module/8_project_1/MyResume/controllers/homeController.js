import {insertQuery} from './mydb.js';

var homeController=(request, response)=>{
    response.render('index');
};

var formController=(request, response)=>{
    //receive all values from web form
    //call inser record function of mydb module
    var id=2; //auto increment
    var name = ''; //from web form
    var email = ''; //from web form
    var sub = ''; //from web form
    var mess = ''; //from web form
    let values = [id, name, email, sub, mess];
    insertQuery(values);
    response.send("Query save successfully");
}
export {homeController, formController};