import {join} from 'path'

var persons =[
    {pid:1, name:'Ramu Rai', address:'KTm'},
];

const indexController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    response.status(200).send({message:"Welcome to RestAPI_1_v2."});
}

const homeController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    response.status(200).send({status:true,  data:persons});
}
const singleController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    var {pid} = request.params;
    console.log(pid);
    //looping on persons
    var tmpPerson=null;
    persons.forEach((person, index, array)=>{
        if(person.pid==pid){
            tmpPerson=person;
        }
    });
    if(tmpPerson){
        response.status(200).send({status:true, data:tmpPerson});
    }
    else{
        response.status(200).send({status:false});
    }
}

const newController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    //receive all the values from client
    var {pid, name, address } = request.body;
    let tmpPerson = {pid, name, address }
    persons.push(tmpPerson);
    response.status(201).send({ status:true, data:tmpPerson});
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