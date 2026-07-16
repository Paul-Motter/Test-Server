import Express, { type Request, type Response } from "express";
import * as UserQueries from "@/modules/users/queries/users.queries.js";
import type { InsertUser } from "@/modules/users/schema/users.schema.js";
import type { QueryResult } from "pg";

const userRoutes = Express.Router();

userRoutes.get("/", async (req: Request, res: Response) => {
    let result;
    try {
        result = await UserQueries.getUsers();
        res.status(200).send(result?.rows);
    } catch (err) {
        console.log(err);
        res.status(400).send();
    }
});

userRoutes.post("/", async (req: Request, res: Response) => {
    let user: InsertUser = req.body;
    let result: QueryResult;
    try {
        result = await UserQueries.addUser(user);
        res.status(200).send(result.rows[0]);
    } catch (err) {
        console.log(err);
        res.status(400).send();
    }
});

export default userRoutes;
