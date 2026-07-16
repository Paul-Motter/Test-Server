import express, { Application, Request, Response } from "express";
import userRoutes from "@/modules/users/routes/users.routes.js";
import dns from "node:dns";
// import getSupabaseClient from "@/services/supabase.js";
import * as PG from "@/services/pgDatabase.js";

// NODE DNS RESOLVER
dns.setDefaultResultOrder("ipv4first");

// DOTENV SETUP
import dotenv from "dotenv";
dotenv.config();

// SUPABASE SETUP
// const supaBaseClient = getSupabaseClient();
// console.log("Connected to supabase");

// POSTGRES SETUP
// lazy instance of pool.
PG.getPool();

// EXPRESS SETUP
const app: Application = express();
const PORT: number = 3000;

// allows reading body's in the form of json.
app.use(express.json());

// Base test endpoint
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.use("/users", userRoutes);

// start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
