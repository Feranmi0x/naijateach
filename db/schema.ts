import { relations } from "drizzle-orm";
import { pgTable, serial, text, integer, pgEnum, boolean, timestamp } from "drizzle-orm/pg-core";

export const genders = pgTable("genders", {
  id: serial("id").primaryKey(),
  english: text("english").notNull(),
  hausa: text("hausa").notNull(), 
  audioPath: text("audio_path").notNull(),
});

export const numbers = pgTable("numbers", {
  id: serial("id").primaryKey(),
  english: text("english").notNull(),
  hausa: text("hausa").notNull(),
  audioPath: text("audio_path").notNull(), // File path to the audio file
});

export const pronouns = pgTable("pronouns", {
  id: serial("id").primaryKey(),
  english: text("english").notNull(),
  hausa: text("hausa").notNull(),
  audioPath: text("audio_path").notNull(), // File path to the audio file
});

export const slangs = pgTable("slangs", {
   id: serial("id").primaryKey(),
   english: text("english").notNull(),
   hausa: text("hausa").notNull(),
   audioPath: text("audio_path").notNull(), // File path to the audio file
 });
 
 export const commonExp = pgTable("commonExp", {
   id: serial("id").primaryKey(),
   english: text("english").notNull(),
   hausa: text("hausa").notNull(),
   audioPath: text("audio_path").notNull(), // File path to the audio file
 });
export const relatives = pgTable("relatives", {
   id: serial("id").primaryKey(),
   english: text("english").notNull(),
   hausa: text("hausa").notNull(),
   audioPath: text("audio_path").notNull(), // File path to the audio file
 });
 
 export const body = pgTable("body", {
   id: serial("id").primaryKey(),
   english: text("english").notNull(),
   hausa: text("hausa").notNull(),
   audioPath: text("audio_path").notNull(), // File path to the audio file
 });

export const iggenders = pgTable("iggenders", {
  id: serial("id").primaryKey(),
  english: text("english").notNull(),
  igbo: text("igbo").notNull(), 
  audioPath: text("audio_path").notNull(),
});

export const ignumbers = pgTable("ignumbers", {
  id: serial("id").primaryKey(),
  english: text("english").notNull(),
  igbo: text("igbo").notNull(),
  audioPath: text("audio_path").notNull(), // File path to the audio file
});

export const igpronouns = pgTable("igpronouns", {
  id: serial("id").primaryKey(),
  english: text("english").notNull(),
  igbo: text("igbo").notNull(),
  audioPath: text("audio_path").notNull(), // File path to the audio file
});

export const igslangs = pgTable("igslangs", {
  id: serial("id").primaryKey(),
  english: text("english").notNull(),
  igbo: text("igbo").notNull(),
  audioPath: text("audio_path").notNull(), // File path to the audio file
});

export const igcommonExp = pgTable("igcommonExp", {
  id: serial("id").primaryKey(),
  english: text("english").notNull(),
  igbo: text("igbo").notNull(),
  audioPath: text("audio_path").notNull(), // File path to the audio file
});

export const igrelatives = pgTable("igrelatives", {
  id: serial("id").primaryKey(),
  english: text("english").notNull(),
  igbo: text("igbo").notNull(),
  audioPath: text("audio_path").notNull(), // File path to the audio file
});

export const igbody = pgTable("igbody", {
  id: serial("id").primaryKey(),
  english: text("english").notNull(),
  igbo: text("igbo").notNull(),
  audioPath: text("audio_path").notNull(), // File path to the audio file
});

export const yrgenders = pgTable("yrgenders", {
  id: serial("id").primaryKey(),
  english: text("english").notNull(),
  yoruba: text("yoruba").notNull(), 
  audioPath: text("audio_path").notNull(),
});

export const yrnumbers = pgTable("yrnumbers", {
  id: serial("id").primaryKey(),
  english: text("english").notNull(),
  yoruba: text("yoruba").notNull(),
  audioPath: text("audio_path").notNull(), // File path to the audio file
});

export const yrpronouns = pgTable("yrpronouns", {
  id: serial("id").primaryKey(),
  english: text("english").notNull(),
  yoruba: text("yoruba").notNull(),
  audioPath: text("audio_path").notNull(), // File path to the audio file
});

export const yrslangs = pgTable("yrslangs", {
  id: serial("id").primaryKey(),
  english: text("english").notNull(),
  yoruba: text("yoruba").notNull(),
  audioPath: text("audio_path").notNull(), // File path to the audio file
});

export const yrcommonExp = pgTable("yrcommonExp", {
  id: serial("id").primaryKey(),
  english: text("english").notNull(),
  yoruba: text("yoruba").notNull(),
  audioPath: text("audio_path").notNull(), // File path to the audio file
});
export const yrrelatives = pgTable("yrrelatives", {
  id: serial("id").primaryKey(),
  english: text("english").notNull(),
  yoruba: text("yoruba").notNull(),
  audioPath: text("audio_path").notNull(), // File path to the audio file
});

export const yrbody = pgTable("yrbody", {
  id: serial("id").primaryKey(),
  english: text("english").notNull(),
  yoruba: text("yoruba").notNull(),
  audioPath: text("audio_path").notNull(), // File path to the audio file
});

export const YorubaDictionary = pgTable('Yoruba_Dictionary', {
  id: serial('id').primaryKey(),
  word: text('word').notNull(),
  both: text('word').notNull(),
  meaning: text('meaning').notNull(),
  synonyms: text('synonyms'),
  homonyms: text('homonyms'),
  audio: text('audio'),
});

export const IgboDictionary = pgTable('Igbo_Dictionary', {
  id: serial('id').primaryKey(),
  word: text('word').notNull(),
  both: text('word').notNull(),
  meaning: text('meaning').notNull(),
  synonyms: text('synonyms'),
  homonyms: text('homonyms'),
  audio: text('audio'),
});

export const HausaDictionary = pgTable('Hausa_Dictionary', {
  id: serial('id').primaryKey(),
  word: text('word').notNull(),
  both: text('word').notNull(),
  meaning: text('meaning').notNull(),
  synonyms: text('synonyms'),
  homonyms: text('homonyms'),
  audio: text('audio'),
});

export const PidginDictionary = pgTable('Pidgin_Dictionary', {
  id: serial('id').primaryKey(),
  word: text('word').notNull(),
  both: text('word').notNull(),
  meaning: text('meaning').notNull(),
  synonyms: text('synonyms'),
  homonyms: text('homonyms'),
  audio: text('audio'),
});

export const courses = pgTable("course", {
   id: serial("id").primaryKey(),
   title: text("title").notNull(),
   imageSrc: text("image_src").notNull(),
});

export const coursesRelations = relations(courses, ({ many }) => ({
   userProgress: many(userProgress),
   units: many(units),
}));

export const units = pgTable("units", {
   id: serial("id").primaryKey(), 
   title: text("title").notNull(),
   description: text("description").notNull(),
   courseId: integer("course_id").references(() => courses.id, { onDelete: "cascade" }).notNull(),
   order: integer("order").notNull(), 
});

export const unitRelations = relations(units, ({ many, one }) => ({
   course: one(courses, {
   fields: [units.courseId], 
   references: [courses.id],
   }),
   lessons: many(lessons),
}));

export const lessons = pgTable("lessons", {
   id: serial("id").primaryKey(), 
   title: text("title").notNull(),
   unitId: integer("unit_id").references(() => units.id, { onDelete: "cascade" }).notNull(),
   order: integer("order").notNull(),
});


export const lessonsRelations = relations (lessons, ({ one, many }) => ({
   unit: one(units, {
   fields: [lessons.unitId], 
   references: [units.id],
   }),
   challenges: many(challenges),
}));

export const challengesEnum = pgEnum("type", ["SELECT", "ASSIST"]);

export const challenges = pgTable("challenges", {
id: serial("id").primaryKey(),
lessonId: integer("lesson_id").references(() => lessons.id, { onDelete: "cascade" }).notNull(),
type: challengesEnum("type").notNull(),
animation: text("animation"),
question: text("question").notNull(), 
order: integer("order").notNull(),
});

export const challengesRelations = relations (challenges, ({ one, many }) => ({
   lesson: one(lessons, {
   fields: [challenges.lessonId], 
   references: [lessons.id],
   }), 
   challengeOptions: many(challengeOptions),
   challengeProgress: many(challengeProgress),
}));

export const challengeOptions = pgTable("challenge_options", {
   id: serial("id").primaryKey(),
   challengeId: integer("challenge_id").references(() => challenges.id, { 
   onDelete: "cascade" }).notNull(),
   text: text("text").notNull(),
   correct: boolean("correct").notNull(),
   imageSrc: text("image_src"),
   audioSrc: text("audio_src"),   
});

export const challengeOptionsRelations = relations(challengeOptions, ({ one }) => ({
   challenge: one(challenges, {
   fields: [challengeOptions.challengeId], 
   references: [challenges.id],
   }),
}));

export const challengeProgress = pgTable("challenge_progress", {
   id: serial("id").primaryKey(), 
   userId: text("user_id"),
   challengeId: integer("challenge_id").references(() => challenges.id, {
   onDelete: "cascade" }).notNull(),
   completed: boolean("completed").notNull().default(false),
});

export const challengeProgressRelations = relations (challengeProgress, ({
   one }) => ({
   challenge: one(challenges, {
   fields: [challengeProgress.challengeId], 
   references: [challenges.id],
    }),
}));

export const userProgress = pgTable("user_progress", {
   userId: text("user_id").primaryKey(),
   userName: text("user_name").notNull().default("user"),
   userImageSrc: text("user_image_src").notNull().default("learn.png"),
   activeCourseId: integer("active_course_id").references(() => courses.id, { onDelete: "cascade" }), 
   hearts: integer("hearts").notNull().default(5),
   points: integer("points").notNull().default(0),
   lastHeartsReset: timestamp("last_hearts_reset").notNull().defaultNow(), // Timestamp for last hearts reset
});

export const userProgressRelations = relations(userProgress, ({ one }) => ({
   activeCourse: one(courses, {
   fields: [userProgress.activeCourseId],
   references: [courses.id],
   }),
}));


export const userSubscription = pgTable("user_subscription", {
   id: serial("id").primaryKey(), 
   userId: text ("user_id").notNull() .unique (),
   stripeCustomerId: text("stripe_customer_id").notNull().unique(), stripeSubscriptionId: text("stripe_subscription_id").notNull().unique(), 
   stripePriceId: text("stripe_price_id").notNull(),
   stripeCurrentPeriodEnd: timestamp("stripe_current_period_end").notNull(),
});