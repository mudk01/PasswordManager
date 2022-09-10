import express, { Application } from 'express';
import passwordRoutes from './routes/passwordRoutes'
import cors from 'cors'
import bodyParser from 'body-parser'
// import { auth } from './config/authConfig';

export const app: Application = express();
export const port = 3001;

const basePath = '/api'

app.use(bodyParser.json());
app.use(cors());
app.use(`${basePath}/password`, passwordRoutes);
// app.use(auth);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});