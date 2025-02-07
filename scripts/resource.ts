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

await db.delete(schema.body);
await db.delete(schema.yrbody);
await db.delete(schema.igbody);

await db.delete(schema.relatives);
await db.delete(schema.yrrelatives);
await db.delete(schema.igrelatives);

await db.delete(schema.pronouns);
await db.delete(schema.yrpronouns);
await db.delete(schema.igpronouns);



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

await db.insert(schema.numbers).values([
        { id: 1, english: "1", hausa: "Daya", audioPath: "1.mp3" },
        { id: 2, english: "2", hausa: "Biyu", audioPath: "2.mp3" },
        { id: 3, english: "3", hausa: "Uku", audioPath: "3.mp3" },
        { id: 4, english: "4", hausa: "Hudu", audioPath: "4.mp3" },
        { id: 5, english: "5", hausa: "Biyar", audioPath: "5.mp3" },
        { id: 6, english: "6", hausa: "Shida", audioPath: "6.mp3" },
        { id: 7, english: "7", hausa: "Bakwai", audioPath: "7.mp3" },
        { id: 8, english: "8", hausa: "Takwas", audioPath: "8.mp3" },
        { id: 9, english: "9", hausa: "Tara", audioPath: "9.mp3" },
        { id: 10, english: "10", hausa: "Goma", audioPath: "10.mp3" },
        { id: 11, english: "11", hausa: "Goma Sha Daya", audioPath: "11.mp3" },
        { id: 12, english: "12", hausa: "Goma Sha Biyu", audioPath: "12.mp3" },
        { id: 13, english: "13", hausa: "Goma Sha Uku", audioPath: "13.mp3" },
        { id: 14, english: "14", hausa: "Goma Sha Hudu", audioPath: "14.mp3" },
        { id: 15, english: "15", hausa: "Goma Sha Biyar", audioPath: "15.mp3" },
        { id: 16, english: "16", hausa: "Goma Sha Shida", audioPath: "16.mp3" },
        { id: 17, english: "17", hausa: "Goma Sha Bakwai", audioPath: "17.mp3" },
        { id: 18, english: "18", hausa: "Goma Sha Takwas", audioPath: "18.mp3" },
        { id: 19, english: "19", hausa: "Goma Sha Tara", audioPath: "19.mp3" },
        { id: 20, english: "20", hausa: "Ashirin", audioPath: "20.mp3" },
        { id: 21, english: "21", hausa: "Ashirin Da Daya", audioPath: "21.mp3" },
        { id: 22, english: "22", hausa: "Ashirin Da Biyu", audioPath: "22.mp3" },
        { id: 23, english: "23", hausa: "Ashirin Da Uku", audioPath: "23.mp3" },
        { id: 24, english: "24", hausa: "Ashirin Da Hudu", audioPath: "24.mp3" },
        { id: 25, english: "25", hausa: "Ashirin Da Biyar", audioPath: "25.mp3" },
        { id: 26, english: "26", hausa: "Ashirin Da Shida", audioPath: "26.mp3" },
        { id: 27, english: "27", hausa: "Ashirin Da Bakwai", audioPath: "27.mp3" },
        { id: 28, english: "28", hausa: "Ashirin Da Takwas", audioPath: "28.mp3" },
        { id: 29, english: "29", hausa: "Ashirin Da Tara", audioPath: "29.mp3" },
        { id: 30, english: "30", hausa: "Talatin", audioPath: "30.mp3" },
        { id: 31, english: "31", hausa: "Talatin Da Daya", audioPath: "31.mp3" },
        { id: 32, english: "32", hausa: "Talatin Da Biyu", audioPath: "32.mp3" },
        { id: 33, english: "33", hausa: "Talatin Da Uku", audioPath: "33.mp3" },
        { id: 34, english: "34", hausa: "Talatin Da Hudu", audioPath: "34.mp3" },
        { id: 35, english: "35", hausa: "Talatin Da Biyar", audioPath: "35.mp3" },
        { id: 36, english: "36", hausa: "Talatin Da Shida", audioPath: "36.mp3" },
        { id: 37, english: "37", hausa: "Talatin Da Bakwai", audioPath: "37.mp3" },
        { id: 38, english: "38", hausa: "Talatin Da Takwas", audioPath: "38.mp3" },
        { id: 39, english: "39", hausa: "Talatin Da Tara", audioPath: "39.mp3" },
        { id: 40, english: "40", hausa: "Arba'in", audioPath: "40.mp3" },
        { id: 41, english: "41", hausa: "Arba'in Da Daya", audioPath: "41.mp3" },
        { id: 42, english: "42", hausa: "Arba'in Da Biyu", audioPath: "42.mp3" },
        { id: 43, english: "43", hausa: "Arba'in Da Uku", audioPath: "43.mp3" },
        { id: 44, english: "44", hausa: "Arba'in Da Hudu", audioPath: "44.mp3" },
        { id: 45, english: "45", hausa: "Arba'in Da Biyar", audioPath: "45.mp3" },
        { id: 46, english: "46", hausa: "Arba'in Da Shida", audioPath: "46.mp3" },
        { id: 47, english: "47", hausa: "Arba'in Da Bakwai", audioPath: "47.mp3" },
        { id: 48, english: "48", hausa: "Arba'in Da Takwas", audioPath: "48.mp3" },
        { id: 49, english: "49", hausa: "Arba'in Da Tara", audioPath: "49.mp3" },
        { id: 50, english: "50", hausa: "Hamsin", audioPath: "50.mp3" },
        { id: 60, english: "60", hausa: "Sittin", audioPath: "60.mp3" },
        { id: 70, english: "70", hausa: "Saba'in", audioPath: "70.mp3" },
        { id: 80, english: "80", hausa: "Tamanin", audioPath: "80.mp3" },
        { id: 90, english: "90", hausa: "Tisa'in", audioPath: "90.mp3" },
        { id: 100, english: "100", hausa: "Dari", audioPath: "100.mp3" },
        { id: 200, english: "200", hausa: "Dari Biyu", audioPath: "200.mp3" },
        { id: 300, english: "300", hausa: "Dari Uku", audioPath: "300.mp3" },
        { id: 400, english: "400", hausa: "Dari Hudu", audioPath: "400.mp3" },
        { id: 500, english: "500", hausa: "Dari Biyar", audioPath: "500.mp3" },
        { id: 1000, english: "1000", hausa: "Dubu Daya", audioPath: "1000.mp3" },
        { id: 2000, english: "2000", hausa: "Dubun Biyu", audioPath: "2000.mp3" },
        { id: 4000, english: "4000", hausa: "Dubun Hudu", audioPath: "4000.mp3" },
        { id: 10000, english: "10000", hausa: "Dubun Goma", audioPath: "10000.mp3" },
        { id: 100000, english: "100,000", hausa: "Dubun Dari", audioPath: "100000.mp3" },
        { id: 1000000, english: "1,000,000", hausa: "Miliyan Daya", audioPath: "1000000.mp3" }
    ]);
 
    await db.insert(schema.ignumbers).values([
        { id: 1, english: "1", igbo: "Otu", audioPath: "one.mp3" },
        { id: 2, english: "2", igbo: "Abụọ", audioPath: "two.mp3" },
        { id: 3, english: "3", igbo: "Atọ", audioPath: "three.mp3" },
        { id: 4, english: "4", igbo: "Anọ", audioPath: "four.mp3" },
        { id: 5, english: "5", igbo: "Ise", audioPath: "five.mp3" },
        { id: 6, english: "6", igbo: "Isii", audioPath: "six.mp3" },
        { id: 7, english: "7", igbo: "Asaa", audioPath: "seven.mp3" },
        { id: 8, english: "8", igbo: "Asato", audioPath: "eight.mp3" },
        { id: 9, english: "9", igbo: "Itolu", audioPath: "nine.mp3" },
        { id: 10, english: "10", igbo: "Iri", audioPath: "ten.mp3" },
        { id: 11, english: "11", igbo: "Iri na Otu", audioPath: "11.mp3" },
        { id: 12, english: "12", igbo: "Iri na Abụọ", audioPath: "12.mp3" },
        { id: 13, english: "13", igbo: "Iri na Atọ", audioPath: "13.mp3" },
        { id: 14, english: "14", igbo: "Iri na Anọ", audioPath: "14.mp3" },
        { id: 15, english: "15", igbo: "Iri na Ise", audioPath: "15.mp3" },
        { id: 16, english: "16", igbo: "Iri na Isii", audioPath: "16.mp3" },
        { id: 17, english: "17", igbo: "Iri na Asaa", audioPath: "17.mp3" },
        { id: 18, english: "18", igbo: "Iri na Asato", audioPath: "18.mp3" },
        { id: 19, english: "19", igbo: "Iri na Itolu", audioPath: "19.mp3" },
        { id: 20, english: "20", igbo: "Iri Abụọ", audioPath: "20.mp3" },
        { id: 30, english: "30", igbo: "Iri Atọ", audioPath: "30.mp3" },
        { id: 40, english: "40", igbo: "Iri Anọ", audioPath: "40.mp3" },
        { id: 50, english: "50", igbo: "Iri Ise", audioPath: "50.mp3" },
        { id: 60, english: "60", igbo: "Iri Isii", audioPath: "60.mp3" },
        { id: 70, english: "70", igbo: "Iri Asaa", audioPath: "70.mp3" },
        { id: 80, english: "80", igbo: "Iri Asato", audioPath: "80.mp3" },
        { id: 90, english: "90", igbo: "Iri Itolu", audioPath: "90.mp3" },
        { id: 100, english: "100", igbo: "Nari", audioPath: "100.mp3" },
        { id: 200, english: "200", igbo: "Nari Abụọ", audioPath: "200.mp3" },
        { id: 300, english: "300", igbo: "Nari Atọ", audioPath: "300.mp3" },
        { id: 400, english: "400", igbo: "Nari Anọ", audioPath: "400.mp3" },
        { id: 500, english: "500", igbo: "Nari Ise", audioPath: "500.mp3" },
        { id: 1000, english: "1000", igbo: "Puku", audioPath: "1000.mp3" },
        { id: 2000, english: "2000", igbo: "Puku Abụọ", audioPath: "2000.mp3" },
        { id: 4000, english: "4000", igbo: "Puku Anọ", audioPath: "4000.mp3" },
        { id: 5000, english: "5000", igbo: "Puku Ise", audioPath: "5000.mp3" },
        { id: 10000, english: "10000", igbo: "Puku Iri", audioPath: "10000.mp3" },
        { id: 20000, english: "20000", igbo: "Puku Iri Abụọ", audioPath: "20000.mp3" },
        { id: 40000, english: "40000", igbo: "Puku Iri Anọ", audioPath: "40000.mp3" },
        { id: 50000, english: "50000", igbo: "Puku Iri Ise", audioPath: "50000.mp3" },
        { id: 100000, english: "100000", igbo: "Puku Nari", audioPath: "100000.mp3" },
      ]);

await db.insert(schema.genders).values([
  { id: 1, english: "Milk", hausa: "Madara", audioPath: "mad.mp3" },
  { id: 2, english: "Banana", hausa: "Ayaba", audioPath: "aya.mp3" },
  { id: 3, english: "Cassava Meal", hausa: "Tuwon Rogo", audioPath: "tuw.mp3" },
  { id: 4, english: "Breakfast", hausa: "Karin Safe", audioPath: "kar.mp3" },
  { id: 5, english: "Lunch", hausa: "Abinci Rana", audioPath: "abi.mp3" },
  { id: 6, english: "Dinner", hausa: "Abinci Dare", audioPath: "abind.mp3" },
  { id: 7, english: "Apple", hausa: "Tifa", audioPath: "tif.mp3" },
  { id: 8, english: "Carrots", hausa: "Karas", audioPath: "car.mp3" },
  { id: 9, english: "Mango", hausa: "Mangoro", audioPath: "man.mp3" },
  { id: 10, english: "Pawpaw", hausa: "Guwanda", audioPath: "guw.mp3" },
  { id: 11, english: "Sugar", hausa: "Sugar", audioPath: "sug.mp3" },
  { id: 12, english: "Salt", hausa: "Gishiri", audioPath: "gis.mp3" },
  { id: 13, english: "Meat", hausa: "Nama", audioPath: "nor.mp3" },
  { id: 14, english: "Fish", hausa: "Kifi", audioPath: "kif.mp3" },
  { id: 15, english: "Beans", hausa: "Wake", audioPath: "wak.mp3" },
  { id: 16, english: "Soup", hausa: "Miya", audioPath: "miy.mp3" },
  { id: 17, english: "Bread", hausa: "Burodi", audioPath: "bur.mp3" },
  { id: 18, english: "Rice", hausa: "Shinkafa", audioPath: "shi.mp3" },
  { id: 19, english: "Onions", hausa: "Alabasa", audioPath: "ala.mp3" },
  { id: 20, english: "Potatoes", hausa: "Dankali", audioPath: "dan.mp3" },
  { id: 21, english: "Popcorn", hausa: "Gugguru", audioPath: "gug.mp3" },
  { id: 22, english: "Salad", hausa: "Salad", audioPath: "sal.mp3" },
  { id: 23, english: "Eggs", hausa: "Kwai", audioPath: "kwa.mp3" },
  { id: 24, english: "Vegetable", hausa: "Alayaho", audioPath: "alay.mp3" },
  { id: 25, english: "Fruit", hausa: "'Ya'yan Itace", audioPath: "yay.mp3" },
]);

await db.insert(schema.iggenders).values([
        { id: 1, english: "Milk", igbo: "Mmiri ara ehi", audioPath: "mmi.mp3" },
        { id: 2, english: "Banana", igbo: "Unere", audioPath: "une.mp3" },
        { id: 3, english: "Cassava meal", igbo: "Akpụ", audioPath: "akp.mp3" },
        { id: 4, english: "Breakfast", igbo: "Nri ụtụtụ", audioPath: "bre.mp3" },
        { id: 5, english: "Lunch", igbo: "Nri ehihie", audioPath: "nrie.mp3" },
        { id: 6, english: "Dinner", igbo: "Nri abalị", audioPath: "din.mp3" },
        { id: 7, english: "Apple", igbo: "Apụl", audioPath: "apu.mp3" },
        { id: 8, english: "Carrots", igbo: "Karọt", audioPath: "kar.mp3" },
        { id: 9, english: "Mango", igbo: "Mangolo", audioPath: "man.mp3" },
        { id: 10, english: "Pawpaw", igbo: "Mgbimgbi", audioPath: "mgb.mp3" },
        { id: 11, english: "Sugar", igbo: "Shụga", audioPath: "shu.mp3" },
        { id: 12, english: "Salt", igbo: "Nnu", audioPath: "nnu.mp3" },
        { id: 13, english: "Meat", igbo: "Anụ", audioPath: "anu.mp3" },
        { id: 14, english: "Fish", igbo: "Azụ", audioPath: "azu.mp3" },
        { id: 15, english: "Beans", igbo: "Agwa", audioPath: "agw.mp3" },
        { id: 16, english: "Soup", igbo: "Ofe", audioPath: "ofe.mp3" },
        { id: 17, english: "Bread", igbo: "Achịcha", audioPath: "ach.mp3" },
        { id: 18, english: "Rice", igbo: "Ayabasị", audioPath: "aya.mp3" },
        { id: 19, english: "Potatoes", igbo: "Nduku", audioPath: "ndu.mp3" },
        { id: 20, english: "Snacks", igbo: "Snaksị", audioPath: "sna.mp3" },
        { id: 21, english: "Popcorn", igbo: "Ọka agbara agba", audioPath: "oka.mp3" },
        { id: 22, english: "Salad", igbo: "Saladị", audioPath: "sal.mp3" },
        { id: 23, english: "Vegetable", igbo: "Akwụkwọ nri", audioPath: "akw.mp3" },
        { id: 24, english: "Butter", igbo: "Bọta", audioPath: "bot.mp3" },
        { id: 25, english: "Fruits", igbo: "Mkpụrụosisi", audioPath: "mkp.mp3" },
        { id: 26, english: "Chicken", igbo: "Anụ ọkụkọ", audioPath: "anuo.mp3" },
        { id: 27, english: "Shrimp", igbo: "Shrịmpụ", audioPath: "shr.mp3" },
      
]);
await db.insert(schema.yrgenders).values([
        { id: 1, english: "Milk", yoruba: "Wara", audioPath: "war.mp3" },
        { id: 2, english: "Banana", yoruba: "Ogede", audioPath: "oge.mp3" },
        { id: 3, english: "Cassava meal", yoruba: "Garri", audioPath: "gar.mp3" },
        { id: 4, english: "Breakfast", yoruba: "Ounjẹ̀ ọ̀wúrọ̀", audioPath: "oun.mp3" },
        { id: 5, english: "Lunch", yoruba: "Ounjẹ̀ Ọ̀sán", audioPath: "ounje.mp3" },
        { id: 6, english: "Dinner", yoruba: "Ounjẹ̀ Alẹ́", audioPath: "ounj.mp3" },
        { id: 7, english: "Apple", yoruba: "Apusí", audioPath: "apu.mp3" },
        { id: 8, english: "Carrots", yoruba: "Karọọti", audioPath: "kar.mp3" },
        { id: 9, english: "Mango", yoruba: "Mango", audioPath: "man.mp3" },
        { id: 10, english: "Pawpaw", yoruba: "Ibepe", audioPath: "ibe.mp3" },
        { id: 11, english: "Sugar", yoruba: "Suga", audioPath: "sug.mp3" },
        { id: 12, english: "Salt", yoruba: "Iyọ̀", audioPath: "iyo.mp3" },
        { id: 13, english: "Meat", yoruba: "Ẹran", audioPath: "era.mp3" },
        { id: 14, english: "Fish", yoruba: "Ẹja", audioPath: "eja.mp3" },
        { id: 15, english: "Bean", yoruba: "Ewa", audioPath: "ewa.mp3" },
        { id: 16, english: "Soup", yoruba: "Obe", audioPath: "obe.mp3" },
        { id: 17, english: "Bread", yoruba: "Buredi", audioPath: "bur.mp3" },
        { id: 18, english: "Rice", yoruba: "Iresi", audioPath: "ire.mp3" },
        { id: 19, english: "Onions", yoruba: "Alubosa", audioPath: "alu.mp3" },
        { id: 20, english: "Potatoes", yoruba: "Anamo", audioPath: "ana.mp3" },
        { id: 21, english: "Snacks", yoruba: "Bíṣi", audioPath: "bis.mp3" },
        { id: 22, english: "Popcorn", yoruba: "Popikọn", audioPath: "pop.mp3" },
        { id: 23, english: "Salad", yoruba: "Saladi", audioPath: "sal.mp3" },
        { id: 24, english: "Egg", yoruba: "Ẹyin", audioPath: "egg.mp3" },
        { id: 25, english: "Vegetable", yoruba: "Ẹ̀fọ́", audioPath: "efo.mp3" },
        { id: 26, english: "Butter", yoruba: "Bọtọ", audioPath: "bot.mp3" },
        { id: 27, english: "Fruit", yoruba: "Eso", audioPath: "eso.mp3" },
        { id: 28, english: "Chicken", yoruba: "Adìẹ", audioPath: "adi.mp3" },
        { id: 29, english: "Shrimp", yoruba: "Ẹ̀jẹ Ẹ̀dẹ̀", audioPath: "ejae.mp3" },   
]);

await db.insert(schema.body).values([
        { id: 1, english: "Head", hausa: "Kai", audioPath: "kai.mp3" },  
        { id: 2, english: "Hair", hausa: "Gashi", audioPath: "gas.mp3" },  
        { id: 3, english: "Forehead", hausa: "Goshi", audioPath: "gos.mp3" },  
        { id: 4, english: "Eyebrows", hausa: "Gira", audioPath: "gir.mp3" },  
        { id: 5, english: "Eyes", hausa: "Ido", audioPath: "ido.mp3" },  
        { id: 6, english: "Eyelashes", hausa: "Gashin ido", audioPath: "gas2.mp3" },  
        { id: 7, english: "Ears", hausa: "Kunne", audioPath: "kun.mp3" },  
        { id: 8, english: "Nose", hausa: "Hanci", audioPath: "han.mp3" },  
        { id: 9, english: "Mouth", hausa: "Baki", audioPath: "bak.mp3" },  
        { id: 10, english: "Lips", hausa: "Lebba", audioPath: "leb.mp3" },  
        { id: 11, english: "Teeth", hausa: "Hakora", audioPath: "hak.mp3" },  
        { id: 12, english: "Cheeks", hausa: "Kunci", audioPath: "kun.mp3" },  
        { id: 13, english: "Tongue", hausa: "Harshe", audioPath: "har.mp3" },  
        { id: 14, english: "Chin", hausa: "Haba", audioPath: "hab.mp3" },  
        { id: 15, english: "Jaw", hausa: "Kashi haɓa", audioPath: "kas2.mp3" },  
        { id: 16, english: "Neck", hausa: "Wuya", audioPath: "wuy.mp3" },  
        { id: 17, english: "Shoulders", hausa: "Kafadu", audioPath: "kaf.mp3" },  
        { id: 18, english: "Chest", hausa: "Kirji", audioPath: "kir.mp3" },  
        { id: 19, english: "Breast", hausa: "Nono no mace", audioPath: "non.mp3" },  
        { id: 20, english: "Back", hausa: "Baya", audioPath: "bay.mp3" },  
        { id: 21, english: "Spine", hausa: "Kashin baya", audioPath: "kas.mp3" },  
        { id: 22, english: "Arm", hausa: "Damtse", audioPath: "dam.mp3" },  
        { id: 23, english: "Upper arm", hausa: "Kafada", audioPath: "kaf.mp3" },  
        { id: 24, english: "Elbow", hausa: "Gwiwar hannu", audioPath: "gwi.mp3" },  
        { id: 25, english: "Forearm", hausa: "Damtse", audioPath: "dam2.mp3" },  
        { id: 26, english: "Wrist", hausa: "wuya hannu", audioPath: "wuy2.mp3" },  
        { id: 27, english: "Hand", hausa: "Damtse", audioPath: "dam3.mp3" },  
        { id: 28, english: "Fingers", hausa: "Yatsu", audioPath: "yat.mp3" },  
        { id: 30, english: "Fingernails", hausa: "Farce", audioPath: "far.mp3" },  
        { id: 31, english: "Waist", hausa: "Kugu", audioPath: "kug.mp3" },  
        { id: 32, english: "Hips", hausa: "Ƙugu", audioPath: "kug.mp3" },  
        { id: 33, english: "Buttocks", hausa: "Duwawu", audioPath: "duw.mp3" },  
        { id: 34, english: "Thighs", hausa: "Duwawu", audioPath: "duw2.mp3" },  
        { id: 35, english: "Knees", hausa: "Gwiwowi", audioPath: "gwi2.mp3" },  
        { id: 36, english: "Legs", hausa: "Ƙafa", audioPath: "kaf.mp3" },    
        { id: 38, english: "Ankles", hausa: "Idon kafa", audioPath: "ido2.mp3" },  
        { id: 39, english: "Feet", hausa: "Ƙafafu", audioPath: "kaf2.mp3" },  
        { id: 40, english: "Toes", hausa: "Yatsun ƙafa", audioPath: "yat2.mp3" },  
        { id: 41, english: "Toe nails", hausa: "Farce kafa", audioPath: "far2.mp3" },  
        { id: 42, english: "Brain", hausa: "Kwakwalwa", audioPath: "kwa.mp3" },  
        { id: 43, english: "Heart", hausa: "Zuciya", audioPath: "zuc.mp3" },  
        { id: 44, english: "Stomach", hausa: "Ciki", audioPath: "cik.mp3" },  
        { id: 45, english: "Skin", hausa: "Fata", audioPath: "fat.mp3" },  
        { id: 46, english: "Bones", hausa: "Kashi", audioPath: "kas.mp3" },  
        { id: 47, english: "Joints", hausa: "Mahadin gwiwowi", audioPath: "mah.mp3" },  
        { id: 48, english: "Muscles", hausa: "Tsoka", audioPath: "tso.mp3" },  
        { id: 49, english: "Blood", hausa: "Jini", audioPath: "jin.mp3" },  
                      
]);

await db.insert(schema.igbody).values([
                { id: 1, english: "Head", igbo: "Isi", audioPath: "isi.mp3" },
                { id: 2, english: "Hair", igbo: "Ntụtụ", audioPath: "ntu.mp3" },
                { id: 3, english: "Forehead", igbo: "Ihu isi", audioPath: "ihu.mp3" },
                { id: 4, english: "Eyebrows", igbo: "Nku anya", audioPath: "nku.mp3" },
                { id: 5, english: "Eyes", igbo: "Anya", audioPath: "any.mp3" },
                { id: 6, english: "Eyelashes", igbo: "Abụba anya", audioPath: "abu.mp3" },
                { id: 7, english: "Ears", igbo: "Ntị", audioPath: "nti.mp3" },
                { id: 8, english: "Nose", igbo: "Imi", audioPath: "imi.mp3" },
                { id: 9, english: "Mouth", igbo: "Ọnụ", audioPath: "onu.mp3" },
                { id: 10, english: "Lips", igbo: "Egbugbere ọnụ", audioPath: "egb.mp3" },
                { id: 11, english: "Teeth", igbo: "Eze", audioPath: "eze.mp3" },
                { id: 12, english: "Tongue", igbo: "Ire", audioPath: "ire.mp3" },
                { id: 13, english: "Chin/Jaw", igbo: "Agba", audioPath: "agb.mp3" },
                { id: 14, english: "Neck", igbo: "Olu", audioPath: "olu.mp3" },
                { id: 15, english: "Shoulders", igbo: "Mbukwu", audioPath: "mbu.mp3" },
                { id: 16, english: "Chest", igbo: "Obi", audioPath: "obi.mp3" },
                { id: 17, english: "Breast", igbo: "Ara", audioPath: "ara.mp3" },
                { id: 18, english: "Back", igbo: "Azụ", audioPath: "azu.mp3" },
                { id: 19, english: "Spine", igbo: "Ọkpụkpụ azụ", audioPath: "ọkp.mp3" },
                { id: 20, english: "Arm", igbo: "Alaaka", audioPath: "ala.mp3" },
                { id: 21, english: "Upper arm", igbo: "Elu alaaka", audioPath: "elu.mp3" },
                { id: 22, english: "Elbow", igbo: "Nku aka", audioPath: "nku2.mp3" },
                { id: 23, english: "Forearm", igbo: "Ihu aka", audioPath: "ihu2.mp3" },
                { id: 24, english: "Wrist", igbo: "Mgbaji aka", audioPath: "mgb.mp3" },
                { id: 25, english: "Hand", igbo: "Aka", audioPath: "aka.mp3" },
                { id: 26, english: "Fingers", igbo: "Mkpịsị aka", audioPath: "mkp.mp3" },
                { id: 27, english: "Thumb", igbo: "Isi mkpịsịaka", audioPath: "isi2.mp3" },
                { id: 28, english: "Fingernails", igbo: "Mbọ aka", audioPath: "mbo.mp3" },
                { id: 29, english: "Waist", igbo: "Elu ukwu", audioPath: "elu.mp3" },
                { id: 30, english: "Hips", igbo: "Ukwu", audioPath: "ukw.mp3" },
                { id: 31, english: "Buttocks", igbo: "Ike", audioPath: "ike.mp3" },
                { id: 32, english: "Thighs", igbo: "Apata ụkwụ", audioPath: "apa.mp3" },
                { id: 33, english: "Knees", igbo: "Ikpere", audioPath: "ikp.mp3" },
                { id: 34, english: "Legs", igbo: "Ụkwụ", audioPath: "ukw.mp3" },
                { id: 35, english: "Calves", igbo: "Azụ ụkwụ", audioPath: "azu2.mp3" },
                { id: 36, english: "Ankles", igbo: "Nkwonkwo ụkwụ", audioPath: "nkw.mp3" },
                { id: 37, english: "Feet", igbo: "Ụkwụ", audioPath: "ukw.mp3" },
                { id: 38, english: "Toes", igbo: "Mkpịsịsị ụkwụ", audioPath: "mkp2.mp3" },
                { id: 39, english: "Toe nails", igbo: "Mbọ ụkwụ", audioPath: "mbo2.mp3" },
                { id: 40, english: "Brain", igbo: "Ụbụrụ isi", audioPath: "ubu.mp3" },
                { id: 41, english: "Heart", igbo: "Mkpụrụ obi", audioPath: "mkp3.mp3" },
                { id: 42, english: "Stomach", igbo: "Afọ", audioPath: "afo.mp3" },
                { id: 43, english: "Skin", igbo: "Anụ ahụ", audioPath: "anu.mp3" },
                { id: 44, english: "Bones", igbo: "Ọkpụkpụ", audioPath: "okp.mp3" },
                { id: 45, english: "Joints", igbo: "Nkwo", audioPath: "nkw2.mp3" },
                { id: 46, english: "Muscles", igbo: "Akwara", audioPath: "akw.mp3" },
                { id: 47, english: "Blood", igbo: "Ọbara", audioPath: "oba.mp3" }               
]);

await db.insert(schema.yrbody).values([
        { id: 1, english: "Head", yoruba: "orí", audioPath: "ori.mp3" },  
        { id: 2, english: "Hair", yoruba: "irun", audioPath: "iru.mp3" },  
        { id: 3, english: "Forehead", yoruba: "iwájú orí", audioPath: "iwa.mp3" },  
        { id: 4, english: "Eyebrows", yoruba: "irun ojú", audioPath: "iru2.mp3" },  
        { id: 5, english: "Eyes", yoruba: "ojú", audioPath: "oju.mp3" },  
        { id: 6, english: "Eyelashes", yoruba: "irun ẹyinjú", audioPath: "iru3.mp3" },  
        { id: 7, english: "Ears", yoruba: "etí", audioPath: "eti.mp3" },  
        { id: 8, english: "Nose", yoruba: "imú", audioPath: "imu.mp3" },  
        { id: 9, english: "Mouth", yoruba: "ẹnu", audioPath: "enu.mp3" },  
        { id: 10, english: "Lips", yoruba: "ẹ̀tè", audioPath: "ete.mp3" },  
        { id: 11, english: "Teeth", yoruba: "eyín", audioPath: "eyi.mp3" },  
        { id: 12, english: "Cheeks", yoruba: "ẹ̀kẹ́", audioPath: "eke.mp3" },  
        { id: 13, english: "Tongue", yoruba: "ahọ́n", audioPath: "aho.mp3" },  
        { id: 14, english: "Chin", yoruba: "àgbọ̀n", audioPath: "agb.mp3" },  
        { id: 15, english: "Jaw", yoruba: "egungun àgbọ̀n", audioPath: "egu.mp3" },  
        { id: 16, english: "Neck", yoruba: "òrun", audioPath: "oru.mp3" },  
        { id: 17, english: "Shoulders", yoruba: "ejika", audioPath: "eji.mp3" },  
        { id: 18, english: "Chest", yoruba: "àyà", audioPath: "aya.mp3" },  
        { id: 19, english: "Breast", yoruba: "ọmu", audioPath: "omu.mp3" },  
        { id: 20, english: "Back", yoruba: "ẹ̀hìn", audioPath: "ehi.mp3" },  
        { id: 21, english: "Spine", yoruba: "òpó ẹ̀hìn", audioPath: "opo.mp3" },  
        { id: 22, english: "Arm", yoruba: "àpá", audioPath: "apa.mp3" },  
        { id: 23, english: "Upper arm", yoruba: "ejika", audioPath: "eji.mp3" },  
        { id: 24, english: "Elbow", yoruba: "igúnpa", audioPath: "igu.mp3" },  
        { id: 25, english: "Forearm", yoruba: "àpá isalẹ", audioPath: "apa2.mp3" },  
        { id: 26, english: "Wrist", yoruba: "orún ọwọ́", audioPath: "oru2.mp3" },  
        { id: 27, english: "Hand", yoruba: "ọwọ́", audioPath: "owo.mp3" },  
        { id: 28, english: "Fingers", yoruba: "ìka ọwọ́", audioPath: "ika.mp3" },  
        { id: 29, english: "Thumb", yoruba: "òkè ìka ọwọ́", audioPath: "oke.mp3" },  
        { id: 30, english: "Fingernails", yoruba: "ekan ọwọ́", audioPath: "eka.mp3" },  
        { id: 31, english: "Waist", yoruba: "ìkebe", audioPath: "ike.mp3" },  
        { id: 32, english: "Hips", yoruba: "etun", audioPath: "etu.mp3" },  
        { id: 33, english: "Buttocks", yoruba: "ìdí", audioPath: "idi.mp3" },  
        { id: 34, english: "Thighs", yoruba: "ìtan", audioPath: "ita.mp3" },  
        { id: 35, english: "Knees", yoruba: "orokún", audioPath: "oro.mp3" },  
        { id: 36, english: "Legs", yoruba: "ẹsẹ̀", audioPath: "ese.mp3" },  
        { id: 37, english: "Calves", yoruba: "ìtìjú ẹsẹ̀", audioPath: "iti.mp3" },  
        { id: 38, english: "Ankles", yoruba: "ìpàlẹ̀sẹ̀", audioPath: "ipa.mp3" },  
        { id: 39, english: "Feet", yoruba: "ẹsẹ̀", audioPath: "ese.mp3" },  
        { id: 40, english: "Toes", yoruba: "ìka ẹsẹ̀", audioPath: "ika2.mp3" },  
        { id: 41, english: "Toe nails", yoruba: "ekan ẹsẹ̀", audioPath: "eka2.mp3" },  
        { id: 42, english: "Brain", yoruba: "ọpọlọ", audioPath: "opo2.mp3" },  
        { id: 43, english: "Heart", yoruba: "ọkàn", audioPath: "oka.mp3" },  
        { id: 44, english: "Stomach", yoruba: "inú", audioPath: "inu.mp3" },  
        { id: 45, english: "Skin", yoruba: "àwò ara", audioPath: "awo.mp3" },  
        { id: 46, english: "Bones", yoruba: "egungun", audioPath: "egu2.mp3" },  
        { id: 47, english: "Joints", yoruba: "isẹpo egungun", audioPath: "ise.mp3" },  
        { id: 48, english: "Muscles", yoruba: "etun", audioPath: "etu.mp3" },  
        { id: 49, english: "Blood", yoruba: "ẹ̀jẹ̀", audioPath: "eje.mp3" },       
]);

await db.insert(schema.slangs).values([
        { id: 1, english: "E choke o", hausa: "Balahi", audioPath: "bal.mp3" },
        { id: 2, english: "Shey", hausa: "Haba kai", audioPath: "hab.mp3" },
        { id: 3, english: "Abeg", hausa: "Dan Allah", audioPath: "dan.mp3" },
        { id: 4, english: "Sapa", hausa: "Patara", audioPath: "pat.mp3" },
        { id: 5, english: "Ginger", hausa: "Kurkur", audioPath: "kur.mp3" },
        { id: 6, english: "Ehen", hausa: "Haka ne", audioPath: "hak.mp3" },
        { id: 7, english: "Shine your eye", hausa: "Haska idanunka", audioPath: "has.mp3" },
        { id: 8, english: "Over sabi", hausa: "Regima", audioPath: "reg.mp3" },
        { id: 9, english: "How far", hausa: "Ya ne?", audioPath: "yan.mp3" },
        { id: 10, english: "Flex", hausa: "Sassauka", audioPath: "sas.mp3" },
        { id: 11, english: "Carry me dey go", hausa: "Mu je zuwa", audioPath: "muj.mp3" },     
]);
              
await db.insert(schema.igslangs).values([
        { id: 1, english: "Wahala", igbo: "Nsogbu", audioPath: "nso.mp3" },
        { id: 2, english: "Omo", igbo: "Nwa", audioPath: "nwa.mp3" },
        { id: 3, english: "Is that so?", igbo: "Okwa ya", audioPath: "okw.mp3" },
        { id: 4, english: "Abeg", igbo: "Biko", audioPath: "bik.mp3" },
        { id: 5, english: "White man", igbo: "Owuite", audioPath: "owu.mp3" },
        { id: 6, english: "No vex", igbo: "Ewela iwe", audioPath: "ewe.mp3" },
        { id: 7, english: "Ginger", igbo: "Funye ya ọkụ", audioPath: "fun.mp3" },
        { id: 8, english: "Ehen", igbo: "Nna a", audioPath: "nna.mp3" },
        { id: 9, english: "News", igbo: "Akụkọ", audioPath: "aku.mp3" },
        { id: 10, english: "Exactly", igbo: "Ehen", audioPath: "ehe.mp3" },
        { id: 11, english: "Pele", igbo: "Ndo", audioPath: "ndo.mp3" },
        { id: 12, english: "Lamba", igbo: "Ashị", audioPath: "ashi.mp3" },
        { id: 13, english: "Shine your eye", igbo: "Mụrụ anya", audioPath: "mur.mp3" },
        { id: 14, english: "Carry me dey go", igbo: "Ka anyị na-agakwa aga", audioPath: "kaa.mp3" },
        { id: 15, english: "Over sabi", igbo: "Ọkachamara", audioPath: "oka.mp3" },
        { id: 16, english: "How far?", igbo: "Kedu ihe na-eme", audioPath: "ked.mp3" },
        { id: 17, english: "Flex", igbo: "Mmachagharị", audioPath: "mma.mp3" }, 
]);

await db.insert(schema.yrslangs).values([
        { id: 1, english: "Wahala", yoruba: "Wàhàlà", audioPath: "wah.mp3" },
        { id: 2, english: "Omo", yoruba: "Ómò", audioPath: "omo.mp3" },
        { id: 3, english: "Japa", yoruba: "Jàpà", audioPath: "jap.mp3" },
        { id: 4, english: "Abeg", yoruba: "Jọ̀ o", audioPath: "jor.mp3" },
        { id: 5, english: "Sapa", yoruba: "Ènùgbè", audioPath: "enu.mp3" },
        { id: 6, english: "No VEX", yoruba: "Mabinu", audioPath: "mab.mp3" },
        { id: 7, english: "Zazu", yoruba: "Zàzù", audioPath: "zaz.mp3" },
        { id: 8, english: "Ginger", yoruba: "Pàkúrúmò", audioPath: "pak.mp3" },
        { id: 9, english: "Baba", yoruba: "Bàbà", audioPath: "bab.mp3" },
        { id: 10, english: "Wetin you Yarn", yoruba: "Kílósò", audioPath: "kil.mp3" },
        { id: 11, english: "Pele", yoruba: "Pèlè", audioPath: "pel.mp3" },
        { id: 12, english: "Gbas gobs", yoruba: "Gbàs gbos", audioPath: "gba.mp3" },
        { id: 13, english: "Lamba", yoruba: "Mùlè", audioPath: "mul.mp3" },
        { id: 14, english: "Shine your eye", yoruba: "Lá ojú ẹ", audioPath: "lao.mp3" },
        { id: 15, english: "Carry me dey go", yoruba: "Gbémídébé", audioPath: "gbe.mp3" },
        { id: 16, english: "Over sabi", yoruba: "Àlàmọ́jù", audioPath: "ala.mp3" },
        { id: 17, english: "How far", yoruba: "Kílòwà", audioPath: "kilo.mp3" },
        { id: 18, english: "Flex", yoruba: "Jáiyè Jàiyè", audioPath: "jai.mp3" },    
]);
              

await db.insert(schema.igrelatives).values([
        { id: 1, english: "Father", igbo: "Nna", audioPath: "nna.mp3" },  
        { id: 2, english: "Mother", igbo: "Nne", audioPath: "nne.mp3" },  
        { id: 3, english: "Brother", igbo: "Nwanne nwoke", audioPath: "nwa.mp3" },  
        { id: 4, english: "Sister", igbo: "Nwanne nwaanyi", audioPath: "nwa2.mp3" },  
        { id: 5, english: "Son", igbo: "Nwa nwoke", audioPath: "nwa3.mp3" },  
        { id: 6, english: "Daughter", igbo: "Nwa nwaanyi", audioPath: "nwa4.mp3" },  
        { id: 7, english: "First daughter", igbo: "Ada", audioPath: "ada.mp3" },  
        { id: 8, english: "Second daughter", igbo: "Ụlụ", audioPath: "ulu.mp3" },  
        { id: 9, english: "First son", igbo: "Ọkwara", audioPath: "okw.mp3" },  
        { id: 10, english: "Last child", igbo: "Nwa ikpeazụ", audioPath: "nwa5.mp3" },  
        { id: 11, english: "Twins", igbo: "Ejima", audioPath: "eji.mp3" },  
        { id: 12, english: "Senior sibling", igbo: "Nwanne nnukwu", audioPath: "nwa6.mp3" },  
        { id: 13, english: "Junior sibling", igbo: "Nwanne obere", audioPath: "nwa7.mp3" },  
        { id: 14, english: "Grandfather", igbo: "Nnanna", audioPath: "nna2.mp3" },  
        { id: 15, english: "Grandmother", igbo: "Nnenne", audioPath: "nne2.mp3" },  
        { id: 16, english: "Grandchild", igbo: "Nwanwa", audioPath: "nwa8.mp3" },  
        { id: 17, english: "Uncle", igbo: "Nwanne nwoke nne na nna", audioPath: "nwa8.mp3" },  
        { id: 18, english: "Aunt", igbo: "Nwanne nwaanyi nne na nna", audioPath: "nwa10.mp3" },  
        { id: 19, english: "Nephew", igbo: "Nwa nwaanyi nwanne nne na nna", audioPath: "nwa12.mp3" },  
        { id: 20, english: "Niece", igbo: "Nwa nwoke nwanne nne na nna", audioPath: "nwa13.mp3" },  
        { id: 21, english: "Cousin", igbo: "Nwa nwanne nne na nna", audioPath: "nwa14.mp3" },  
        { id: 22, english: "Husband", igbo: "Di", audioPath: "di.mp3" },  
        { id: 23, english: "Wife", igbo: "Nwunye", audioPath: "nwu.mp3" },  
        { id: 24, english: "Child", igbo: "Nwa", audioPath: "nwa15.mp3" },  
        { id: 25, english: "In-law", igbo: "Ọgo", audioPath: "ogo.mp3" }          
]);

await db.insert(schema.yrrelatives).values([
        { id: 1, english: "Father", yoruba: "Bàbá", audioPath: "babN.mp3" },  
        { id: 2, english: "Mother", yoruba: "Ìyá", audioPath: "iyaN.mp3" },  
        { id: 3, english: "Brother", yoruba: "Àbúrò ọkùnrin", audioPath: "abuN.mp3" },  
        { id: 4, english: "Sister", yoruba: "Àbúrò obìnrin", audioPath: "abu2N.mp3" },  
        { id: 5, english: "Son", yoruba: "Ọmọ ọkùnrin", audioPath: "omoN1.mp3" },  
        { id: 6, english: "Daughter", yoruba: "Ọmọ obìnrin", audioPath: "omoN2.mp3" },  
        { id: 7, english: "First daughter", yoruba: "Àkọ́bí obìnrin", audioPath: "ako.mp3" },  
        { id: 8, english: "Second daughter", yoruba: "Obìnrin Kejì", audioPath: "obi2.mp3" },  
        { id: 9, english: "First son", yoruba: "Àkọ́bí ọkùnrin", audioPath: "ako.mp3" },  
        { id: 10, english: "Last child", yoruba: "Àbígbeyin", audioPath: "abi.mp3" },  
        { id: 11, english: "Twins", yoruba: "Ìbejì", audioPath: "ibe.mp3" },  
        { id: 12, english: "Senior sibling", yoruba: "Ẹ̀gbọ́n", audioPath: "egb.mp3" },  
        { id: 13, english: "Junior sibling", yoruba: "Àbúrò", audioPath: "abu.mp3" },  
        { id: 14, english: "Grandfather", yoruba: "Bàbá àgbà", audioPath: "bab.mp3" },  
        { id: 15, english: "Grandmother", yoruba: "Ìyá àgbà", audioPath: "iya.mp3" },  
        { id: 16, english: "Grandchild", yoruba: "Ọmọ ọmọ", audioPath: "omoN.mp3" },  
        { id: 17, english: "Uncle", yoruba: "Ẹ̀gbọ́n tàbí àbúrò ọkùnrin ti bàbá tàbí ìyá", audioPath: "egb2.mp3" },  
        { id: 18, english: "Aunt", yoruba: "Ẹ̀gbọ́n tàbí àbúrò obìnrin ti bàbá tàbí ìyá", audioPath: "egb3.mp3" },  
        { id: 19, english: "Nephew", yoruba: "Ọmọkùnrin arábìnrin tàbí arákùnrin", audioPath: "omo2.mp3" },  
        { id: 20, english: "Niece", yoruba: "Ọmọbìnrin arábìnrin tàbí arákùnrin", audioPath: "omo.mp3" },  
        { id: 21, english: "Cousin", yoruba: "Arábìnrin tàbí arákùnrin", audioPath: "ara.mp3" },  
        { id: 22, english: "Husband", yoruba: "Ọkọ", audioPath: "oko.mp3" },  
        { id: 23, english: "Wife", yoruba: "Ìyàwó", audioPath: "iya2.mp3" },  
        { id: 24, english: "Father-in-law", yoruba: "Bàbá ọkọ tàbí bàbá ìyàwó", audioPath: "bab2.mp3" },  
        { id: 25, english: "Mother-in-law", yoruba: "Ìyá ọkọ tàbí Ìyá ìyàwó", audioPath: "iya3.mp3" },  
        { id: 26, english: "Brother-in-law", yoruba: "Arákùnrin ọkọ tàbí Arákùnrin ìyàwó", audioPath: "ara2.mp3" },  
        { id: 27, english: "Sister-in-law", yoruba: "Arábìnrin ọkọ tàbí Arábìnrin ìyàwó", audioPath: "ara3.mp3" },  
        { id: 28, english: "Son-in-law", yoruba: "Òkò ọmọ", audioPath: "oko2.mp3" },  
        { id: 29, english: "Daughter-in-law", yoruba: "Ìyàwó ọmọ", audioPath: "iya4.mp3" }  
           
]);

await db.insert(schema.relatives).values([
                { id: 1, english: "Father", hausa: "Uba", audioPath: "uba.mp3" },
                { id: 2, english: "Mother", hausa: "Uwa", audioPath: "uwa.mp3" },
                { id: 3, english: "Brother", hausa: "Dan’uwa na miji", audioPath: "dan.mp3" },
                { id: 4, english: "Sister", hausa: "Yar’uwa ta mace", audioPath: "yar.mp3" },
                { id: 5, english: "Son", hausa: "Da", audioPath: "da.mp3" },
                { id: 6, english: "Daughter", hausa: "Diya mace", audioPath: "diy.mp3" },
                { id: 7, english: "First daughter", hausa: "Diya mace ta farko", audioPath: "diy2.mp3" },
                { id: 8, english: "Second daughter", hausa: "Diya mace ta biyi", audioPath: "diy3.mp3" },
                { id: 9, english: "First son", hausa: "Dan fari", audioPath: "dan2.mp3" },
                { id: 10, english: "Last son", hausa: "Dan karshe", audioPath: "dan.mp3" },
                { id: 11, english: "Twins", hausa: "Yan biyu", audioPath: "yan.mp3" },
                { id: 12, english: "Senior sibling", hausa: "Wa na miji, Ya ta mace", audioPath: "wan.mp3" },
                { id: 13, english: "Junior sibling", hausa: "Kane na miji, Kanwa ta mace", audioPath: "kan.mp3" },
                { id: 14, english: "Grandfather", hausa: "Kaka", audioPath: "kak.mp3" },
                { id: 15, english: "Grandmother", hausa: "Kaka", audioPath: "kak2.mp3" },
                { id: 16, english: "Grandchild", hausa: "Jika", audioPath: "jik.mp3" },
                { id: 17, english: "Uncle", hausa: "Kawa", audioPath: "kaw.mp3" },
                { id: 18, english: "Aunt", hausa: "Inna", audioPath: "inn.mp3" },
                { id: 19, english: "Nephew", hausa: "Dan wa, Dan kani, Dan kanwa", audioPath: "dan4.mp3" },
                { id: 20, english: "Niece", hausa: "Dan kawa", audioPath: "dan5.mp3" },
                { id: 21, english: "Cousin", hausa: "Dan Uwa", audioPath: "dan5.mp3" },
                { id: 22, english: "Husband", hausa: "Mai gida", audioPath: "mai.mp3" },
                { id: 23, english: "Wife", hausa: "Uwar gida", audioPath: "uwa.mp3" },
                { id: 24, english: "Father in law", hausa: "Suruki", audioPath: "sur.mp3" },
                { id: 25, english: "Mother in law", hausa: "Suruka", audioPath: "sur2.mp3" },
                { id: 26, english: "Brother in law", hausa: "Suruki", audioPath: "sur.mp3" },
                { id: 27, english: "Sister in law", hausa: "Suruka", audioPath: "sur2.mp3" },
                { id: 28, english: "Son in law", hausa: "Suruki", audioPath: "sur.mp3" },
                { id: 29, english: "Daughter in law", hausa: "Suruka", audioPath: "sur2.mp3" },
                { id: 30, english: "Step child", hausa: "Agola", audioPath: "ago.mp3" },
                { id: 31, english: "Bride", hausa: "Amarya", audioPath: "ama.mp3" },
                { id: 32, english: "Groom", hausa: "Ango", audioPath: "ang.mp3" },
                { id: 33, english: "Great grand child", hausa: "Tattaba kunne", audioPath: "tat.mp3" }    
]);

await db.insert(schema.commonExp).values([
        { id: 1, english: "Welcome", hausa: "Barka da zuwa", audioPath: "bar.mp3" },
        { id: 2, english: "Hello", hausa: "Barka", audioPath: "bark.mp3" },
        { id: 3, english: "What's happening", hausa: "Me yake faruwa", audioPath: "mey.mp3" },
        { id: 4, english: "How are you", hausa: "Yaya kake", audioPath: "yay.mp3" },
        { id: 5, english: "I am okay", hausa: "Ina lafiya", audioPath: "ina.mp3" },
        { id: 6, english: "What is your name?", hausa: "Yaya sunanka", audioPath: "yaya.mp3" },
        { id: 7, english: "My name is", hausa: "Sunana Laraba", audioPath: "sun.mp3" },
        { id: 8, english: "Where are you from?", hausa: "Daga Ina kake?", audioPath: "dag.mp3" },
        { id: 9, english: "I'm from Bauchi", hausa: "Daga Bauchi nake", audioPath: "daga.mp3" },
        { id: 10, english: "Pleased to meet you", hausa: "Naji dadin haduwa da Kai", audioPath: "naj.mp3" },
        { id: 11, english: "Good morning", hausa: "Ina kwana", audioPath: "inak.mp3" },
        { id: 12, english: "Good afternoon", hausa: "Ina wuni", audioPath: "inaw.mp3" },
        { id: 13, english: "Good evening", hausa: "Barka da yema", audioPath: "barka.mp3" },
]);

await db.insert(schema.igcommonExp).values([
        { id: 1, english: "Welcome", igbo: "Nnọọ", audioPath: "nno.mp3" },
        { id: 2, english: "Hello", igbo: "Ndeewo", audioPath: "nde.mp3" },
        { id: 3, english: "What's happening?", igbo: "Gịnị na-eme?", audioPath: "gin.mp3" },
        { id: 4, english: "How are you?", igbo: "Kedu ka I mere?", audioPath: "ked.mp3" },
        { id: 5, english: "I am okay", igbo: "A dị m mma", audioPath: "adi.mp3" },
        { id: 6, english: "What is your name?", igbo: "Gịnị bụ aha gị?", audioPath: "gin.mp3" },
        { id: 7, english: "My name is", igbo: "Aha m bụ", audioPath: "ana.mp3" },
        { id: 8, english: "Where are you from?", igbo: "Kedu ebe isi?", audioPath: "ked.mp3" },
        { id: 9, english: "I'm from Bauchi", igbo: "Esi m", audioPath: "esi.mp3" },
        { id: 10, english: "Pleased to meet you", igbo: "Obi dị m ụtọ izute gị", audioPath: "obi.mp3" },
        { id: 11, english: "Good morning", igbo: "Ụtụtụ ọma", audioPath: "utu.mp3" },
        { id: 12, english: "Good afternoon", igbo: "Ehihie ọma", audioPath: "ehi.mp3" },
        { id: 13, english: "Good evening", igbo: "Mgbede ọma", audioPath: "mgb.mp3" },
            
]);

await db.insert(schema.yrcommonExp).values([
        { id: 1, english: "Welcome", yoruba: "Kaabọ", audioPath: "kab.mp3" },
        { id: 2, english: "Hello", yoruba: "Ẹ n lẹ", audioPath: "ele.mp3" },
        { id: 3, english: "What’s happening", yoruba: "Kí ni ń ṣẹlẹ̀?", audioPath: "kil.mp3" },
        { id: 4, english: "How are you", yoruba: "Báwo ni?", audioPath: "baw.mp3" },
        { id: 5, english: "I am okay", yoruba: "Mo wà pa", audioPath: "mow.mp3" },
        { id: 6, english: "What’s your name?", yoruba: "Kí ni orúkọ rẹ?", audioPath: "kilo.mp3" },
        { id: 7, english: "My name is", yoruba: "Orúkọ mi ni", audioPath: "oru.mp3" },
        { id: 8, english: "Where are you from?", yoruba: "Níbo ni o ti wá?", audioPath: "nib.mp3" },
        { id: 9, english: "I’m From", yoruba: "Mo wá láti", audioPath: "mowa.mp3" },
        { id: 10, english: "Pleased to meet you", yoruba: "Inú mi dùn láti mọ ẹ", audioPath: "inu.mp3" },
        { id: 11, english: "Good morning", yoruba: "Ẹ kárọ̀", audioPath: "kar.mp3" },
        { id: 12, english: "Good Afternoon", yoruba: "Ẹ kaasán", audioPath: "kas.mp3" },
        { id: 13, english: "Good Evening", yoruba: "Ẹ kú irọ̀lẹ́", audioPath: "kal.mp3" },      
]);
              
await db.insert(schema.pronouns).values([
        { id: 1, english: "She", hausa: "Ita", audioPath: "ita.mp3" },
        { id: 2, english: "He", hausa: "Shi", audioPath: "shi.mp3" },
        { id: 3, english: "We", hausa: "Mu", audioPath: "mu.mp3" },
        { id: 4, english: "Me", hausa: "Ni", audioPath: "ni.mp3" },
        { id: 5, english: "I", hausa: "Ni", audioPath: "ni.mp3" },         
]);

await db.insert(schema.yrpronouns).values([
        { id: 1, english: "She", yoruba: "Ó, Ẹ̀", audioPath: "o.mp3" },
        { id: 2, english: "He", yoruba: "Ó, Ẹ̀", audioPath: "e.mp3" },
        { id: 3, english: "We", yoruba: "Àwa", audioPath: "awa.mp3" },
        { id: 4, english: "Me", yoruba: "Èmí", audioPath: "emi.mp3" },
        { id: 5, english: "I", yoruba: "Èmí", audioPath: "emi.mp3" },
        { id: 6, english: "You", yoruba: "Ìwọ", audioPath: "iwo.mp3" },
        { id: 7, english: "They", yoruba: "Àwọn", audioPath: "awo.mp3" },          
]);

await db.insert(schema.igpronouns).values([
        {
                id: 1,
                english: "Me, my, I, mine, I'm",
                igbo: "M, mụ",
                audioPath: "m,m.mp3", // Replace with the actual audio file path
              },
              {
                id: 2,
                english: "You",
                igbo: "Gị, I, Ị",
                audioPath: "gi,i.mp3", // Replace with the actual audio file path
              },
              {
                id: 3,
                english: "Him, his, her",
                igbo: "Ya",
                audioPath: "ya.mp3", // Replace with the actual audio file path
              },
              {
                id: 4,
                english: "We, us",
                igbo: "Anyị",
                audioPath: "any.mp3", // Replace with the actual audio file path
              },
              {
                id: 5,
                english: "They, them, their",
                igbo: "Ha",
                audioPath: "ha.mp3", // Replace with the actual audio file path
              },
              {
                id: 6,
                english: "He, she",
                igbo: "O/Ọ",
                audioPath: "o.mp3", // Replace with the actual audio file path
              },
              
]);
              


          

    
console.log ("Seeding finished");
} catch (error) {
console.error(error);
throw new Error("Failed to seed the database");
}
};

main();