import Router from 'express-promise-router';
import {passwordController} from '../controllers'

const passwordRouter = Router();

passwordRouter.post('/addpassword', passwordController.addPassword);

passwordRouter.get('/getpassword/:userId', passwordController.getPassword);

// passwordRouter.post('/decryptpassword', passwordController.decryptPassword);

export default passwordRouter;