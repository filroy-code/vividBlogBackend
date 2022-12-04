import { pool } from "./database.js";

export const getSingleBlogPost = async (slug: string) => {
  try {
    const sqlText = `SELECT * FROM "blogs" WHERE "slug" = $1`;
    const values = [slug];
    let queryResult = await pool.query(sqlText, values);
    return queryResult.rows;
  } catch (err) {
    console.log(err);
  }
};
