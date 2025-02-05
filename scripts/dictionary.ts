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
                { id: 1, word: "greed", both: "Akpiri: greed", meaning: "akpiri", synonyms: null, homonyms: null, audio: "akpi.mp3" },
                { id: 2, word: "bring", both: "Weta: bring", meaning: "weta", synonyms: null, homonyms: null, audio: "weta.mp3" },
                { id: 3, word: "find", both: "Chota: find", meaning: "chota", synonyms: null, homonyms: null, audio: "chot.mp3" },
                { id: 4, word: "wound", both: "Onya: wound", meaning: "onya", synonyms: null, homonyms: null, audio: "onya.mp3" },
                { id: 5, word: "suffer", both: "Afufu: suffer", meaning: "afufu", synonyms: null, homonyms: null, audio: "afuf.mp3" },
                { id: 6, word: "word", both: "Mpuruokwu: word", meaning: "mpuruokwu", synonyms: null, homonyms: null, audio: "mpur.mp3" },
                { id: 7, word: "university", both: "Mahadum: university", meaning: "mahadum", synonyms: null, homonyms: null, audio: "maha.mp3" },
                { id: 8, word: "hero", both: "Odogwu: hero", meaning: "odogwu", synonyms: null, homonyms: null, audio: "odog.mp3" },
                { id: 9, word: "heroine", both: "Odogwu nwanyi: heroine", meaning: "odogwu nwanyi", synonyms: null, homonyms: null, audio: "odog2.mp3" },
                { id: 10, word: "blood", both: "Obara: blood", meaning: "obara", synonyms: null, homonyms: null, audio: "obar.mp3" },
                { id: 11, word: "write", both: "Dee: write", meaning: "dee", synonyms: null, homonyms: null, audio: "dee.mp3" },
                { id: 12, word: "weep", both: "Bee: weep", meaning: "bee", synonyms: null, homonyms: null, audio: "bee.mp3" },
                { id: 13, word: "weeping", both: "Bee akwa: weeping", meaning: "bee akwa", synonyms: null, homonyms: null, audio: "bee2.mp3" },
                { id: 14, word: "weak", both: "Da amba: weak", meaning: "da amba", synonyms: null, homonyms: null, audio: "daam.mp3" },
                { id: 15, word: "knife", both: "Mma: knife", meaning: "mma", synonyms: null, homonyms: null, audio: "mma.mp3" },
                { id: 16, word: "wash clothes", both: "Suo akwa: wash clothes", meaning: "suo akwa", synonyms: null, homonyms: null, audio: "suoa.mp3" },
                { id: 17, word: "wake up", both: "Teta: wake up", meaning: "teta", synonyms: null, homonyms: null, audio: "teta.mp3" },
                { id: 18, word: "wait for", both: "Cere: wait for", meaning: "cere", synonyms: null, homonyms: null, audio: "cere.mp3" },
                { id: 19, word: "vomit", both: "Gbuo agboo: vomit", meaning: "gbuo agboo", synonyms: null, homonyms: null, audio: "gbuo.mp3" },
                { id: 20, word: "visitor", both: "Obia: visitor", meaning: "obia", synonyms: null, homonyms: null, audio: "obia.mp3" },
                { id: 21, word: "urine", both: "Mma mili: urine", meaning: "mma mili", synonyms: null, homonyms: null, audio: "mma2.mp3" },
                { id: 22, word: "urinate", both: "Nyuo mmamiri: urinate", meaning: "nyuo mmamiri", synonyms: null, homonyms: null, audio: "nyuo.mp3" },
                { id: 23, word: "usefulness", both: "Uru: usefulness", meaning: "uru", synonyms: null, homonyms: null, audio: "uru.mp3" },
                { id: 24, word: "underneath/underside", both: "Okpuru: underneath/underside", meaning: "okpuru", synonyms: null, homonyms: null, audio: "okpu.mp3" },
                { id: 25, word: "turn off", both: "Gbanyuo: turn off", meaning: "gbanyuo", synonyms: null, homonyms: null, audio: "gban.mp3" },
                { id: 26, word: "truth", both: "Ezi okwu: truth", meaning: "ezi okwu", synonyms: null, homonyms: null, audio: "ezio.mp3" },
                { id: 27, word: "thief", both: "Onye ohi: thief", meaning: "onye ohi", synonyms: null, homonyms: null, audio: "onye.mp3" },
                { id: 28, word: "tear", both: "Doka: tear", meaning: "doka", synonyms: null, homonyms: null, audio: "doka.mp3" },
                { id: 29, word: "congratulate", both: "Naa aka: congratulate", meaning: "naa aka", synonyms: null, homonyms: null, audio: "naaa.mp3" },
                { id: 30, word: "complete", both: "Zuo oke: complete", meaning: "zuo oke", synonyms: null, homonyms: null, audio: "zuoo.mp3" },
                { id: 31, word: "conceive", both: "Tuo ime: conceive", meaning: "tuo ime", synonyms: null, homonyms: null, audio: "tuoi.mp3" },
                { id: 32, word: "climb", both: "Ria: climb", meaning: "ria", synonyms: null, homonyms: null, audio: "ria.mp3" },
                { id: 33, word: "beautiful", both: "Omalicha, Oyoyo, Oma, Maa mma: beautiful", meaning: "omalicha, oyoyo, oma, maa mma", synonyms: null, homonyms: null, audio: "omal.mp3" },
                { id: 34, word: "bag", both: "Akpa: bag", meaning: "akpa", synonyms: null, homonyms: null, audio: "akpa.mp3" },
                { id: 35, word: "back", both: "Azu: back", meaning: "azu", synonyms: null, homonyms: null, audio: "azu.mp3" },
                { id: 36, word: "affection", both: "Ifunanya: affection", meaning: "ifunanya", synonyms: null, homonyms: null, audio: "ifun.mp3" },
                { id: 37, word: "afraid", both: "Tuo egwu: afraid", meaning: "tuo egwu", synonyms: null, homonyms: null, audio: "tuoe.mp3" },
                { id: 38, word: "advice", both: "Ndumodu: advice", meaning: "ndumodu", synonyms: null, homonyms: null, audio: "ndum.mp3" },
                { id: 39, word: "admit", both: "Kwere: admit", meaning: "kwere", synonyms: null, homonyms: null, audio: "kwer.mp3" },
                { id: 40, word: "above", both: "N’elu: above", meaning: "n’elu", synonyms: null, homonyms: null, audio: "nelu.mp3" }
              
]);

console.log ("Seeding dictionary finished");
} catch (error) {
console.error(error);
throw new Error("Failed to seed the dictionary database");
}
};

main();