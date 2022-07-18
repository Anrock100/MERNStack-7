import { insertQuery } from './mydb.js';

var homeController = (request, response) => {
    response.render('index');
};

var formController = (request, response) => {
    //receive all values from web form
    //call inser record function of mydb module
    var name = request.body.name; //from web form
    var email = request.body.email; //from web form
    var sub = request.body.subject; //from web form
    var mess = request.body.message; //from web form

    let values = [name, email, sub, mess];
    let res = insertQuery(values);

    if (res) {
        response.send("Query save successfully");
    }
    else {
        response.send("Error to save query");
    }
}
export { homeController, formController };