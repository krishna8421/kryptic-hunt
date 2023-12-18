import { PrismaClient } from "@prisma/client";
import questions from "../data/questions.json" assert { type: "json" };

const prisma = new PrismaClient();

export async function seed() {
  // await prisma.userSubmission.deleteMany({});
  // await prisma.user.deleteMany({});
  await prisma.question.deleteMany({});
  await prisma.question.createMany({
    data: questions,
  });
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
