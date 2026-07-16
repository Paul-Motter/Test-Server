import type { Database, Tables } from "@/services/supabaseTypes.js";

// Get Table Schema
type transactionsTable = Database["public"]["Tables"]["transactions"];

// Get uses of the schema
type UpdateTransaction = transactionsTable["Update"];
type InsertTransaction = transactionsTable["Insert"];
type Transaction = transactionsTable["Row"];

export type { UpdateTransaction, InsertTransaction, Transaction };
