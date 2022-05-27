import { Example } from "@prisma/client";

export interface IExampleRepository {
  Create: (description: string) => Promise<void>;
  ListAllExamples: () => Promise<Example[]>;
}
