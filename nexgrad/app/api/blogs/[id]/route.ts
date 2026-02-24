import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: any) {
  const body = await req.json();

  const updated = await prisma.blog.update({
    where: { id: params.id },
    data: body,
  });

  return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: any) {
  await prisma.blog.delete({
    where: { id: params.id },
  });

  return NextResponse.json({ success: true });
}