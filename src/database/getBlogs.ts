import { pool } from "./database.js";

export const getBlogs = async (page: number) => {
  try {
    const sqlText = `SELECT * FROM "blogs" WHERE "published_at" IS NOT NULL ORDER BY "published_at" DESC LIMIT 6 OFFSET $1`;
    const values = [page];
    let queryResult = await pool.query(sqlText, values);
    console.log(queryResult.rows);
    return queryResult.rows;
  } catch (err) {
    console.log(err);
  }
};
