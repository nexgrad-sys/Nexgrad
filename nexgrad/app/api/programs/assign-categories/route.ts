import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const { programId, categoryIds } = await req.json()

    if (!programId || !categoryIds?.length) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 })
    }

    // ❌ remove old
    await prisma.programCategory.deleteMany({
      where: { programId }
    })

    // ✅ insert new
    const data = categoryIds.map((id: string) => ({
      programId,
      categoryId: id
    }))

    await prisma.programCategory.createMany({ data })

    return NextResponse.json({ success: true })

  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}