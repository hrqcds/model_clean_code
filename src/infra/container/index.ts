import { container } from "tsyringe";
import { PrismaExampleRepository } from "../../context/example/repository/implementations/prisma_example_repository";
import { IExampleRepository } from "../../context/example/repository/i_example_repository";

container.registerSingleton<IExampleRepository>(
  "PrismaExampleRepository",
  PrismaExampleRepository,
);
