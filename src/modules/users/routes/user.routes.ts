import Express, { type Request, type Response } from "express";
import { helloWorld } from "@/modules/users/controllers/user.controller.js";
const userRoutes = Express.Router();

userRoutes.get("/", (req: Request, res: Response) => {
    res.send(helloWorld()).status(200);
});

export default userRoutes;
