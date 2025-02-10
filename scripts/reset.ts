import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http"; 
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon (process.env.DATABASE_URL! );

const db = drizzle(sql, { schema });

const main = async () => {
try {
console.log("resetting database");

await db.delete(schema.IgboDictionary);
await db.delete(schema.YorubaDictionary);
await db.delete(schema.HausaDictionary);

console. log ("Resetting finished");
} catch (error) {
console.error(error);
throw new Error("Failed to reset the database");
}
};

main();