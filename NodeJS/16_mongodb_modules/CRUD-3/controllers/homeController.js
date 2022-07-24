import { join } from 'path'
import {PersonModel} from '../databases/mongoose_client.js';

const homeController = async (request, response) => {
    var persons = await PersonModel.find();
    // console.log(persons);
    console.log("all persons");
    // for(var i = 0; i<persons.length; i++){
    //     console.log(persons[i]);
    // }
    persons.forEach((element, index, array) => { 
        console.log(element.name);
    })
    // response.render(join(process.cwd(), 'views', 'index', {allperson:persons}));
    response.render('index', {persons:persons});
}

const newController = (request, response) => {
    response.render(join(process.cwd(), 'views', 'new'));
}

const saveController = async (request, response) => {
    try {
        var { txtID, txtName, txtAddress } = request.query;
        var person = new PersonModel({ id: txtID, name: txtName, address: txtAddress });
        var result = await person.save();
        response.status(201);
        response.send(`Save record successfully ${result}`);
    }
    catch (err) {
        response.status(400);
        response.send(`Error : ${err}`);
    }
}

const pageNotFound = (request, response) => {
    response.send(200, "404 Page not found");
}

export { homeController, newController, saveController, pageNotFound }