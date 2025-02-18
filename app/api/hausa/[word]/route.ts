import { NextResponse } from "next/server";
import { ilike } from "drizzle-orm";
import db from "@/db/drizzle";
import { HausaDictionary } from "@/db/schema";

// ✅ GET: Fetch word
export async function GET(request: Request, { params }: { params: { word: string } }) {
  const { word } = params;
  const sanitizedWord = word.trim().toLowerCase();

  try {
    const result = await db
      .select()
      .from(HausaDictionary)
      .where(ilike(HausaDictionary.word, sanitizedWord));

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
      .delete(HausaDictionary)
      .where(ilike(HausaDictionary.word, sanitizedWord))
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