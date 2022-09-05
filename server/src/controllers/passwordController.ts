import {Request, Response, NextFunction, query} from 'express';
import { passwordService } from '../services';
import { encrypt, decrypt } from '../encrypt/encryption'


export const addPassword = async (req: Request, res: Response, next: NextFunction) => {
    const { userId, userName, password, service } = req.body;
    const hashedPassword = encrypt(password);
    const data = await passwordService.addPassword(userId, userName, hashedPassword.password, service, hashedPassword.iv);
    res.status(200).send(data);
};

export const getPassword = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.params;
    console.log(userId);
    const data = await passwordService.getPassword(userId);
    res.status(200).send(data);
}


  