import {join} from 'path'

const indexController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    response.status(200).send({message:"Welcome to RestAPI-V1."});
}

const homeController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    response.status(200).send({message:"All Persons."});
}
const singleController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    var {id} = request.params;
    response.status(200).send({message:`Individual Person-${id}`});
}

const newController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    //receive all the values from client
    var {id, name, address } = request.body;
    response.status(201).send({message: `Add new person. ${id} ${name} ${address}`});
}

const putController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    //receive all the values from client
    var {id} = request.params;
    var {name, address } = request.body;
    response.status(201).send({message: `Update person. ${id} ${name} ${address}`});
}

const patchController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    var {id} = request.params;
    var {name, address } = request.body;
    if((name!=undefined) && (address!=undefined))
        response.status(201).send({message: `Update person. ${id} ${name} ${address}`});
    else if((name!=undefined) && (address==undefined))
        response.status(201).send({message: `Update person. ${id} ${name}`});
    else if((name==undefined) && (address!=undefined))
        response.status(201).send({message: `Update person. ${id} ${address}`});
}

const delController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    response.status(200).send({message:"Delete person."});
}

export{ indexController, homeController, singleController, newController, putController, patchController, delController}