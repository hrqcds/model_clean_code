import { Example } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { IExampleRepository } from "../repository/i_example_repository";

@injectable()
class ExampleListService {
  constructor(
    @inject("PrismaExampleRepository")
    private repository: IExampleRepository,
  ) {}

  async execute(): Promise<Example[]> {
    const examples = await this.repository.ListAllExamples();

    return examples;
  }
}

export { ExampleListService };
