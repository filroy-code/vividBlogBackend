import fs from "fs";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import { blogsRouter } from "./routes/blogs.js";

const app: Express = express();

const allowedOrigins = "http://localhost:3000";
const options: cors.CorsOptions = {
  origin: allowedOrigins,
  methods: "GET",
};
app.use(cors(options));

app.use("/", blogsRouter);

app.listen(4321, () => {
  console.log("Running on 4321.");
});
