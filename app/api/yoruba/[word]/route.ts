// app/api/word/[word]/route.ts

 // Adjust the import as per your project structure
 import { NextResponse } from 'next/server';
 import { ilike } from 'drizzle-orm';  // Assuming you are using Drizzle ORM
 import db from '@/db/drizzle';
 import { YorubaDictionary } from '@/db/schema';
 
 export async function GET(request: Request, { params }: { params: { word: string } }) {
   const { word } = params;
 
   const sanitizedWord = word.trim().toLowerCase();
 
   try {
     // Query the database for the word
     const result = await db
       .select()
       .from(YorubaDictionary)
       .where(ilike(YorubaDictionary.word, sanitizedWord));  // Use Drizzle ORM's `eq` to match the word
 
     if (result.length === 0) {
       // Return a 404 response if the word is not found
       return NextResponse.json({ message: 'Word not found' }, { status: 404 });
     }
 
     // Return the result as JSON if the word is found
     return NextResponse.json(result[0]);
   } catch (error) {
     // Handle any errors during the query execution
     console.error('Database query error:', error);
     return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
   }
 }