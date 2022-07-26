import { join } from 'path'
// import {PersonModel} from '../databases/mongoose_client.js';

const homeController = async (request, response) => {    
    response.render(join(process.cwd(), 'views', 'index'));
}

const createController = (request, response) => {
    response.cookie('tmpUser', 'Raj Rai'); //name:value create new cookie
    response.send('cookie create successfully');
}

const displayController = (request, response) => {
    response.send(request.cookies);//return cookies //blank object {}
}

const pageNotFound = (request, response) => {
    response.send(200, "404 Page not found");
}

export { homeController, createController, displayController, pageNotFound };