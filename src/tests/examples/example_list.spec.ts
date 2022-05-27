import "reflect-metadata";
import { ExampleListService } from "../../context/example/service/example_list_service";
import { MemoryExampleRepository } from "../../context/example/repository/implementations/memory_example_repository";

// const SpyList = jest.fn();
// const SpyCreate = jest.fn();

const memory = new MemoryExampleRepository();
const exampleList = new ExampleListService(memory);

describe("Descrição do funcionamento de um teste", () => {
  it("Testando", async () => {
    const examples = await exampleList.execute();
    expect(examples).toHaveLength(2);
  });
});
