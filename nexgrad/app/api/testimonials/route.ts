import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "testimonials.json");

/* ensure file exists */
function ensureFile() {
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, "[]");
  }
}

/* read */
function readData() {
  ensureFile();
  return JSON.parse(fs.readFileSync(filePath, "utf-8") || "[]");
}

/* write */
function writeData(data: any) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

/* GET */
export async function GET() {
  const data = readData();
  return NextResponse.json(data);
}

/* POST (add) */
export async function POST(req: Request) {
  const body = await req.json();

  const list = readData();

  const newItem = {
    id: Date.now().toString(),
    name: body.name || "",
    role: body.role || "",
    message: body.message || "",
    image: body.image || "", // base64 or URL
    rating: body.rating || 5, // 1–5
    status: body.status || "active",
  };

  list.push(newItem);
  writeData(list);

  return NextResponse.json({ success: true, data: newItem });
}

/* DELETE */
export async function DELETE(req: Request) {
  const { id } = await req.json();

  let list = readData();
  list = list.filter((t: any) => t.id !== id);

  writeData(list);

  return NextResponse.json({ success: true });
}

/* TOGGLE STATUS */
export async function PUT(req: Request) {
  const { id } = await req.json();

  let list = readData();

  list = list.map((t: any) =>
    t.id === id
      ? { ...t, status: t.status === "active" ? "inactive" : "active" }
      : t
  );

  writeData(list);

  return NextResponse.json({ success: true });
}