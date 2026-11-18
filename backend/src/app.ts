import express, { type Express } from "express";
import { router } from "./routes/index.ts";

// App is built without listening so tests can mount it on a random port.
export function createApp(): Express {
  const app = express();

  app.disable("x-powered-by");
  app.use(express.json());

  app.use(router);

  return app;
}
