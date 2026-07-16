import Express, { type Request, type Response } from "express";
import * as transactionQueries from "@/modules/transactions/queries/transactions.queries.js";
import type { InsertTransaction } from "@/modules/transactions/schema/transactions.schema.js";
import type { QueryResult } from "pg";
import { UUID } from "node:crypto";

const transactionRoutes = Express.Router();

transactionRoutes.get("/", async (req: Request, res: Response) => {
    let user_id: UUID = req.body["user_id"];
    let result;
    try {
        result = await transactionQueries.getUsersTransactions(user_id);
        res.status(200).send(result?.rows);
    } catch (err) {
        console.log(err);
        res.status(400).send();
    }
});

transactionRoutes.post("/", async (req: Request, res: Response) => {
    let txn: InsertTransaction = req.body;
    let result: QueryResult;
    try {
        result = await transactionQueries.addTransaction(txn);
        res.status(200).send(result.rows[0]);
    } catch (err) {
        console.log(err);
        res.status(400).send();
    }
});

export default transactionRoutes;
