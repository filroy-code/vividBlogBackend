import fs from "fs";
import express, { Express, Request, Response } from "express";

import { blogsRouter } from "./routes/blogs.js";

const app: Express = express();

app.use("/", blogsRouter);

app.listen(4321, () => {
  console.log("Running on 4321.");
});
