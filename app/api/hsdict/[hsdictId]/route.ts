import { NextResponse } from "next/server"; 
import db from "@/db/drizzle";

import { isAdmin } from "@/lib/admin";
import {eq } from "drizzle-orm";
import { HausaDictionary } from "@/db/schema";


export const GET = async (
req: Request,
{ params }: { params: { hsdictId: number }},
) => {
if (!isAdmin()) {
return new NextResponse("Unauthorized", { status: 403 }) ;
}

const data = await db.query.HausaDictionary.findFirst ({
where: eq(HausaDictionary.id, params.hsdictId),
});

return NextResponse.json(data);
};

export const PUT = async (
    req: Request,
    { params }: { params: { hsdictId: number } },
    ) => {
    if (!isAdmin()) {
    return new NextResponse("Unauthorized", { status: 403 });
    }
 
    const body = await req.json();
    const data = await db.update(HausaDictionary).set({
    ...body,
    }).where(eq(HausaDictionary.id, params.hsdictId)).returning(); 

    return NextResponse.json(data[0]);
};

export const DELETE = async (
    req: Request,
    { params }: { params: { hsdictId: number } },
    ) => {
    if (!isAdmin()) {
    return new NextResponse ("Unauthorized", { status: 403 });
    }

    const data = await db.delete(HausaDictionary)
    .where(eq(HausaDictionary.id, params.hsdictId)).returning()

    return NextResponse.json(data[0]);
    };