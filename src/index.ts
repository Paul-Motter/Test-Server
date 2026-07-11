import express, { Application, Request, Response } from "express";
import userRoutes from "@/modules/users/routes/user.routes.js";

const app: Application = express();
const PORT: number = 3000;

// Base test endpoint
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.use("/user", userRoutes);

// start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
