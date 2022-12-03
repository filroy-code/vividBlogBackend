import fs from "fs";
import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Typescript works with node!");
});

app.listen(4321, () => {
  console.log("Running on 4321.");
});
