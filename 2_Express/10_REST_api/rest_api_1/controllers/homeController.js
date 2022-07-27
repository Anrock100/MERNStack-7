import {join} from 'path'

const indexController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    response.status(200).send("Welcome to RestAPI-V1.");
}

const homeController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    response.status(200).send({persons:"All Persons."});
}
const singleController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    var {id} = request.params;
    response.status(200).send({person:`Individual Person-${id}`});
}

const newController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    response.status(201).send({message:"Add new person."});
}

const putController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    response.status(200).send({message:"Update person."});
}

const patchController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    response.status(200).send({message:"Update person partially."});
}

const delController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    response.status(200).send("Delete person.");
}

export{ indexController, homeController, singleController, newController, putController, patchController, delController}