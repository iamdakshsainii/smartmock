import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
<<<<<<< HEAD
export const db = drizzle(sql,{schema});
=======
export const db = drizzle(sql,{schema});
>>>>>>> e0dc322c62330917ba1f03f5464ccd9992454974
