import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding Blogs...");

  // Optional: clear existing blogs
  await prisma.blog.deleteMany();

  const blogs = [
    {
      title: "Why MBA Demand is Rising in the GCC in 2026",
      excerpt:
        "Explore why working professionals in UAE, Saudi Arabia, and Qatar are increasingly pursuing MBA programs.",
      content: `
        <h2>Growing Executive Education Demand</h2>
        <p>The GCC region is witnessing unprecedented demand for executive MBA programs...</p>
        <p>Countries like UAE and Saudi Arabia are investing heavily in leadership development.</p>
      `,
      coverImage: "/blogs/gcc-mba.jpg",
      region: "GCC",
      category: "MBA",
      published: true,
    },
    {
      title: "Top Career Opportunities After an MBA in the Middle East",
      excerpt:
        "From consulting to fintech, discover high-growth sectors for MBA graduates in the GCC.",
      content: `
        <h2>Fintech & Digital Economy</h2>
        <p>Dubai and Riyadh are becoming fintech hubs...</p>
      `,
      coverImage: "/blogs/gcc-career.jpg",
      region: "GCC",
      category: "Career",
      published: true,
    },
    {
      title: "DBA vs MBA: What GCC Professionals Should Choose",
      excerpt:
        "Understanding whether a DBA or MBA aligns better with executive goals in Gulf countries.",
      content: `
        <h2>Choosing the Right Degree</h2>
        <p>For senior professionals, DBA offers strategic research focus...</p>
      `,
      coverImage: "/blogs/gcc-dba.jpg",
      region: "GCC",
      category: "Executive Education",
      published: true,
    },
    {
      title: "Vision 2030 & The Future of Leadership in Saudi Arabia",
      excerpt:
        "How Saudi Vision 2030 is shaping executive education and leadership demand.",
      content: `
        <h2>Leadership Transformation</h2>
        <p>Vision 2030 is accelerating economic diversification...</p>
      `,
      coverImage: "/blogs/vision-2030.jpg",
      region: "GCC",
      category: "Leadership",
      published: true,
    },
    {
      title: "Executive Education Trends in UAE for 2026",
      excerpt:
        "Flexible, hybrid, and AI-integrated learning models are dominating UAE education.",
      content: `
        <h2>Hybrid Learning is the Future</h2>
        <p>UAE professionals prefer flexible executive formats...</p>
      `,
      coverImage: "/blogs/uae-education.jpg",
      region: "GCC",
      category: "Trends",
      published: true,
    },
  ];

  for (const blog of blogs) {
    await prisma.blog.create({
      data: {
        ...blog,
        slug: blog.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      },
    });
  }

  console.log("✅ GCC Blogs Seeded Successfully");
}

main()
  .catch((e) => {
    console.error("❌ Seed Error:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });