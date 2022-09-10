import pg from 'pg';
import passwordDb from '../config/dbConfig';

const { Pool, types } = pg;

const passwordDbConfig = passwordDb;
const passwordDbPool = new Pool(passwordDbConfig);

passwordDbPool.on('connect', () => {
  console.info('Connected to database!!');
});
passwordDbPool.on('acquire', () => {
  console.info('Client was acquired from the database!!');
});
passwordDbPool.on('remove', () => {
  console.info('Client was removed from the pool!!');
});
passwordDbPool.on('error', () => {
  console.info('Pool error!!');
});

export default passwordDbPool;