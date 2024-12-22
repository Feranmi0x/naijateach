import { NextResponse } from "next/server"; 
import db from "@/db/drizzle";

import { isAdmin } from "@/lib/admin";
import {eq } from "drizzle-orm";
import { YorubaDictionary } from "@/db/schema";


export const GET = async (
req: Request,
{ params }: { params: { dictId: number }},
) => {
if (!isAdmin()) {
return new NextResponse("Unauthorized", { status: 403 }) ;
}

const data = await db.query.YorubaDictionary.findFirst ({
where: eq(YorubaDictionary.id, params.dictId),
});

return NextResponse.json(data);
};

export const PUT = async (
    req: Request,
    { params }: { params: { dictId: number } },
    ) => {
    if (!isAdmin()) {
    return new NextResponse("Unauthorized", { status: 403 });
    }
 
    const body = await req.json();
    const data = await db.update(YorubaDictionary).set({
    ...body,
    }).where(eq(YorubaDictionary.id, params.dictId)).returning(); 

    return NextResponse.json(data[0]);
};

export const DELETE = async (
    req: Request,
    { params }: { params: { dictId: number } },
    ) => {
    if (!isAdmin()) {
    return new NextResponse ("Unauthorized", { status: 403 });
    }

    const data = await db.delete(YorubaDictionary)
    .where(eq(YorubaDictionary.id, params.dictId)).returning()

    return NextResponse.json(data[0]);
    };