import { getBlogs } from "../database/getBlogs.js";
import { Request, Response } from "express";

export const welcome = function (req: Request, res: Response) {
  res.json({ message: "Hello and welcome to the backend server." });
};

// takes in the pagination number and sends appropriate blog posts
export const get_blogs = async function (req: Request, res: Response) {
  const pageNumber = parseInt(req.params.pageNumber);

  try {
    const blogList = await getBlogs(pageNumber);
    res.status(200).json({ blogList });
  } catch (err) {
    res.status(500).send("There was an error");
    console.log(err);
  }
};
