import { inject, injectable } from "tsyringe";
import { ServerError } from "../../../infra/middleware/error_middleware";

import { IExampleRepository } from "../repository/i_example_repository";

@injectable()
class ExampleCreateService {
  constructor(
    @inject("PrismaExampleRepository")
    private repository: IExampleRepository,
  ) {}

  async execute(description: string) {
    if (!description) {
      throw new ServerError("invalid description!");
    }

    await this.repository.Create(description);
  }
}

export { ExampleCreateService };
