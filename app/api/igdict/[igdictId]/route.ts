import { NextResponse } from "next/server"; 
import db from "@/db/drizzle";

import { isAdmin } from "@/lib/admin";
import {eq } from "drizzle-orm";
import { IgboDictionary } from "@/db/schema";


export const GET = async (
req: Request,
{ params }: { params: { igdictId: number }},
) => {
if (!isAdmin()) {
return new NextResponse("Unauthorized", { status: 403 }) ;
}

const data = await db.query.IgboDictionary.findFirst ({
where: eq(IgboDictionary.id, params.igdictId),
});

return NextResponse.json(data);
};

export const PUT = async (
    req: Request,
    { params }: { params: { igdictId: number } },
    ) => {
    if (!isAdmin()) {
    return new NextResponse("Unauthorized", { status: 403 });
    }
 
    const body = await req.json();
    const data = await db.update(IgboDictionary).set({
    ...body,
    }).where(eq(IgboDictionary.id, params.igdictId)).returning(); 

    return NextResponse.json(data[0]);
};

export const DELETE = async (
    req: Request,
    { params }: { params: { igdictId: number } },
    ) => {
    if (!isAdmin()) {
    return new NextResponse ("Unauthorized", { status: 403 });
    }

    const data = await db.delete(IgboDictionary)
    .where(eq(IgboDictionary.id, params.igdictId)).returning()

    return NextResponse.json(data[0]);
    };