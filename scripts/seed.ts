import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http"; 
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL! );

const db = drizzle(sql, { schema });

const main = async () => {
try {
console.log("Seeding database");

await db.delete(schema.courses);
await db.delete (schema.userProgress);
await db.delete(schema.units);
await db.delete(schema.lessons);
await db.delete(schema.challenges);
await db.delete(schema.challengeOptions); 
await db.delete(schema.challengeProgress);
await db.delete (schema.userSubscription);

await db.insert(schema.courses).values([
   {
   id: 1,
   title: "Igbo",
   imageSrc: "/ig.jpg",
   },
   {
   id: 2, 
   title: "Hausa", 
   imageSrc: "/hp.png",
   },
   {
   id: 3, 
   title: "Yoruba", 
   imageSrc: "/yr.jpg",
   },
   {
   id: 4, 
   title: "Pidgin", 
   imageSrc: "/pg.png",
   },
]);

// Units for all languages (3 modules each with 5 lessons)
await db.insert(schema.units).values([
   // Igbo
   {
   id: 1,
   courseId: 1,
   title: "Module 1",
   description: "Basic communication skills", 
   order: 1,
   },
   {
   id: 2,
   courseId: 1,
   title: "Module 2",
   description: "Intermediate communication skills", 
   order: 2,
   },
   {
   id: 3,
   courseId: 1,
   title: "Module 3",
   description: "Advanced communication skills", 
   order: 3,
   },

   // Hausa
   {
   id: 4,
   courseId: 2,
   title: "Module 1",
   description: "Basic communication skills", 
   order: 1,
   },
   {
   id: 5,
   courseId: 2,
   title: "Module 2",
   description: "Intermediate communication skills", 
   order: 2,
   },
   {
   id: 6,
   courseId: 2,
   title: "Module 3",
   description: "Advanced communication skills", 
   order: 3,
   },

   // Yoruba
   {
   id: 7,
   courseId: 3,
   title: "Module 1",
   description: "Basic communication skills", 
   order: 1,
   },
   {
   id: 8,
   courseId: 3,
   title: "Module 2",
   description: "Intermediate communication skills", 
   order: 2,
   },
   {
   id: 9,
   courseId: 3,
   title: "Module 3",
   description: "Advanced communication skills", 
   order: 3,
   },

   // Pidgin
   {
   id: 10,
   courseId: 4,
   title: "Module 1",
   description: "Basic communication skills", 
   order: 1,
   },
   {
   id: 11,
   courseId: 4,
   title: "Module 2",
   description: "Intermediate communication skills", 
   order: 2,
   },
   {
   id: 12,
   courseId: 4,
   title: "Module 3",
   description: "Advanced communication skills", 
   order: 3,
   },
]);

// Lessons for all languages (15 lessons total for each language)
await db.insert(schema.lessons).values([
   // Igbo Lessons (Module 1, 2, 3)
   {
   id: 1,
   unitId: 1, 
   order: 1, 
   title: "Lesson 1"
   },
   {
   id: 2,
   unitId: 1, 
   order: 2, 
   title: "Lesson 2"
   },
   {
   id: 3,
   unitId: 1, 
   order: 3, 
   title: "Lesson 3"
   },
   {
   id: 4,
   unitId: 1, 
   order: 4, 
   title: "Lesson 4"
   },
   {
   id: 5,
   unitId: 1, 
   order: 5, 
   title: "Lesson 5"
   },

   // Module 2 (Igbo) - Lessons 6-10
   {
   id: 6,
   unitId: 2, 
   order: 1, 
   title: "Lesson 6"
   },
   {
   id: 7,
   unitId: 2, 
   order: 2, 
   title: "Lesson 7"
   },
   {
   id: 8,
   unitId: 2, 
   order: 3, 
   title: "Lesson 8"
   },
   {
   id: 9,
   unitId: 2, 
   order: 4, 
   title: "Lesson 9"
   },
   {
   id: 10,
   unitId: 2, 
   order: 5, 
   title: "Lesson 10"
   },

   // Module 3 (Igbo) - Lessons 11-15
   {
   id: 11,
   unitId: 3, 
   order: 1, 
   title: "Lesson 11"
   },
   {
   id: 12,
   unitId: 3, 
   order: 2, 
   title: "Lesson 12"
   },
   {
   id: 13,
   unitId: 3, 
   order: 3, 
   title: "Lesson 13"
   },
   {
   id: 14,
   unitId: 3, 
   order: 4, 
   title: "Lesson 14"
   },
   {
   id: 15,
   unitId: 3, 
   order: 5, 
   title: "Lesson 15"
   },

   // Hausa Lessons (Module 1, 2, 3)
   {
   id: 16,
   unitId: 4, 
   order: 1, 
   title: "Lesson 1"
   },
   {
   id: 17,
   unitId: 4, 
   order: 2, 
   title: "Lesson 2"
   },
   {
   id: 18,
   unitId: 4, 
   order: 3, 
   title: "Lesson 3"
   },
   {
   id: 19,
   unitId: 4, 
   order: 4, 
   title: "Lesson 4"
   },
   {
   id: 20,
   unitId: 4, 
   order: 5, 
   title: "Lesson 5"
   },

   // Module 2 (Hausa) - Lessons 6-10
   {
   id: 21,
   unitId: 5, 
   order: 1, 
   title: "Lesson 6"
   },
   {
   id: 22,
   unitId: 5, 
   order: 2, 
   title: "Lesson 7"
   },
   {
   id: 23,
   unitId: 5, 
   order: 3, 
   title: "Lesson 8"
   },
   {
   id: 24,
   unitId: 5, 
   order: 4, 
   title: "Lesson 9"
   },
   {
   id: 25,
   unitId: 5, 
   order: 5, 
   title: "Lesson 10"
   },

   // Module 3 (Hausa) - Lessons 11-15
   {
   id: 26,
   unitId: 6, 
   order: 1, 
   title: "Lesson 11"
   },
   {
   id: 27,
   unitId: 6, 
   order: 2, 
   title: "Lesson 12"
   },
   {
   id: 28,
   unitId: 6, 
   order: 3, 
   title: "Lesson 13"
   },
   {
   id: 29,
   unitId: 6, 
   order: 4, 
   title: "Lesson 14"
   },
   {
   id: 30,
   unitId: 6, 
   order: 5, 
   title: "Lesson 15"
   },

   // Yoruba Lessons (Module 1, 2, 3)
   {
   id: 31,
   unitId: 7, 
   order: 1, 
   title: "Lesson 1"
   },
   {
   id: 32,
   unitId: 7, 
   order: 2, 
   title: "Lesson 2"
   },
   {
   id: 33,
   unitId: 7, 
   order: 3, 
   title: "Lesson 3"
   },
   {
   id: 34,
   unitId: 7, 
   order: 4, 
   title: "Lesson 4"
   },
   {
   id: 35,
   unitId: 7, 
   order: 5, 
   title: "Lesson 5"
   },

   // Module 2 (Yoruba) - Lessons 6-10
   {
   id: 36,
   unitId: 8, 
   order: 1, 
   title: "Lesson 6"
   },
   {
   id: 37,
   unitId: 8, 
   order: 2, 
   title: "Lesson 7"
   },
   {
   id: 38,
   unitId: 8, 
   order: 3, 
   title: "Lesson 8"
   },
   {
   id: 39,
   unitId: 8, 
   order: 4, 
   title: "Lesson 9"
   },
   {
   id: 40,
   unitId: 8, 
   order: 5, 
   title: "Lesson 10"
   },

   // Module 3 (Yoruba) - Lessons 11-15
   {
   id: 41,
   unitId: 9, 
   order: 1, 
   title: "Lesson 11"
   },
   {
   id: 42,
   unitId: 9, 
   order: 2, 
   title: "Lesson 12"
   },
   {
   id: 43,
   unitId: 9, 
   order: 3, 
   title: "Lesson 13"
   },
   {
   id: 44,
   unitId: 9, 
   order: 4, 
   title: "Lesson 14"
   },
   {
   id: 45,
   unitId: 9, 
   order: 5, 
   title: "Lesson 15"
   },

   // Pidgin Lessons (Module 1, 2, 3)
   {
   id: 46,
   unitId: 10, 
   order: 1, 
   title: "Lesson 1"
   },
   {
   id: 47,
   unitId: 10, 
   order: 2, 
   title: "Lesson 2"
   },
   {
   id: 48,
   unitId: 10, 
   order: 3, 
   title: "Lesson 3"
   },
   {
   id: 49,
   unitId: 10, 
   order: 4, 
   title: "Lesson 4"
   },
   {
   id: 50,
   unitId: 10, 
   order: 5, 
   title: "Lesson 5"
   },

   // Module 2 (Pidgin) - Lessons 6-10
   {
   id: 51,
   unitId: 11, 
   order: 1, 
   title: "Lesson 6"
   },
   {
   id: 52,
   unitId: 11, 
   order: 2, 
   title: "Lesson 7"
   },
   {
   id: 53,
   unitId: 11, 
   order: 3, 
   title: "Lesson 8"
   },
   {
   id: 54,
   unitId: 11, 
   order: 4, 
   title: "Lesson 9"
   },
   {
   id: 55,
   unitId: 11, 
   order: 5, 
   title: "Lesson 10"
   },

   // Module 3 (Pidgin) - Lessons 11-15
   {
   id: 56,
   unitId: 12, 
   order: 1, 
   title: "Lesson 11"
   },
   {
   id: 57,
   unitId: 12, 
   order: 2, 
   title: "Lesson 12"
   },
   {
   id: 58,
   unitId: 12, 
   order: 3, 
   title: "Lesson 13"
   },
   {
   id: 59,
   unitId: 12, 
   order: 4, 
   title: "Lesson 14"
   },
   {
   id: 60,
   unitId: 12, 
   order: 5, 
   title: "Lesson 15"
   },
]);

await db.insert(schema.challenges).values([
   { id: 1, lessonId: 31, type: "SELECT", order: 1, question: "How are you?" },
   { id: 2, lessonId: 31, type: "SELECT", order: 2, question: "I am okay." },
   { id: 3, lessonId: 31, type: "SELECT", order: 3, question: "What is your name?" },
   { id: 4, lessonId: 31, type: "SELECT", order: 4, question: "My name is Feranmi." },
   { id: 5, lessonId: 31, type: "SELECT", order: 5, question: "I am from Nigeria." },
   { id: 6, lessonId: 31, type: "SELECT", order: 6, question: "What about you?" },
   { id: 7, lessonId: 31, type: "SELECT", order: 7, question: "No." },
   { id: 8, lessonId: 31, type: "SELECT", order: 8, question: "Yes." },
   { id: 9, lessonId: 31, type: "SELECT", order: 9, question: "Thank you." },
   { id: 10, lessonId: 31, type: "SELECT", order: 10, question: "You’re welcome." },
   { id: 11, lessonId: 31, type: "SELECT", order: 11, question: "Sorry." },
   { id: 12, lessonId: 31, type: "SELECT", order: 12, question: "Thank you so much." },
   { id: 13, lessonId: 32, type: "SELECT", order: 13, question: "Do you speak Yoruba?" },
   { id: 14, lessonId: 32, type: "SELECT", order: 14, question: "Just a little." },
   { id: 15, lessonId: 32, type: "SELECT", order: 15, question: "I like Yoruba." },
   { id: 16, lessonId: 32, type: "SELECT", order: 16, question: "Can I practice with you?" },
   { id: 17, lessonId: 32, type: "SELECT", order: 17, question: "How old are you?" },
   { id: 18, lessonId: 32, type: "SELECT", order: 18, question: "I am thirty-five years old." },
   { id: 19, lessonId: 32, type: "SELECT", order: 19, question: "I am talking to you." },
   { id: 20, lessonId: 32, type: "SELECT", order: 20, question: "What is this?" },
   { id: 21, lessonId: 32, type: "SELECT", order: 21, question: "What does that mean?" },
   { id: 22, lessonId: 32, type: "SELECT", order: 22, question: "Where are you?" },
   { id: 23, lessonId: 32, type: "SELECT", order: 23, question: "I love you." },
   { id: 24, lessonId: 32, type: "SELECT", order: 24, question: "Where do you live?" },
   { id: 25, lessonId: 32, type: "SELECT", order: 25, question: "That’s beautiful." },
   { id: 26, lessonId: 32, type: "SELECT", order: 26, question: "She is beautiful." },
   { id: 27, lessonId: 32, type: "SELECT", order: 27, question: "I live in the USA." },
   { id: 28, lessonId: 33, type: "SELECT", order: 28, question: "They are dancing." },
   { id: 29, lessonId: 33, type: "SELECT", order: 29, question: "What do you mean?" },
   { id: 30, lessonId: 33, type: "SELECT", order: 30, question: "Speak to me." },
   { id: 31, lessonId: 33, type: "SELECT", order: 31, question: "I love you too." },
   { id: 32, lessonId: 33, type: "SELECT", order: 32, question: "It is not like that." },
   { id: 33, lessonId: 33, type: "SELECT", order: 33, question: "Where are you going?" },
   { id: 34, lessonId: 33, type: "SELECT", order: 34, question: "Come back here." },
   { id: 35, lessonId: 33, type: "SELECT", order: 35, question: "Are you alone?" },
   { id: 36, lessonId: 33, type: "SELECT", order: 36, question: "Let us go." },
   { id: 37, lessonId: 33, type: "SELECT", order: 37, question: "I know." },
   { id: 38, lessonId: 33, type: "SELECT", order: 38, question: "Exactly." },
   { id: 39, lessonId: 33, type: "SELECT", order: 39, question: "You’re correct." },
   { id: 40, lessonId: 33, type: "SELECT", order: 40, question: "You’re not correct." },
   { id: 41, lessonId: 33, type: "SELECT", order: 41, question: "That’s beautiful." },
   { id: 42, lessonId: 33, type: "SELECT", order: 42, question: "Do you know?" },
     // Yoruba Lesson 4
  { id: 43, lessonId: 34, type: "SELECT", order: 43, question: "I want to buy." },
  { id: 44, lessonId: 34, type: "SELECT", order: 44, question: "What do you want to buy?" },
  { id: 45, lessonId: 34, type: "SELECT", order: 45, question: "Yam." },
  { id: 46, lessonId: 34, type: "SELECT", order: 46, question: "How much?" },
  { id: 47, lessonId: 34, type: "SELECT", order: 47, question: "1000 Naira worth of yam." },
  { id: 48, lessonId: 34, type: "SELECT", order: 48, question: "I am coming." },
  { id: 49, lessonId: 34, type: "SELECT", order: 49, question: "I am sorry." },
  { id: 50, lessonId: 34, type: "SELECT", order: 50, question: "It is not available." },
  { id: 51, lessonId: 34, type: "SELECT", order: 51, question: "Come back." },
  { id: 52, lessonId: 34, type: "SELECT", order: 52, question: "I have heard you." },
  { id: 53, lessonId: 34, type: "SELECT", order: 53, question: "At what time?" },
  { id: 54, lessonId: 34, type: "SELECT", order: 54, question: "In the afternoon." },
  { id: 55, lessonId: 34, type: "SELECT", order: 55, question: "I will come." },
  { id: 56, lessonId: 34, type: "SELECT", order: 56, question: "I am going." },
  { id: 57, lessonId: 34, type: "SELECT", order: 57, question: "What do you say?" },

  // Yoruba Lesson 5
  { id: 58, lessonId: 35, type: "SELECT", order: 58, question: "Where are you going?" },
  { id: 59, lessonId: 35, type: "SELECT", order: 59, question: "I am going to Nicon Town." },
  { id: 60, lessonId: 35, type: "SELECT", order: 60, question: "Come inside." },
  { id: 61, lessonId: 35, type: "SELECT", order: 61, question: "Sit at the back." },
  { id: 62, lessonId: 35, type: "SELECT", order: 62, question: "Where are there?" },
  { id: 63, lessonId: 35, type: "SELECT", order: 63, question: "Alight here." },
  { id: 64, lessonId: 35, type: "SELECT", order: 64, question: "Collect your money." },
  { id: 65, lessonId: 35, type: "SELECT", order: 65, question: "Good Afternoon." },
  { id: 66, lessonId: 35, type: "SELECT", order: 66, question: "Welcome." },
  { id: 67, lessonId: 35, type: "SELECT", order: 67, question: "Switch on the light." },
  { id: 68, lessonId: 35, type: "SELECT", order: 68, question: "What do you want to eat?" },
  { id: 69, lessonId: 35, type: "SELECT", order: 69, question: "Do you have water?" },
  { id: 70, lessonId: 35, type: "SELECT", order: 70, question: "Thank you." },
  { id: 71, lessonId: 35, type: "SELECT", order: 71, question: "Goodbye." },

  { id: 72, lessonId: 36, type: "SELECT", order: 72, question: "Thank you very much, Marci" },
  { id: 73, lessonId: 36, type: "SELECT", order: 73, question: "Morning" },
  { id: 74, lessonId: 36, type: "SELECT", order: 74, question: "Good morning" },
  { id: 75, lessonId: 36, type: "SELECT", order: 75, question: "Good afternoon" },
  { id: 76, lessonId: 36, type: "SELECT", order: 76, question: "Welcome" },
  { id: 77, lessonId: 36, type: "SELECT", order: 77, question: "See" },
  { id: 78, lessonId: 36, type: "SELECT", order: 78, question: "Very good" },
  { id: 79, lessonId: 36, type: "SELECT", order: 79, question: "Hello/hi" },
  { id: 80, lessonId: 36, type: "SELECT", order: 80, question: "Bye" },
  { id: 81, lessonId: 36, type: "SELECT", order: 81, question: "How are you doing?" },
  { id: 82, lessonId: 36, type: "SELECT", order: 82, question: "Have a good day" },
  { id: 83, lessonId: 36, type: "SELECT", order: 83, question: "Good night" },
  { id: 84, lessonId: 36, type: "SELECT", order: 84, question: "Goodbye, see you tomorrow" },
  { id: 85, lessonId: 36, type: "SELECT", order: 85, question: "Goodbye" },
  { id: 86, lessonId: 36, type: "SELECT", order: 86, question: "Have a good night rest" },
  { id: 87, lessonId: 37, type: "SELECT", order: 87, question: "Good evening, Paul" },
  { id: 88, lessonId: 37, type: "SELECT", order: 88, question: "Good morning" },
  { id: 89, lessonId: 37, type: "SELECT", order: 89, question: "Afternoon" },
  { id: 90, lessonId: 37, type: "SELECT", order: 90, question: "Alẹ́ (in native language)" },
  { id: 91, lessonId: 37, type: "SELECT", order: 91, question: "See you tomorrow" },
  { id: 92, lessonId: 37, type: "SELECT", order: 92, question: "Goodbye" },
  { id: 93, lessonId: 37, type: "SELECT", order: 93, question: "Ẹ káàbọ̀ (in native language)" },
  { id: 94, lessonId: 37, type: "SELECT", order: 94, question: "How are you?" },
  { id: 95, lessonId: 37, type: "SELECT", order: 95, question: "Well done" },
  { id: 96, lessonId: 37, type: "SELECT", order: 96, question: "Goodbye" },
  { id: 97, lessonId: 37, type: "SELECT", order: 97, question: "Welcome" },
  { id: 98, lessonId: 37, type: "SELECT", order: 98, question: "You" },
  { id: 99, lessonId: 37, type: "SELECT", order: 99, question: "Thank you" },
  { id: 100, lessonId: 37, type: "SELECT", order: 100, question: "Tomorrow" },
  { id: 101, lessonId: 37, type: "SELECT", order: 101, question: "Sleep" },
  { id: 102, lessonId: 38, type: "SELECT", order: 102, question: "Good morning, Paul" },
  { id: 103, lessonId: 38, type: "SELECT", order: 103, question: "Alright, see you tomorrow" },
  { id: 104, lessonId: 38, type: "SELECT", order: 104, question: "See you soon" },
  { id: 105, lessonId: 38, type: "SELECT", order: 105, question: "Goodbye, see you tomorrow" },
  { id: 106, lessonId: 38, type: "SELECT", order: 106, question: "Hello" },
  { id: 107, lessonId: 38, type: "SELECT", order: 107, question: "How are you doing?" },
  { id: 108, lessonId: 38, type: "SELECT", order: 108, question: "Good afternoon" },
  { id: 109, lessonId: 38, type: "SELECT", order: 109, question: "Thank you" },
  { id: 110, lessonId: 38, type: "SELECT", order: 110, question: "Did you sleep well?" },
  { id: 111, lessonId: 38, type: "SELECT", order: 111, question: "Good night" },
  { id: 112, lessonId: 38, type: "SELECT", order: 112, question: "I am doing very well" },
  { id: 113, lessonId: 38, type: "SELECT", order: 113, question: "Yes" },
  { id: 114, lessonId: 38, type: "SELECT", order: 114, question: "Hello Paul, how are you?" },
  { id: 115, lessonId: 38, type: "SELECT", order: 115, question: "Yes, thank you" },
  { id: 116, lessonId: 38, type: "SELECT", order: 116, question: "Did you sleep well?" },
   { id: 117, lessonId: 39, type: "SELECT", order: 117, question: "Hello Paul, how are you?" },
   { id: 118, lessonId: 39, type: "SELECT", order: 118, question: "Good" },
   { id: 119, lessonId: 39, type: "SELECT", order: 119, question: "Good morning, how are you doing?" },
   { id: 120, lessonId: 39, type: "SELECT", order: 120, question: "I am doing very well, and you?" },
   { id: 121, lessonId: 39, type: "SELECT", order: 121, question: "Good evening, how are you doing?" },
   { id: 122, lessonId: 39, type: "SELECT", order: 122, question: "I am Paul, and you are?" },
   { id: 123, lessonId: 39, type: "SELECT", order: 123, question: "Hi, how are you?" },
   { id: 124, lessonId: 39, type: "SELECT", order: 124, question: "I am doing very well, thank you" },
   { id: 125, lessonId: 39, type: "SELECT", order: 125, question: "I’m doing very well" },
   { id: 126, lessonId: 39, type: "SELECT", order: 126, question: "How are you?" },
   { id: 127, lessonId: 39, type: "SELECT", order: 127, question: "Good evening, I missed you" },
   { id: 128, lessonId: 39, type: "SELECT", order: 128, question: "Good" },
   { id: 129, lessonId: 39, type: "SELECT", order: 129, question: "I am your friend" },
   { id: 130, lessonId: 39, type: "SELECT", order: 130, question: "Goodbye" },
   { id: 131, lessonId: 39, type: "SELECT", order: 131, question: "I am Paul" },
   { id: 132, lessonId: 40, type: "SELECT", order: 132, question: "Have a good evening" },
   { id: 133, lessonId: 40, type: "SELECT", order: 133, question: "Yes, I am doing very well" },
   { id: 134, lessonId: 40, type: "SELECT", order: 134, question: "Yes, and you" },
   { id: 135, lessonId: 40, type: "SELECT", order: 135, question: "Did you sleep well?" },
   { id: 136, lessonId: 40, type: "SELECT", order: 136, question: "Are you awake?" },
   { id: 137, lessonId: 40, type: "SELECT", order: 137, question: "You are welcome" },
   { id: 138, lessonId: 40, type: "SELECT", order: 138, question: "See you soon" },
   { id: 139, lessonId: 40, type: "SELECT", order: 139, question: "Yes, I will travel by air" },
   { id: 140, lessonId: 40, type: "SELECT", order: 140, question: "Did you just wake up?" },
   { id: 141, lessonId: 40, type: "SELECT", order: 141, question: "I am sorry" },
   { id: 142, lessonId: 40, type: "SELECT", order: 142, question: "I am waiting for you" },
   { id: 143, lessonId: 40, type: "SELECT", order: 143, question: "Have a good night rest" },
   { id: 144, lessonId: 40, type: "SELECT", order: 144, question: "I am driving the car" },
   { id: 145, lessonId: 40, type: "SELECT", order: 145, question: "How is your day going?" },
   { id: 146, lessonId: 40, type: "SELECT", order: 146, question: "We thank God" },
      { id: 147, lessonId: 41, type: "SELECT", order: 147, question: "I speak Yoruba" },
      { id: 148, lessonId: 41, type: "SELECT", order: 148, question: "Excuse me, do you speak Yoruba/Ibo/Hausa/Pidgin?" },
      { id: 149, lessonId: 41, type: "SELECT", order: 149, question: "No, I’m Yoruba/Ibo/Hausa/Pidgin, I speak Yoruba/Ibo/Pidgin/Hausa" },
      { id: 150, lessonId: 41, type: "SELECT", order: 150, question: "I need a cab" },
      { id: 151, lessonId: 41, type: "SELECT", order: 151, question: "Where does one get a cab?" },
      { id: 152, lessonId: 41, type: "SELECT", order: 152, question: "I am a Nigerian" },
      { id: 153, lessonId: 41, type: "SELECT", order: 153, question: "What is your name?" },
      { id: 154, lessonId: 41, type: "SELECT", order: 154, question: "His name is Feranmi" },
      { id: 155, lessonId: 41, type: "SELECT", order: 155, question: "Are you Yoruba/Ibo/Hausa/Pidgin?" },
      { id: 156, lessonId: 41, type: "SELECT", order: 156, question: "My name is David" },
      { id: 157, lessonId: 41, type: "SELECT", order: 157, question: "No, I am Yoruba" },
      { id: 158, lessonId: 41, type: "SELECT", order: 158, question: "I am visiting Nigeria" },
      { id: 159, lessonId: 41, type: "SELECT", order: 159, question: "I will be staying for a week" },
      { id: 160, lessonId: 41, type: "SELECT", order: 160, question: "I am staying at the hotel" },
      { id: 161, lessonId: 41, type: "SELECT", order: 161, question: "I am alone" },
         { id: 162, lessonId: 42, type: "SELECT", order: 162, question: "What do you do for a living?" },
         { id: 163, lessonId: 42, type: "SELECT", order: 163, question: "Where are you from?" },
         { id: 164, lessonId: 42, type: "SELECT", order: 164, question: "Do you have children?" },
         { id: 165, lessonId: 42, type: "SELECT", order: 165, question: "Have you been to Nigeria?" },
         { id: 166, lessonId: 42, type: "SELECT", order: 166, question: "I am enjoying my visit" },
         { id: 167, lessonId: 42, type: "SELECT", order: 167, question: "I want to see the beach" },
         { id: 168, lessonId: 42, type: "SELECT", order: 168, question: "Come to my house" },
         { id: 169, lessonId: 42, type: "SELECT", order: 169, question: "My wife is Nigerian" },
         { id: 170, lessonId: 42, type: "SELECT", order: 170, question: "Greet your family" },
         { id: 171, lessonId: 42, type: "SELECT", order: 171, question: "I want to visit the market" },
         { id: 172, lessonId: 42, type: "SELECT", order: 172, question: "Where is the cinema?" },
         { id: 173, lessonId: 42, type: "SELECT", order: 173, question: "Excuse me" },
         { id: 174, lessonId: 42, type: "SELECT", order: 174, question: "Come let us eat" },
         { id: 175, lessonId: 42, type: "SELECT", order: 175, question: "I am tired" },
         { id: 176, lessonId: 42, type: "SELECT", order: 176, question: "I am happy to be here" },
            { id: 177, lessonId: 43, type: "SELECT", order: 177, question: "Aunty is at church" },
            { id: 178, lessonId: 43, type: "SELECT", order: 178, question: "He speaks Yoruba" },
            { id: 179, lessonId: 43, type: "SELECT", order: 179, question: "I speak Yoruba and Igbo" },
            { id: 180, lessonId: 43, type: "SELECT", order: 180, question: "Incredible! My name is Sari" },
            { id: 181, lessonId: 43, type: "SELECT", order: 181, question: "Feranmi speaks Igbo and Yoruba" },
            { id: 182, lessonId: 43, type: "SELECT", order: 182, question: "You speak Yoruba" },
            { id: 183, lessonId: 43, type: "SELECT", order: 183, question: "They speak Hausa" },
            { id: 184, lessonId: 43, type: "SELECT", order: 184, question: "He is Yoruba" },
            { id: 185, lessonId: 43, type: "SELECT", order: 185, question: "She is Igbo" },
            { id: 186, lessonId: 43, type: "SELECT", order: 186, question: "My husband is out" },
            { id: 187, lessonId: 43, type: "SELECT", order: 187, question: "Her daughter is a teacher" },
            { id: 188, lessonId: 43, type: "SELECT", order: 188, question: "His son is a policeman" },
            { id: 189, lessonId: 43, type: "SELECT", order: 189, question: "My name is Ana" },
            { id: 190, lessonId: 43, type: "SELECT", order: 190, question: "I speak Yoruba/Ibo/Pidgin/Hausa" },
            { id: 191, lessonId: 43, type: "SELECT", order: 191, question: "Greet your family" },
            { id: 192, lessonId: 44, type: "SELECT", order: 192, question: "My house" },
            { id: 193, lessonId: 44, type: "SELECT", order: 193, question: "Speak to my son" },
            { id: 194, lessonId: 44, type: "SELECT", order: 194, question: "Speak to my daughter" },
            { id: 195, lessonId: 44, type: "SELECT", order: 195, question: "They" },
            { id: 196, lessonId: 44, type: "SELECT", order: 196, question: "They are many" },
            { id: 197, lessonId: 44, type: "SELECT", order: 197, question: "He" },
            { id: 198, lessonId: 44, type: "SELECT", order: 198, question: "He is tall" },
            { id: 199, lessonId: 44, type: "SELECT", order: 199, question: "She" },
            { id: 200, lessonId: 44, type: "SELECT", order: 200, question: "She can cook" },
            { id: 201, lessonId: 44, type: "SELECT", order: 201, question: "His" },
            { id: 202, lessonId: 44, type: "SELECT", order: 202, question: "His brother is handsome" },
            { id: 203, lessonId: 44, type: "SELECT", order: 203, question: "Her" },
            { id: 204, lessonId: 44, type: "SELECT", order: 204, question: "Her sister is beautiful" },
            { id: 205, lessonId: 44, type: "SELECT", order: 205, question: "My" },
            { id: 206, lessonId: 44, type: "SELECT", order: 206, question: "My book" },
            { id: 207, lessonId: 45, type: "SELECT", order: 207, question: "We" },
            { id: 208, lessonId: 45, type: "SELECT", order: 208, question: "We are back" },
            { id: 209, lessonId: 45, type: "SELECT", order: 209, question: "Us" },
            { id: 210, lessonId: 45, type: "SELECT", order: 210, question: "Come and join us" },
            { id: 211, lessonId: 45, type: "SELECT", order: 211, question: "Meet my friend" },
            { id: 212, lessonId: 45, type: "SELECT", order: 212, question: "You" },
            { id: 213, lessonId: 45, type: "SELECT", order: 213, question: "Who are you?" },
            { id: 214, lessonId: 45, type: "SELECT", order: 214, question: "They" },
            { id: 215, lessonId: 45, type: "SELECT", order: 215, question: "Who are they?" },
            { id: 216, lessonId: 45, type: "SELECT", order: 216, question: "It is mine" },
            { id: 217, lessonId: 45, type: "SELECT", order: 217, question: "They are mine" },
            { id: 218, lessonId: 45, type: "SELECT", order: 218, question: "Me" },
            { id: 219, lessonId: 45, type: "SELECT", order: 219, question: "Talk to me" },
            { id: 220, lessonId: 45, type: "SELECT", order: 220, question: "You and I" },
            { id: 221, lessonId: 45, type: "SELECT", order: 221, question: "You and I forever" },

//IGBO DAT
{ id: 222, lessonId: 1, type: "SELECT", order: 222, question: "How are you?" },
{ id: 223, lessonId: 1, type: "SELECT", order: 223, question: "I am okay" },
{ id: 224, lessonId: 1, type: "SELECT", order: 224, question: "What is your name?" },
{ id: 225, lessonId: 1, type: "SELECT", order: 225, question: "My name is Ebere" },
{ id: 226, lessonId: 1, type: "SELECT", order: 226, question: "I am from Nigeria" },
{ id: 227, lessonId: 1, type: "SELECT", order: 227, question: "What about you?" },
{ id: 228, lessonId: 1, type: "SELECT", order: 228, question: "No" },
{ id: 229, lessonId: 1, type: "SELECT", order: 229, question: "What did you say?" },
{ id: 230, lessonId: 1, type: "SELECT", order: 230, question: "Say it again" },
{ id: 231, lessonId: 1, type: "SELECT", order: 231, question: "Yes" },
{ id: 232, lessonId: 1, type: "SELECT", order: 232, question: "Thank you" },
{ id: 233, lessonId: 1, type: "SELECT", order: 233, question: "You are welcome" },
{ id: 234, lessonId: 1, type: "SELECT", order: 234, question: "Sorry" },
{ id: 235, lessonId: 1, type: "SELECT", order: 235, question: "Thank you very much" },

{ id: 236, lessonId: 2, type: "SELECT", order: 236, question: "Do you speak Igbo?" },
{ id: 237, lessonId: 2, type: "SELECT", order: 237, question: "Just a little" },
{ id: 238, lessonId: 2, type: "SELECT", order: 238, question: "I love Igbo" },
{ id: 239, lessonId: 2, type: "SELECT", order: 239, question: "Can I practice with you?" },
{ id: 240, lessonId: 2, type: "SELECT", order: 240, question: "How old are you?" },
{ id: 241, lessonId: 2, type: "SELECT", order: 241, question: "I am thirty-five years old" },
{ id: 242, lessonId: 2, type: "SELECT", order: 242, question: "I am talking to you" },
{ id: 243, lessonId: 2, type: "SELECT", order: 243, question: "What is this?" },
{ id: 244, lessonId: 2, type: "SELECT", order: 244, question: "What does that mean?" },
{ id: 245, lessonId: 2, type: "SELECT", order: 245, question: "Where are you?" },
{ id: 246, lessonId: 2, type: "SELECT", order: 246, question: "I love you" },
{ id: 247, lessonId: 2, type: "SELECT", order: 247, question: "Where do you live?" },
{ id: 248, lessonId: 2, type: "SELECT", order: 248, question: "It is good" },
{ id: 249, lessonId: 2, type: "SELECT", order: 249, question: "She is beautiful" },
{ id: 250, lessonId: 2, type: "SELECT", order: 250, question: "I live in the USA" },
{ id: 251, lessonId: 3, type: "SELECT", order: 251, question: "They are dancing" },
{ id: 252, lessonId: 3, type: "SELECT", order: 252, question: "What do you mean?" },
{ id: 253, lessonId: 3, type: "SELECT", order: 253, question: "Speak to me" },
{ id: 254, lessonId: 3, type: "SELECT", order: 254, question: "I love you too" },
{ id: 255, lessonId: 3, type: "SELECT", order: 255, question: "It is not like that" },
{ id: 256, lessonId: 3, type: "SELECT", order: 256, question: "Where are you going?" },
{ id: 257, lessonId: 3, type: "SELECT", order: 257, question: "Come back here" },
{ id: 258, lessonId: 3, type: "SELECT", order: 258, question: "Are you alone?" },
{ id: 259, lessonId: 3, type: "SELECT", order: 259, question: "Let us go" },
{ id: 260, lessonId: 3, type: "SELECT", order: 260, question: "I know" },
{ id: 261, lessonId: 3, type: "SELECT", order: 261, question: "Exactly" },
{ id: 262, lessonId: 3, type: "SELECT", order: 262, question: "You are correct" },
{ id: 263, lessonId: 3, type: "SELECT", order: 263, question: "You are not correct" },
{ id: 264, lessonId: 3, type: "SELECT", order: 264, question: "That's good" },
{ id: 265, lessonId: 3, type: "SELECT", order: 265, question: "Do you know?" },
{ id: 266, lessonId: 4, type: "SELECT", order: 266, question: "I want to buy" },
{ id: 267, lessonId: 4, type: "SELECT", order: 267, question: "What do you want to buy?" },
{ id: 268, lessonId: 4, type: "SELECT", order: 268, question: "Yam" },
{ id: 269, lessonId: 4, type: "SELECT", order: 269, question: "How much?" },
{ id: 270, lessonId: 4, type: "SELECT", order: 270, question: "1000 naira worth of yam" },
{ id: 271, lessonId: 4, type: "SELECT", order: 271, question: "I am coming" },
{ id: 272, lessonId: 4, type: "SELECT", order: 272, question: "Please, I am sorry" },
{ id: 273, lessonId: 4, type: "SELECT", order: 273, question: "It is not available" },
{ id: 274, lessonId: 4, type: "SELECT", order: 274, question: "Come back" },
{ id: 275, lessonId: 4, type: "SELECT", order: 275, question: "I have heard you" },
{ id: 276, lessonId: 4, type: "SELECT", order: 276, question: "At what time?" },
{ id: 277, lessonId: 4, type: "SELECT", order: 277, question: "In the afternoon" },
{ id: 278, lessonId: 4, type: "SELECT", order: 278, question: "I will come" },
{ id: 279, lessonId: 4, type: "SELECT", order: 279, question: "I am going" },
{ id: 280, lessonId: 4, type: "SELECT", order: 280, question: "What do you say?" },
{ id: 281, lessonId: 5, type: "SELECT", order: 281, question: "Where are you going?" },
{ id: 282, lessonId: 5, type: "SELECT", order: 282, question: "I am going to Enugu" },
{ id: 283, lessonId: 5, type: "SELECT", order: 283, question: "Come inside" },
{ id: 284, lessonId: 5, type: "SELECT", order: 284, question: "Sit at the back" },
{ id: 285, lessonId: 5, type: "SELECT", order: 285, question: "Where are they?" },
{ id: 286, lessonId: 5, type: "SELECT", order: 286, question: "Alight here" },
{ id: 287, lessonId: 5, type: "SELECT", order: 287, question: "Collect your money" },
{ id: 288, lessonId: 5, type: "SELECT", order: 288, question: "Good Afternoon" },
{ id: 289, lessonId: 5, type: "SELECT", order: 289, question: "Welcome" },
{ id: 290, lessonId: 5, type: "SELECT", order: 290, question: "Switch on the light" },
{ id: 291, lessonId: 5, type: "SELECT", order: 291, question: "What do you want to eat?" },
{ id: 292, lessonId: 5, type: "SELECT", order: 292, question: "Do you have water?" },
{ id: 293, lessonId: 5, type: "SELECT", order: 293, question: "Thank you" },
{ id: 294, lessonId: 5, type: "SELECT", order: 294, question: "Goodbye" },
{ id: 295, lessonId: 6, type: "SELECT", order: 295, question: "Thank you very much" },
{ id: 296, lessonId: 6, type: "SELECT", order: 296, question: "Morning" },
{ id: 297, lessonId: 6, type: "SELECT", order: 297, question: "Good morning" },
{ id: 298, lessonId: 6, type: "SELECT", order: 298, question: "Night" },
{ id: 299, lessonId: 6, type: "SELECT", order: 299, question: "Welcome" },
{ id: 300, lessonId: 6, type: "SELECT", order: 300, question: "See" },
{ id: 301, lessonId: 6, type: "SELECT", order: 301, question: "Very good" },
{ id: 302, lessonId: 6, type: "SELECT", order: 302, question: "Hello/Hi" },
{ id: 303, lessonId: 6, type: "SELECT", order: 303, question: "Bye" },
{ id: 304, lessonId: 6, type: "SELECT", order: 304, question: "How are you doing?" },
{ id: 305, lessonId: 6, type: "SELECT", order: 305, question: "Have a good day" },
{ id: 306, lessonId: 6, type: "SELECT", order: 306, question: "Goodnight" },
{ id: 307, lessonId: 6, type: "SELECT", order: 307, question: "Goodbye, see you tomorrow" },
{ id: 308, lessonId: 6, type: "SELECT", order: 308, question: "Goodbye" },
{ id: 309, lessonId: 6, type: "SELECT", order: 309, question: "Have a good night rest" },
{ id: 310, lessonId: 7, type: "SELECT", order: 310, question: "Good evening, Emeka" },
{ id: 311, lessonId: 7, type: "SELECT", order: 311, question: "Good morning" },
{ id: 312, lessonId: 7, type: "SELECT", order: 312, question: "Afternoon" },
{ id: 313, lessonId: 7, type: "SELECT", order: 313, question: "Night" },
{ id: 314, lessonId: 7, type: "SELECT", order: 314, question: "See you tomorrow" },
{ id: 315, lessonId: 7, type: "SELECT", order: 315, question: "Goodbye" },
{ id: 316, lessonId: 7, type: "SELECT", order: 316, question: "Have you come?" },
{ id: 317, lessonId: 7, type: "SELECT", order: 317, question: "How are you?" },
{ id: 318, lessonId: 7, type: "SELECT", order: 318, question: "Well done" },
{ id: 319, lessonId: 7, type: "SELECT", order: 319, question: "Goodbye" },
{ id: 320, lessonId: 7, type: "SELECT", order: 320, question: "Welcome" },
{ id: 321, lessonId: 7, type: "SELECT", order: 321, question: "You" },
{ id: 322, lessonId: 7, type: "SELECT", order: 322, question: "Thank-you" },
{ id: 323, lessonId: 7, type: "SELECT", order: 323, question: "Tomorrow" },
{ id: 324, lessonId: 7, type: "SELECT", order: 324, question: "Sleep" },
{ id: 325, lessonId: 8, type: "SELECT", order: 325, question: "Good morning, Emeka" },
{ id: 326, lessonId: 8, type: "SELECT", order: 326, question: "Alright, see you tomorrow" },
{ id: 327, lessonId: 8, type: "SELECT", order: 327, question: "See you soon" },
{ id: 328, lessonId: 8, type: "SELECT", order: 328, question: "Goodbye, see you tomorrow" },
{ id: 329, lessonId: 8, type: "SELECT", order: 329, question: "Hello" },
{ id: 330, lessonId: 8, type: "SELECT", order: 330, question: "How are you doing?" },
{ id: 331, lessonId: 8, type: "SELECT", order: 331, question: "Good afternoon" },
{ id: 332, lessonId: 8, type: "SELECT", order: 332, question: "Thank you" },
{ id: 333, lessonId: 8, type: "SELECT", order: 333, question: "Did you sleep well?" },
{ id: 334, lessonId: 8, type: "SELECT", order: 334, question: "Good night" },
{ id: 335, lessonId: 8, type: "SELECT", order: 335, question: "I am doing very well" },
{ id: 336, lessonId: 8, type: "SELECT", order: 336, question: "Yes" },
{ id: 337, lessonId: 8, type: "SELECT", order: 337, question: "Hello Emeka, how are you?" },
{ id: 338, lessonId: 8, type: "SELECT", order: 338, question: "Yes, thank you" },
{ id: 339, lessonId: 8, type: "SELECT", order: 339, question: "Did you sleep well?" },
{ id: 340, lessonId: 9, type: "SELECT", order: 340, question: "Hello Emeka, how are you?" },
{ id: 341, lessonId: 9, type: "SELECT", order: 341, question: "Good" },
{ id: 342, lessonId: 9, type: "SELECT", order: 342, question: "Good morning, how are you doing?" },
{ id: 343, lessonId: 9, type: "SELECT", order: 343, question: "I am doing well and you?" },
{ id: 344, lessonId: 9, type: "SELECT", order: 344, question: "Good evening, how are you doing?" },
{ id: 345, lessonId: 9, type: "SELECT", order: 345, question: "I am Emeka, and you are?" },
{ id: 346, lessonId: 9, type: "SELECT", order: 346, question: "Hi, how are you?" },
{ id: 347, lessonId: 9, type: "SELECT", order: 347, question: "I am doing very well, thank you" },
{ id: 348, lessonId: 9, type: "SELECT", order: 348, question: "I am doing well" },
{ id: 349, lessonId: 9, type: "SELECT", order: 349, question: "How are you?" },
{ id: 350, lessonId: 9, type: "SELECT", order: 350, question: "Good evening, I missed you" },
{ id: 351, lessonId: 9, type: "SELECT", order: 351, question: "Good" },
{ id: 352, lessonId: 9, type: "SELECT", order: 352, question: "I am your friend" },
{ id: 353, lessonId: 9, type: "SELECT", order: 353, question: "Goodbye" },
{ id: 354, lessonId: 9, type: "SELECT", order: 354, question: "I am Emeka" },
{ id: 355, lessonId: 10, type: "SELECT", order: 355, question: "Have a good evening" },
{ id: 356, lessonId: 10, type: "SELECT", order: 356, question: "Yes, I am very well" },
{ id: 357, lessonId: 10, type: "SELECT", order: 357, question: "Yes, and you" },
{ id: 358, lessonId: 10, type: "SELECT", order: 358, question: "Did you sleep well?" },
{ id: 359, lessonId: 10, type: "SELECT", order: 359, question: "Are you awake?" },
{ id: 360, lessonId: 10, type: "SELECT", order: 360, question: "You are welcome" },
{ id: 361, lessonId: 10, type: "SELECT", order: 361, question: "See you soon" },
{ id: 362, lessonId: 10, type: "SELECT", order: 362, question: "Yes, I will travel by air" },
{ id: 363, lessonId: 10, type: "SELECT", order: 363, question: "Did you just wake up?" },
{ id: 364, lessonId: 10, type: "SELECT", order: 364, question: "Forgive me" },
{ id: 365, lessonId: 10, type: "SELECT", order: 365, question: "I am waiting for you" },
{ id: 366, lessonId: 10, type: "SELECT", order: 366, question: "Have a goodnight rest" },
{ id: 367, lessonId: 10, type: "SELECT", order: 367, question: "I am driving the car" },
{ id: 368, lessonId: 10, type: "SELECT", order: 368, question: "How is your day going?" },
{ id: 369, lessonId: 10, type: "SELECT", order: 369, question: "We thank God" },
// Igbo Module 3 Lesson 1
{id: 370, lessonId: 11, type: "SELECT", order: 370, question: "I speak Igbo"},
{id: 371, lessonId: 11, type: "SELECT", order: 371, question: "Excuse me, do you speak Igbo?"},
{id: 372, lessonId: 11, type: "SELECT", order: 372, question: "No, I am Igbo, I speak Igbo"},
{id: 373, lessonId: 11, type: "SELECT", order: 373, question: "I need a cab"},
{id: 374, lessonId: 11, type: "SELECT", order: 374, question: "Where does one get a cab?"},
{id: 375, lessonId: 11, type: "SELECT", order: 375, question: "I am a Nigerian"},
{id: 376, lessonId: 11, type: "SELECT", order: 376, question: "What is your name?"},
{id: 377, lessonId: 11, type: "SELECT", order: 377, question: "His name is Okeke"},
{id: 378, lessonId: 11, type: "SELECT", order: 378, question: "Are you Igbo?"},
{id: 379, lessonId: 11, type: "SELECT", order: 379, question: "My name is David"},
{id: 380, lessonId: 11, type: "SELECT", order: 380, question: "No, I am Igbo"},
{id: 381, lessonId: 11, type: "SELECT", order: 381, question: "I am visiting Nigeria"},
{id: 382, lessonId: 11, type: "SELECT", order: 382, question: "I will be staying for a week"},
{id: 383, lessonId: 11, type: "SELECT", order: 383, question: "I am staying at the hotel"},
{id: 384, lessonId: 11, type: "SELECT", order: 384, question: "I am alone"},

// Igbo Module 3 Lesson 2
{id: 385, lessonId: 12, type: "SELECT", order: 385, question: "What do you do for a living?"},
{id: 386, lessonId: 12, type: "SELECT", order: 386, question: "Where are you from?"},
{id: 387, lessonId: 12, type: "SELECT", order: 387, question: "Do you have children?"},
{id: 388, lessonId: 12, type: "SELECT", order: 388, question: "Have you been to Nigeria?"},
{id: 389, lessonId: 12, type: "SELECT", order: 389, question: "I am enjoying my visit to Nigeria"},
{id: 390, lessonId: 12, type: "SELECT", order: 390, question: "I want to see the beach"},
{id: 391, lessonId: 12, type: "SELECT", order: 391, question: "Come to my house"},
{id: 392, lessonId: 12, type: "SELECT", order: 392, question: "My wife is Nigerian"},
{id: 393, lessonId: 12, type: "SELECT", order: 393, question: "Greet your family"},
{id: 394, lessonId: 12, type: "SELECT", order: 394, question: "I want to go to the market"},
{id: 395, lessonId: 12, type: "SELECT", order: 395, question: "Where is the cinema?"},
{id: 396, lessonId: 12, type: "SELECT", order: 396, question: "Excuse me"},
{id: 397, lessonId: 12, type: "SELECT", order: 397, question: "Come let us eat"},
{id: 398, lessonId: 12, type: "SELECT", order: 398, question: "I am tired"},
{id: 399, lessonId: 12, type: "SELECT", order: 399, question: "I am happy to be here"},

// Igbo Module 3 Lesson 3
{id: 400, lessonId: 13, type: "SELECT", order: 400, question: "My sibling is in church"},
{id: 401, lessonId: 13, type: "SELECT", order: 401, question: "I went to market"},
{id: 402, lessonId: 13, type: "SELECT", order: 402, question: "I speak Yoruba and Igbo"},
{id: 403, lessonId: 13, type: "SELECT", order: 403, question: "Incredible, my name is Sari"},
{id: 404, lessonId: 13, type: "SELECT", order: 404, question: "Feranmi speaks Igbo and Yoruba"},
{id: 405, lessonId: 13, type: "SELECT", order: 405, question: "Do you speak Yoruba?"},
{id: 406, lessonId: 13, type: "SELECT", order: 406, question: "They speak Hausa"},
{id: 407, lessonId: 13, type: "SELECT", order: 407, question: "He is Yoruba"},
{id: 408, lessonId: 13, type: "SELECT", order: 408, question: "She is Igbo"},
{id: 409, lessonId: 13, type: "SELECT", order: 409, question: "My husband went out"},
{id: 410, lessonId: 13, type: "SELECT", order: 410, question: "Her daughter is a teacher"},
{id: 411, lessonId: 13, type: "SELECT", order: 411, question: "His son is a policeman"},
{id: 412, lessonId: 13, type: "SELECT", order: 412, question: "My name is Anna"},
{id: 413, lessonId: 13, type: "SELECT", order: 413, question: "I speak Igbo"},
{id: 414, lessonId: 13, type: "SELECT", order: 414, question: "Greet your family"},

// Igbo Module 3 Lesson 4
{id: 415, lessonId: 14, type: "SELECT", order: 415, question: "My house"},
{id: 416, lessonId: 14, type: "SELECT", order: 416, question: "Speak to my son"},
{id: 417, lessonId: 14, type: "SELECT", order: 417, question: "Speak to my daughter"},
{id: 418, lessonId: 14, type: "SELECT", order: 418, question: "They"},
{id: 419, lessonId: 14, type: "SELECT", order: 419, question: "They are many"},
{id: 420, lessonId: 14, type: "SELECT", order: 420, question: "He"},
{id: 421, lessonId: 14, type: "SELECT", order: 421, question: "He is tall"},
{id: 422, lessonId: 14, type: "SELECT", order: 422, question: "She"},
{id: 423, lessonId: 14, type: "SELECT", order: 423, question: "She can cook"},
{id: 424, lessonId: 14, type: "SELECT", order: 424, question: "His"},
{id: 425, lessonId: 14, type: "SELECT", order: 425, question: "His brother is handsome"},
{id: 426, lessonId: 14, type: "SELECT", order: 426, question: "His"},
{id: 427, lessonId: 14, type: "SELECT", order: 427, question: "Her sister is beautiful"},
{id: 428, lessonId: 14, type: "SELECT", order: 428, question: "Mine"},
{id: 429, lessonId: 14, type: "SELECT", order: 429, question: "My book"},

// Igbo Module 3 Lesson 5
{id: 430, lessonId: 15, type: "SELECT", order: 430, question: "We"},
{id: 431, lessonId: 15, type: "SELECT", order: 431, question: "We are back"},
{id: 432, lessonId: 15, type: "SELECT", order: 432, question: "Us"},
{id: 433, lessonId: 15, type: "SELECT", order: 433, question: "Come and join us"},
{id: 434, lessonId: 15, type: "SELECT", order: 434, question: "Meet my friend"},
{id: 435, lessonId: 15, type: "SELECT", order: 435, question: "You"},
{id: 436, lessonId: 15, type: "SELECT", order: 436, question: "Who are you?"},
{id: 437, lessonId: 15, type: "SELECT", order: 437, question: "They"},
{id: 438, lessonId: 15, type: "SELECT", order: 438, question: "Who are they?"},
{id: 439, lessonId: 15, type: "SELECT", order: 439, question: "It is mine"},
{id: 440, lessonId: 15, type: "SELECT", order: 440, question: "They are mine"},
{id: 441, lessonId: 15, type: "SELECT", order: 441, question: "Me"},
{id: 442, lessonId: 15, type: "SELECT", order: 442, question: "Talk to me"},
{id: 443, lessonId: 15, type: "SELECT", order: 443, question: "You and I"},
{id: 444, lessonId: 15, type: "SELECT", order: 444, question: "You and I forever"},

{id: 445, lessonId: 16, type: "SELECT", order: 445, question: "How are you?"},
{id: 446, lessonId: 16, type: "SELECT", order: 446, question: "I am okay"},
{id: 447, lessonId: 16, type: "SELECT", order: 447, question: "What is your name?"},
{id: 448, lessonId: 16, type: "SELECT", order: 448, question: "My name is Mustafa"},
{id: 449, lessonId: 16, type: "SELECT", order: 449, question: "I am from Nigeria"},
{id: 450, lessonId: 16, type: "SELECT", order: 450, question: "What about you?"},
{id: 451, lessonId: 16, type: "SELECT", order: 451, question: "No"},
{id: 452, lessonId: 16, type: "SELECT", order: 452, question: "What did you say?"},
{id: 453, lessonId: 16, type: "SELECT", order: 453, question: "Say it again"},
{id: 454, lessonId: 16, type: "SELECT", order: 454, question: "Yes"},
{id: 455, lessonId: 16, type: "SELECT", order: 455, question: "Thank you"},
{id: 456, lessonId: 16, type: "SELECT", order: 456, question: "You are welcome"},
{id: 457, lessonId: 16, type: "SELECT", order: 457, question: "Tell me"},
{id: 458, lessonId: 16, type: "SELECT", order: 458, question: "Sorry"},
{id: 459, lessonId: 16, type: "SELECT", order: 459, question: "Thank you so much"},

{id: 460, lessonId: 17, type: "SELECT", order: 460, question: "Do you speak Hausa?"},
{id: 461, lessonId: 17, type: "SELECT", order: 461, question: "Just a little"},
{id: 462, lessonId: 17, type: "SELECT", order: 462, question: "I like Hausa"},
{id: 463, lessonId: 17, type: "SELECT", order: 463, question: "Can I practice with you?"},
{id: 464, lessonId: 17, type: "SELECT", order: 464, question: "How old are you?"},
{id: 465, lessonId: 17, type: "SELECT", order: 465, question: "I am thirty five years old"},
{id: 466, lessonId: 17, type: "SELECT", order: 466, question: "I am talking to you"},
{id: 467, lessonId: 17, type: "SELECT", order: 467, question: "What is this?"},
{id: 468, lessonId: 17, type: "SELECT", order: 468, question: "What does that mean?"},
{id: 469, lessonId: 17, type: "SELECT", order: 469, question: "Where are you?"},
{id: 470, lessonId: 17, type: "SELECT", order: 470, question: "I love you"},
{id: 471, lessonId: 17, type: "SELECT", order: 471, question: "Where do you live?"},
{id: 472, lessonId: 17, type: "SELECT", order: 472, question: "That's beautiful"},
{id: 473, lessonId: 17, type: "SELECT", order: 473, question: "She is beautiful"},
{id: 474, lessonId: 17, type: "SELECT", order: 474, question: "I live in the USA"},

{id: 475, lessonId: 18, type: "SELECT", order: 475, question: "They are dancing"},
{id: 476, lessonId: 18, type: "SELECT", order: 476, question: "What do you mean?"},
{id: 477, lessonId: 18, type: "SELECT", order: 477, question: "Speak to me"},
{id: 478, lessonId: 18, type: "SELECT", order: 478, question: "I love you too"},
{id: 479, lessonId: 18, type: "SELECT", order: 479, question: "It is not like that"},
{id: 480, lessonId: 18, type: "SELECT", order: 480, question: "Where are you going?"},
{id: 481, lessonId: 18, type: "SELECT", order: 481, question: "Come back here"},
{id: 482, lessonId: 18, type: "SELECT", order: 482, question: "Are you alone?"},
{id: 483, lessonId: 18, type: "SELECT", order: 483, question: "Let us go"},
{id: 484, lessonId: 18, type: "SELECT", order: 484, question: "I know"},
{id: 485, lessonId: 18, type: "SELECT", order: 485, question: "Exactly"},
{id: 486, lessonId: 18, type: "SELECT", order: 486, question: "You are correct"},
{id: 487, lessonId: 18, type: "SELECT", order: 487, question: "You are not correct"},
{id: 488, lessonId: 18, type: "SELECT", order: 488, question: "That's beautiful"},
{id: 489, lessonId: 18, type: "SELECT", order: 489, question: "Do you know?"},

{id: 490, lessonId: 19, type: "SELECT", order: 490, question: "I want to buy"},
{id: 491, lessonId: 19, type: "SELECT", order: 491, question: "What do you want to buy?"},
{id: 492, lessonId: 19, type: "SELECT", order: 492, question: "Yam"},
{id: 493, lessonId: 19, type: "SELECT", order: 493, question: "How much?"},
{id: 494, lessonId: 19, type: "SELECT", order: 494, question: "1000 worth of yarn"},
{id: 495, lessonId: 19, type: "SELECT", order: 495, question: "I am coming"},
{id: 496, lessonId: 19, type: "SELECT", order: 496, question: "I am sorry"},
{id: 497, lessonId: 19, type: "SELECT", order: 497, question: "It's not available"},
{id: 498, lessonId: 19, type: "SELECT", order: 498, question: "Come back"},
{id: 499, lessonId: 19, type: "SELECT", order: 499, question: "I have heard you"},
{id: 500, lessonId: 19, type: "SELECT", order: 500, question: "At what time?"},
{id: 501, lessonId: 19, type: "SELECT", order: 501, question: "In the Afternoon"},
{id: 502, lessonId: 19, type: "SELECT", order: 502, question: "I will come"},
{id: 503, lessonId: 19, type: "SELECT", order: 503, question: "I am going"},
{id: 504, lessonId: 19, type: "SELECT", order: 504, question: "What do you say?"},

{id: 505, lessonId: 20, type: "SELECT", order: 505, question: "Where are you going?"},
{id: 506, lessonId: 20, type: "SELECT", order: 506, question: "I am going to nicon town"},
{id: 507, lessonId: 20, type: "SELECT", order: 507, question: "Come inside"},
{id: 508, lessonId: 20, type: "SELECT", order: 508, question: "Sit at the back"},
{id: 509, lessonId: 20, type: "SELECT", order: 509, question: "Where are they?"},
{id: 510, lessonId: 20, type: "SELECT", order: 510, question: "Alright here"},
{id: 511, lessonId: 20, type: "SELECT", order: 511, question: "Is this the place?"},
{id: 512, lessonId: 20, type: "SELECT", order: 512, question: "Collect your money"},
{id: 513, lessonId: 20, type: "SELECT", order: 513, question: "Good afternoon"},
{id: 514, lessonId: 20, type: "SELECT", order: 514, question: "Welcome"},
{id: 515, lessonId: 20, type: "SELECT", order: 515, question: "Switch on the light"},
{id: 516, lessonId: 20, type: "SELECT", order: 516, question: "What do you want to eat?"},
{id: 517, lessonId: 20, type: "SELECT", order: 517, question: "Do you have water?"},
{id: 518, lessonId: 20, type: "SELECT", order: 518, question: "Thank you"},
{id: 519, lessonId: 20, type: "SELECT", order: 519, question: "Goodbye"},

{id: 520, lessonId: 21, type: "SELECT", order: 520, question: "Thank you very much"},
{id: 521, lessonId: 21, type: "SELECT", order: 521, question: "morning"},
{id: 522, lessonId: 21, type: "SELECT", order: 522, question: "Good morning"},
{id: 523, lessonId: 21, type: "SELECT", order: 523, question: "Good afternoon"},
{id: 524, lessonId: 21, type: "SELECT", order: 524, question: "welcome"},
{id: 525, lessonId: 21, type: "SELECT", order: 525, question: "See"},
{id: 526, lessonId: 21, type: "SELECT", order: 526, question: "Very good"},
{id: 527, lessonId: 21, type: "SELECT", order: 527, question: "Hello/ Hi"},
{id: 528, lessonId: 21, type: "SELECT", order: 528, question: "Bye"},
{id: 529, lessonId: 21, type: "SELECT", order: 529, question: "How are you doing?"},
{id: 530, lessonId: 21, type: "SELECT", order: 530, question: "Have a good day"},
{id: 531, lessonId: 21, type: "SELECT", order: 531, question: "Good night"},
{id: 532, lessonId: 21, type: "SELECT", order: 532, question: "Good bye see you tomorrow"},
{id: 533, lessonId: 21, type: "SELECT", order: 533, question: "good bye"},
{id: 534, lessonId: 21, type: "SELECT", order: 534, question: "Have a good night rest"},

{id: 535, lessonId: 22, type: "SELECT", order: 535, question: "Good evening Haruna"},
{id: 536, lessonId: 22, type: "SELECT", order: 536, question: "Good morning"},
{id: 537, lessonId: 22, type: "SELECT", order: 537, question: "After noon"},
{id: 538, lessonId: 22, type: "SELECT", order: 538, question: "Night"},
{id: 539, lessonId: 22, type: "SELECT", order: 539, question: "See you tomorrow"},
{id: 540, lessonId: 22, type: "SELECT", order: 540, question: "Good bye"},
{id: 541, lessonId: 22, type: "SELECT", order: 541, question: "You are welcome"},
{id: 542, lessonId: 22, type: "SELECT", order: 542, question: "How are you?"},
{id: 543, lessonId: 22, type: "SELECT", order: 543, question: "well-done"},
{id: 544, lessonId: 22, type: "SELECT", order: 544, question: "Good bye"},
{id: 545, lessonId: 22, type: "SELECT", order: 545, question: "welcome"},
{id: 546, lessonId: 22, type: "SELECT", order: 546, question: "You"},
{id: 547, lessonId: 22, type: "SELECT", order: 547, question: "Thank you"},
{id: 548, lessonId: 22, type: "SELECT", order: 548, question: "Tomorrow"},
{id: 549, lessonId: 22, type: "SELECT", order: 549, question: "Sleep"},

{id: 550, lessonId: 23, type: "SELECT", order: 550, question: "Good morning Haruna"},
{id: 551, lessonId: 23, type: "SELECT", order: 551, question: "Alright see you tomorrow"},
{id: 552, lessonId: 23, type: "SELECT", order: 552, question: "See you soon"},
{id: 553, lessonId: 23, type: "SELECT", order: 553, question: "Good bye see you tomorrow"},
{id: 554, lessonId: 23, type: "SELECT", order: 554, question: "Hello"},
{id: 555, lessonId: 23, type: "SELECT", order: 555, question: "How are you doing?"},
{id: 556, lessonId: 23, type: "SELECT", order: 556, question: "Good afternoon"},
{id: 557, lessonId: 23, type: "SELECT", order: 557, question: "Thank you"},
{id: 558, lessonId: 23, type: "SELECT", order: 558, question: "Did you sleep well?"},
{id: 559, lessonId: 23, type: "SELECT", order: 559, question: "Good night"},
{id: 560, lessonId: 23, type: "SELECT", order: 560, question: "I am doing very well"},
{id: 561, lessonId: 23, type: "SELECT", order: 561, question: "Yes"},
{id: 562, lessonId: 23, type: "SELECT", order: 562, question: "Hello Haruna how are you?"},
{id: 563, lessonId: 23, type: "SELECT", order: 563, question: "Yes thank you"},
{id: 564, lessonId: 23, type: "SELECT", order: 564, question: "Did you sleep well?"},

{id: 565, lessonId: 24, type: "SELECT", order: 565, question: "Hello Haruna, how are you?"},
{id: 566, lessonId: 24, type: "SELECT", order: 566, question: "Good"},
{id: 567, lessonId: 24, type: "SELECT", order: 567, question: "Good morning how are you doing?"},
{id: 568, lessonId: 24, type: "SELECT", order: 568, question: "I am doing very well thank you"},
{id: 569, lessonId: 24, type: "SELECT", order: 569, question: "Good evening how are you doing?"},
{id: 570, lessonId: 24, type: "SELECT", order: 570, question: "I am Haruna and you are?"},
{id: 571, lessonId: 24, type: "SELECT", order: 571, question: "Hi, how are you?"},
{id: 572, lessonId: 24, type: "SELECT", order: 572, question: "I am doing very well thank you."},
{id: 573, lessonId: 24, type: "SELECT", order: 573, question: "I'm doing very well"},
{id: 574, lessonId: 24, type: "SELECT", order: 574, question: "How are you?"},
{id: 575, lessonId: 24, type: "SELECT", order: 575, question: "Good evening, I missed you"},
{id: 576, lessonId: 24, type: "SELECT", order: 576, question: "Good"},
{id: 577, lessonId: 24, type: "SELECT", order: 577, question: "I am your friend"},
{id: 578, lessonId: 24, type: "SELECT", order: 578, question: "Good bye"},
{id: 579, lessonId: 24, type: "SELECT", order: 579, question: "I am Haruna"},

{id: 580, lessonId: 25, type: "SELECT", order: 580, question: "Have a good evening"},
{id: 581, lessonId: 25, type: "SELECT", order: 581, question: "Yes, I am very well"},
{id: 582, lessonId: 25, type: "SELECT", order: 582, question: "yes and you?"},
{id: 583, lessonId: 25, type: "SELECT", order: 583, question: "Did you sleep well?"},
{id: 584, lessonId: 25, type: "SELECT", order: 584, question: "Are you awake?"},
{id: 585, lessonId: 25, type: "SELECT", order: 585, question: "You are welcome"},
{id: 586, lessonId: 25, type: "SELECT", order: 586, question: "See you soon"},
{id: 587, lessonId: 25, type: "SELECT", order: 587, question: "Yes, I will travel by air"},
{id: 588, lessonId: 25, type: "SELECT", order: 588, question: "Did you just wake up?"},
{id: 589, lessonId: 25, type: "SELECT", order: 589, question: "I am sorry"},
{id: 590, lessonId: 25, type: "SELECT", order: 590, question: "I am waiting for you"},
{id: 591, lessonId: 25, type: "SELECT", order: 591, question: "Have a good rest"},
{id: 592, lessonId: 25, type: "SELECT", order: 592, question: "I am driving the car"},
{id: 593, lessonId: 25, type: "SELECT", order: 593, question: "How is your day going?"},
{id: 594, lessonId: 25, type: "SELECT", order: 594, question: "We thank God"},

{id: 595, lessonId: 26, type: "SELECT", order: 595, question: "I speak Hausa"},
{id: 596, lessonId: 26, type: "SELECT", order: 596, question: "Excuse me, do you speak Hausa?"},
{id: 597, lessonId: 26, type: "SELECT", order: 597, question: "No, I am Hausa, I speak Igbo"},
{id: 598, lessonId: 26, type: "SELECT", order: 598, question: "I need a cab"},
{id: 599, lessonId: 26, type: "SELECT", order: 599, question: "Where does one get a cab?"},
{id: 600, lessonId: 26, type: "SELECT", order: 600, question: "I am a Nigerian"},
{id: 601, lessonId: 26, type: "SELECT", order: 601, question: "What is your name?"},
{id: 602, lessonId: 26, type: "SELECT", order: 602, question: "His name is Dauda"},
{id: 603, lessonId: 26, type: "SELECT", order: 603, question: "Are you Hausa?"},
{id: 604, lessonId: 26, type: "SELECT", order: 604, question: "My name is Dauda"},
{id: 605, lessonId: 26, type: "SELECT", order: 605, question: "No, I am Hausa"},
{id: 606, lessonId: 26, type: "SELECT", order: 606, question: "I am visiting Nigeria"},
{id: 607, lessonId: 26, type: "SELECT", order: 607, question: "I will be staying for a week"},
{id: 608, lessonId: 26, type: "SELECT", order: 608, question: "I am staying at the hotel"},
{id: 609, lessonId: 26, type: "SELECT", order: 609, question: "I am alone"},

// Hausa Module 3 Lesson 2
{id: 610, lessonId: 27, type: "SELECT", order: 610, question: "What do you do for a living?"},
{id: 611, lessonId: 27, type: "SELECT", order: 611, question: "Where are you from?"},
{id: 612, lessonId: 27, type: "SELECT", order: 612, question: "Do you have children?"},
{id: 613, lessonId: 27, type: "SELECT", order: 613, question: "Have you been to Nigeria?"},
{id: 614, lessonId: 27, type: "SELECT", order: 614, question: "I am enjoying my visit"},
{id: 615, lessonId: 27, type: "SELECT", order: 615, question: "I want to see the beach"},
{id: 616, lessonId: 27, type: "SELECT", order: 616, question: "Come to my house"},
{id: 617, lessonId: 27, type: "SELECT", order: 617, question: "My wife is a Nigerian"},
{id: 618, lessonId: 27, type: "SELECT", order: 618, question: "Greet your family"},
{id: 619, lessonId: 27, type: "SELECT", order: 619, question: "I want to visit the market"},
{id: 620, lessonId: 27, type: "SELECT", order: 620, question: "Where is the cinema?"},
{id: 621, lessonId: 27, type: "SELECT", order: 621, question: "Excuse me"},
{id: 622, lessonId: 27, type: "SELECT", order: 622, question: "Come, let us eat"},
{id: 623, lessonId: 27, type: "SELECT", order: 623, question: "I am tired"},
{id: 624, lessonId: 27, type: "SELECT", order: 624, question: "I am happy to be here"},

// Hausa Module 3 Lesson 3
{id: 625, lessonId: 28, type: "SELECT", order: 625, question: "Aunty is at the church"},
{id: 626, lessonId: 28, type: "SELECT", order: 626, question: "I went to the market"},
{id: 627, lessonId: 28, type: "SELECT", order: 627, question: "I speak Yoruba and Igbo"},
{id: 628, lessonId: 28, type: "SELECT", order: 628, question: "Incredible! My name is Ladi"},
{id: 629, lessonId: 28, type: "SELECT", order: 629, question: "Ladi speaks Igbo and Yoruba"},
{id: 630, lessonId: 28, type: "SELECT", order: 630, question: "You speak Yoruba"},
{id: 631, lessonId: 28, type: "SELECT", order: 631, question: "They speak Hausa"},
{id: 632, lessonId: 28, type: "SELECT", order: 632, question: "He is Yoruba"},
{id: 633, lessonId: 28, type: "SELECT", order: 633, question: "She is Igbo"},
{id: 634, lessonId: 28, type: "SELECT", order: 634, question: "My husband is out"},
{id: 635, lessonId: 28, type: "SELECT", order: 635, question: "Her daughter is a teacher"},
{id: 636, lessonId: 28, type: "SELECT", order: 636, question: "His son is a policeman"},
{id: 637, lessonId: 28, type: "SELECT", order: 637, question: "My name is Ladidi"},
{id: 638, lessonId: 28, type: "SELECT", order: 638, question: "I speak Yoruba, Igbo, Pidgin, Hausa"},
{id: 639, lessonId: 28, type: "SELECT", order: 639, question: "Greet your family"},

// Hausa Module 3 Lesson 4
{id: 640, lessonId: 29, type: "SELECT", order: 640, question: "My house"},
{id: 641, lessonId: 29, type: "SELECT", order: 641, question: "Speak to my son"},
{id: 642, lessonId: 29, type: "SELECT", order: 642, question: "Speak to my daughter"},
{id: 643, lessonId: 29, type: "SELECT", order: 643, question: "They"},
{id: 644, lessonId: 29, type: "SELECT", order: 644, question: "They are many"},
{id: 645, lessonId: 29, type: "SELECT", order: 645, question: "He"},
{id: 646, lessonId: 29, type: "SELECT", order: 646, question: "He is tall"},
{id: 647, lessonId: 29, type: "SELECT", order: 647, question: "She"},
{id: 648, lessonId: 29, type: "SELECT", order: 648, question: "She can cook"},
{id: 649, lessonId: 29, type: "SELECT", order: 649, question: "His"},
{id: 650, lessonId: 29, type: "SELECT", order: 650, question: "His brother is handsome"},
{id: 651, lessonId: 29, type: "SELECT", order: 651, question: "Her"},
{id: 652, lessonId: 29, type: "SELECT", order: 652, question: "Her sister is beautiful"},
{id: 653, lessonId: 29, type: "SELECT", order: 653, question: "Mine"},
{id: 654, lessonId: 29, type: "SELECT", order: 654, question: "My book"},

// Hausa Module 3 Lesson 5
{id: 655, lessonId: 30, type: "SELECT", order: 655, question: "We"},
{id: 656, lessonId: 30, type: "SELECT", order: 656, question: "We are back"},
{id: 657, lessonId: 30, type: "SELECT", order: 657, question: "US"},
{id: 658, lessonId: 30, type: "SELECT", order: 658, question: "Come and join us"},
{id: 659, lessonId: 30, type: "SELECT", order: 659, question: "Meet my friend"},
{id: 660, lessonId: 30, type: "SELECT", order: 660, question: "You"},
{id: 661, lessonId: 30, type: "SELECT", order: 661, question: "Who are you?"},
{id: 662, lessonId: 30, type: "SELECT", order: 662, question: "They"},
{id: 663, lessonId: 30, type: "SELECT", order: 663, question: "Who are they?"},
{id: 664, lessonId: 30, type: "SELECT", order: 664, question: "It is mine"},
{id: 665, lessonId: 30, type: "SELECT", order: 665, question: "They are mine"},
{id: 666, lessonId: 30, type: "SELECT", order: 666, question: "Me"},
{id: 667, lessonId: 30, type: "SELECT", order: 667, question: "Talk to me"},
{id: 668, lessonId: 30, type: "SELECT", order: 668, question: "You and I"},
{id: 669, lessonId: 30, type: "SELECT", order: 669, question: "You and I forever"},
// PIDGIN STARTS

{id: 670, lessonId: 46, type: "SELECT", order: 670, question: "How are you?"},
{id: 671, lessonId: 46, type: "SELECT", order: 671, question: "I am okay."},
{id: 672, lessonId: 46, type: "SELECT", order: 672, question: "What is your name?"},
{id: 673, lessonId: 46, type: "SELECT", order: 673, question: "My name is Ejiro."},
{id: 674, lessonId: 46, type: "SELECT", order: 674, question: "I am from Nigeria."},
{id: 675, lessonId: 46, type: "SELECT", order: 675, question: "What about you?"},
{id: 676, lessonId: 46, type: "SELECT", order: 676, question: "No."},
{id: 677, lessonId: 46, type: "SELECT", order: 677, question: "What did you say?"},
{id: 678, lessonId: 46, type: "SELECT", order: 678, question: "Say it again."},
{id: 679, lessonId: 46, type: "SELECT", order: 679, question: "Yes."},
{id: 680, lessonId: 46, type: "SELECT", order: 680, question: "Thank you."},
{id: 681, lessonId: 46, type: "SELECT", order: 681, question: "You are welcome."},
{id: 682, lessonId: 46, type: "SELECT", order: 682, question: "Tell me."},
{id: 683, lessonId: 46, type: "SELECT", order: 683, question: "Sorry."},
{id: 684, lessonId: 46, type: "SELECT", order: 684, question: "Thank you so much."},

{id: 685, lessonId: 47, type: "SELECT", order: 685, question: "Do you speak Pidgin?"},
{id: 686, lessonId: 47, type: "SELECT", order: 686, question: "Just a little"},
{id: 687, lessonId: 47, type: "SELECT", order: 687, question: "I like Pidgin"},
{id: 688, lessonId: 47, type: "SELECT", order: 688, question: "Can I practice with you?"},
{id: 689, lessonId: 47, type: "SELECT", order: 689, question: "How old are you?"},
{id: 690, lessonId: 47, type: "SELECT", order: 690, question: "I am thirty five years old"},
{id: 691, lessonId: 47, type: "SELECT", order: 691, question: "I am talking to you"},
{id: 692, lessonId: 47, type: "SELECT", order: 692, question: "What is this?"},
{id: 693, lessonId: 47, type: "SELECT", order: 693, question: "What does that mean?"},
{id: 694, lessonId: 47, type: "SELECT", order: 694, question: "Where are you?"},
{id: 695, lessonId: 47, type: "SELECT", order: 695, question: "I love you"},
{id: 696, lessonId: 47, type: "SELECT", order: 696, question: "Where do you live?"},
{id: 697, lessonId: 47, type: "SELECT", order: 697, question: "That's beautiful"},
{id: 698, lessonId: 47, type: "SELECT", order: 698, question: "She is beautiful"},
{id: 699, lessonId: 47, type: "SELECT", order: 699, question: "I live in the USA"},

{id: 700, lessonId: 48, type: "SELECT", order: 700, question: "They are dancing"},
{id: 701, lessonId: 48, type: "SELECT", order: 701, question: "What do you mean?"},
{id: 702, lessonId: 48, type: "SELECT", order: 702, question: "Speak to me"},
{id: 703, lessonId: 48, type: "SELECT", order: 703, question: "I love you too"},
{id: 704, lessonId: 48, type: "SELECT", order: 704, question: "It is not like that"},
{id: 705, lessonId: 48, type: "SELECT", order: 705, question: "Where are you going?"},
{id: 706, lessonId: 48, type: "SELECT", order: 706, question: "Come back here"},
{id: 707, lessonId: 48, type: "SELECT", order: 707, question: "Are you alone?"},
{id: 708, lessonId: 48, type: "SELECT", order: 708, question: "Let us go"},
{id: 709, lessonId: 48, type: "SELECT", order: 709, question: "I know"},
{id: 710, lessonId: 48, type: "SELECT", order: 710, question: "Exactly"},
{id: 711, lessonId: 48, type: "SELECT", order: 711, question: "You are correct"},
{id: 712, lessonId: 48, type: "SELECT", order: 712, question: "You are not correct"},
{id: 713, lessonId: 48, type: "SELECT", order: 713, question: "That's beautiful"},
{id: 714, lessonId: 48, type: "SELECT", order: 714, question: "Do you know?"},

{id: 715, lessonId: 49, type: "SELECT", order: 715, question: "I want to buy"},
{id: 716, lessonId: 49, type: "SELECT", order: 716, question: "What do you want to buy?"},
{id: 717, lessonId: 49, type: "SELECT", order: 717, question: "Yam"},
{id: 718, lessonId: 49, type: "SELECT", order: 718, question: "How much?"},
{id: 719, lessonId: 49, type: "SELECT", order: 719, question: "1000 worth of yam"},
{id: 720, lessonId: 49, type: "SELECT", order: 720, question: "I am coming"},
{id: 721, lessonId: 49, type: "SELECT", order: 721, question: "I am sorry"},
{id: 722, lessonId: 49, type: "SELECT", order: 722, question: "It's not available"},
{id: 723, lessonId: 49, type: "SELECT", order: 723, question: "Come back"},
{id: 724, lessonId: 49, type: "SELECT", order: 724, question: "I have heard you"},
{id: 725, lessonId: 49, type: "SELECT", order: 725, question: "At what time?"},
{id: 726, lessonId: 49, type: "SELECT", order: 726, question: "In the Afternoon"},
{id: 727, lessonId: 49, type: "SELECT", order: 727, question: "I will come"},
{id: 728, lessonId: 49, type: "SELECT", order: 728, question: "I am going"},
{id: 729, lessonId: 49, type: "SELECT", order: 729, question: "What do you say?"},

{id: 730, lessonId: 50, type: "SELECT", order: 730, question: "Where are you going?"},
{id: 731, lessonId: 50, type: "SELECT", order: 731, question: "I am going to nicon town"},
{id: 732, lessonId: 50, type: "SELECT", order: 732, question: "Come inside"},
{id: 733, lessonId: 50, type: "SELECT", order: 733, question: "Sit at the back"},
{id: 734, lessonId: 50, type: "SELECT", order: 734, question: "Where are they?"},
{id: 735, lessonId: 50, type: "SELECT", order: 735, question: "Alright here"},
{id: 736, lessonId: 50, type: "SELECT", order: 736, question: "Is this the place?"},
{id: 737, lessonId: 50, type: "SELECT", order: 737, question: "Collect your money"},
{id: 738, lessonId: 50, type: "SELECT", order: 738, question: "Good afternoon"},
{id: 739, lessonId: 50, type: "SELECT", order: 739, question: "Welcome"},
{id: 740, lessonId: 50, type: "SELECT", order: 740, question: "Switch on the light"},
{id: 741, lessonId: 50, type: "SELECT", order: 741, question: "What do you want to eat?"},
{id: 742, lessonId: 50, type: "SELECT", order: 742, question: "Do you have water?"},
{id: 743, lessonId: 50, type: "SELECT", order: 743, question: "Thank you"},
{id: 744, lessonId: 50, type: "SELECT", order: 744, question: "Goodbye"},

{id: 745, lessonId: 51, type: "SELECT", order: 745, question: "Thank you very much, Marci"},
{id: 746, lessonId: 51, type: "SELECT", order: 746, question: "Morning"},
{id: 747, lessonId: 51, type: "SELECT", order: 747, question: "Good morning"},
{id: 748, lessonId: 51, type: "SELECT", order: 748, question: "Good afternoon"},
{id: 749, lessonId: 51, type: "SELECT", order: 749, question: "Welcome"},
{id: 750, lessonId: 51, type: "SELECT", order: 750, question: "See"},
{id: 751, lessonId: 51, type: "SELECT", order: 751, question: "Very good"},
{id: 752, lessonId: 51, type: "SELECT", order: 752, question: "Hello/hi"},
{id: 753, lessonId: 51, type: "SELECT", order: 753, question: "Bye"},
{id: 754, lessonId: 51, type: "SELECT", order: 754, question: "How are you doing?"},
{id: 755, lessonId: 51, type: "SELECT", order: 755, question: "Have a good day."},
{id: 756, lessonId: 51, type: "SELECT", order: 756, question: "Good night"},
{id: 757, lessonId: 51, type: "SELECT", order: 757, question: "Goodbye see you tomorrow"},
{id: 758, lessonId: 51, type: "SELECT", order: 758, question: "goodbye"},
{id: 759, lessonId: 51, type: "SELECT", order: 759, question: "Have a good night rest"},

{id: 760, lessonId: 52, type: "SELECT", order: 760, question: "Good evening, Paul"},
{id: 761, lessonId: 52, type: "SELECT", order: 761, question: "Good morning"},
{id: 762, lessonId: 52, type: "SELECT", order: 762, question: "Afternoon"},
{id: 763, lessonId: 52, type: "SELECT", order: 763, question: "Goodnight"},
{id: 764, lessonId: 52, type: "SELECT", order: 764, question: "See you tomorrow"},
{id: 765, lessonId: 52, type: "SELECT", order: 765, question: "Goodbye"},
{id: 766, lessonId: 52, type: "SELECT", order: 766, question: "You are welcome"},
{id: 767, lessonId: 52, type: "SELECT", order: 767, question: "How are you?"},
{id: 768, lessonId: 52, type: "SELECT", order: 768, question: "Well done"},
{id: 769, lessonId: 52, type: "SELECT", order: 769, question: "Goodbye"},
{id: 770, lessonId: 52, type: "SELECT", order: 770, question: "Welcome"},
{id: 771, lessonId: 52, type: "SELECT", order: 771, question: "You?"},
{id: 772, lessonId: 52, type: "SELECT", order: 772, question: "Thank you"},
{id: 773, lessonId: 52, type: "SELECT", order: 773, question: "Tomorrow"},
{id: 774, lessonId: 52, type: "SELECT", order: 774, question: "Sleep"},

{id: 775, lessonId: 53, type: "SELECT", order: 775, question: "Good morning Paul"},
{id: 776, lessonId: 53, type: "SELECT", order: 776, question: "Alright, see you tomorrow"},
{id: 777, lessonId: 53, type: "SELECT", order: 777, question: "See you soon"},
{id: 778, lessonId: 53, type: "SELECT", order: 778, question: "Goodbye, see you tomorrow"},
{id: 779, lessonId: 53, type: "SELECT", order: 779, question: "Hello"},
{id: 780, lessonId: 53, type: "SELECT", order: 780, question: "How are you doing?"},
{id: 781, lessonId: 53, type: "SELECT", order: 781, question: "Good afternoon"},
{id: 782, lessonId: 53, type: "SELECT", order: 782, question: "Thank you"},
{id: 783, lessonId: 53, type: "SELECT", order: 783, question: "Did you sleep well?"},
{id: 784, lessonId: 53, type: "SELECT", order: 784, question: "Good night"},
{id: 785, lessonId: 53, type: "SELECT", order: 785, question: "I am doing very well"},
{id: 786, lessonId: 53, type: "SELECT", order: 786, question: "Yes"},
{id: 787, lessonId: 53, type: "SELECT", order: 787, question: "Hello Paul, how are you?"},
{id: 788, lessonId: 53, type: "SELECT", order: 788, question: "Yes, thank you."},
{id: 789, lessonId: 53, type: "SELECT", order: 789, question: "Did you sleep well?"},

{id: 790, lessonId: 54, type: "SELECT", order: 790, question: "Hello Paul, how are you?"},
{id: 791, lessonId: 54, type: "SELECT", order: 791, question: "Good"},
{id: 792, lessonId: 54, type: "SELECT", order: 792, question: "Good morning, how are you doing?"},
{id: 793, lessonId: 54, type: "SELECT", order: 793, question: "I am doing very well, and you?"},
{id: 794, lessonId: 54, type: "SELECT", order: 794, question: "Good evening how are you doing?"},
{id: 795, lessonId: 54, type: "SELECT", order: 795, question: "I am Paul, and you are?"},
{id: 796, lessonId: 54, type: "SELECT", order: 796, question: "Hi, how are you?"},
{id: 797, lessonId: 54, type: "SELECT", order: 797, question: "I am doing very well, thank you"},
{id: 798, lessonId: 54, type: "SELECT", order: 798, question: "I’m doing very well"},
{id: 799, lessonId: 54, type: "SELECT", order: 799, question: "How are you"},
{id: 800, lessonId: 54, type: "SELECT", order: 800, question: "Good evening, I missed you"},
{id: 801, lessonId: 54, type: "SELECT", order: 801, question: "Good"},
{id: 802, lessonId: 54, type: "SELECT", order: 802, question: "I am your friend"},
{id: 803, lessonId: 54, type: "SELECT", order: 803, question: "Goodbye"},
{id: 804, lessonId: 54, type: "SELECT", order: 804, question: "I am Paul"},

{id: 805, lessonId: 55, type: "SELECT", order: 805, question: "Have a good evening."},
{id: 806, lessonId: 55, type: "SELECT", order: 806, question: "Yes, I am very well"},
{id: 807, lessonId: 55, type: "SELECT", order: 807, question: "Yes, and you"},
{id: 808, lessonId: 55, type: "SELECT", order: 808, question: "Did you sleep well?"},
{id: 809, lessonId: 55, type: "SELECT", order: 809, question: "Are you awake?"},
{id: 810, lessonId: 55, type: "SELECT", order: 810, question: "Your are welcome"},
{id: 811, lessonId: 55, type: "SELECT", order: 811, question: "See you soon"},
{id: 812, lessonId: 55, type: "SELECT", order: 812, question: "Yes, I will travel by air"},
{id: 813, lessonId: 55, type: "SELECT", order: 813, question: "Did you just wake up"},
{id: 814, lessonId: 55, type: "SELECT", order: 814, question: "I am sorry"},
{id: 815, lessonId: 55, type: "SELECT", order: 815, question: "I am waiting for you"},
{id: 816, lessonId: 55, type: "SELECT", order: 816, question: "Have a good night rest"},
{id: 817, lessonId: 55, type: "SELECT", order: 817, question: "I am driving the car"},
{id: 818, lessonId: 55, type: "SELECT", order: 818, question: "How is your day going?"},
{id: 819, lessonId: 55, type: "SELECT", order: 819, question: "We thank God"},

{id: 820, lessonId: 56, type: "SELECT", order: 820, question: "I speak Pidgin"},
{id: 821, lessonId: 56, type: "SELECT", order: 821, question: "Excuse me do you speak pidgin"},
{id: 822, lessonId: 56, type: "SELECT", order: 822, question: "No, I am from Delta"},
{id: 823, lessonId: 56, type: "SELECT", order: 823, question: "I need a cab"},
{id: 824, lessonId: 56, type: "SELECT", order: 824, question: "Where does one get a cab?"},
{id: 825, lessonId: 56, type: "SELECT", order: 825, question: "I am a Nigerian"},
{id: 826, lessonId: 56, type: "SELECT", order: 826, question: "What is your name"},
{id: 827, lessonId: 56, type: "SELECT", order: 827, question: "Her name is Cari"},
{id: 828, lessonId: 56, type: "SELECT", order: 828, question: "Are you from Delta"},
{id: 829, lessonId: 56, type: "SELECT", order: 829, question: "My name is Ejiro"},
{id: 830, lessonId: 56, type: "SELECT", order: 830, question: "No, I am from Delta"},
{id: 831, lessonId: 56, type: "SELECT", order: 831, question: "I am visiting Nigeria"},
{id: 832, lessonId: 56, type: "SELECT", order: 832, question: "I will be staying for a week"},
{id: 833, lessonId: 56, type: "SELECT", order: 833, question: "I am staying at the hotel"},
{id: 834, lessonId: 56, type: "SELECT", order: 834, question: "I am alone"},

{id: 835, lessonId: 57, type: "SELECT", order: 835, question: "What do you do for a living"},
{id: 836, lessonId: 57, type: "SELECT", order: 836, question: "Where are you from?"},
{id: 837, lessonId: 57, type: "SELECT", order: 837, question: "Do you have children?"},
{id: 838, lessonId: 57, type: "SELECT", order: 838, question: "Have you been to Nigeria"},
{id: 839, lessonId: 57, type: "SELECT", order: 839, question: "I am enjoying my visit"},
{id: 840, lessonId: 57, type: "SELECT", order: 840, question: "I want to see the beach"},
{id: 841, lessonId: 57, type: "SELECT", order: 841, question: "Come to my house"},
{id: 842, lessonId: 57, type: "SELECT", order: 842, question: "My wife is Nigerian"},
{id: 843, lessonId: 57, type: "SELECT", order: 843, question: "Greet your family"},
{id: 844, lessonId: 57, type: "SELECT", order: 844, question: "I want to visit the market"},
{id: 845, lessonId: 57, type: "SELECT", order: 845, question: "Where is the cinema"},
{id: 846, lessonId: 57, type: "SELECT", order: 846, question: "Excuse me"},
{id: 847, lessonId: 57, type: "SELECT", order: 847, question: "Come let us eat"},
{id: 848, lessonId: 57, type: "SELECT", order: 848, question: "I am tired"},
{id: 849, lessonId: 57, type: "SELECT", order: 849, question: "I am happy to be here"},

{id: 850, lessonId: 58, type: "SELECT", order: 850, question: "Aunty is at Church"},
{id: 851, lessonId: 58, type: "SELECT", order: 851, question: "I went to market"},
{id: 852, lessonId: 58, type: "SELECT", order: 852, question: "I speak Pidgin and Isoko"},
{id: 853, lessonId: 58, type: "SELECT", order: 853, question: "Incredible! My name is Akpos"},
{id: 854, lessonId: 58, type: "SELECT", order: 854, question: "Caro speaks pidgin and isoko"},
{id: 855, lessonId: 58, type: "SELECT", order: 855, question: "You speak Pidgin"},
{id: 856, lessonId: 58, type: "SELECT", order: 856, question: "They speak Pidgin"},
{id: 857, lessonId: 58, type: "SELECT", order: 857, question: "He is from Delta"},
{id: 858, lessonId: 58, type: "SELECT", order: 858, question: "She is from Delta"},
{id: 859, lessonId: 58, type: "SELECT", order: 859, question: "My husband is out"},
{id: 860, lessonId: 58, type: "SELECT", order: 860, question: "Her daughter is a teacher"},
{id: 861, lessonId: 58, type: "SELECT", order: 861, question: "His son is a policeman"},
{id: 862, lessonId: 58, type: "SELECT", order: 862, question: "My name is Eloho"},
{id: 863, lessonId: 58, type: "SELECT", order: 863, question: "I speak pidgin and Isoko"},
{id: 864, lessonId: 58, type: "SELECT", order: 864, question: "Greet your family"},

{id: 865, lessonId: 59, type: "SELECT", order: 865, question: "It is my house"},
{id: 866, lessonId: 59, type: "SELECT", order: 866, question: "Speak to my son"},
{id: 867, lessonId: 59, type: "SELECT", order: 867, question: "Speak to my daughter"},
{id: 868, lessonId: 59, type: "SELECT", order: 868, question: "They"},
{id: 869, lessonId: 59, type: "SELECT", order: 869, question: "They are many"},
{id: 870, lessonId: 59, type: "SELECT", order: 870, question: "He"},
{id: 871, lessonId: 59, type: "SELECT", order: 871, question: "He is tall"},
{id: 872, lessonId: 59, type: "SELECT", order: 872, question: "She"},
{id: 873, lessonId: 59, type: "SELECT", order: 873, question: "She can cook"},
{id: 874, lessonId: 59, type: "SELECT", order: 874, question: "His"},
{id: 875, lessonId: 59, type: "SELECT", order: 875, question: "His brother is handsome"},
{id: 876, lessonId: 59, type: "SELECT", order: 876, question: "Her"},
{id: 877, lessonId: 59, type: "SELECT", order: 877, question: "Her sister is beautiful"},
{id: 878, lessonId: 59, type: "SELECT", order: 878, question: "My"},
{id: 879, lessonId: 59, type: "SELECT", order: 879, question: "My book"},

{id: 880, lessonId: 60, type: "SELECT", order: 880, question: "We"},
{id: 881, lessonId: 60, type: "SELECT", order: 881, question: "We are back"},
{id: 882, lessonId: 60, type: "SELECT", order: 882, question: "Us"},
{id: 883, lessonId: 60, type: "SELECT", order: 883, question: "Come and join us"},
{id: 884, lessonId: 60, type: "SELECT", order: 884, question: "Meet my friend"},
{id: 885, lessonId: 60, type: "SELECT", order: 885, question: "You"},
{id: 886, lessonId: 60, type: "SELECT", order: 886, question: "Who are you?"},
{id: 887, lessonId: 60, type: "SELECT", order: 887, question: "They"},
{id: 888, lessonId: 60, type: "SELECT", order: 888, question: "Who are they"},
{id: 889, lessonId: 60, type: "SELECT", order: 889, question: "It is mine"},
{id: 890, lessonId: 60, type: "SELECT", order: 890, question: "They are mine"},
{id: 891, lessonId: 60, type: "SELECT", order: 891, question: "Me"},
{id: 892, lessonId: 60, type: "SELECT", order: 892, question: "Talk to me"},
{id: 893, lessonId: 60, type: "SELECT", order: 893, question: "You and I"},
{id: 894, lessonId: 60, type: "SELECT", order: 894, question: "You and I forever"},

 ]);

 await db.insert(schema.challengeOptions).values([
   // Q1: How are you?
   { id: 1, challengeId: 1, correct: false, text: "Má bínú", audioSrc: "m1-l1-q11-yr.mp3" }, // Reuse audio from Q11
   { id: 2, challengeId: 1, correct: false, text: "E ṣeun" },
   { id: 3, challengeId: 1, correct: true, text: "Báwo ni", audioSrc: "m1-l1-q1-yr.mp3" },

   // Q2: I am okay.
   { id: 4, challengeId: 2, correct: false, text: "Má bínú", audioSrc: "m1-l1-q11-yr.mp3" }, // Reuse audio from Q11
   { id: 5, challengeId: 2, correct: false, text: "E ṣeun" },
   { id: 6, challengeId: 2, correct: true, text: "Mo wa dáadáa", audioSrc: "m1-l1-q2-yr.mp3" },

   // Q3: What is your name?
   { id: 7, challengeId: 3, correct: true, text: "Kí ni orúkọ rẹ?", audioSrc: "m1-l1-q3-yr.mp3" },
   { id: 8, challengeId: 3, correct: false, text: "Mo wá láti Nàìjíríà" },
   { id: 9, challengeId: 3, correct: false, text: "Ẹ káàbọ̀" },

   // Q4: My name is Feranmi.
   { id: 10, challengeId: 4, correct: false, text: "Ǹjẹ́ ìwọ n kò?" },
   { id: 11, challengeId: 4, correct: false, text: "Mo wa dáadáa", audioSrc: "m1-l1-q2-yr.mp3" }, // Reuse audio
   { id: 12, challengeId: 4, correct: true, text: "Orúkọ mi ni Feranmi", audioSrc: "m1-l1-q4-yr.mp3" },

   // Q5: I am from Nigeria.
   { id: 13, challengeId: 5, correct: false, text: "Orúkọ mi ni Feranmi", audioSrc: "m1-l1-q4-yr.mp3" },
   { id: 14, challengeId: 5, correct: false, text: "E ṣeun" },
   { id: 15, challengeId: 5, correct: true, text: "Mo wá láti Nàìjíríà", audioSrc: "m1-l1-q5-yr.mp3" },

   // Q6: What about you?
   { id: 16, challengeId: 6, correct: false, text: "Kí ni orúkọ rẹ?", audioSrc: "m1-l1-q3-yr.mp3" }, // Reuse audio
   { id: 17, challengeId: 6, correct: false, text: "Béèni" },
   { id: 18, challengeId: 6, correct: true, text: "Ǹjẹ́ ìwọ n kò?", audioSrc: "m1-l1-q6-yr.mp3" },

   // Q7: No.
   { id: 19, challengeId: 7, correct: true, text: "Rárá", audioSrc: "m1-l1-q7-yr.mp3" },
   { id: 20, challengeId: 7, correct: false, text: "Mo wá láti Nàìjíríà", audioSrc: "m1-l1-q5-yr.mp3" }, // Reuse audio
   { id: 21, challengeId: 7, correct: false, text: "Béèni" },

   // Q8: Yes.
   { id: 22, challengeId: 8, correct: true, text: "Béèni", audioSrc: "m1-l1-q10-yr.mp3" },
   { id: 23, challengeId: 8, correct: false, text: "E ṣeun" },
   { id: 24, challengeId: 8, correct: false, text: "Rárá", audioSrc: "m1-l1-q7-yr.mp3" }, // Reuse audio

   // Q9: Thank you.
   { id: 25, challengeId: 9, correct: false, text: "Mo wa dáadáa", audioSrc: "m1-l1-q2-yr.mp3" }, // Reuse audio
   { id: 26, challengeId: 9, correct: true, text: "E ṣeun", audioSrc: "m1-l1-q11-yr.mp3" },
   { id: 27, challengeId: 9, correct: false, text: "Mo wá láti Nàìjíríà", audioSrc: "m1-l1-q5-yr.mp3" }, // Reuse audio

   // Q10: You’re welcome.
   { id: 28, challengeId: 10, correct: false, text: "Má bínú", audioSrc: "m1-l1-q11-yr.mp3" }, // Reuse audio
   { id: 29, challengeId: 10, correct: false, text: "Ǹjẹ́ ìwọ n kò?" },
   { id: 30, challengeId: 10, correct: true, text: "Ẹ káàbọ̀", audioSrc: "m1-l1-q12-yr.mp3" },

   // Q11: Sorry.
   { id: 31, challengeId: 11, correct: true, text: "Má bínú", audioSrc: "m1-l1-q11-yr.mp3" },
   { id: 32, challengeId: 11, correct: false, text: "Ẹ káàbọ̀", audioSrc: "m1-l1-q10-yr.mp3" }, // Reuse audio
   { id: 33, challengeId: 11, correct: false, text: "E ṣeun púpọ̀" },

   // Q12: Thank you so much.
   { id: 34, challengeId: 12, correct: false, text: "Kí ni orúkọ rẹ?", audioSrc: "m1-l1-q3-yr.mp3" }, // Reuse audio
   { id: 35, challengeId: 12, correct: false, text: "Rárá", audioSrc: "m1-l1-q7-yr.mp3" }, // Reuse audio
   { id: 36, challengeId: 12, correct: true, text: "E ṣeun púpọ̀", audioSrc: "m1-l1-q12-yr.mp3" },

    // Q1: Do you speak Yoruba? - Yoruba
  { id: 37, challengeId: 13, correct: false, text: "Díẹ̀ díẹ̀ ni mo mọ̀" },
  { id: 38, challengeId: 13, correct: true, text: "Ṣé o máa ń sọ Yorùbá?", audioSrc: "m1-l2-q1-yr.mp3" },
  { id: 39, challengeId: 13, correct: false, text: "Ṣé mo lè kọ́ ní pẹ̀lú rẹ?" },

  // Q2: Just a little. - Yoruba
  { id: 40, challengeId: 14, correct: false, text: "Mo fẹ́ Yorùbá" },
  { id: 41, challengeId: 14, correct: true, text: "Díẹ̀ díẹ̀ ni mo mọ̀", audioSrc: "m1-l2-q2-yr.mp3" },
  { id: 42, challengeId: 14, correct: false, text: "Ọmọ ọdún mẹ́tàlélógún ni mi" },

  // Q3: I like Yoruba. - Yoruba
  { id: 43, challengeId: 15, correct: true, text: "Mo nifẹ́ Yorùbá", audioSrc: "m1-l2-q3-yr.mp3" },
  { id: 44, challengeId: 15, correct: false, text: "Díẹ̀ díẹ̀ ni mo mọ̀", audioSrc: "m1-l2-q2-yr.mp3" },
  { id: 45, challengeId: 15, correct: false, text: "Mo ń bá ẹ sọ̀rọ̀" },

  // Q4: Can I practice with you? - Yoruba
  { id: 46, challengeId: 16, correct: false, text: "Kí ni èyí?" },
  { id: 47, challengeId: 16, correct: true, text: "Ṣé mo lè kọ́ ní pẹ̀lú rẹ?", audioSrc: "m1-l2-q4-yr.mp3" },
  { id: 48, challengeId: 16, correct: false, text: "Ọmọ ọdún mẹ́tàlélógún ni mi" },

  // Q5: How old are you? - Yoruba
  { id: 49, challengeId: 17, correct: true, text: "Ọmọ ọdún mélòó ni ìwọ?", audioSrc: "m1-l2-q5-yr.mp3" },
  { id: 50, challengeId: 17, correct: false, text: "Ọmọ ọdún mẹ́tàlélógún ni mi" },
  { id: 51, challengeId: 17, correct: false, text: "Mo nífẹ̀ẹ́ rẹ" },

  // Q6: I am thirty-five years old. - Yoruba
  { id: 52, challengeId: 18, correct: true, text: "Ọmọ ọdún mẹ́tàlélógún ni mi", audioSrc: "m1-l2-q6-yr.mp3" },
  { id: 53, challengeId: 18, correct: false, text: "Mo nífẹ̀ẹ́ rẹ" },
  { id: 54, challengeId: 18, correct: false, text: "Mo ń gbé ní Amẹ́ríkà"},

  // Q7: I am talking to you. - Yoruba
  { id: 55, challengeId: 19, correct: true, text: "Mo ń bá ẹ sọ̀rọ̀", audioSrc: "m1-l2-q7-yr.mp3" },
  { id: 56, challengeId: 19, correct: false, text: "Nibo ni o ń gbé?" },
  { id: 57, challengeId: 19, correct: false, text: "Kí ni èyí?" },

  // Q8: What is this? - Yoruba
  { id: 58, challengeId: 20, correct: false, text: "Ọmọ ọdún mẹ́tàlélógún ni mi" },
  { id: 59, challengeId: 20, correct: false, text: "Mo ń bá ẹ sọ̀rọ̀" },
  { id: 60, challengeId: 20, correct: true, text: "Kí ni èyí?", audioSrc: "m1-l2-q8-yr.mp3" },

  // Q9: What does that mean? - Yoruba
  { id: 61, challengeId: 21, correct: true, text: "Kí ni ìtumọ̀ rẹ?", audioSrc: "m1-l2-q9-yr.mp3" },
  { id: 62, challengeId: 21, correct: false, text: "Ọmọ ọdún mẹ́tàlélógún ni mi" },
  { id: 63, challengeId: 21, correct: false, text: "Ó lẹwà púpọ̀" },

  // Q10: Where are you? - Yoruba
  { id: 64, challengeId: 22, correct: true, text: "Nibo ni ìwọ wà?", audioSrc: "m1-l2-q10-yr.mp3" },
  { id: 65, challengeId: 22, correct: false, text: "Nibo ni o ń gbé?" },
  { id: 66, challengeId: 22, correct: false, text: "Ọmọ ọdún mẹ́tàlélógún ni mi" },

  // Q11: I love you. - Yoruba
  { id: 67, challengeId: 23, correct: true, text: "Mo nífẹ̀ẹ́ rẹ", audioSrc: "m1-l2-q11-yr.mp3" },
  { id: 68, challengeId: 23, correct: false, text: "Mo ń gbé ní Amẹ́ríkà" },
  { id: 69, challengeId: 23, correct: false, text: "Ó lẹwà púpọ̀" },

  // Q12: Where do you live? - Yoruba
  { id: 70, challengeId: 24, correct: false, text: "Mo nífẹ̀ẹ́ rẹ" },
  { id: 71, challengeId: 24, correct: false, text: "Ó lẹwà púpọ̀" },
  { id: 72, challengeId: 24, correct: true, text: "Nibo ni o ń gbé?", audioSrc: "m1-l2-q12-yr.mp3" },

  // Q13: That’s beautiful. - Yoruba
  { id: 73, challengeId: 25, correct: true, text: "Ó lẹwà púpọ̀", audioSrc: "m1-l2-q13-yr.mp3" },
  { id: 74, challengeId: 25, correct: false, text: "Mo nífẹ̀ẹ́ rẹ" },
  { id: 75, challengeId: 25, correct: false, text: "Nibo ni o ń gbé?" },

  // Q14: She is beautiful. - Yoruba
  { id: 76, challengeId: 26, correct: true, text: "Ó lẹwà púpọ̀", audioSrc: "m1-l2-q14-yr.mp3" },
  { id: 77, challengeId: 26, correct: false, text: "Ó lẹwà" },
  { id: 78, challengeId: 26, correct: false, text: "Nibo ni o ń gbé?" },

  // Q15: I live in the USA. - Yoruba
  { id: 79, challengeId: 27, correct: true, text: "Mo ń gbé ní Amẹ́ríkà", audioSrc: "m1-l2-q15-yr.mp3" },
  { id: 80, challengeId: 27, correct: false, text: "Mo ń gbé ní Nàìjíríà" },
  { id: 81, challengeId: 27, correct: false, text: "Ó lẹwà púpọ̀" },
  
    // Q1: They are dancing.
    { id: 82, challengeId: 28, correct: false, text: "Kí ni ìtumọ̀ rẹ?" },
    { id: 83, challengeId: 28, correct: false, text: "Bá mi sọ̀rọ̀" },
    { id: 84, challengeId: 28, correct: true, text: "Wọ́n ń jó", audioSrc: "m1-l3-q1-yr.mp3" },
  
    // Q2: What do you mean?
    { id: 85, challengeId: 29, correct: false, text: "O gba" },
    { id: 86, challengeId: 29, correct: true, text: "Kí ni ìtumọ̀ rẹ?", audioSrc: "m1-l3-q2-yr.mp3" },
    { id: 87, challengeId: 29, correct: false, text: "Mo mọ̀" },
  
    // Q3: Speak to me.
    { id: 88, challengeId: 30, correct: false, text: "Èmi náà nífẹ̀ẹ́ rẹ" },
    { id: 89, challengeId: 30, correct: true, text: "Bá mi sọ̀rọ̀", audioSrc: "m1-l3-q3-yr.mp3" },
    { id: 90, challengeId: 30, correct: false, text: "Kìí ṣe bẹ́ẹ̀" },
  
    // Q4: I love you too.
    { id: 91, challengeId: 31, correct: false, text: "Mo mọ̀" },
    { id: 92, challengeId: 31, correct: true, text: "Èmi náà nífẹ̀ẹ́ rẹ", audioSrc: "m1-l3-q4-yr.mp3" },
    { id: 93, challengeId: 31, correct: false, text: "Nibo ni o ń lọ?" },
  
    // Q5: It is not like that.
    { id: 94, challengeId: 32, correct: true, text: "Kìí ṣe bẹ́ẹ̀", audioSrc: "m1-l3-q5-yr.mp3" },
    { id: 95, challengeId: 32, correct: false, text: "Gẹ́gẹ́ bẹẹ" },
    { id: 96, challengeId: 32, correct: false, text: "Nibo ni o ń lọ?" },
  
    // Q6: Where are you going?
    { id: 97, challengeId: 33, correct: false, text: "Ẹ jẹ́ ká lọ" },
    { id: 98, challengeId: 33, correct: true, text: "Nibo ni o ń lọ?", audioSrc: "m1-l3-q6-yr.mp3" },
    { id: 99, challengeId: 33, correct: false, text: "O o gba" },
  
    // Q7: Come back here.
    { id: 100, challengeId: 34, correct: true, text: "Padà wá síbí", audioSrc: "m1-l3-q7-yr.mp3" },
    { id: 101, challengeId: 34, correct: false, text: "Nibo ni o ń lọ?" },
    { id: 102, challengeId: 34, correct: false, text: "Mo mọ̀" },
  
    // Q8: Are you alone?
    { id: 103, challengeId: 35, correct: true, text: "Ṣé ìwọ nìkan ni?", audioSrc: "m1-l3-q8-yr.mp3" },
    { id: 104, challengeId: 35, correct: false, text: "Béèni" },
    { id: 105, challengeId: 35, correct: false, text: "Rárá" },
  
    // Q9: Let us go.
    { id: 106, challengeId: 36, correct: true, text: "Ẹ jẹ́ ká lọ", audioSrc: "m1-l3-q9-yr.mp3" },
    { id: 107, challengeId: 36, correct: false, text: "Padà wá síbí" },
    { id: 108, challengeId: 36, correct: false, text: "O o gba" },
  
    // Q10: I know.
    { id: 109, challengeId: 37, correct: false, text: "Gẹ́gẹ́ bẹ́ẹ̀" },
    { id: 110, challengeId: 37, correct: true, text: "Mo mọ̀", audioSrc: "m1-l3-q10-yr.mp3" },
    { id: 111, challengeId: 37, correct: false, text: "Nibo ni o ń lọ?" },
  
    // Q11: Exactly.
    { id: 112, challengeId: 38, correct: true, text: "Gẹ́gẹ́ bẹ́ẹ̀", audioSrc: "m1-l3-q11-yr.mp3" },
    { id: 113, challengeId: 38, correct: false, text: "Mo mọ̀" },
    { id: 114, challengeId: 38, correct: false, text: "O o gba" },
  
    // Q12: You’re correct.
    { id: 115, challengeId: 39, correct: true, text: "O gbaa", audioSrc: "m1-l3-q12-yr.mp3" },
    { id: 116, challengeId: 39, correct: false, text: "Ó lẹwà púpọ̀" },
    { id: 117, challengeId: 39, correct: false, text: "Èmi náà nífẹ̀ẹ́ rẹ" },
  
    // Q13: You’re not correct.
    { id: 118, challengeId: 40, correct: false, text: "Ó lẹwà púpọ̀" },
    { id: 119, challengeId: 40, correct: false, text: "O gba" },
    { id: 120, challengeId: 40, correct: true, text: "O o gba", audioSrc: "m1-l3-q13-yr.mp3" },
  
    // Q14: That’s beautiful.
    { id: 121, challengeId: 41, correct: false, text: "Mo mọ̀" },
    { id: 122, challengeId: 41, correct: true, text: "Ó lẹwà púpọ̀", audioSrc: "m1-l3-q14-yr.mp3" },
    { id: 123, challengeId: 41, correct: false, text: "Nibo ni o ń lọ?" },
  
    // Q15: Do you know?
    { id: 124, challengeId: 42, correct: false, text: "O o gba" },
    { id: 125, challengeId: 42, correct: true, text: "Ṣé o mọ̀?", audioSrc: "m1-l3-q15-yr.mp3" },
    { id: 126, challengeId: 42, correct: false, text: "Gẹ́gẹ́ bẹ́ẹ̀" },
      // Yoruba Lesson 4
  { id: 127, challengeId: 43, correct: false, text: "Kí ni o fẹ́ ra?" },
  { id: 128, challengeId: 43, correct: true, text: "Mo fẹ́ ra", audioSrc: "m1-l4-q1-yr.mp3" },
  { id: 129, challengeId: 43, correct: false, text: "Isu Ẹgbẹ̀rún kan" },

  { id: 130, challengeId: 44, correct: true, text: "Kí ni o fẹ́ ra?", audioSrc: "m1-l4-q2-yr.mp3" },
  { id: 131, challengeId: 44, correct: false, text: "Isu Ẹgbẹ̀rún kan" },
  { id: 132, challengeId: 44, correct: false, text: "Mo fẹ́ ra" },

  { id: 133, challengeId: 45, correct: true, text: "Ìṣu", audioSrc: "m1-l4-q3-yr.mp3" },
  { id: 134, challengeId: 45, correct: false, text: "Èló ni?" },
  { id: 135, challengeId: 45, correct: false, text: "Kí ni o fẹ́ ra?" },

  { id: 136, challengeId: 46, correct: false, text: "Isu Ẹgbẹ̀rún kan" },
  { id: 137, challengeId: 46, correct: true, text: "Èló ni?", audioSrc: "m1-l4-q4-yr.mp3" },
  { id: 138, challengeId: 46, correct: false, text: "Kí ló sọ?" },

  { id: 139, challengeId: 47, correct: true, text: "Isu Ẹgbẹ̀rún kan", audioSrc: "m1-l4-q5-yr.mp3" },
  { id: 140, challengeId: 47, correct: false, text: "Èló ni?" },
  { id: 141, challengeId: 47, correct: false, text: "Má bínú" },

  { id: 142, challengeId: 48, correct: true, text: "Mo ń bọ̀", audioSrc: "m1-l4-q6-yr.mp3" },
  { id: 143, challengeId: 48, correct: false, text: "Padà wá" },
  { id: 144, challengeId: 48, correct: false, text: "Má bínú" },

  { id: 145, challengeId: 49, correct: true, text: "Má bínú", audioSrc: "m1-l4-q7-yr.mp3" },
  { id: 146, challengeId: 49, correct: false, text: "Kí ló sọ?" },
  { id: 147, challengeId: 49, correct: false, text: "Padà wá" },

  { id: 148, challengeId: 50, correct: true, text: "Kò sí", audioSrc: "m1-l4-q8-yr.mp3" },
  { id: 149, challengeId: 50, correct: false, text: "Mo ti gbọ́ ọ" },
  { id: 150, challengeId: 50, correct: false, text: "Padà wá" },

  { id: 151, challengeId: 51, correct: true, text: "Padà wá", audioSrc: "m1-l4-q9-yr.mp3" },
  { id: 152, challengeId: 51, correct: false, text: "Mo ti gbọ́ ọ" },
  { id: 153, challengeId: 51, correct: false, text: "Má bínú" },

  { id: 154, challengeId: 52, correct: true, text: "Mo ti gbọ́ ọ", audioSrc: "m1-l4-q10-yr.mp3" },
  { id: 155, challengeId: 52, correct: false, text: "Má bínú" },
  { id: 156, challengeId: 52, correct: false, text: "Padà wá" },

  { id: 157, challengeId: 53, correct: true, text: "Ní àkókò wo?", audioSrc: "m1-l4-q11-yr.mp3" },
  { id: 158, challengeId: 53, correct: false, text: "Ní òwúrọ̀" },
  { id: 159, challengeId: 53, correct: false, text: "Ní ọ̀sán" },

  { id: 160, challengeId: 54, correct: true, text: "Ní ọ̀sán", audioSrc: "m1-l4-q12-yr.mp3" },
  { id: 161, challengeId: 54, correct: false, text: "Ní àkókò wo?" },
  { id: 162, challengeId: 54, correct: false, text: "Ní ìrọ̀lẹ́" },

  { id: 163, challengeId: 55, correct: true, text: "Maa wa", audioSrc: "m1-l4-q13-yr.mp3" },
  { id: 164, challengeId: 55, correct: false, text: "Mo ń bọ̀" },
  { id: 165, challengeId: 55, correct: false, text: "Kí ló sọ?" },

  { id: 166, challengeId: 56, correct: true, text: "Mo ń lọ", audioSrc: "m1-l4-q14-yr.mp3" },
  { id: 167, challengeId: 56, correct: false, text: "Maa wa" },
  { id: 168, challengeId: 56, correct: false, text: "Mo ń bọ̀" },

  { id: 169, challengeId: 57, correct: true, text: "Kí ló sọ?", audioSrc: "m1-l4-q15-yr.mp3" },
  { id: 170, challengeId: 57, correct: false, text: "Mo ń bọ̀" },
  { id: 171, challengeId: 57, correct: false, text: "Má bínú" },

  // Yoruba Lesson 5
  { id: 172, challengeId: 58, correct: true, text: "Nibo ni o ń lọ?", audioSrc: "m1-l5-q1-yr.mp3" },
  { id: 173, challengeId: 58, correct: false, text: "Mo ń lọ sí Nicon Town" },
  { id: 174, challengeId: 58, correct: false, text: "Jóko ní ẹ̀yìn" },

  { id: 175, challengeId: 59, correct: true, text: "Mo ń lọ sí Nicon Town", audioSrc: "m1-l5-q2-yr.mp3" },
  { id: 176, challengeId: 59, correct: false, text: "Nibo ni o ń lọ?" },
  { id: 177, challengeId: 59, correct: false, text: "Wọlé" },

  { id: 178, challengeId: 60, correct: true, text: "Wọlé", audioSrc: "m1-l5-q3-yr.mp3" },
  { id: 179, challengeId: 60, correct: false, text: "Sọkalẹ̀ níbí" },
  { id: 180, challengeId: 60, correct: false, text: "Nibo ni wọ́n wà?" },

  { id: 181, challengeId: 61, correct: true, text: "Jóko ní ẹ̀yìn", audioSrc: "m1-l5-q4-yr.mp3" },
  { id: 182, challengeId: 61, correct: false, text: "Wọlé" },
  { id: 183, challengeId: 61, correct: false, text: "Ẹ káàsán" },

  { id: 184, challengeId: 62, correct: true, text: "Nibo ni wọ́n wà?", audioSrc: "m1-l5-q5-yr.mp3" },
  { id: 185, challengeId: 62, correct: false, text: "Nibo ni o ń lọ?" },
  { id: 186, challengeId: 62, correct: false, text: "Tan ina" },

  { id: 187, challengeId: 63, correct: true, text: "Ẹ káàsán", audioSrc: "m1-l5-q6-yr.mp3" },
  { id: 188, challengeId: 63, correct: false, text: "Sọkalẹ̀ níbí" },
  { id: 189, challengeId: 63, correct: false, text: "Ẹ kú abọ̀" },

  { id: 190, challengeId: 64, correct: true, text: "Gbà owó rẹ", audioSrc: "m1-l5-q7-yr.mp3" },
  { id: 191, challengeId: 64, correct: false, text: "E ṣeun" },
  { id: 192, challengeId: 64, correct: false, text: "Kí ni o fẹ́ jẹ?" },

  { id: 193, challengeId: 65, correct: true, text: "Ẹ káàsán", audioSrc: "m1-l5-q8-yr.mp3" },
  { id: 194, challengeId: 65, correct: false, text: "Kí ló sọ?" },
  { id: 195, challengeId: 65, correct: false, text: "Ẹ kú abọ̀" },

  { id: 196, challengeId: 66, correct: true, text: "Ẹ kú abọ̀", audioSrc: "m1-l5-q9-yr.mp3" },
  { id: 197, challengeId: 66, correct: false, text: "O dàbọ̀" },
  { id: 198, challengeId: 66, correct: false, text: "E ṣeun" },

  { id: 199, challengeId: 67, correct: true, text: "Tan ina", audioSrc: "m1-l5-q10-yr.mp3" },
  { id: 200, challengeId: 67, correct: false, text: "Kí ni o fẹ́ jẹ?" },
  { id: 201, challengeId: 67, correct: false, text: "Ṣé o ní omi?" },

  { id: 202, challengeId: 68, correct: true, text: "Kí ni o fẹ́ jẹ?", audioSrc: "m1-l5-q11-yr.mp3" },
  { id: 203, challengeId: 68, correct: false, text: "Ṣé o ní omi?" },
  { id: 204, challengeId: 68, correct: false, text: "Tan ina" },

  { id: 205, challengeId: 69, correct: true, text: "Ṣé o ní omi?", audioSrc: "m1-l5-q12-yr.mp3" },
  { id: 206, challengeId: 69, correct: false, text: "E ṣeun" },
  { id: 207, challengeId: 69, correct: false, text: "Kí ni o fẹ́ jẹ?" },

  { id: 208, challengeId: 70, correct: true, text: "E ṣeun", audioSrc: "m1-l5-q13-yr.mp3" },
  { id: 209, challengeId: 70, correct: false, text: "O dàbọ̀" },
  { id: 210, challengeId: 70, correct: false, text: "Ẹ kú abọ̀" },

  { id: 211, challengeId: 71, correct: true, text: "O dàbọ̀", audioSrc: "m1-l5-q14-yr.mp3" },
  { id: 212, challengeId: 71, correct: false, text: "E ṣeun" },
  { id: 213, challengeId: 71, correct: false, text: "Ẹ kú abọ̀" },
  { id: 214, challengeId: 72, correct: false, text: "Ẹ káárọ̀" },
  { id: 215, challengeId: 72, correct: true, text: "Ẹ ṣé púpọ̀", audioSrc: "m2-l1-q1-yr.mp3" },
  { id: 216, challengeId: 72, correct: false, text: "Wo" },

  { id: 217, challengeId: 73, correct: false, text: "Ẹ ṣé púpọ̀" },
  { id: 218, challengeId: 73, correct: false, text: "Ẹ káàbọ̀" },
  { id: 219, challengeId: 73, correct: true, text: "Ẹ káárọ̀", audioSrc: "m2-l1-q2-yr.mp3" },

  { id: 220, challengeId: 74, correct: true, text: "Ẹ káárọ̀", audioSrc: "m2-l1-q3-yr.mp3" },
  { id: 221, challengeId: 74, correct: false, text: "Wo" },
  { id: 222, challengeId: 74, correct: false, text: "Ẹ nlé" },

  { id: 223, challengeId: 75, correct: false, text: "Ẹ káàbọ̀" },
  { id: 224, challengeId: 75, correct: true, text: "Ẹ káàsán", audioSrc: "m2-l1-q4-yr.mp3" },
  { id: 225, challengeId: 75, correct: false, text: "Ọ̀dọ̀ alẹ́ dáadáa" },

  { id: 226, challengeId: 76, correct: false, text: "Ẹ ṣé púpọ̀" },
  { id: 227, challengeId: 76, correct: false, text: "Ẹ káárọ̀" },
  { id: 228, challengeId: 76, correct: true, text: "Ẹ káàbọ̀", audioSrc: "m2-l1-q5-yr.mp3" },

  { id: 229, challengeId: 77, correct: false, text: "Wo" },
  { id: 230, challengeId: 77, correct: true, text: "Ọ̀dọ̀ alẹ́ dáadáa", audioSrc: "m2-l1-q6-yr.mp3" },
  { id: 231, challengeId: 77, correct: false, text: "Ẹ nlé" },

  { id: 232, challengeId: 78, correct: true, text: "Odara Gan", audioSrc: "m2-l1-q7-yr.mp3" },
  { id: 233, challengeId: 78, correct: false, text: "Ẹ káárọ̀" },
  { id: 234, challengeId: 78, correct: false, text: "Ẹ ní ọjọ́ àlàáfíà" },

  { id: 235, challengeId: 79, correct: false, text: "Ṣé ẹ ń ṣe dáadáa?" },
  { id: 236, challengeId: 79, correct: false, text: "O dáàbò" },
  { id: 237, challengeId: 79, correct: true, text: "Ẹ nlé", audioSrc: "m2-l1-q8-yr.mp3" },

  { id: 238, challengeId: 80, correct: true, text: "O dáàbò", audioSrc: "m2-l1-q9-yr.mp3" },
  { id: 239, challengeId: 80, correct: false, text: "Ẹ ní alẹ́ àlàáfíà" },
  { id: 240, challengeId: 80, correct: false, text: "Ẹ ní ọjọ́ àlàáfíà" },

  { id: 241, challengeId: 81, correct: true, text: "bawo ni o n se?", audioSrc: "m2-l1-q10-yr.mp3" },
  { id: 242, challengeId: 81, correct: false, text: "Wo" },
  { id: 243, challengeId: 81, correct: false, text: "Ẹ ṣé púpọ̀" },

  { id: 244, challengeId: 82, correct: true, text: "Ẹ ní ọjọ́ àlàáfíà", audioSrc: "m2-l1-q11-yr.mp3" },
  { id: 245, challengeId: 82, correct: false, text: "Ẹ káárọ̀" },
  { id: 246, challengeId: 82, correct: false, text: "Ẹ káàbọ̀" },

  { id: 247, challengeId: 83, correct: true, text: "O dáàbò, máà ri ẹ lọ́la", audioSrc: "m2-l1-q12-yr.mp3" },
  { id: 248, challengeId: 83, correct: false, text: "Ẹ káárọ̀" },
  { id: 249, challengeId: 83, correct: false, text: "E ka le" },

  { id: 250, challengeId: 84, correct: true, text: "O dáàbò, máà ri ẹ lọ́la", audioSrc: "m2-l1-q13-yr.mp3" },
  { id: 251, challengeId: 84, correct: false, text: "O dáàbò" },
  { id: 252, challengeId: 84, correct: false, text: "Ẹ nlé" },

  { id: 253, challengeId: 85, correct: true, text: "O dáàbò", audioSrc: "m2-l1-q14-yr.mp3" },
  { id: 254, challengeId: 85, correct: false, text: "Ẹ káàbọ̀" },
  { id: 255, challengeId: 85, correct: false, text: "Ẹ ní ọjọ́ àlàáfíà" },

  { id: 256, challengeId: 86, correct: true, text: "Ẹ ní alẹ́ àlàáfíà", audioSrc: "m2-l1-q15-yr.mp3" },
  { id: 257, challengeId: 86, correct: false, text: "Ẹ ṣé púpọ̀" },
  { id: 258, challengeId: 86, correct: false, text: "Ẹ káárọ̀" },


  { id: 259, challengeId: 87, correct: false, text: "Ẹ káárọ̀" },
  { id: 260, challengeId: 87, correct: true, text: "Ẹ káalelé, Paul", audioSrc: "m2-l2-q1-yr.mp3" },
  { id: 261, challengeId: 87, correct: false, text: "Máà ri ẹ lọ́la" },

  { id: 262, challengeId: 88, correct: false, text: "O dáàbò" },
  { id: 263, challengeId: 88, correct: true, text: "Ẹ káárọ̀", audioSrc: "m2-l2-q2-yr.mp3" },
  { id: 264, challengeId: 88, correct: false, text: "Ọla" },

  { id: 265, challengeId: 89, correct: true, text: "Ẹ káàsán", audioSrc: "m2-l2-q3-yr.mp3" },
  { id: 266, challengeId: 89, correct: false, text: "Ẹ káalẹ́, Paul" },
  { id: 267, challengeId: 89, correct: false, text: "Ẹ káárọ̀" },

  { id: 268, challengeId: 90, correct: false, text: "Night" },
  { id: 269, challengeId: 90, correct: true, text: "Morning", audioSrc: "m2-l2-q4-yr.mp3" },
  { id: 270, challengeId: 90, correct: false, text: "Afternoon" },

  { id: 271, challengeId: 91, correct: false, text: "Ẹ ṣé púpọ̀" },
  { id: 272, challengeId: 91, correct: true, text: "Máà ri ẹ lọ́la", audioSrc: "m2-l2-q5-yr.mp3" },
  { id: 273, challengeId: 91, correct: false, text: "Ṣé ẹ ń ṣe dáadáa?" },

  { id: 274, challengeId: 92, correct: false, text: "Alẹ́" },
  { id: 275, challengeId: 92, correct: false, text: "Ṣé ẹ ń ṣe dáadáa?" },
  { id: 276, challengeId: 92, correct: true, text: "O dáàbò", audioSrc: "m2-l2-q6-yr.mp3" },

  { id: 277, challengeId: 93, correct: true, text: "Good bye", audioSrc: "m2-l2-q7-yr.mp3" },
  { id: 278, challengeId: 93, correct: false, text: "You’re welcome" },
  { id: 279, challengeId: 93, correct: false, text: "How are you?" },

  { id: 280, challengeId: 94, correct: true, text: "bawo ni?", audioSrc: "m2-l2-q8-yr.mp3" },
  { id: 281, challengeId: 94, correct: false, text: "Ẹ káárọ̀" },
  { id: 282, challengeId: 94, correct: false, text: "Ẹ káàbọ̀ (ní èdè abinibi)" },

  { id: 283, challengeId: 95, correct: false, text: "Ọla" },
  { id: 284, challengeId: 95, correct: true, text: "Ẹ yin", audioSrc: "m2-l2-q9-yr.mp3" },
  { id: 285, challengeId: 95, correct: false, text: "O ṣe dáadáa" },

  { id: 286, challengeId: 96, correct: true, text: "O dáàbò", audioSrc: "m2-l2-q10-yr.mp3" },
  { id: 287, challengeId: 96, correct: false, text: "Sun" },
  { id: 288, challengeId: 96, correct: false, text: "Ẹ ṣé púpọ̀" },

  { id: 289, challengeId: 97, correct: false, text: "Ọla" },
  { id: 290, challengeId: 97, correct: true, text: "Ẹ káàbọ̀", audioSrc: "m2-l2-q11-yr.mp3" },
  { id: 291, challengeId: 97, correct: false, text: "Ẹ ṣé púpọ̀" },

  { id: 292, challengeId: 98, correct: true, text: "Iwo", audioSrc: "m2-l2-q12-yr.mp3" },
  { id: 293, challengeId: 98, correct: false, text: "Ẹ yin" },
  { id: 294, challengeId: 98, correct: false, text: "O dáàbò" },

  { id: 295, challengeId: 99, correct: false, text: "Ẹ káàbọ̀" },
  { id: 296, challengeId: 99, correct: false, text: "Sun" },
  { id: 297, challengeId: 99, correct: true, text: "Ẹ ṣé", audioSrc: "m2-l2-q13-yr.mp3" },

  { id: 298, challengeId: 100, correct: false, text: "Ẹ káàbọ̀" },
  { id: 299, challengeId: 100, correct: true, text: "Ọla", audioSrc: "m2-l2-q14-yr.mp3" },
  { id: 300, challengeId: 100, correct: false, text: "Ẹ ṣé" },

  { id: 301, challengeId: 101, correct: true, text: "Sun", audioSrc: "m2-l2-q15-yr.mp3" },
  { id: 302, challengeId: 101, correct: false, text: "Ẹ yin" },
  { id: 303, challengeId: 101, correct: false, text: "Ẹ káalẹ́, Paul" },
  
   { id: 304, challengeId: 102, correct: false, text: "Ẹ nlé, Paul, ṣé ẹ ń ṣe dáadáa?" },
   { id: 305, challengeId: 102, correct: false, text: "Máà ri ẹ láìpẹ́" },
   { id: 306, challengeId: 102, correct: true, text: "Ẹ káárọ̀, Paul", audioSrc: "m2-l3-q1-yr.mp3" },
 
   { id: 307, challengeId: 103, correct: false, text: "Mo ń ṣe dáadáa" },
   { id: 308, challengeId: 103, correct: true, text: "Oda, máà ri ẹ lọ́la", audioSrc: "m2-l3-q2-yr.mp3" },
   { id: 309, challengeId: 103, correct: false, text: "Bẹ́ẹ̀ ni, ẹ ṣé púpọ̀" },
 
   { id: 310, challengeId: 104, correct: true, text: "Máà ri ẹ láìpẹ́", audioSrc: "m2-l3-q3-yr.mp3" },
   { id: 311, challengeId: 104, correct: false, text: "Ṣé ẹ sun dáadáa?" },
   { id: 312, challengeId: 104, correct: false, text: "Ẹ káàsán" },
 
   { id: 313, challengeId: 105, correct: true, text: "O dáàbò, máà ri ẹ lọ́la", audioSrc: "m2-l3-q4-yr.mp3" },
   { id: 314, challengeId: 105, correct: false, text: "Mo ń ṣe dáadáa" },
   { id: 315, challengeId: 105, correct: false, text: "Ẹ káàsán" },
 
   { id: 316, challengeId: 106, correct: false, text: "Ẹ káàsán" },
   { id: 317, challengeId: 106, correct: false, text: "Bẹ́ẹ̀ ni, ẹ ṣé púpọ̀" },
   { id: 318, challengeId: 106, correct: true, text: "Ẹ nlé", audioSrc: "m2-l3-q5-yr.mp3" },
 
   { id: 319, challengeId: 107, correct: false, text: "Bawi ni o n se?" },
   { id: 320, challengeId: 107, correct: true, text: "Ṣé ẹ sun dáadáa?", audioSrc: "m2-l3-q6-yr.mp3" },
   { id: 321, challengeId: 107, correct: false, text: "Ẹ nlé, Paul, ṣé ẹ ń ṣe dáadáa?" },
 
   { id: 322, challengeId: 108, correct: true, text: "Ẹ káàsán", audioSrc: "m2-l3-q7-yr.mp3" },
   { id: 323, challengeId: 108, correct: false, text: "Ọ̀dọ̀ alẹ́ dáadáa" },
   { id: 324, challengeId: 108, correct: false, text: "Máà ri ẹ láìpẹ́" },
 
   { id: 325, challengeId: 109, correct: true, text: "Ẹ ṣé", audioSrc: "m2-l3-q8-yr.mp3" },
   { id: 326, challengeId: 109, correct: false, text: "Bẹ́ẹ̀ ni" },
   { id: 327, challengeId: 109, correct: false, text: "Ọ̀dọ̀ tútù, máà ri ẹ lọ́la" },
 
   { id: 328, challengeId: 110, correct: true, text: "Ṣé ẹ sun dáadáa?", audioSrc: "m2-l3-q9-yr.mp3" },
   { id: 329, challengeId: 110, correct: false, text: "Ẹ nlé, Paul, ṣé ẹ ń ṣe dáadáa?" },
   { id: 330, challengeId: 110, correct: false, text: "Ṣé ẹ ń ṣe dáadáa?" },
 
   { id: 331, challengeId: 111, correct: true, text: "Ọ̀dọ̀ tútù, máà ri ẹ lọ́la", audioSrc: "m2-l3-q10-yr.mp3" },
   { id: 332, challengeId: 111, correct: false, text: "Eka le" },
   { id: 333, challengeId: 111, correct: false, text: "Máà ri ẹ láìpẹ́" },
 
   { id: 334, challengeId: 112, correct: true, text: "Mo wa dáadáa gan-an", audioSrc: "m2-l3-q11-yr.mp3" },
   { id: 335, challengeId: 112, correct: false, text: "Ẹ ṣé púpọ̀" },
   { id: 336, challengeId: 112, correct: false, text: "Ṣé ẹ ń ṣe dáadáa?" },
 
   { id: 337, challengeId: 113, correct: true, text: "Bẹ́ẹ̀ ni", audioSrc: "m2-l3-q12-yr.mp3" },
   { id: 338, challengeId: 113, correct: false, text: "Bẹ́ẹ̀ ni, ẹ ṣé púpọ̀" },
   { id: 339, challengeId: 113, correct: false, text: "Máà ri ẹ láìpẹ́" },
 
   { id: 340, challengeId: 114, correct: true, text: "Ẹ nlé, Feranmi, bawo ni?", audioSrc: "m2-l3-q13-yr.mp3" },
   { id: 341, challengeId: 114, correct: false, text: "Ṣé ẹ ń ṣe dáadáa?" },
   { id: 342, challengeId: 114, correct: false, text: "Ṣé ẹ sun dáadáa?" },
 
   { id: 343, challengeId: 115, correct: true, text: "Bẹ́ẹ̀ ni, ẹ ṣé", audioSrc: "m2-l3-q14-yr.mp3" },
   { id: 344, challengeId: 115, correct: false, text: "Mo ń ṣe dáadáa" },
   { id: 345, challengeId: 115, correct: false, text: "Máà ri ẹ láìpẹ́" },
 
   { id: 346, challengeId: 116, correct: true, text: "Ṣé o sun dáadáa?", audioSrc: "m2-l3-q15-yr.mp3" },
   { id: 347, challengeId: 116, correct: false, text: "Ṣé ẹ ń ṣe dáadáa?" },
   { id: 348, challengeId: 116, correct: false, text: "Ọ̀dọ̀ alẹ́ dáadáa" },

      { id: 349, challengeId: 117, correct: false, text: "Ẹ káárọ̀, ṣé ẹ ń ṣe dáadáa?" },
      { id: 350, challengeId: 117, correct: true, text: "Ẹ nlé, Feranmi, bawo ni?", audioSrc: "m2-l4-q1-yr.mp3" },
      { id: 351, challengeId: 117, correct: false, text: "Ẹ káalẹ́, ṣé ẹ ń ṣe dáadáa?" },
    
      { id: 352, challengeId: 118, correct: false, text: "Emi ni Paul, ṣùgbọ́n ìwọ ń kò?" },
      { id: 353, challengeId: 118, correct: true, text: "Dáadáa", audioSrc: "m2-l4-q2-yr.mp3" },
      { id: 354, challengeId: 118, correct: false, text: "Ẹ ṣé púpọ̀" },
    
      { id: 355, challengeId: 119, correct: false, text: "Emi ni Paul, ṣùgbọ́n ìwọ ń kò?" },
      { id: 356, challengeId: 119, correct: true, text: "Ẹ káárọ̀, bawo ni e n se?", audioSrc: "m2-l4-q3-yr.mp3" },
      { id: 357, challengeId: 119, correct: false, text: "Mo ń ṣe dáadáa gan-an" },
    
      { id: 358, challengeId: 120, correct: true, text: "Mo ń ṣe dáadáa gan-an, ẹ ṣé púpọ̀", audioSrc: "m2-l4-q4-yr.mp3" },
      { id: 359, challengeId: 120, correct: false, text: "Ẹ káalẹ́, ṣé ẹ ń ṣe dáadáa?" },
      { id: 360, challengeId: 120, correct: false, text: "Mo ń ṣe dáadáa gan-an, ìwọ ń kò?" },
    
      { id: 361, challengeId: 121, correct: false, text: "Ẹ ku role, ṣé bawo ni o n se?" },
      { id: 362, challengeId: 121, correct: true, text: "Ẹ nlé, ṣé ẹ ń ṣe dáadáa?", audioSrc: "m2-l4-q5-yr.mp3" },
      { id: 363, challengeId: 121, correct: false, text: "O dáàbò" },
    
      { id: 364, challengeId: 122, correct: true, text: "Emi ni Paul", audioSrc: "m2-l4-q6-yr.mp3" },
      { id: 365, challengeId: 122, correct: false, text: "Emi ni Paul, ìwọ ń kò?" },
      { id: 366, challengeId: 122, correct: false, text: "Ẹ káárọ̀, ṣé ẹ ń ṣe dáadáa?" },
    
      { id: 367, challengeId: 123, correct: false, text: "Dáadáa" },
      { id: 368, challengeId: 123, correct: true, text: "Mo ń ṣe dáadáa gan-an", audioSrc: "m2-l4-q7-yr.mp3" },
      { id: 369, challengeId: 123, correct: false, text: "Ẹ nlé, bawo ni?" },
    
      { id: 370, challengeId: 124, correct: true, text: "Mo ń ṣe dáadáa gan-an, ẹ ṣé", audioSrc: "m2-l4-q8-yr.mp3" },
      { id: 371, challengeId: 124, correct: false, text: "Emi ni Paul, ṣùgbọ́n ìwọ ń kò?" },
      { id: 372, challengeId: 124, correct: false, text: "Mo ń ṣe dáadáa gan-an" },
    
      { id: 373, challengeId: 125, correct: true, text: "Mo ń ṣe dáadáa gan-an", audioSrc: "m2-l4-q9-yr.mp3" },
      { id: 374, challengeId: 125, correct: false, text: "Emi ni Paul" },
      { id: 375, challengeId: 125, correct: false, text: "Dáadáa" },
    
      { id: 376, challengeId: 126, correct: false, text: "Ṣé ẹ ń ṣe dáadáa?" },
      { id: 377, challengeId: 126, correct: true, text: "Dáadáa", audioSrc: "m2-l4-q10-yr.mp3" },
      { id: 378, challengeId: 126, correct: false, text: "Ẹ ṣé púpọ̀" },
    
      { id: 379, challengeId: 127, correct: true, text: "Ẹ ku role, aro e san mi", audioSrc: "m2-l4-q11-yr.mp3" },
      { id: 380, challengeId: 127, correct: false, text: "Ẹ káalẹ́, ṣé ẹ ń ṣe dáadáa?" },
      { id: 381, challengeId: 127, correct: false, text: "Ẹ káàsán" },
    
      { id: 382, challengeId: 128, correct: true, text: "Dáadáa", audioSrc: "m2-l4-q12-yr.mp3" },
      { id: 383, challengeId: 128, correct: false, text: "O dáàbò" },
      { id: 384, challengeId: 128, correct: false, text: "Ẹ káalẹ́, mo ń rántí yín" },
    
      { id: 385, challengeId: 129, correct: false, text: "Emi ni Paul" },
      { id: 386, challengeId: 129, correct: true, text: "ọ̀rẹ́ rẹ ni mi", audioSrc: "m2-l4-q13-yr.mp3" },
      { id: 387, challengeId: 129, correct: false, text: "O dáàbò" },
    
      { id: 388, challengeId: 130, correct: true, text: "O dáàbò", audioSrc: "m2-l4-q14-yr.mp3" },
      { id: 389, challengeId: 130, correct: false, text: "Ẹ ṣé púpọ̀" },
      { id: 390, challengeId: 130, correct: false, text: "Dáadáa" },
    
      { id: 391, challengeId: 131, correct: true, text: "Emi ni Paul, ṣùgbọ́n ìwọ ń kò?", audioSrc: "m2-l4-q15-yr.mp3" },
      { id: 392, challengeId: 131, correct: false, text: "Emi ni ọ̀rẹ́ rẹ" },
      { id: 393, challengeId: 131, correct: false, text: "Emi ni Feranmi" },
    
         { id: 394, challengeId: 132, correct: false, text: "Bẹ́ẹ̀ni, ìwọ náà ń kò?" },
         { id: 395, challengeId: 132, correct: false, text: "Ṣé o jí?" },
         { id: 396, challengeId: 132, correct: true, text: "Ẹ ní alẹ́ àlàáfíà", audioSrc: "m2-l5-q1-yr.mp3" },
       
         { id: 397, challengeId: 133, correct: false, text: "Bẹ́ẹ̀ni, ìwọ náà ń kò?" },
         { id: 398, challengeId: 133, correct: true, text: "Bẹ́ẹ̀ni, mo ń ṣe dáadáa gan-an", audioSrc: "m2-l5-q2-yr.mp3" },
         { id: 399, challengeId: 133, correct: false, text: "Bẹ́ẹ̀ni, mo máa gbé ọkọ̀ òfurufú lọ" },
       
         { id: 400, challengeId: 134, correct: false, text: "Ṣé o jí?" },
         { id: 401, challengeId: 134, correct: true, text: "Bẹ́ẹ̀ni, ìwọ náà ń kò?", audioSrc: "m2-l5-q3-yr.mp3" },
         { id: 402, challengeId: 134, correct: false, text: "Ẹ káàbọ̀" },
       
         { id: 403, challengeId: 135, correct: false, text: "Máà ri ẹ láìpẹ́" },
         { id: 404, challengeId: 135, correct: true, text: "Ṣé o sun dáadáa?", audioSrc: "m2-l5-q4-yr.mp3" },
         { id: 405, challengeId: 135, correct: false, text: "Ẹ káàbọ̀" },
       
         { id: 406, challengeId: 136, correct: true, text: "Ṣé o jí?", audioSrc: "m2-l5-q5-yr.mp3" },
         { id: 407, challengeId: 136, correct: false, text: "Ṣé ọjọ́ rẹ ń lọ dáadáa?" },
         { id: 408, challengeId: 136, correct: false, text: "Ṣé o sun dáadáa?" },
       
         { id: 409, challengeId: 137, correct: true, text: "A dúpẹ́ lọ́wọ́ Ọlọ́run", audioSrc: "m2-l5-q6-yr.mp3" },
         { id: 410, challengeId: 137, correct: false, text: "Mo ń wa ọkọ̀ ayọ́kẹ́lẹ́" },
         { id: 411, challengeId: 137, correct: false, text: "Ẹ káàbọ̀" },
       
         { id: 412, challengeId: 138, correct: false, text: "Bẹ́ẹ̀ni, mo máa gbé ọkọ̀ òfurufú lọ" },
         { id: 413, challengeId: 138, correct: true, text: "Máà ri ẹ láìpẹ́", audioSrc: "m2-l5-q7-yr.mp3" },
         { id: 414, challengeId: 138, correct: false, text: "Ẹ ní ìrẹ́pò̩ alẹ́ dáadáa" },
       
         { id: 415, challengeId: 139, correct: true, text: "Bẹ́ẹ̀ni, mo máa gbé ọkọ̀ òfurufú lọ", audioSrc: "m2-l5-q8-yr.mp3" },
         { id: 416, challengeId: 139, correct: false, text: "Mo ń wa ọkọ̀ ayọ́kẹ́lẹ́" },
         { id: 417, challengeId: 139, correct: false, text: "A dúpẹ́ lọ́wọ́ Ọlọ́run" },
       
         { id: 418, challengeId: 140, correct: false, text: "Ṣé ọjọ́ rẹ ń lọ dáadáa?" },
         { id: 419, challengeId: 140, correct: true, text: "Ṣé ose jí ní?", audioSrc: "m2-l5-q9-yr.mp3" },
         { id: 420, challengeId: 140, correct: false, text: "Ẹ ní ìrẹ́pò̩ alẹ́ dáadáa" },
       
         { id: 421, challengeId: 141, correct: false, text: "Máà ri ẹ láìpẹ́" },
         { id: 422, challengeId: 141, correct: true, text: "Ẹ ma bi nu", audioSrc: "m2-l5-q10-yr.mp3" },
         { id: 423, challengeId: 141, correct: false, text: "A dúpẹ́ lọ́wọ́ Ọlọ́run" },
       
         { id: 424, challengeId: 142, correct: true, text: "Mo ń dúró de ẹ", audioSrc: "m2-l5-q11-yr.mp3" },
         { id: 425, challengeId: 142, correct: false, text: "Ẹ ní ìrẹ́pò̩ alẹ́ dáadáa" },
         { id: 426, challengeId: 142, correct: false, text: "Mo ń wa ọkọ̀ ayọ́kẹ́lẹ́" },
       
         { id: 427, challengeId: 143, correct: true, text: "Ki e sun daada", audioSrc: "m2-l5-q12-yr.mp3" },
         { id: 428, challengeId: 143, correct: false, text: "Bẹ́ẹ̀ni, ẹ ṣé púpọ̀" },
         { id: 429, challengeId: 143, correct: false, text: "Bẹ́ẹ̀ni, mo máa gbé ọkọ̀ òfurufú lọ" },
       
         { id: 430, challengeId: 144, correct: false, text: "Ẹ ní alẹ́ àlàáfíà" },
         { id: 431, challengeId: 144, correct: true, text: "Mo ń wa ọkọ̀ na", audioSrc: "m2-l5-q13-yr.mp3" },
         { id: 432, challengeId: 144, correct: false, text: "Ṣé o jí?" },
       
         { id: 433, challengeId: 145, correct: false, text: "Ṣé o sun dáadáa?" },
         { id: 434, challengeId: 145, correct: false, text: "Ṣé o jí?" },
         { id: 435, challengeId: 145, correct: true, text: "Ṣé ọjọ́ rẹ ń lọ dáadáa?", audioSrc: "m2-l5-q14-yr.mp3" },
       
         { id: 436, challengeId: 146, correct: true, text: "A dúpẹ́ lọ́wọ́ Ọlọ́run", audioSrc: "m2-l5-q15-yr.mp3" },
         { id: 437, challengeId: 146, correct: false, text: "Ẹ ní alẹ́ àlàáfíà" },
         { id: 438, challengeId: 146, correct: false, text: "Máà ri ẹ láìpẹ́" },

            { id: 439, challengeId: 147, correct: true, text: "Mo ń sọ Yoruba", audioSrc: "m3-l1-q1-yr.mp3" },
            { id: 440, challengeId: 147, correct: false, text: "Ẹ jọwọ, ṣé ẹ sọ Yoruba?" },
            { id: 441, challengeId: 147, correct: false, text: "Ṣé ẹ jẹ́ ọmọ Yoruba?" },
          
            { id: 442, challengeId: 148, correct: false, text: "Ṣé ẹ jẹ́ ọmọ Yoruba?" },
            { id: 443, challengeId: 148, correct: true, text: "Ẹ jọwọ, ṣé ẹ le sọ", audioSrc: "m3-l1-q2-yr.mp3" },
            { id: 444, challengeId: 148, correct: false, text: "Mo sọ Yoruba" },
          
            { id: 445, challengeId: 149, correct: false, text: "Ṣé ẹ jẹ́ ọmọ Yoruba?" },
            { id: 446, challengeId: 149, correct: true, text: "Rárá, ọmọ Yoruba ni mi ni mí, mo sọ Yoruba/Ibo/Pidgin/Hausa", audioSrc: "m3-l1-q3-yr.mp3" },
            { id: 447, challengeId: 149, correct: false, text: "Mo jẹ́ ọmọ Naijiria" },
          
            { id: 448, challengeId: 150, correct: true, text: "Mo fẹ́ takisi", audioSrc: "m3-l1-q4-yr.mp3" },
            { id: 449, challengeId: 150, correct: false, text: "Nibo ni ẹni kan ti lè rí takisi?" },
            { id: 450, challengeId: 150, correct: false, text: "Kí ni orúkọ rẹ?" },
          
            { id: 451, challengeId: 151, correct: true, text: "Nibo ni mo ti lè rí takisi?", audioSrc: "m3-l1-q5-yr.mp3" },
            { id: 452, challengeId: 151, correct: false, text: "Mo fẹ́ takisi?" },
            { id: 453, challengeId: 151, correct: false, text: "Mo ń gbé ní ilé ìtura" },
          
            { id: 454, challengeId: 152, correct: false, text: "Mo máa gbé fún ọsẹ kan" },
            { id: 455, challengeId: 152, correct: false, text: "Mo wa ní ṣókàn pẹ̀lú ara mi" },
            { id: 456, challengeId: 152, correct: true, text: "Mo jẹ́ ọmọ Naijiria", audioSrc: "m3-l1-q6-yr.mp3" },
          
            { id: 457, challengeId: 153, correct: true, text: "Kí ni orúkọ rẹ?", audioSrc: "m3-l1-q7-yr.mp3" },
            { id: 458, challengeId: 153, correct: false, text: "Ṣé ẹ jẹ́ ọmọ Yoruba?" },
            { id: 459, challengeId: 153, correct: false, text: "Orúkọ mi ni David" },
          
            { id: 460, challengeId: 154, correct: true, text: "Orúkọ rẹ̀ ni Feranmi", audioSrc: "m3-l1-q8-yr.mp3" },
            { id: 461, challengeId: 154, correct: false, text: "Mo wá pẹ̀lú ẹbí mi" },
            { id: 462, challengeId: 154, correct: false, text: "Mo ń ṣàbẹ̀wò sí Naijiria" },
          
            { id: 463, challengeId: 155, correct: true, text: "Rárá, ọmọ Yoruba ni mí", audioSrc: "m3-l1-q9-yr.mp3" },
            { id: 464, challengeId: 155, correct: false, text: "Mo jẹ́ ọmọ Naijiria" },
            { id: 465, challengeId: 155, correct: false, text: "Ṣé Yoruba ni e?" },
          
            { id: 466, challengeId: 156, correct: true, text: "Orúkọ mi ni David", audioSrc: "m3-l1-q10-yr.mp3" },
            { id: 467, challengeId: 156, correct: false, text: "Kí ni orúkọ rẹ?" },
            { id: 468, challengeId: 156, correct: false, text: "Mo máa gbé fún ọsẹ kan" },
          
            { id: 469, challengeId: 157, correct: true, text: "Rárá, ọmọ Yoruba ni mí", audioSrc: "m3-l1-q11-yr.mp3" },
            { id: 470, challengeId: 157, correct: false, text: "Mo jẹ́ ọmọ Naijiria" },
            { id: 471, challengeId: 157, correct: false, text: "Ṣé ẹ jẹ́ ọmọ Yoruba?" },
          
            { id: 472, challengeId: 158, correct: true, text: "Mo ń ṣàbẹ̀wò sí Naijiria", audioSrc: "m3-l1-q12-yr.mp3" },
            { id: 473, challengeId: 158, correct: false, text: "Mo wá pẹ̀lú ẹbí mi" },
            { id: 474, challengeId: 158, correct: false, text: "Mo wa ní ṣókàn pẹ̀lú ara mi" },
          
            { id: 475, challengeId: 159, correct: true, text: "Mo máa gbé fún ọsẹ kan", audioSrc: "m3-l1-q13-yr.mp3" },
            { id: 476, challengeId: 159, correct: false, text: "Kí ni orúkọ rẹ?" },
            { id: 477, challengeId: 159, correct: false, text: "Mo fẹ́ takisi" },
          
            { id: 478, challengeId: 160, correct: true, text: "Mo ń gbé ní ilé ìtura", audioSrc: "m3-l1-q14-yr.mp3" },
            { id: 479, challengeId: 160, correct: false, text: "Mo wa ní ṣókàn pẹ̀lú ara mi" },
            { id: 480, challengeId: 160, correct: false, text: "Mo ń ṣàbẹ̀wò sí Naijiria" },
          
            { id: 481, challengeId: 161, correct: true, text: "Emi nikan ni mo wa.", audioSrc: "m3-l1-q15-yr.mp3" },
            { id: 482, challengeId: 161, correct: false, text: "Mo wá pẹ̀lú ẹbí mi" },
            { id: 483, challengeId: 161, correct: false, text: "Mo ń ṣàbẹ̀wò sí Naijiria" },
           
               { id: 484, challengeId: 162, correct: false, text: "Ṣé o ní ọmọ?" },
               { id: 485, challengeId: 162, correct: true, text: "iru ise wo ni oun se?", audioSrc: "m3-l2-q1-yr.mp3" },
               { id: 486, challengeId: 162, correct: false, text: "Mo ń gbádùn ìbẹ̀wò mi" },
             
               { id: 487, challengeId: 163, correct: false, text: "Nibo ni sinima wà?" },
               { id: 488, challengeId: 163, correct: true, text: "Nibo ni o ti wá?", audioSrc: "m3-l2-q2-yr.mp3" },
               { id: 489, challengeId: 163, correct: false, text: "Inu mi dùn pé mo wa níbí" },
             
               { id: 490, challengeId: 164, correct: true, text: "Ṣé o ní ọmọ?", audioSrc: "m3-l2-q3-yr.mp3" },
               { id: 491, challengeId: 164, correct: false, text: "Ẹ jẹ́ ká jẹun" },
               { id: 492, challengeId: 164, correct: false, text: "Ṣé o ti wá sí Naijiria?" },
             
               { id: 493, challengeId: 165, correct: true, text: "Ṣé o ti lo sí Naijiria?", audioSrc: "m3-l2-q4-yr.mp3" },
               { id: 494, challengeId: 165, correct: false, text: "Mo fẹ́ rí etí òkun" },
               { id: 495, challengeId: 165, correct: false, text: "Ẹ jẹ́ ká jẹun" },
             
               { id: 496, challengeId: 166, correct: true, text: "Mo ń gbádùn ìbẹ̀wò mi", audioSrc: "m3-l2-q5-yr.mp3" },
               { id: 497, challengeId: 166, correct: false, text: "Wá sí ilé mi" },
               { id: 498, challengeId: 166, correct: false, text: "Ṣé o ní ọmọ?" },
             
               { id: 499, challengeId: 167, correct: true, text: "Mo fẹ́ rí etí òkun", audioSrc: "m3-l2-q6-yr.mp3" },
               { id: 500, challengeId: 167, correct: false, text: "Ẹ jẹ́ ká jẹun" },
               { id: 501, challengeId: 167, correct: false, text: "Ṣé o ti wá sí Naijiria?" },
             
               { id: 502, challengeId: 168, correct: true, text: "ka bo sí ilé mi", audioSrc: "m3-l2-q7-yr.mp3" },
               { id: 503, challengeId: 168, correct: false, text: "Iyàwó mi jẹ́ ọmọ Naijiria" },
               { id: 504, challengeId: 168, correct: false, text: "Ẹ kí ẹbí rẹ" },
             
               { id: 505, challengeId: 169, correct: true, text: "Iyàwó mi jẹ́ ọmọ Naijiria", audioSrc: "m3-l2-q8-yr.mp3" },
               { id: 506, challengeId: 169, correct: false, text: "Wá sí ilé mi" },
               { id: 507, challengeId: 169, correct: false, text: "Ẹ kí ẹbí rẹ" },
             
               { id: 508, challengeId: 170, correct: true, text: "kí ẹbí rẹ", audioSrc: "m3-l2-q9-yr.mp3" },
               { id: 509, challengeId: 170, correct: false, text: "Ẹ jọwọ" },
               { id: 510, challengeId: 170, correct: false, text: "Ẹ jẹ́ ká jẹun" },
             
               { id: 511, challengeId: 171, correct: true, text: "Mo fẹ́ ṣàbẹ̀wò sí ọjà", audioSrc: "m3-l2-q10-yr.mp3" },
               { id: 512, challengeId: 171, correct: false, text: "Ẹ kí ẹbí rẹ" },
               { id: 513, challengeId: 171, correct: false, text: "Ẹ jẹ́ ká jẹun" },
             
               { id: 514, challengeId: 172, correct: false, text: "Ara mi kò ya" },
               { id: 515, challengeId: 172, correct: true, text: "Nibo ni sinima wà?", audioSrc: "m3-l2-q11-yr.mp3" },
               { id: 516, challengeId: 172, correct: false, text: "Inu mi dùn pé mo wa níbí" },
             
               { id: 517, challengeId: 173, correct: true, text: "Ẹ jọwọ", audioSrc: "m3-l2-q12-yr.mp3" },
               { id: 518, challengeId: 173, correct: false, text: "Ẹ kí ẹbí rẹ" },
               { id: 519, challengeId: 173, correct: false, text: "Ẹ jẹ́ ká jẹun" },
             
               { id: 520, challengeId: 174, correct: true, text: "Ẹ jẹ́ ká jẹun", audioSrc: "m3-l2-q13-yr.mp3" },
               { id: 521, challengeId: 174, correct: false, text: "Mo fẹ́ ṣàbẹ̀wò sí ọjà" },
               { id: 522, challengeId: 174, correct: false, text: "Ẹ kí ẹbí rẹ" },
             
               { id: 523, challengeId: 175, correct: true, text: "o re mi", audioSrc: "m3-l2-q14-yr.mp3" },
               { id: 524, challengeId: 175, correct: false, text: "Nibo ni sinima wà?" },
               { id: 525, challengeId: 175, correct: false, text: "Inu mi dùn pé mo wa níbí" },
             
               { id: 526, challengeId: 176, correct: true, text: "Inu mi dùn pé mo wa níbí", audioSrc: "m3-l2-q15-yr.mp3" },
               { id: 527, challengeId: 176, correct: false, text: "Ẹ jọwọ" },
               { id: 528, challengeId: 176, correct: false, text: "Wá sí ilé mi" },
              
                  { id: 529, challengeId: 177, correct: true, text: "Àǹtí wà ní ṣọ́ọ̀ṣì", audioSrc: "m3-l3-q1-yr.mp3" },
                  { id: 530, challengeId: 177, correct: false, text: "Èlẹ̀yìí yà mí lénu! Orúkọ mi ni Sari" },
                  { id: 531, challengeId: 177, correct: false, text: "Mo sọ Yoruba àti Igbo" },
                
                  { id: 532, challengeId: 178, correct: true, text: "O ń sọ Yoruba/Ibo/Pidgin", audioSrc: "m3-l3-q2-yr.mp3" },
                  { id: 533, challengeId: 178, correct: false, text: "Feranmi ń sọ Yoruba àti Igbo" },
                  { id: 534, challengeId: 178, correct: false, text: "Ọkọ mi wà níta" },
                
                  { id: 535, challengeId: 179, correct: true, text: "Mo sọ Yoruba àti Igbo", audioSrc: "m3-l3-q3-yr.mp3" },
                  { id: 536, challengeId: 179, correct: false, text: "O ń sọ Yoruba/Ibo/Pidgin" },
                  { id: 537, challengeId: 179, correct: false, text: "Ọkọ mi wà níta" },
                
                  { id: 538, challengeId: 180, correct: true, text: "Èlẹ̀yìí yà mí lénu! Orúkọ mi ni Sari", audioSrc: "m3-l3-q4-yr.mp3" },
                  { id: 539, challengeId: 180, correct: false, text: "Ọmọbìnrin mi jẹ́ olùkọ́" },
                  { id: 540, challengeId: 180, correct: false, text: "Ọmọkùnrin rẹ jẹ́ ọlọ́pàá" },
                
                  { id: 541, challengeId: 181, correct: true, text: "Feranmi ń sọ Yoruba àti Igbo", audioSrc: "m3-l3-q5-yr.mp3" },
                  { id: 542, challengeId: 181, correct: false, text: "O ń sọ Yoruba/Ibo/Pidgin" },
                  { id: 543, challengeId: 181, correct: false, text: "Ọkọ mi wà níta" },
                
                  { id: 544, challengeId: 182, correct: true, text: "O ń sọ Yoruba", audioSrc: "m3-l3-q6-yr.mp3" },
                  { id: 545, challengeId: 182, correct: false, text: "Ó jẹ́ ọmọ Igbo" },
                  { id: 546, challengeId: 182, correct: false, text: "Ó jẹ́ ọmọ Yoruba" },
                
                  { id: 547, challengeId: 183, correct: true, text: "Wọ́n ń sọ Hausa", audioSrc: "m3-l3-q7-yr.mp3" },
                  { id: 548, challengeId: 183, correct: false, text: "Ọkọ mi wà níta" },
                  { id: 549, challengeId: 183, correct: false, text: "Ó jẹ́ ọmọ Igbo" },
                
                  { id: 550, challengeId: 184, correct: true, text: "Ó jẹ́ ọmọ Yoruba", audioSrc: "m3-l3-q8-yr.mp3" },
                  { id: 551, challengeId: 184, correct: false, text: "Ó jẹ́ ọmọ Igbo" },
                  { id: 552, challengeId: 184, correct: false, text: "O ń sọ Yoruba" },
                
                  { id: 553, challengeId: 185, correct: true, text: "Ó jẹ́ ọmọ Igbo", audioSrc: "m3-l3-q9-yr.mp3" },
                  { id: 554, challengeId: 185, correct: false, text: "Ó jẹ́ ọmọ Yoruba" },
                  { id: 555, challengeId: 185, correct: false, text: "O ń sọ Yoruba" },
                
                  { id: 556, challengeId: 186, correct: true, text: "Ọkọ mi wà níta", audioSrc: "m3-l3-q10-yr.mp3" },
                  { id: 557, challengeId: 186, correct: false, text: "Mo sọ Yoruba àti Igbo" },
                  { id: 558, challengeId: 186, correct: false, text: "O ń sọ Yoruba/Ibo/Hausa" },
                
                  { id: 559, challengeId: 187, correct: true, text: "Ọmọbìnrin rẹ jẹ́ olùkọ́", audioSrc: "m3-l3-q11-yr.mp3" },
                  { id: 560, challengeId: 187, correct: false, text: "Ẹ kí ẹbí rẹ" },
                  { id: 561, challengeId: 187, correct: false, text: "Ọmọkùnrin rẹ jẹ́ ọlọ́pàá" },
                
                  { id: 562, challengeId: 188, correct: true, text: "Ọmọkùnrin rẹ jẹ́ ọlọ́pàá", audioSrc: "m3-l3-q12-yr.mp3" },
                  { id: 563, challengeId: 188, correct: false, text: "Ẹ kí ẹbí rẹ" },
                  { id: 564, challengeId: 188, correct: false, text: "Ọmọbìnrin rẹ jẹ́ olùkọ́" },
                
                  { id: 565, challengeId: 189, correct: true, text: "Orúkọ mi ni Ana", audioSrc: "m3-l3-q13-yr.mp3" },
                  { id: 566, challengeId: 189, correct: false, text: "Ó jẹ́ ọmọ Igbo" },
                  { id: 567, challengeId: 189, correct: false, text: "Wọ́n ń sọ Hausa" },
                
                  { id: 568, challengeId: 190, correct: true, text: "Mo sọ Yoruba àti Igbo", audioSrc: "m3-l3-q14-yr.mp3" },
                  { id: 569, challengeId: 190, correct: false, text: "O ń sọ Yoruba" },
                  { id: 570, challengeId: 190, correct: false, text: "Wọ́n ń sọ Hausa" },
                
                  { id: 571, challengeId: 191, correct: true, text: "kí ẹbí rẹ", audioSrc: "m3-l3-q15-yr.mp3" },
                  { id: 572, challengeId: 191, correct: false, text: "Ọmọbìnrin rẹ jẹ́ olùkọ́" },
                  { id: 573, challengeId: 191, correct: false, text: "Ọmọkùnrin rẹ jẹ́ ọlọ́pàá" },

                     { id: 574, challengeId: 192, correct: true, text: "Ilé mi", audioSrc: "m3-l4-q1-yr.mp3" },
                     { id: 575, challengeId: 192, correct: false, text: "Bà sọrọ pẹ̀lú ọmọbìnrin mi" },
                     { id: 576, challengeId: 192, correct: false, text: "Wọ́n pọ̀" },
                   
                     { id: 577, challengeId: 193, correct: true, text: "sọrọ pẹ̀lú ọmọkùnrin mi", audioSrc: "m3-l4-q2-yr.mp3" },
                     { id: 578, challengeId: 193, correct: false, text: "Wọ́n" },
                     { id: 579, challengeId: 193, correct: false, text: "sọrọ pẹ̀lú ọmọbìnrin mi" },
                   
                     { id: 580, challengeId: 194, correct: true, text: "sọrọ pẹ̀lú ọmọbìnrin mi", audioSrc: "m3-l4-q3-yr.mp3" },
                     { id: 581, challengeId: 194, correct: false, text: "Bà sọrọ pẹ̀lú ọmọkùnrin mi" },
                     { id: 582, challengeId: 194, correct: false, text: "Wọ́n" },
                   
                     { id: 583, challengeId: 195, correct: true, text: "Wọ́n", audioSrc: "m3-l4-q4-yr.mp3" },
                     { id: 584, challengeId: 195, correct: false, text: "Wọ́n pọ̀" },
                     { id: 585, challengeId: 195, correct: false, text: "Ó ga" },
                   
                     { id: 586, challengeId: 196, correct: true, text: "Wọ́n pọ̀", audioSrc: "m3-l4-q5-yr.mp3" },
                     { id: 587, challengeId: 196, correct: false, text: "Ó lè se onjẹ" },
                     { id: 588, challengeId: 196, correct: false, text: "Òun" },
                   
                     { id: 589, challengeId: 197, correct: true, text: "Óun", audioSrc: "m3-l4-q6-yr.mp3" },
                     { id: 590, challengeId: 197, correct: false, text: "Òun" },
                     { id: 591, challengeId: 197, correct: false, text: "Wọ́n" },
                   
                     { id: 592, challengeId: 198, correct: true, text: "Ó ga", audioSrc: "m3-l4-q7-yr.mp3" },
                     { id: 593, challengeId: 198, correct: false, text: "Óun" },
                     { id: 594, challengeId: 198, correct: false, text: "Arákùnrin rẹ dára" },
                   
                     { id: 595, challengeId: 199, correct: true, text: "Óun", audioSrc: "m3-l4-q8-yr.mp3" },
                     { id: 596, challengeId: 199, correct: false, text: "Òun" },
                     { id: 597, challengeId: 199, correct: false, text: "Wọ́n" },
                   
                     { id: 598, challengeId: 200, correct: true, text: "Ó lè se onjẹ", audioSrc: "m3-l4-q9-yr.mp3" },
                     { id: 599, challengeId: 200, correct: false, text: "Ìwé mi" },
                     { id: 600, challengeId: 200, correct: false, text: "Arábìnrin rẹ dára" },
                   
                     { id: 601, challengeId: 201, correct: true, text: "Tí òun", audioSrc: "m3-l4-q10-yr.mp3" },
                     { id: 602, challengeId: 201, correct: false, text: "Tí mi" },
                     { id: 603, challengeId: 201, correct: false, text: "Tí òun" },
                   
                     { id: 604, challengeId: 202, correct: true, text: "Arakunrin re dára", audioSrc: "m3-l4-q11-yr.mp3" },
                     { id: 605, challengeId: 202, correct: false, text: "Tí òun" },
                     { id: 606, challengeId: 202, correct: false, text: "Arábìnrin rẹ dára" },
                   
                     { id: 607, challengeId: 203, correct: true, text: "Tí òun", audioSrc: "m3-l4-q12-yr.mp3" },
                     { id: 608, challengeId: 203, correct: false, text: "Tí mi" },
                     { id: 609, challengeId: 203, correct: false, text: "Tí òun" },
                   
                     { id: 610, challengeId: 204, correct: true, text: "Arákùnrin rẹ dára", audioSrc: "m3-l4-q13-yr.mp3" },
                     { id: 611, challengeId: 204, correct: false, text: "Tí òun" },
                     { id: 612, challengeId: 204, correct: false, text: "Arábìnrin rẹ dára" },
                   
                     { id: 613, challengeId: 205, correct: true, text: "Temi", audioSrc: "m3-l4-q14-yr.mp3" },
                     { id: 614, challengeId: 205, correct: false, text: "Tí óun" },
                     { id: 615, challengeId: 205, correct: false, text: "Tí òun" },
                   
                     { id: 616, challengeId: 206, correct: true, text: "Ìwé mi", audioSrc: "m3-l4-q15-yr.mp3" },
                     { id: 617, challengeId: 206, correct: false, text: "Arábìnrin rẹ dára" },
                     { id: 618, challengeId: 206, correct: false, text: "Ó lè se onjẹ" },
                   
                     // Lesson 5
                   
                     { id: 619, challengeId: 207, correct: true, text: "Àwa", audioSrc: "m3-l5-q1-yr.mp3" },
                     { id: 620, challengeId: 207, correct: false, text: "Àwa ti padà" },
                     { id: 621, challengeId: 207, correct: false, text: "Bá ọmọ ẹ̀gbẹ́ mi pàdé" },
                   
                     { id: 622, challengeId: 208, correct: true, text: "Àwa ti padà de", audioSrc: "m3-l5-q2-yr.mp3" },
                     { id: 623, challengeId: 208, correct: false, text: "Àwa" },
                     { id: 624, challengeId: 208, correct: false, text: "Bá ọmọ ẹ̀gbẹ́ mi pàdé" },
                   
                     { id: 625, challengeId: 209, correct: true, text: "Àwa", audioSrc: "m3-l5-q3-yr.mp3" },
                     { id: 626, challengeId: 209, correct: false, text: "Ẹ wá kó bá wa darapọ̀" },
                     { id: 627, challengeId: 209, correct: false, text: "Bà sọrọ pẹ̀lú mi" },
                   
                     { id: 628, challengeId: 210, correct: true, text: "Ẹ wá kó bá wa darapọ̀", audioSrc: "m3-l5-q4-yr.mp3" },
                     { id: 629, challengeId: 210, correct: false, text: "Kí ni ìwọ?" },
                     { id: 630, challengeId: 210, correct: false, text: "Bà sọrọ pẹ̀lú mi" },
                   
                     { id: 631, challengeId: 211, correct: true, text: "Bá ore mi pàdé", audioSrc: "m3-l5-q5-yr.mp3" },
                     { id: 632, challengeId: 211, correct: false, text: "Ìwọ àti èmi" },
                     { id: 633, challengeId: 211, correct: false, text: "Ìwọ àti èmi nígbà gbogbo" },
                   
                     { id: 634, challengeId: 212, correct: true, text: "Ìwọ", audioSrc: "m3-l5-q6-yr.mp3" },
                     { id: 635, challengeId: 212, correct: false, text: "Wọ́n jẹ́ ti mi" },
                     { id: 636, challengeId: 212, correct: false, text: "Tálọ ni ìwọ?" },
                   
                     { id: 637, challengeId: 213, correct: true, text: "Tálọ ni ìwọ?", audioSrc: "m3-l5-q7-yr.mp3" },
                     { id: 638, challengeId: 213, correct: false, text: "Ìwọ àti èmi" },
                     { id: 639, challengeId: 213, correct: false, text: "Ìwọ àti èmi nígbà gbogbo" },
                   
                     { id: 640, challengeId: 214, correct: true, text: "Wọ́n", audioSrc: "m3-l5-q8-yr.mp3" },
                     { id: 641, challengeId: 214, correct: false, text: "Wọ́n jẹ́ ti mi" },
                     { id: 642, challengeId: 214, correct: false, text: "Òun jẹ́ ti mi" },
                   
                     { id: 643, challengeId: 215, correct: true, text: "Tálọ ni wọ́n?", audioSrc: "m3-l5-q9-yr.mp3" },
                     { id: 644, challengeId: 215, correct: false, text: "Tálọ ni ìwọ?" },
                     { id: 645, challengeId: 215, correct: false, text: "Kí ni ìwọ?" },
                   
                     { id: 646, challengeId: 216, correct: true, text: "Wọ́n jẹ́ ti mi", audioSrc: "m3-l5-q10-yr.mp3" },
                     { id: 647, challengeId: 216, correct: false, text: "Wọ́n" },
                     { id: 648, challengeId: 216, correct: false, text: "Temi ni " },
                   
                     { id: 649, challengeId: 217, correct: true, text: "Wọ́n jẹ́ ti mi", audioSrc: "m3-l5-q11-yr.mp3" },
                     { id: 650, challengeId: 217, correct: false, text: "Wọ́n" },
                     { id: 651, challengeId: 217, correct: false, text: "Temi ni won" },
                   
                     { id: 652, challengeId: 218, correct: true, text: "Èmi", audioSrc: "m3-l5-q12-yr.mp3" },
                     { id: 653, challengeId: 218, correct: false, text: "Ẹ wá kó bá wa darapọ̀" },
                     { id: 654, challengeId: 218, correct: false, text: "Bà sọrọ pẹ̀lú mi" },
                   
                     { id: 655, challengeId: 219, correct: true, text: "Bàmi soro", audioSrc: "m3-l5-q13-yr.mp3" },
                     { id: 656, challengeId: 219, correct: false, text: "Èmi" },
                     { id: 657, challengeId: 219, correct: false, text: "Àwa ti padà" },
                   
                     { id: 658, challengeId: 220, correct: true, text: "Ìwọ àti èmi", audioSrc: "m3-l5-q14-yr.mp3" },
                     { id: 659, challengeId: 220, correct: false, text: "Ìwọ àti èmi nígbà gbogbo" },
                     { id: 660, challengeId: 220, correct: false, text: "Bá ọmọ ẹ̀gbẹ́ mi pàdé" },
                   
                     { id: 661, challengeId: 221, correct: true, text: "Ìwọ àti èmi nígbà gbogbo", audioSrc: "m3-l5-q15-yr.mp3" },
                     { id: 662, challengeId: 221, correct: false, text: "Ìwọ àti èmi" },
                     { id: 663, challengeId: 221, correct: false, text: "Ẹ wá kó bá wa darapọ̀" },
   //igbo starts here
   { id: 664, challengeId: 222, correct: false, text: "Ndo" },
   { id: 665, challengeId: 222, correct: false, text: "Daalụ" },
   { id: 666, challengeId: 222, correct: true, text: "Kedu ka I mere", audioSrc: "m1-l1-q1-ig.mp3" },
   
   { id: 667, challengeId: 223, correct: false, text: "Ndo" },
   { id: 668, challengeId: 223, correct: false, text: "Daalụ" },
   { id: 669, challengeId: 223, correct: true, text: "Adị mm mma", audioSrc: "m1-l1-q2-ig.mp3" },
   
   { id: 670, challengeId: 224, correct: true, text: "Gịnị bụ aha gị", audioSrc: "m1-l1-q3-ig.mp3" },
   { id: 671, challengeId: 224, correct: false, text: "A bụ m onye Nigeria" },
   { id: 672, challengeId: 224, correct: false, text: "Nnọọ" },
   
   { id: 673, challengeId: 225, correct: false, text: "Kedu maka gị?" },
   { id: 674, challengeId: 225, correct: false, text: "A dị m mma" },
   { id: 675, challengeId: 225, correct: true, text: "Aha m bụ Ebere", audioSrc: "m1-l1-q4-ig.mp3" },
   
   { id: 676, challengeId: 226, correct: false, text: "Aha m bụ Ebere" },
   { id: 677, challengeId: 226, correct: false, text: "Daalụ" },
   { id: 678, challengeId: 226, correct: true, text: " A bụ m onye Nigeria", audioSrc: "m1-l1-q5-ig.mp3" },
   
   { id: 679, challengeId: 227, correct: false, text: "Gịnị bụ aha gị" },
   { id: 680, challengeId: 227, correct: false, text: "Eee" },
   { id: 681, challengeId: 227, correct: true, text: "Kedu maka gị", audioSrc: "m1-l1-q6-ig.mp3" },
   
   { id: 682, challengeId: 228, correct: true, text: "Mba", audioSrc: "m1-l1-q7-ig.mp3" },
   { id: 683, challengeId: 228, correct: false, text: "A bụ m onye Nigeria" },
   { id: 684, challengeId: 228, correct: false, text: "Eee" },
   
   { id: 685, challengeId: 229, correct: false, text: "Daalụ" },
   { id: 686, challengeId: 229, correct: false, text: "Kedu maka gị" },
   { id: 687, challengeId: 229, correct: true, text: "Gịnị ka I kwuru", audioSrc: "m1-l1-q8-ig.mp3" },
   
   { id: 688, challengeId: 230, correct: true, text: "Kwuo ya ozo", audioSrc: "m1-l1-q9-ig.mp3" },
   { id: 689, challengeId: 230, correct: false, text: "Gịnị ka I kwuru" },
   { id: 690, challengeId: 230, correct: false, text: "Ndo" },
   
   { id: 691, challengeId: 231, correct: true, text: "Eee", audioSrc: "m1-l1-q10-ig.mp3" },
   { id: 692, challengeId: 231, correct: false, text: "Daalụ" },
   { id: 693, challengeId: 231, correct: false, text: "Mba" },
   
   { id: 694, challengeId: 232, correct: false, text: "A dị m mma" },
   { id: 695, challengeId: 232, correct: true, text: "Daalụ", audioSrc: "m1-l1-q11-ig.mp3" },
   { id: 696, challengeId: 232, correct: false, text: "A bụ m onye Nigeria" },
   
   { id: 697, challengeId: 233, correct: false, text: "Ndo" },
   { id: 698, challengeId: 233, correct: false, text: "Kedu maka gị" },
   { id: 699, challengeId: 233, correct: true, text: "Nnọọ", audioSrc: "m1-l1-q12-ig.mp3" },
   
   { id: 700, challengeId: 234, correct: true, text: "Ndo", audioSrc: "m1-l1-q14-ig.mp3" },
   { id: 701, challengeId: 234, correct: false, text: "Nnọọ" },
   { id: 702, challengeId: 234, correct: false, text: "Daalụ nke ukwuu" },
   
   { id: 703, challengeId: 235, correct: false, text: "Gịnị bụ aha gị" },
   { id: 704, challengeId: 235, correct: false, text: "Daalụ" },
   { id: 705, challengeId: 235, correct: true, text: "Daalụ nke ukwuu", audioSrc: "m2-l1-q1-ig.mp3" },

   //LESSON 2 STARTS

   { id: 706, challengeId: 236, correct: false, text: "Obere obere" },
   { id: 707, challengeId: 236, correct: false, text: "A hụrụ m Igbo n'anya" },
   { id: 708, challengeId: 236, correct: true, text: "I na su Igbo", audioSrc: "m1-l2-q1-ig.mp3" },
   
   { id: 709, challengeId: 237, correct: false, text: "A hụrụ m Igbo n'anya" },
   { id: 710, challengeId: 237, correct: true, text: "Obere obere", audioSrc: "m1-l2-q2-ig.mp3" },
   { id: 711, challengeId: 237, correct: false, text: "Adị m afo iri atọ na ise" },
   
   { id: 712, challengeId: 238, correct: true, text: "A hụrụ m Igbo n'anya", audioSrc: "m1-l2-q3-ig.mp3" },
   { id: 713, challengeId: 238, correct: false, text: "Obere" },
   { id: 714, challengeId: 238, correct: false, text: "A na m agwa gị okwu" },
   
   { id: 715, challengeId: 239, correct: false, text: "Gịnị bụ ihe a?" },
   { id: 716, challengeId: 239, correct: true, text: "E nwere m ike iso gị mee?", audioSrc: "m1-l2-q4-ig.mp3" },
   { id: 717, challengeId: 239, correct: false, text: "Adị m afọ iri atọ na ise" },
   
   { id: 718, challengeId: 240, correct: true, text: "Ị dị afọ ole?", audioSrc: "m1-l2-q5-ig.mp3" },
   { id: 719, challengeId: 240, correct: false, text: "Adị m afọ iri atọ na ise" },
   { id: 720, challengeId: 240, correct: false, text: "A hụrụ m gị n'anya" },
   
   { id: 721, challengeId: 241, correct: true, text: "A dị m afọ iri atọ na ise", audioSrc: "m1-l2-q6-ig.mp3" },
   { id: 722, challengeId: 241, correct: false, text: "A hụrụ m gị n'anya" },
   { id: 723, challengeId: 241, correct: false, text: "E bi m na USA" },
   
   { id: 724, challengeId: 242, correct: true, text: "A na m agwa gị okwu", audioSrc: "m1-l2-q7-ig.mp3" },
   { id: 725, challengeId: 242, correct: false, text: "Kedu ebe I bi?" },
   { id: 726, challengeId: 242, correct: false, text: "Gịnị bụ ihe a?" },
   
   { id: 727, challengeId: 243, correct: false, text: "A na m agwa gị okwu" },
   { id: 728, challengeId: 243, correct: false, text: "A dị m afọ iri atọ na ise" },
   { id: 729, challengeId: 243, correct: true, text: "Gịnị bụ ihe a?", audioSrc: "m1-l2-q8-ig.mp3" },
   
   { id: 730, challengeId: 244, correct: true, text: "Kedu ihe ihe ahụ pụtara?", audioSrc: "m1-l2-q9-ig.mp3" },
   { id: 731, challengeId: 244, correct: false, text: "A dị m afọ iri atọ na ise" },
   { id: 732, challengeId: 244, correct: false, text: "Ọ dị mma" },
   
   { id: 733, challengeId: 245, correct: true, text: "Kedu ebe ị nọ?", audioSrc: "m1-l2-q10-ig.mp3" },
   { id: 734, challengeId: 245, correct: false, text: "Kedu ebe i bi?" },
   { id: 735, challengeId: 245, correct: false, text: "A dị m afọ iri atọ na ise" },
   
   { id: 736, challengeId: 246, correct: true, text: "A hụrụ m gị n'anya", audioSrc: "m1-l2-q14-ig.mp3"},
   { id: 737, challengeId: 246, correct: false, text: "E bi m na USA" },
   { id: 738, challengeId: 246, correct: false, text: "Ọ dị mma" },
   
   { id: 739, challengeId: 247, correct: false, text: "A hụrụ m gị n'anya" },
   { id: 740, challengeId: 247, correct: false, text: "Ọ dị mma" },
   { id: 741, challengeId: 247, correct: true, text: "Kedu ebe I bi?", audioSrc: "m1-l2-q11-ig.mp3" },
   
   { id: 742, challengeId: 248, correct: true, text: "Ọ dị mma", audioSrc: "m1-l2-q12-ig.mp3" },
   { id: 743, challengeId: 248, correct: false, text: "A hụrụ m gị n'anya" },
   { id: 744, challengeId: 248, correct: false, text: "Kedu ebe i bi?" },
   
   { id: 745, challengeId: 249, correct: false, text: "Ọ dị mma" },
   { id: 746, challengeId: 249, correct: true, text: "Ọ mara mma", audioSrc: "m1-l2-q13-ig.mp3" },
   { id: 747, challengeId: 249, correct: false, text: "Kedu ebe i bi?" },
   
   { id: 748, challengeId: 250, correct: true, text: "E bi m na USA", audioSrc: "m1-l2-q15-ig.mp3" },
   { id: 749, challengeId: 250, correct: false, text: "E bi m na Nigeria" },
   { id: 750, challengeId: 250, correct: false, text: "Ọ dị mma" },

   // LESSON 3 STARTS
   
{ id: 751, challengeId: 251, correct: false, text: "Kedu ihe I kwuru pụtara?" },
{ id: 752, challengeId: 251, correct: false, text: "Gwa m okwu" },
{ id: 753, challengeId: 251, correct: true, text: "Ha na-agba egwu", audioSrc: "m1-l3-q1-ig.mp3" },

{ id: 754, challengeId: 252, correct: false, text: "I nwetara ya" },
{ id: 755, challengeId: 252, correct: true, text: "Kedu ihe I kwuru pụtara?", audioSrc: "m1-l3-q2-ig.mp3" },
{ id: 756, challengeId: 252, correct: false, text: "A ma m" },

{ id: 757, challengeId: 253, correct: false, text: "A hụkwara m gị n'anya" },
{ id: 758, challengeId: 253, correct: true, text: "Gwa m okwu", audioSrc: "m1-l3-q3-ig.mp3" },
{ id: 759, challengeId: 253, correct: false, text: "Ọ bụghị etu ahụ" },

{ id: 760, challengeId: 254, correct: false, text: "A ma m" },
{ id: 761, challengeId: 254, correct: true, text: "A hụkwara m gị n'anya", audioSrc: "m1-l3-q4-ig.mp3" },
{ id: 762, challengeId: 254, correct: false, text: "Kedu ebe ị na-aga?" },

{ id: 763, challengeId: 255, correct: true, text: "Ọ bụghị etu ahụ", audioSrc: "m1-l3-q5-ig.mp3" },
{ id: 764, challengeId: 255, correct: false, text: "Kpọm kwem" },
{ id: 765, challengeId: 255, correct: false, text: "Kedu ebe Ị na-aga?" },

{ id: 766, challengeId: 256, correct: false, text: "Ka anyi jee" },
{ id: 767, challengeId: 256, correct: true, text: "Kedu ebe Ị na-aga?", audioSrc: "m1-l3-q6-ig.mp3" },
{ id: 768, challengeId: 256, correct: false, text: "I metaghị ya" },

{ id: 769, challengeId: 257, correct: true, text: "Bịaghachi ebe a", audioSrc: "m1-l3-q7-ig.mp3" },
{ id: 770, challengeId: 257, correct: false, text: "Kedu ebe Ị na-aga?" },
{ id: 771, challengeId: 257, correct: false, text: "A ma m" },

{ id: 772, challengeId: 258, correct: true, text: "Ọ sọ gị nọ?", audioSrc: "m1-l3-q8-ig.mp3" },
{ id: 773, challengeId: 258, correct: false, text: "Eee" },
{ id: 774, challengeId: 258, correct: false, text: "Mba" },

{ id: 775, challengeId: 259, correct: true, text: "Ka anyị laa", audioSrc: "m1-l3-q9-ig.mp3" },
{ id: 776, challengeId: 259, correct: false, text: "Bịaghachi ebe a" },
{ id: 777, challengeId: 259, correct: false, text: "I nwetara ya" },

{ id: 778, challengeId: 260, correct: false, text: "Kpọm kwem" },
{ id: 779, challengeId: 260, correct: true, text: "A ma m", audioSrc: "m1-l3-q10-ig.mp3" },
{ id: 780, challengeId: 260, correct: false, text: "Kedu ebe ị na-aga?" },

{ id: 781, challengeId: 261, correct: true, text: "Kpọm kwem", audioSrc: "m1-l3-q11-ig.mp3" },
{ id: 782, challengeId: 261, correct: false, text: "A ma m" },
{ id: 783, challengeId: 261, correct: false, text: "I nwetara ya" },

{ id: 784, challengeId: 262, correct: true, text: "I nwetara ya", audioSrc: "m1-l3-q12-ig.mp3" },
{ id: 785, challengeId: 262, correct: false, text: "Ọ dị mma" },
{ id: 786, challengeId: 262, correct: false, text: "A hụkwara m gị n'anya" },

{ id: 787, challengeId: 263, correct: false, text: "Ọ dị mma" },
{ id: 788, challengeId: 263, correct: false, text: "I nwetara ya" },
{ id: 789, challengeId: 263, correct: true, text: "I nwetaghị ya", audioSrc: "m1-l3-q13-ig.mp3" },

{ id: 790, challengeId: 264, correct: false, text: "A ma m" },
{ id: 791, challengeId: 264, correct: true, text: "Ọ dị mma", audioSrc: "m1-l3-q14-ig.mp3" },
{ id: 792, challengeId: 264, correct: false, text: "Kedu ebe ị na-aga?" },

{ id: 793, challengeId: 265, correct: false, text: "I nwetaghị ya" },
{ id: 794, challengeId: 265, correct: true, text: "Ị ma?", audioSrc: "m1-l3-q15-ig.mp3" },
{ id: 795, challengeId: 265, correct: false, text: "Kpọm kwem" },

{ id: 796, challengeId: 266, correct: true, text: "A chọrọ m i go", audioSrc: "m1-l4-q1-ig.mp3" },
{ id: 797, challengeId: 266, correct: false, text: "Kedu ihe ị chọrọ i go" },
{ id: 798, challengeId: 266, correct: false, text: "Ji ruru otu puku naịra" },

{ id: 799, challengeId: 267, correct: false, text: "Ji ruru otu puku naịra" },
{ id: 800, challengeId: 267, correct: false, text: "A chọrọ m i go" },
{ id: 801, challengeId: 267, correct: true, text: "Kedu ihe ị chọrọ i go?", audioSrc: "m1-l4-q2-ig.mp3" },

{ id: 802, challengeId: 268, correct: false, text: "Ego ole?" },
{ id: 803, challengeId: 268, correct: true, text: "Ji", audioSrc: "m1-l4-q3-ig.mp3" },
{ id: 804, challengeId: 268, correct: false, text: "Kedu ihe ị chọrọ i go?" },

{ id: 805, challengeId: 269, correct: false, text: "Ji ruru otu puku naịra" },
{ id: 806, challengeId: 269, correct: true, text: "Ego ole?", audioSrc: "m1-l4-q4-ig.mp3" },
{ id: 807, challengeId: 269, correct: false, text: "Kedu ihe i kwuru?" },

{ id: 808, challengeId: 270, correct: false, text: "Ego ole?" },
{ id: 809, challengeId: 270, correct: false, text: "Biko gbaghara m" },
{ id: 810, challengeId: 270, correct: true, text: "Ji ruru otu puku naịra", audioSrc: "m1-l4-q5-ig.mp3" },

{ id: 811, challengeId: 271, correct: false, text: "Bịaghachi" },
{ id: 812, challengeId: 271, correct: false, text: "Biko gbaghara m" },
{ id: 813, challengeId: 271, correct: true, text: "A na m abịa", audioSrc: "m1-l4-q6-ig.mp3" },

{ id: 814, challengeId: 272, correct: false, text: "Bịaghachi" },
{ id: 815, challengeId: 272, correct: true, text: "Biko gbaghara m", audioSrc: "m1-l4-q7-ig.mp3" },
{ id: 816, challengeId: 272, correct: false, text: "Kedu ihe i kwuru?" },

{ id: 817, challengeId: 273, correct: false, text: "A nugo m gị" },
{ id: 818, challengeId: 273, correct: true, text: "Ọ dịghị", audioSrc: "m1-l4-q8-ig.mp3" },
{ id: 819, challengeId: 273, correct: false, text: "Bịaghachi" },

{ id: 820, challengeId: 274, correct: false, text: "A nugo m gị" },
{ id: 821, challengeId: 274, correct: true, text: "Bịaghachi", audioSrc: "m1-l4-q9-ig.mp3" },
{ id: 822, challengeId: 274, correct: false, text: "Biko gbaghara m" },

{ id: 823, challengeId: 275, correct: true, text: "A nugo m gị", audioSrc: "m1-l4-q10-ig.mp3" },
{ id: 824, challengeId: 275, correct: false, text: "Bịaghachi" },
{ id: 825, challengeId: 275, correct: false, text: "N'oge ole" },

{ id: 826, challengeId: 276, correct: true, text: "N'oge ole?", audioSrc: "m1-l4-q11-ig.mp3" },
{ id: 827, challengeId: 276, correct: false, text: "N'ehihie" },
{ id: 828, challengeId: 276, correct: false, text: "N'ụtụtụ" },

{ id: 829, challengeId: 277, correct: false, text: "N'oge ole?" },
{ id: 830, challengeId: 277, correct: true, text: "N'ehihie", audioSrc: "m1-l4-q12-ig.mp3" },
{ id: 831, challengeId: 277, correct: false, text: "Na mgbede" },

{ id: 832, challengeId: 278, correct: true, text: "A ga m abịa", audioSrc: "m1-l4-q13-ig.mp3" },
{ id: 833, challengeId: 278, correct: false, text: "Alawala m" },
{ id: 834, challengeId: 278, correct: false, text: "Ị sị gịnị?" },

{ id: 835, challengeId: 279, correct: false, text: "A ga m abịa" },
{ id: 836, challengeId: 279, correct: true, text: "Alawala m", audioSrc: "m1-l4-q14-ig.mp3" },
{ id: 837, challengeId: 279, correct: false, text: "A na m abịa" },

{ id: 838, challengeId: 280, correct: true, text: "Ị sị gịnị?", audioSrc: "m1-l4-q15-ig.mp3" },
{ id: 839, challengeId: 280, correct: false, text: "A na m abịa" },
{ id: 840, challengeId: 280, correct: false, text: "Biko gbaghara m" },

{ id: 841, challengeId: 281, correct: false, text: "A na m aga Enugu" },
{ id: 842, challengeId: 281, correct: true, text: "Kedu ebe ị na-aga?", audioSrc: "m1-l5-q1-ig.mp3" },
{ id: 843, challengeId: 281, correct: false, text: "Nọrọ ọdụ n'azụ" },

{ id: 844, challengeId: 282, correct: true, text: "A na m aga Enugu", audioSrc: "m1-l5-q2-ig.mp3" },
{ id: 845, challengeId: 282, correct: false, text: "Kedu ebe ị na aga" },
{ id: 846, challengeId: 282, correct: false, text: "Bata n'ime" },

{ id: 847, challengeId: 283, correct: false, text: "Rituo ebe" },
{ id: 848, challengeId: 283, correct: false, text: "Kedu ebe ị nọ?" },
{ id: 849, challengeId: 283, correct: true, text: "Bata n'ime", audioSrc: "m1-l5-q3-ig.mp3" },

{ id: 850, challengeId: 284, correct: true, text: "Nọrọ ọdụ n'azụ", audioSrc: "m1-l5-q4-ig.mp3" },
{ id: 851, challengeId: 284, correct: false, text: "Bata n'ime" },
{ id: 852, challengeId: 284, correct: false, text: "Ehihie ọma" },

{ id: 853, challengeId: 285, correct: true, text: "Ebe ka ha nọ?", audioSrc: "m1-l5-q6-ig.mp3" },
{ id: 854, challengeId: 285, correct: false, text: "Kedu ebe ị na-aga?" },
{ id: 855, challengeId: 285, correct: false, text: "Gbanye ọkụ" },

{ id: 856, challengeId: 286, correct: false, text: "Ehihie ọma" },
{ id: 857, challengeId: 286, correct: true, text: "Rituo ebe a", audioSrc: "m1-l5-q7-ig.mp3" },
{ id: 858, challengeId: 286, correct: false, text: "Nnọọ" },

{ id: 859, challengeId: 287, correct: true, text: "Were ego gị", audioSrc: "m1-l5-q8-ig.mp3" },
{ id: 860, challengeId: 287, correct: false, text: "Daalụ" },
{ id: 861, challengeId: 287, correct: false, text: "Kedu ihe ị chọrọ iri?" },

{ id: 862, challengeId: 288, correct: true, text: "Ehihie ọma", audioSrc: "m1-l5-q9-ig.mp3" },
{ id: 863, challengeId: 288, correct: false, text: "Kedu ihe ikwuru?" },
{ id: 864, challengeId: 288, correct: false, text: "Nnọọ" },

{ id: 865, challengeId: 289, correct: false, text: "Daalụ" },
{ id: 866, challengeId: 289, correct: true, text: "Nnọọ", audioSrc: "m1-l5-q10-ig.mp3" },
{ id: 867, challengeId: 289, correct: false, text: "Ka ọ dị" },

{ id: 868, challengeId: 290, correct: true, text: "Gbanye ọkụ", audioSrc: "m1-l5-q11-ig.mp3" },
{ id: 869, challengeId: 290, correct: false, text: "Kedu ihe ị chọrọ i ri?" },
{ id: 870, challengeId: 290, correct: false, text: "I nwere mmiri?" },

{ id: 871, challengeId: 291, correct: true, text: "Kedu ihe ị chọrọ i ri?", audioSrc: "m1-l5-q12-ig.mp3" },
{ id: 872, challengeId: 291, correct: false, text: "I nwere mmiri?" },
{ id: 873, challengeId: 291, correct: false, text: "Gbanye ọkụ" },

{ id: 874, challengeId: 292, correct: false, text: "Daalụ" },
{ id: 875, challengeId: 292, correct: false, text: "Ị chọrọ iri nri?" },
{ id: 876, challengeId: 292, correct: true, text: "I nwere mmiri?", audioSrc: "m1-l5-q13-ig.mp3" },

{ id: 877, challengeId: 293, correct: true, text: "Daalụ", audioSrc: "m1-l5-q14-ig.mp3" },
{ id: 878, challengeId: 293, correct: false, text: "Ka ọ dị" },
{ id: 879, challengeId: 293, correct: false, text: "Nnọọ" },

{ id: 880, challengeId: 294, correct: true, text: "Ka ọ dị", audioSrc: "m1-l5-q15-ig.mp3" },
{ id: 881, challengeId: 294, correct: false, text: "Daalụ" },
{ id: 882, challengeId: 294, correct: false, text: "Nnọọ" },

// Igbo Module 2 Lesson 1

{id: 883, challengeId: 295, correct: false, text: "Ụtụtụ ọma", audioSrc: "m2-l1-q1-ig.mp3" },
{id: 884, challengeId: 295, correct: true, text: "Daalụ nke ukwuu", audioSrc: "m2-l1-q1-ig.mp3" },
{id: 885, challengeId: 295, correct: false, text: "Lee" },

{id: 886, challengeId: 296, correct: false, text: "Daalụ nke ukwuu", audioSrc: "m2-l1-q2-ig.mp3" },
{id: 887, challengeId: 296, correct: false, text: "Nnọọ" },
{id: 888, challengeId: 296, correct: true, text: "Ụtụtụ", audioSrc: "m2-l1-q2-ig.mp3" },

{id: 889, challengeId: 297, correct: false, text: "Lee"},
{id: 890, challengeId: 297, correct: false, text: "Ndeewo"},
{id: 891, challengeId: 297, correct: true, text: "Ụtụtụ ọma", audioSrc: "m2-l1-q3-ig.mp3" },

{id: 892, challengeId: 298, correct: true, text: "Abalị", audioSrc: "m2-l1-q4-ig.mp3" },
{id: 893, challengeId: 298, correct: false, text: "Nnọọ" },
{id: 894, challengeId: 298, correct: false, text: "Ehihie" },

{id: 895, challengeId: 299, correct: true, text: "Nnọọ", audioSrc: "m2-l1-q5-ig.mp3" },
{id: 896, challengeId: 299, correct: false, text: "Daalụ nke ukwuu" },
{id: 897, challengeId: 299, correct: false, text: "Ụtụtụ" },

{id: 898, challengeId: 300, correct: true, text: "Lee", audioSrc: "m2-l1-q6-ig.mp3" },
{id: 899, challengeId: 300, correct: false, text: "Kachifoo" },
{id: 900, challengeId: 300, correct: false, text: "Ndeewo" },

{id: 901, challengeId: 301, correct: true, text: "Ọ dị mma", audioSrc: "m2-l1-q7-ig.mp3" },
{id: 902, challengeId: 301, correct: false, text: "Ụtụtụ" },
{id: 903, challengeId: 301, correct: false, text: "Nwee ụbọchị ọma" },

{id: 904, challengeId: 302, correct: false, text: "Kedu ka I mere?", audioSrc: "m2-l1-q8-ig.mp3" },
{id: 905, challengeId: 302, correct: true, text: "Ndeewo", audioSrc: "m2-l1-q8-ig.mp3" },
{id: 906, challengeId: 302, correct: false, text: "Ka ọ dị" },

{id: 907, challengeId: 303, correct: true, text: "Ka ọ dị", audioSrc: "m2-l1-q9-ig.mp3" },
{id: 908, challengeId: 303, correct: false, text: "Rahụ ọfụma" },
{id: 909, challengeId: 303, correct: false, text: "Nwee ụbọchị ọma" },

{id: 910, challengeId: 304, correct: true, text: "Kedu ka I mere?", audioSrc: "m2-l1-q10-ig.mp3" },
{id: 911, challengeId: 304, correct: false, text: "Lee" },
{id: 912, challengeId: 304, correct: false, text: "Daalụ nke ukwuu" },

{id: 913, challengeId: 305, correct: true, text: "Nwee ụbọchị ọma", audioSrc: "m2-l1-q11-ig.mp3" },
{id: 914, challengeId: 305, correct: false, text: "Ụtụtụ ọma" },
{id: 915, challengeId: 305, correct: false, text: "Nnọọ" },

{id: 916, challengeId: 306, correct: false, text: "Ụtụtụ", audioSrc: "m2-l1-q12-ig.mp3" },
{id: 917, challengeId: 306, correct: false, text: "Ka emesia, ka ọ dị echi" },
{id: 918, challengeId: 306, correct: true, text: "Kachifoo", audioSrc: "m2-l1-q12-ig.mp3" },

{id: 919, challengeId: 307, correct: true, text: "Ka emesịa, ka ọ dị echi", audioSrc: "m2-l1-q13-ig.mp3" },
{id: 920, challengeId: 307, correct: false, text: "Ka ọ dị" },
{id: 921, challengeId: 307, correct: false, text: "Ndeewo" },

{id: 922, challengeId: 308, correct: true, text: "Ka ọ dị", audioSrc: "m2-l1-q14-ig.mp3" },
{id: 923, challengeId: 308, correct: false, text: "Nnọọ" },
{id: 924, challengeId: 308, correct: false, text: "Nwee ụbọchị ọma" },

{id: 925, challengeId: 309, correct: true, text: "Rahu ọfụma", audioSrc: "m2-l1-q15-ig.mp3" },
{id: 926, challengeId: 309, correct: false, text: "Daalụ nke ukwuu" },
{id: 927, challengeId: 309, correct: false, text: "Ụtụtụ ọma" },
{id: 928, challengeId: 310, correct: false, text: "Ụtụtụ ọma", audioSrc: "m2-l2-q1-ig.mp3" },
{id: 929, challengeId: 310, correct: true, text: "Mgbede ọma, Emeka", audioSrc: "m2-l2-q1-ig.mp3" },
{id: 930, challengeId: 310, correct: false, text: "Ka ọdị echi" },

{id: 931, challengeId: 311, correct: false, text: "Ka ọ dị", audioSrc: "m2-l2-q2-ig.mp3" },
{id: 932, challengeId: 311, correct: true, text: "Ụtụtụ ọma", audioSrc: "m2-l2-q2-ig.mp3" },
{id: 933, challengeId: 311, correct: false, text: "Echi" },

{id: 934, challengeId: 312, correct: true, text: "Ehihie", audioSrc: "m2-l2-q3-ig.mp3" },
{id: 935, challengeId: 312, correct: false, text: "Mgbede ọma Emeka" },
{id: 936, challengeId: 312, correct: false, text: "Ụtụtụ ọma" },

{id: 937, challengeId: 313, correct: false, text: "Nnọọ" },
{id: 938, challengeId: 313, correct: false, text: "Ehihie" },
{id: 939, challengeId: 313, correct: true, text: "Abalị", audioSrc: "m2-l2-q4-ig.mp3" },

{id: 940, challengeId: 314, correct: false, text: "Daalụ" },
{id: 941, challengeId: 314, correct: true, text: "Ka ọ dị echi", audioSrc: "m2-l2-q5-ig.mp3" },
{id: 942, challengeId: 314, correct: false, text: "Kedu ka I mere?" },

{id: 943, challengeId: 315, correct: true, text: "Ka ọ dị", audioSrc: "m2-l2-q6-ig.mp3" },
{id: 944, challengeId: 315, correct: false, text: "Abalị" },
{id: 945, challengeId: 315, correct: false, text: "Kedu ka I mere?" },

{id: 946, challengeId: 316, correct: false, text: "Nnọọ" },
{id: 947, challengeId: 316, correct: true, text: "Ị bịala?", audioSrc: "m2-l2-q7-ig.mp3" },
{id: 948, challengeId: 316, correct: false, text: "Echi" },

{id: 949, challengeId: 317, correct: true, text: "Kedu ka I mere?", audioSrc: "m2-l2-q8-ig.mp3" },
{id: 950, challengeId: 317, correct: false, text: "Ụtụtụ ọma" },
{id: 951, challengeId: 317, correct: false, text: "Ị bịala?" },

{id: 952, challengeId: 318, correct: false, text: "Echi" },
{id: 953, challengeId: 318, correct: false, text: "Gị" },
{id: 954, challengeId: 318, correct: true, text: "Jisie ike", audioSrc: "m2-l2-q9-ig.mp3" },

{id: 955, challengeId: 319, correct: true, text: "Ka ọ dị", audioSrc: "m2-l2-q10-ig.mp3" },
{id: 956, challengeId: 319, correct: false, text: "Hie ụra" },
{id: 957, challengeId: 319, correct: false, text: "Daalụ" },

{id: 958, challengeId: 320, correct: false, text: "Echi" },
{id: 959, challengeId: 320, correct: true, text: "Nnọọ", audioSrc: "m2-l2-q11-ig.mp3" },
{id: 960, challengeId: 320, correct: false, text: "Daalụ" },

{id: 961, challengeId: 321, correct: false, text: "Abalị" },
{id: 962, challengeId: 321, correct: true, text: "Gị", audioSrc: "m2-l2-q12-ig.mp3" },
{id: 963, challengeId: 321, correct: false, text: "Ka ọ dị" },

{id: 964, challengeId: 322, correct: false, text: "Nnọọ" },
{id: 965, challengeId: 322, correct: false, text: "Hie ụra" },
{id: 966, challengeId: 322, correct: true, text: "Daalụ", audioSrc: "m2-l2-q13-ig.mp3" },

{id: 967, challengeId: 323, correct: true, text: "Echi", audioSrc: "m2-l2-q14-ig.mp3" },
{id: 968, challengeId: 323, correct: false, text: "Ị bịala?" },
{id: 969, challengeId: 323, correct: false, text: "Daalụ" },

{id: 970, challengeId: 324, correct: false, text: "Mgbede ọma Emeka" },
{id: 971, challengeId: 324, correct: false, text: "Gị" },
{id: 972, challengeId: 324, correct: true, text: "Hie Ụra", audioSrc: "m2-l2-q15-ig.mp3" },
{id: 973, challengeId: 325, correct: false, text: "Ndeewo Emeka, kedu ka I mere?" },
{id: 974, challengeId: 325, correct: false, text: "ka ahụ oge n'adịghị anya" },
{id: 975, challengeId: 325, correct: true, text: "Ụtụtụ ọma Emeka", audioSrc: "m2-l3-q1-ig.mp3" },

{id: 976, challengeId: 326, correct: false, text: "A dị m mma" },
{id: 977, challengeId: 326, correct: true, text: "Ngwanụ, ka ọ dị echi", audioSrc: "m2-l3-q2-ig.mp3" },
{id: 978, challengeId: 326, correct: false, text: "Eee, daalụ" },

{id: 979, challengeId: 327, correct: true, text: "Ka ahụ oge adịghị anya", audioSrc: "m2-l3-q3-ig.mp3" },
{id: 980, challengeId: 327, correct: false, text: "Ị rahụkwara ọfụma?" },
{id: 981, challengeId: 327, correct: false, text: "Ehihie ọma" },

{id: 982, challengeId: 328, correct: true, text: "Ka emesịa, ka ọdị echi", audioSrc: "m2-l3-q4-ig.mp3" },
{id: 983, challengeId: 328, correct: false, text: "A dị m mma" },
{id: 984, challengeId: 328, correct: false, text: "Ehihie ọma" },

{id: 985, challengeId: 329, correct: false, text: "Ehihie ọma" },
{id: 986, challengeId: 329, correct: false, text: "Eee, Daalụ" },
{id: 987, challengeId: 329, correct: true, text: "Ndeewo", audioSrc: "m2-l3-q5-ig.mp3" },

{id: 988, challengeId: 330, correct: true, text: "Kedu ka I mere?", audioSrc: "m2-l3-q6-ig.mp3" },
{id: 989, challengeId: 330, correct: false, text: "Ị rahụkwara ọfụma?" },
{id: 990, challengeId: 330, correct: false, text: "Ndeewo Emeka, kedu ka I mere?" },

{id: 991, challengeId: 331, correct: true, text: "Ehihie ọma", audioSrc: "m2-l3-q7-ig.mp3" },
{id: 992, challengeId: 331, correct: false, text: "Kachifoo" },
{id: 993, challengeId: 331, correct: false, text: "Ka ahụ oge n'adịghị anya" },

{id: 994, challengeId: 332, correct: false, text: "Eee" },
{id: 995, challengeId: 332, correct: true, text: "Daalụ", audioSrc: "m2-l3-q8-ig.mp3" },
{id: 996, challengeId: 332, correct: false, text: "Ngwanụ, ka ọdị echi" },

{id: 997, challengeId: 333, correct: false, text: "Kedu ka I mere?" },
{id: 998, challengeId: 333, correct: false, text: "Ndeewo Emeka, kedu ka i mere" },
{id: 999, challengeId: 333, correct: true, text: "Ị rahụkwara ọfụma?", audioSrc: "m2-l3-q9-ig.mp3" },

{id: 1000, challengeId: 334, correct: false, text: "Ka ọ dị echi" },
{id: 1001, challengeId: 334, correct: true, text: "Kachifoo", audioSrc: "m2-l3-q10-ig.mp3" },
{id: 1002, challengeId: 334, correct: false, text: "Ka ahụ oge adịghị anya" },

{id: 1003, challengeId: 335, correct: true, text: "A na m eme nke ọma", audioSrc: "m2-l3-q11-ig.mp3" },
{id: 1004, challengeId: 335, correct: false, text: "Daalụ" },
{id: 1005, challengeId: 335, correct: false, text: "Kedu ka i mere?" },

{id: 1006, challengeId: 336, correct: false, text: "Eee, daalụ" },
{id: 1007, challengeId: 336, correct: true, text: "Eee", audioSrc: "m2-l3-q12-ig.mp3" },
{id: 1008, challengeId: 336, correct: false, text: "Ka ahụ oge adịghị anya" },

{id: 1009, challengeId: 337, correct: true, text: "Ndeewo Emeka, kedu ka i mere?", audioSrc: "m2-l3-q13-ig.mp3" },
{id: 1010, challengeId: 337, correct: false, text: "Kedu ka i mere?" },
{id: 1011, challengeId: 337, correct: false, text: "Ị rahụkwara ọfụma?" },

{id: 1012, challengeId: 338, correct: true, text: "Eee, daalụ", audioSrc: "m2-l3-q14-ig.mp3" },
{id: 1013, challengeId: 338, correct: false, text: "A na m eme nke ọma" },
{id: 1014, challengeId: 338, correct: false, text: "Ehihie ọma" },

{id: 1015, challengeId: 339, correct: false, text: "Kedu ka i mere?" },
{id: 1016, challengeId: 339, correct: false, text: "Kachifoo" },
{id: 1017, challengeId: 339, correct: true, text: "Ị rahụkwara ọfụma?", audioSrc: "m2-l3-q15-ig.mp3" },

{id: 1018, challengeId: 340, correct: false, text: "Ụtụtụ ọma, kedu ka I mere?" },
{id: 1019, challengeId: 340, correct: true, text: "Ndeewo Emeka, kedu ka I mere?", audioSrc: "m2-l4-q1-ig.mp3" },
{id: 1020, challengeId: 340, correct: false, text: "Mgbede ọma, kedu ka I mere?" },

{id: 1021, challengeId: 341, correct: false, text: "A bụ m Emeka, gị kwanụ?" },
{id: 1022, challengeId: 341, correct: true, text: "Ọ dị mma", audioSrc: "m2-l4-q2-ig.mp3" },
{id: 1023, challengeId: 341, correct: false, text: "Daalụ" },

{id: 1024, challengeId: 342, correct: true, text: "Ụtụtụ ọma, kedu ka I mere?", audioSrc: "m2-l4-q3-ig.mp3" },
{id: 1025, challengeId: 342, correct: false, text: "A na m eme nke ọma" },
{id: 1026, challengeId: 342, correct: false, text: "A bụ m Emeka, gị kwanụ?" },

{id: 1027, challengeId: 343, correct: true, text: "A na m eme nke ọma, kedụ maka gị?", audioSrc: "m2-l4-q4-ig.mp3" },
{id: 1028, challengeId: 343, correct: false, text: "A na m eme nke oma, daalụ" },
{id: 1029, challengeId: 343, correct: false, text: "Mgbede ọma, kedu ka I mere?" },

{id: 1030, challengeId: 344, correct: true, text: "Mgbede ọma, kedu ka I mere?", audioSrc: "m2-l4-q5-ig.mp3" },
{id: 1031, challengeId: 344, correct: false, text: "Ndeewo, kedu ka I mere?" },
{id: 1032, challengeId: 344, correct: false, text: "Ka ọ dị" },

{id: 1033, challengeId: 345, correct: false, text: "A bụ m Emeka" },
{id: 1034, challengeId: 345, correct: true, text: "A bụ m Emeka, gị kwanụ?", audioSrc: "m2-l4-q6-ig.mp3" },
{id: 1035, challengeId: 345, correct: false, text: "Ụtụtụ ọma, kedu ka I mere?" },

{id: 1036, challengeId: 346, correct: false, text: "Ọ dị mma" },
{id: 1037, challengeId: 346, correct: false, text: "A na m eme nke ọma" },
{id: 1038, challengeId: 346, correct: true, text: "Ndeewo, kedu ka I mere?", audioSrc: "m2-l4-q7-ig.mp3" },

{id: 1039, challengeId: 347, correct: true, text: "A na m eme nke ọma, daalụ", audioSrc: "m2-l4-q8-ig.mp3" },
{id: 1040, challengeId: 347, correct: false, text: "A bụ m Emeka, gị kwanụ?" },
{id: 1041, challengeId: 347, correct: false, text: "A na m eme nke ọma" },

{id: 1042, challengeId: 348, correct: true, text: "A na m eme nke ọma", audioSrc: "m2-l4-q9-ig.mp3" },
{id: 1043, challengeId: 348, correct: false, text: "Ọ dị mma" },
{id: 1044, challengeId: 348, correct: false, text: "Ndeewo, kedu ka I mere?" },

{id: 1045, challengeId: 349, correct: true, text: "Kedu ka I mere?", audioSrc: "m2-l4-q10-ig.mp3" },
{id: 1046, challengeId: 349, correct: false, text: "Ọ dị mma" },
{id: 1047, challengeId: 349, correct: false, text: "Daalụ" },

{id: 1048, challengeId: 350, correct: true, text: "Mgbede ọma, I na-eme m n'obi", audioSrc: "m2-l4-q11-ig.mp3" },
{id: 1049, challengeId: 350, correct: false, text: "Mgbede ọma, kedu ka I mere?" },
{id: 1050, challengeId: 350, correct: false, text: "Ehihie ọma" },

{id: 1051, challengeId: 351, correct: false, text: "Ka ọ dị" },
{id: 1052, challengeId: 351, correct: true, text: "Ọ dị mma", audioSrc: "m2-l4-q12-ig.mp3" },
{id: 1053, challengeId: 351, correct: false, text: "Mgbede ọma, i na-eme m n'obi" },

{id: 1054, challengeId: 352, correct: true, text: "A bụ m enyi gị", audioSrc: "m2-l4-q13-ig.mp3" },
{id: 1055, challengeId: 352, correct: false, text: "A bụ m Emeka" },
{id: 1056, challengeId: 352, correct: false, text: "Ka ọ dị" },

{id: 1057, challengeId: 353, correct: true, text: "Ka ọ dị", audioSrc: "m2-l4-q14-ig.mp3" },
{id: 1058, challengeId: 353, correct: false, text: "Daalụ" },
{id: 1059, challengeId: 353, correct: false, text: "Ọ dị mma" },

{id: 1060, challengeId: 354, correct: true, text: "A bụ m Emeka", audioSrc: "m2-l4-q15-ig.mp3" },
{id: 1061, challengeId: 354, correct: false, text: "A bụ m enyi gị" },
{id: 1062, challengeId: 354, correct: false, text: "A bụ m Emeka, gị kwanụ" },

{id: 1063, challengeId: 355, correct: true, text: "Nwee mgbede ọma", audioSrc: "m2-l5-q1-ig.mp3" },
{id: 1064, challengeId: 355, correct: false, text: "Eee, ma gị" },
{id: 1065, challengeId: 355, correct: false, text: "Ị mụ anya?" },

{id: 1066, challengeId: 356, correct: true, text: "Eee, a dị m mma", audioSrc: "m2-l5-q2-ig.mp3" },
{id: 1067, challengeId: 356, correct: false, text: "Eee, gị kwanụ" },
{id: 1068, challengeId: 356, correct: false, text: "Eee, a ga m eji ụgbọelu ga njem" },

{id: 1069, challengeId: 357, correct: true, text: "Eee, kedu maka gị", audioSrc: "m2-l5-q3-ig.mp3" },
{id: 1070, challengeId: 357, correct: false, text: "Ị mụ anya?" },
{id: 1071, challengeId: 357, correct: false, text: "Nnọọ" },

{id: 1072, challengeId: 358, correct: false, text: "Kedu ka ụbọchị gị si aga?" },
{id: 1073, challengeId: 358, correct: true, text: "Ị rahụkwara ọfụma?", audioSrc: "m2-l5-q4-ig.mp3" },
{id: 1074, challengeId: 358, correct: false, text: "Nnọọ" },

{id: 1075, challengeId: 359, correct: true, text: "Ị mụ anya?", audioSrc: "m2-l5-q5-ig.mp3" },
{id: 1076, challengeId: 359, correct: false, text: "Kedu ka ụbọchị gị si aga?" },
{id: 1077, challengeId: 359, correct: false, text: "Ịrahụkwara ọfụma?" },

{id: 1078, challengeId: 360, correct: true, text: "Nnọọ", audioSrc: "m2-l5-q6-ig.mp3" },
{id: 1079, challengeId: 360, correct: false, text: "Anyi kelere Chineke" },
{id: 1080, challengeId: 360, correct: false, text: "A na m anya ụgbọala" },

{id: 1081, challengeId: 361, correct: true, text: "Ka ahụ gị oge adịghị anya", audioSrc: "m2-l5-q7-ig.mp3" },
{id: 1082, challengeId: 361, correct: false, text: "Rahụ nke ọma" },
{id: 1083, challengeId: 361, correct: false, text: "Kedu ka ụbọchị gị si aga?" },

{id: 1084, challengeId: 362, correct: true, text: "Eee, aga m eji ụgbọelu ga njem", audioSrc: "m2-l5-q8-ig.mp3" },
{id: 1085, challengeId: 362, correct: false, text: "A na m anya ụgbọala" },
{id: 1086, challengeId: 362, correct: false, text: "Anyi kelere Chineke" },

{id: 1087, challengeId: 363, correct: true, text: "I tetara ugbua?", audioSrc: "m2-l5-q9-ig.mp3" },
{id: 1088, challengeId: 363, correct: false, text: "Kedu ka ụbọchị gị si aga?" },
{id: 1089, challengeId: 363, correct: false, text: "Rahụ nke ọma" },

{id: 1090, challengeId: 364, correct: true, text: "Gbaghara m", audioSrc: "m2-l5-q10-ig.mp3" },
{id: 1091, challengeId: 364, correct: false, text: "Ka ahụ gị oge adịghị anya" },
{id: 1092, challengeId: 364, correct: false, text: "Anyị kelere Chineke" },

{id: 1093, challengeId: 365, correct: true, text: "A na m eche gị", audioSrc: "m2-l5-q11-ig.mp3" },
{id: 1094, challengeId: 365, correct: false, text: "Rahụ nke ọma" },
{id: 1095, challengeId: 365, correct: false, text: "A na m anya ụgbọala" },

{id: 1096, challengeId: 366, correct: true, text: "Rahụ nke ọma", audioSrc: "m2-l5-q12-ig.mp3" },
{id: 1097, challengeId: 366, correct: false, text: "Eee, nnọ" },
{id: 1098, challengeId: 366, correct: false, text: "Eee, aga m eji ụgbọelu ga njem" },

{id: 1099, challengeId: 367, correct: true, text: "A na m anya ụgbọala", audioSrc: "m2-l5-q13-ig.mp3" },
{id: 1100, challengeId: 367, correct: false, text: "Ị mụ anya" },
{id: 1101, challengeId: 367, correct: false, text: "Nwee mgbede ọma" },

{id: 1102, challengeId: 368, correct: true, text: "Kedu ka ụbọchị gị si aga?", audioSrc: "m2-l5-q14-ig.mp3" },
{id: 1103, challengeId: 368, correct: false, text: "Ị rahụkwara ọfụma?" },
{id: 1104, challengeId: 368, correct: false, text: "Ị mụ anya?" },

{id: 1105, challengeId: 369, correct: true, text: "Anyi kelere Chineke", audioSrc: "m2-l5-q15-ig.mp3" },
{id: 1106, challengeId: 369, correct: false, text: "Nwee mgbede ọma" },
{id: 1107, challengeId: 369, correct: false, text: "Ka ahụ gị oge adịghị anya" },
// Igbo Module 3, Lesson 1
{id: 1108, challengeId: 370, correct: true, text: "A na m asụ Igbo", audioSrc: "m3-l1-q1-ig.mp3" },
{id: 1109, challengeId: 370, correct: false, text: "Cheregodi, ị na-asụ Igbo" },
{id: 1110, challengeId: 370, correct: false, text: "Ị bụ onye Igbo" },

{id: 1111, challengeId: 371, correct: true, text: "Cheregodi, ị na-asụ Igbo", audioSrc: "m3-l1-q2-ig.mp3" },
{id: 1112, challengeId: 371, correct: false, text: "Ị bụ onye Igbo" },
{id: 1113, challengeId: 371, correct: false, text: "A na m asụ Igbo" },

{id: 1114, challengeId: 372, correct: true, text: "Mba, a bụ m onye Igbo, a na m asụ Igbo", audioSrc: "m3-l1-q3-ig.mp3" },
{id: 1115, challengeId: 372, correct: false, text: "Ị bụ onye Igbo" },
{id: 1116, challengeId: 372, correct: false, text: "A bụ onye Nigeria" },

{id: 1117, challengeId: 373, correct: true, text: "A chọrọ m ụgbọego", audioSrc: "m3-l1-q4-ig.mp3" },
{id: 1118, challengeId: 373, correct: false, text: "Kedu ebe mmadụ ga-enweta ụgbọego?" },
{id: 1119, challengeId: 373, correct: false, text: "Gịnị bụ aha gị?" },

{id: 1120, challengeId: 374, correct: true, text: "Kedu ebe mmadụ ga-enweta ụgbọego?", audioSrc: "m3-l1-q5-ig.mp3" },
{id: 1121, challengeId: 374, correct: false, text: "A chọrọ m ụgbọego" },
{id: 1122, challengeId: 374, correct: false, text: "A nọ m n'ụlọ oriri" },

{id: 1123, challengeId: 375, correct: true, text: "A bụ onye Nigeria", audioSrc: "m3-l1-q6-ig.mp3" },
{id: 1124, challengeId: 375, correct: false, text: "A ga m a nọ otu izuụka" },
{id: 1125, challengeId: 375, correct: false, text: "Sọ m nọ" },

{id: 1126, challengeId: 376, correct: true, text: "Gịnị bụ aha gị?", audioSrc: "m3-l1-q7-ig.mp3" },
{id: 1127, challengeId: 376, correct: false, text: "Ị bụ onye Igbo?" },
{id: 1128, challengeId: 376, correct: false, text: "Aha m bụ David" },

{id: 1129, challengeId: 377, correct: true, text: "Aha ya bụ Okeke", audioSrc: "m3-l1-q8-ig.mp3" },
{id: 1130, challengeId: 377, correct: false, text: "Mụ na ezinụlọ m so bịa" },
{id: 1131, challengeId: 377, correct: false, text: "A bụ onye ọbịa na Nigeria" },

{id: 1132, challengeId: 378, correct: true, text: "Ị bụ onye Igbo?", audioSrc: "m3-l1-q9-ig.mp3" },
{id: 1133, challengeId: 378, correct: false, text: "Mba, abụ m onye Pidgin" },
{id: 1134, challengeId: 378, correct: false, text: "A bụ m onye Nigeria" },

{id: 1135, challengeId: 379, correct: true, text: "Aha m bụ David", audioSrc: "m3-l1-q10-ig.mp3" },
{id: 1136, challengeId: 379, correct: false, text: "Gịnị bụ aha gị?" },
{id: 1137, challengeId: 379, correct: false, text: "A ga m anọ otu izuụka" },

{id: 1138, challengeId: 380, correct: true, text: "Mba, abụ m Igbo", audioSrc: "m3-l1-q11-ig.mp3" },
{id: 1139, challengeId: 380, correct: false, text: "A bụ m onye Nigeria" },
{id: 1140, challengeId: 380, correct: false, text: "Ị bụ onye Igbo?" },

{id: 1141, challengeId: 381, correct: true, text: "A bụ m ọbịa na Nigeria", audioSrc: "m3-l1-q12-ig.mp3" },
{id: 1142, challengeId: 381, correct: false, text: "Mụ na ezinụlọ m so bịa" },
{id: 1143, challengeId: 381, correct: false, text: "Sọ m nọ" },

{id: 1144, challengeId: 382, correct: true, text: "A ga m a nọ otu izuụka", audioSrc: "m3-l1-q13-ig.mp3" },
{id: 1145, challengeId: 382, correct: false, text: "Gịnị bụ aha gị?" },
{id: 1146, challengeId: 382, correct: false, text: "A chọrọ m ụgbọego" },

{id: 1147, challengeId: 383, correct: true, text: "A nọ n'ụlọ oriri", audioSrc: "m3-l1-q14-ig.mp3" },
{id: 1148, challengeId: 383, correct: false, text: "A bụ ọbịa na Nigeria" },
{id: 1149, challengeId: 383, correct: false, text: "Sọ m nọ" },

{id: 1150, challengeId: 384, correct: true, text: "Sọ m nọ", audioSrc: "m3-l1-q15-ig.mp3" },
{id: 1151, challengeId: 384, correct: false, text: "Mụ na ezinụlọ m bịara" },
{id: 1152, challengeId: 384, correct: false, text: "A bụ ọbịa na Nigeria" },

{id: 1153, challengeId: 385, correct: false, text: "I nwere ụmụ?", audioSrc: "m3-l2-q1-ig.mp3" },
{id: 1154, challengeId: 385, correct: false, text: "A na m enwe obi añụrị na nleta m a" },
{id: 1155, challengeId: 385, correct: true, text: "Kedu ọrụ Ị na-arụ?", audioSrc: "m3-l2-q1-ig.mp3" },

{id: 1156, challengeId: 386, correct: false, text: "Obi dị m ụtọ ị nọ ebe a" },
{id: 1157, challengeId: 386, correct: false, text: "Kedu ụlọ sinima?" },
{id: 1158, challengeId: 386, correct: true, text: "Kedu ebe I si?", audioSrc: "m3-l2-q2-ig.mp3" },

{id: 1159, challengeId: 387, correct: true, text: "I nwere ụmụ?", audioSrc: "m3-l2-q3-ig.mp3" },
{id: 1160, challengeId: 387, correct: false, text: "Bịa ka anyi rie nri" },
{id: 1161, challengeId: 387, correct: false, text: "I gatugo na Nigeria?" },

{id: 1162, challengeId: 388, correct: true, text: "I gatụgo na Nigeria?", audioSrc: "m3-l2-q4-ig.mp3" },
{id: 1163, challengeId: 388, correct: false, text: "A chọrọ m I je na 'bichi'" },
{id: 1164, challengeId: 388, correct: false, text: "Bịa ka anyị rie nri" },

{id: 1165, challengeId: 389, correct: true, text: "A na m enwe obi añụrị na Nigeria", audioSrc: "m3-l2-q5-ig.mp3" },
{id: 1166, challengeId: 389, correct: false, text: "Bịa n'ụlọ m" },
{id: 1167, challengeId: 389, correct: false, text: "I nwere ụmụ?" },

{id: 1168, challengeId: 390, correct: true, text: "A chọrọ m ịhụ bichii", audioSrc: "m3-l2-q6-ig.mp3" },
{id: 1169, challengeId: 390, correct: false, text: "Bịa ka anyị rie nri" },
{id: 1170, challengeId: 390, correct: false, text: "I gatugo na Nigeria?" },

{id: 1171, challengeId: 391, correct: true, text: "Bịa n'ụlọ m", audioSrc: "m3-l2-q7-ig.mp3" },
{id: 1172, challengeId: 391, correct: false, text: "Nwunye m nọ na Nigeria" },
{id: 1173, challengeId: 391, correct: false, text: "Kele ezinụlọ gị" },

{id: 1174, challengeId: 392, correct: true, text: "Nwunye m bụ onye Nigeria", audioSrc: "m3-l2-q8-ig.mp3" },
{id: 1175, challengeId: 392, correct: false, text: "Bịa n'ụlọ m" },
{id: 1176, challengeId: 392, correct: false, text: "Kele ezinụlọ gị" },

{id: 1177, challengeId: 393, correct: true, text: "Kele ezinụlọ gị", audioSrc: "m3-l2-q9-ig.mp3" },
{id: 1178, challengeId: 393, correct: false, text: "Cheregodi" },
{id: 1179, challengeId: 393, correct: false, text: "Bịa ka anyị rie nri" },

{id: 1180, challengeId: 394, correct: true, text: "A chọrọ mi ga ahịa", audioSrc: "m3-l2-q10-ig.mp3" },
{id: 1181, challengeId: 394, correct: false, text: "Kele ezinụlọ gị" },
{id: 1182, challengeId: 394, correct: false, text: "Bịa ka anyị rie nri" },

{id: 1183, challengeId: 395, correct: true, text: "Ebe e ka sinima dị?", audioSrc: "m3-l2-q11-ig.mp3" },
{id: 1184, challengeId: 395, correct: false, text: "Ike agụgo m" },
{id: 1185, challengeId: 395, correct: false, text: "A na m enwe obi añụrị Ị nọ ebe a" },

{id: 1186, challengeId: 396, correct: true, text: "Cheregodi", audioSrc: "m3-l2-q12-ig.mp3" },
{id: 1187, challengeId: 396, correct: false, text: "Kele ezinụlọ gị" },
{id: 1188, challengeId: 396, correct: false, text: "Bịa ka anyị rie nri" },

{id: 1189, challengeId: 397, correct: true, text: "Bịa ka anyị rie nri", audioSrc: "m3-l2-q13-ig.mp3" },
{id: 1190, challengeId: 397, correct: false, text: "A chọrọ ileta ahịa" },
{id: 1191, challengeId: 397, correct: false, text: "Kele ezinụlọ gị" },

{id: 1192, challengeId: 398, correct: true, text: "Ike agụgo m", audioSrc: "m3-l2-q14-ig.mp3" },
{id: 1193, challengeId: 398, correct: false, text: "Ebee ka sinima sị" },
{id: 1194, challengeId: 398, correct: false, text: "A na enwe obi añụrị ị nọ ebe a" },

{id: 1195, challengeId: 399, correct: true, text: "Obi dị m ụtọ ị nọ ebe a", audioSrc: "m3-l2-q15-ig.mp3" },
{id: 1196, challengeId: 399, correct: false, text: "Cheregodị" },
{id: 1197, challengeId: 399, correct: false, text: "Bịa n'ụlọ m" },

// Igbo Module 3 Lesson 3

{id: 1198, challengeId: 400, correct: false, text: "N'ịtụnanya, aha m bụ Sari", audioSrc: "m3-l3-q1-ig.mp3" },
{id: 1199, challengeId: 400, correct: true, text: "Nwanne nne m nọ n'ụlọ ụka"},
{id: 1200, challengeId: 400, correct: false, text: "A na m asụ Yoruba na Igbo" },

{id: 1201, challengeId: 401, correct: true, text: "A gara m ahịa", audioSrc: "m3-l3-q2-ig.mp3" },
{id: 1202, challengeId: 401, correct: false, text: "Nkechi na-asụ Igbo na Yoruba" },
{id: 1203, challengeId: 401, correct: false, text: "Dị m pụrụ apụ" },

{id: 1204, challengeId: 402, correct: true, text: "A na m asụ Yoruba na Igbo", audioSrc: "m3-l3-q3-ig.mp3" },
{id: 1205, challengeId: 402, correct: false, text: "Ị na-asụ Yoruba/Igbo/Pidgin" },
{id: 1206, challengeId: 402, correct: false, text: "Di m pụrụ apụ" },

{id: 1207, challengeId: 403, correct: false, text: "Nwa m nwaanyị bụ bụ onyenkuzi" },
{id: 1208, challengeId: 403, correct: false, text: "Nwa ya nwoke bụ onye uwe ojii" },
{id: 1209, challengeId: 403, correct: true, text: "N'ịtụnanya, aha m bụ Sari", audioSrc: "m3-l3-q4-ig.mp3" },

{id: 1210, challengeId: 404, correct: true, text: "Feranmi na-asụ Igbo na Yoruba", audioSrc: "m3-l3-q5-ig.mp3" },
{id: 1211, challengeId: 404, correct: false, text: "Ị na-asụ Yoruba/Igbo/Pidgin" },
{id: 1212, challengeId: 404, correct: false, text: "Di m pụrụ apụ" },

{id: 1213, challengeId: 405, correct: false, text: "Ọ bụ onye Igbo" },
{id: 1214, challengeId: 405, correct: false, text: "Ọ bụ onye Yoruba" },
{id: 1215, challengeId: 405, correct: true, text: "Ị na-asụ Yoruba", audioSrc: "m3-l3-q6-ig.mp3" },

{id: 1216, challengeId: 406, correct: false, text: "Di m pụrụ apụ" },
{id: 1217, challengeId: 406, correct: false, text: "Ọ bụ onye Igbo" },
{id: 1218, challengeId: 406, correct: true, text: "Ha na-asụ Hausa", audioSrc: "m3-l3-q7-ig.mp3" },

{id: 1219, challengeId: 407, correct: false, text: "Ọ bụ onye Igbo" },
{id: 1220, challengeId: 407, correct: true, text: "Ọ bụ onye Yoruba", audioSrc: "m3-l3-q8-ig.mp3" },
{id: 1221, challengeId: 407, correct: false, text: "Ị na-asụ Yoruba" },

{id: 1222, challengeId: 408, correct: true, text: "Ọ bụ onye Igbo", audioSrc: "m3-l3-q9-ig.mp3" },
{id: 1223, challengeId: 408, correct: false, text: "Ọ bụ onye Yoruba" },
{id: 1224, challengeId: 408, correct: false, text: "Ị na-asụ Yoruba" },

{id: 1225, challengeId: 409, correct: false, text: "A na m asụ Yoruba na Igbo" },
{id: 1226, challengeId: 409, correct: false, text: "Ị na-asụ Yoruba/Igbo/Hausa" },
{id: 1227, challengeId: 409, correct: true, text: "Di m pụrụ apụ", audioSrc: "m3-l3-q10-ig.mp3" },

{id: 1228, challengeId: 410, correct: true, text: "Nwa ya nwaanyị bụ onyenkuzi", audioSrc: "m3-l3-q11-ig.mp3" },
{id: 1229, challengeId: 410, correct: false, text: "Kele ezinụlọ gị" },
{id: 1230, challengeId: 410, correct: false, text: "Nwa ya nwoke bụ onye uwe ojii" },

{id: 1231, challengeId: 411, correct: true, text: "Nwa ya nwoke bụ onye uwe ojii", audioSrc: "m3-l3-q12-ig.mp3" },
{id: 1232, challengeId: 411, correct: false, text: "Kele ezinụlọ gị" },
{id: 1233, challengeId: 411, correct: false, text: "Nwa ya nwaanyị bụ onyenkuzi" },

{id: 1234, challengeId: 412, correct: true, text: "Aha m bụ Anna", audioSrc: "m3-l3-q13-ig.mp3" },
{id: 1235, challengeId: 412, correct: false, text: "Ọ bụ onye Igbo" },
{id: 1236, challengeId: 412, correct: false, text: "Ha na-asụ Hausa" },

{id: 1237, challengeId: 413, correct: true, text: "A na m asụ Igbo", audioSrc: "m3-l3-q14-ig.mp3" },
{id: 1238, challengeId: 413, correct: false, text: "Ị na-asụ Igbo" },
{id: 1239, challengeId: 413, correct: false, text: "Ha na-asụ Hausa" },

{id: 1240, challengeId: 414, correct: true, text: "Kele ezinụlọ gị", audioSrc: "m3-l3-q15-ig.mp3" },
{id: 1241, challengeId: 414, correct: false, text: "Nwa ya nwaanyị bụ onyenkuzi" },
{id: 1242, challengeId: 414, correct: false, text: "Nwa ya nwoke bụ onye uwe ojii" },

// Igbo Module 3 Lesson 4

{id: 1243, challengeId: 415, correct: false, text: "Gwa nwa m nwaanyị okwu" },
{id: 1244, challengeId: 415, correct: true, text: "Ụlọ m", audioSrc: "m3-l4-q1-ig.mp3" },
{id: 1245, challengeId: 415, correct: false, text: "Ha buru ibu" },

{id: 1246, challengeId: 416, correct: true, text: "Gwa nwa m nwoke okwu", audioSrc: "m3-l4-q2-ig.mp3" },
{id: 1247, challengeId: 416, correct: false, text: "Ha" },
{id: 1248, challengeId: 416, correct: false, text: "Gwa nwa m nwaanyị okwu" },

{id: 1249, challengeId: 417, correct: false, text: "Gwa nwa m nwoke okwu" },
{id: 1250, challengeId: 417, correct: false, text: "Ha" },
{id: 1251, challengeId: 417, correct: true, text: "Gwa nwa m nwaanyị okwu", audioSrc: "m3-l4-q3-ig.mp3" },

{id: 1252, challengeId: 418, correct: true, text: "Ha", audioSrc: "m3-l4-q4-ig.mp3" },
{id: 1253, challengeId: 418, correct: false, text: "Ha buru ibu" },
{id: 1254, challengeId: 418, correct: false, text: "O toro ogologo" },

{id: 1255, challengeId: 419, correct: true, text: "Ha buru ibu", audioSrc: "m3-l4-q5-ig.mp3" },
{id: 1256, challengeId: 419, correct: false, text: "Ọ ma ka esi esi nri" },
{id: 1257, challengeId: 419, correct: false, text: "Ọ" },

{id: 1258, challengeId: 420, correct: true, text: "O", audioSrc: "m3-l4-q6-ig.mp3" },
{id: 1259, challengeId: 420, correct: false, text: "Ọ" },
{id: 1260, challengeId: 420, correct: false, text: "Ha" },

{id: 1261, challengeId: 421, correct: true, text: "O toro ogologo", audioSrc: "m3-l4-q7-ig.mp3" },
{id: 1262, challengeId: 421, correct: false, text: "O" },
{id: 1263, challengeId: 421, correct: false, text: "Nwanne ya nwoke mara mma" },

{id: 1264, challengeId: 422, correct: true, text: "Ọ", audioSrc: "m3-l4-q8-ig.mp3" },
{id: 1265, challengeId: 422, correct: false, text: "Ha" },
{id: 1266, challengeId: 422, correct: false, text: "O" },

{id: 1267, challengeId: 423, correct: true, text: "Ọ ma ka esi esi nri", audioSrc: "m3-l4-q9-ig.mp3" },
{id: 1268, challengeId: 423, correct: false, text: "Akwụkwọ m" },
{id: 1269, challengeId: 423, correct: false, text: "Nwanne m nwaanyị mara mma" },

{id: 1270, challengeId: 424, correct: true, text: "Ya", audioSrc: "m3-l4-q10-ig.mp3" },
{id: 1271, challengeId: 424, correct: false, text: "Mụ" },
{id: 1272, challengeId: 424, correct: false, text: "Ọ" },

{id: 1273, challengeId: 425, correct: true, text: "Nwanne ya nwoke mara mma", audioSrc: "m3-l4-q11-ig.mp3" },
{id: 1274, challengeId: 425, correct: false, text: "Nwanne ya nwaanyị mara mma" },
{id: 1275, challengeId: 425, correct: false, text: "O toro ogologo" },

{id: 1276, challengeId: 426, correct: true, text: "Ya", audioSrc: "m3-l4-q12-ig.mp3" },
{id: 1277, challengeId: 426, correct: false, text: "O toro ogologo" },
{id: 1278, challengeId: 426, correct: false, text: "Nwanne ya nwoke mara mma" },

{id: 1279, challengeId: 427, correct: true, text: "Nwanne ya nwaanyị mara mma", audioSrc: "m3-l4-q13-ig.mp3" },
{id: 1280, challengeId: 427, correct: false, text: "Nwanne ya nwoke mara mma" },
{id: 1281, challengeId: 427, correct: false, text: "Ya" },

{id: 1282, challengeId: 428, correct: false, text: "Ọ" },
{id: 1283, challengeId: 428, correct: true, text: "Mụ", audioSrc: "m3-l4-q14-ig.mp3" },
{id: 1284, challengeId: 428, correct: false, text: "Ya" },

{id: 1285, challengeId: 429, correct: true, text: "Akwụkwọ m", audioSrc: "m3-l4-q15-ig.mp3" },
{id: 1286, challengeId: 429, correct: false, text: "Nwanne ya nwaanyị mara mma" },
{id: 1287, challengeId: 429, correct: false, text: "Ọ ma ka esi esi nri" },

// Igbo Module 3 Lesson 5

{id: 1288, challengeId: 430, correct: true, text: "Anyi", audioSrc: "m3-l5-q1-ig.mp3" },
{id: 1289, challengeId: 430, correct: false, text: "Anyi alọtala" },
{id: 1290, challengeId: 430, correct: false, text: "Zute enyi m" },

{id: 1291, challengeId: 431, correct: false, text: "Anyi" },
{id: 1292, challengeId: 431, correct: true, text: "Anyi alọtala", audioSrc: "m3-l5-q2-ig.mp3" },
{id: 1293, challengeId: 431, correct: false, text: "Zute enyi m" },

{id: 1294, challengeId: 432, correct: true, text: "Anyi", audioSrc: "m3-l5-q3-ig.mp3" },
{id: 1295, challengeId: 432, correct: false, text: "Bịa soro anyị" },
{id: 1296, challengeId: 432, correct: false, text: "Gwa m okwu" },

{id: 1297, challengeId: 433, correct: false, text: "Onye ka ị bụ?" },
{id: 1298, challengeId: 433, correct: true, text: "Bịa soro anyị", audioSrc: "m3-l5-q4-ig.mp3" },
{id: 1299, challengeId: 433, correct: false, text: "Gwa m okwu" },

{id: 1300, challengeId: 434, correct: true, text: "Zute enyi m", audioSrc: "m3-l5-q5-ig.mp3" },
{id: 1301, challengeId: 434, correct: false, text: "Mụ na gị" },
{id: 1302, challengeId: 434, correct: false, text: "Mụ na gị ruo ebighi ebi" },

{id: 1303, challengeId: 435, correct: false, text: "Ha bụ nke m" },
{id: 1304, challengeId: 435, correct: true, text: "Gị", audioSrc: "m3-l5-q6-ig.mp3" },
{id: 1305, challengeId: 435, correct: false, text: "Onye ka Ị bụ?" },

{id: 1306, challengeId: 436, correct: false, text: "Mụ na gị" },
{id: 1307, challengeId: 436, correct: false, text: "Mụ na gị ruo ebighi ebi" },
{id: 1308, challengeId: 436, correct: true, text: "Onye ka ị bụ?", audioSrc: "m3-l5-q7-ig.mp3" },

{id: 1309, challengeId: 437, correct: true, text: "Ha", audioSrc: "m3-l5-q8-ig.mp3" },
{id: 1310, challengeId: 437, correct: false, text: "Ha bụ nke m" },
{id: 1311, challengeId: 437, correct: false, text: "Ọ bụ nke m" },

{id: 1312, challengeId: 438, correct: true, text: "Onye ka ha bụ?", audioSrc: "m3-l5-q9-ig.mp3" },
{id: 1313, challengeId: 438, correct: false, text: "Gịnị ka ị bụ?" },
{id: 1314, challengeId: 438, correct: false, text: "Onye ka ị bụ?" },

{id: 1315, challengeId: 439, correct: false, text: "Anyi alọtala" },
{id: 1316, challengeId: 439, correct: true, text: "Ọ bụ nke m", audioSrc: "m3-l5-q10-ig.mp3" },
{id: 1317, challengeId: 439, correct: false, text: "Ha bụ nke m" },

{id: 1318, challengeId: 440, correct: true, text: "Ha bụ nke m", audioSrc: "m3-l5-q11-ig.mp3" },
{id: 1319, challengeId: 440, correct: false, text: "Ha" },
{id: 1320, challengeId: 440, correct: false, text: "Ọ bụ nke m" },

{id: 1321, challengeId: 441, correct: true, text: "Mụ", audioSrc: "m3-l5-q12-ig.mp3" },
{id: 1322, challengeId: 441, correct: false, text: "Gwa m okwu" },
{id: 1323, challengeId: 441, correct: false, text: "Anyi alọtala" },

{id: 1324, challengeId: 442, correct: false, text: "Gwa m okwu" },
{id: 1325, challengeId: 442, correct: true, text: "Mụ", audioSrc: "m3-l5-q13-ig.mp3" },
{id: 1326, challengeId: 442, correct: false, text: "Anyi" },

{id: 1327, challengeId: 443, correct: true, text: "Mụ na gị", audioSrc: "m3-l5-q14-ig.mp3" },
{id: 1328, challengeId: 443, correct: false, text: "Bịa soro anyị" },
{id: 1329, challengeId: 443, correct: false, text: "Zute enyi m" },

{id: 1330, challengeId: 444, correct: true, text: "Mụ na gị ruo ebighi ebi", audioSrc: "m3-l5-q15-ig.mp3" },
{id: 1331, challengeId: 444, correct: false, text: "Mụ na gị" },
{id: 1332, challengeId: 444, correct: false, text: "Bịa soro anyị" },

// Hausa module 1 lesson 1

{id: 1333, challengeId: 445, correct: false, text: "Yi hakuri" },
{id: 1334, challengeId: 445, correct: false, text: "nagode" },
{id: 1335, challengeId: 445, correct: true, text: "Yaya kake", audioSrc: "m1-l1-q1-hs.mp3" },

{id: 1336, challengeId: 446, correct: false, text: "Yi hakuri" },
{id: 1337, challengeId: 446, correct: false, text: "nagode" },
{id: 1338, challengeId: 446, correct: true, text: "Ina lafiya", audioSrc: "m1-l1-q2-hs.mp3" },

{id: 1339, challengeId: 447, correct: true, text: "Yaya sunanka", audioSrc: "m1-l1-q3-hs.mp3" },
{id: 1340, challengeId: 447, correct: false, text: "Daga Nigeria nake" },
{id: 1341, challengeId: 447, correct: false, text: "saunnu da zuwa" },

{id: 1342, challengeId: 448, correct: false, text: "Kai Kuma fa?" },
{id: 1343, challengeId: 448, correct: false, text: "Ina lafiya" },
{id: 1344, challengeId: 448, correct: true, text: "sunana Mustafa", audioSrc: "m1-l1-q4-hs.mp3" },

{id: 1345, challengeId: 449, correct: false, text: "sunana ferami" },
{id: 1346, challengeId: 449, correct: false, text: "nagode" },
{id: 1347, challengeId: 449, correct: true, text: "Daga Nigeria nake", audioSrc: "m1-l1-q5-hs.mp3" },

{id: 1348, challengeId: 450, correct: false, text: "Yaya sunanka?" },
{id: 1349, challengeId: 450, correct: false, text: "Eh" },
{id: 1350, challengeId: 450, correct: true, text: "Kai Kuma fa", audioSrc: "m1-l1-q6-hs.mp3" },

{id: 1351, challengeId: 451, correct: true, text: "Aa", audioSrc: "m1-l1-q7-hs.mp3" },
{id: 1352, challengeId: 451, correct: false, text: "Daga Nigeria nake" },
{id: 1353, challengeId: 451, correct: false, text: "Eh" },

{id: 1354, challengeId: 452, correct: false, text: "Nagode" },
{id: 1355, challengeId: 452, correct: false, text: "Kai Kuma fa?" },
{id: 1356, challengeId: 452, correct: true, text: "me kace?", audioSrc: "m1-l1-q8-hs.mp3" },

{id: 1357, challengeId: 453, correct: false, text: "Mai Mai ta/ kara para" },
{id: 1358, challengeId: 453, correct: true, text: "me kace?", audioSrc: "m1-l1-q9-hs.mp3" },
{id: 1359, challengeId: 453, correct: false, text: "Yi hakuri" },

{id: 1360, challengeId: 454, correct: true, text: "Eh", audioSrc: "m1-l1-q10-hs.mp3" },
{id: 1361, challengeId: 454, correct: false, text: "nagode" },
{id: 1362, challengeId: 454, correct: false, text: "A'a" },

{id: 1363, challengeId: 455, correct: false, text: "Ina lafiya" },
{id: 1364, challengeId: 455, correct: true, text: "nagode", audioSrc: "m1-l1-q11-hs.mp3" },
{id: 1365, challengeId: 455, correct: false, text: "Daga Nigeria nake" },

{id: 1366, challengeId: 456, correct: false, text: "Yi hakuri" },
{id: 1367, challengeId: 456, correct: false, text: "Kai Kuma fa" },
{id: 1368, challengeId: 456, correct: true, text: "sannun da zuwa", audioSrc: "m1-l1-q12-hs.mp3" },

{id: 1369, challengeId: 457, correct: false, text: "Kara fada/ Mai Mai ta" },
{id: 1370, challengeId: 457, correct: false, text: "me kace?" },
{id: 1371, challengeId: 457, correct: true, text: "Fada min", audioSrc: "m1-l1-q13-hs.mp3" },

{id: 1372, challengeId: 458, correct: false, text: "sannun da zuwa" },
{id: 1373, challengeId: 458, correct: true, text: "Yi hakuri", audioSrc: "m1-l1-q14-hs.mp3" },
{id: 1374, challengeId: 458, correct: false, text: "nagode sosai" },

{id: 1375, challengeId: 459, correct: false, text: "Yaya sunanka" },
{id: 1376, challengeId: 459, correct: false, text: "nagode" },
{id: 1377, challengeId: 459, correct: true, text: "Nagode sosai", audioSrc: "m1-l1-q15-hs.mp3" },

// Hausa module 1 lesson 2
{id: 1378, challengeId: 460, correct: false, text: "Dan kadan" },
{id: 1379, challengeId: 460, correct: false, text: "Ina son hausa" },
{id: 1380, challengeId: 460, correct: true, text: "kana Jin hausa?", audioSrc: "m1-l2-q1-hs.mp3" },

{id: 1381, challengeId: 461, correct: false, text: "Ina son hausa" },
{id: 1382, challengeId: 461, correct: true, text: "Dan kadan", audioSrc: "m1-l2-q2-hs.mp3" },
{id: 1383, challengeId: 461, correct: false, text: "shekarana talatin da biyar" },

{id: 1384, challengeId: 462, correct: true, text: "Ina son hausa", audioSrc: "m1-l2-q3-hs.mp3" },
{id: 1385, challengeId: 462, correct: false, text: "Dan kadan" },
{id: 1386, challengeId: 462, correct: false, text: "dakai nake magana" },

{id: 1387, challengeId: 463, correct: false, text: "menene wannan" },
{id: 1388, challengeId: 463, correct: true, text: "Zan iya gwadawa tare da Kai", audioSrc: "m1-l2-q4-hs.mp3" },
{id: 1389, challengeId: 463, correct: false, text: "shekarana talatin da biyar" },

{id: 1390, challengeId: 464, correct: true, text: "shekararka Nawa?", audioSrc: "m1-l2-q5-hs.mp3" },
{id: 1391, challengeId: 464, correct: false, text: "shekarana talatin da biyar" },
{id: 1392, challengeId: 464, correct: false, text: "Ina son ka" },

{id: 1393, challengeId: 465, correct: true, text: "shekarana talatin da biyar", audioSrc: "m1-l2-q6-hs.mp3" },
{id: 1394, challengeId: 465, correct: false, text: "Ina son ka" },
{id: 1395, challengeId: 465, correct: false, text: "Ina zama a USA" },

{id: 1396, challengeId: 466, correct: true, text: "dakai nake magana", audioSrc: "m1-l2-q7-hs.mp3" },
{id: 1397, challengeId: 466, correct: false, text: "A Ina kake zama?" },
{id: 1398, challengeId: 466, correct: false, text: "menene wannan" },

{id: 1399, challengeId: 467, correct: false, text: "shekarana talatin da biyar" },
{id: 1400, challengeId: 467, correct: false, text: "dakai nake magana" },
{id: 1401, challengeId: 467, correct: true, text: "menene wannan?", audioSrc: "m1-l2-q8-hs.mp3" },

{id: 1402, challengeId: 468, correct: true, text: "me hakan yake nufi?", audioSrc: "m1-l2-q9-hs.mp3" },
{id: 1403, challengeId: 468, correct: false, text: "shekarana talatin da biyar" },
{id: 1404, challengeId: 468, correct: false, text: "yayi kyau" },

{id: 1405, challengeId: 469, correct: true, text: "kana Ina ne?", audioSrc: "m1-l2-q10-hs.mp3" },
{id: 1406, challengeId: 469, correct: false, text: "A Ina kake zama?" },
{id: 1407, challengeId: 469, correct: false, text: "shekarana talatin da biyar" },

{id: 1408, challengeId: 470, correct: true, text: "Ina son ka", audioSrc: "m1-l2-q11-hs.mp3" },
{id: 1409, challengeId: 470, correct: false, text: "Ina zama a USA" },
{id: 1410, challengeId: 470, correct: false, text: "hakan yayi kyau" },

{id: 1411, challengeId: 471, correct: false, text: "Ina son ka" },
{id: 1412, challengeId: 471, correct: false, text: "hakan yayi kyau" },
{id: 1413, challengeId: 471, correct: true, text: "A Ina kake zama?", audioSrc: "m1-l2-q12-hs.mp3" },

{id: 1414, challengeId: 472, correct: true, text: "hakan yayi kyau", audioSrc: "m1-l2-q13-hs.mp3" },
{id: 1415, challengeId: 472, correct: false, text: "Ina son ka" },
{id: 1416, challengeId: 472, correct: false, text: "A Ina kake zama" },

{id: 1417, challengeId: 473, correct: false, text: "haka yayi kyau" },
{id: 1418, challengeId: 473, correct: true, text: "kyakkyawa ce", audioSrc: "m1-l2-q14-hs.mp3" },
{id: 1419, challengeId: 473, correct: false, text: "A Ina kake zama" },

{id: 1420, challengeId: 474, correct: true, text: "Ina zama a USA", audioSrc: "m1-l2-q15-hs.mp3" },
{id: 1421, challengeId: 474, correct: false, text: "Ina zama a Nigeria" },
{id: 1422, challengeId: 474, correct: false, text: "hakan yayi kyau" },



// Hausa Module 1 lesson 3

{id: 1423, challengeId: 475, correct: false, text: "me kake nufi" },
{id: 1424, challengeId: 475, correct: false, text: "Yimin magana" },
{id: 1425, challengeId: 475, correct: true, text: "suna yin rawa", audioSrc: "m1-l3-q1-hs.mp3" },

{id: 1426, challengeId: 476, correct: false, text: "kayi dai dai" },
{id: 1427, challengeId: 476, correct: true, text: "me kake nufi?", audioSrc: "m1-l3-q2-hs.mp3" },
{id: 1428, challengeId: 476, correct: false, text: "Nasani" },

{id: 1429, challengeId: 477, correct: false, text: "Ina son ka nima" },
{id: 1430, challengeId: 477, correct: true, text: "Yimin magana", audioSrc: "m1-l3-q3-hs.mp3" },
{id: 1431, challengeId: 477, correct: false, text: "Ba kaka bane" },

{id: 1432, challengeId: 478, correct: false, text: "Nasani" },
{id: 1433, challengeId: 478, correct: true, text: "inasonka nima", audioSrc: "m1-l3-q4-hs.mp3" },
{id: 1434, challengeId: 478, correct: false, text: "Ina zaka?" },

{id: 1435, challengeId: 479, correct: true, text: "Ba haka bane", audioSrc: "m1-l3-q5-hs.mp3" },
{id: 1436, challengeId: 479, correct: false, text: "kwarai da gaske" },
{id: 1437, challengeId: 479, correct: false, text: "Ina zaka?" },

{id: 1438, challengeId: 480, correct: false, text: "mutafi mama" },
{id: 1439, challengeId: 480, correct: true, text: "Ina zaka?", audioSrc: "m1-l3-q6-hs.mp3" },
{id: 1440, challengeId: 480, correct: false, text: "baka Yi dai dai ba" },

{id: 1441, challengeId: 481, correct: true, text: "Dawo nan", audioSrc: "m1-l3-q7-hs.mp3" },
{id: 1442, challengeId: 481, correct: false, text: "Ina zaka" },
{id: 1443, challengeId: 481, correct: false, text: "Nasani" },

{id: 1444, challengeId: 482, correct: false, text: "Eh" },
{id: 1445, challengeId: 482, correct: true, text: "Kai kadai ne?", audioSrc: "m1-l3-q8-hs.mp3" },
{id: 1446, challengeId: 482, correct: false, text: "A'a" },

{id: 1447, challengeId: 483, correct: true, text: "mutafi mana", audioSrc: "m1-l3-q9-hs.mp3" },
{id: 1448, challengeId: 483, correct: false, text: "Dawo nan" },
{id: 1449, challengeId: 483, correct: false, text: "bakayi dai dai ba" },

{id: 1450, challengeId: 484, correct: false, text: "kwarai da gaske" },
{id: 1451, challengeId: 484, correct: true, text: "Nasani", audioSrc: "m1-l3-q10-hs.mp3" },
{id: 1452, challengeId: 484, correct: false, text: "Ina zaka?" },

{id: 1453, challengeId: 485, correct: true, text: "kwarai da gaske,", audioSrc: "m1-l3-q11-hs.mp3" },
{id: 1454, challengeId: 485, correct: false, text: "Nasani" },
{id: 1455, challengeId: 485, correct: false, text: "bakayi dai dai ba" },

{id: 1456, challengeId: 486, correct: false, text: "yayi kyau" },
{id: 1457, challengeId: 486, correct: true, text: "kayi dai dai", audioSrc: "m1-l3-q12-hs.mp3" },
{id: 1458, challengeId: 486, correct: false, text: "inasonka nima" },

{id: 1459, challengeId: 487, correct: false, text: "yayi kyau" },
{id: 1460, challengeId: 487, correct: false, text: "kayi dai dai" },
{id: 1461, challengeId: 487, correct: true, text: "bakayi dai dai ba", audioSrc: "m1-l3-q13-hs.mp3" },

{id: 1462, challengeId: 488, correct: false, text: "Nasani" },
{id: 1463, challengeId: 488, correct: true, text: "Kakan yayi kyau", audioSrc: "m1-l3-q14-hs.mp3" },
{id: 1464, challengeId: 488, correct: false, text: "Ina zaka?" },

{id: 1465, challengeId: 489, correct: false, text: "bakayi dai dai ba" },
{id: 1466, challengeId: 489, correct: true, text: "shin kasani?", audioSrc: "m1-l3-q15-hs.mp3" },
{id: 1467, challengeId: 489, correct: false, text: "kwarai da gaske" },


// Hausa Module 1 lesson 4

{id: 1468, challengeId: 490, correct: false, text: "me kake so kasiya ne?" },
{id: 1469, challengeId: 490, correct: true, text: "inaso na siya", audioSrc: "m1-l4-q1-hs.mp3" },
{id: 1470, challengeId: 490, correct: false, text: "Doyan dubu Daya" },

{id: 1471, challengeId: 491, correct: false, text: "Doya dubu Daya" },
{id: 1472, challengeId: 491, correct: false, text: "Ina so na siya" },
{id: 1473, challengeId: 491, correct: true, text: "me kake so kasiya ne?", audioSrc: "m1-l4-q2-hs.mp3" },

{id: 1474, challengeId: 492, correct: false, text: "Nawa?" },
{id: 1475, challengeId: 492, correct: true, text: "Doya", audioSrc: "m1-l4-q3-hs.mp3" },
{id: 1476, challengeId: 492, correct: false, text: "me kake so kasiya ne?" },

{id: 1477, challengeId: 493, correct: false, text: "Doyan dubu Daya" },
{id: 1478, challengeId: 493, correct: true, text: "Nawa?", audioSrc: "m1-l4-q4-hs.mp3" },
{id: 1479, challengeId: 493, correct: false, text: "me ka ce" },

{id: 1480, challengeId: 494, correct: false, text: "Nawa" },
{id: 1481, challengeId: 494, correct: false, text: "Yi hakuri" },
{id: 1482, challengeId: 494, correct: true, text: "Doyan dubu Daya", audioSrc: "m1-l4-q5-hs.mp3" },

{id: 1483, challengeId: 495, correct: false, text: "Dawo baya" },
{id: 1484, challengeId: 495, correct: false, text: "Yi hakuri" },
{id: 1485, challengeId: 495, correct: true, text: "Ina zuwa", audioSrc: "m1-l4-q6-hs.mp3" },

{id: 1486, challengeId: 496, correct: false, text: "Dawo baya" },
{id: 1487, challengeId: 496, correct: true, text: "Yi hakuri", audioSrc: "m1-l4-q7-hs.mp3" },
{id: 1488, challengeId: 496, correct: false, text: "me ka ce" },

{id: 1489, challengeId: 497, correct: false, text: "Na jika" },
{id: 1490, challengeId: 497, correct: true, text: "Babu shi", audioSrc: "m1-l4-q8-hs.mp3" },
{id: 1491, challengeId: 497, correct: false, text: "Dawo baya" },

{id: 1492, challengeId: 498, correct: false, text: "Na jika" },
{id: 1493, challengeId: 498, correct: true, text: "Dawo baya", audioSrc: "m1-l4-q9-hs.mp3" },
{id: 1494, challengeId: 498, correct: false, text: "Yi hakuri" },

{id: 1495, challengeId: 499, correct: true, text: "Na jika", audioSrc: "m1-l4-q10-hs.mp3" },
{id: 1496, challengeId: 499, correct: false, text: "Dawo baya" },
{id: 1497, challengeId: 499, correct: false, text: "Da wane lokaci" },

{id: 1498, challengeId: 500, correct: true, text: "Da wane lokaci?", audioSrc: "m1-l4-q11-hs.mp3" },
{id: 1499, challengeId: 500, correct: false, text: "Da rana" },
{id: 1500, challengeId: 500, correct: false, text: "Da safe" },

{id: 1501, challengeId: 501, correct: false, text: "Da wane lokaci" },
{id: 1502, challengeId: 501, correct: true, text: "Da rana", audioSrc: "m1-l4-q12-hs.mp3" },
{id: 1503, challengeId: 501, correct: false, text: "Da Yamma" },

{id: 1504, challengeId: 502, correct: true, text: "Zanzo", audioSrc: "m1-l4-q13-hs.mp3" },
{id: 1505, challengeId: 502, correct: false, text: "Zan tafi" },
{id: 1506, challengeId: 502, correct: false, text: "me ka ce" },

{id: 1507, challengeId: 503, correct: false, text: "Zanzo" },
{id: 1508, challengeId: 503, correct: true, text: "Zan tafi", audioSrc: "m1-l4-q14-hs.mp3" },
{id: 1509, challengeId: 503, correct: false, text: "Ina zuwa" },

{id: 1510, challengeId: 504, correct: true, text: "me kace?", audioSrc: "m1-l4-q15-hs.mp3" },
{id: 1511, challengeId: 504, correct: false, text: "Ina zuwa" },
{id: 1512, challengeId: 504, correct: false, text: "Yi hakuri" },

// Hausa Module 1 lesson 5

{id: 1513, challengeId: 505, correct: false, text: "Zanje nicon town" },
{id: 1514, challengeId: 505, correct: true, text: "Ina zaka tafi?", audioSrc: "m1-l5-q1-hs.mp3" },
{id: 1515, challengeId: 505, correct: false, text: "zauna a baya" },

{id: 1516, challengeId: 506, correct: true, text: "Zanje nicon town", audioSrc: "m1-l5-q2-hs.mp3" },
{id: 1517, challengeId: 506, correct: false, text: "Ina zaka tafi?" },
{id: 1518, challengeId: 506, correct: false, text: "shigo ciki" },

{id: 1519, challengeId: 507, correct: false, text: "Nan yayi/ sauka a Nan" },
{id: 1520, challengeId: 507, correct: true, text: "shigo ciki", audioSrc: "m1-l5-q3-hs.mp3" },
{id: 1521, challengeId: 507, correct: false, text: "kana Ina ne?" },

{id: 1522, challengeId: 508, correct: true, text: "Zauna a baya", audioSrc: "m1-l5-q4-hs.mp3" },
{id: 1523, challengeId: 508, correct: false, text: "shigo ciki" },
{id: 1524, challengeId: 508, correct: false, text: "Ina wuni/ barika Rana" },

{id: 1525, challengeId: 509, correct: false, text: "Ina zaka tafi." },
{id: 1526, challengeId: 509, correct: false, text: "Kuna haske" },
{id: 1527, challengeId: 509, correct: true, text: "suna Ina ne?", audioSrc: "m1-l5-q5-hs.mp3" },

{id: 1528, challengeId: 510, correct: false, text: "Ina wuni" },
{id: 1529, challengeId: 510, correct: true, text: "Nan yayi", audioSrc: "m1-l5-q6-hs.mp3" },
{id: 1530, challengeId: 510, correct: false, text: "Barka da zuwa" },

{id: 1531, challengeId: 511, correct: false, text: "Ina zaka ne?" },
{id: 1532, challengeId: 511, correct: true, text: "Nanne gurin?", audioSrc: "m1-l5-q7-hs.mp3" },
{id: 1533, challengeId: 511, correct: false, text: "muna gurin" },

{id: 1534, challengeId: 512, correct: true, text: "karbi kudinka", audioSrc: "m1-l5-q8-hs.mp3" },
{id: 1535, challengeId: 512, correct: false, text: "Nagode" },
{id: 1536, challengeId: 512, correct: false, text: "me kake son ka ci?" },

{id: 1537, challengeId: 513, correct: true, text: "Ina wuni", audioSrc: "m1-l5-q9-hs.mp3" },
{id: 1538, challengeId: 513, correct: false, text: "me kace?" },
{id: 1539, challengeId: 513, correct: false, text: "Barka da zuwa" },

{id: 1540, challengeId: 514, correct: false, text: "Nagode" },
{id: 1541, challengeId: 514, correct: true, text: "Barka da zuwa", audioSrc: "m1-l5-q10-hs.mp3" },
{id: 1542, challengeId: 514, correct: false, text: "sai gobe" },

{id: 1543, challengeId: 515, correct: true, text: "Kuna haske", audioSrc: "m1-l5-q11-hs.mp3" },
{id: 1544, challengeId: 515, correct: false, text: "me kake son ka ci?" },
{id: 1545, challengeId: 515, correct: false, text: "kana da runa ne ?" },

{id: 1546, challengeId: 516, correct: true, text: "me kake son ka ci", audioSrc: "m1-l5-q12-hs.mp3" },
{id: 1547, challengeId: 516, correct: false, text: "kana da runa ne?" },
{id: 1548, challengeId: 516, correct: false, text: "kunna haske" },

{id: 1549, challengeId: 517, correct: false, text: "Nagode" },
{id: 1550, challengeId: 517, correct: false, text: "me kake son ka ci?" },
{id: 1551, challengeId: 517, correct: true, text: "kana da runa ne?", audioSrc: "m1-l5-q13-hs.mp3" },

{id: 1552, challengeId: 518, correct: true, text: "Nagode", audioSrc: "m1-l5-q14-hs.mp3" },
{id: 1553, challengeId: 518, correct: false, text: "sai gobe" },
{id: 1554, challengeId: 518, correct: false, text: "Barka da zuwa/ sannun da zuwa" },

{id: 1555, challengeId: 519, correct: true, text: "sai gobe", audioSrc: "m1-l5-q15-hs.mp3" },
{id: 1556, challengeId: 519, correct: false, text: "Nagode" },
{id: 1557, challengeId: 519, correct: false, text: "Barka da zuwa" },


// Hausa Module 2, Lesson 1
{id: 1558, challengeId: 520, correct: false, text: "Ina kwana"},
{id: 1559, challengeId: 520, correct: true, text: "Nagode sosai", audioSrc: "m2-l1-q1-hs.mp3"},
{id: 1560, challengeId: 520, correct: false, text: "Duba"},

{id: 1561, challengeId: 521, correct: false, text: "Nagode sosai"},
{id: 1562, challengeId: 521, correct: false, text: "Barka da zuwa"},
{id: 1563, challengeId: 521, correct: true, text: "Safiya", audioSrc: "m2-l1-q2-hs.mp3"},

{id: 1564, challengeId: 522, correct: false, text: "Duba"},
{id: 1565, challengeId: 522, correct: false, text: "Barka"},
{id: 1566, challengeId: 522, correct: true, text: "Ina kwana", audioSrc: "m2-l1-q3-hs.mp3"},

{id: 1567, challengeId: 523, correct: false, text: "Barka da zuwa"},
{id: 1568, challengeId: 523, correct: true, text: "Ina wuni", audioSrc: "m2-l1-q4-hs.mp3"},
{id: 1569, challengeId: 523, correct: false, text: "Mu kwana lafiya"},

{id: 1570, challengeId: 524, correct: false, text: "Nagode sosai"},
{id: 1571, challengeId: 524, correct: false, text: "Safiya"},
{id: 1572, challengeId: 524, correct: true, text: "Barka da zuwa", audioSrc: "m2-l1-q5-hs.mp3"},

{id: 1573, challengeId: 525, correct: true, text: "Duba", audioSrc: "m2-l1-q6-hs.mp3"},
{id: 1574, challengeId: 525, correct: false, text: "Mu kwana lafiya"},
{id: 1575, challengeId: 525, correct: false, text: "Barka"},

{id: 1576, challengeId: 526, correct: false, text: "Safiya"},
{id: 1577, challengeId: 526, correct: true, text: "Yayi kyau sosai", audioSrc: "m2-l1-q7-hs.mp3"},
{id: 1578, challengeId: 526, correct: false, text: "Mu kwana lafiya"},

{id: 1579, challengeId: 527, correct: false, text: "Yaya kake?"},
{id: 1580, challengeId: 527, correct: false, text: "Sai gobe"},
{id: 1581, challengeId: 527, correct: true, text: "Barka", audioSrc: "m2-l1-q8-hs.mp3"},

{id: 1582, challengeId: 528, correct: false, text: "Mu kwana lafiya"},
{id: 1583, challengeId: 528, correct: true, text: "Sai gobe", audioSrc: "m2-l1-q9-hs.mp3"},
{id: 1584, challengeId: 528, correct: false, text: "Mu wuni lafiya"},

{id: 1585, challengeId: 529, correct: false, text: "Duba"},
{id: 1586, challengeId: 529, correct: false, text: "Nagode sosai"},
{id: 1587, challengeId: 529, correct: true, text: "Yaya kake?", audioSrc: "m2-l1-q10-hs.mp3"},

{id: 1588, challengeId: 530, correct: true, text: "Mu wuni lafiya", audioSrc: "m2-l1-q11-hs.mp3"},
{id: 1589, challengeId: 530, correct: false, text: "Ina kwana"},
{id: 1590, challengeId: 530, correct: false, text: "Barka da zuwa"},

{id: 1591, challengeId: 531, correct: false, text: "Safiya"},
{id: 1592, challengeId: 531, correct: false, text: "Sai mu hadu gobe"},
{id: 1593, challengeId: 531, correct: true, text: "Mu kwana lafiya", audioSrc: "m2-l1-q12-hs.mp3"},

{id: 1594, challengeId: 532, correct: true, text: "Sai mu hadu gobe", audioSrc: "m2-l1-q13-hs.mp3"},
{id: 1595, challengeId: 532, correct: false, text: "Sai gobe"},
{id: 1596, challengeId: 532, correct: false, text: "Barka"},

{id: 1597, challengeId: 533, correct: false, text: "Barka da zuwa"},
{id: 1598, challengeId: 533, correct: false, text: "Mu wuni lafiya"},
{id: 1599, challengeId: 533, correct: true, text: "Sai gobe", audioSrc: "m2-l1-q14-hs.mp3"},

{id: 1600, challengeId: 534, correct: true, text: "Mu kwana lafiya", audioSrc: "m2-l1-q15-hs.mp3"},
{id: 1601, challengeId: 534, correct: false, text: "Nagode sosai"},
{id: 1602, challengeId: 534, correct: false, text: "Ina kwana"},

// Hausa Module 2, Lesson 2
{id: 1603, challengeId: 535, correct: false, text: "Ina kwana"},
{id: 1604, challengeId: 535, correct: true, text: "Ina wuni Haruna", audioSrc: "m2-l2-q1-hs.mp3"},
{id: 1605, challengeId: 535, correct: false, text: "Sai mu hadu gobe"},

{id: 1606, challengeId: 536, correct: false, text: "Sai gobe"},
{id: 1607, challengeId: 536, correct: true, text: "Ina kwana", audioSrc: "m2-l2-q2-hs.mp3"},
{id: 1608, challengeId: 536, correct: false, text: "Gobe"},

{id: 1609, challengeId: 537, correct: true, text: "Rana", audioSrc: "m2-l2-q3-hs.mp3"},
{id: 1610, challengeId: 537, correct: false, text: "Ina wuni Haruna"},
{id: 1611, challengeId: 537, correct: false, text: "Ina kwana"},

{id: 1612, challengeId: 538, correct: false, text: "Barka da zuwa"},
{id: 1613, challengeId: 538, correct: false, text: "Rana"},
{id: 1614, challengeId: 538, correct: true, text: "Dare", audioSrc: "m2-l2-q4-hs.mp3"},

{id: 1615, challengeId: 539, correct: false, text: "Nagode"},
{id: 1616, challengeId: 539, correct: true, text: "Sai mu hadu gobe", audioSrc: "m2-l2-q5-hs.mp3"},
{id: 1617, challengeId: 539, correct: false, text: "Yaya kake?"},

{id: 1618, challengeId: 540, correct: false, text: "Dare"},
{id: 1619, challengeId: 540, correct: false, text: "Yaya kake?"},
{id: 1620, challengeId: 540, correct: true, text: "Sai gobe", audioSrc: "m2-l2-q6-hs.mp3"},

{id: 1621, challengeId: 541, correct: false, text: "Barka da zuwa"},
{id: 1622, challengeId: 541, correct: false, text: "Barka"},
{id: 1623, challengeId: 541, correct: true, text: "Barka ka da zuwa", audioSrc: "m2-l2-q7-hs.mp3"},

{id: 1624, challengeId: 542, correct: true, text: "Yaya kake?", audioSrc: "m2-l2-q8-hs.mp3"},
{id: 1625, challengeId: 542, correct: false, text: "Ina kwana"},
{id: 1626, challengeId: 542, correct: false, text: "Barka ka da zuwa"},

{id: 1627, challengeId: 543, correct: false, text: "Gobe"},
{id: 1628, challengeId: 543, correct: false, text: "Kai"},
{id: 1629, challengeId: 543, correct: true, text: "Yayi sosai", audioSrc: "m2-l2-q9-hs.mp3"},

{id: 1630, challengeId: 544, correct: true, text: "Sai gobe", audioSrc: "m2-l2-q10-hs.mp3"},
{id: 1631, challengeId: 544, correct: false, text: "Barci"},
{id: 1632, challengeId: 544, correct: false, text: "Nagode"},

{id: 1633, challengeId: 545, correct: false, text: "Gobe"},
{id: 1634, challengeId: 545, correct: true, text: "Barka da zuwa", audioSrc: "m2-l2-q11-hs.mp3"},
{id: 1635, challengeId: 545, correct: false, text: "Nagode"},

{id: 1636, challengeId: 546, correct: false, text: "Dare"},
{id: 1637, challengeId: 546, correct: true, text: "Kai", audioSrc: "m2-l2-q12-hs.mp3"},
{id: 1638, challengeId: 546, correct: false, text: "Sai gobe"},

{id: 1639, challengeId: 547, correct: false, text: "Barka da zuwa"},
{id: 1640, challengeId: 547, correct: false, text: "Barci"},
{id: 1641, challengeId: 547, correct: true, text: "Nagode", audioSrc: "m2-l2-q13-hs.mp3"},

{id: 1642, challengeId: 548, correct: false, text: "Barka ka da zuwa"},
{id: 1643, challengeId: 548, correct: true, text: "Gobe", audioSrc: "m2-l2-q14-hs.mp3"},
{id: 1644, challengeId: 548, correct: false, text: "Nagode"},

{id: 1645, challengeId: 549, correct: false, text: "Ina wuni Haruna"},
{id: 1646, challengeId: 549, correct: false, text: "Kai"},
{id: 1647, challengeId: 549, correct: true, text: "Barci", audioSrc: "m2-l2-q15-hs.mp3"},

// Hausa Module 2, Lesson 3
{id: 1648, challengeId: 550, correct: false, text: "Barka Haruna Yaya kake?"},
{id: 1649, challengeId: 550, correct: false, text: "Sai mu hadu"},
{id: 1650, challengeId: 550, correct: true, text: "Ina kwana Haruna", audioSrc: "m2-l3-q1-hs.mp3"},

{id: 1651, challengeId: 551, correct: false, text: "Ina lafiya"},
{id: 1652, challengeId: 551, correct: true, text: "Yayi sa mu hadu gobe", audioSrc: "m2-l3-q2-hs.mp3"},
{id: 1653, challengeId: 551, correct: false, text: "Eh nagode"},

{id: 1654, challengeId: 552, correct: true, text: "Sai mu hadu", audioSrc: "m2-l3-q3-hs.mp3"},
{id: 1655, challengeId: 552, correct: false, text: "Ka kwana lafiya?"},
{id: 1656, challengeId: 552, correct: false, text: "Ina wuni"},

{id: 1657, challengeId: 553, correct: true, text: "Sai mu hadu gobe", audioSrc: "m2-l3-q4-hs.mp3"},
{id: 1658, challengeId: 553, correct: false, text: "Ina lafiya"},
{id: 1659, challengeId: 553, correct: false, text: "Ina wuni"},

{id: 1660, challengeId: 554, correct: false, text: "Ina wuni"},
{id: 1661, challengeId: 554, correct: false, text: "Eh, nagode"},
{id: 1662, challengeId: 554, correct: true, text: "Barka", audioSrc: "m2-l3-q5-hs.mp3"},

{id: 1663, challengeId: 555, correct: true, text: "Yaya kake?", audioSrc: "m2-l3-q6-hs.mp3"},
{id: 1664, challengeId: 555, correct: false, text: "Ka kwana lafiya?"},
{id: 1665, challengeId: 555, correct: false, text: "Barka Haruna Yaya kake?"},

{id: 1666, challengeId: 556, correct: true, text: "Ina wuni", audioSrc: "m2-l3-q7-hs.mp3"},
{id: 1667, challengeId: 556, correct: false, text: "Mu kwana lafiya"},
{id: 1668, challengeId: 556, correct: false, text: "Sai mu hadu"},

{id: 1669, challengeId: 557, correct: false, text: "Eh"},
{id: 1670, challengeId: 557, correct: true, text: "Nagode", audioSrc: "m2-l3-q8-hs.mp3"},
{id: 1671, challengeId: 557, correct: false, text: "Yayi sa mu hadu gobe"},

{id: 1672, challengeId: 558, correct: false, text: "Yaya kake?"},
{id: 1673, challengeId: 558, correct: false, text: "Barka Haruna Yaya kake?"},
{id: 1674, challengeId: 558, correct: true, text: "Ka kwana lafiya?", audioSrc: "m2-l3-q15-hs.mp3"},

{id: 1675, challengeId: 559, correct: false, text: "Yayi sa mu hadu gobe"},
{id: 1676, challengeId: 559, correct: true, text: "Mu kwana lafiya", audioSrc: "m2-l3-q10-hs.mp3"},
{id: 1677, challengeId: 559, correct: false, text: "Sai mun hadu"},

{id: 1678, challengeId: 560, correct: true, text: "Ina lafiya", audioSrc: "m2-l3-q11-hs.mp3"},
{id: 1679, challengeId: 560, correct: false, text: "Nagode"},
{id: 1680, challengeId: 560, correct: false, text: "Yaya kake?"},

{id: 1681, challengeId: 561, correct: false, text: "Eh, nagode"},
{id: 1682, challengeId: 561, correct: true, text: "Eh", audioSrc: "m2-l3-q12-hs.mp3"},
{id: 1683, challengeId: 561, correct: false, text: "Sai mun hadu"},

{id: 1684, challengeId: 562, correct: true, text: "Barka Haruna Yaya kake", audioSrc: "m2-l3-q13-hs.mp3"},
{id: 1685, challengeId: 562, correct: false, text: "Yaya kake?"},
{id: 1686, challengeId: 562, correct: false, text: "Ka kwana lafiya?"},

{id: 1687, challengeId: 563, correct: false, text: "Ina wuni"},
{id: 1688, challengeId: 563, correct: true, text: "Eh nagode", audioSrc: "m2-l3-q14-hs.mp3"},
{id: 1689, challengeId: 563, correct: false, text: "Ina lafiya"},

{id: 1690, challengeId: 564, correct: false, text: "Yaya kake?"},
{id: 1691, challengeId: 564, correct: false, text: "Mu kwana lafiya"},
{id: 1692, challengeId: 564, correct: true, text: "Ka kwana lafiya?", audioSrc: "m2-l3-q15-hs.mp3"},

// Hausa Module 2, Lesson 4
{id: 1693, challengeId: 565, correct: false, text: "Ina kwana Yaya kake?"},
{id: 1694, challengeId: 565, correct: true, text: "Barka Haruna Yaya kake?", audioSrc: "m2-l4-q1-hs.mp3"},
{id: 1695, challengeId: 565, correct: false, text: "Ina wuni, Yaya kake?"},

{id: 1696, challengeId: 566, correct: false, text: "Ni ne Haruna, Kai Kuma fa?"},
{id: 1697, challengeId: 566, correct: true, text: "Da kyau", audioSrc: "m2-l4-q2-hs.mp3"},
{id: 1698, challengeId: 566, correct: false, text: "Nagode"},

{id: 1699, challengeId: 567, correct: false, text: "Ina lafiya"},
{id: 1700, challengeId: 567, correct: true, text: "Ina kwana Yaya kake?", audioSrc: "m2-l4-q3-hs.mp3"},
{id: 1701, challengeId: 567, correct: false, text: "Ni ne Haruna, Kai Kuma fa?"},

{id: 1702, challengeId: 568, correct: true, text: "Ina lafiya, nagode", audioSrc: "m2-l4-q4-hs.mp3"},
{id: 1703, challengeId: 568, correct: false, text: "Ina kwana Yaya kake?"},
{id: 1704, challengeId: 568, correct: false, text: "Ina lafiya, Kai Kuma fa?"},

{id: 1705, challengeId: 569, correct: true, text: "Ina wuni Yaya kake?", audioSrc: "m2-l4-q5-hs.mp3"},
{id: 1706, challengeId: 569, correct: false, text: "Barka, Yaya kake?"},
{id: 1707, challengeId: 569, correct: false, text: "Sai gobe"},

{id: 1708, challengeId: 570, correct: false, text: "Ni ne Haruna"},
{id: 1709, challengeId: 570, correct: true, text: "Ni ne Haruna Kai Kuma fa?", audioSrc: "m2-l4-q6-hs.mp3"},
{id: 1710, challengeId: 570, correct: false, text: "Ina kwana Yaya kake"},

{id: 1711, challengeId: 571, correct: false, text: "Da kyau"},
{id: 1712, challengeId: 571, correct: false, text: "Ina lafiya"},
{id: 1713, challengeId: 571, correct: true, text: "Barka, Yaya kake?", audioSrc: "m2-l4-q7-hs.mp3"},

{id: 1714, challengeId: 572, correct: false, text: "Ni ne Haruna, Kai Kuma fa?"},
{id: 1715, challengeId: 572, correct: false, text: "Ina lafiya"},
{id: 1716, challengeId: 572, correct: true, text: "Ina lafiya, nagode", audioSrc: "m2-l4-q8-hs.mp3"},

{id: 1717, challengeId: 573, correct: false, text: "Ni ne Haruna"},
{id: 1718, challengeId: 573, correct: true, text: "Ina lafiya", audioSrc: "m2-l4-q9-hs.mp3"},
{id: 1719, challengeId: 573, correct: false, text: "Da kyau"},

{id: 1720, challengeId: 574, correct: true, text: "Yaya kake?", audioSrc: "m2-l4-q10-hs.mp3"},
{id: 1721, challengeId: 574, correct: false, text: "Da kyau"},
{id: 1722, challengeId: 574, correct: false, text: "Nagode"},

{id: 1723, challengeId: 575, correct: true, text: "Ina wuni, Ina kewarka", audioSrc: "m2-l4-q11-hs.mp3"},
{id: 1724, challengeId: 575, correct: false, text: "Ina wuni, Yaya kake?"},
{id: 1725, challengeId: 575, correct: false, text: "Ina wuni"},

{id: 1726, challengeId: 576, correct: false, text: "Sai gobe"},
{id: 1727, challengeId: 576, correct: true, text: "Da kyau", audioSrc: "m2-l4-q12-hs.mp3"},
{id: 1728, challengeId: 576, correct: false, text: "Ina wuni, Ina kewarka"},

{id: 1729, challengeId: 577, correct: false, text: "Ni ne Haruna"},
{id: 1730, challengeId: 577, correct: false, text: "Sai gobe"},
{id: 1731, challengeId: 577, correct: true, text: "Ni abokinka ne", audioSrc: "m2-l4-q13-hs.mp3"},

{id: 1732, challengeId: 578, correct: true, text: "Sai gobe", audioSrc: "m2-l4-q14-hs.mp3"},
{id: 1733, challengeId: 578, correct: false, text: "Nagode"},
{id: 1734, challengeId: 578, correct: false, text: "Da kyau"},

{id: 1735, challengeId: 579, correct: false, text: "Ni ne Haruna, Kai Kuma fa?"},
{id: 1736, challengeId: 579, correct: false, text: "Ni abokinka ne"},
{id: 1737, challengeId: 579, correct: true, text: "Ni ne Haruna", audioSrc: "m2-l4-q15-hs.mp3"},

// Hausa Module 2, Lesson 5
{id: 1738, challengeId: 580, correct: false, text: "Eh, Kai Kuma fa?"},
{id: 1739, challengeId: 580, correct: false, text: "Ka farka ne?"},
{id: 1740, challengeId: 580, correct: true, text: "Mu wuni lafiya", audioSrc: "m2-l5-q1-hs.mp3"},

{id: 1741, challengeId: 581, correct: false, text: "Eh, Kai Kuma fa?"},
{id: 1742, challengeId: 581, correct: true, text: "Eh, Ina lafiya", audioSrc: "m2-l5-q2-hs.mp3"},
{id: 1743, challengeId: 581, correct: false, text: "Eh, ta jirgi zanyi tafiya"},

{id: 1744, challengeId: 582, correct: false, text: "Ka farka ne?"},
{id: 1745, challengeId: 582, correct: true, text: "Eh, Kai Kuma fa?", audioSrc: "m2-l5-q3-hs.mp3"},
{id: 1746, challengeId: 582, correct: false, text: "Ina maka barka da zuwa"},

{id: 1747, challengeId: 583, correct: false, text: "Sai mun hadu"},
{id: 1748, challengeId: 583, correct: false, text: "Ina maka barka da zuwa"},
{id: 1749, challengeId: 583, correct: true, text: "An tashi lafiya?", audioSrc: "m2-l5-q4-hs.mp3"},

{id: 1750, challengeId: 584, correct: true, text: "Ka farka ne?", audioSrc: "m2-l5-q5-hs.mp3"},
{id: 1751, challengeId: 584, correct: false, text: "Ya alamura"},
{id: 1752, challengeId: 584, correct: false, text: "An tashi lafiya?"},

{id: 1753, challengeId: 585, correct: false, text: "Mun gode Allah/ Ubangiji"},
{id: 1754, challengeId: 585, correct: false, text: "Ina tuki"},
{id: 1755, challengeId: 585, correct: true, text: "Ina maka barka da zuwa", audioSrc: "m2-l5-q6-hs.mp3"},

{id: 1756, challengeId: 586, correct: false, text: "Eh, ta jirgi zanyi tafiya"},
{id: 1757, challengeId: 586, correct: false, text: "Mu kwana lafiya"},
{id: 1758, challengeId: 586, correct: true, text: "Sai mun hadu", audioSrc: "m2-l5-q7-hs.mp3"},

{id: 1759, challengeId: 587, correct: false, text: "Ina tuki"},
{id: 1760, challengeId: 587, correct: true, text: "Eh, ta jirgi zanyi tafiya", audioSrc: "m2-l5-q8-hs.mp3"},
{id: 1761, challengeId: 587, correct: false, text: "Mun gode Allah"},

{id: 1762, challengeId: 588, correct: false, text: "Ya alamura"},
{id: 1763, challengeId: 588, correct: false, text: "Mu kwana lafiya"},
{id: 1764, challengeId: 588, correct: true, text: "Yanzu ka farka?", audioSrc: "m2-l5-q9-hs.mp3"},

{id: 1765, challengeId: 589, correct: false, text: "Sai mu hadu"},
{id: 1766, challengeId: 589, correct: true, text: "Yi hakuri", audioSrc: "m2-l5-q10-hs.mp3"},
{id: 1767, challengeId: 589, correct: false, text: "Mun gode Allah"},

{id: 1768, challengeId: 590, correct: true, text: "Ina jiranka", audioSrc: "m2-l5-q11-hs.mp3"},
{id: 1769, challengeId: 590, correct: false, text: "Mu kwana lafiya"},
{id: 1770, challengeId: 590, correct: false, text: "Ina tuki"},

{id: 1771, challengeId: 591, correct: false, text: "Eh, ina maka barka da zuwa"},
{id: 1772, challengeId: 591, correct: true, text: "Mu kwana lafiya", audioSrc: "m2-l5-q12-hs.mp3"},
{id: 1773, challengeId: 591, correct: false, text: "Eh, ta jirgi zanyi tafiya"},

{id: 1774, challengeId: 592, correct: false, text: "Mu wuni lafiya"},
{id: 1775, challengeId: 592, correct: false, text: "Ka farka?"},
{id: 1776, challengeId: 592, correct: true, text: "Ina tuki", audioSrc: "m2-l5-q13-hs.mp3"},

{id: 1777, challengeId: 593, correct: false, text: "An tashi lafiya?"},
{id: 1778, challengeId: 593, correct: false, text: "Ka farka ne?"},
{id: 1779, challengeId: 593, correct: true, text: "Ya alamura", audioSrc: "m2-l5-q14-hs.mp3"},

{id: 1780, challengeId: 594, correct: false, text: "Mu wuni lafiya"},
{id: 1781, challengeId: 594, correct: false, text: "Sai mun hadu"},
{id: 1782, challengeId: 594, correct: true, text: "Mun gode Allah", audioSrc: "m2-l5-q15-hs.mp3"},


// Hausa module 3, lesson 1
{id: 1783, challengeId: 595, correct: false, text: "Jimana, shin kana Jin hausa?"},
{id: 1784, challengeId: 595, correct: true, text: "Ina Jin hausa", audioSrc: "m3-l1-q1-hs.mp3"},
{id: 1785, challengeId: 595, correct: false, text: "Ka bahaushe ne?"},

{id: 1786, challengeId: 596, correct: false, text: "Kai bahaushe ne?"},
{id: 1787, challengeId: 596, correct: false, text: "Ina Jin hausa"},
{id: 1788, challengeId: 596, correct: true, text: "Ji mana, shin kana Jin hausa?", audioSrc: "m3-l1-q2-hs.mp3"},

{id: 1789, challengeId: 597, correct: false, text: "Kai bahaushe ne?"},
{id: 1790, challengeId: 597, correct: true, text: "A'a, Ni bahaushe ne, Ina Jin Igbo", audioSrc: "m3-l1-q3-hs.mp3"},
{id: 1791, challengeId: 597, correct: false, text: "Ni Dan Nigeria ne."},

{id: 1792, challengeId: 598, correct: false, text: "A Ina ake iya samun motan haya"},
{id: 1793, challengeId: 598, correct: false, text: "Mene ne sunanka?"},
{id: 1794, challengeId: 598, correct: true, text: "Ina bukatan motan haya", audioSrc: "m3-l1-q4-hs.mp3"},

{id: 1795, challengeId: 599, correct: true, text: "A Ina ake iya samun motan haya?", audioSrc: "m3-l1-q5-hs.mp3"},
{id: 1796, challengeId: 599, correct: false, text: "Ina bukatan motan haya"},
{id: 1797, challengeId: 599, correct: false, text: "Na sauka a hotel ne"},

{id: 1798, challengeId: 600, correct: false, text: "Zan zauna tsawon sati Daya"},
{id: 1799, challengeId: 600, correct: false, text: "Ni kadai ne"},
{id: 1800, challengeId: 600, correct: true, text: "Ni Dan Nigeria ne", audioSrc: "m3-l1-q6-hs.mp3"},

{id: 1801, challengeId: 601, correct: true, text: "Yaya sunanka?", audioSrc: "m3-l1-q7-hs.mp3"},
{id: 1802, challengeId: 601, correct: false, text: "Kai bahaushe ne?"},
{id: 1803, challengeId: 601, correct: false, text: "Sunana Dauda"},

{id: 1804, challengeId: 602, correct: true, text: "Sunanka Dauda", audioSrc: "m3-l1-q8-hs.mp3"},
{id: 1805, challengeId: 602, correct: false, text: "Na zo tare da Italian"},
{id: 1806, challengeId: 602, correct: false, text: "Zan ziyarci Nigeria"},

{id: 1807, challengeId: 603, correct: false, text: "A'a Ni bahaushe"},
{id: 1808, challengeId: 603, correct: false, text: "Ni Dan Nigeria ne"},
{id: 1809, challengeId: 603, correct: true, text: "Kai bahaushe ne?", audioSrc: "m3-l1-q9-hs.mp3"},

{id: 1810, challengeId: 604, correct: false, text: "Yaya sunanka?"},
{id: 1811, challengeId: 604, correct: false, text: "Zan zauna tsawon sati Daya"},
{id: 1812, challengeId: 604, correct: true, text: "Sunana Dauda", audioSrc: "m3-l1-q10-hs.mp3"},

{id: 1813, challengeId: 605, correct: true, text: "A'a Ni bahaushe", audioSrc: "m3-l1-q11-hs.mp3"},
{id: 1814, challengeId: 605, correct: false, text: "Ni Dan Nigeria ne"},
{id: 1815, challengeId: 605, correct: false, text: "Kai bahaushe ne?"},

{id: 1816, challengeId: 606, correct: false, text: "Na zo tare da Italian"},
{id: 1817, challengeId: 606, correct: false, text: "Ni kadai ne"},
{id: 1818, challengeId: 606, correct: true, text: "Zan ziyarci Nigeria", audioSrc: "m3-l1-q12-hs.mp3"},

{id: 1819, challengeId: 607, correct: false, text: "Mene ne sunanka?"},
{id: 1820, challengeId: 607, correct: true, text: "Zan zauna tsawon sati Daya", audioSrc: "m3-l1-q13-hs.mp3"},
{id: 1821, challengeId: 607, correct: false, text: "Ina bukatan motan haya"},

{id: 1822, challengeId: 608, correct: true, text: "Na sauka a hotel ne"},
{id: 1823, challengeId: 608, correct: false, text: "Ni kadai ne"},
{id: 1824, challengeId: 608, correct: false, text: "Zan ziyarci Nigeria"},

{id: 1825, challengeId: 609, correct: false, text: "Na zo tare da iyalina"},
{id: 1826, challengeId: 609, correct: true, text: "Ni kadai ne"},
{id: 1827, challengeId: 609, correct: false, text: "Zan ziyarci Nigeria"},

// Hausa Module 3, Lesson 2
{id: 1828, challengeId: 610, correct: false, text: "Kana da Yara?"},
{id: 1829, challengeId: 610, correct: false, text: "Ina Jin dadin ziyarar na"},
{id: 1830, challengeId: 610, correct: true, text: "Menene sanaarka?", audioSrc: "m3-l2-q1-hs.mp3"},

{id: 1831, challengeId: 611, correct: false, text: "Ina farincikin kasancewa a nan"},
{id: 1832, challengeId: 611, correct: false, text: "Ina gidan kalo take?"},
{id: 1833, challengeId: 611, correct: true, text: "Daga Ina kake?", audioSrc: "m3-l2-q2-hs.mp3"},

{id: 1834, challengeId: 612, correct: true, text: "Kana da Yara?", audioSrc: "m3-l2-q3-hs.mp3"},
{id: 1835, challengeId: 612, correct: false, text: "Zo muci abinci"},
{id: 1836, challengeId: 612, correct: false, text: "Ka taba zuwa Nigeria?"},

{id: 1837, challengeId: 613, correct: false, text: "Ina son zuwa bakin teku"},
{id: 1838, challengeId: 613, correct: false, text: "Zo muci abinci"},
{id: 1839, challengeId: 613, correct: true, text: "Ka taba zuwa Nigeria?", audioSrc: "m3-l2-q4-hs.mp3"},

{id: 1840, challengeId: 614, correct: false, text: "Kazo gidan"},
{id: 1841, challengeId: 614, correct: true, text: "Ina Jin dadin ziyarar na", audioSrc: "m3-l2-q5-hs.mp3"},
{id: 1842, challengeId: 614, correct: false, text: "Kana da Yara?"},

{id: 1843, challengeId: 615, correct: true, text: "Ina son zuwa bakin teku", audioSrc: "m3-l2-q6-hs.mp3"},
{id: 1844, challengeId: 615, correct: false, text: "Zo muci abinci"},
{id: 1845, challengeId: 615, correct: false, text: "Ka taba zuwa Nigeria?"},

{id: 1846, challengeId: 616, correct: false, text: "Matata yar Nigeria ce"},
{id: 1847, challengeId: 616, correct: true, text: "Kazo gidana", audioSrc: "m3-l2-q7-hs.mp3"},
{id: 1848, challengeId: 616, correct: false, text: "Ka gaida iyalinka"},

{id: 1849, challengeId: 617, correct: true, text: "Matata yar Nigeria ce", audioSrc: "m3-l2-q8-hs.mp3"},
{id: 1850, challengeId: 617, correct: false, text: "Kazo gidana"},
{id: 1851, challengeId: 617, correct: false, text: "Ka gaida iyalinka"},

{id: 1852, challengeId: 618, correct: false, text: "Ji mana/ bani hankalinka"},
{id: 1853, challengeId: 618, correct: true, text: "Ka gaida iyalinka", audioSrc: "m3-l2-q9-hs.mp3"},
{id: 1854, challengeId: 618, correct: false, text: "Zo muci abinci"},

{id: 1855, challengeId: 619, correct: true, text: "Ina son zuwa kasuwa", audioSrc: "m3-l2-q10-hs.mp3"},
{id: 1856, challengeId: 619, correct: false, text: "Ka gaida iyalinka"},
{id: 1857, challengeId: 619, correct: false, text: "Zo muci abinci"},

{id: 1858, challengeId: 620, correct: false, text: "Na gaji"},
{id: 1859, challengeId: 620, correct: true, text: "Ina gidan kalo ta ke?", audioSrc: "m3-l2-q11-hs.mp3"},
{id: 1860, challengeId: 620, correct: false, text: "Ina farincikin kasancewa a nan"},

{id: 1861, challengeId: 621, correct: true, text: "Ji mana/ bani hankalinka", audioSrc: "m3-l2-q12-hs.mp3"},
{id: 1862, challengeId: 621, correct: false, text: "Ka gaida iyalinka"},
{id: 1863, challengeId: 621, correct: false, text: "Zo muci abinci"},

{id: 1864, challengeId: 622, correct: false, text: "Ina son zuwa kasuwa"},
{id: 1865, challengeId: 622, correct: false, text: "Ka gaida iyalinka"},
{id: 1866, challengeId: 622, correct: true, text: "Zo muci abinci", audioSrc: "m3-l2-q13-hs.mp3"},

{id: 1867, challengeId: 623, correct: true, text: "Na gaji", audioSrc: "m3-l2-q14-hs.mp3"},
{id: 1868, challengeId: 623, correct: false, text: "Ina gidan kalo ta ke?"},
{id: 1869, challengeId: 623, correct: false, text: "Ina farincikin kasancewa a nan"},

{id: 1870, challengeId: 624, correct: false, text: "Ji mana/ bani hankalinka"},
{id: 1871, challengeId: 624, correct: true, text: "Ina farincikin kasancewa a nan", audioSrc: "m3-l2-q15-hs.mp3"},
{id: 1872, challengeId: 624, correct: false, text: "Kazo gidana"},

// Hausa Module 3, Lesson 3
{id: 1873, challengeId: 625, correct: false, text: "Wai yo sunana Ladi"},
{id: 1874, challengeId: 625, correct: true, text: "Anti tana chochi", audioSrc: "m3-l3-q1-hs.mp3"},
{id: 1875, challengeId: 625, correct: false, text: "Ina jin Yarbawa da Igbo"},

{id: 1876, challengeId: 626, correct: false, text: "Ladi tana jin Igbo da Yarbawa"},
{id: 1877, challengeId: 626, correct: false, text: "Kana jin Yarbawa da Igbo"},
{id: 1878, challengeId: 626, correct: true, text: "Na je kasuwa", audioSrc: "m3-l3-q2-hs.mp3"},

{id: 1879, challengeId: 627, correct: true, text: "Ina jin Yarbawa da Igbo", audioSrc: "m3-l3-q3-hs.mp3"},
{id: 1880, challengeId: 627, correct: false, text: "Kana jin Yarbawa da Igbo"},
{id: 1881, challengeId: 627, correct: false, text: "Mijina ya fita"},

{id: 1882, challengeId: 628, correct: false, text: "Yarta malama ce"},
{id: 1883, challengeId: 628, correct: false, text: "Dansa dan sanda ne"},
{id: 1884, challengeId: 628, correct: true, text: "Wai yo sunana Ladi", audioSrc: "m3-l3-q4-hs.mp3"},

{id: 1885, challengeId: 629, correct: true, text: "Ladi tana jin Igbo da Yarbawa", audioSrc: "m3-l3-q5-hs.mp3"},
{id: 1886, challengeId: 629, correct: false, text: "Kana jin Yarbawa da Igbo"},
{id: 1887, challengeId: 629, correct: false, text: "Mijina ya fita"},

{id: 1888, challengeId: 630, correct: false, text: "Ita Inyamura ce"},
{id: 1889, challengeId: 630, correct: false, text: "Shi Bayerabe ne"},
{id: 1890, challengeId: 630, correct: true, text: "Kana jin Yarbawa", audioSrc: "m3-l3-q6-hs.mp3"},

{id: 1891, challengeId: 631, correct: false, text: "Mijina ya fita"},
{id: 1892, challengeId: 631, correct: false, text: "Ita Inyamura ce"},
{id: 1893, challengeId: 631, correct: true, text: "Suna jin Hausa", audioSrc: "m3-l3-q7-hs.mp3"},

{id: 1894, challengeId: 632, correct: false, text: "Ita Inyamura ce"},
{id: 1895, challengeId: 632, correct: true, text: "Shi Bayerabe ne", audioSrc: "m3-l3-q8-hs.mp3"},
{id: 1896, challengeId: 632, correct: false, text: "Kana jin Yarbawa"},

{id: 1897, challengeId: 633, correct: true, text: "Ita Inyamura ce", audioSrc: "m3-l3-q9-hs.mp3"},
{id: 1898, challengeId: 633, correct: false, text: "Shi Bayerabe ne"},
{id: 1899, challengeId: 633, correct: false, text: "Kana jin Yarbawa"},

{id: 1900, challengeId: 634, correct: false, text: "Ina jin Yarbawa da Igbo"},
{id: 1901, challengeId: 634, correct: false, text: "Kana jin Yarbawa da Hausa"},
{id: 1902, challengeId: 634, correct: true, text: "Mijina ya fita", audioSrc: "m3-l3-q10-hs.mp3"},

{id: 1903, challengeId: 635, correct: false, text: "Ka gaida iyalinka"},
{id: 1904, challengeId: 635, correct: true, text: "Yarta malama ce", audioSrc: "m3-l3-q11-hs.mp3"},
{id: 1905, challengeId: 635, correct: false, text: "Dansa dan sanda ne"},

{id: 1906, challengeId: 636, correct: false, text: "Ka gaida iyalinka"},
{id: 1907, challengeId: 636, correct: false, text: "Yarta malama ce"},
{id: 1908, challengeId: 636, correct: true, text: "Dansa dan sanda ne", audioSrc: "m3-l3-q12-hs.mp3"},

{id: 1909, challengeId: 637, correct: true, text: "Sunana Ladidi", audioSrc: "m3-l3-q13-hs.mp3"},
{id: 1910, challengeId: 637, correct: false, text: "Ita Inyamura ce"},
{id: 1911, challengeId: 637, correct: false, text: "Suna jin Hausa"},

{id: 1912, challengeId: 638, correct: true, text: "Ina jin Yarbawa da Igbo da Hausa", audioSrc: "m3-l3-q14-hs.mp3"},
{id: 1913, challengeId: 638, correct: false, text: "Kana jin Yarbawa da Hausa"},
{id: 1914, challengeId: 638, correct: false, text: "Suna jin Hausa"},

{id: 1915, challengeId: 639, correct: true, text: "Ka gaida iyalinka", audioSrc: "m3-l3-q15-hs.mp3"},
{id: 1916, challengeId: 639, correct: false, text: "Yarta malama ce"},
{id: 1917, challengeId: 639, correct: false, text: "Dansa dan sanda ne"},

// Hausa Module 3, Lesson 4
{id: 1918, challengeId: 640, correct: false, text: "Yi magana da Yaya"},
{id: 1919, challengeId: 640, correct: true, text: "Gidana", audioSrc: "m3-l4-q1-hs.mp3"},
{id: 1920, challengeId: 640, correct: false, text: "Suna da yawa"},

{id: 1921, challengeId: 641, correct: true, text: "Yi magana da Dana", audioSrc: "m3-l4-q2-hs.mp3"},
{id: 1922, challengeId: 641, correct: false, text: "Su"},
{id: 1923, challengeId: 641, correct: false, text: "Yi magana da Yata"},

{id: 1924, challengeId: 642, correct: false, text: "Yi magana da Dana"},
{id: 1925, challengeId: 642, correct: false, text: "Su"},
{id: 1926, challengeId: 642, correct: true, text: "Yi magana da Yata", audioSrc: "m3-l4-q3-hs.mp3"},

{id: 1927, challengeId: 643, correct: false, text: "Suna da yawa"},
{id: 1928, challengeId: 643, correct: false, text: "Shi dogo ne"},
{id: 1929, challengeId: 643, correct: true, text: "Su", audioSrc: "m3-l4-q4-hs.mp3"},

{id: 1930, challengeId: 644, correct: false, text: "Ta iya girki"},
{id: 1931, challengeId: 644, correct: true, text: "Suna da yawa", audioSrc: "m3-l4-q5-hs.mp3"},
{id: 1932, challengeId: 644, correct: false, text: "Ita"},

{id: 1933, challengeId: 645, correct: true, text: "Shi", audioSrc: "m3-l4-q6-hs.mp3"},
{id: 1934, challengeId: 645, correct: false, text: "Ita"},
{id: 1935, challengeId: 645, correct: false, text: "Su"},

{id: 1936, challengeId: 646, correct: false, text: "Shi"},
{id: 1937, challengeId: 646, correct: false, text: "Dan uwanshi kyakkyawa ne"},
{id: 1938, challengeId: 646, correct: true, text: "Shi dogo ne", audioSrc: "m3-l4-q7-hs.mp3"},

{id: 1939, challengeId: 647, correct: false, text: "Shi"},
{id: 1940, challengeId: 647, correct: true, text: "Ita", audioSrc: "m3-l4-q8-hs.mp3"},
{id: 1941, challengeId: 647, correct: false, text: "Su"},

{id: 1942, challengeId: 648, correct: false, text: "Littafi na"},
{id: 1943, challengeId: 648, correct: false, text: "Yar uwatta kyakkyawa ce"},
{id: 1944, challengeId: 648, correct: true, text: "Ta iya girki", audioSrc: "m3-l4-q9-hs.mp3"},

{id: 1945, challengeId: 649, correct: true, text: "Nashi", audioSrc: "m3-l4-q10-hs.mp3"},
{id: 1946, challengeId: 649, correct: false, text: "Nawa"},
{id: 1947, challengeId: 649, correct: false, text: "Nata"},

{id: 1948, challengeId: 650, correct: false, text: "Ita"},
{id: 1949, challengeId: 650, correct: true, text: "Dan uwanshi kyakkyawa ne", audioSrc: "m3-l4-q11-hs.mp3"},
{id: 1950, challengeId: 650, correct: false, text: "Yar uwatta kyakkyawa ce"},

{id: 1951, challengeId: 651, correct: false, text: "Nawa"},
{id: 1952, challengeId: 651, correct: false, text: "Nashi"},
{id: 1953, challengeId: 651, correct: true, text: "Nata", audioSrc: "m3-l4-q12-hs.mp3"},

{id: 1954, challengeId: 652, correct: false, text: "Nata"},
{id: 1955, challengeId: 652, correct: false, text: "Dan uwanshi kyakkyawa ne"},
{id: 1956, challengeId: 652, correct: true, text: "Yar uwatta kyakkyawa ce", audioSrc: "m3-l4-q13-hs.mp3"},

{id: 1957, challengeId: 653, correct: true, text: "Nawa", audioSrc: "m3-l4-q14-hs.mp3"},
{id: 1958, challengeId: 653, correct: false, text: "Nashi"},
{id: 1959, challengeId: 653, correct: false, text: "Nata"},

{id: 1960, challengeId: 654, correct: true, text: "Littafi na", audioSrc: "m3-l4-q15-hs.mp3"},
{id: 1961, challengeId: 654, correct: false, text: "Yar uwatta kyakkyawa ce"},
{id: 1962, challengeId: 654, correct: false, text: "Ta iya girki"},

// Hausa Module 3, Lesson 5
{id: 1963, challengeId: 655, correct: true, text: "Mu", audioSrc: "m3-l5-q1-hs.mp3"},
{id: 1964, challengeId: 655, correct: false, text: "Mu dawo"},
{id: 1965, challengeId: 655, correct: false, text: "Sami abokina"},

{id: 1966, challengeId: 656, correct: false, text: "Mu"},
{id: 1967, challengeId: 656, correct: true, text: "Mu dawo", audioSrc: "m3-l5-q2-hs.mp3"},
{id: 1968, challengeId: 656, correct: false, text: "Sami abokina"},

{id: 1969, challengeId: 657, correct: true, text: "Mu", audioSrc: "m3-l5-q3-hs.mp3"},
{id: 1970, challengeId: 657, correct: false, text: "Kazo ka hade da mu"},
{id: 1971, challengeId: 657, correct: false, text: "Yi min magana"},

{id: 1972, challengeId: 658, correct: false, text: "Wanene kai?"},
{id: 1973, challengeId: 658, correct: true, text: "Kazo ka hade da mu", audioSrc: "m3-l5-q4-hs.mp3"},
{id: 1974, challengeId: 658, correct: false, text: "Yi min magana"},

{id: 1975, challengeId: 659, correct: false, text: "Kai da ni"},
{id: 1976, challengeId: 659, correct: false, text: "Kai da ni har abada"},
{id: 1977, challengeId: 659, correct: true, text: "Sami abokina", audioSrc: "m3-l5-q5-hs.mp3"},

{id: 1978, challengeId: 660, correct: false, text: "Su nawane"},
{id: 1979, challengeId: 660, correct: true, text: "Kai", audioSrc: "m3-l5-q6-hs.mp3"},
{id: 1980, challengeId: 660, correct: false, text: "Wanene kai?"},

{id: 1981, challengeId: 661, correct: false, text: "Kai da ni"},
{id: 1982, challengeId: 661, correct: false, text: "Kai da ni har abada"},
{id: 1983, challengeId: 661, correct: true, text: "Wanene kai?", audioSrc: "m3-l5-q7-hs.mp3"},

{id: 1984, challengeId: 662, correct: false, text: "Su nawane"},
{id: 1985, challengeId: 662, correct: true, text: "Su", audioSrc: "m3-l5-q8-hs.mp3"},
{id: 1986, challengeId: 662, correct: false, text: "Nawane"},

{id: 1987, challengeId: 663, correct: false, text: "Wanene kai?"},
{id: 1988, challengeId: 663, correct: false, text: "Menene kai?"},
{id: 1989, challengeId: 663, correct: true, text: "Su waye ne?", audioSrc: "m3-l5-q9-hs.mp3"},

{id: 1990, challengeId: 664, correct: false, text: "Su nawane"},
{id: 1991, challengeId: 664, correct: false, text: "Su"},
{id: 1992, challengeId: 664, correct: true, text: "Nawane", audioSrc: "m3-l5-q10-hs.mp3"},

{id: 1993, challengeId: 665, correct: true, text: "Su nawane", audioSrc: "m3-l5-q11-hs.mp3"},
{id: 1994, challengeId: 665, correct: false, text: "Su"},
{id: 1995, challengeId: 665, correct: false, text: "Nawane"},

{id: 1996, challengeId: 666, correct: false, text: "Kazo ka hade da mu"},
{id: 1997, challengeId: 666, correct: true, text: "Ni", audioSrc: "m3-l5-q12-hs.mp3"},
{id: 1998, challengeId: 666, correct: false, text: "Yi min magana"},

{id: 1999, challengeId: 667, correct: false, text: "Ni"},
{id: 2000, challengeId: 667, correct: true, text: "Yi min magana", audioSrc: "m3-l5-q13-hs.mp3"},
{id: 2001, challengeId: 667, correct: false, text: "Mun dawo"},

{id: 2002, challengeId: 668, correct: true, text: "Kai da ni", audioSrc: "m3-l5-q15-hs.mp3"},
{id: 2003, challengeId: 668, correct: false, text: "Kai da ni har abada"},
{id: 2004, challengeId: 668, correct: false, text: "Sami abokina"},

{id: 2005, challengeId: 669, correct: true, text: "Kai da ni har abada", audioSrc: "m3-l5-q14-hs.mp3"},
{id: 2006, challengeId: 669, correct: false, text: "Kai da ni"},
{id: 2007, challengeId: 669, correct: false, text: "kazo ka hade da mu"},

//PIDGIN STARTS ORIGINAL

{id: 2008, challengeId: 670, correct: false, text: "Sorrey"},
{id: 2009, challengeId: 670, correct: false, text: "You do well"},
{id: 2010, challengeId: 670, correct: true, text: "How you dey", audioSrc: "m1-l1-q1-pg.mp3"},

{id: 2011, challengeId: 671, correct: false, text: "Sorrey"},
{id: 2012, challengeId: 671, correct: false, text: "You do well"},
{id: 2013, challengeId: 671, correct: true, text: "I dey fine", audioSrc: "m1-l1-q2-pg.mp3"},

{id: 2014, challengeId: 672, correct: true, text: "Wetin be your name", audioSrc: "m1-l1-q3-pg.mp3"},
{id: 2015, challengeId: 672, correct: false, text: "I come from Nigeria"},
{id: 2016, challengeId: 672, correct: false, text: "Welcome ooooo"},

{id: 2017, challengeId: 673, correct: false, text: "You nko"},
{id: 2018, challengeId: 673, correct: false, text: "I dey well"},
{id: 2019, challengeId: 673, correct: true, text: "My name na Ejiro", audioSrc: "m1-l1-q4-pg.mp3"},

{id: 2020, challengeId: 674, correct: false, text: "My name na Ese"},
{id: 2021, challengeId: 674, correct: false, text: "You do well"},
{id: 2022, challengeId: 674, correct: true, text: "I come from Nigeria", audioSrc: "m1-l1-q5-pg.mp3"},

{id: 2023, challengeId: 675, correct: false, text: "Wetin be your name"},
{id: 2024, challengeId: 675, correct: false, text: "Na so"},
{id: 2025, challengeId: 675, correct: true, text: "You nko", audioSrc: "m1-l1-q6-pg.mp3"},

{id: 2026, challengeId: 676, correct: true, text: "No be so", audioSrc: "m1-l1-q7-pg.mp3"},
{id: 2027, challengeId: 676, correct: false, text: "I come from Nigeria"},
{id: 2028, challengeId: 676, correct: false, text: "Na so"},

{id: 2029, challengeId: 677, correct: false, text: "You do well"},
{id: 2030, challengeId: 677, correct: false, text: "You nko"},
{id: 2031, challengeId: 677, correct: true, text: "Wetin you talk", audioSrc: "m1-l1-q10-pg.mp3"},

{id: 2032, challengeId: 678, correct: true, text: "Talk am again", audioSrc: "m1-l1-q9-pg.mp3"},
{id: 2033, challengeId: 678, correct: false, text: "Wetin you talk ooo"},
{id: 2034, challengeId: 678, correct: false, text: "Doooo"},

{id: 2035, challengeId: 679, correct: true, text: "Na so", audioSrc: "m1-l1-q8-pg.mp3"},
{id: 2036, challengeId: 679, correct: false, text: "You do well"},
{id: 2037, challengeId: 679, correct: false, text: "No be so"},

{id: 2038, challengeId: 680, correct: false, text: "I dey fine"},
{id: 2039, challengeId: 680, correct: true, text: "You do well", audioSrc: "m1-l1-q11-pg.mp3"},
{id: 2040, challengeId: 680, correct: false, text: "I come from Nigeria"},

{id: 2041, challengeId: 681, correct: false, text: "Do ooooo"},
{id: 2042, challengeId: 681, correct: false, text: "You nko"},
{id: 2043, challengeId: 681, correct: true, text: "Welcome oooooo", audioSrc: "m1-l1-q12-pg.mp3"},

{id: 2044, challengeId: 682, correct: false, text: "Talk am again"},
{id: 2045, challengeId: 682, correct: false, text: "Wetin you talk"},
{id: 2046, challengeId: 682, correct: true, text: "Talk na", audioSrc: "m1-l1-q13-pg.mp3"},

{id: 2047, challengeId: 683, correct: true, text: "Do oooo", audioSrc: "m1-l1-q14-pg.mp3"},
{id: 2048, challengeId: 683, correct: false, text: "Welcome oooooo"},
{id: 2049, challengeId: 683, correct: false, text: "You do well ooooo"},

{id: 2050, challengeId: 684, correct: false, text: "Wetin be your name"},
{id: 2051, challengeId: 684, correct: false, text: "You do well"},
{id: 2052, challengeId: 684, correct: true, text: "You do well oooooo", audioSrc: "m1-l1-q15-pg.mp3"},

{id: 2053, challengeId: 685, correct: false, text: "Small"},
{id: 2054, challengeId: 685, correct: false, text: "I like pidgin oooo"},
{id: 2055, challengeId: 685, correct: true, text: "You sabi speak pidgin", audioSrc: "m1-l2-q1-pg.mp3"},

{id: 2056, challengeId: 686, correct: false, text: "I like pidgin"},
{id: 2057, challengeId: 686, correct: true, text: "Na small ooo", audioSrc: "m1-l2-q2-pg.mp3"},
{id: 2058, challengeId: 686, correct: false, text: "I dey 35yrs"},

{id: 2059, challengeId: 687, correct: true, text: "I like pidgin", audioSrc: "m1-l2-q3-pg.mp3"},
{id: 2060, challengeId: 687, correct: false, text: "Na small ooo"},
{id: 2061, challengeId: 687, correct: false, text: "I dey talk to you oooo"},

{id: 2062, challengeId: 688, correct: false, text: "Wetin be dis"},
{id: 2063, challengeId: 688, correct: true, text: "I fit learn with you", audioSrc: "m1-l2-q4-pg.mp3"},
{id: 2064, challengeId: 688, correct: false, text: "I dey 35yrs"},

{id: 2065, challengeId: 689, correct: true, text: "How many years you dey", audioSrc: "m1-l2-q5-pg.mp3"},
{id: 2066, challengeId: 689, correct: false, text: "I be 35yrs oooo"},
{id: 2067, challengeId: 689, correct: false, text: "I like you ooo"},

{id: 2068, challengeId: 690, correct: true, text: "Abi 35yrs", audioSrc: "m1-l2-q6-pg.mp3"},
{id: 2069, challengeId: 690, correct: false, text: "I like you oooo"},
{id: 2070, challengeId: 690, correct: false, text: "I dey stay USA"},

{id: 2071, challengeId: 691, correct: true, text: "I dey talk to you ooo", audioSrc: "m1-l2-q7-pg.mp3"},
{id: 2072, challengeId: 691, correct: false, text: "Where you dey stay"},
{id: 2073, challengeId: 691, correct: false, text: "Wetin be dis"},

{id: 2074, challengeId: 692, correct: false, text: "Abi 35yrs ooo"},
{id: 2075, challengeId: 692, correct: false, text: "No be you i dey talk to"},
{id: 2076, challengeId: 692, correct: true, text: "Wetin be dis", audioSrc: "m1-l2-q8-pg.mp3"},

{id: 2077, challengeId: 693, correct: true, text: "Wetin that one mean", audioSrc: "m1-l2-q9-pg.mp3"},
{id: 2078, challengeId: 693, correct: false, text: "Abi 35yrs ooo"},
{id: 2079, challengeId: 693, correct: false, text: "Dis tin fine well well"},

{id: 2080, challengeId: 694, correct: true, text: "Where you dey", audioSrc: "m1-l2-q10-pg.mp3"},
{id: 2081, challengeId: 694, correct: false, text: "Where you dey stay self"},
{id: 2082, challengeId: 694, correct: false, text: "Abi 35yrs"},

{id: 2083, challengeId: 695, correct: true, text: "I like you oooo", audioSrc: "m1-l2-q11-pg.mp3"},
{id: 2084, challengeId: 695, correct: false, text: "I dey stay USA"},
{id: 2085, challengeId: 695, correct: false, text: "Dis tin fine well well"},

{id: 2086, challengeId: 696, correct: false, text: "I like you oooo"},
{id: 2087, challengeId: 696, correct: true, text: "Where you dey stay", audioSrc: "m1-l2-q12-pg.mp3"},
{id: 2088, challengeId: 696, correct: false, text: "I dey stay for USA"},

{id: 2089, challengeId: 697, correct: true, text: "Dis tin fine well well" , audioSrc: "m1-l2-q13-pg.mp3"},
{id: 2090, challengeId: 697, correct: false, text: "I like you ooo"},
{id: 2091, challengeId: 697, correct: false, text: "Where you dey stay"},

{id: 2092, challengeId: 698, correct: false, text: "Dis tin fine ooo"},
{id: 2093, challengeId: 698, correct: true, text: "She fine ooo", audioSrc: "m1-l2-q14-pg.mp3"},
{id: 2094, challengeId: 698, correct: false, text: "Where you dey stay"},

{id: 2095, challengeId: 699, correct: true, text: "I dey stay for inside USA", audioSrc: "m1-l2-q15-pg.mp3"},
{id: 2096, challengeId: 699, correct: false, text: "I dey stay Nigeria"},
{id: 2097, challengeId: 699, correct: false, text: "Dis tin fine oooo"},

{id: 2098, challengeId: 700, correct: false, text: "Wetin you mean self"},
{id: 2099, challengeId: 700, correct: false, text: "Talk to me"},
{id: 2100, challengeId: 700, correct: true, text: "Dem dey dance", audioSrc: "m1-l3-q1-pg.mp3"},

{id: 2101, challengeId: 701, correct: false, text: "You dey correct"},
{id: 2102, challengeId: 701, correct: true, text: "Wetin you mean", audioSrc: "m1-l3-q2-pg.mp3"},
{id: 2103, challengeId: 701, correct: false, text: "I know"},

{id: 2104, challengeId: 702, correct: false, text: "Me self like you"},
{id: 2105, challengeId: 702, correct: true, text: "Talk to me", audioSrc: "m1-l3-q3-pg.mp3"},
{id: 2106, challengeId: 702, correct: false, text: "No be so he be ooo"},

{id: 2107, challengeId: 703, correct: false, text: "I know"},
{id: 2108, challengeId: 703, correct: true, text: "Me self like you", audioSrc: "m1-l3-q4-pg.mp3"},
{id: 2109, challengeId: 703, correct: false, text: "Where you dey go"},

{id: 2110, challengeId: 704, correct: true, text: "No be like that", audioSrc: "m1-l3-q5-pg.mp3"},
{id: 2111, challengeId: 704, correct: false, text: "Na the same tin"},
{id: 2112, challengeId: 704, correct: false, text: "Where you dey go self"},

{id: 2113, challengeId: 705, correct: false, text: "Make we dey go ooo"},
{id: 2114, challengeId: 705, correct: true, text: "Where you dey go", audioSrc: "m1-l3-q6-pg.mp3"},
{id: 2115, challengeId: 705, correct: false, text: "You no dey correct"},

{id: 2116, challengeId: 706, correct: true, text: "Turn come back here now", audioSrc: "m1-l3-q7-pg.mp3"},
{id: 2117, challengeId: 706, correct: false, text: "Where you dey go oooo"},
{id: 2118, challengeId: 706, correct: false, text: "I know na"},

{id: 2119, challengeId: 707, correct: true, text: "You dey alone", audioSrc: "m1-l3-q8-pg.mp3"},
{id: 2120, challengeId: 707, correct: false, text: "Yes ooo"},
{id: 2121, challengeId: 707, correct: false, text: "No oooo"},

{id: 2122, challengeId: 708, correct: true, text: "Make we dey go", audioSrc: "m1-l3-q9-pg.mp3"},
{id: 2123, challengeId: 708, correct: false, text: "Turn back cum here now"},
{id: 2124, challengeId: 708, correct: false, text: "You no correct ooooo"},

{id: 2125, challengeId: 709, correct: false, text: "Na the same tin"},
{id: 2126, challengeId: 709, correct: true, text: "I know", audioSrc: "m1-l3-q10-pg.mp3"},
{id: 2127, challengeId: 709, correct: false, text: "Where you dey go self"},

{id: 2128, challengeId: 710, correct: true, text: "Na the same tin", audioSrc: "m1-l3-q11-pg.mp3"},
{id: 2129, challengeId: 710, correct: false, text: "I know"},
{id: 2130, challengeId: 710, correct: false, text: "You no correct"},

{id: 2131, challengeId: 711, correct: true, text: "You dey correct", audioSrc: "m1-l3-q12-pg.mp3"},
{id: 2132, challengeId: 711, correct: false, text: "Dis tin fine well well"},
{id: 2133, challengeId: 711, correct: false, text: "Me self like you oooo"},

{id: 2134, challengeId: 712, correct: false, text: "Dis tin fine ooooo"},
{id: 2135, challengeId: 712, correct: false, text: "You dey correct"},
{id: 2136, challengeId: 712, correct: true, text: "You no dey correct", audioSrc: "m1-l3-q13-pg.mp3"},

{id: 2137, challengeId: 713, correct: false, text: "I know"},
{id: 2138, challengeId: 713, correct: true, text: "This tin fine well well oo", audioSrc: "m1-l3-q14-pg.mp3"},
{id: 2139, challengeId: 713, correct: false, text: "Where you dey go ooo"},

{id: 2140, challengeId: 714, correct: false, text: "You no dey correct"},
{id: 2141, challengeId: 714, correct: true, text: "You know", audioSrc: "m1-l3-q15-pg.mp3"},
{id: 2142, challengeId: 714, correct: false, text: "Na the same tin"},

{id: 2143, challengeId: 715, correct: false, text: "Wetin you wan buy"},
{id: 2144, challengeId: 715, correct: true, text: "I won buy", audioSrc: "m1-l4-q1-pg.mp3"},
{id: 2145, challengeId: 715, correct: false, text: "Yam 1000"},

{id: 2146, challengeId: 716, correct: false, text: "Yam 1000"},
{id: 2147, challengeId: 716, correct: false, text: "I won buy"},
{id: 2148, challengeId: 716, correct: true, text: "Wetin you won buy", audioSrc: "m1-l4-q2-pg.mp3"},

{id: 2149, challengeId: 717, correct: false, text: "How you dey sell"},
{id: 2150, challengeId: 717, correct: true, text: "Yam", audioSrc: "m1-l4-q3-pg.mp3"},
{id: 2151, challengeId: 717, correct: false, text: "Wetin you wan buy"},

{id: 2152, challengeId: 718, correct: false, text: "Yam 1000"},
{id: 2153, challengeId: 718, correct: true, text: "How you dey sell", audioSrc: "m1-l4-q4-pg.mp3"},
{id: 2154, challengeId: 718, correct: false, text: "Wetin you talk"},

{id: 2155, challengeId: 719, correct: false, text: "How you dey sell"},
{id: 2156, challengeId: 719, correct: false, text: "I dey sorry ooo"},
{id: 2157, challengeId: 719, correct: true, text: "Yam 1000", audioSrc: "m1-l4-q5-pg.mp3"},

{id: 2158, challengeId: 720, correct: false, text: "Come back na"},
{id: 2159, challengeId: 720, correct: false, text: "Do ooooo"},
{id: 2160, challengeId: 720, correct: true, text: "I dey come", audioSrc: "m1-l4-q6-pg.mp3"},

{id: 2161, challengeId: 721, correct: true, text: "I dey sorry o", audioSrc: "m1-l4-q7-pg.mp3"},
{id: 2162, challengeId: 721, correct: false, text: "Do ooooo"},
{id: 2163, challengeId: 721, correct: false, text: "Wetin you talk"},

{id: 2164, challengeId: 722, correct: false, text: "I don hear you"},
{id: 2165, challengeId: 722, correct: true, text: "He no dey at all", audioSrc: "m1-l4-q8-pg.mp3"},
{id: 2166, challengeId: 722, correct: false, text: "Come back na"},

{id: 2167, challengeId: 723, correct: false, text: "I don hear you"},
{id: 2168, challengeId: 723, correct: true, text: "Come back na", audioSrc: "m1-l4-q9-pg.mp3"},
{id: 2169, challengeId: 723, correct: false, text: "Do oooo"},

{id: 2170, challengeId: 724, correct: true, text: "I don hear you", audioSrc: "m1-l4-q10-pg.mp3"},
{id: 2171, challengeId: 724, correct: false, text: "Come back na"},
{id: 2172, challengeId: 724, correct: false, text: "Which time self"},

{id: 2173, challengeId: 725, correct: true, text: "Which time oooo", audioSrc: "m1-l4-q11-pg.mp3"},
{id: 2174, challengeId: 725, correct: false, text: "For afternoon"},
{id: 2175, challengeId: 725, correct: false, text: "For evening"},

{id: 2176, challengeId: 726, correct: false, text: "Na which time"},
{id: 2177, challengeId: 726, correct: true, text: "For afternoon", audioSrc: "m1-l4-q12-pg.mp3"},
{id: 2178, challengeId: 726, correct: false, text: "For evening"},

{id: 2179, challengeId: 727, correct: true, text: "I go come", audioSrc: "m1-l4-q13-pg.mp3"},
{id: 2180, challengeId: 727, correct: false, text: "I dey go"},
{id: 2181, challengeId: 727, correct: false, text: "Wetin you talk"},

{id: 2182, challengeId: 728, correct: false, text: "I go come"},
{id: 2183, challengeId: 728, correct: true, text: "I dey go", audioSrc: "m1-l4-q14-pg.mp3"},
{id: 2184, challengeId: 728, correct: false, text: "I dey come"},

{id: 2185, challengeId: 729, correct: true, text: "Wetin you talk", audioSrc: "m1-l4-q15-pg.mp3"},
{id: 2186, challengeId: 729, correct: false, text: "I dey come"},
{id: 2187, challengeId: 729, correct: false, text: "Do oooo"},

{id: 2188, challengeId: 730, correct: true, text: "Where you dey go", audioSrc: "m1-l5-q1-pg.mp3"},
{id: 2189, challengeId: 730, correct: false, text: "I dey go Nicon Town"},
{id: 2190, challengeId: 730, correct: false, text: "Seea down for back"},

{id: 2191, challengeId: 731, correct: true, text: "I dey go Nicon Town", audioSrc: "m1-l5-q2-pg.mp3"},
{id: 2192, challengeId: 731, correct: false, text: "Where you dey go"},
{id: 2193, challengeId: 731, correct: false, text: "Enter inside"},

{id: 2194, challengeId: 732, correct: true, text: "Enter inside", audioSrc: "m1-l5-q3-pg.mp3"},
{id: 2195, challengeId: 732, correct: false, text: "Come down for here"},
{id: 2196, challengeId: 732, correct: false, text: "We dey hear"},

{id: 2197, challengeId: 733, correct: true, text: "Seea down for back", audioSrc: "m1-l5-q4-pg.mp3"},
{id: 2198, challengeId: 733, correct: false, text: "Enter inside"},
{id: 2199, challengeId: 733, correct: false, text: "Good afternoon oooo"},

{id: 2200, challengeId: 734, correct: true, text: "Where dem dey", audioSrc: "m1-l5-q5-pg.mp3"},
{id: 2201, challengeId: 734, correct: false, text: "Where you dey go"},
{id: 2202, challengeId: 734, correct: false, text: "On the light"},

{id: 2203, challengeId: 735, correct: false, text: "Good afternoon oooo"},
{id: 2204, challengeId: 735, correct: true, text: "Come down for here", audioSrc: "m1-l5-q6-pg.mp3"},
{id: 2205, challengeId: 735, correct: false, text: "Welcome oooo"},

{id: 2206, challengeId: 736, correct: false, text: "Where you dey go"},
{id: 2207, challengeId: 736, correct: true, text: "Na the place be dis", audioSrc: "m1-l5-q7-pg.mp3"},
{id: 2208, challengeId: 736, correct: false, text: "We dey there ooo"},

{id: 2209, challengeId: 737, correct: true, text: "Take your money", audioSrc: "m1-l5-q8-pg.mp3"},
{id: 2210, challengeId: 737, correct: false, text: "You do well oooo"},
{id: 2211, challengeId: 737, correct: false, text: "Wetin you won eat"},

{id: 2212, challengeId: 738, correct: true, text: "Good afternoon oooo", audioSrc: "m1-l5-q9-pg.mp3"},
{id: 2213, challengeId: 738, correct: false, text: "Wetin you talk"},
{id: 2214, challengeId: 738, correct: false, text: "Welcome oooo"},

{id: 2215, challengeId: 739, correct: false, text: "You do well"},
{id: 2216, challengeId: 739, correct: true, text: "Welcome ooo", audioSrc: "m1-l5-q10-pg.mp3"},
{id: 2217, challengeId: 739, correct: false, text: "Bye bye ooo"},

{id: 2218, challengeId: 740, correct: true, text: "On the light", audioSrc: "m1-l5-q11-pg.mp3"},
{id: 2219, challengeId: 740, correct: false, text: "Wetin you won eat"},
{id: 2220, challengeId: 740, correct: false, text: "You get water"},

{id: 2221, challengeId: 741, correct: true, text: "Wetin you won eat", audioSrc: "m1-l5-q12-pg.mp3"},
{id: 2222, challengeId: 741, correct: false, text: "You get water"},
{id: 2223, challengeId: 741, correct: false, text: "On the light"},

{id: 2224, challengeId: 742, correct: false, text: "U do well ooo"},
{id: 2225, challengeId: 742, correct: false, text: "Wetin you won eat"},
{id: 2226, challengeId: 742, correct: true, text: "You get water", audioSrc: "m1-l5-q13-pg.mp3"},

{id: 2227, challengeId: 743, correct: true, text: "You do well", audioSrc: "m1-l5-q14-pg.mp3"},
{id: 2228, challengeId: 743, correct: false, text: "Bye bye ooo"},
{id: 2229, challengeId: 743, correct: false, text: "Welcome ooo"},

{id: 2230, challengeId: 744, correct: true, text: "Bye bye ooo", audioSrc: "m1-l5-q15-pg.mp3"},
{id: 2231, challengeId: 744, correct: false, text: "You do well ooo"},
{id: 2232, challengeId: 744, correct: false, text: "Welcome oooo"},

{id: 2233, challengeId: 745, correct: false, text: "Good morning oooo"},
{id: 2234, challengeId: 745, correct: true, text: "Thank you wel well ooo", audioSrc: "m2-l1-q1-pg.mp3"},
{id: 2235, challengeId: 745, correct: false, text: "See ooo"},

{id: 2236, challengeId: 746, correct: false, text: "Thank you well well ooo"},
{id: 2237, challengeId: 746, correct: false, text: "Welcome oooo"},
{id: 2238, challengeId: 746, correct: true, text: "Good morning oooo", audioSrc: "m2-l1-q2-pg.mp3"},

{id: 2239, challengeId: 747, correct: false, text: "See oooo"},
{id: 2240, challengeId: 747, correct: false, text: "How far"},
{id: 2241, challengeId: 747, correct: true, text: "Good morning oooo", audioSrc: "m2-l1-q3-pg.mp3"},

{id: 2242, challengeId: 748, correct: false, text: "Welcome oooo"},
{id: 2243, challengeId: 748, correct: true, text: "Good afternoon oooo", audioSrc: "m2-l1-q4-pg.mp3"},
{id: 2244, challengeId: 748, correct: false, text: "Good night oooo"},

{id: 2245, challengeId: 749, correct: false, text: "Thank you well well ooo"},
{id: 2246, challengeId: 749, correct: false, text: "Morning oooo"},
{id: 2247, challengeId: 749, correct: true, text: "Welcome oooo", audioSrc: "m2-l1-q5-pg.mp3"},

{id: 2248, challengeId: 750, correct: true, text: "See oooo", audioSrc: "m2-l1-q6-pg.mp3"},
{id: 2249, challengeId: 750, correct: false, text: "Good night oooo"},
{id: 2250, challengeId: 750, correct: false, text: "How far na"},

{id: 2251, challengeId: 751, correct: false, text: "Morning oooo"},
{id: 2252, challengeId: 751, correct: true, text: "Better wel wel", audioSrc: "m2-l1-q7-pg.mp3"},
{id: 2253, challengeId: 751, correct: false, text: "Make your day better ooo"},

{id: 2254, challengeId: 752, correct: false, text: "How you dey"},
{id: 2255, challengeId: 752, correct: false, text: "Bye"},
{id: 2256, challengeId: 752, correct: true, text: "How far", audioSrc: "m2-l1-q8-pg.mp3"},

{id: 2257, challengeId: 753, correct: false, text: "Better night rest oooo"},
{id: 2258, challengeId: 753, correct: true, text: "Bye bye", audioSrc: "m2-l1-q9-pg.mp3"},
{id: 2259, challengeId: 753, correct: false, text: "How far"},

{id: 2260, challengeId: 754, correct: false, text: "See oooo"},
{id: 2261, challengeId: 754, correct: false, text: "Thank you well well"},
{id: 2262, challengeId: 754, correct: true, text: "How you dey na", audioSrc: "m2-l1-q10-pg.mp3"},

{id: 2263, challengeId: 755, correct: true, text: "Make your day better oooo", audioSrc: "m2-l1-q11-pg.mp3"},
{id: 2264, challengeId: 755, correct: false, text: "Good morning oooo"},
{id: 2265, challengeId: 755, correct: false, text: "Welcome oooo"},

{id: 2266, challengeId: 756, correct: false, text: "Morning oooo"},
{id: 2267, challengeId: 756, correct: false, text: "Bye bye we go see tomorrow"},
{id: 2268, challengeId: 756, correct: true, text: "Good night oooo", audioSrc: "m2-l1-q12-pg.mp3"},

{id: 2269, challengeId: 757, correct: true, text: "Bye bye we go see tomorrow", audioSrc: "m2-l1-q13-pg.mp3"},
{id: 2270, challengeId: 757, correct: false, text: "Bye bye ooo"},
{id: 2271, challengeId: 757, correct: false, text: "How far"},

{id: 2272, challengeId: 758, correct: false, text: "Welcome oooo"},
{id: 2273, challengeId: 758, correct: false, text: "Make your day better"},
{id: 2274, challengeId: 758, correct: true, text: "Bye bye", audioSrc: "m2-l1-q14-pg.mp3"},

{id: 2275, challengeId: 759, correct: true, text: "Better night rest oooo", audioSrc: "m2-l1-q15-pg.mp3"},
{id: 2276, challengeId: 759, correct: false, text: "Thank you well well"},
{id: 2277, challengeId: 759, correct: false, text: "Good morning oooo"},

{id: 2278, challengeId: 760, correct: true, text: "Oga Paul, good evening oooo", audioSrc: "m2-l2-q1-pg.mp3"},
{id: 2279, challengeId: 760, correct: false, text: "Good morning oooo"},
{id: 2280, challengeId: 760, correct: false, text: "I go see you tomorrow"},

{id: 2281, challengeId: 761, correct: false, text: "Bye bye"},
{id: 2282, challengeId: 761, correct: true, text: "Good morning oooo", audioSrc: "m2-l2-q2-pg.mp3"},
{id: 2283, challengeId: 761, correct: false, text: "Tomorrow na"},

{id: 2284, challengeId: 762, correct: true, text: "Afternoon oooo", audioSrc: "m2-l2-q3-pg.mp3"},
{id: 2285, challengeId: 762, correct: false, text: "Paul good evening, oooo"},
{id: 2286, challengeId: 762, correct: false, text: "Good morning oooo"},

{id: 2287, challengeId: 763, correct: false, text: "Welcome, oooo"},
{id: 2288, challengeId: 763, correct: false, text: "Afternoon oooo"},
{id: 2289, challengeId: 763, correct: true, text: "Better Night", audioSrc: "m2-l2-q4-pg.mp3"},

{id: 2290, challengeId: 764, correct: false, text: "You do wel"},
{id: 2291, challengeId: 764, correct: true, text: "We go see tomorrow", audioSrc: "m2-l2-q5-pg.mp3"},
{id: 2292, challengeId: 764, correct: false, text: "How you dey"},

{id: 2293, challengeId: 765, correct: false, text: "Goodnight ooo"},
{id: 2294, challengeId: 765, correct: false, text: "How you dey"},
{id: 2295, challengeId: 765, correct: true, text: "Bye bye", audioSrc: "m2-l2-q6-pg.mp3"},

{id: 2296, challengeId: 766, correct: false, text: "Welcome oooo"},
{id: 2297, challengeId: 766, correct: true, text: "You dey welcome", audioSrc: "m2-l2-q7-pg.mp3"},
{id: 2298, challengeId: 766, correct: false, text: "Tomorrow na"},

{id: 2299, challengeId: 767, correct: true, text: "How you dey", audioSrc: "m2-l2-q8-pg.mp3"},
{id: 2300, challengeId: 767, correct: false, text: "Good morning oooo"},
{id: 2301, challengeId: 767, correct: false, text: "You dey welcome oooo"},

{id: 2302, challengeId: 768, correct: false, text: "Tomorrow na"},
{id: 2303, challengeId: 768, correct: false, text: "Na you ?"},
{id: 2304, challengeId: 768, correct: true, text: "You do well", audioSrc: "m2-l2-q9-pg.mp3"},

{id: 2305, challengeId: 769, correct: true, text: "Bye bye", audioSrc: "m2-l2-q10-pg.mp3"},
{id: 2306, challengeId: 769, correct: false, text: "Sleep oooo"},
{id: 2307, challengeId: 769, correct: false, text: "You do wel"},

{id: 2308, challengeId: 770, correct: false, text: "Tomorrow na"},
{id: 2309, challengeId: 770, correct: true, text: "Welcome ooo", audioSrc: "m2-l2-q11-pg.mp3"},
{id: 2310, challengeId: 770, correct: false, text: "You do wel"},

{id: 2311, challengeId: 771, correct: false, text: "Night oooo"},
{id: 2312, challengeId: 771, correct: true, text: "Na you?", audioSrc: "m2-l2-q12-pg.mp3"},
{id: 2313, challengeId: 771, correct: false, text: "Bye bye"},

{id: 2314, challengeId: 772, correct: false, text: "Welcome oooo"},
{id: 2315, challengeId: 772, correct: false, text: "Sleep ooo"},
{id: 2316, challengeId: 772, correct: true, text: "You do well", audioSrc: "m2-l2-q13-pg.mp3"},

{id: 2317, challengeId: 773, correct: false, text: "Welcome oooo"},
{id: 2318, challengeId: 773, correct: true, text: "Tomorrow oooo", audioSrc: "m2-l2-q14-pg.mp3"},
{id: 2319, challengeId: 773, correct: false, text: "You do wel"},

{id: 2320, challengeId: 774, correct: true, text: "Sleep oooo", audioSrc: "m2-l2-q15-pg.mp3"},
{id: 2321, challengeId: 774, correct: false, text: "Paul, Good evening oooo"},
{id: 2322, challengeId: 774, correct: false, text: "You oooo"},

{id: 2323, challengeId: 775, correct: true, text: "Paul, good morning ooo", audioSrc: "m2-l3-q1-pg.mp3"},
{id: 2324, challengeId: 775, correct: false, text: "How far Paul, how you dey?"},
{id: 2325, challengeId: 775, correct: false, text: "I go see you soon"},

{id: 2326, challengeId: 776, correct: false, text: "I dey fine wel wel oooo"},
{id: 2327, challengeId: 776, correct: true, text: "ok na, we go see tomorrow", audioSrc: "m2-l3-q2-pg.mp3"},
{id: 2328, challengeId: 776, correct: false, text: "Na so, you do wel"},

{id: 2329, challengeId: 777, correct: true, text: "I go see you soon", audioSrc: "m2-l3-q3-pg.mp3"},
{id: 2330, challengeId: 777, correct: false, text: "You sleep well?"},
{id: 2331, challengeId: 777, correct: false, text: "Good afternoon oooo"},

{id: 2332, challengeId: 778, correct: true, text: "Bye bye, see you tomorrow", audioSrc: "m2-l3-q4-pg.mp3"},
{id: 2333, challengeId: 778, correct: false, text: "I dey fine wel wel"},
{id: 2334, challengeId: 778, correct: false, text: "Good afternoon oooo"},

{id: 2335, challengeId: 779, correct: false, text: "Good afternoon oooo"},
{id: 2336, challengeId: 779, correct: false, text: "Na so, you do well"},
{id: 2337, challengeId: 779, correct: true, text: "How far", audioSrc: "m2-l3-q5-pg.mp3"},

{id: 2338, challengeId: 780, correct: true, text: "How you dey na", audioSrc: "m2-l3-q6-pg.mp3"},
{id: 2339, challengeId: 780, correct: false, text: "You sleep wel"},
{id: 2340, challengeId: 780, correct: false, text: "How far Paul, how you dey ?"},

{id: 2341, challengeId: 781, correct: true, text: "Good afternoon oooo", audioSrc: "m2-l3-q7-pg.mp3"},
{id: 2342, challengeId: 781, correct: false, text: "Good night oooo"},
{id: 2343, challengeId: 781, correct: false, text: "I go see you soon"},

{id: 2344, challengeId: 782, correct: false, text: "Na so"},
{id: 2345, challengeId: 782, correct: true, text: "You do wel", audioSrc: "m2-l3-q8-pg.mp3"},
{id: 2346, challengeId: 782, correct: false, text: "ok na, I go see you tomorrow"},

{id: 2347, challengeId: 783, correct: false, text: "How you dey"},
{id: 2348, challengeId: 783, correct: true, text: "You sleep wel?", audioSrc: "m2-l3-q9-pg.mp3"},
{id: 2349, challengeId: 783, correct: false, text: "How far Paul, how you dey?"},

{id: 2350, challengeId: 784, correct: false, text: "ok na, I go see you tomorrow"},
{id: 2351, challengeId: 784, correct: true, text: "Goodnight ooo", audioSrc: "m2-l3-q10-pg.mp3"},
{id: 2352, challengeId: 784, correct: false, text: "I go see you soon"},

{id: 2353, challengeId: 785, correct: true, text: "I dey fine oooo", audioSrc: "m2-l3-q11-pg.mp3"},
{id: 2354, challengeId: 785, correct: false, text: "You do wel"},
{id: 2355, challengeId: 785, correct: false, text: "How you dey?"},

{id: 2356, challengeId: 786, correct: false, text: "Na so, you do wel"},
{id: 2357, challengeId: 786, correct: true, text: "Na so", audioSrc: "m2-l3-q12-pg.mp3"},
{id: 2358, challengeId: 786, correct: false, text: "I go see you soon"},

{id: 2359, challengeId: 787, correct: true, text: "How far Paul, how you dey?", audioSrc: "m2-l3-q13-pg.mp3"},
{id: 2360, challengeId: 787, correct: false, text: "How you dey na?"},
{id: 2361, challengeId: 787, correct: false, text: "You sleep wel?"},

{id: 2362, challengeId: 788, correct: false, text: "Good afternoon oooo"},
{id: 2363, challengeId: 788, correct: true, text: "Na so, you do wel", audioSrc: "m2-l3-q14-pg.mp3"},
{id: 2364, challengeId: 788, correct: false, text: "I dey fine ooo"},

{id: 2365, challengeId: 789, correct: true, text: "You sleep well?", audioSrc: "m2-l3-q15-pg.mp3"},
{id: 2366, challengeId: 789, correct: false, text: "How you dey na?"},
{id: 2367, challengeId: 789, correct: false, text: "Goodnight oooo"},

{id: 2368, challengeId: 790, correct: true, text: "How far Paul, how you dey?", audioSrc: "m2-l4-q1-pg.mp3"},
{id: 2369, challengeId: 790, correct: false, text: "Good morning oooo, how you dey?"},
{id: 2370, challengeId: 790, correct: false, text: "Good evening, ooo. How you dey oooo?"},

{id: 2371, challengeId: 791, correct: true, text: "Dey ok", audioSrc: "m2-l4-q2-pg.mp3"},
{id: 2372, challengeId: 791, correct: false, text: "Abi Paul, you nko?"},
{id: 2373, challengeId: 791, correct: false, text: "You do wel"},

{id: 2374, challengeId: 792, correct: true, text: "Good morning ooo. How you dey na?", audioSrc: "m2-l4-q3-pg.mp3"},
{id: 2375, challengeId: 792, correct: false, text: "I dey fine wel wel"},
{id: 2376, challengeId: 792, correct: false, text: "Abi Paul, you nko?"},

{id: 2377, challengeId: 793, correct: true, text: "I dey fine ooo, you nko?", audioSrc: "m2-l4-q4-pg.mp3"},
{id: 2378, challengeId: 793, correct: false, text: "I dey fine wel wel ooo, you do wel"},
{id: 2379, challengeId: 793, correct: false, text: "Good evening oooo. How you dey?"},

{id: 2380, challengeId: 794, correct: true, text: "Good evening oooo. How you dey", audioSrc: "m2-l4-q5-pg.mp3"},
{id: 2381, challengeId: 794, correct: false, text: "How far, how u dey?"},
{id: 2382, challengeId: 794, correct: false, text: "Bye bye"},

{id: 2383, challengeId: 795, correct: true, text: "Abi Paul, you nko?", audioSrc: "m2-l4-q6-pg.mp3"},
{id: 2384, challengeId: 795, correct: false, text: "Abi Paul"},
{id: 2385, challengeId: 795, correct: false, text: "Good morning oooo. How you dey?"},

{id: 2386, challengeId: 796, correct: true, text: "How far, how you dey", audioSrc: "m2-l4-q7-pg.mp3"},
{id: 2387, challengeId: 796, correct: false, text: "Dey ok"},
{id: 2388, challengeId: 796, correct: false, text: "I dey fine oooo"},

{id: 2389, challengeId: 797, correct: true, text: "I dey fine, you do wel", audioSrc: "m2-l4-q8-pg.mp3"},
{id: 2390, challengeId: 797, correct: false, text: "Abi Paul you nko?"},
{id: 2391, challengeId: 797, correct: false, text: "I dey fine, wel wel"},

{id: 2392, challengeId: 798, correct: true, text: "I dey fine wel wel", audioSrc: "m2-l4-q9-pg.mp3"},
{id: 2393, challengeId: 798, correct: false, text: "Abi Paul"},
{id: 2394, challengeId: 798, correct: false, text: "Dey ok"},

{id: 2395, challengeId: 799, correct: true, text: "How you dey", audioSrc: "m2-l4-q10-pg.mp3"},
{id: 2396, challengeId: 799, correct: false, text: "Dey ok"},
{id: 2397, challengeId: 799, correct: false, text: "You do wel"},

{id: 2398, challengeId: 800, correct: true, text: "Good evening ooo, I mis you, ooo", audioSrc: "m2-l4-q11-pg.mp3"},
{id: 2399, challengeId: 800, correct: false, text: "Good evening, how you dey"},
{id: 2400, challengeId: 800, correct: false, text: "Good afternoon"},

{id: 2401, challengeId: 801, correct: true, text: "Dey, ok", audioSrc: "m2-l4-q12-pg.mp3"},
{id: 2402, challengeId: 801, correct: false, text: "Bye bye"},
{id: 2403, challengeId: 801, correct: false, text: "Good evening. I mis you"},

{id: 2404, challengeId: 802, correct: true, text: "Abi your friend", audioSrc: "m2-l4-q13-pg.mp3"},
{id: 2405, challengeId: 802, correct: false, text: "Abi Paul"},
{id: 2406, challengeId: 802, correct: false, text: "Bye bye"},

{id: 2407, challengeId: 803, correct: true, text: "Bye bye", audioSrc: "m2-l4-q14-pg.mp3"},
{id: 2408, challengeId: 803, correct: false, text: "You do wel"},
{id: 2409, challengeId: 803, correct: false, text: "Dey ok"},

{id: 2410, challengeId: 804, correct: true, text: "Abi Paul", audioSrc: "m2-l4-q15-pg.mp3"},
{id: 2411, challengeId: 804, correct: false, text: "Abi your friend"},
{id: 2412, challengeId: 804, correct: false, text: "Abi Paul, who you be?"},

{id: 2413, challengeId: 805, correct: true, text: "Better evening ooo", audioSrc: "m2-l5-q1-pg.mp3"},
{id: 2414, challengeId: 805, correct: false, text: "Na so, you nko"},
{id: 2415, challengeId: 805, correct: false, text: "You don wake?"},

{id: 2416, challengeId: 806, correct: false, text: "Na so, you nko?"},
{id: 2417, challengeId: 806, correct: true, text: "Na so, I dey fine", audioSrc: "m2-l5-q2-pg.mp3"},
{id: 2418, challengeId: 806, correct: false, text: "Na so, I go travel with plane"},

{id: 2419, challengeId: 807, correct: true, text: "Na so, you nko", audioSrc: "m2-l5-q3-pg.mp3"},
{id: 2420, challengeId: 807, correct: false, text: "You don wake"},
{id: 2421, challengeId: 807, correct: false, text: "Welcome oooo"},

{id: 2422, challengeId: 808, correct: false, text: "I go see you soon"},
{id: 2423, challengeId: 808, correct: false, text: "Welcome oooo"},
{id: 2424, challengeId: 808, correct: true, text: "You sleep wel", audioSrc: "m2-l5-q4-pg.mp3"},

{id: 2425, challengeId: 809, correct: true, text: "You don wake", audioSrc: "m2-l5-q5-pg.mp3"},
{id: 2426, challengeId: 809, correct: false, text: "How your day dey go now"},
{id: 2427, challengeId: 809, correct: false, text: "You sleep well"},

{id: 2428, challengeId: 810, correct: true, text: "Welcome oooo", audioSrc: "m2-l5-q6-pg.mp3"},
{id: 2429, challengeId: 810, correct: false, text: "Thank God oooo"},
{id: 2430, challengeId: 810, correct: false, text: "I dey drive motor"},

{id: 2431, challengeId: 811, correct: true, text: "We go see soon", audioSrc: "m2-l5-q7-pg.mp3"},
{id: 2432, challengeId: 811, correct: false, text: "Na so, I gi travel with plane"},
{id: 2433, challengeId: 811, correct: false, text: "Enjoy your night oooo"},


{id: 2434, challengeId: 812, correct: false, text: "I dey drive motor"},
{id: 2435, challengeId: 812, correct: true, text: "Na so, I go travel with plane", audioSrc: "m2-l5-q8-pg.mp3"},
{id: 2436, challengeId: 812, correct: false, text: "Thank God ooo"},


{id: 2437, challengeId: 813, correct: false, text: "How your day dey go na"},
{id: 2438, challengeId: 813, correct: false, text: "Wnjoy your sleep ooo"},
{id: 2439, challengeId: 813, correct: true, text: "You just dey wake", audioSrc: "m2-l5-q9-pg.mp3"},

{id: 2440, challengeId: 814, correct: true, text: "I dey sorry", audioSrc: "m2-l5-q10-pg.mp3"},
{id: 2441, challengeId: 814, correct: false, text: "We go see soon"},
{id: 2442, challengeId: 814, correct: false, text: "Thank God ooo"},

{id: 2443, challengeId: 815, correct: true, text: "I dey wait for you ooo", audioSrc: "m2-l5-q11-pg.mp3"},
{id: 2444, challengeId: 815, correct: false, text: "Enjoy your sleep, ooo"},
{id: 2445, challengeId: 815, correct: false, text: "I dey drive motor"},

{id: 2446, challengeId: 816, correct: false, text: "Na so, welcome oooo"},
{id: 2447, challengeId: 816, correct: false, text: "Na so, I go travel with plane"},
{id: 2448, challengeId: 816, correct: true, text: "Enjoy your sleep ooo", audioSrc: "m2-l5-q12-pg.mp3"},

{id: 2449, challengeId: 817, correct: true, text: "I dey drive motor", audioSrc: "m2-l5-q13-pg.mp3"},
{id: 2450, challengeId: 817, correct: false, text: "Make your evening sweet ooo"},
{id: 2451, challengeId: 817, correct: false, text: "You do wake"},

{id: 2452, challengeId: 818, correct: true, text: "How your day dey go", audioSrc: "m2-l5-q14-pg.mp3"},
{id: 2453, challengeId: 818, correct: false, text: "You don wake"},
{id: 2454, challengeId: 818, correct: false, text: "You sleep wel"},

{id: 2455, challengeId: 819, correct: false, text: "Better evening ooo"},
{id: 2456, challengeId: 819, correct: false, text: "We go see soon"},
{id: 2457, challengeId: 819, correct: true, text: "Thank God oooo", audioSrc: "m2-l5-q15-pg.mp3"},

{id: 2458, challengeId: 820, correct: true, text: "I sabi speak pidgin", audioSrc: "m-l1-q1-pg.mp3"},
{id: 2459, challengeId: 820, correct: false, text: "Abeg ooo you sabi speak pidgin"},
{id: 2460, challengeId: 820, correct: false, text: "You be Delta person"},

{id: 2461, challengeId: 821, correct: false, text: "You be Delta person"},
{id: 2462, challengeId: 821, correct: false, text: "I sabi speak pidgin"},
{id: 2463, challengeId: 821, correct: true, text: "Abeg ooo you sabi speak pidgin", audioSrc: "m-l1-q2-pg.mp3"},

{id: 2464, challengeId: 822, correct: false, text: "You be Delta person"},
{id: 2465, challengeId: 822, correct: false, text: "I be Nigerian ooo"},
{id: 2466, challengeId: 822, correct: true, text: "No ooo i be Delta person", audioSrc: "m-l1-q3-pg.mp3"},

{id: 2467, challengeId: 823, correct: false, text: "Wetin be your name"},
{id: 2468, challengeId: 823, correct: false, text: "Where i fit get cab"},
{id: 2469, challengeId: 823, correct: true, text: "I need cab ooo", audioSrc: "m-l1-q4-pg.mp3"},

{id: 2470, challengeId: 824, correct: true, text: "Where i fit get cab", audioSrc: "m-l1-q5-pg.mp3"},
{id: 2471, challengeId: 824, correct: false, text: "I need cab ooo"},
{id: 2472, challengeId: 824, correct: false, text: "I dey stay for that hotel"},

{id: 2473, challengeId: 825, correct: true, text: "I be Nigerian ooo", audioSrc: "m-l1-q6-pg.mp3"},
{id: 2474, challengeId: 825, correct: false, text: "I go stay one week"},
{id: 2475, challengeId: 825, correct: false, text: "I dey alone"},

{id: 2476, challengeId: 826, correct: true, text: "Wetin be your name", audioSrc: "m-l1-q7-pg.mp3"},
{id: 2477, challengeId: 826, correct: false, text: "You be Delta person"},
{id: 2478, challengeId: 826, correct: false, text: "My name na Ejiro"},

{id: 2479, challengeId: 827, correct: true, text: "Na Caro be her name", audioSrc: "m-l1-q8-pg.mp3"},
{id: 2480, challengeId: 827, correct: false, text: "Na me and my family come ooo"},
{id: 2481, challengeId: 827, correct: false, text: "I won go stay Nigeria small"},

{id: 2482, challengeId: 828, correct: true, text: "You be Delta person", audioSrc: "m-l1-q9-pg.mp3"},
{id: 2483, challengeId: 828, correct: false, text: "No abi Delta person"},
{id: 2484, challengeId: 828, correct: false, text: "Abi Nigerian"},

{id: 2485, challengeId: 829, correct: true, text: "My name na Ejiro", audioSrc: "m-l1-q10-pg.mp3"},
{id: 2486, challengeId: 829, correct: false, text: "Wetin be your name"},
{id: 2487, challengeId: 829, correct: false, text: "I go stay one week"},

{id: 2488, challengeId: 830, correct: true, text: "No abi Delta person", audioSrc: "m-l1-q11-pg.mp3"},
{id: 2489, challengeId: 830, correct: false, text: "Abi Nigerian"},
{id: 2490, challengeId: 830, correct: false, text: "You be Delta p3"},

{id: 2491, challengeId: 831, correct: true, text: "I won go stay Nigeria small", audioSrc: "m-l1-q12-pg.mp3"},
{id: 2492, challengeId: 831, correct: false, text: "Na me and my family come ooo"},
{id: 2493, challengeId: 831, correct: false, text: "I dey alone"},

{id: 2494, challengeId: 832, correct: true, text: "I go stay one week", audioSrc: "m-l1-q13-pg.mp3"},
{id: 2495, challengeId: 832, correct: false, text: "Wetin be your name"},
{id: 2496, challengeId: 832, correct: false, text: "I need cab ooo"},

{id: 2497, challengeId: 833, correct: true, text: "Na hotel i dey stay", audioSrc: "m-l1-q14-pg.mp3"},
{id: 2498, challengeId: 833, correct: false, text: "I dey alone"},
{id: 2499, challengeId: 833, correct: false, text: "I won go stay Nigeria small"},

{id: 2500, challengeId: 834, correct: true, text: "I dey alone", audioSrc: "m-l1-q15-pg.mp3"},
{id: 2501, challengeId: 834, correct: false, text: "Na me and my family come ooo"},
{id: 2502, challengeId: 834, correct: false, text: "I won go stay Nigeria small"},

{id: 2503, challengeId: 835, correct: true, text: "Which kind work you dey do self", audioSrc: "m-l2-q1-pg.mp3"},
{id: 2504, challengeId: 835, correct: false, text: "You get pikin"},
{id: 2505, challengeId: 835, correct: false, text: "I dey enjoy this travel ooo"},

{id: 2506, challengeId: 836, correct: false, text: "I dey abi say i dey here"},
{id: 2507, challengeId: 836, correct: false, text: "Where be the film house"},
{id: 2508, challengeId: 836, correct: true, text: "Where you come from", audioSrc: "m1-l2-q2-pg.mp3"},

{id: 2509, challengeId: 837, correct: true, text: "You get pikin", audioSrc: "m3-l2-q3-pg.mp3"},
{id: 2510, challengeId: 837, correct: false, text: "Come make we chop"},
{id: 2511, challengeId: 837, correct: false, text: "You don travel to Nigeria before"},

{id: 2512, challengeId: 838, correct: true, text: "You don travel to Nigeria before", audioSrc: "m3-l2-q4-pg.mp3"},
{id: 2513, challengeId: 838, correct: false, text: "I won go see beach ooo"},
{id: 2514, challengeId: 838, correct: false, text: "Come make we chop"},

{id: 2515, challengeId: 839, correct: true, text: "I dey enjoy this travel ooo", audioSrc: "m3-l2-q5-pg.mp3"},
{id: 2516, challengeId: 839, correct: false, text: "Abeg come my house"},
{id: 2517, challengeId: 839, correct: false, text: "You get pikin"},

{id: 2518, challengeId: 840, correct: true, text: "I won go see beach ooo", audioSrc: "m3-l2-q6-pg.mp3"},
{id: 2519, challengeId: 840, correct: false, text: "Come make we chop"},
{id: 2520, challengeId: 840, correct: false, text: "You don travel to Nigeria before"},

{id: 2521, challengeId: 841, correct: true, text: "Abeg come my house", audioSrc: "m3-l2-q7-pg.mp3"},
{id: 2522, challengeId: 841, correct: false, text: "My wife na Nigerian"},
{id: 2523, challengeId: 841, correct: false, text: "Abeg greet your family ooo"},

{id: 2524, challengeId: 842, correct: true, text: "My wife na Nigerian", audioSrc: "m3-l2-q8-pg.mp3"},
{id: 2525, challengeId: 842, correct: false, text: "Abeg come my house"},
{id: 2526, challengeId: 842, correct: false, text: "Abeg greet your family ooo"},

{id: 2527, challengeId: 843, correct: true, text: "Abeg greet your family ooo", audioSrc: "m3-l2-q9-pg.mp3"},
{id: 2528, challengeId: 843, correct: false, text: "Abeg make i see you ooo"},
{id: 2529, challengeId: 843, correct: false, text: "Come make we chop"},

{id: 2530, challengeId: 844, correct: true, text: "I won go see una market", audioSrc: "m3-l2-q10-pg.mp3"},
{id: 2531, challengeId: 844, correct: false, text: "Abeg greet your family ooo"},
{id: 2532, challengeId: 844, correct: false, text: "Come make we chop"},

{id: 2533, challengeId: 845, correct: true, text: "Where be the film house", audioSrc: "m3-l2-q11-pg.mp3"},
{id: 2534, challengeId: 845, correct: false, text: "I dey tire ooo"},
{id: 2535, challengeId: 845, correct: false, text: "I dey happy to come here"},

{id: 2536, challengeId: 846, correct: true, text: "Abeg make i see you", audioSrc: "m3-l2-q12-pg.mp3"},
{id: 2537, challengeId: 846, correct: false, text: "Abeg greet your family ooo"},
{id: 2538, challengeId: 846, correct: false, text: "Come make we chop"},

{id: 2539, challengeId: 847, correct: true, text: "Come make we chop", audioSrc: "m3-l2-q13-pg.mp3"},
{id: 2540, challengeId: 847, correct: false, text: "I won go see una market"},
{id: 2541, challengeId: 847, correct: false, text: "Abeg greet your family ooo"},

{id: 2542, challengeId: 848, correct: true, text: "I dey tire ooo", audioSrc: "m3-l2-q14-pg.mp3"},
{id: 2543, challengeId: 848, correct: false, text: "Where be the film house"},
{id: 2544, challengeId: 848, correct: false, text: "I dey happy say i dey here"},

{id: 2545, challengeId: 849, correct: true, text: "I dey happy say i dey here", audioSrc: "m3-l2-q15-pg.mp3"},
{id: 2546, challengeId: 849, correct: false, text: "Abeg make i see you ooo"},
{id: 2547, challengeId: 849, correct: false, text: "Abeg come my house"},

{id: 2548, challengeId: 850, correct: true, text: "Aunty dey church", audioSrc: "m3-l3-q1-pg.mp3"},
{id: 2549, challengeId: 850, correct: false, text: "Na wa ooo my name na Akpos"},
{id: 2550, challengeId: 850, correct: false, text: "I dey speak pidgin and isoko"},

{id: 2551, challengeId: 851, correct: true, text: "I go market", audioSrc: "m3-l3-q2-pg.mp3"},
{id: 2552, challengeId: 851, correct: false, text: "Caro dey speak pidgin and isoko"},
{id: 2553, challengeId: 851, correct: false, text: "My husband don comot"},

{id: 2554, challengeId: 852, correct: true, text: "I dey speak pidgin and isoko", audioSrc: "m3-l3-q3-pg.mp3"},
{id: 2555, challengeId: 852, correct: false, text: "You dey speak pidgin"},
{id: 2556, challengeId: 852, correct: false, text: "My husband don comot"},

{id: 2557, challengeId: 853, correct: true, text: "Na wa ooo my name na Akpos", audioSrc: "m3-l3-q4-pg.mp3"},
{id: 2558, challengeId: 853, correct: false, text: "My girl pikin na teacher"},
{id: 2559, challengeId: 853, correct: false, text: "Him boy pikin na police ooo"},

{id: 2560, challengeId: 854, correct: true, text: "Caro dey speak Pidgin and Isoko", audioSrc: "m3-l3-q5-pg.mp3"},
{id: 2561, challengeId: 854, correct: false, text: "You sabi speak pidgin"},
{id: 2562, challengeId: 854, correct: false, text: "My husband don comot"},

{id: 2563, challengeId: 855, correct: true, text: "You sabi speak pidgin", audioSrc: "m3-l3-q6-pg.mp3"},
{id: 2564, challengeId: 855, correct: false, text: "She be Delta person"},
{id: 2565, challengeId: 855, correct: false, text: "Him be Delta person"},

{id: 2566, challengeId: 856, correct: true, text: "Dem dey speak pidgin", audioSrc: "m3-l3-q7-pg.mp3"},
{id: 2567, challengeId: 856, correct: false, text: "My husband don comot"},
{id: 2568, challengeId: 856, correct: false, text: "She be Delta person"},

{id: 2569, challengeId: 857, correct: true, text: "Him be Delta person", audioSrc: "m3-l3-q8-pg.mp3"},
{id: 2570, challengeId: 857, correct: false, text: "She be Delta person"},
{id: 2571, challengeId: 857, correct: false, text: "You sabi speak pidgin"},

{id: 2572, challengeId: 858, correct: true, text: "She be Delta person", audioSrc: "m3-l3-q9-pg.mp3"},
{id: 2573, challengeId: 858, correct: false, text: "Him na Delta person"},
{id: 2574, challengeId: 858, correct: false, text: "You sabi speak pidgin"},

{id: 2575, challengeId: 859, correct: true, text: "My husband don comot", audioSrc: "m3-l3-q10-pg.mp3"},
{id: 2576, challengeId: 859, correct: false, text: "I sabi speak pidgin and isoko"},
{id: 2577, challengeId: 859, correct: false, text: "You sabi speak pidgin"},

{id: 2578, challengeId: 860, correct: true, text: "Her girl pikin na teacher", audioSrc: "m3-l3-q11-pg.mp3"},
{id: 2579, challengeId: 860, correct: false, text: "Abeg greet your family ooo"},
{id: 2580, challengeId: 860, correct: false, text: "Him boy pikin na police ooo"},

{id: 2581, challengeId: 861, correct: true, text: "Him boy pikin na police ooo", audioSrc: "m3-l3-q12-pg.mp3"},
{id: 2582, challengeId: 861, correct: false, text: "Abeg greet your family ooo"},
{id: 2583, challengeId: 861, correct: false, text: "Her girl pikin na teacher"},

{id: 2584, challengeId: 862, correct: true, text: "My name na Eloho", audioSrc: "m3-l3-q13-pg.mp3"},
{id: 2585, challengeId: 862, correct: false, text: "She be Delta"},
{id: 2586, challengeId: 862, correct: false, text: "Dem dey speak pidgin"},

{id: 2587, challengeId: 863, correct: true, text: "I sabi speak pidgin and isoko", audioSrc: "m3-l3-q14-pg.mp3"},
{id: 2588, challengeId: 863, correct: false, text: "You sabi speak pidgin"},
{id: 2589, challengeId: 863, correct: false, text: "Dem dey speak pidgin"},

{id: 2590, challengeId: 864, correct: true, text: "Abeg greet your family ooo", audioSrc: "m3-l3-q15-pg.mp3"},
{id: 2591, challengeId: 864, correct: false, text: "Her girl pikin na teacher"},
{id: 2592, challengeId: 864, correct: false, text: "Him boy pikin na police ooo"},

{id: 2593, challengeId: 865, correct: true, text: "Na my house", audioSrc: "m3-l4-q1-pg.mp3"},
{id: 2594, challengeId: 865, correct: false, text: "Abeg talk to my girl pikin"},
{id: 2595, challengeId: 865, correct: false, text: "Dem many ooo"},

{id: 2596, challengeId: 866, correct: true, text: "Abeg talk to my boy pikin", audioSrc: "m3-l4-q2-pg.mp3"},
{id: 2597, challengeId: 866, correct: false, text: "Dem"},
{id: 2598, challengeId: 866, correct: false, text: "Abeg talk to my girl pikin"},

{id: 2599, challengeId: 867, correct: true, text: "Abeg talk to my girl pikin", audioSrc: "m3-l4-q3-pg.mp3"},
{id: 2600, challengeId: 867, correct: false, text: "Abeg talk to my boy pikin"},
{id: 2601, challengeId: 867, correct: false, text: "Dem"},

{id: 2602, challengeId: 868, correct: true, text: "Dem", audioSrc: "m3-l4-q4-pg.mp3"},
{id: 2603, challengeId: 868, correct: false, text: "Dem many ooo"},
{id: 2604, challengeId: 868, correct: false, text: "Him tall ooo"},

{id: 2605, challengeId: 869, correct: true, text: "Dem many ooo", audioSrc: "m3-l4-q5-pg.mp3"},
{id: 2606, challengeId: 869, correct: false, text: "She sabi cook"},
{id: 2607, challengeId: 869, correct: false, text: "She"},

{id: 2608, challengeId: 870, correct: true, text: "He", audioSrc: "m3-l4-q6-pg.mp3"},
{id: 2609, challengeId: 870, correct: false, text: "She"},
{id: 2610, challengeId: 870, correct: false, text: "Dem"},

{id: 2611, challengeId: 871, correct: true, text: "Him tall ooo", audioSrc: "m3-l4-q7-pg.mp3"},
{id: 2612, challengeId: 871, correct: false, text: "He"},
{id: 2613, challengeId: 871, correct: false, text: "Him brother fine wel wel ooo"},

{id: 2614, challengeId: 872, correct: true, text: "She", audioSrc: "m3-l4-q8-pg.mp3"},
{id: 2615, challengeId: 872, correct: false, text: "He"},
{id: 2616, challengeId: 872, correct: false, text: "Dem"},

{id: 2617, challengeId: 873, correct: true, text: "She sabi cook", audioSrc: "m3-l4-q9-pg.mp3"},
{id: 2618, challengeId: 873, correct: false, text: "Na my book"},
{id: 2619, challengeId: 873, correct: false, text: "Her sister fine wel wel ooo"},

{id: 2620, challengeId: 874, correct: true, text: "Him", audioSrc: "m3-l4-q10-pg.mp3"},
{id: 2621, challengeId: 874, correct: false, text: "My"},
{id: 2622, challengeId: 874, correct: false, text: "Her"},

{id: 2623, challengeId: 875, correct: true, text: "Him brother fine wel wel ooo", audioSrc: "m3-l4-q11-pg.mp3"},
{id: 2624, challengeId: 875, correct: false, text: "Her"},
{id: 2625, challengeId: 875, correct: false, text: "Her sister fine wel wel ooo"},

{id: 2626, challengeId: 876, correct: true, text: "Her", audioSrc: "m3-l4-q12-pg.mp3"},
{id: 2627, challengeId: 876, correct: false, text: "My"},
{id: 2628, challengeId: 876, correct: false, text: "Him"},

{id: 2629, challengeId: 877, correct: true, text: "Her sister fine wel wel ooo", audioSrc: "m3-l4-q13-pg.mp3"},
{id: 2630, challengeId: 877, correct: false, text: "Her"},
{id: 2631, challengeId: 877, correct: false, text: "Him brother fine wel wel ooo"},

{id: 2632, challengeId: 878, correct: true, text: "My", audioSrc: "m3-l4-q14-pg.mp3"},
{id: 2633, challengeId: 878, correct: false, text: "Him"},
{id: 2634, challengeId: 878, correct: false, text: "Her"},

{id: 2635, challengeId: 879, correct: true, text: "Na my book", audioSrc: "m3-l4-q15-pg.mp3"},
{id: 2636, challengeId: 879, correct: false, text: "Her sister fine wel wel ooo"},
{id: 2637, challengeId: 879, correct: false, text: "She sabi cook"},

{id: 2638, challengeId: 880, correct: true, text: "We ooo", audioSrc: "m3-l5-q1-pg.mp3"},
{id: 2639, challengeId: 880, correct: false, text: "We don come back"},
{id: 2640, challengeId: 880, correct: false, text: "See my friend ooo"},

{id: 2641, challengeId: 881, correct: true, text: "We don come back", audioSrc: "m3-l5-q2-pg.mp3"},
{id: 2642, challengeId: 881, correct: false, text: "We ooo"},
{id: 2643, challengeId: 881, correct: false, text: "See my friend ooo"},

{id: 2644, challengeId: 882, correct: true, text: "Us", audioSrc: "m3-l5-q3-pg.mp3"},
{id: 2645, challengeId: 882, correct: false, text: "Come join us ooo"},
{id: 2646, challengeId: 882, correct: false, text: "Abeg talk to me"},

{id: 2647, challengeId: 883, correct: true, text: "Come join us ooo", audioSrc: "m3-l5-q4-pg.mp3"},
{id: 2648, challengeId: 883, correct: false, text: "Wetin you be"},
{id: 2649, challengeId: 883, correct: false, text: "Abeg talk to me"},

{id: 2650, challengeId: 884, correct: true, text: "See my friend", audioSrc: "m3-l5-q5-pg.mp3"},
{id: 2651, challengeId: 884, correct: false, text: "You and me"},
{id: 2652, challengeId: 884, correct: false, text: "You and me for live"},

{id: 2653, challengeId: 885, correct: true, text: "You", audioSrc: "m3-l5-q6-pg.mp3"},
{id: 2654, challengeId: 885, correct: false, text: "Na me get dem ooo"},
{id: 2655, challengeId: 885, correct: false, text: "Who you be"},

{id: 2656, challengeId: 886, correct: true, text: "Who you be", audioSrc: "m3-l5-q7-pg.mp3"},
{id: 2657, challengeId: 886, correct: false, text: "You and me"},
{id: 2658, challengeId: 886, correct: false, text: "You and me for live"},

{id: 2659, challengeId: 887, correct: true, text: "Dem", audioSrc: "m3-l5-q8-pg.mp3"},
{id: 2660, challengeId: 887, correct: false, text: "Na me get dem ooo"},
{id: 2661, challengeId: 887, correct: false, text: "Na my own"},

{id: 2662, challengeId: 888, correct: true, text: "Who dem be", audioSrc: "m3-l5-q9-pg.mp3"},
{id: 2663, challengeId: 888, correct: false, text: "Wetin you be"},
{id: 2664, challengeId: 888, correct: false, text: "Who you be"},

{id: 2665, challengeId: 889, correct: true, text: "Na my own", audioSrc: "m3-l5-q10-pg.mp3"},
{id: 2666, challengeId: 889, correct: false, text: "Na me get dem ooo"},
{id: 2667, challengeId: 889, correct: false, text: "Dem"},

{id: 2668, challengeId: 890, correct: true, text: "Na me get dem ooo", audioSrc: "m3-l5-q11-pg.mp3"},
{id: 2669, challengeId: 890, correct: false, text: "Dem"},
{id: 2670, challengeId: 890, correct: false, text: "Na my own"},

{id: 2671, challengeId: 891, correct: true, text: "Me", audioSrc: "m3-l5-q12-pg.mp3"},
{id: 2672, challengeId: 891, correct: false, text: "Come join us na"},
{id: 2673, challengeId: 891, correct: false, text: "Talk to me na"},

{id: 2674, challengeId: 892, correct: true, text: "Talk to me na", audioSrc: "m3-l5-q13-pg.mp3"},
{id: 2675, challengeId: 892, correct: false, text: "Me"},
{id: 2676, challengeId: 892, correct: false, text: "We don come back"},

{id: 2677, challengeId: 893, correct: true, text: "You and me", audioSrc: "m3-l5-q14-pg.mp3"},
{id: 2678, challengeId: 893, correct: false, text: "You and me for live"},
{id: 2679, challengeId: 893, correct: false, text: "See my friend"},

{id: 2680, challengeId: 894, correct: true, text: "You and me for life", audioSrc: "m3-l5-q15-pg.mp3"},
{id: 2681, challengeId: 894, correct: false, text: "You and me"},
{id: 2682, challengeId: 894, correct: false, text: "Come stay with us"},
 ]);

 

console.log ("Seeding finished");
} catch (error) {
console.error(error);
throw new Error("Failed to seed the database");
}
};

main();