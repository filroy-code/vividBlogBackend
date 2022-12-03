import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "userchallenge@vt-code-challenge",
  password: "userchallenge",
  host: "vt-code-challenge.postgres.database.azure.com",
  port: 5432,
  database: "challenge",
  ssl: true,
});

async function connectDatabase() {
  let queryResult = await pool.query(`SELECT * FROM "blogs" LIMIT 100`);

  console.log(queryResult.rows);
}

connectDatabase();
