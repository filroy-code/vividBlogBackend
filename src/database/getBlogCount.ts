import { pool } from "./database.js";

export const getBlogCount = async () => {
  try {
    const sqlText = `SELECT COUNT("published_at") FROM "blogs"`;
    let queryResult = await pool.query(sqlText);
    return queryResult.rows;
  } catch (err) {
    console.log(err);
  }
};
