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

await db.insert(schema.HausaDictionary).values([
        { id: 1, word: "greed", both: "Handama: greed", meaning: "handama", audio: "hand.mp3" },
        { id: 2, word: "bring", both: "Kawo: bring", meaning: "kawo", audio: "kawo.mp3" },
        { id: 3, word: "find", both: "Nema: find", meaning: "nema", audio: "nema.mp3" },
        { id: 4, word: "wound", both: "Ciwo: wound", meaning: "ciwo", audio: "ciwo.mp3" },
        { id: 5, word: "suffer", both: "Wahala: suffer", meaning: "wahala", audio: "waha.mp3" },
        { id: 6, word: "word", both: "Kalma: word", meaning: "kalma", audio: "kalm.mp3" },
        { id: 7, word: "university", both: "Jamia: university", meaning: "jamia", audio: "jami.mp3" },
        { id: 8, word: "hero", both: "Jarimi: hero", meaning: "jarimi", audio: "jari.mp3" },
        { id: 9, word: "heroin", both: "Holder lbilis: heroin", meaning: "holder lbilis", audio: "hold.mp3" },
        { id: 10, word: "blood", both: "Jini: blood", meaning: "jini", audio: "jini.mp3" },
        { id: 11, word: "write", both: "Rubuta: write", meaning: "rubuta", audio: "rubu.mp3" },
        { id: 12, word: "weep", both: "Kuka: weep", meaning: "kuka", audio: "kuka.mp3" },
        { id: 13, word: "weeping", both: "Kuka: weeping", meaning: "kuka", audio: "kuka.mp3" },
        { id: 14, word: "weak", both: "Kasala: weak", meaning: "kasala", audio: "kasa.mp3" },
        { id: 15, word: "knife", both: "Wuka: knife", meaning: "wuka", audio: "wuka.mp3" },
        { id: 16, word: "wash cloth", both: "Wake kaya: wash cloth", meaning: "wake kaya", audio: "wake.mp3" },
        { id: 17, word: "wake up", both: "Farka: wake up", meaning: "farka", audio: "fark.mp3" },
        { id: 18, word: "wait for", both: "Ka jira: wait for", meaning: "ka jira", audio: "kaji.mp3" },
        { id: 19, word: "vomit", both: "Amai: vomit", meaning: "amai", audio: "amai.mp3" },
        { id: 20, word: "visitor", both: "Bako: visitor", meaning: "bako", audio: "bako.mp3" },
        { id: 21, word: "urine", both: "Fisari: urine", meaning: "fisari", audio: "fisa.mp3" },
        { id: 22, word: "urinate", both: "Yi fisari: urinate", meaning: "yi fisari", audio: "yifi.mp3" },
        { id: 23, word: "usefulness", both: "Mai amfani: usefulness", meaning: "mai amfani", audio: "maia.mp3" },
        { id: 24, word: "underneath", both: "Karkashi: underneath", meaning: "karkashi", audio: "kark.mp3" },
        { id: 25, word: "underside", both: "Kakashi: underside", meaning: "kakashi", audio: "kaka.mp3" },
        { id: 26, word: "turn off", both: "Kashe: turn off", meaning: "kashe", audio: "kash.mp3" },
        { id: 27, word: "truth", both: "Gaskiyar: truth", meaning: "gaskiyar", audio: "gask.mp3" },
        { id: 28, word: "thief", both: "Barawo: thief", meaning: "barawo", audio: "bara.mp3" },
        { id: 29, word: "tear", both: "Yaga: tear", meaning: "yaga", audio: "yaga.mp3" },
        { id: 30, word: "cry", both: "Kuka: cry", meaning: "kuka", audio: "kuka.mp3" },
        { id: 31, word: "congratulations", both: "Yaya murna: congratulations", meaning: "yaya murna", audio: "yaya.mp3" },
        { id: 32, word: "complete", both: "Gama: complete", meaning: "gama", audio: "gama.mp3" },
        { id: 33, word: "conceive", both: "Dau ciki: conceive", meaning: "dau ciki", audio: "dauc.mp3" },
        { id: 34, word: "climb", both: "Hau: climb", meaning: "hau", audio: "hau.mp3" },
        { id: 35, word: "beautiful", both: "Kyakkyawa: beautiful", meaning: "kyakkyawa", audio: "kyak.mp3" },
        { id: 36, word: "bag", both: "Jaka: bag", meaning: "jaka", audio: "jaka.mp3" },
        { id: 37, word: "back", both: "Baya: back", meaning: "baya", audio: "baya.mp3" },
        { id: 38, word: "affection", both: "Kauna: affection", meaning: "kauna", audio: "kaun.mp3" },
        { id: 39, word: "afraid", both: "Soro: afraid", meaning: "soro", audio: "soro.mp3" },
        { id: 40, word: "advice", both: "Shawara: advice", meaning: "shawara", audio: "shaw.mp3" },
        { id: 41, word: "admit", both: "Yarda, kwantar: admit", meaning: "yarda, kwantar", audio: "yard.mp3" },
        { id: 42, word: "above", both: "Bisa: above", meaning: "bisa", audio: "bisa.mp3" },
        { id: 43, word: "dry", both: "Bushe: dry", meaning: "bushe", audio: "bush.mp3" },
        { id: 44, word: "dust off", both: "Kakkabe: dust off", meaning: "kakkabe", audio: "kakk.mp3" },
        { id: 45, word: "early", both: "Da wuri: early", meaning: "da wuri", audio: "dawu.mp3" },
        { id: 46, word: "errand", both: "Hidima, Aike: errand", meaning: "hidima, aike", audio: "hidi.mp3" },
        { id: 47, word: "end", both: "Karshe: end", meaning: "karshe", audio: "kars.mp3" },
        { id: 48, word: "evil", both: "Mugunta, sharri: evil", meaning: "mugunta, sharri", audio: "mugu.mp3" },
        { id: 49, word: "exceed", both: "Shige: exceed", meaning: "shige", audio: "shig.mp3" },
        { id: 50, word: "except for", both: "Banda: except for", meaning: "banda", audio: "band.mp3" },
        { id: 51, word: "get ready", both: "Ka shirya: get ready", meaning: "ka shirya", audio: "kash.mp3" },
        { id: 52, word: "gospel", both: "Bishara, Linjila: gospel", meaning: "bishara, linjila", audio: "bish.mp3" }           
]);

await db.insert(schema.YorubaDictionary).values([
        { id: 1, word: "greed", both: "Ojukokoro: greed", meaning: "ojukokoro", audio: "ojuk.mp3" },
        { id: 2, word: "bring", both: "Mú wá: bring", meaning: "mú wá", audio: "muwa.mp3" },
        { id: 3, word: "find", both: "Wá: find", meaning: "wá", audio: "wa.mp3" },
        { id: 4, word: "wound", both: "Ipalara: wound", meaning: "ipalara", audio: "ipal.mp3" },
        { id: 5, word: "suffer", both: "Jìyà: suffer", meaning: "jìyà", audio: "jiya.mp3" },
        { id: 6, word: "word", both: "Ọ̀rọ̀: word", meaning: "ọ̀rọ̀", audio: "oro.mp3" },
        { id: 7, word: "university", both: "Yunifásítì: university", meaning: "yunifásítì", audio: "yunif.mp3" },
        { id: 8, word: "hero", both: "Akikanjú: hero", meaning: "akikanjú", audio: "akik.mp3" },
        { id: 9, word: "heroine", both: "Obìnrin akikanjú: heroine", meaning: "obìnrin akikanjú", audio: "obin.mp3" },
        { id: 10, word: "blood", both: "Ẹ̀jẹ̀: blood", meaning: "ẹ̀jẹ̀", audio: "eje.mp3" },
        { id: 11, word: "write", both: "Kọ: write", meaning: "kọ", audio: "ko.mp3" },
        { id: 12, word: "weep", both: "Sunkún: weep", meaning: "sunkún", audio: "sunk.mp3" },
        { id: 13, word: "weeping", both: "Ìsunkún: weeping", meaning: "ìsunkún", audio: "isun.mp3" },
        { id: 14, word: "weak", both: "Aláìlàgbára: weak", meaning: "aláìlàgbára", audio: "alail.mp3" },
        { id: 15, word: "knife", both: "Òbẹ̀: knife", meaning: "òbẹ̀", audio: "obe.mp3" },
        { id: 16, word: "wash clothes", both: "Fọ aṣọ: wash clothes", meaning: "fọ aṣọ", audio: "foas.mp3" },
        { id: 17, word: "wake up", both: "Jí: wake up", meaning: "jí", audio: "ji.mp3" },
        { id: 18, word: "wait for", both: "Dúró de: wait for", meaning: "dúró de", audio: "duro.mp3" },
        { id: 19, word: "vomit", both: "Bee: vomit", meaning: "bee", audio: "bee.mp3" },
        { id: 20, word: "visitor", both: "Àbẹ̀wò: visitor", meaning: "àbẹ̀wò", audio: "abew.mp3" },
        { id: 21, word: "urine", both: "Ìdọ̀tí omi: urine", meaning: "ìdọ̀tí omi", audio: "idot.mp3" },
        { id: 22, word: "urinate", both: "Ṣe ìdọ̀tí: urinate", meaning: "ṣe ìdọ̀tí", audio: "seid.mp3" },
        { id: 23, word: "usefulness", both: "Ìlò rere: usefulness", meaning: "ìlò rere", audio: "ilor.mp3" },
        { id: 24, word: "underneath/underside", both: "Ní isalẹ: underneath/underside", meaning: "ní isalẹ", audio: "nisa.mp3" },
        { id: 25, word: "turn off", both: "Pa: turn off", meaning: "pa", audio: "pa.mp3" },
        { id: 26, word: "truth", both: "Òtítọ́: truth", meaning: "òtítọ́", audio: "otit.mp3" },
        { id: 27, word: "thief", both: "Òle: thief", meaning: "òle", audio: "ole.mp3" },
        { id: 28, word: "tear", both: "Yà: tear", meaning: "yà", audio: "ya.mp3" },
        { id: 29, word: "congratulate", both: "Kí oriire: congratulate", meaning: "kí oriire", audio: "kior.mp3" },
        { id: 30, word: "complete", both: "Parí: complete", meaning: "parí", audio: "pari.mp3" },
        { id: 31, word: "conceive", both: "Loyun: conceive", meaning: "loyun", audio: "loyu.mp3" },
        { id: 32, word: "climb", both: "Gùn: climb", meaning: "gùn", audio: "gun.mp3" },
        { id: 33, word: "beautiful", both: "Ẹwà: beautiful", meaning: "ẹwà", audio: "ewa.mp3" },
        { id: 34, word: "bag", both: "Àpò: bag", meaning: "àpò", audio: "apo.mp3" },
        { id: 35, word: "back", both: "Ẹ̀hìn: back", meaning: "ẹ̀hìn", audio: "ehin.mp3" },
        { id: 36, word: "affection", both: "Ìfẹ́: affection", meaning: "ìfẹ́", audio: "ife.mp3" },
        { id: 37, word: "afraid", both: "Bẹ̀rù: afraid", meaning: "bẹ̀rù", audio: "beru.mp3" },
        { id: 38, word: "advice", both: "Ìmọ̀ràn: advice", meaning: "ìmọ̀ràn", audio: "imor.mp3" },
        { id: 39, word: "admit", both: "Gba wọlé: admit", meaning: "gba wọlé", audio: "gbaw.mp3" },
        { id: 40, word: "above", both: "Lókè: above", meaning: "lókè", audio: "loke.mp3" },
        { id: 41, word: "dry", both: "Gbígbẹ: dry", meaning: "gbígbẹ", audio: "gbig.mp3" },
        { id: 42, word: "dust off", both: "Gbon danu: dust off", meaning: "gbon danu", audio: "gbod.mp3" },
        { id: 43, word: "early", both: "Ní kutukutu: early", meaning: "ní kutukutu", audio: "niku.mp3" },
        { id: 44, word: "errand", both: "Ìṣẹ̀: errand", meaning: "ìṣẹ̀", audio: "ise.mp3" },
        { id: 45, word: "end", both: "Òpin: end", meaning: "òpin", audio: "opin.mp3" },
        { id: 46, word: "evil", both: "Ibi: evil", meaning: "ibi", audio: "ibi.mp3" },
        { id: 47, word: "exceed", both: "Kọjá: exceed", meaning: "kọjá", audio: "koja.mp3" },
        { id: 48, word: "except for", both: "Yàtọ̀ sí: except for", meaning: "yàtọ̀ sí", audio: "yato.mp3" },
        { id: 49, word: "get ready", both: "Mura: get ready", meaning: "mura", audio: "mura.mp3" },
        { id: 50, word: "gospel", both: "Ìhìnrere: gospel", meaning: "ìhìnrere", audio: "ihin.mp3" }         
]);

console.log ("Seeding dictionary finished");
} catch (error) {
console.error(error);
throw new Error("Failed to seed the dictionary database");
}
};

main();