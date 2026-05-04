import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const readFile = (file: string) => {
  const filePath = path.join(process.cwd(), "data", file);

  if (!fs.existsSync(filePath)) return [];

  return JSON.parse(fs.readFileSync(filePath, "utf-8") || "[]");
};

export async function GET() {
  try {
    const banners = readFile("banners.json");
    const faqs = readFile("faqs.json");
    const testimonials = readFile("testimonials.json");

    // Example dummy admissions (replace later)
    const admissions = readFile("admissions.json");

    return NextResponse.json({
      totalPrograms: 38, // static for now
      blogs: 12, // static
      admissions: admissions.length || 0,
      users: 8, // static

      recentBanners: banners.slice(-5).reverse(),
      recentFaqs: faqs.slice(-5).reverse(),
      recentTestimonials: testimonials.slice(-5).reverse(),

      chartData: [
        { name: "Jan", value: 20 },
        { name: "Feb", value: 40 },
        { name: "Mar", value: 35 },
        { name: "Apr", value: 60 },
      ],
    });
  } catch (e) {
    return NextResponse.json({ error: "Dashboard error" }, { status: 500 });
  }
}