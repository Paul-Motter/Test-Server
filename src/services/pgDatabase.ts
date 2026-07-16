import { Pool } from "pg";

let pool: Pool | undefined;

export function getPool(): Pool {
    if (!pool) {
        pool = new Pool({
            connectionString: process.env.PG_CONNECTION_STRING,
            ssl: {
                rejectUnauthorized: false,
            },
        });
    }
    return pool;
}
