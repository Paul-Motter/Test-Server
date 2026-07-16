import * as PG from "@/services/pgDatabase.js";
import type { InsertUser } from "../schema/users.schema.js";
import { QueryResult } from "pg";

export function addUser(user: InsertUser): Promise<QueryResult<any>> {
    let keys = Object.keys(user);
    let values = Object.values(user);
    let places = values.map((_, i) => `$${i + 1}`);

    return PG.getPool().query(
        `INSERT INTO users (${keys.join(",")}) VALUES (${places.join(",")}) RETURNING *`,
        values,
    );
}

export function getUsers(): Promise<QueryResult<any>> {
    return PG.getPool().query("SELECT * FROM users");
}
