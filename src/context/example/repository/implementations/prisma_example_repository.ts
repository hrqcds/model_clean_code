import { Example } from "@prisma/client";
import { IExampleRepository } from "../i_example_repository";
import { prisma_db } from "../../../../infra/database/prisma";

class PrismaExampleRepository implements IExampleRepository {
  async Create(description: string): Promise<void> {
    await prisma_db.example.create({ data: { description } });
  }

  async ListAllExamples(): Promise<Example[]> {
    // const examples = await prisma_db.example.findMany({
    //   orderBy: { created_at: "asc" },
    // });

    const query = await prisma_db.$queryRaw<Example[]>`SELECT * FROM examples`;

    return query;
  }
}

export { PrismaExampleRepository };
