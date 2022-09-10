import { v4 as uuidv4 } from 'uuid';
import passwordDbPool from '../db/passwordDb';

export const addPassword = async (userId: string, userName: string, password: string, service: string, iv: string) => {
    const result = await passwordDbPool.query(
        `INSERT INTO public.passwords (id, user_name, password, service, iv) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [userId, userName, password, service, iv]
    );
    return result;
}

export const getPassword = async (userId: string) => {
    const result = await passwordDbPool.query(
      `SELECT * FROM public.passwords WHERE id = $1`,
      [userId]
    );
    return result.rows[0];
}
  
export const getDecryptedPassword = async (userId: string, service: string) => {
  const result = await passwordDbPool.query(
    `SELECT password, iv FROM public.passwords WHERE id = $1 AND service = $2`,
    [userId, service]
  );
  return result.rows[0];
}