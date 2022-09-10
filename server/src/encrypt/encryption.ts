import dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config();
const secret = process.env.SECRET_KEY!;

const encrypt = (password: any) => {
    const iv = Buffer.from(crypto.randomBytes(16));
    const cipher = crypto.createCipheriv('aes-256-ctr', Buffer.from(secret), iv);
    const encryptedPassword = Buffer.concat([cipher.update(password), cipher.final()])

    return {iv: iv.toString('hex'), password: encryptedPassword.toString('hex')};
}

const decrypt = (encryptedPassword: any) => {
    const decipher = crypto.createDecipheriv('aes-256-ctr', Buffer.from(secret), Buffer.from(encryptedPassword.iv, 'hex'));
    const decryptedPassword = Buffer.concat([decipher.update(Buffer.from(encryptedPassword.password, 'hex')), decipher.final()]);

    return decryptedPassword.toString();
}

export { encrypt, decrypt };