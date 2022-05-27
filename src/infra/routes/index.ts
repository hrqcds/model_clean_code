import { Router } from "express";
import { ExampleRouter } from "./example";

// Configuração de rotas do sistema
const router = Router();
const baseURL = "/v1";

router.use(`${baseURL}/examples`, ExampleRouter);

export { router };
