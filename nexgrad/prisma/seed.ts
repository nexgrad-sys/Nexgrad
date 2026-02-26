import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

async function main() {
  console.log("🌱 Seeding Full Course Database...");

  // Clear existing
  await prisma.program.deleteMany();
  await prisma.university.deleteMany();

  // Create University
  const university = await prisma.university.create({
    data: {
      name: "NexGrad Business School",
      country: "India",
      region: "Asia",
    },
  });

  const programs = [

    /* =====================
       DOCTORATE
    ===================== */
    { title: "DBA in Business Administration", degreeLevel: "DBA" },
    { title: "DBA in Leadership", degreeLevel: "DBA" },

    /* =====================
       MBA
    ===================== */
    { title: "MBA – General", degreeLevel: "MBA" },
    { title: "MBA in Marketing Management", degreeLevel: "MBA" },
    { title: "MBA in Digital Marketing", degreeLevel: "MBA" },
    { title: "MBA in Finance", degreeLevel: "MBA" },
    { title: "MBA in HR", degreeLevel: "MBA" },
    { title: "MBA in International Business", degreeLevel: "MBA" },
    { title: "MBA in Business Analytics", degreeLevel: "MBA" },
    { title: "MBA in Healthcare", degreeLevel: "MBA" },
    { title: "MBA in Hospital Administration", degreeLevel: "MBA" },
    { title: "MBA in Supply Chain", degreeLevel: "MBA" },
    { title: "MBA in Operations Management", degreeLevel: "MBA" },
    { title: "MBA in Information Technology", degreeLevel: "MBA" },
    { title: "MBA in Tourism & Hospitality", degreeLevel: "MBA" },

    /* =====================
       MCA
    ===================== */
    { title: "MCA – General", degreeLevel: "MCA" },
    { title: "MCA in Artificial Intelligence", degreeLevel: "MCA" },
    { title: "MCA in Machine Learning", degreeLevel: "MCA" },
    { title: "MCA in Data Science", degreeLevel: "MCA" },
    { title: "MCA in Cyber Security", degreeLevel: "MCA" },
    { title: "MCA in Blockchain Technology", degreeLevel: "MCA" },

    /* =====================
       MCOM
    ===================== */
    { title: "M.Com – General", degreeLevel: "MCOM" },

    /* =====================
       MED
    ===================== */
    { title: "M.Ed – General", degreeLevel: "MED" },

    /* =====================
       BBA
    ===================== */
    { title: "BBA – General", degreeLevel: "BBA" },
    { title: "BBA in Marketing Management", degreeLevel: "BBA" },
    { title: "BBA in Financial Management", degreeLevel: "BBA" },
    { title: "BBA in Human Resource Management", degreeLevel: "BBA" },
    { title: "BBA in Operations Management", degreeLevel: "BBA" },

    /* =====================
       BCA
    ===================== */
    { title: "BCA – General", degreeLevel: "BCA" },
    { title: "BCA in Artificial Intelligence & Machine Learning", degreeLevel: "BCA" },
    { title: "BCA in Cloud Computing", degreeLevel: "BCA" },
    { title: "BCA in Cyber Security", degreeLevel: "BCA" },
    { title: "BCA in Full Stack Web Development", degreeLevel: "BCA" },
    { title: "BCA in Data Science", degreeLevel: "BCA" },

    /* =====================
       BCOM
    ===================== */
    { title: "B.Com – General", degreeLevel: "BCOM" },
    { title: "B.Com in Accounting & Taxation", degreeLevel: "BCOM" },
    { title: "B.Com in Financial Management", degreeLevel: "BCOM" },
    { title: "B.Com in Marketing Management", degreeLevel: "BCOM" },
  ];

  for (const program of programs) {
    await prisma.program.create({
      data: {
        title: program.title,
        slug: slugify(program.title),
        description: `Professional ${program.title} program designed for career advancement.`,

        durationMonths: program.degreeLevel.startsWith("B") ? 36 : 24,
        tuition: program.degreeLevel.startsWith("B") ? 9000 : 15000,
        currency: "AED",

        degreeLevel: program.degreeLevel as any,

        // REQUIRED ENUMS (adjust if your enum differs)
        mode: "ONLINE",
        subjectArea: "GENERAL_MANAGEMENT",

        // Career Impact (sample metrics)
        careerAdvancement: 85,
        salaryIncrease: 40,
        employmentRate: 88,

        featured: false,
        trending: false,
        newLaunch: false,
        dualDegree: false,

        universityId: university.id,
      },
    });
  }


for (const programData of programs) {
  const createdProgram = await prisma.program.create({
    data: {
      title: programData.title,
      slug: slugify(programData.title),
      description: `Professional ${programData.title} program.`,
      durationMonths: 24,
      tuition: 15000,
      currency: "USD",
      degreeLevel: programData.degreeLevel as any,
      mode: "ONLINE",
      subjectArea: "GENERAL_MANAGEMENT",
      universityId: university.id,
    },
  });

  // Add default FAQs for each program
 await prisma.fAQ.createMany({
    data: [
      {
        question: "What are the admission requirements?",
        answer:
          "Applicants must hold a recognized undergraduate degree.",
        programId: createdProgram.id,
      },
      {
        question: "Can I study while working full-time?",
        answer:
          "Yes. The program is designed for working professionals.",
        programId: createdProgram.id,
      },
    ],
  });
}

  console.log("✅ ALL COURSES SEEDED SUCCESSFULLY 🚀");
}

main()
  .catch((e) => {
    console.error("❌ Seed Error:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });