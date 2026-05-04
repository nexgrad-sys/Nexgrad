import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "banners.json");

/* ENSURE FILE EXISTS */
function ensureFile() {
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, "[]");
  }
}

/* READ */
function readData() {
  ensureFile();
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data || "[]");
}

/* WRITE */
function writeData(data: any) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

/* GET */
export async function GET() {
  const data = readData();
  return NextResponse.json(data);
}

/* POST */
export async function POST(req: Request) {
  const body = await req.json();

  const banners = readData();

  const newBanner = {
    id: Date.now().toString(),
    title: body.title || "",
    description: body.description || "",
    image: body.image || "",
    status: body.status || "inactive",
  };

  banners.push(newBanner);
  writeData(banners);

  return NextResponse.json({ success: true, data: newBanner });
}

/* DELETE */
// app/api/banners/route.ts

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID is required" },
        { status: 400 }
      );
    }

    let banners = readData();

    const updated = banners.filter((b: any) => b.id !== id);

    writeData(updated);

    return NextResponse.json({
      success: true,
      message: "Banner deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Delete failed" },
      { status: 500 }
    );
  }
}