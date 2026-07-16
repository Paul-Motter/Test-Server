import * as PG from "@/services/pgDatabase.js";
import type { InsertTransaction } from "../schema/transactions.schema.js";
import { QueryResult } from "pg";
import { UUID } from "node:crypto";

export function addTransaction(
    txn: InsertTransaction,
): Promise<QueryResult<any>> {
    let keys = Object.keys(txn);
    let values = Object.values(txn);
    let places = values.map((_, i) => `$${i + 1}`);

    return PG.getPool().query(
        `INSERT INTO transactions (${keys.join(",")}) VALUES (${places.join(",")}) RETURNING *`,
        values,
    );
}

export function getUsersTransactions(user_id: UUID): Promise<QueryResult<any>> {
    return PG.getPool().query("SELECT * FROM transactions");
}
