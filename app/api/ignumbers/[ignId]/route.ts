import { NextResponse } from "next/server"; 
import db from "@/db/drizzle";

import { isAdmin } from "@/lib/admin";
import {eq } from "drizzle-orm";
import { ignumbers } from "@/db/schema";


export const GET = async (
req: Request,
{ params }: { params: { ignId: number }},
) => {
if (!isAdmin()) {
return new NextResponse("Unauthorized", { status: 403 }) ;
}

const data = await db.query.ignumbers.findFirst ({
where: eq(ignumbers.id, params.ignId),
});

return NextResponse.json(data);
};

export const PUT = async (
    req: Request,
    { params }: { params: { ignId: number } },
    ) => {
    if (!isAdmin()) {
    return new NextResponse("Unauthorized", { status: 403 });
    }
 
    const body = await req.json();
    const data = await db.update(ignumbers).set({
    ...body,
    }).where(eq(ignumbers.id, params.ignId)).returning(); 

    return NextResponse.json(data[0]);
};

export const DELETE = async (
    req: Request,
    { params }: { params: { ignId: number } },
    ) => {
    if (!isAdmin()) {
    return new NextResponse ("Unauthorized", { status: 403 });
    }

    const data = await db.delete(ignumbers)
    .where(eq(ignumbers.id, params.ignId)).returning()

    return NextResponse.json(data[0]);
    };