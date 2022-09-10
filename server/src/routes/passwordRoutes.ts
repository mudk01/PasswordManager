import Router from 'express-promise-router';
import { passwordController } from '../controllers';

const passwordRouter = Router();

passwordRouter.post('/addpassword', passwordController.addPassword);

passwordRouter.get('/getpassword/:userId', passwordController.getPassword);

passwordRouter.get('/decryptpassword', passwordController.sendDecryptedPassword);

export default passwordRouter;