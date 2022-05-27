import { Example } from "@prisma/client";
import { randomUUID } from "crypto";
import { IExampleRepository } from "../i_example_repository";

const examples: Example[] = [
  {
    id: randomUUID(),
    description: "example 1",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: randomUUID(),
    description: "example 1",
    created_at: new Date(),
    updated_at: new Date(),
  },
];

class MemoryExampleRepository implements IExampleRepository {
  async Create(description: string): Promise<void> {
    examples.push({
      id: randomUUID(),
      description,
      created_at: new Date(),
      updated_at: new Date(),
    });
  }

  async ListAllExamples(): Promise<Example[]> {
    return examples;
  }
}

export { MemoryExampleRepository };
