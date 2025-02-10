import { NextResponse } from "next/server";
import { ilike } from "drizzle-orm";
import db from "@/db/drizzle";
import { YorubaDictionary } from "@/db/schema";

// ✅ GET: Fetch word
export async function GET(request: Request, { params }: { params: { word: string } }) {
  const { word } = params;
  const sanitizedWord = word.trim().toLowerCase();

  try {
    const result = await db
      .select()
      .from(YorubaDictionary)
      .where(ilike(YorubaDictionary.word, sanitizedWord));

    if (result.length === 0) {
      return NextResponse.json({ message: "Word not found" }, { status: 404 });
    }

    return NextResponse.json(result[0], {
      headers: { "Cache-Control": "no-store, no-cache, must-revalidate" },
    });
  } catch (error) {
    console.error("Database query error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

// ✅ DELETE: Remove word from database
export async function DELETE(request: Request, { params }: { params: { word: string } }) {
  const { word } = params;
  const sanitizedWord = word.trim().toLowerCase();

  try {
    const deletedWord = await db
      .delete(YorubaDictionary)
      .where(ilike(YorubaDictionary.word, sanitizedWord))
      .returning();

    if (deletedWord.length === 0) {
      return NextResponse.json({ message: "Word not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Word deleted successfully", deletedWord });
  } catch (error) {
    console.error("Database deletion error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}