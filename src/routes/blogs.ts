import express from "express";
import {
  get_blogs,
  get_single_blog_post,
  welcome,
} from "../controllers/blogsController.js";

export const blogsRouter = express.Router();

// welcome to backend server
blogsRouter.get("/", welcome);

// fetches blog posts based on pagination number
blogsRouter.get("/blogs/search/:pageNumber", get_blogs);

// fetches single blog post
blogsRouter.get("/blogs/posts/:slug", get_single_blog_post);
