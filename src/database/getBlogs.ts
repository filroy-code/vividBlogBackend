import { pool } from "./database.js";

export const getBlogs = async (page: number) => {
  try {
    const sqlText = `SELECT * FROM "blogs" WHERE "published_at" IS NOT NULL ORDER BY "published_at" DESC LIMIT 6 OFFSET $1`;
    const values = [page * 6]; // offsets the returned results based on page size, assuming 6 posts are displayed per page
    let queryResult = await pool.query(sqlText, values);
    return queryResult.rows;
  } catch (err) {
    console.log(err);
  }
};
