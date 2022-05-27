import cors from "cors";
import "dotenv/config";
import express from "express";
import "express-async-errors";
import morgan from "morgan";
import ServeConfig from "../../../config/enviroment_server";
import { ErrorMiddleware } from "../../middleware/error_middleware";
import { router } from "../routes";

const serve = express();
const { port } = ServeConfig();

serve.use(cors());
serve.use(morgan("dev"));
serve.use(express.json());
serve.use(express.urlencoded({ extended: true }));
serve.use(router);
serve.use(ErrorMiddleware);

serve.listen(port, () => {
  console.log(`Server is running in port: ${port}`);
  console.log(`Link: http://localhost:${port}`);
  console.log(`Link: http://127.0.0.1:${port}`);
});
