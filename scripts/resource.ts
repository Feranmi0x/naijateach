import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http"; 
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL! );

const db = drizzle(sql, { schema });

const main = async () => {
try {
console.log("Seeding database");

await db.delete(schema.yrnumbers);

await db.insert(schema.yrnumbers).values([
        { id: 1, english: "One", yoruba: "Ọkan", audioPath: "1.mp3" },
        { id: 2, english: "Two", yoruba: "Ẹjì", audioPath: "2.mp3" },
        { id: 3, english: "Three", yoruba: "Ẹta", audioPath: "3.mp3" },
        { id: 4, english: "Four", yoruba: "Ẹrin", audioPath: "4.mp3" },
        { id: 5, english: "Five", yoruba: "Arùn", audioPath: "5.mp3" },
        { id: 6, english: "Six", yoruba: "Ẹfà", audioPath: "6.mp3" },
        { id: 7, english: "Seven", yoruba: "Ẹje", audioPath: "7.mp3" },
        { id: 8, english: "Eight", yoruba: "Ẹjọ", audioPath: "8.mp3" },
        { id: 9, english: "Nine", yoruba: "Ẹsàn", audioPath: "9.mp3" },
        { id: 10, english: "Ten", yoruba: "Ẹwà", audioPath: "10.mp3" },
        { id: 11, english: "Eleven", yoruba: "Ọkanlá", audioPath: "11.mp3" },
        { id: 12, english: "Twelve", yoruba: "Ẹjìlá", audioPath: "12.mp3" },
        { id: 13, english: "Thirteen", yoruba: "Ẹtálá", audioPath: "13.mp3" },
        { id: 14, english: "Fourteen", yoruba: "Ẹrìnlá", audioPath: "14.mp3" },
        { id: 15, english: "Fifteen", yoruba: "Ẹẹdógún", audioPath: "15.mp3" },
        { id: 16, english: "Sixteen", yoruba: "Ẹrìndínlógún", audioPath: "16.mp3" },
        { id: 17, english: "Seventeen", yoruba: "Ẹtádínlógún", audioPath: "17.mp3" },
        { id: 18, english: "Eighteen", yoruba: "Ẹjìdínlógún", audioPath: "18.mp3" },
        { id: 19, english: "Nineteen", yoruba: "Ọkandínlógún", audioPath: "19.mp3" },
        { id: 20, english: "Twenty", yoruba: "Ọgụ̀n", audioPath: "20.mp3" },
        { id: 21, english: "Twenty-One", yoruba: "Ọkanlelogun", audioPath: "21.mp3" },
        { id: 22, english: "Twenty-Two", yoruba: "Ẹjìlelogun", audioPath: "22.mp3" },
        { id: 23, english: "Twenty-Three", yoruba: "Ẹtálelogun", audioPath: "23.mp3" },
        { id: 24, english: "Twenty-Four", yoruba: "Ẹrìnlelogun", audioPath: "24.mp3" },
        { id: 25, english: "Twenty-Five", yoruba: "Ẹẹdógbọn", audioPath: "25.mp3" },
        { id: 26, english: "Twenty-Six", yoruba: "Ẹrìndínlọgbọn", audioPath: "26.mp3" },
        { id: 27, english: "Twenty-Seven", yoruba: "Ẹtádínlọgbọn", audioPath: "27.mp3" },
        { id: 28, english: "Twenty-Eight", yoruba: "Ẹjìdínlọgbọn", audioPath: "28.mp3" },
        { id: 29, english: "Twenty-Nine", yoruba: "Ọkandínlọgbọn", audioPath: "29.mp3" },
        { id: 30, english: "Thirty", yoruba: "Ọgbọn", audioPath: "30.mp3" },
        { id: 31, english: "Thirty-One", yoruba: "Ọkanlelọgbọn", audioPath: "31.mp3" },
        { id: 32, english: "Thirty-Two", yoruba: "Ẹjìlelọgbọn", audioPath: "32.mp3" },
        { id: 33, english: "Thirty-Three", yoruba: "Ẹtálelọgbọn", audioPath: "33.mp3" },
        { id: 34, english: "Thirty-Four", yoruba: "Ẹrìnlelọgbọn", audioPath: "34.mp3" },
        { id: 35, english: "Thirty-Five", yoruba: "aarundilogoji", audioPath: "35.mp3" },
]);

console.log ("Seeding finished");
} catch (error) {
console.error(error);
throw new Error("Failed to seed the database");
}
};

main();