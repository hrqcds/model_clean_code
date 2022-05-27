import { Request, Response } from "express";
import { container } from "tsyringe";
import { ExampleListService } from "../service/ExampleListService";

class ExampleListController {
  async handle(req: Request, res: Response): Promise<Response> {
    const service = container.resolve(ExampleListService);

    const examples = await service.execute();

    return res.status(200).json({ data: examples });
  }
}

export { ExampleListController };
