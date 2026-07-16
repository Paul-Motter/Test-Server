import type { Database, Tables } from "@/services/supabaseTypes.js";

// Get Table Schema
type UserTable = Database["public"]["Tables"]["users"];

// Get uses of the schema
type UpdateUser = UserTable["Update"];
type InsertUser = UserTable["Insert"];
type User = UserTable["Row"];

export type { UpdateUser, InsertUser, User };
