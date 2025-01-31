import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http"; 
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL! );

const db = drizzle(sql, { schema });

const main = async () => {
try {
console.log("Seeding dictionary");

await db.delete(schema.IgboDictionary);

await db.insert(schema.IgboDictionary).values([
        { id: 1, word: "greed", meaning: "akpiri", synonyms:"", homonyms:"", audio: "1.mp3" },
]);

console.log ("Seeding dictionary finished");
} catch (error) {
console.error(error);
throw new Error("Failed to seed the dictionary database");
}
};

main();