import "reflect-metadata";
import { ExampleListService } from "../../context/example/service/example_list_service";
import { MemoryExampleRepository } from "../../context/example/repository/implementations/memory_example_repository";
import { ExampleCreateService } from "../../context/example/service/example_create_service";

// const SpyList = jest.fn();
// const SpyCreate = jest.fn();

const memory = new MemoryExampleRepository();
const exampleList = new ExampleListService(memory);
const exampleCreate = new ExampleCreateService(memory);

describe("Descrição do funcionamento de um teste", () => {
  it("Testando", async () => {
    const description_expect = "examplo test 3";

    await exampleCreate.execute(description_expect);

    const examples = await exampleList.execute();

    expect(examples).toHaveLength(3);
    expect(examples[0]).toHaveProperty("id");
    expect(examples[0]).toHaveProperty("description");
    expect(examples[0]).toHaveProperty("created_at");
    expect(examples[0]).toHaveProperty("updated_at");
    expect(examples[2].description).toEqual(description_expect);
  });
});
