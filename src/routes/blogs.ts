import express from "express";
import { get_blogs, welcome } from "../controllers/blogsController.js";

export const blogsRouter = express.Router();

// welcome to backend server
blogsRouter.get("/", welcome);

// fetches blog posts based on pagination number
blogsRouter.get("/blogs/:pageNumber", get_blogs);