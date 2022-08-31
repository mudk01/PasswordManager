import Router from 'express-promise-router';

const passwordRouter = Router();

passwordRouter.post('/addpassword', passwordController.addPassword);

passwordRouter.get('/showpassword', passwordController.showPassword);

passwordRouter.post('/decryptpassword', passwordController.decryptPassword);