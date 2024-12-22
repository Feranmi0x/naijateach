import { NextResponse } from "next/server"; 
import db from "@/db/drizzle";

import { isAdmin } from "@/lib/admin";
import {eq } from "drizzle-orm";
import { numbers } from "@/db/schema";


export const GET = async (
req: Request,
{ params }: { params: { hsnId: number }},
) => {
if (!isAdmin()) {
return new NextResponse("Unauthorized", { status: 403 }) ;
}

const data = await db.query.numbers.findFirst ({
where: eq(numbers.id, params.hsnId),
});

return NextResponse.json(data);
};

export const PUT = async (
    req: Request,
    { params }: { params: { hsnId: number } },
    ) => {
    if (!isAdmin()) {
    return new NextResponse("Unauthorized", { status: 403 });
    }
 
    const body = await req.json();
    const data = await db.update(numbers).set({
    ...body,
    }).where(eq(numbers.id, params.hsnId)).returning(); 

    return NextResponse.json(data[0]);
};

export const DELETE = async (
    req: Request,
    { params }: { params: { hsnId: number } },
    ) => {
    if (!isAdmin()) {
    return new NextResponse ("Unauthorized", { status: 403 });
    }

    const data = await db.delete(numbers)
    .where(eq(numbers.id, params.hsnId)).returning()

    return NextResponse.json(data[0]);
    };