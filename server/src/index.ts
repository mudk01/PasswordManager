import express, { Application } from 'express';

export const app: Application = express();
export const port = 3001;


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});


