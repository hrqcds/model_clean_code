import { Router } from "express";
import { ExampleCreateController } from "../../context/example/controller/example_create_controller";
import { ExampleListController } from "../../context/example/controller/example_list_controller";

const ExampleRouter = Router();

const exampleCreateController = new ExampleCreateController(); // Cria um novo exemplo
const exampleListController = new ExampleListController(); // Lista exemplos

ExampleRouter.get("/list", exampleListController.handle);
ExampleRouter.post("/create", exampleCreateController.handle);

export { ExampleRouter };
