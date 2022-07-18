import express from 'express';
const app = express();
const port = process.env.PORT || '8000';
import web from './routes/web.js';
import {join} from 'path';
import bodyParser from 'body-parser';

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(join(process.cwd(), 'public')));

app.use('/', web);

app.listen(port, ()=>{
	console.log(`Listening at http://127.0.0.1:${port}`);
});