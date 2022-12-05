import express from "express";
import {
  get_blogs,
  get_single_blog_post,
  welcome,
} from "../controllers/blogsController.js";

export const blogsRouter = express.Router();

// welcome to backend server
blogsRouter.get("/", welcome);

// fetches a group of blog posts based on pagination number
blogsRouter.get("/blogs/search/:pageNumber", get_blogs);

// fetches a single blog post based on URL slug
blogsRouter.get("/blogs/posts/:slug", get_single_blog_post);
