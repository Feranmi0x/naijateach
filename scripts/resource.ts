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
        { id: 1, english: "1", yoruba: "Ọkan", audioPath: "1.mp3" },
        { id: 2, english: "2", yoruba: "Ẹjì", audioPath: "2.mp3" },
        { id: 3, english: "3", yoruba: "Ẹta", audioPath: "3.mp3" },
        { id: 4, english: "4", yoruba: "Ẹrin", audioPath: "4.mp3" },
        { id: 5, english: "5", yoruba: "Arùn", audioPath: "5.mp3" },
        { id: 6, english: "6", yoruba: "Ẹfà", audioPath: "6.mp3" },
        { id: 7, english: "7", yoruba: "Ẹje", audioPath: "7.mp3" },
        { id: 8, english: "8", yoruba: "Ẹjọ", audioPath: "8.mp3" },
        { id: 9, english: "9", yoruba: "Ẹsàn", audioPath: "9.mp3" },
        { id: 10, english: "10", yoruba: "Ẹwà", audioPath: "10.mp3" },
        { id: 11, english: "11", yoruba: "Ọkanlá", audioPath: "11.mp3" },
        { id: 12, english: "12", yoruba: "Ẹjìlá", audioPath: "12.mp3" },
        { id: 13, english: "13", yoruba: "Ẹtálá", audioPath: "13.mp3" },
        { id: 14, english: "14", yoruba: "Ẹrìnlá", audioPath: "14.mp3" },
        { id: 15, english: "15", yoruba: "Ẹẹdógún", audioPath: "15.mp3" },
        { id: 16, english: "16", yoruba: "Ẹrìndínlógún", audioPath: "16.mp3" },
        { id: 17, english: "17", yoruba: "Ẹtádínlógún", audioPath: "17.mp3" },
        { id: 18, english: "18", yoruba: "Ẹjìdínlógún", audioPath: "18.mp3" },
        { id: 19, english: "19", yoruba: "Ọkandínlógún", audioPath: "19.mp3" },
        { id: 20, english: "20", yoruba: "Ọgụ̀n", audioPath: "20.mp3" },
        { id: 21, english: "21", yoruba: "Ọkanlelogun", audioPath: "21.mp3" },
        { id: 22, english: "22", yoruba: "Ẹjìlelogun", audioPath: "22.mp3" },
        { id: 23, english: "23", yoruba: "Ẹtálelogun", audioPath: "23.mp3" },
        { id: 24, english: "24", yoruba: "Ẹrìnlelogun", audioPath: "24.mp3" },
        { id: 25, english: "25", yoruba: "Ẹẹdógbọn", audioPath: "25.mp3" },
        { id: 26, english: "26", yoruba: "Ẹrìndínlọgbọn", audioPath: "26.mp3" },
        { id: 27, english: "27", yoruba: "Ẹtádínlọgbọn", audioPath: "27.mp3" },
        { id: 28, english: "28", yoruba: "Ẹjìdínlọgbọn", audioPath: "28.mp3" },
        { id: 29, english: "29", yoruba: "Ọkandínlọgbọn", audioPath: "29.mp3" },
        { id: 30, english: "30", yoruba: "Ọgbọn", audioPath: "30.mp3" },
        { id: 31, english: "31", yoruba: "Ọkanlelọgbọn", audioPath: "31.mp3" },
        { id: 32, english: "32", yoruba: "Ẹjìlelọgbọn", audioPath: "32.mp3" },
        { id: 33, english: "33", yoruba: "Ẹtálelọgbọn", audioPath: "33.mp3" },
        { id: 34, english: "34", yoruba: "Ẹrìnlelọgbọn", audioPath: "34.mp3" },
        { id: 35, english: "35", yoruba: "aarundilogoji", audioPath: "35.mp3" },
]);

console.log ("Seeding finished");
} catch (error) {
console.error(error);
throw new Error("Failed to seed the database");
}
};

main();