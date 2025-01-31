import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http"; 
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon (process.env.DATABASE_URL! );

const db = drizzle(sql, { schema });

const main = async () => {
try {
console.log("resetting database");

await db.delete(schema.yrnumbers);
await db.delete(schema.numbers);
await db.delete(schema.ignumbers);

await db.delete(schema.genders);
await db.delete(schema.iggenders);
await db.delete(schema.yrgenders);

await db.delete(schema.slangs);
await db.delete(schema.yrslangs);
await db.delete(schema.igslangs);

await db.delete(schema.commonExp);
await db.delete(schema.yrcommonExp);
await db.delete(schema.igcommonExp);

await db.delete(schema.pronouns);
await db.delete(schema.yrpronouns);
await db.delete(schema.igpronouns);

console. log ("Resetting finished");
} catch (error) {
console.error(error);
throw new Error("Failed to reset the database");
}
};

main();