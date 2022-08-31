import { v4 as uuidv4 } from 'uuid';

export const addPassword = async (userId: number, userName: string, password: string, service: string, iv: number) => {
    const result = await pool.query(
        `INSERT INTO passwords (id, username, password, service, iv) VALUES ($1, $2, $3) RETURNING *`,
        [userId, userName, password, service, iv]
    );
    return result;
}