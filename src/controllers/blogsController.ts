import { getBlogs } from "../database/getBlogs.js";
import { getSingleBlogPost } from "../database/getSingleBlogPost.js";
import { getBlogCount } from "../database/getBlogCount.js";
import { Request, Response } from "express";

export const welcome = function (req: Request, res: Response) {
  res.json({ message: "Hello and welcome to the backend server." });
};

// takes in the pagination number and sends appropriate blog posts
export const get_blogs = async function (req: Request, res: Response) {
  const pageNumber = parseInt(req.params.pageNumber);

  try {
    const blogList = await getBlogs(pageNumber);
    const blogCount = await getBlogCount();
    res.status(200).json({ blogList, blogCount });
  } catch (err) {
    res.status(500).send("There was an error");
    console.log(err);
  }
};

// retrieves a single blog post based on URL slug
export const get_single_blog_post = async function (
  req: Request,
  res: Response
) {
  try {
    const blogPost = await getSingleBlogPost(req.params.slug);
    res.status(200).json({ blogPost });
  } catch (err) {
    res.status(500).send("There was an error");
    console.log(err);
  }
};
