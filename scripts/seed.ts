const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.Category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Music" },
        { name: "Fitness" },
        { name: "Photography" },
        { name: "Accounting" },
        { name: "Engineering" },
        { name: "Agriculture" },
        { name: "Procurement" },
        { name: "Filming" },
        { name: "Tv/Radio Anchor" },
      ],
    });
    console.log("Success");
  } catch (error) {
    console.log("Error seeding from the database categories", error);
  } finally {
    await db.$disconnect();
  }
}

main();
