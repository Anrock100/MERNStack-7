import {join} from 'path'
import {Person} from '../models/person.js';

const defaultController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    // response.status(200).send("All Persons");    
    response.status(200).send({message:"Welcome to RestAPI-V3"});
}

const homeController = async (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    // response.status(200).send("All Persons");    
    const persons = await Person.find();
    response.status(200).send(persons);
}

const singleController = async (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    // response.status(200).send("Individual Person.");
    const {pid} = request.params;
    const person = await Person.findOne({"pid": pid});
    if(!person){
        response.status(400).send({'status':false});
    }
    else{
        response.status(400).send({'status':true, 'data':person});
    }
}

const newController = (request, response)=>{
    var {pid, name, address} = request.body;
    var person = new Person({pid, name, address});
    person.save()
    .then(data=>{
        response.status(400).send({'status':true, 'data':data});
    })
    .catch(err=>{
        response.status(500).send({status:false});
    });    
}

const putController = async (request, response)=>{
    var {pid} = request.params;
    var {name, address} = request.body;
    var tmpPerson = {pid, name, address}
    const person = await Person.findOne({"pid": pid});
    if(!person){
        response.status(400).send({'status':false});
    }
    else{
        person.name = name;
        person.address=address;
        await person.save()
        .then(data =>{
            response.status(400).send({'status':true, 'data':data});
        })
        .catch(err=>{
            response.status(500).send({status:false});
        });         
    }
}

const delController = async (request, response)=>{
    var {pid} = request.params;
    await Person.deleteOne({ pid: pid })
    .then(data =>{
        response.status(400).send({'status':true, 'data':data});
    })
    .catch(err=>{
        response.status(500).send({status:false});
    });
}

export{ defaultController, homeController, singleController, newController, putController, delController }