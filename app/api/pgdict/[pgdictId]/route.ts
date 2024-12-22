import { NextResponse } from "next/server"; 
import db from "@/db/drizzle";

import { isAdmin } from "@/lib/admin";
import {eq } from "drizzle-orm";
import { PidginDictionary } from "@/db/schema";


export const GET = async (
req: Request,
{ params }: { params: { pgdictId: number }},
) => {
if (!isAdmin()) {
return new NextResponse("Unauthorized", { status: 403 }) ;
}

const data = await db.query.PidginDictionary.findFirst ({
where: eq(PidginDictionary.id, params.pgdictId),
});

return NextResponse.json(data);
};

export const PUT = async (
    req: Request,
    { params }: { params: { pgdictId: number } },
    ) => {
    if (!isAdmin()) {
    return new NextResponse("Unauthorized", { status: 403 });
    }
 
    const body = await req.json();
    const data = await db.update(PidginDictionary).set({
    ...body,
    }).where(eq(PidginDictionary.id, params.pgdictId)).returning(); 

    return NextResponse.json(data[0]);
};

export const DELETE = async (
    req: Request,
    { params }: { params: { pgdictId: number } },
    ) => {
    if (!isAdmin()) {
    return new NextResponse ("Unauthorized", { status: 403 });
    }

    const data = await db.delete(PidginDictionary)
    .where(eq(PidginDictionary.id, params.pgdictId)).returning()

    return NextResponse.json(data[0]);
    };