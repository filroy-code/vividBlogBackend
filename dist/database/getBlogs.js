import { pool } from "./database.js";
export const getBlogs = async (page) => {
    try {
        const sqlText = `SELECT * FROM "blogs" ORDER BY "published_at" DESC LIMIT 6 OFFSET $1`;
        const values = [page];
        let queryResult = await pool.query(sqlText, values);
        console.log(queryResult.rows);
        return queryResult.rows;
    }
    catch (err) {
        console.log(err);
    }
};
getBlogs(60);
//# sourceMappingURL=getBlogs.js.map