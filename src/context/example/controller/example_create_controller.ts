import { Request, Response } from "express";
import { container } from "tsyringe";
import { ExampleCreateService } from "../service/example_create_service";

class ExampleCreateController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { description } = req.body;

    const service = container.resolve(ExampleCreateService);

    await service.execute(description);

    return res.status(201).send("success");
  }
}

export { ExampleCreateController };
