// npm install serve-favicon
import express from 'express';
const app = express();
const port = process.env.PORT || '8000';
import web from './routes/routers.js';
import {join } from 'path';
import bodyParser from 'body-parser';

const options = {
    dotfiles:"deny",
    etag:false,
    extensions:['html', 'xhtml'],
    index:false,
    maxAge:'1d',
    redirect:false,
    setHeader:function(request, response, status){
        response.set('x-timestamp', Date.now());
    }
};

app.set("view engine", "ejs");
// Static Files
// app.use(express.static('public'));
app.use(express.static(join(process.cwd(), 'public'), options));

//Virtual
/*
app.use('/css', express.static(join(process.cwd(), 'public/css')));
app.use('/js', express.static(join(process.cwd(), 'public/js')));
app.use('/images', express.static(join(process.cwd(), 'public/images')));
*/

// Post Method
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/', web);
// app.use('/api/', web);

app.listen(port, ()=>{
    console.log(`Listening http://127.0.0.1:${port}`);
});