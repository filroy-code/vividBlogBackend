import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { blogsRouter } from "./routes/blogs.js";

const app: Express = express();

const allowedOrigins = "*";
const options: cors.CorsOptions = {
  origin: allowedOrigins,
  methods: "GET",
};
app.use(cors(options));

app.use("/", blogsRouter);

app.listen(4321, () => {
  console.log("Running on 4321.");
  if (process.env.NODE_ENV === "production") {
    console.log("Prod");
  } else {
    console.log("Dev");
  }
});
