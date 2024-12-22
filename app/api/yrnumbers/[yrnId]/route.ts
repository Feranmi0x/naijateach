import { NextResponse } from "next/server"; 
import db from "@/db/drizzle";

import { isAdmin } from "@/lib/admin";
import {eq } from "drizzle-orm";
import { yrnumbers } from "@/db/schema";


export const GET = async (
req: Request,
{ params }: { params: { yrnId: number }},
) => {
if (!isAdmin()) {
return new NextResponse("Unauthorized", { status: 403 }) ;
}

const data = await db.query.yrnumbers.findFirst ({
where: eq(yrnumbers.id, params.yrnId),
});

return NextResponse.json(data);
};

export const PUT = async (
    req: Request,
    { params }: { params: { yrnId: number } },
    ) => {
    if (!isAdmin()) {
    return new NextResponse("Unauthorized", { status: 403 });
    }
 
    const body = await req.json();
    const data = await db.update(yrnumbers).set({
    ...body,
    }).where(eq(yrnumbers.id, params.yrnId)).returning(); 

    return NextResponse.json(data[0]);
};

export const DELETE = async (
    req: Request,
    { params }: { params: { yrnId: number } },
    ) => {
    if (!isAdmin()) {
    return new NextResponse ("Unauthorized", { status: 403 });
    }

    const data = await db.delete(yrnumbers)
    .where(eq(yrnumbers.id, params.yrnId)).returning()

    return NextResponse.json(data[0]);
    };