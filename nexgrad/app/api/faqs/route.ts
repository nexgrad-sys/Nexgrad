import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "faqs.json");

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

/* GET all FAQs */
export async function GET() {
  const data = readData();
  return NextResponse.json(data);
}

/* ADD FAQ */
export async function POST(req: Request) {
  const body = await req.json();

  const faqs = readData();

  const newFaq = {
    id: Date.now().toString(),
    question: body.question || "",
    answer: body.answer || "",
    status: body.status || "active",
  };

  faqs.push(newFaq);
  writeData(faqs);

  return NextResponse.json({ success: true, data: newFaq });
}

/* DELETE FAQ */
export async function DELETE(req: Request) {
  const { id } = await req.json();

  let faqs = readData();

  faqs = faqs.filter((f: any) => f.id !== id);

  writeData(faqs);

  return NextResponse.json({ success: true });
}

/* TOGGLE STATUS */
export async function PUT(req: Request) {
  const { id } = await req.json();

  let faqs = readData();

  faqs = faqs.map((f: any) =>
    f.id === id
      ? { ...f, status: f.status === "active" ? "inactive" : "active" }
      : f
  );

  writeData(faqs);

  return NextResponse.json({ success: true });
}